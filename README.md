# Cal.com MCP Server

> ⚠️ **Warning**: This project is in active development and subject to rapid changes. Features and APIs may be modified frequently. If you have feedback or workflows you'd like to see supported, please get in touch.

Model Context Protocol (MCP) is a [standardized protocol](https://modelcontextprotocol.io/introduction) for managing context between large language models (LLMs) and external systems or services like Cal.com.

Cal.com's MCP server allows you to use any MCP Client (Claude Desktop, Cursor, Windsurf and many others) to use natural language and your LLM to accomplish things with Cal.com.

## Setup

### Requirements

- Node.js >= v18.0.0
- MCP Client
- Cal.com API Key - get this from your Cal.com account settings

> ⚠️ **Security Warning**: Never share or commit your Cal.com API Key. If exposed, immediately rotate it in your Cal.com account.

### Installation

Installation will vary depending on your client, but in most cases you'll need to add the JSON below to your MCP config file. Be sure to insert your Cal.com API token.

```json
{
  "mcpServers": {
    "cal": {
      "command": "npx",
      "args": [
        "@buildwithlayer/cal-mcp-demo@latest",
        "--all-tools" // Optional (can also use -a)
      ],
      "env": {
        "CAL_API_KEY": "YOUR CAL API KEY"
      }
    }
  }
}
```

## Features

This project supports tools for **all** Cal.com API endpoints by setting the `--all-tools` flags`. It also supports some prompt **workflows** tested in Cursor which allow you to quickstart Cal.com applications.

### Supported Tools

By default, the following core Cal.com API tools are enabled:

- `getBooking`
- `getBookings`
- `createBooking`
- `rescheduleBooking`
- `cancelBooking`
- `getEventTypes`
- `getEventTypeById`
- `updateEventType`
- `deleteEventType`

To access additional tools:

1. Add the `--all-tools` or `-a` to args in your MCP configuration
2. Run the MCP server
3. Use your MCP client's tool discovery feature
