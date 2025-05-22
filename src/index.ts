#!/usr/bin/env node
import { addAPITools } from "@buildwithlayer/openapi-to-tools/mcp.js";
import type { APITool } from "@buildwithlayer/openapi-to-tools/types.js";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { config } from "./config.js";
import { tools } from "./tools.js";

const server = new McpServer(
  {
    name: "cal-com",
    version: "1.0.0",
  },
  {
    capabilities: {
      tools: {},
    },
  },
);

// Filters all clerk MCP tools to selected few most likely for MCP use
let workingTools: APITool[] = tools.map((tool: APITool) => ({
  ...tool,
  name: tool.name.split("_").slice(-1)[0],
}));
if (!(process.argv.includes("--all-tools") || process.argv.includes("-a"))) {
  workingTools = workingTools.filter((tool) =>
    config.defaultTools.includes(tool.name),
  );
}

addAPITools(server, workingTools as APITool[], {
  Authorization: process.env.CAL_API_KEY,
});

const transport = new StdioServerTransport();
await server.connect(transport);
