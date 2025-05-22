import { APITool } from "@buildwithlayer/openapi-to-tools/types.js";

export const tools: APITool[] = [
  {
    description: "Get a provider",
    method: "get",
    name: "CalProviderController_verifyClientId",
    url: "https://api.cal.com/v2/provider/{clientId}",
    params: [
      {
        in: "path",
        name: "clientId",
        required: true,
        explode: false,
        schema: {
          type: "string",
        },
        style: "simple",
      },
    ],
    defs: {},
  },
  {
    description: "Verify an access token",
    method: "get",
    name: "CalProviderController_verifyAccessToken",
    url: "https://api.cal.com/v2/provider/{clientId}/access-token",
    params: [
      {
        in: "path",
        name: "clientId",
        required: true,
        explode: false,
        schema: {
          type: "string",
        },
        style: "simple",
      },
    ],
    defs: {},
  },
  {
    description: "Get all managed users",
    method: "get",
    name: "OAuthClientUsersController_getManagedUsers",
    url: "https://api.cal.com/v2/oauth-clients/{clientId}/users",
    params: [
      {
        in: "path",
        name: "clientId",
        required: true,
        explode: false,
        schema: {
          type: "string",
        },
        style: "simple",
      },
      {
        description: "The number of items to return",
        in: "query",
        name: "limit",
        required: false,
        example: 10,
        explode: true,
        schema: {
          type: "number",
        },
        style: "form",
      },
      {
        description: "The number of items to skip",
        in: "query",
        name: "offset",
        required: false,
        example: 0,
        explode: true,
        schema: {
          type: "number",
        },
        style: "form",
      },
      {
        description:
          "Filter managed users by email. If you want to filter by multiple emails, separate them with a comma.",
        in: "query",
        name: "emails",
        required: false,
        example: "?emails=email1@example.com,email2@example.com",
        explode: true,
        schema: {
          type: "array",
          items: {
            type: "string",
          },
        },
        style: "form",
      },
    ],
    defs: {},
  },
  {
    description: "Create a managed user",
    method: "post",
    name: "OAuthClientUsersController_createUser",
    url: "https://api.cal.com/v2/oauth-clients/{clientId}/users",
    params: [
      {
        in: "path",
        name: "clientId",
        required: true,
        explode: false,
        schema: {
          type: "string",
        },
        style: "simple",
      },
    ],
    body: {
      $ref: "#/$defs/CreateManagedUserInput",
    },
    contentType: "application/json",
    defs: {
      CreateManagedUserInput: {
        required: ["email", "name"],
        type: "object",
        properties: {
          email: {
            examples: ["alice@example.com"],
            type: "string",
          },
          name: {
            description: "Managed user's name is used in emails",
            examples: ["Alice Smith"],
            type: "string",
          },
          timeFormat: {
            description: "Must be a number 12 or 24",
            enum: [12, 24],
            examples: [12],
            type: "number",
          },
          weekStart: {
            enum: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            examples: ["Monday"],
            type: "string",
          },
          timeZone: {
            description:
              "Timezone is used to create user's default schedule from Monday to Friday from 9AM to 5PM. If it is not passed then user does not have\n      a default schedule and it must be created manually via the /schedules endpoint. Until the schedule is created, the user can't access availability atom to set his / her availability nor booked.\n      It will default to Europe/London if not passed.",
            examples: ["America/New_York"],
            type: "string",
          },
          locale: {
            enum: [
              "ar",
              "ca",
              "de",
              "es",
              "eu",
              "he",
              "id",
              "ja",
              "lv",
              "pl",
              "ro",
              "sr",
              "th",
              "vi",
              "az",
              "cs",
              "el",
              "es-419",
              "fi",
              "hr",
              "it",
              "km",
              "nl",
              "pt",
              "ru",
              "sv",
              "tr",
              "zh-CN",
              "bg",
              "da",
              "en",
              "et",
              "fr",
              "hu",
              "iw",
              "ko",
              "no",
              "pt-BR",
              "sk",
              "ta",
              "uk",
              "zh-TW",
            ],
            examples: ["en"],
            type: "string",
          },
          avatarUrl: {
            description: "URL of the user's avatar image",
            examples: [
              "https://cal.com/api/avatar/2b735186-b01b-46d3-87da-019b8f61776b.png",
            ],
            type: "string",
          },
        },
      },
    },
  },
  {
    description: "Get a managed user",
    method: "get",
    name: "OAuthClientUsersController_getUserById",
    url: "https://api.cal.com/v2/oauth-clients/{clientId}/users/{userId}",
    params: [
      {
        in: "path",
        name: "clientId",
        required: true,
        explode: false,
        schema: {
          type: "string",
        },
        style: "simple",
      },
      {
        in: "path",
        name: "userId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
    ],
    defs: {},
  },
  {
    description: "Delete a managed user",
    method: "delete",
    name: "OAuthClientUsersController_deleteUser",
    url: "https://api.cal.com/v2/oauth-clients/{clientId}/users/{userId}",
    params: [
      {
        in: "path",
        name: "clientId",
        required: true,
        explode: false,
        schema: {
          type: "string",
        },
        style: "simple",
      },
      {
        in: "path",
        name: "userId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
    ],
    defs: {},
  },
  {
    description: "Update a managed user",
    method: "patch",
    name: "OAuthClientUsersController_updateUser",
    url: "https://api.cal.com/v2/oauth-clients/{clientId}/users/{userId}",
    params: [
      {
        in: "path",
        name: "clientId",
        required: true,
        explode: false,
        schema: {
          type: "string",
        },
        style: "simple",
      },
      {
        in: "path",
        name: "userId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
    ],
    body: {
      $ref: "#/$defs/UpdateManagedUserInput",
    },
    contentType: "application/json",
    defs: {
      UpdateManagedUserInput: {
        type: "object",
        properties: {
          email: {
            type: "string",
          },
          name: {
            type: "string",
          },
          timeFormat: {
            description: "Must be 12 or 24",
            enum: [12, 24],
            examples: [12],
            type: "number",
          },
          defaultScheduleId: {
            type: "number",
          },
          weekStart: {
            enum: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            examples: ["Monday"],
            type: "string",
          },
          timeZone: {
            type: "string",
          },
          locale: {
            enum: [
              "ar",
              "ca",
              "de",
              "es",
              "eu",
              "he",
              "id",
              "ja",
              "lv",
              "pl",
              "ro",
              "sr",
              "th",
              "vi",
              "az",
              "cs",
              "el",
              "es-419",
              "fi",
              "hr",
              "it",
              "km",
              "nl",
              "pt",
              "ru",
              "sv",
              "tr",
              "zh-CN",
              "bg",
              "da",
              "en",
              "et",
              "fr",
              "hu",
              "iw",
              "ko",
              "no",
              "pt-BR",
              "sk",
              "ta",
              "uk",
              "zh-TW",
            ],
            examples: ["en"],
            type: "string",
          },
          avatarUrl: {
            description: "URL of the user's avatar image",
            examples: [
              "https://cal.com/api/avatar/2b735186-b01b-46d3-87da-019b8f61776b.png",
            ],
            type: "string",
          },
        },
      },
    },
  },
  {
    description:
      "If you have lost managed user access or refresh token, then you can get new ones by using OAuth credentials.\n    Each access token is valid for 60 minutes and each refresh token for 1 year. Make sure to store them later in your database, for example, by updating the User model to have `calAccessToken` and `calRefreshToken` columns.",
    method: "post",
    name: "OAuthClientUsersController_forceRefresh",
    url: "https://api.cal.com/v2/oauth-clients/{clientId}/users/{userId}/force-refresh",
    params: [
      {
        in: "path",
        name: "userId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
      {
        in: "path",
        name: "clientId",
        required: true,
        explode: false,
        schema: {
          type: "string",
        },
        style: "simple",
      },
    ],
    defs: {},
  },
  {
    description:
      "If managed user access token is expired then get a new one using this endpoint. Each access token is valid for 60 minutes and \n    each refresh token for 1 year. Make sure to store them later in your database, for example, by updating the User model to have `calAccessToken` and `calRefreshToken` columns.",
    method: "post",
    name: "OAuthFlowController_refreshTokens",
    url: "https://api.cal.com/v2/oauth/{clientId}/refresh",
    params: [
      {
        in: "path",
        name: "clientId",
        required: true,
        explode: false,
        schema: {
          type: "string",
        },
        style: "simple",
      },
      {
        description: "OAuth client secret key.",
        in: "header",
        name: "x-cal-secret-key",
        required: true,
        explode: false,
        schema: {
          type: "string",
        },
        style: "simple",
      },
    ],
    body: {
      $ref: "#/$defs/RefreshTokenInput",
    },
    contentType: "application/json",
    defs: {
      RefreshTokenInput: {
        required: ["refreshToken"],
        type: "object",
        properties: {
          refreshToken: {
            description: "Managed user's refresh token.",
            type: "string",
          },
        },
      },
    },
  },
  {
    description: "Get all webhooks",
    method: "get",
    name: "OAuthClientWebhooksController_getOAuthClientWebhooks",
    url: "https://api.cal.com/v2/oauth-clients/{clientId}/webhooks",
    params: [
      {
        in: "path",
        name: "clientId",
        required: true,
        explode: false,
        schema: {
          type: "string",
        },
        style: "simple",
      },
      {
        description: "The number of items to return",
        in: "query",
        name: "take",
        required: false,
        example: 10,
        explode: true,
        schema: {
          type: "number",
        },
        style: "form",
      },
      {
        description: "The number of items to skip",
        in: "query",
        name: "skip",
        required: false,
        example: 0,
        explode: true,
        schema: {
          type: "number",
        },
        style: "form",
      },
    ],
    defs: {},
  },
  {
    description: "Create a webhook",
    method: "post",
    name: "OAuthClientWebhooksController_createOAuthClientWebhook",
    url: "https://api.cal.com/v2/oauth-clients/{clientId}/webhooks",
    params: [
      {
        in: "path",
        name: "clientId",
        required: true,
        explode: false,
        schema: {
          type: "string",
        },
        style: "simple",
      },
    ],
    body: {
      $ref: "#/$defs/CreateWebhookInputDto",
    },
    contentType: "application/json",
    defs: {
      CreateWebhookInputDto: {
        required: ["active", "subscriberUrl", "triggers"],
        type: "object",
        properties: {
          payloadTemplate: {
            description:
              "The template of the payload that will be sent to the subscriberUrl, check cal.com/docs/core-features/webhooks for more information",
            examples: [
              '{"content":"A new event has been scheduled","type":"{{type}}","name":"{{title}}","organizer":"{{organizer.name}}","booker":"{{attendees.0.name}}"}',
            ],
            type: "string",
          },
          active: {
            type: "boolean",
          },
          subscriberUrl: {
            type: "string",
          },
          triggers: {
            enum: [
              "BOOKING_CREATED",
              "BOOKING_PAYMENT_INITIATED",
              "BOOKING_PAID",
              "BOOKING_RESCHEDULED",
              "BOOKING_REQUESTED",
              "BOOKING_CANCELLED",
              "BOOKING_REJECTED",
              "BOOKING_NO_SHOW_UPDATED",
              "FORM_SUBMITTED",
              "MEETING_ENDED",
              "MEETING_STARTED",
              "RECORDING_READY",
              "INSTANT_MEETING",
              "RECORDING_TRANSCRIPTION_GENERATED",
              "OOO_CREATED",
              "AFTER_HOSTS_CAL_VIDEO_NO_SHOW",
              "AFTER_GUESTS_CAL_VIDEO_NO_SHOW",
              "FORM_SUBMITTED_NO_EVENT",
            ],
            examples: [
              [
                "BOOKING_CREATED",
                "BOOKING_RESCHEDULED",
                "BOOKING_CANCELLED",
                "BOOKING_CONFIRMED",
                "BOOKING_REJECTED",
                "BOOKING_COMPLETED",
                "BOOKING_NO_SHOW",
                "BOOKING_REOPENED",
              ],
            ],
            type: "string",
          },
          secret: {
            type: "string",
          },
        },
      },
    },
  },
  {
    description: "Delete all webhooks",
    method: "delete",
    name: "OAuthClientWebhooksController_deleteAllOAuthClientWebhooks",
    url: "https://api.cal.com/v2/oauth-clients/{clientId}/webhooks",
    params: [
      {
        in: "path",
        name: "clientId",
        required: true,
        explode: false,
        schema: {
          type: "string",
        },
        style: "simple",
      },
    ],
    defs: {},
  },
  {
    description: "Get a webhook",
    method: "get",
    name: "OAuthClientWebhooksController_getOAuthClientWebhook",
    url: "https://api.cal.com/v2/oauth-clients/{clientId}/webhooks/{webhookId}",
    defs: {},
  },
  {
    description: "Delete a webhook",
    method: "delete",
    name: "OAuthClientWebhooksController_deleteOAuthClientWebhook",
    url: "https://api.cal.com/v2/oauth-clients/{clientId}/webhooks/{webhookId}",
    defs: {},
  },
  {
    description: "Update a webhook",
    method: "patch",
    name: "OAuthClientWebhooksController_updateOAuthClientWebhook",
    url: "https://api.cal.com/v2/oauth-clients/{clientId}/webhooks/{webhookId}",
    params: [
      {
        in: "path",
        name: "webhookId",
        required: true,
        explode: false,
        schema: {
          type: "string",
        },
        style: "simple",
      },
    ],
    body: {
      $ref: "#/$defs/UpdateWebhookInputDto",
    },
    contentType: "application/json",
    defs: {
      UpdateWebhookInputDto: {
        type: "object",
        properties: {
          payloadTemplate: {
            description:
              "The template of the payload that will be sent to the subscriberUrl, check cal.com/docs/core-features/webhooks for more information",
            examples: [
              '{"content":"A new event has been scheduled","type":"{{type}}","name":"{{title}}","organizer":"{{organizer.name}}","booker":"{{attendees.0.name}}"}',
            ],
            type: "string",
          },
          active: {
            type: "boolean",
          },
          subscriberUrl: {
            type: "string",
          },
          triggers: {
            enum: [
              "BOOKING_CREATED",
              "BOOKING_PAYMENT_INITIATED",
              "BOOKING_PAID",
              "BOOKING_RESCHEDULED",
              "BOOKING_REQUESTED",
              "BOOKING_CANCELLED",
              "BOOKING_REJECTED",
              "BOOKING_NO_SHOW_UPDATED",
              "FORM_SUBMITTED",
              "MEETING_ENDED",
              "MEETING_STARTED",
              "RECORDING_READY",
              "INSTANT_MEETING",
              "RECORDING_TRANSCRIPTION_GENERATED",
              "OOO_CREATED",
              "AFTER_HOSTS_CAL_VIDEO_NO_SHOW",
              "AFTER_GUESTS_CAL_VIDEO_NO_SHOW",
              "FORM_SUBMITTED_NO_EVENT",
            ],
            examples: [
              [
                "BOOKING_CREATED",
                "BOOKING_RESCHEDULED",
                "BOOKING_CANCELLED",
                "BOOKING_CONFIRMED",
                "BOOKING_REJECTED",
                "BOOKING_COMPLETED",
                "BOOKING_NO_SHOW",
                "BOOKING_REOPENED",
              ],
            ],
            type: "string",
          },
          secret: {
            type: "string",
          },
        },
      },
    },
  },
  {
    description: "Get all attributes",
    method: "get",
    name: "OrganizationsAttributesController_getOrganizationAttributes",
    url: "https://api.cal.com/v2/organizations/{orgId}/attributes",
    params: [
      {
        in: "path",
        name: "orgId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
      {
        description: "The number of items to return",
        in: "query",
        name: "take",
        required: false,
        example: 10,
        explode: true,
        schema: {
          type: "number",
        },
        style: "form",
      },
      {
        description: "The number of items to skip",
        in: "query",
        name: "skip",
        required: false,
        example: 0,
        explode: true,
        schema: {
          type: "number",
        },
        style: "form",
      },
    ],
    defs: {},
  },
  {
    description: "Create an attribute",
    method: "post",
    name: "OrganizationsAttributesController_createOrganizationAttribute",
    url: "https://api.cal.com/v2/organizations/{orgId}/attributes",
    params: [
      {
        in: "path",
        name: "orgId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
    ],
    body: {
      $ref: "#/$defs/CreateOrganizationAttributeInput",
    },
    contentType: "application/json",
    defs: {
      CreateOrganizationAttributeInput: {
        required: ["name", "slug", "type", "options"],
        type: "object",
        properties: {
          name: {
            type: "string",
          },
          slug: {
            type: "string",
          },
          type: {
            enum: ["TEXT", "NUMBER", "SINGLE_SELECT", "MULTI_SELECT"],
            type: "string",
          },
          options: {
            type: "array",
            items: {
              $ref: "#/$defs/CreateOrganizationAttributeOptionInput",
            },
          },
          enabled: {
            type: "boolean",
          },
        },
      },
      CreateOrganizationAttributeOptionInput: {
        required: ["value", "slug"],
        type: "object",
        properties: {
          value: {
            type: "string",
          },
          slug: {
            type: "string",
          },
        },
      },
    },
  },
  {
    description: "Get an attribute",
    method: "get",
    name: "OrganizationsAttributesController_getOrganizationAttribute",
    url: "https://api.cal.com/v2/organizations/{orgId}/attributes/{attributeId}",
    params: [
      {
        in: "path",
        name: "orgId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
      {
        in: "path",
        name: "attributeId",
        required: true,
        explode: false,
        schema: {
          type: "string",
        },
        style: "simple",
      },
    ],
    defs: {},
  },
  {
    description: "Delete an attribute",
    method: "delete",
    name: "OrganizationsAttributesController_deleteOrganizationAttribute",
    url: "https://api.cal.com/v2/organizations/{orgId}/attributes/{attributeId}",
    params: [
      {
        in: "path",
        name: "orgId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
      {
        in: "path",
        name: "attributeId",
        required: true,
        explode: false,
        schema: {
          type: "string",
        },
        style: "simple",
      },
    ],
    defs: {},
  },
  {
    description: "Update an attribute",
    method: "patch",
    name: "OrganizationsAttributesController_updateOrganizationAttribute",
    url: "https://api.cal.com/v2/organizations/{orgId}/attributes/{attributeId}",
    params: [
      {
        in: "path",
        name: "orgId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
      {
        in: "path",
        name: "attributeId",
        required: true,
        explode: false,
        schema: {
          type: "string",
        },
        style: "simple",
      },
    ],
    body: {
      $ref: "#/$defs/UpdateOrganizationAttributeInput",
    },
    contentType: "application/json",
    defs: {
      UpdateOrganizationAttributeInput: {
        type: "object",
        properties: {
          name: {
            type: "string",
          },
          slug: {
            type: "string",
          },
          type: {
            enum: ["TEXT", "NUMBER", "SINGLE_SELECT", "MULTI_SELECT"],
            type: "string",
          },
          enabled: {
            type: "boolean",
          },
        },
      },
    },
  },
  {
    description: "Get all attribute options",
    method: "get",
    name: "OrganizationsAttributesOptionsController_getOrganizationAttribut",
    url: "https://api.cal.com/v2/organizations/{orgId}/attributes/{attributeId}/options",
    params: [
      {
        in: "path",
        name: "orgId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
      {
        in: "path",
        name: "attributeId",
        required: true,
        explode: false,
        schema: {
          type: "string",
        },
        style: "simple",
      },
    ],
    defs: {},
  },
  {
    description: "Create an attribute option",
    method: "post",
    name: "OrganizationsAttributesOptionsController_createOrganizationAttri",
    url: "https://api.cal.com/v2/organizations/{orgId}/attributes/{attributeId}/options",
    params: [
      {
        in: "path",
        name: "orgId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
      {
        in: "path",
        name: "attributeId",
        required: true,
        explode: false,
        schema: {
          type: "string",
        },
        style: "simple",
      },
    ],
    body: {
      $ref: "#/$defs/CreateOrganizationAttributeOptionInput",
    },
    contentType: "application/json",
    defs: {
      CreateOrganizationAttributeOptionInput: {
        required: ["value", "slug"],
        type: "object",
        properties: {
          value: {
            type: "string",
          },
          slug: {
            type: "string",
          },
        },
      },
    },
  },
  {
    description: "Delete an attribute option",
    method: "delete",
    name: "OrganizationsAttributesOptionsController_deleteOrganizationAttri",
    url: "https://api.cal.com/v2/organizations/{orgId}/attributes/{attributeId}/options/{optionId}",
    params: [
      {
        in: "path",
        name: "orgId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
      {
        in: "path",
        name: "attributeId",
        required: true,
        explode: false,
        schema: {
          type: "string",
        },
        style: "simple",
      },
      {
        in: "path",
        name: "optionId",
        required: true,
        explode: false,
        schema: {
          type: "string",
        },
        style: "simple",
      },
    ],
    defs: {},
  },
  {
    description: "Update an attribute option",
    method: "patch",
    name: "OrganizationsAttributesOptionsController_updateOrganizationAttri",
    url: "https://api.cal.com/v2/organizations/{orgId}/attributes/{attributeId}/options/{optionId}",
    params: [
      {
        in: "path",
        name: "orgId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
      {
        in: "path",
        name: "attributeId",
        required: true,
        explode: false,
        schema: {
          type: "string",
        },
        style: "simple",
      },
      {
        in: "path",
        name: "optionId",
        required: true,
        explode: false,
        schema: {
          type: "string",
        },
        style: "simple",
      },
    ],
    body: {
      $ref: "#/$defs/UpdateOrganizationAttributeOptionInput",
    },
    contentType: "application/json",
    defs: {
      UpdateOrganizationAttributeOptionInput: {
        type: "object",
        properties: {
          value: {
            type: "string",
          },
          slug: {
            type: "string",
          },
        },
      },
    },
  },
  {
    description: "Get all attribute options for a user",
    method: "get",
    name: "OrganizationsAttributesOptionsController_getOrganizationAttribut",
    url: "https://api.cal.com/v2/organizations/{orgId}/attributes/options/{userId}",
    params: [
      {
        in: "path",
        name: "orgId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
      {
        in: "path",
        name: "userId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
    ],
    defs: {},
  },
  {
    description: "Assign an attribute to a user",
    method: "post",
    name: "OrganizationsAttributesOptionsController_assignOrganizationAttri",
    url: "https://api.cal.com/v2/organizations/{orgId}/attributes/options/{userId}",
    params: [
      {
        in: "path",
        name: "orgId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
      {
        in: "path",
        name: "userId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
    ],
    body: {
      $ref: "#/$defs/AssignOrganizationAttributeOptionToUserInput",
    },
    contentType: "application/json",
    defs: {
      AssignOrganizationAttributeOptionToUserInput: {
        required: ["attributeId"],
        type: "object",
        properties: {
          value: {
            type: "string",
          },
          attributeOptionId: {
            type: "string",
          },
          attributeId: {
            type: "string",
          },
        },
      },
    },
  },
  {
    description: "Unassign an attribute from a user",
    method: "delete",
    name: "OrganizationsAttributesOptionsController_unassignOrganizationAtt",
    url: "https://api.cal.com/v2/organizations/{orgId}/attributes/options/{userId}/{attributeOptionId}",
    params: [
      {
        in: "path",
        name: "orgId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
      {
        in: "path",
        name: "userId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
      {
        in: "path",
        name: "attributeOptionId",
        required: true,
        explode: false,
        schema: {
          type: "string",
        },
        style: "simple",
      },
    ],
    defs: {},
  },
  {
    description: "Save delegation credentials for your organization.",
    method: "post",
    name: "OrganizationsDelegationCredentialController_createDelegationCred",
    url: "https://api.cal.com/v2/organizations/{orgId}/delegation-credentials",
    params: [
      {
        in: "path",
        name: "orgId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
    ],
    body: {
      $ref: "#/$defs/CreateDelegationCredentialInput",
    },
    contentType: "application/json",
    defs: {
      CreateDelegationCredentialInput: {
        required: ["workspacePlatformSlug", "domain", "serviceAccountKey"],
        type: "object",
        properties: {
          workspacePlatformSlug: {
            type: "string",
          },
          domain: {
            type: "string",
          },
          serviceAccountKey: {
            type: "array",
            items: {
              anyOf: [
                {
                  $ref: "#/$defs/GoogleServiceAccountKeyInput",
                },
              ],
              type: "object",
            },
          },
        },
      },
      GoogleServiceAccountKeyInput: {
        required: ["private_key", "client_email", "client_id"],
        type: "object",
        properties: {
          private_key: {
            type: "string",
          },
          client_email: {
            type: "string",
          },
          client_id: {
            type: "string",
          },
        },
      },
    },
  },
  {
    description: "Update delegation credentials of your organization.",
    method: "patch",
    name: "OrganizationsDelegationCredentialController_updateDelegationCred",
    url: "https://api.cal.com/v2/organizations/{orgId}/delegation-credentials/{credentialId}",
    params: [
      {
        in: "path",
        name: "orgId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
      {
        in: "path",
        name: "credentialId",
        required: true,
        explode: false,
        schema: {
          type: "string",
        },
        style: "simple",
      },
    ],
    body: {
      $ref: "#/$defs/UpdateDelegationCredentialInput",
    },
    contentType: "application/json",
    defs: {
      UpdateDelegationCredentialInput: {
        type: "object",
        properties: {
          enabled: {
            type: "boolean",
          },
          serviceAccountKey: {
            type: "array",
            items: {
              anyOf: [
                {
                  $ref: "#/$defs/GoogleServiceAccountKeyInput",
                },
              ],
              type: "object",
            },
          },
        },
      },
      GoogleServiceAccountKeyInput: {
        required: ["private_key", "client_email", "client_id"],
        type: "object",
        properties: {
          private_key: {
            type: "string",
          },
          client_email: {
            type: "string",
          },
          client_id: {
            type: "string",
          },
        },
      },
    },
  },
  {
    description: "Get a team event type",
    method: "get",
    name: "OrganizationsEventTypesController_getTeamEventTypes",
    url: "https://api.cal.com/v2/organizations/{orgId}/teams/{teamId}/event-types",
    params: [
      {
        in: "path",
        name: "teamId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
      {
        description: "Slug of team event type to return.",
        in: "query",
        name: "eventSlug",
        required: false,
        explode: true,
        schema: {
          type: "string",
        },
        style: "form",
      },
      {
        description:
          "Specifies the maximum number of hosts to include in the response. This limit helps optimize performance. If not provided, all Hosts will be fetched.",
        in: "query",
        name: "hostsLimit",
        required: false,
        explode: true,
        schema: {
          type: "number",
        },
        style: "form",
      },
    ],
    defs: {},
  },
  {
    description: "Create an event type",
    method: "post",
    name: "OrganizationsEventTypesController_createTeamEventType",
    url: "https://api.cal.com/v2/organizations/{orgId}/teams/{teamId}/event-types",
    params: [
      {
        in: "path",
        name: "teamId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
      {
        in: "path",
        name: "orgId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
    ],
    body: {
      $ref: "#/$defs/CreateTeamEventTypeInput_2024_06_14",
    },
    contentType: "application/json",
    defs: {
      CreateTeamEventTypeInput_2024_06_14: {
        required: [
          "lengthInMinutes",
          "title",
          "slug",
          "schedulingType",
          "hosts",
        ],
        type: "object",
        properties: {
          lengthInMinutes: {
            examples: [60],
            type: "number",
          },
          lengthInMinutesOptions: {
            description:
              "If you want that user can choose between different lengths of the event you can specify them here. Must include the provided `lengthInMinutes`.",
            examples: [[15, 30, 60]],
            type: "array",
            items: {
              type: "string",
            },
          },
          title: {
            examples: ["Learn the secrets of masterchief!"],
            type: "string",
          },
          slug: {
            examples: ["learn-the-secrets-of-masterchief"],
            type: "string",
          },
          description: {
            examples: [
              "Discover the culinary wonders of the Argentina by making the best flan ever!",
            ],
            type: "string",
          },
          bookingFields: {
            description:
              "Custom fields that can be added to the booking form when the event is booked by someone. By default booking form has name and email field.",
            type: "array",
            items: {
              anyOf: [
                {
                  $ref: "#/$defs/NameDefaultFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/EmailDefaultFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/TitleDefaultFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/NotesDefaultFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/GuestsDefaultFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/RescheduleReasonDefaultFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/PhoneFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/AddressFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/TextFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/NumberFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/TextAreaFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/SelectFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/MultiSelectFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/MultiEmailFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/CheckboxGroupFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/RadioGroupFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/BooleanFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/UrlFieldInput_2024_06_14",
                },
              ],
              type: "object",
            },
          },
          disableGuests: {
            description:
              "If true, person booking this event can't add guests via their emails.",
            type: "boolean",
          },
          slotInterval: {
            description:
              "Number representing length of each slot when event is booked. By default it equal length of the event type.\n      If event length is 60 minutes then we would have slots 9AM, 10AM, 11AM etc. but if it was changed to 30 minutes then\n      we would have slots 9AM, 9:30AM, 10AM, 10:30AM etc. as the available times to book the 60 minute event.",
            type: "number",
          },
          minimumBookingNotice: {
            description:
              "Minimum number of minutes before the event that a booking can be made.",
            type: "number",
          },
          beforeEventBuffer: {
            description:
              "Time spaces that can be prepended before an event to give more time before it.",
            type: "number",
          },
          afterEventBuffer: {
            description:
              "Time spaces that can be appended after an event to give more time after it.",
            type: "number",
          },
          scheduleId: {
            description:
              "If you want that this event has different schedule than user's default one you can specify it here.",
            type: "number",
          },
          bookingLimitsCount: {
            description: "Limit how many times this event can be booked",
            anyOf: [
              {
                $ref: "#/$defs/BaseBookingLimitsCount_2024_06_14",
              },
              {
                $ref: "#/$defs/Disabled_2024_06_14",
              },
            ],
            type: "object",
          },
          onlyShowFirstAvailableSlot: {
            description:
              "This will limit your availability for this event type to one slot per day, scheduled at the earliest available time.",
            type: "boolean",
          },
          bookingLimitsDuration: {
            description:
              "Limit total amount of time that this event can be booked",
            anyOf: [
              {
                $ref: "#/$defs/BaseBookingLimitsDuration_2024_06_14",
              },
              {
                $ref: "#/$defs/Disabled_2024_06_14",
              },
            ],
            type: "object",
          },
          bookingWindow: {
            description: "Limit how far in the future this event can be booked",
            anyOf: [
              {
                $ref: "#/$defs/BusinessDaysWindow_2024_06_14",
              },
              {
                $ref: "#/$defs/CalendarDaysWindow_2024_06_14",
              },
              {
                $ref: "#/$defs/RangeWindow_2024_06_14",
              },
              {
                $ref: "#/$defs/Disabled_2024_06_14",
              },
            ],
            type: "object",
          },
          offsetStart: {
            description:
              "Offset timeslots shown to bookers by a specified number of minutes",
            type: "number",
          },
          bookerLayouts: {
            description:
              "Should booker have week, month or column view. Specify default layout and enabled layouts user can pick.",
            allOf: [
              {
                $ref: "#/$defs/BookerLayouts_2024_06_14",
              },
            ],
          },
          confirmationPolicy: {
            description:
              "Specify how the booking needs to be manually confirmed before it is pushed to the integrations and a confirmation mail is sent.",
            anyOf: [
              {
                $ref: "#/$defs/BaseConfirmationPolicy_2024_06_14",
              },
              {
                $ref: "#/$defs/Disabled_2024_06_14",
              },
            ],
            type: "object",
          },
          recurrence: {
            description: "Create a recurring event type.",
            anyOf: [
              {
                $ref: "#/$defs/Recurrence_2024_06_14",
              },
              {
                $ref: "#/$defs/Disabled_2024_06_14",
              },
            ],
            type: "object",
          },
          requiresBookerEmailVerification: {
            type: "boolean",
          },
          hideCalendarNotes: {
            type: "boolean",
          },
          lockTimeZoneToggleOnBookingPage: {
            type: "boolean",
          },
          color: {
            $ref: "#/$defs/EventTypeColor_2024_06_14",
          },
          seats: {
            description: "Create an event type with multiple seats.",
            anyOf: [
              {
                $ref: "#/$defs/Seats_2024_06_14",
              },
              {
                $ref: "#/$defs/Disabled_2024_06_14",
              },
            ],
            type: "object",
          },
          customName: {
            description:
              "Customizable event name with valid variables: \n      {Event type title}, {Organiser}, {Scheduler}, {Location}, {Organiser first name}, \n      {Scheduler first name}, {Scheduler last name}, {Event duration}, {LOCATION}, \n      {HOST/ATTENDEE}, {HOST}, {ATTENDEE}, {USER}",
            examples: [
              "{Event type title} between {Organiser} and {Scheduler}",
            ],
            type: "string",
          },
          destinationCalendar: {
            $ref: "#/$defs/DestinationCalendar_2024_06_14",
          },
          useDestinationCalendarEmail: {
            type: "boolean",
          },
          hideCalendarEventDetails: {
            type: "boolean",
          },
          successRedirectUrl: {
            description:
              "A valid URL where the booker will redirect to, once the booking is completed successfully",
            examples: ["https://masterchief.com/argentina/flan/video/9129412"],
            type: "string",
          },
          schedulingType: {
            type: "object",
          },
          hosts: {
            type: "array",
            items: {
              $ref: "#/$defs/Host",
            },
          },
          assignAllTeamMembers: {
            description:
              "If true, all current and future team members will be assigned to this event type",
            type: "boolean",
          },
          locations: {
            description:
              "Locations where the event will take place. If not provided, cal video link will be used as the location.",
            type: "array",
            items: {
              anyOf: [
                {
                  $ref: "#/$defs/InputAddressLocation_2024_06_14",
                },
                {
                  $ref: "#/$defs/InputLinkLocation_2024_06_14",
                },
                {
                  $ref: "#/$defs/InputIntegrationLocation_2024_06_14",
                },
                {
                  $ref: "#/$defs/InputPhoneLocation_2024_06_14",
                },
                {
                  $ref: "#/$defs/InputAttendeeAddressLocation_2024_06_14",
                },
                {
                  $ref: "#/$defs/InputAttendeePhoneLocation_2024_06_14",
                },
                {
                  $ref: "#/$defs/InputAttendeeDefinedLocation_2024_06_14",
                },
                {
                  $ref: "#/$defs/InputOrganizersDefaultApp_2024_06_14",
                },
              ],
              type: "object",
            },
          },
        },
      },
      NameDefaultFieldInput_2024_06_14: {
        required: ["type", "label", "placeholder"],
        type: "object",
        properties: {
          type: {
            description:
              "only allowed value for type is `name`. Used for having 1 booking field for both first name and last name.",
            examples: ["name"],
            type: "string",
          },
          label: {
            type: "string",
          },
          placeholder: {
            type: "string",
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if URL contains query parameter `&name=bob`,      the name field will be prefilled with this value and disabled.",
            type: "boolean",
          },
        },
      },
      EmailDefaultFieldInput_2024_06_14: {
        required: ["type", "label", "required", "placeholder"],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `email`",
            examples: ["email"],
            type: "string",
          },
          label: {
            type: "string",
          },
          required: {
            type: "object",
          },
          placeholder: {
            type: "string",
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if URL contains query parameter `&email=bob@gmail.com`,      the email field will be prefilled with this value and disabled.",
            type: "boolean",
          },
        },
      },
      TitleDefaultFieldInput_2024_06_14: {
        required: ["slug"],
        type: "object",
        properties: {
          slug: {
            description: "only allowed value for type is `title`",
            examples: ["title"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
          label: {
            type: "string",
          },
          placeholder: {
            type: "string",
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if URL contains query parameter `&title=journey`,      the title field will be prefilled with this value and disabled.",
            type: "boolean",
          },
        },
      },
      NotesDefaultFieldInput_2024_06_14: {
        required: ["slug"],
        type: "object",
        properties: {
          slug: {
            description: "only allowed value for type is `notes`",
            examples: ["notes"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
          label: {
            type: "string",
          },
          placeholder: {
            type: "string",
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if URL contains query parameter `&notes=journey`,      the notes field will be prefilled with this value and disabled.",
            type: "boolean",
          },
        },
      },
      GuestsDefaultFieldInput_2024_06_14: {
        required: ["slug"],
        type: "object",
        properties: {
          slug: {
            description: "only allowed value for type is `guests`",
            examples: ["guests"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
          label: {
            type: "string",
          },
          placeholder: {
            type: "string",
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if URL contains query parameter `&guests=bob@cal.com`,      the guests field will be prefilled with this value and disabled.",
            type: "boolean",
          },
        },
      },
      RescheduleReasonDefaultFieldInput_2024_06_14: {
        required: ["slug"],
        type: "object",
        properties: {
          slug: {
            description: "only allowed value for type is `rescheduleReason`",
            examples: ["rescheduleReason"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
          label: {
            type: "string",
          },
          placeholder: {
            type: "string",
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if URL contains query parameter `&rescheduleReason=travel`,      the rescheduleReason field will be prefilled with this value and disabled.",
            type: "boolean",
          },
        },
      },
      PhoneFieldInput_2024_06_14: {
        required: [
          "type",
          "slug",
          "label",
          "required",
          "placeholder",
          "hidden",
        ],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `phone`",
            examples: ["phone"],
            type: "string",
          },
          slug: {
            description:
              "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            examples: ["some-slug"],
            type: "string",
          },
          label: {
            type: "string",
          },
          required: {
            type: "boolean",
          },
          placeholder: {
            type: "string",
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `phone` and the URL contains query parameter `&phone=1234567890`,      the phone field will be prefilled with this value and disabled.",
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
        },
      },
      AddressFieldInput_2024_06_14: {
        required: [
          "type",
          "slug",
          "label",
          "required",
          "placeholder",
          "hidden",
        ],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `address`",
            examples: ["address"],
            type: "string",
          },
          slug: {
            description:
              "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            examples: ["some-slug"],
            type: "string",
          },
          label: {
            examples: ["Please enter your address"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          placeholder: {
            examples: ["e.g., 1234 Main St"],
            type: "string",
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `address` and the URL contains query parameter `&address=1234 Main St, London`,      the address field will be prefilled with this value and disabled.",
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
        },
      },
      TextFieldInput_2024_06_14: {
        required: [
          "type",
          "slug",
          "label",
          "required",
          "placeholder",
          "hidden",
        ],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `text`",
            examples: ["text"],
            type: "string",
          },
          slug: {
            description:
              "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            examples: ["some-slug"],
            type: "string",
          },
          label: {
            examples: ["Please enter your text"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          placeholder: {
            examples: ["e.g., Enter text here"],
            type: "string",
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `who-referred-you` and the URL contains query parameter `&who-referred-you=bob`,      the text field will be prefilled with this value and disabled.",
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
        },
      },
      NumberFieldInput_2024_06_14: {
        required: [
          "type",
          "slug",
          "label",
          "required",
          "placeholder",
          "hidden",
        ],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `number`",
            examples: ["number"],
            type: "string",
          },
          slug: {
            description:
              "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            examples: ["some-slug"],
            type: "string",
          },
          label: {
            examples: ["Please enter a number"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          placeholder: {
            examples: ["e.g., 100"],
            type: "string",
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `calories-per-day` and the URL contains query parameter `&calories-per-day=3000`,      the number field will be prefilled with this value and disabled.",
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
        },
      },
      TextAreaFieldInput_2024_06_14: {
        required: [
          "type",
          "slug",
          "label",
          "required",
          "placeholder",
          "hidden",
        ],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `textarea`",
            examples: ["textarea"],
            type: "string",
          },
          slug: {
            description:
              "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            examples: ["some-slug"],
            type: "string",
          },
          label: {
            examples: ["Please enter detailed information"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          placeholder: {
            examples: ["e.g., Detailed description here..."],
            type: "string",
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `dear-diary` and the URL contains query parameter `&dear-diary=Today I shipped a feature`,      the text area will be prefilled with this value and disabled.",
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
        },
      },
      SelectFieldInput_2024_06_14: {
        required: [
          "type",
          "slug",
          "label",
          "required",
          "placeholder",
          "options",
          "hidden",
        ],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `select`",
            examples: ["select"],
            type: "string",
          },
          slug: {
            description:
              "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            examples: ["some-slug"],
            type: "string",
          },
          label: {
            examples: ["Please select an option"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          placeholder: {
            examples: ["Select..."],
            type: "string",
          },
          options: {
            examples: [["Option 1", "Option 2"]],
            type: "array",
            items: {
              type: "string",
            },
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `language` and options of this select field are ['english', 'italian'] and the URL contains query parameter `&language=italian`,      the 'italian' will be selected and the select field will be disabled.",
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
        },
      },
      MultiSelectFieldInput_2024_06_14: {
        required: ["type", "slug", "label", "required", "options", "hidden"],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `multiselect`",
            examples: ["multiselect"],
            type: "string",
          },
          slug: {
            description:
              "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            examples: ["some-slug"],
            type: "string",
          },
          label: {
            examples: ["Please select multiple options"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          options: {
            examples: [["Option 1", "Option 2"]],
            type: "array",
            items: {
              type: "string",
            },
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `consultants` and the URL contains query parameter `&consultants=en&language=it`,      the 'en' and 'it' will be selected and the select field will be disabled.",
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
        },
      },
      MultiEmailFieldInput_2024_06_14: {
        required: [
          "type",
          "slug",
          "label",
          "required",
          "placeholder",
          "hidden",
        ],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `multiemail`",
            examples: ["multiemail"],
            type: "string",
          },
          slug: {
            description:
              "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            examples: ["some-slug"],
            type: "string",
          },
          label: {
            examples: ["Please enter multiple emails"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          placeholder: {
            examples: ["e.g., example@example.com"],
            type: "string",
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `consultants` and the URL contains query parameter `&consultants=alice@gmail.com&consultants=bob@gmail.com`,      the these emails will be added and none more can be added.",
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
        },
      },
      CheckboxGroupFieldInput_2024_06_14: {
        required: ["type", "slug", "label", "required", "options", "hidden"],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `checkbox`",
            examples: ["checkbox"],
            type: "string",
          },
          slug: {
            description:
              "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            examples: ["some-slug"],
            type: "string",
          },
          label: {
            examples: ["Select all that apply"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          options: {
            examples: [["Checkbox 1", "Checkbox 2"]],
            type: "array",
            items: {
              type: "string",
            },
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `notify-me` and the URL contains query parameter `&notify-me=true`,      the checkbox will be selected and the checkbox field will be disabled.",
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
        },
      },
      RadioGroupFieldInput_2024_06_14: {
        required: ["type", "slug", "label", "required", "options", "hidden"],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `radio`",
            examples: ["radio"],
            type: "string",
          },
          slug: {
            description:
              "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            examples: ["some-slug"],
            type: "string",
          },
          label: {
            examples: ["Select one option"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          options: {
            examples: [["Radio 1", "Radio 2"]],
            type: "array",
            items: {
              type: "string",
            },
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `language` and options of this select field are ['english', 'italian'] and the URL contains query parameter `&language=italian`,      the 'italian' radio button will be selected and the select field will be disabled.",
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
        },
      },
      BooleanFieldInput_2024_06_14: {
        required: ["type", "slug", "label", "required", "hidden"],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `boolean`",
            examples: ["boolean"],
            type: "string",
          },
          slug: {
            description:
              "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            examples: ["some-slug"],
            type: "string",
          },
          label: {
            examples: ["Agree to terms?"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          disableOnPrefill: {
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
        },
      },
      UrlFieldInput_2024_06_14: {
        required: [
          "type",
          "slug",
          "label",
          "required",
          "placeholder",
          "hidden",
        ],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `url`",
            examples: ["url"],
            type: "string",
          },
          slug: {
            description:
              "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            examples: ["some-slug"],
            type: "string",
          },
          label: {
            examples: ["Please enter your text"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          placeholder: {
            examples: ["e.g., Enter url here"],
            type: "string",
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `video-url` and the URL contains query parameter `&video-url=https://youtube.com/abc`the url field will be prefilled with this value and disabled.",
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
        },
      },
      BaseBookingLimitsCount_2024_06_14: {
        type: "object",
        properties: {
          day: {
            description: "The number of bookings per day",
            examples: [1],
            type: "number",
          },
          week: {
            description: "The number of bookings per week",
            examples: [2],
            type: "number",
          },
          month: {
            description: "The number of bookings per month",
            examples: [3],
            type: "number",
          },
          year: {
            description: "The number of bookings per year",
            examples: [4],
            type: "number",
          },
          disabled: {
            default: false,
            type: "boolean",
          },
        },
      },
      Disabled_2024_06_14: {
        required: ["disabled"],
        type: "object",
        properties: {
          disabled: {
            default: false,
            description: "Indicates if the option is disabled",
            examples: [true],
            type: "boolean",
          },
        },
      },
      BaseBookingLimitsDuration_2024_06_14: {
        type: "object",
        properties: {
          day: {
            description:
              "The duration of bookings per day (must be a multiple of 15)",
            examples: [60],
            type: "number",
          },
          week: {
            description:
              "The duration of bookings per week (must be a multiple of 15)",
            examples: [120],
            type: "number",
          },
          month: {
            description:
              "The duration of bookings per month (must be a multiple of 15)",
            examples: [180],
            type: "number",
          },
          year: {
            description:
              "The duration of bookings per year (must be a multiple of 15)",
            examples: [240],
            type: "number",
          },
        },
      },
      BusinessDaysWindow_2024_06_14: {
        required: ["type", "value"],
        type: "object",
        properties: {
          type: {
            description:
              "Whether the window should be business days, calendar days or a range of dates",
            enum: ["businessDays", "calendarDays", "range"],
            type: "string",
          },
          value: {
            description:
              "How many business day into the future can this event be booked",
            examples: [5],
            type: "number",
          },
          rolling: {
            description:
              "\n      Determines the behavior of the booking window:\n      - If **true**, the window is rolling. This means the number of available days will always be equal the specified 'value' \n        and adjust dynamically as bookings are made. For example, if 'value' is 3 and availability is only on Mondays, \n        a booker attempting to schedule on November 10 will see slots on November 11, 18, and 25. As one of these days \n        becomes fully booked, a new day (e.g., December 2) will open up to ensure 3 available days are always visible.\n      - If **false**, the window is fixed. This means the booking window only considers the next 'value' days from the\n        moment someone is trying to book. For example, if 'value' is 3, availability is only on Mondays, and the current \n        date is November 10, the booker will only see slots on November 11 because the window is restricted to the next \n        3 calendar days (November 10\u201312).\n    ",
            examples: [true],
            type: "boolean",
          },
        },
      },
      CalendarDaysWindow_2024_06_14: {
        required: ["type", "value"],
        type: "object",
        properties: {
          type: {
            description:
              "Whether the window should be business days, calendar days or a range of dates",
            enum: ["businessDays", "calendarDays", "range"],
            type: "string",
          },
          value: {
            description:
              "How many calendar days into the future can this event be booked",
            examples: [5],
            type: "number",
          },
          rolling: {
            description:
              "\n      Determines the behavior of the booking window:\n      - If **true**, the window is rolling. This means the number of available days will always be equal the specified 'value' \n        and adjust dynamically as bookings are made. For example, if 'value' is 3 and availability is only on Mondays, \n        a booker attempting to schedule on November 10 will see slots on November 11, 18, and 25. As one of these days \n        becomes fully booked, a new day (e.g., December 2) will open up to ensure 3 available days are always visible.\n      - If **false**, the window is fixed. This means the booking window only considers the next 'value' days from the\n        moment someone is trying to book. For example, if 'value' is 3, availability is only on Mondays, and the current \n        date is November 10, the booker will only see slots on November 11 because the window is restricted to the next \n        3 calendar days (November 10\u201312).\n    ",
            examples: [true],
            type: "boolean",
          },
        },
      },
      RangeWindow_2024_06_14: {
        required: ["type", "value"],
        type: "object",
        properties: {
          type: {
            description:
              "Whether the window should be business days, calendar days or a range of dates",
            enum: ["businessDays", "calendarDays", "range"],
            type: "string",
          },
          value: {
            description: "Date range for when this event can be booked.",
            examples: [["2030-09-05", "2030-09-09"]],
            type: "array",
            items: {
              type: "string",
            },
          },
        },
      },
      BookerLayouts_2024_06_14: {
        required: ["defaultLayout", "enabledLayouts"],
        type: "object",
        properties: {
          defaultLayout: {
            enum: ["month", "week", "column"],
            type: "string",
          },
          enabledLayouts: {
            type: "array",
            items: {
              enum: ["month", "week", "column"],
              type: "string",
            },
          },
        },
      },
      BaseConfirmationPolicy_2024_06_14: {
        required: ["type", "blockUnconfirmedBookingsInBooker"],
        type: "object",
        properties: {
          type: {
            description:
              "The policy that determines when confirmation is required",
            enum: ["always", "time"],
            examples: ["always"],
            type: "string",
          },
          noticeThreshold: {
            description:
              "The notice threshold required before confirmation is needed. Required when type is 'time'.",
            allOf: [
              {
                $ref: "#/$defs/NoticeThreshold_2024_06_14",
              },
            ],
          },
          blockUnconfirmedBookingsInBooker: {
            description: "Unconfirmed bookings still block calendar slots.",
            type: "boolean",
          },
        },
      },
      NoticeThreshold_2024_06_14: {
        required: ["unit", "count"],
        type: "object",
        properties: {
          unit: {
            description:
              "The unit of time for the notice threshold (e.g., minutes, hours)",
            examples: ["minutes"],
            type: "string",
          },
          count: {
            description: "The time value for the notice threshold",
            examples: [30],
            type: "number",
          },
        },
      },
      Recurrence_2024_06_14: {
        required: ["interval", "occurrences", "frequency"],
        type: "object",
        properties: {
          interval: {
            description: "Repeats every {count} week | month | year",
            examples: [10],
            type: "number",
          },
          occurrences: {
            description: "Repeats for a maximum of {count} events",
            examples: [10],
            type: "number",
          },
          frequency: {
            enum: ["yearly", "monthly", "weekly"],
            type: "string",
          },
        },
      },
      EventTypeColor_2024_06_14: {
        required: ["lightThemeHex", "darkThemeHex"],
        type: "object",
        properties: {
          lightThemeHex: {
            description: "Color used for event types in light theme",
            examples: ["#292929"],
            type: "string",
          },
          darkThemeHex: {
            description: "Color used for event types in dark theme",
            examples: ["#fafafa"],
            type: "string",
          },
        },
      },
      Seats_2024_06_14: {
        required: [
          "seatsPerTimeSlot",
          "showAttendeeInfo",
          "showAvailabilityCount",
        ],
        type: "object",
        properties: {
          seatsPerTimeSlot: {
            description: "Number of seats available per time slot",
            examples: [4],
            type: "number",
          },
          showAttendeeInfo: {
            description: "Show attendee information to other guests",
            examples: [true],
            type: "boolean",
          },
          showAvailabilityCount: {
            description: "Display the count of available seats",
            examples: [true],
            type: "boolean",
          },
        },
      },
      DestinationCalendar_2024_06_14: {
        required: ["integration", "externalId"],
        type: "object",
        properties: {
          integration: {
            description:
              "The integration type of the destination calendar. Refer to the /api/v2/calendars endpoint to retrieve the integration type of your connected calendars.",
            type: "string",
          },
          externalId: {
            description:
              "The external ID of the destination calendar. Refer to the /api/v2/calendars endpoint to retrieve the external IDs of your connected calendars.",
            type: "string",
          },
        },
      },
      Host: {
        required: ["userId"],
        type: "object",
        properties: {
          userId: {
            description: "Which user is the host of this event",
            type: "number",
          },
          mandatory: {
            description:
              "Only relevant for round robin event types. If true then the user must attend round robin event always.",
            type: "boolean",
          },
          priority: {
            enum: ["lowest", "low", "medium", "high", "highest"],
            type: "string",
          },
        },
      },
      InputAddressLocation_2024_06_14: {
        required: ["type", "address", "public"],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `address`",
            examples: ["address"],
            type: "string",
          },
          address: {
            examples: ["123 Example St, City, Country"],
            type: "string",
          },
          public: {
            type: "boolean",
          },
        },
      },
      InputLinkLocation_2024_06_14: {
        required: ["type", "link", "public"],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `link`",
            examples: ["link"],
            type: "string",
          },
          link: {
            examples: ["https://customvideo.com/join/123456"],
            type: "string",
          },
          public: {
            type: "boolean",
          },
        },
      },
      InputIntegrationLocation_2024_06_14: {
        required: ["type", "integration"],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `integration`",
            examples: ["integration"],
            type: "string",
          },
          integration: {
            enum: ["cal-video", "google-meet", "office365-video", "zoom"],
            examples: ["cal-video"],
            type: "string",
          },
        },
      },
      InputPhoneLocation_2024_06_14: {
        required: ["type", "phone", "public"],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `phone`",
            examples: ["phone"],
            type: "string",
          },
          phone: {
            examples: ["+37120993151"],
            type: "string",
          },
          public: {
            type: "boolean",
          },
        },
      },
      InputAttendeeAddressLocation_2024_06_14: {
        required: ["type"],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `attendeeAddress`",
            examples: ["attendeeAddress"],
            type: "string",
          },
        },
      },
      InputAttendeePhoneLocation_2024_06_14: {
        required: ["type"],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `attendeePhone`",
            examples: ["attendeePhone"],
            type: "string",
          },
        },
      },
      InputAttendeeDefinedLocation_2024_06_14: {
        required: ["type"],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `attendeeDefined`",
            examples: ["attendeeDefined"],
            type: "string",
          },
        },
      },
      InputOrganizersDefaultApp_2024_06_14: {
        required: ["type"],
        type: "object",
        properties: {
          type: {
            description:
              "only allowed value for type is `organizersDefaultApp`",
            examples: ["organizersDefaultApp"],
            type: "string",
          },
        },
      },
    },
  },
  {
    description: "Get an event type",
    method: "get",
    name: "OrganizationsEventTypesController_getTeamEventType",
    url: "https://api.cal.com/v2/organizations/{orgId}/teams/{teamId}/event-types/{eventTypeId}",
    params: [
      {
        in: "path",
        name: "teamId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
      {
        in: "path",
        name: "eventTypeId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
    ],
    defs: {},
  },
  {
    description: "Delete a team event type",
    method: "delete",
    name: "OrganizationsEventTypesController_deleteTeamEventType",
    url: "https://api.cal.com/v2/organizations/{orgId}/teams/{teamId}/event-types/{eventTypeId}",
    params: [
      {
        in: "path",
        name: "teamId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
      {
        in: "path",
        name: "eventTypeId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
    ],
    defs: {},
  },
  {
    description: "Update a team event type",
    method: "patch",
    name: "OrganizationsEventTypesController_updateTeamEventType",
    url: "https://api.cal.com/v2/organizations/{orgId}/teams/{teamId}/event-types/{eventTypeId}",
    params: [
      {
        in: "path",
        name: "teamId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
      {
        in: "path",
        name: "eventTypeId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
    ],
    body: {
      $ref: "#/$defs/UpdateTeamEventTypeInput_2024_06_14",
    },
    contentType: "application/json",
    defs: {
      UpdateTeamEventTypeInput_2024_06_14: {
        type: "object",
        properties: {
          lengthInMinutes: {
            examples: [60],
            type: "number",
          },
          lengthInMinutesOptions: {
            description:
              "If you want that user can choose between different lengths of the event you can specify them here. Must include the provided `lengthInMinutes`.",
            examples: [[15, 30, 60]],
            type: "array",
            items: {
              type: "string",
            },
          },
          title: {
            examples: ["Learn the secrets of masterchief!"],
            type: "string",
          },
          slug: {
            examples: ["learn-the-secrets-of-masterchief"],
            type: "string",
          },
          description: {
            examples: [
              "Discover the culinary wonders of the Argentina by making the best flan ever!",
            ],
            type: "string",
          },
          bookingFields: {
            description:
              "Custom fields that can be added to the booking form when the event is booked by someone. By default booking form has name and email field.",
            type: "array",
            items: {
              anyOf: [
                {
                  $ref: "#/$defs/NameDefaultFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/EmailDefaultFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/TitleDefaultFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/NotesDefaultFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/GuestsDefaultFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/RescheduleReasonDefaultFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/PhoneFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/AddressFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/TextFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/NumberFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/TextAreaFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/SelectFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/MultiSelectFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/MultiEmailFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/CheckboxGroupFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/RadioGroupFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/BooleanFieldInput_2024_06_14",
                },
              ],
              type: "object",
            },
          },
          disableGuests: {
            description:
              "If true, person booking this event can't add guests via their emails.",
            type: "boolean",
          },
          slotInterval: {
            description:
              "Number representing length of each slot when event is booked. By default it equal length of the event type.\n      If event length is 60 minutes then we would have slots 9AM, 10AM, 11AM etc. but if it was changed to 30 minutes then\n      we would have slots 9AM, 9:30AM, 10AM, 10:30AM etc. as the available times to book the 60 minute event.",
            type: "number",
          },
          minimumBookingNotice: {
            description:
              "Minimum number of minutes before the event that a booking can be made.",
            type: "number",
          },
          beforeEventBuffer: {
            description:
              "Time spaces that can be prepended before an event to give more time before it.",
            type: "number",
          },
          afterEventBuffer: {
            description:
              "Time spaces that can be appended after an event to give more time after it.",
            type: "number",
          },
          scheduleId: {
            description:
              "If you want that this event has different schedule than user's default one you can specify it here.",
            type: "number",
          },
          bookingLimitsCount: {
            description: "Limit how many times this event can be booked",
            anyOf: [
              {
                $ref: "#/$defs/BaseBookingLimitsCount_2024_06_14",
              },
              {
                $ref: "#/$defs/Disabled_2024_06_14",
              },
            ],
            type: "object",
          },
          onlyShowFirstAvailableSlot: {
            description:
              "This will limit your availability for this event type to one slot per day, scheduled at the earliest available time.",
            type: "boolean",
          },
          bookingLimitsDuration: {
            description:
              "Limit total amount of time that this event can be booked",
            anyOf: [
              {
                $ref: "#/$defs/BaseBookingLimitsDuration_2024_06_14",
              },
              {
                $ref: "#/$defs/Disabled_2024_06_14",
              },
            ],
            type: "object",
          },
          bookingWindow: {
            description: "Limit how far in the future this event can be booked",
            anyOf: [
              {
                $ref: "#/$defs/BusinessDaysWindow_2024_06_14",
              },
              {
                $ref: "#/$defs/CalendarDaysWindow_2024_06_14",
              },
              {
                $ref: "#/$defs/RangeWindow_2024_06_14",
              },
              {
                $ref: "#/$defs/Disabled_2024_06_14",
              },
            ],
            type: "object",
          },
          offsetStart: {
            description:
              "Offset timeslots shown to bookers by a specified number of minutes",
            type: "number",
          },
          bookerLayouts: {
            description:
              "Should booker have week, month or column view. Specify default layout and enabled layouts user can pick.",
            allOf: [
              {
                $ref: "#/$defs/BookerLayouts_2024_06_14",
              },
            ],
          },
          confirmationPolicy: {
            description:
              "Specify how the booking needs to be manually confirmed before it is pushed to the integrations and a confirmation mail is sent.",
            anyOf: [
              {
                $ref: "#/$defs/BaseConfirmationPolicy_2024_06_14",
              },
              {
                $ref: "#/$defs/Disabled_2024_06_14",
              },
            ],
            type: "object",
          },
          recurrence: {
            description: "Create a recurring event type.",
            anyOf: [
              {
                $ref: "#/$defs/Recurrence_2024_06_14",
              },
              {
                $ref: "#/$defs/Disabled_2024_06_14",
              },
            ],
            type: "object",
          },
          requiresBookerEmailVerification: {
            type: "boolean",
          },
          hideCalendarNotes: {
            type: "boolean",
          },
          lockTimeZoneToggleOnBookingPage: {
            type: "boolean",
          },
          color: {
            $ref: "#/$defs/EventTypeColor_2024_06_14",
          },
          seats: {
            description: "Create an event type with multiple seats.",
            anyOf: [
              {
                $ref: "#/$defs/Seats_2024_06_14",
              },
              {
                $ref: "#/$defs/Disabled_2024_06_14",
              },
            ],
            type: "object",
          },
          customName: {
            description:
              "Customizable event name with valid variables:\n      {Event type title}, {Organiser}, {Scheduler}, {Location}, {Organiser first name},\n      {Scheduler first name}, {Scheduler last name}, {Event duration}, {LOCATION},\n      {HOST/ATTENDEE}, {HOST}, {ATTENDEE}, {USER}",
            examples: [
              "{Event type title} between {Organiser} and {Scheduler}",
            ],
            type: "string",
          },
          destinationCalendar: {
            $ref: "#/$defs/DestinationCalendar_2024_06_14",
          },
          useDestinationCalendarEmail: {
            type: "boolean",
          },
          hideCalendarEventDetails: {
            type: "boolean",
          },
          successRedirectUrl: {
            description:
              "A valid URL where the booker will redirect to, once the booking is completed successfully",
            examples: ["https://masterchief.com/argentina/flan/video/9129412"],
            type: "string",
          },
          hosts: {
            type: "array",
            items: {
              $ref: "#/$defs/Host",
            },
          },
          assignAllTeamMembers: {
            description:
              "If true, all current and future team members will be assigned to this event type",
            type: "boolean",
          },
          locations: {
            description:
              "Locations where the event will take place. If not provided, cal video link will be used as the location.",
            type: "array",
            items: {
              anyOf: [
                {
                  $ref: "#/$defs/InputAddressLocation_2024_06_14",
                },
                {
                  $ref: "#/$defs/InputLinkLocation_2024_06_14",
                },
                {
                  $ref: "#/$defs/InputIntegrationLocation_2024_06_14",
                },
                {
                  $ref: "#/$defs/InputPhoneLocation_2024_06_14",
                },
                {
                  $ref: "#/$defs/InputAttendeeAddressLocation_2024_06_14",
                },
                {
                  $ref: "#/$defs/InputAttendeePhoneLocation_2024_06_14",
                },
                {
                  $ref: "#/$defs/InputAttendeeDefinedLocation_2024_06_14",
                },
                {
                  $ref: "#/$defs/InputOrganizersDefaultApp_2024_06_14",
                },
              ],
              type: "object",
            },
          },
        },
      },
      NameDefaultFieldInput_2024_06_14: {
        required: ["type", "label", "placeholder"],
        type: "object",
        properties: {
          type: {
            description:
              "only allowed value for type is `name`. Used for having 1 booking field for both first name and last name.",
            examples: ["name"],
            type: "string",
          },
          label: {
            type: "string",
          },
          placeholder: {
            type: "string",
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if URL contains query parameter `&name=bob`,      the name field will be prefilled with this value and disabled.",
            type: "boolean",
          },
        },
      },
      EmailDefaultFieldInput_2024_06_14: {
        required: ["type", "label", "required", "placeholder"],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `email`",
            examples: ["email"],
            type: "string",
          },
          label: {
            type: "string",
          },
          required: {
            type: "object",
          },
          placeholder: {
            type: "string",
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if URL contains query parameter `&email=bob@gmail.com`,      the email field will be prefilled with this value and disabled.",
            type: "boolean",
          },
        },
      },
      TitleDefaultFieldInput_2024_06_14: {
        required: ["slug"],
        type: "object",
        properties: {
          slug: {
            description: "only allowed value for type is `title`",
            examples: ["title"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
          label: {
            type: "string",
          },
          placeholder: {
            type: "string",
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if URL contains query parameter `&title=journey`,      the title field will be prefilled with this value and disabled.",
            type: "boolean",
          },
        },
      },
      NotesDefaultFieldInput_2024_06_14: {
        required: ["slug"],
        type: "object",
        properties: {
          slug: {
            description: "only allowed value for type is `notes`",
            examples: ["notes"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
          label: {
            type: "string",
          },
          placeholder: {
            type: "string",
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if URL contains query parameter `&notes=journey`,      the notes field will be prefilled with this value and disabled.",
            type: "boolean",
          },
        },
      },
      GuestsDefaultFieldInput_2024_06_14: {
        required: ["slug"],
        type: "object",
        properties: {
          slug: {
            description: "only allowed value for type is `guests`",
            examples: ["guests"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
          label: {
            type: "string",
          },
          placeholder: {
            type: "string",
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if URL contains query parameter `&guests=bob@cal.com`,      the guests field will be prefilled with this value and disabled.",
            type: "boolean",
          },
        },
      },
      RescheduleReasonDefaultFieldInput_2024_06_14: {
        required: ["slug"],
        type: "object",
        properties: {
          slug: {
            description: "only allowed value for type is `rescheduleReason`",
            examples: ["rescheduleReason"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
          label: {
            type: "string",
          },
          placeholder: {
            type: "string",
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if URL contains query parameter `&rescheduleReason=travel`,      the rescheduleReason field will be prefilled with this value and disabled.",
            type: "boolean",
          },
        },
      },
      PhoneFieldInput_2024_06_14: {
        required: [
          "type",
          "slug",
          "label",
          "required",
          "placeholder",
          "hidden",
        ],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `phone`",
            examples: ["phone"],
            type: "string",
          },
          slug: {
            description:
              "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            examples: ["some-slug"],
            type: "string",
          },
          label: {
            type: "string",
          },
          required: {
            type: "boolean",
          },
          placeholder: {
            type: "string",
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `phone` and the URL contains query parameter `&phone=1234567890`,      the phone field will be prefilled with this value and disabled.",
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
        },
      },
      AddressFieldInput_2024_06_14: {
        required: [
          "type",
          "slug",
          "label",
          "required",
          "placeholder",
          "hidden",
        ],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `address`",
            examples: ["address"],
            type: "string",
          },
          slug: {
            description:
              "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            examples: ["some-slug"],
            type: "string",
          },
          label: {
            examples: ["Please enter your address"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          placeholder: {
            examples: ["e.g., 1234 Main St"],
            type: "string",
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `address` and the URL contains query parameter `&address=1234 Main St, London`,      the address field will be prefilled with this value and disabled.",
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
        },
      },
      TextFieldInput_2024_06_14: {
        required: [
          "type",
          "slug",
          "label",
          "required",
          "placeholder",
          "hidden",
        ],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `text`",
            examples: ["text"],
            type: "string",
          },
          slug: {
            description:
              "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            examples: ["some-slug"],
            type: "string",
          },
          label: {
            examples: ["Please enter your text"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          placeholder: {
            examples: ["e.g., Enter text here"],
            type: "string",
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `who-referred-you` and the URL contains query parameter `&who-referred-you=bob`,      the text field will be prefilled with this value and disabled.",
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
        },
      },
      NumberFieldInput_2024_06_14: {
        required: [
          "type",
          "slug",
          "label",
          "required",
          "placeholder",
          "hidden",
        ],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `number`",
            examples: ["number"],
            type: "string",
          },
          slug: {
            description:
              "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            examples: ["some-slug"],
            type: "string",
          },
          label: {
            examples: ["Please enter a number"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          placeholder: {
            examples: ["e.g., 100"],
            type: "string",
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `calories-per-day` and the URL contains query parameter `&calories-per-day=3000`,      the number field will be prefilled with this value and disabled.",
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
        },
      },
      TextAreaFieldInput_2024_06_14: {
        required: [
          "type",
          "slug",
          "label",
          "required",
          "placeholder",
          "hidden",
        ],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `textarea`",
            examples: ["textarea"],
            type: "string",
          },
          slug: {
            description:
              "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            examples: ["some-slug"],
            type: "string",
          },
          label: {
            examples: ["Please enter detailed information"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          placeholder: {
            examples: ["e.g., Detailed description here..."],
            type: "string",
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `dear-diary` and the URL contains query parameter `&dear-diary=Today I shipped a feature`,      the text area will be prefilled with this value and disabled.",
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
        },
      },
      SelectFieldInput_2024_06_14: {
        required: [
          "type",
          "slug",
          "label",
          "required",
          "placeholder",
          "options",
          "hidden",
        ],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `select`",
            examples: ["select"],
            type: "string",
          },
          slug: {
            description:
              "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            examples: ["some-slug"],
            type: "string",
          },
          label: {
            examples: ["Please select an option"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          placeholder: {
            examples: ["Select..."],
            type: "string",
          },
          options: {
            examples: [["Option 1", "Option 2"]],
            type: "array",
            items: {
              type: "string",
            },
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `language` and options of this select field are ['english', 'italian'] and the URL contains query parameter `&language=italian`,      the 'italian' will be selected and the select field will be disabled.",
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
        },
      },
      MultiSelectFieldInput_2024_06_14: {
        required: ["type", "slug", "label", "required", "options", "hidden"],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `multiselect`",
            examples: ["multiselect"],
            type: "string",
          },
          slug: {
            description:
              "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            examples: ["some-slug"],
            type: "string",
          },
          label: {
            examples: ["Please select multiple options"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          options: {
            examples: [["Option 1", "Option 2"]],
            type: "array",
            items: {
              type: "string",
            },
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `consultants` and the URL contains query parameter `&consultants=en&language=it`,      the 'en' and 'it' will be selected and the select field will be disabled.",
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
        },
      },
      MultiEmailFieldInput_2024_06_14: {
        required: [
          "type",
          "slug",
          "label",
          "required",
          "placeholder",
          "hidden",
        ],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `multiemail`",
            examples: ["multiemail"],
            type: "string",
          },
          slug: {
            description:
              "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            examples: ["some-slug"],
            type: "string",
          },
          label: {
            examples: ["Please enter multiple emails"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          placeholder: {
            examples: ["e.g., example@example.com"],
            type: "string",
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `consultants` and the URL contains query parameter `&consultants=alice@gmail.com&consultants=bob@gmail.com`,      the these emails will be added and none more can be added.",
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
        },
      },
      CheckboxGroupFieldInput_2024_06_14: {
        required: ["type", "slug", "label", "required", "options", "hidden"],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `checkbox`",
            examples: ["checkbox"],
            type: "string",
          },
          slug: {
            description:
              "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            examples: ["some-slug"],
            type: "string",
          },
          label: {
            examples: ["Select all that apply"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          options: {
            examples: [["Checkbox 1", "Checkbox 2"]],
            type: "array",
            items: {
              type: "string",
            },
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `notify-me` and the URL contains query parameter `&notify-me=true`,      the checkbox will be selected and the checkbox field will be disabled.",
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
        },
      },
      RadioGroupFieldInput_2024_06_14: {
        required: ["type", "slug", "label", "required", "options", "hidden"],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `radio`",
            examples: ["radio"],
            type: "string",
          },
          slug: {
            description:
              "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            examples: ["some-slug"],
            type: "string",
          },
          label: {
            examples: ["Select one option"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          options: {
            examples: [["Radio 1", "Radio 2"]],
            type: "array",
            items: {
              type: "string",
            },
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `language` and options of this select field are ['english', 'italian'] and the URL contains query parameter `&language=italian`,      the 'italian' radio button will be selected and the select field will be disabled.",
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
        },
      },
      BooleanFieldInput_2024_06_14: {
        required: ["type", "slug", "label", "required", "hidden"],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `boolean`",
            examples: ["boolean"],
            type: "string",
          },
          slug: {
            description:
              "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            examples: ["some-slug"],
            type: "string",
          },
          label: {
            examples: ["Agree to terms?"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          disableOnPrefill: {
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
        },
      },
      BaseBookingLimitsCount_2024_06_14: {
        type: "object",
        properties: {
          day: {
            description: "The number of bookings per day",
            examples: [1],
            type: "number",
          },
          week: {
            description: "The number of bookings per week",
            examples: [2],
            type: "number",
          },
          month: {
            description: "The number of bookings per month",
            examples: [3],
            type: "number",
          },
          year: {
            description: "The number of bookings per year",
            examples: [4],
            type: "number",
          },
          disabled: {
            default: false,
            type: "boolean",
          },
        },
      },
      Disabled_2024_06_14: {
        required: ["disabled"],
        type: "object",
        properties: {
          disabled: {
            default: false,
            description: "Indicates if the option is disabled",
            examples: [true],
            type: "boolean",
          },
        },
      },
      BaseBookingLimitsDuration_2024_06_14: {
        type: "object",
        properties: {
          day: {
            description:
              "The duration of bookings per day (must be a multiple of 15)",
            examples: [60],
            type: "number",
          },
          week: {
            description:
              "The duration of bookings per week (must be a multiple of 15)",
            examples: [120],
            type: "number",
          },
          month: {
            description:
              "The duration of bookings per month (must be a multiple of 15)",
            examples: [180],
            type: "number",
          },
          year: {
            description:
              "The duration of bookings per year (must be a multiple of 15)",
            examples: [240],
            type: "number",
          },
        },
      },
      BusinessDaysWindow_2024_06_14: {
        required: ["type", "value"],
        type: "object",
        properties: {
          type: {
            description:
              "Whether the window should be business days, calendar days or a range of dates",
            enum: ["businessDays", "calendarDays", "range"],
            type: "string",
          },
          value: {
            description:
              "How many business day into the future can this event be booked",
            examples: [5],
            type: "number",
          },
          rolling: {
            description:
              "\n      Determines the behavior of the booking window:\n      - If **true**, the window is rolling. This means the number of available days will always be equal the specified 'value' \n        and adjust dynamically as bookings are made. For example, if 'value' is 3 and availability is only on Mondays, \n        a booker attempting to schedule on November 10 will see slots on November 11, 18, and 25. As one of these days \n        becomes fully booked, a new day (e.g., December 2) will open up to ensure 3 available days are always visible.\n      - If **false**, the window is fixed. This means the booking window only considers the next 'value' days from the\n        moment someone is trying to book. For example, if 'value' is 3, availability is only on Mondays, and the current \n        date is November 10, the booker will only see slots on November 11 because the window is restricted to the next \n        3 calendar days (November 10\u201312).\n    ",
            examples: [true],
            type: "boolean",
          },
        },
      },
      CalendarDaysWindow_2024_06_14: {
        required: ["type", "value"],
        type: "object",
        properties: {
          type: {
            description:
              "Whether the window should be business days, calendar days or a range of dates",
            enum: ["businessDays", "calendarDays", "range"],
            type: "string",
          },
          value: {
            description:
              "How many calendar days into the future can this event be booked",
            examples: [5],
            type: "number",
          },
          rolling: {
            description:
              "\n      Determines the behavior of the booking window:\n      - If **true**, the window is rolling. This means the number of available days will always be equal the specified 'value' \n        and adjust dynamically as bookings are made. For example, if 'value' is 3 and availability is only on Mondays, \n        a booker attempting to schedule on November 10 will see slots on November 11, 18, and 25. As one of these days \n        becomes fully booked, a new day (e.g., December 2) will open up to ensure 3 available days are always visible.\n      - If **false**, the window is fixed. This means the booking window only considers the next 'value' days from the\n        moment someone is trying to book. For example, if 'value' is 3, availability is only on Mondays, and the current \n        date is November 10, the booker will only see slots on November 11 because the window is restricted to the next \n        3 calendar days (November 10\u201312).\n    ",
            examples: [true],
            type: "boolean",
          },
        },
      },
      RangeWindow_2024_06_14: {
        required: ["type", "value"],
        type: "object",
        properties: {
          type: {
            description:
              "Whether the window should be business days, calendar days or a range of dates",
            enum: ["businessDays", "calendarDays", "range"],
            type: "string",
          },
          value: {
            description: "Date range for when this event can be booked.",
            examples: [["2030-09-05", "2030-09-09"]],
            type: "array",
            items: {
              type: "string",
            },
          },
        },
      },
      BookerLayouts_2024_06_14: {
        required: ["defaultLayout", "enabledLayouts"],
        type: "object",
        properties: {
          defaultLayout: {
            enum: ["month", "week", "column"],
            type: "string",
          },
          enabledLayouts: {
            type: "array",
            items: {
              enum: ["month", "week", "column"],
              type: "string",
            },
          },
        },
      },
      BaseConfirmationPolicy_2024_06_14: {
        required: ["type", "blockUnconfirmedBookingsInBooker"],
        type: "object",
        properties: {
          type: {
            description:
              "The policy that determines when confirmation is required",
            enum: ["always", "time"],
            examples: ["always"],
            type: "string",
          },
          noticeThreshold: {
            description:
              "The notice threshold required before confirmation is needed. Required when type is 'time'.",
            allOf: [
              {
                $ref: "#/$defs/NoticeThreshold_2024_06_14",
              },
            ],
          },
          blockUnconfirmedBookingsInBooker: {
            description: "Unconfirmed bookings still block calendar slots.",
            type: "boolean",
          },
        },
      },
      NoticeThreshold_2024_06_14: {
        required: ["unit", "count"],
        type: "object",
        properties: {
          unit: {
            description:
              "The unit of time for the notice threshold (e.g., minutes, hours)",
            examples: ["minutes"],
            type: "string",
          },
          count: {
            description: "The time value for the notice threshold",
            examples: [30],
            type: "number",
          },
        },
      },
      Recurrence_2024_06_14: {
        required: ["interval", "occurrences", "frequency"],
        type: "object",
        properties: {
          interval: {
            description: "Repeats every {count} week | month | year",
            examples: [10],
            type: "number",
          },
          occurrences: {
            description: "Repeats for a maximum of {count} events",
            examples: [10],
            type: "number",
          },
          frequency: {
            enum: ["yearly", "monthly", "weekly"],
            type: "string",
          },
        },
      },
      EventTypeColor_2024_06_14: {
        required: ["lightThemeHex", "darkThemeHex"],
        type: "object",
        properties: {
          lightThemeHex: {
            description: "Color used for event types in light theme",
            examples: ["#292929"],
            type: "string",
          },
          darkThemeHex: {
            description: "Color used for event types in dark theme",
            examples: ["#fafafa"],
            type: "string",
          },
        },
      },
      Seats_2024_06_14: {
        required: [
          "seatsPerTimeSlot",
          "showAttendeeInfo",
          "showAvailabilityCount",
        ],
        type: "object",
        properties: {
          seatsPerTimeSlot: {
            description: "Number of seats available per time slot",
            examples: [4],
            type: "number",
          },
          showAttendeeInfo: {
            description: "Show attendee information to other guests",
            examples: [true],
            type: "boolean",
          },
          showAvailabilityCount: {
            description: "Display the count of available seats",
            examples: [true],
            type: "boolean",
          },
        },
      },
      DestinationCalendar_2024_06_14: {
        required: ["integration", "externalId"],
        type: "object",
        properties: {
          integration: {
            description:
              "The integration type of the destination calendar. Refer to the /api/v2/calendars endpoint to retrieve the integration type of your connected calendars.",
            type: "string",
          },
          externalId: {
            description:
              "The external ID of the destination calendar. Refer to the /api/v2/calendars endpoint to retrieve the external IDs of your connected calendars.",
            type: "string",
          },
        },
      },
      Host: {
        required: ["userId"],
        type: "object",
        properties: {
          userId: {
            description: "Which user is the host of this event",
            type: "number",
          },
          mandatory: {
            description:
              "Only relevant for round robin event types. If true then the user must attend round robin event always.",
            type: "boolean",
          },
          priority: {
            enum: ["lowest", "low", "medium", "high", "highest"],
            type: "string",
          },
        },
      },
      InputAddressLocation_2024_06_14: {
        required: ["type", "address", "public"],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `address`",
            examples: ["address"],
            type: "string",
          },
          address: {
            examples: ["123 Example St, City, Country"],
            type: "string",
          },
          public: {
            type: "boolean",
          },
        },
      },
      InputLinkLocation_2024_06_14: {
        required: ["type", "link", "public"],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `link`",
            examples: ["link"],
            type: "string",
          },
          link: {
            examples: ["https://customvideo.com/join/123456"],
            type: "string",
          },
          public: {
            type: "boolean",
          },
        },
      },
      InputIntegrationLocation_2024_06_14: {
        required: ["type", "integration"],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `integration`",
            examples: ["integration"],
            type: "string",
          },
          integration: {
            enum: ["cal-video", "google-meet", "office365-video", "zoom"],
            examples: ["cal-video"],
            type: "string",
          },
        },
      },
      InputPhoneLocation_2024_06_14: {
        required: ["type", "phone", "public"],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `phone`",
            examples: ["phone"],
            type: "string",
          },
          phone: {
            examples: ["+37120993151"],
            type: "string",
          },
          public: {
            type: "boolean",
          },
        },
      },
      InputAttendeeAddressLocation_2024_06_14: {
        required: ["type"],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `attendeeAddress`",
            examples: ["attendeeAddress"],
            type: "string",
          },
        },
      },
      InputAttendeePhoneLocation_2024_06_14: {
        required: ["type"],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `attendeePhone`",
            examples: ["attendeePhone"],
            type: "string",
          },
        },
      },
      InputAttendeeDefinedLocation_2024_06_14: {
        required: ["type"],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `attendeeDefined`",
            examples: ["attendeeDefined"],
            type: "string",
          },
        },
      },
      InputOrganizersDefaultApp_2024_06_14: {
        required: ["type"],
        type: "object",
        properties: {
          type: {
            description:
              "only allowed value for type is `organizersDefaultApp`",
            examples: ["organizersDefaultApp"],
            type: "string",
          },
        },
      },
    },
  },
  {
    description: "Create a phone call",
    method: "post",
    name: "OrganizationsEventTypesController_createPhoneCall",
    url: "https://api.cal.com/v2/organizations/{orgId}/teams/{teamId}/event-types/{eventTypeId}/create-phone-call",
    params: [
      {
        in: "path",
        name: "eventTypeId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
      {
        in: "path",
        name: "orgId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
    ],
    body: {
      $ref: "#/$defs/CreatePhoneCallInput",
    },
    contentType: "application/json",
    defs: {
      CreatePhoneCallInput: {
        required: [
          "yourPhoneNumber",
          "numberToCall",
          "calApiKey",
          "enabled",
          "templateType",
        ],
        type: "object",
        properties: {
          yourPhoneNumber: {
            description: "Your phone number",
            pattern: "/^\\+[1-9]\\d{1,14}$/",
            type: "string",
          },
          numberToCall: {
            description: "Number to call",
            pattern: "/^\\+[1-9]\\d{1,14}$/",
            type: "string",
          },
          calApiKey: {
            description: "CAL API Key",
            type: "string",
          },
          enabled: {
            default: true,
            description: "Enabled status",
            type: "object",
          },
          templateType: {
            default: "CUSTOM_TEMPLATE",
            description: "Template type",
            enum: ["CHECK_IN_APPOINTMENT", "CUSTOM_TEMPLATE"],
            type: "string",
          },
          schedulerName: {
            description: "Scheduler name",
            type: "string",
          },
          guestName: {
            description: "Guest name",
            type: "string",
          },
          guestEmail: {
            description: "Guest email",
            type: "string",
          },
          guestCompany: {
            description: "Guest company",
            type: "string",
          },
          beginMessage: {
            description: "Begin message",
            type: "string",
          },
          generalPrompt: {
            description: "General prompt",
            type: "string",
          },
        },
      },
    },
  },
  {
    description: "Get all team event types",
    method: "get",
    name: "OrganizationsEventTypesController_getTeamsEventTypes",
    url: "https://api.cal.com/v2/organizations/{orgId}/teams/event-types",
    params: [
      {
        in: "path",
        name: "orgId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
      {
        description: "The number of items to return",
        in: "query",
        name: "take",
        required: false,
        example: 10,
        explode: true,
        schema: {
          type: "number",
        },
        style: "form",
      },
      {
        description: "The number of items to skip",
        in: "query",
        name: "skip",
        required: false,
        example: 0,
        explode: true,
        schema: {
          type: "number",
        },
        style: "form",
      },
    ],
    defs: {},
  },
  {
    description: "Get all memberships",
    method: "get",
    name: "OrganizationsMembershipsController_getAllMemberships",
    url: "https://api.cal.com/v2/organizations/{orgId}/memberships",
    params: [
      {
        in: "path",
        name: "orgId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
      {
        description: "The number of items to return",
        in: "query",
        name: "take",
        required: false,
        example: 10,
        explode: true,
        schema: {
          type: "number",
        },
        style: "form",
      },
      {
        description: "The number of items to skip",
        in: "query",
        name: "skip",
        required: false,
        example: 0,
        explode: true,
        schema: {
          type: "number",
        },
        style: "form",
      },
    ],
    defs: {},
  },
  {
    description: "Create a membership",
    method: "post",
    name: "OrganizationsMembershipsController_createMembership",
    url: "https://api.cal.com/v2/organizations/{orgId}/memberships",
    params: [
      {
        in: "path",
        name: "orgId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
    ],
    body: {
      $ref: "#/$defs/CreateOrgMembershipDto",
    },
    contentType: "application/json",
    defs: {
      CreateOrgMembershipDto: {
        required: ["userId", "role"],
        type: "object",
        properties: {
          userId: {
            type: "number",
          },
          accepted: {
            default: false,
            type: "boolean",
          },
          role: {
            default: "MEMBER",
            enum: ["MEMBER", "OWNER", "ADMIN"],
            type: "string",
          },
          disableImpersonation: {
            default: false,
            type: "boolean",
          },
        },
      },
    },
  },
  {
    description: "Get a membership",
    method: "get",
    name: "OrganizationsMembershipsController_getOrgMembership",
    url: "https://api.cal.com/v2/organizations/{orgId}/memberships/{membershipId}",
    params: [
      {
        in: "path",
        name: "orgId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
      {
        in: "path",
        name: "membershipId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
    ],
    defs: {},
  },
  {
    description: "Delete a membership",
    method: "delete",
    name: "OrganizationsMembershipsController_deleteMembership",
    url: "https://api.cal.com/v2/organizations/{orgId}/memberships/{membershipId}",
    params: [
      {
        in: "path",
        name: "orgId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
      {
        in: "path",
        name: "membershipId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
    ],
    defs: {},
  },
  {
    description: "Update a membership",
    method: "patch",
    name: "OrganizationsMembershipsController_updateMembership",
    url: "https://api.cal.com/v2/organizations/{orgId}/memberships/{membershipId}",
    params: [
      {
        in: "path",
        name: "orgId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
      {
        in: "path",
        name: "membershipId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
    ],
    body: {
      $ref: "#/$defs/UpdateOrgMembershipDto",
    },
    contentType: "application/json",
    defs: {
      UpdateOrgMembershipDto: {
        type: "object",
        properties: {
          accepted: {
            type: "boolean",
          },
          role: {
            enum: ["MEMBER", "OWNER", "ADMIN"],
            type: "string",
          },
          disableImpersonation: {
            type: "boolean",
          },
        },
      },
    },
  },
  {
    description:
      "Requires the user to have at least the 'ORG_ADMIN' role within the organization. Additionally, for platform, the plan must be 'SCALE' or higher to access this endpoint.",
    method: "get",
    name: "OrganizationsOrganizationsController_getOrganizations",
    url: "https://api.cal.com/v2/organizations/{orgId}/organizations",
    params: [
      {
        in: "path",
        name: "orgId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
    ],
    defs: {},
  },
  {
    description:
      "Requires the user to have at least the 'ORG_ADMIN' role within the organization. Additionally, for platform, the plan must be 'SCALE' or higher to access this endpoint.",
    method: "post",
    name: "OrganizationsOrganizationsController_createOrganization",
    url: "https://api.cal.com/v2/organizations/{orgId}/organizations",
    params: [
      {
        in: "path",
        name: "orgId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
    ],
    body: {
      $ref: "#/$defs/CreateOrganizationInput",
    },
    contentType: "application/json",
    defs: {
      CreateOrganizationInput: {
        required: ["name"],
        type: "object",
        properties: {
          apiKeyDaysValid: {
            default: 30,
            description:
              "For how many days is managed organization api key valid. Defaults to 30 days.",
            examples: [60],
            minimum: 1,
            type: "number",
          },
          apiKeyNeverExpires: {
            description: "If true, organization api key never expires.",
            examples: [true],
            type: "boolean",
          },
          name: {
            description: "Name of the organization",
            examples: ["CalTeam"],
            minLength: 1,
            type: "string",
          },
          metadata: {
            description:
              "You can store any additional data you want here.\nMetadata must have at most 50 keys, each key up to 40 characters.\nValues can be strings (up to 500 characters), numbers, or booleans.",
            examples: [
              {
                key: "value",
              },
            ],
            type: "object",
          },
        },
      },
    },
  },
  {
    description:
      "Requires the user to have at least the 'ORG_ADMIN' role within the organization. Additionally, for platform, the plan must be 'SCALE' or higher to access this endpoint.",
    method: "get",
    name: "OrganizationsOrganizationsController_getOrganization",
    url: "https://api.cal.com/v2/organizations/{orgId}/organizations/{managedOrganizationId}",
    params: [
      {
        in: "path",
        name: "managedOrganizationId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
    ],
    defs: {},
  },
  {
    description:
      "Requires the user to have at least the 'ORG_ADMIN' role within the organization. Additionally, for platform, the plan must be 'SCALE' or higher to access this endpoint.",
    method: "delete",
    name: "OrganizationsOrganizationsController_deleteOrganization",
    url: "https://api.cal.com/v2/organizations/{orgId}/organizations/{managedOrganizationId}",
    params: [
      {
        in: "path",
        name: "managedOrganizationId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
    ],
    defs: {},
  },
  {
    description:
      "Requires the user to have at least the 'ORG_ADMIN' role within the organization. Additionally, for platform, the plan must be 'SCALE' or higher to access this endpoint.",
    method: "patch",
    name: "OrganizationsOrganizationsController_updateOrganization",
    url: "https://api.cal.com/v2/organizations/{orgId}/organizations/{managedOrganizationId}",
    params: [
      {
        in: "path",
        name: "orgId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
      {
        in: "path",
        name: "managedOrganizationId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
    ],
    body: {
      $ref: "#/$defs/UpdateOrganizationInput",
    },
    contentType: "application/json",
    defs: {
      UpdateOrganizationInput: {
        type: "object",
        properties: {
          name: {
            description: "Name of the organization",
            examples: ["CalTeam"],
            minLength: 1,
            type: "string",
          },
          metadata: {
            description:
              "You can store any additional data you want here.\nMetadata must have at most 50 keys, each key up to 40 characters.\nValues can be strings (up to 500 characters), numbers, or booleans.",
            examples: [
              {
                key: "value",
              },
            ],
            type: "object",
          },
        },
      },
    },
  },
  {
    description: "Get all schedules",
    method: "get",
    name: "OrganizationsSchedulesController_getOrganizationSchedules",
    url: "https://api.cal.com/v2/organizations/{orgId}/schedules",
    params: [
      {
        in: "path",
        name: "orgId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
      {
        description: "The number of items to return",
        in: "query",
        name: "take",
        required: false,
        example: 10,
        explode: true,
        schema: {
          type: "number",
        },
        style: "form",
      },
      {
        description: "The number of items to skip",
        in: "query",
        name: "skip",
        required: false,
        example: 0,
        explode: true,
        schema: {
          type: "number",
        },
        style: "form",
      },
    ],
    defs: {},
  },
  {
    description: "Get all schedules",
    method: "get",
    name: "OrganizationsSchedulesController_getUserSchedules",
    url: "https://api.cal.com/v2/organizations/{orgId}/users/{userId}/schedules",
    params: [
      {
        in: "path",
        name: "userId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
    ],
    defs: {},
  },
  {
    description: "Create a schedule",
    method: "post",
    name: "OrganizationsSchedulesController_createUserSchedule",
    url: "https://api.cal.com/v2/organizations/{orgId}/users/{userId}/schedules",
    params: [
      {
        in: "path",
        name: "userId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
    ],
    body: {
      $ref: "#/$defs/CreateScheduleInput_2024_06_11",
    },
    contentType: "application/json",
    defs: {
      CreateScheduleInput_2024_06_11: {
        required: ["name", "timeZone", "isDefault"],
        type: "object",
        properties: {
          name: {
            examples: ["Catch up hours"],
            type: "string",
          },
          timeZone: {
            description:
              "Timezone is used to calculate available times when an event using the schedule is booked.",
            examples: ["Europe/Rome"],
            type: "string",
          },
          availability: {
            description:
              "Each object contains days and times when the user is available. If not passed, the default availability is Monday to Friday from 09:00 to 17:00.",
            examples: [
              [
                {
                  days: ["Monday", "Tuesday"],
                  startTime: "17:00",
                  endTime: "19:00",
                },
                {
                  days: ["Wednesday", "Thursday"],
                  startTime: "16:00",
                  endTime: "20:00",
                },
              ],
            ],
            type: "array",
            items: {
              $ref: "#/$defs/ScheduleAvailabilityInput_2024_06_11",
            },
          },
          isDefault: {
            description:
              "Each user should have 1 default schedule. If you specified `timeZone` when creating managed user, then the default schedule will be created with that timezone.\n    Default schedule means that if an event type is not tied to a specific schedule then the default schedule is used.",
            examples: [true],
            type: "boolean",
          },
          overrides: {
            description:
              "Need to change availability for a specific date? Add an override.",
            examples: [
              [
                {
                  date: "2024-05-20",
                  startTime: "18:00",
                  endTime: "21:00",
                },
              ],
            ],
            type: "array",
            items: {
              $ref: "#/$defs/ScheduleOverrideInput_2024_06_11",
            },
          },
        },
      },
      ScheduleAvailabilityInput_2024_06_11: {
        required: ["days", "startTime", "endTime"],
        type: "object",
        properties: {
          days: {
            description: "Array of days when schedule is active.",
            enum: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            examples: [["Monday", "Tuesday"]],
            type: "array",
            items: {
              enum: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              type: "string",
            },
          },
          startTime: {
            description:
              "startTime must be a valid time in format HH:MM e.g. 08:00",
            examples: ["08:00"],
            pattern: "TIME_FORMAT_HH_MM",
            type: "string",
          },
          endTime: {
            description:
              "endTime must be a valid time in format HH:MM e.g. 15:00",
            examples: ["15:00"],
            pattern: "TIME_FORMAT_HH_MM",
            type: "string",
          },
        },
      },
      ScheduleOverrideInput_2024_06_11: {
        required: ["date", "startTime", "endTime"],
        type: "object",
        properties: {
          date: {
            examples: ["2024-05-20"],
            type: "string",
          },
          startTime: {
            description:
              "startTime must be a valid time in format HH:MM e.g. 12:00",
            examples: ["12:00"],
            pattern: "TIME_FORMAT_HH_MM",
            type: "string",
          },
          endTime: {
            description:
              "endTime must be a valid time in format HH:MM e.g. 13:00",
            examples: ["13:00"],
            pattern: "TIME_FORMAT_HH_MM",
            type: "string",
          },
        },
      },
    },
  },
  {
    description: "Get a schedule",
    method: "get",
    name: "OrganizationsSchedulesController_getUserSchedule",
    url: "https://api.cal.com/v2/organizations/{orgId}/users/{userId}/schedules/{scheduleId}",
    params: [
      {
        in: "path",
        name: "userId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
      {
        in: "path",
        name: "scheduleId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
    ],
    defs: {},
  },
  {
    description: "Delete a schedule",
    method: "delete",
    name: "OrganizationsSchedulesController_deleteUserSchedule",
    url: "https://api.cal.com/v2/organizations/{orgId}/users/{userId}/schedules/{scheduleId}",
    params: [
      {
        in: "path",
        name: "userId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
      {
        in: "path",
        name: "scheduleId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
    ],
    defs: {},
  },
  {
    description: "Update a schedule",
    method: "patch",
    name: "OrganizationsSchedulesController_updateUserSchedule",
    url: "https://api.cal.com/v2/organizations/{orgId}/users/{userId}/schedules/{scheduleId}",
    params: [
      {
        in: "path",
        name: "userId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
      {
        in: "path",
        name: "scheduleId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
    ],
    body: {
      $ref: "#/$defs/UpdateScheduleInput_2024_06_11",
    },
    contentType: "application/json",
    defs: {
      UpdateScheduleInput_2024_06_11: {
        type: "object",
        properties: {
          name: {
            examples: ["One-on-one coaching"],
            type: "string",
          },
          timeZone: {
            examples: ["Europe/Rome"],
            type: "string",
          },
          availability: {
            examples: [
              [
                {
                  days: ["Monday", "Tuesday"],
                  startTime: "09:00",
                  endTime: "10:00",
                },
              ],
            ],
            type: "array",
            items: {
              $ref: "#/$defs/ScheduleAvailabilityInput_2024_06_11",
            },
          },
          isDefault: {
            examples: [true],
            type: "boolean",
          },
          overrides: {
            examples: [
              [
                {
                  date: "2024-05-20",
                  startTime: "12:00",
                  endTime: "14:00",
                },
              ],
            ],
            type: "array",
            items: {
              $ref: "#/$defs/ScheduleOverrideInput_2024_06_11",
            },
          },
        },
      },
      ScheduleAvailabilityInput_2024_06_11: {
        required: ["days", "startTime", "endTime"],
        type: "object",
        properties: {
          days: {
            description: "Array of days when schedule is active.",
            enum: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            examples: [["Monday", "Tuesday"]],
            type: "array",
            items: {
              enum: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              type: "string",
            },
          },
          startTime: {
            description:
              "startTime must be a valid time in format HH:MM e.g. 08:00",
            examples: ["08:00"],
            pattern: "TIME_FORMAT_HH_MM",
            type: "string",
          },
          endTime: {
            description:
              "endTime must be a valid time in format HH:MM e.g. 15:00",
            examples: ["15:00"],
            pattern: "TIME_FORMAT_HH_MM",
            type: "string",
          },
        },
      },
      ScheduleOverrideInput_2024_06_11: {
        required: ["date", "startTime", "endTime"],
        type: "object",
        properties: {
          date: {
            examples: ["2024-05-20"],
            type: "string",
          },
          startTime: {
            description:
              "startTime must be a valid time in format HH:MM e.g. 12:00",
            examples: ["12:00"],
            pattern: "TIME_FORMAT_HH_MM",
            type: "string",
          },
          endTime: {
            description:
              "endTime must be a valid time in format HH:MM e.g. 13:00",
            examples: ["13:00"],
            pattern: "TIME_FORMAT_HH_MM",
            type: "string",
          },
        },
      },
    },
  },
  {
    description: "Get all teams",
    method: "get",
    name: "OrganizationsTeamsController_getAllTeams",
    url: "https://api.cal.com/v2/organizations/{orgId}/teams",
    params: [
      {
        in: "path",
        name: "orgId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
      {
        description: "The number of items to return",
        in: "query",
        name: "take",
        required: false,
        example: 10,
        explode: true,
        schema: {
          type: "number",
        },
        style: "form",
      },
      {
        description: "The number of items to skip",
        in: "query",
        name: "skip",
        required: false,
        example: 0,
        explode: true,
        schema: {
          type: "number",
        },
        style: "form",
      },
    ],
    defs: {},
  },
  {
    description: "Create a team",
    method: "post",
    name: "OrganizationsTeamsController_createTeam",
    url: "https://api.cal.com/v2/organizations/{orgId}/teams",
    params: [
      {
        in: "path",
        name: "orgId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
      {
        in: "header",
        name: "x-cal-client-id",
        required: true,
        explode: false,
        schema: {
          type: "string",
        },
        style: "simple",
      },
    ],
    body: {
      $ref: "#/$defs/CreateOrgTeamDto",
    },
    contentType: "application/json",
    defs: {
      CreateOrgTeamDto: {
        required: ["name"],
        type: "object",
        properties: {
          name: {
            description: "Name of the team",
            examples: ["CalTeam"],
            minLength: 1,
            type: "string",
          },
          slug: {
            description: "Team slug",
            examples: ["caltel"],
            type: "string",
          },
          logoUrl: {
            description: "URL of the teams logo image",
            examples: [
              "https://i.cal.com/api/avatar/b0b58752-68ad-4c0d-8024-4fa382a77752.png",
            ],
            type: "string",
          },
          calVideoLogo: {
            type: "string",
          },
          appLogo: {
            type: "string",
          },
          appIconLogo: {
            type: "string",
          },
          bio: {
            type: "string",
          },
          hideBranding: {
            default: false,
            type: "boolean",
          },
          isPrivate: {
            type: "boolean",
          },
          hideBookATeamMember: {
            type: "boolean",
          },
          metadata: {
            description:
              "You can store any additional data you want here.\nMetadata must have at most 50 keys, each key up to 40 characters.\nValues can be strings (up to 500 characters), numbers, or booleans.",
            examples: [
              {
                key: "value",
              },
            ],
            type: "object",
          },
          theme: {
            type: "string",
          },
          brandColor: {
            type: "string",
          },
          darkBrandColor: {
            type: "string",
          },
          bannerUrl: {
            description:
              "URL of the teams banner image which is shown on booker",
            examples: [
              "https://i.cal.com/api/avatar/949be534-7a88-4185-967c-c020b0c0bef3.png",
            ],
            type: "string",
          },
          timeFormat: {
            type: "number",
          },
          timeZone: {
            default: "Europe/London",
            description:
              "Timezone is used to create teams's default schedule from Monday to Friday from 9AM to 5PM. It will default to Europe/London if not passed.",
            examples: ["America/New_York"],
            type: "string",
          },
          weekStart: {
            default: "Sunday",
            examples: ["Monday"],
            type: "string",
          },
          autoAcceptCreator: {
            default: true,
            type: "boolean",
          },
        },
      },
    },
  },
  {
    description: "Get teams membership for user",
    method: "get",
    name: "OrganizationsTeamsController_getMyTeams",
    url: "https://api.cal.com/v2/organizations/{orgId}/teams/me",
    params: [
      {
        in: "path",
        name: "orgId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
      {
        description: "The number of items to return",
        in: "query",
        name: "take",
        required: false,
        example: 10,
        explode: true,
        schema: {
          type: "number",
        },
        style: "form",
      },
      {
        description: "The number of items to skip",
        in: "query",
        name: "skip",
        required: false,
        example: 0,
        explode: true,
        schema: {
          type: "number",
        },
        style: "form",
      },
    ],
    defs: {},
  },
  {
    description: "Get a team",
    method: "get",
    name: "OrganizationsTeamsController_getTeam",
    url: "https://api.cal.com/v2/organizations/{orgId}/teams/{teamId}",
    defs: {},
  },
  {
    description: "Delete a team",
    method: "delete",
    name: "OrganizationsTeamsController_deleteTeam",
    url: "https://api.cal.com/v2/organizations/{orgId}/teams/{teamId}",
    params: [
      {
        in: "path",
        name: "orgId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
      {
        in: "path",
        name: "teamId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
    ],
    defs: {},
  },
  {
    description: "Update a team",
    method: "patch",
    name: "OrganizationsTeamsController_updateTeam",
    url: "https://api.cal.com/v2/organizations/{orgId}/teams/{teamId}",
    params: [
      {
        in: "path",
        name: "orgId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
      {
        in: "path",
        name: "teamId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
    ],
    body: {
      $ref: "#/$defs/UpdateOrgTeamDto",
    },
    contentType: "application/json",
    defs: {
      UpdateOrgTeamDto: {
        type: "object",
        properties: {
          name: {
            description: "Name of the team",
            examples: ["CalTeam"],
            minLength: 1,
            type: "string",
          },
          slug: {
            description: "Team slug",
            examples: ["caltel"],
            type: "string",
          },
          logoUrl: {
            description: "URL of the teams logo image",
            examples: [
              "https://i.cal.com/api/avatar/b0b58752-68ad-4c0d-8024-4fa382a77752.png",
            ],
            type: "string",
          },
          calVideoLogo: {
            type: "string",
          },
          appLogo: {
            type: "string",
          },
          appIconLogo: {
            type: "string",
          },
          bio: {
            type: "string",
          },
          hideBranding: {
            type: "boolean",
          },
          isPrivate: {
            type: "boolean",
          },
          hideBookATeamMember: {
            type: "boolean",
          },
          metadata: {
            description:
              "You can store any additional data you want here.\nMetadata must have at most 50 keys, each key up to 40 characters.\nValues can be strings (up to 500 characters), numbers, or booleans.",
            examples: [
              {
                key: "value",
              },
            ],
            type: "object",
          },
          theme: {
            type: "string",
          },
          brandColor: {
            type: "string",
          },
          darkBrandColor: {
            type: "string",
          },
          bannerUrl: {
            description:
              "URL of the teams banner image which is shown on booker",
            examples: [
              "https://i.cal.com/api/avatar/949be534-7a88-4185-967c-c020b0c0bef3.png",
            ],
            type: "string",
          },
          timeFormat: {
            type: "number",
          },
          timeZone: {
            description:
              "Timezone is used to create teams's default schedule from Monday to Friday from 9AM to 5PM. It will default to Europe/London if not passed.",
            examples: ["America/New_York"],
            type: "string",
          },
          weekStart: {
            examples: ["Monday"],
            type: "string",
          },
          bookingLimits: {
            type: "string",
          },
          includeManagedEventsInLimits: {
            type: "boolean",
          },
        },
      },
    },
  },
  {
    description: "Get organization team bookings",
    method: "get",
    name: "OrganizationsTeamsBookingsController_getAllOrgTeamBookings",
    url: "https://api.cal.com/v2/organizations/{orgId}/teams/{teamId}/bookings",
    params: [
      {
        description:
          "Filter bookings by status. If you want to filter by multiple statuses, separate them with a comma.",
        in: "query",
        name: "status",
        required: false,
        example: "?status=upcoming,past",
        explode: true,
        schema: {
          type: "array",
          items: {
            enum: ["upcoming", "recurring", "past", "cancelled", "unconfirmed"],
            type: "string",
          },
        },
        style: "form",
      },
      {
        description: "Filter bookings by the attendee's email address.",
        in: "query",
        name: "attendeeEmail",
        required: false,
        example: "example@domain.com",
        explode: true,
        schema: {
          type: "string",
        },
        style: "form",
      },
      {
        description: "Filter bookings by the attendee's name.",
        in: "query",
        name: "attendeeName",
        required: false,
        example: "John Doe",
        explode: true,
        schema: {
          type: "string",
        },
        style: "form",
      },
      {
        description:
          "Filter bookings by event type ids belonging to the team. Event type ids must be separated by a comma.",
        in: "query",
        name: "eventTypeIds",
        required: false,
        example: "?eventTypeIds=100,200",
        explode: true,
        schema: {
          type: "string",
        },
        style: "form",
      },
      {
        description: "Filter bookings by event type id belonging to the team.",
        in: "query",
        name: "eventTypeId",
        required: false,
        example: "?eventTypeId=100",
        explode: true,
        schema: {
          type: "string",
        },
        style: "form",
      },
      {
        description: "Filter bookings with start after this date string.",
        in: "query",
        name: "afterStart",
        required: false,
        example: "?afterStart=2025-03-07T10:00:00.000Z",
        explode: true,
        schema: {
          type: "string",
        },
        style: "form",
      },
      {
        description: "Filter bookings with end before this date string.",
        in: "query",
        name: "beforeEnd",
        required: false,
        example: "?beforeEnd=2025-03-07T11:00:00.000Z",
        explode: true,
        schema: {
          type: "string",
        },
        style: "form",
      },
      {
        description:
          "Sort results by their start time in ascending or descending order.",
        in: "query",
        name: "sortStart",
        required: false,
        example: "?sortStart=asc OR ?sortStart=desc",
        explode: true,
        schema: {
          enum: ["asc", "desc"],
          type: "string",
        },
        style: "form",
      },
      {
        description:
          "Sort results by their end time in ascending or descending order.",
        in: "query",
        name: "sortEnd",
        required: false,
        example: "?sortEnd=asc OR ?sortEnd=desc",
        explode: true,
        schema: {
          enum: ["asc", "desc"],
          type: "string",
        },
        style: "form",
      },
      {
        description:
          "Sort results by their creation time (when booking was made) in ascending or descending order.",
        in: "query",
        name: "sortCreated",
        required: false,
        example: "?sortCreated=asc OR ?sortCreated=desc",
        explode: true,
        schema: {
          enum: ["asc", "desc"],
          type: "string",
        },
        style: "form",
      },
      {
        description: "The number of items to return",
        in: "query",
        name: "take",
        required: false,
        example: 10,
        explode: true,
        schema: {
          maximum: 250,
          minimum: 1,
          type: "number",
        },
        style: "form",
      },
      {
        description: "The number of items to skip",
        in: "query",
        name: "skip",
        required: false,
        example: 0,
        explode: true,
        schema: {
          minimum: 0,
          type: "number",
        },
        style: "form",
      },
      {
        in: "path",
        name: "teamId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
    ],
    defs: {},
  },
  {
    description: "Get all memberships",
    method: "get",
    name: "OrganizationsTeamsMembershipsController_getAllOrgTeamMemberships",
    url: "https://api.cal.com/v2/organizations/{orgId}/teams/{teamId}/memberships",
    params: [
      {
        in: "path",
        name: "orgId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
      {
        in: "path",
        name: "teamId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
      {
        description: "The number of items to return",
        in: "query",
        name: "take",
        required: false,
        example: 10,
        explode: true,
        schema: {
          type: "number",
        },
        style: "form",
      },
      {
        description: "The number of items to skip",
        in: "query",
        name: "skip",
        required: false,
        example: 0,
        explode: true,
        schema: {
          type: "number",
        },
        style: "form",
      },
    ],
    defs: {},
  },
  {
    description: "Create a membership",
    method: "post",
    name: "OrganizationsTeamsMembershipsController_createOrgTeamMembership",
    url: "https://api.cal.com/v2/organizations/{orgId}/teams/{teamId}/memberships",
    params: [
      {
        in: "path",
        name: "orgId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
      {
        in: "path",
        name: "teamId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
    ],
    body: {
      $ref: "#/$defs/CreateOrgTeamMembershipDto",
    },
    contentType: "application/json",
    defs: {
      CreateOrgTeamMembershipDto: {
        required: ["userId", "role"],
        type: "object",
        properties: {
          userId: {
            type: "number",
          },
          accepted: {
            default: false,
            type: "boolean",
          },
          role: {
            default: "MEMBER",
            enum: ["MEMBER", "OWNER", "ADMIN"],
            type: "string",
          },
          disableImpersonation: {
            default: false,
            type: "boolean",
          },
        },
      },
    },
  },
  {
    description: "Get a membership",
    method: "get",
    name: "OrganizationsTeamsMembershipsController_getOrgTeamMembership",
    url: "https://api.cal.com/v2/organizations/{orgId}/teams/{teamId}/memberships/{membershipId}",
    params: [
      {
        in: "path",
        name: "orgId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
      {
        in: "path",
        name: "teamId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
      {
        in: "path",
        name: "membershipId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
    ],
    defs: {},
  },
  {
    description: "Delete a membership",
    method: "delete",
    name: "OrganizationsTeamsMembershipsController_deleteOrgTeamMembership",
    url: "https://api.cal.com/v2/organizations/{orgId}/teams/{teamId}/memberships/{membershipId}",
    params: [
      {
        in: "path",
        name: "orgId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
      {
        in: "path",
        name: "teamId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
      {
        in: "path",
        name: "membershipId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
    ],
    defs: {},
  },
  {
    description: "Update a membership",
    method: "patch",
    name: "OrganizationsTeamsMembershipsController_updateOrgTeamMembership",
    url: "https://api.cal.com/v2/organizations/{orgId}/teams/{teamId}/memberships/{membershipId}",
    params: [
      {
        in: "path",
        name: "orgId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
      {
        in: "path",
        name: "teamId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
      {
        in: "path",
        name: "membershipId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
    ],
    body: {
      $ref: "#/$defs/UpdateOrgTeamMembershipDto",
    },
    contentType: "application/json",
    defs: {
      UpdateOrgTeamMembershipDto: {
        type: "object",
        properties: {
          accepted: {
            type: "boolean",
          },
          role: {
            enum: ["MEMBER", "OWNER", "ADMIN"],
            type: "string",
          },
          disableImpersonation: {
            type: "boolean",
          },
        },
      },
    },
  },
  {
    description: "Get routing form responses",
    method: "get",
    name: "OrganizationsTeamsRoutingFormsResponsesController_getRoutingForm",
    url: "https://api.cal.com/v2/organizations/{orgId}/teams/{teamId}/routing-forms/{routingFormId}/responses",
    params: [
      {
        in: "path",
        name: "routingFormId",
        required: true,
        explode: false,
        schema: {
          type: "string",
        },
        style: "simple",
      },
    ],
    defs: {},
  },
  {
    description: "Get schedules of a team member",
    method: "get",
    name: "OrganizationsTeamsSchedulesController_getUserSchedules",
    url: "https://api.cal.com/v2/organizations/{orgId}/teams/{teamId}/users/{userId}/schedules",
    params: [
      {
        in: "path",
        name: "userId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
    ],
    defs: {},
  },
  {
    description: "Get all users",
    method: "get",
    name: "OrganizationsUsersController_getOrganizationsUsers",
    url: "https://api.cal.com/v2/organizations/{orgId}/users",
    params: [
      {
        in: "path",
        name: "orgId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
      {
        description: "The number of items to return",
        in: "query",
        name: "take",
        required: false,
        example: 10,
        explode: true,
        schema: {
          maximum: 1000,
          minimum: 1,
          type: "number",
        },
        style: "form",
      },
      {
        description: "The number of items to skip",
        in: "query",
        name: "skip",
        required: false,
        example: 0,
        explode: true,
        schema: {
          minimum: 0,
          type: "number",
        },
        style: "form",
      },
      {
        description:
          "The email address or an array of email addresses to filter by",
        in: "query",
        name: "emails",
        required: false,
        explode: true,
        schema: {
          type: "array",
          items: {
            type: "string",
          },
        },
        style: "form",
      },
    ],
    defs: {},
  },
  {
    description: "Create a user",
    method: "post",
    name: "OrganizationsUsersController_createOrganizationUser",
    url: "https://api.cal.com/v2/organizations/{orgId}/users",
    params: [
      {
        in: "path",
        name: "orgId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
    ],
    body: {
      $ref: "#/$defs/CreateOrganizationUserInput",
    },
    contentType: "application/json",
    defs: {
      CreateOrganizationUserInput: {
        required: ["email"],
        type: "object",
        properties: {
          email: {
            description: "User email address",
            examples: ["user@example.com"],
            type: "string",
          },
          username: {
            description: "Username",
            examples: ["user123"],
            type: "string",
          },
          weekday: {
            description: "Preferred weekday",
            examples: ["Monday"],
            type: "string",
          },
          brandColor: {
            description: "Brand color in HEX format",
            examples: ["#FFFFFF"],
            type: "string",
          },
          darkBrandColor: {
            description: "Dark brand color in HEX format",
            examples: ["#000000"],
            type: "string",
          },
          hideBranding: {
            description: "Hide branding",
            examples: [false],
            type: "boolean",
          },
          timeZone: {
            description: "Time zone",
            examples: ["America/New_York"],
            type: "string",
          },
          theme: {
            description: "Theme",
            examples: ["dark"],
            type: ["null", "string"],
          },
          appTheme: {
            description: "Application theme",
            examples: ["light"],
            type: ["null", "string"],
          },
          timeFormat: {
            description: "Time format",
            examples: [24],
            type: "number",
          },
          defaultScheduleId: {
            description: "Default schedule ID",
            examples: [1],
            minimum: 0,
            type: "number",
          },
          locale: {
            default: "en",
            description: "Locale",
            examples: ["en"],
            type: ["null", "string"],
          },
          avatarUrl: {
            description: "Avatar URL",
            examples: ["https://example.com/avatar.jpg"],
            type: "string",
          },
          organizationRole: {
            default: "MEMBER",
            enum: ["MEMBER", "ADMIN", "OWNER"],
            type: "string",
          },
          autoAccept: {
            default: true,
            type: "boolean",
          },
        },
      },
    },
  },
  {
    description: "Delete a user",
    method: "delete",
    name: "OrganizationsUsersController_deleteOrganizationUser",
    url: "https://api.cal.com/v2/organizations/{orgId}/users/{userId}",
    params: [
      {
        in: "path",
        name: "orgId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
      {
        in: "path",
        name: "userId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
    ],
    defs: {},
  },
  {
    description: "Update a user",
    method: "patch",
    name: "OrganizationsUsersController_updateOrganizationUser",
    url: "https://api.cal.com/v2/organizations/{orgId}/users/{userId}",
    params: [
      {
        in: "path",
        name: "orgId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
      {
        in: "path",
        name: "userId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
    ],
    body: {
      $ref: "#/$defs/UpdateOrganizationUserInput",
    },
    contentType: "application/json",
    defs: {
      UpdateOrganizationUserInput: {
        type: "object",
        properties: {},
      },
    },
  },
  {
    description: "Get all ooo entries of a user",
    method: "get",
    name: "OrganizationsUsersOOOController_getOrganizationUserOOO",
    url: "https://api.cal.com/v2/organizations/{orgId}/users/{userId}/ooo",
    params: [
      {
        in: "path",
        name: "userId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
      {
        description: "The number of items to return",
        in: "query",
        name: "take",
        required: false,
        example: 10,
        explode: true,
        schema: {
          type: "number",
        },
        style: "form",
      },
      {
        description: "The number of items to skip",
        in: "query",
        name: "skip",
        required: false,
        example: 0,
        explode: true,
        schema: {
          type: "number",
        },
        style: "form",
      },
      {
        description:
          "Sort results by their start time in ascending or descending order.",
        in: "query",
        name: "sortStart",
        required: false,
        example: "?sortStart=asc OR ?sortStart=desc",
        explode: true,
        schema: {
          enum: ["asc", "desc"],
          type: "string",
        },
        style: "form",
      },
      {
        description:
          "Sort results by their end time in ascending or descending order.",
        in: "query",
        name: "sortEnd",
        required: false,
        example: "?sortEnd=asc OR ?sortEnd=desc",
        explode: true,
        schema: {
          enum: ["asc", "desc"],
          type: "string",
        },
        style: "form",
      },
    ],
    defs: {},
  },
  {
    description: "Create an ooo entry for user",
    method: "post",
    name: "OrganizationsUsersOOOController_createOrganizationUserOOO",
    url: "https://api.cal.com/v2/organizations/{orgId}/users/{userId}/ooo",
    params: [
      {
        in: "path",
        name: "userId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
    ],
    body: {
      $ref: "#/$defs/CreateOutOfOfficeEntryDto",
    },
    contentType: "application/json",
    defs: {
      CreateOutOfOfficeEntryDto: {
        required: ["start", "end"],
        type: "object",
        properties: {
          start: {
            description:
              "The start date and time of the out of office period in ISO 8601 format in UTC timezone.",
            examples: ["2023-05-01T00:00:00.000Z"],
            format: "date-time",
            type: "string",
          },
          end: {
            description:
              "The end date and time of the out of office period in ISO 8601 format in UTC timezone.",
            examples: ["2023-05-10T23:59:59.999Z"],
            format: "date-time",
            type: "string",
          },
          notes: {
            description: "Optional notes for the out of office entry.",
            examples: ["Vacation in Hawaii"],
            type: "string",
          },
          toUserId: {
            description:
              "The ID of the user covering for the out of office period, if applicable.",
            examples: [2],
            type: "number",
          },
          reason: {
            description:
              "the reason for the out of office entry, if applicable",
            enum: [
              "unspecified",
              "vacation",
              "travel",
              "sick",
              "public_holiday",
            ],
            examples: ["vacation"],
            type: "string",
          },
        },
      },
    },
  },
  {
    description: "Delete ooo entry of a user",
    method: "delete",
    name: "OrganizationsUsersOOOController_deleteOrganizationUserOOO",
    url: "https://api.cal.com/v2/organizations/{orgId}/users/{userId}/ooo/{oooId}",
    params: [
      {
        in: "path",
        name: "oooId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
    ],
    defs: {},
  },
  {
    description: "Update ooo entry of a user",
    method: "patch",
    name: "OrganizationsUsersOOOController_updateOrganizationUserOOO",
    url: "https://api.cal.com/v2/organizations/{orgId}/users/{userId}/ooo/{oooId}",
    params: [
      {
        in: "path",
        name: "userId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
      {
        in: "path",
        name: "oooId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
    ],
    body: {
      $ref: "#/$defs/UpdateOutOfOfficeEntryDto",
    },
    contentType: "application/json",
    defs: {
      UpdateOutOfOfficeEntryDto: {
        type: "object",
        properties: {
          start: {
            description:
              "The start date and time of the out of office period in ISO 8601 format in UTC timezone.",
            examples: ["2023-05-01T00:00:00.000Z"],
            format: "date-time",
            type: "string",
          },
          end: {
            description:
              "The end date and time of the out of office period in ISO 8601 format in UTC timezone.",
            examples: ["2023-05-10T23:59:59.999Z"],
            format: "date-time",
            type: "string",
          },
          notes: {
            description: "Optional notes for the out of office entry.",
            examples: ["Vacation in Hawaii"],
            type: "string",
          },
          toUserId: {
            description:
              "The ID of the user covering for the out of office period, if applicable.",
            examples: [2],
            type: "number",
          },
          reason: {
            description:
              "the reason for the out of office entry, if applicable",
            enum: [
              "unspecified",
              "vacation",
              "travel",
              "sick",
              "public_holiday",
            ],
            examples: ["vacation"],
            type: "string",
          },
        },
      },
    },
  },
  {
    description: "Get all OOO entries of org users",
    method: "get",
    name: "OrganizationsUsersOOOController_getOrganizationUsersOOO",
    url: "https://api.cal.com/v2/organizations/{orgId}/ooo",
    params: [
      {
        in: "path",
        name: "orgId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
      {
        description: "The number of items to return",
        in: "query",
        name: "take",
        required: false,
        example: 10,
        explode: true,
        schema: {
          type: "number",
        },
        style: "form",
      },
      {
        description: "The number of items to skip",
        in: "query",
        name: "skip",
        required: false,
        example: 0,
        explode: true,
        schema: {
          type: "number",
        },
        style: "form",
      },
      {
        description:
          "Sort results by their start time in ascending or descending order.",
        in: "query",
        name: "sortStart",
        required: false,
        example: "?sortStart=asc OR ?sortStart=desc",
        explode: true,
        schema: {
          enum: ["asc", "desc"],
          type: "string",
        },
        style: "form",
      },
      {
        description:
          "Sort results by their end time in ascending or descending order.",
        in: "query",
        name: "sortEnd",
        required: false,
        example: "?sortEnd=asc OR ?sortEnd=desc",
        explode: true,
        schema: {
          enum: ["asc", "desc"],
          type: "string",
        },
        style: "form",
      },
      {
        description:
          "Filter ooo entries by the user email address. user must be within your organization.",
        in: "query",
        name: "email",
        required: false,
        example: "example@domain.com",
        explode: true,
        schema: {
          type: "string",
        },
        style: "form",
      },
    ],
    defs: {},
  },
  {
    description: "Get all webhooks",
    method: "get",
    name: "OrganizationsWebhooksController_getAllOrganizationWebhooks",
    url: "https://api.cal.com/v2/organizations/{orgId}/webhooks",
    params: [
      {
        in: "path",
        name: "orgId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
      {
        description: "The number of items to return",
        in: "query",
        name: "take",
        required: false,
        example: 10,
        explode: true,
        schema: {
          type: "number",
        },
        style: "form",
      },
      {
        description: "The number of items to skip",
        in: "query",
        name: "skip",
        required: false,
        example: 0,
        explode: true,
        schema: {
          type: "number",
        },
        style: "form",
      },
    ],
    defs: {},
  },
  {
    description: "Create a webhook",
    method: "post",
    name: "OrganizationsWebhooksController_createOrganizationWebhook",
    url: "https://api.cal.com/v2/organizations/{orgId}/webhooks",
    params: [
      {
        in: "path",
        name: "orgId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
    ],
    body: {
      $ref: "#/$defs/CreateWebhookInputDto",
    },
    contentType: "application/json",
    defs: {
      CreateWebhookInputDto: {
        required: ["active", "subscriberUrl", "triggers"],
        type: "object",
        properties: {
          payloadTemplate: {
            description:
              "The template of the payload that will be sent to the subscriberUrl, check cal.com/docs/core-features/webhooks for more information",
            examples: [
              '{"content":"A new event has been scheduled","type":"{{type}}","name":"{{title}}","organizer":"{{organizer.name}}","booker":"{{attendees.0.name}}"}',
            ],
            type: "string",
          },
          active: {
            type: "boolean",
          },
          subscriberUrl: {
            type: "string",
          },
          triggers: {
            enum: [
              "BOOKING_CREATED",
              "BOOKING_PAYMENT_INITIATED",
              "BOOKING_PAID",
              "BOOKING_RESCHEDULED",
              "BOOKING_REQUESTED",
              "BOOKING_CANCELLED",
              "BOOKING_REJECTED",
              "BOOKING_NO_SHOW_UPDATED",
              "FORM_SUBMITTED",
              "MEETING_ENDED",
              "MEETING_STARTED",
              "RECORDING_READY",
              "INSTANT_MEETING",
              "RECORDING_TRANSCRIPTION_GENERATED",
              "OOO_CREATED",
              "AFTER_HOSTS_CAL_VIDEO_NO_SHOW",
              "AFTER_GUESTS_CAL_VIDEO_NO_SHOW",
              "FORM_SUBMITTED_NO_EVENT",
            ],
            examples: [
              [
                "BOOKING_CREATED",
                "BOOKING_RESCHEDULED",
                "BOOKING_CANCELLED",
                "BOOKING_CONFIRMED",
                "BOOKING_REJECTED",
                "BOOKING_COMPLETED",
                "BOOKING_NO_SHOW",
                "BOOKING_REOPENED",
              ],
            ],
            type: "string",
          },
          secret: {
            type: "string",
          },
        },
      },
    },
  },
  {
    description: "Get a webhook",
    method: "get",
    name: "OrganizationsWebhooksController_getOrganizationWebhook",
    url: "https://api.cal.com/v2/organizations/{orgId}/webhooks/{webhookId}",
    params: [
      {
        in: "path",
        name: "webhookId",
        required: true,
        explode: false,
        schema: {
          type: "string",
        },
        style: "simple",
      },
    ],
    defs: {},
  },
  {
    description: "Delete a webhook",
    method: "delete",
    name: "OrganizationsWebhooksController_deleteWebhook",
    url: "https://api.cal.com/v2/organizations/{orgId}/webhooks/{webhookId}",
    params: [
      {
        in: "path",
        name: "webhookId",
        required: true,
        explode: false,
        schema: {
          type: "string",
        },
        style: "simple",
      },
    ],
    defs: {},
  },
  {
    description: "Update a webhook",
    method: "patch",
    name: "OrganizationsWebhooksController_updateOrgWebhook",
    url: "https://api.cal.com/v2/organizations/{orgId}/webhooks/{webhookId}",
    params: [
      {
        in: "path",
        name: "webhookId",
        required: true,
        explode: false,
        schema: {
          type: "string",
        },
        style: "simple",
      },
    ],
    body: {
      $ref: "#/$defs/UpdateWebhookInputDto",
    },
    contentType: "application/json",
    defs: {
      UpdateWebhookInputDto: {
        type: "object",
        properties: {
          payloadTemplate: {
            description:
              "The template of the payload that will be sent to the subscriberUrl, check cal.com/docs/core-features/webhooks for more information",
            examples: [
              '{"content":"A new event has been scheduled","type":"{{type}}","name":"{{title}}","organizer":"{{organizer.name}}","booker":"{{attendees.0.name}}"}',
            ],
            type: "string",
          },
          active: {
            type: "boolean",
          },
          subscriberUrl: {
            type: "string",
          },
          triggers: {
            enum: [
              "BOOKING_CREATED",
              "BOOKING_PAYMENT_INITIATED",
              "BOOKING_PAID",
              "BOOKING_RESCHEDULED",
              "BOOKING_REQUESTED",
              "BOOKING_CANCELLED",
              "BOOKING_REJECTED",
              "BOOKING_NO_SHOW_UPDATED",
              "FORM_SUBMITTED",
              "MEETING_ENDED",
              "MEETING_STARTED",
              "RECORDING_READY",
              "INSTANT_MEETING",
              "RECORDING_TRANSCRIPTION_GENERATED",
              "OOO_CREATED",
              "AFTER_HOSTS_CAL_VIDEO_NO_SHOW",
              "AFTER_GUESTS_CAL_VIDEO_NO_SHOW",
              "FORM_SUBMITTED_NO_EVENT",
            ],
            examples: [
              [
                "BOOKING_CREATED",
                "BOOKING_RESCHEDULED",
                "BOOKING_CANCELLED",
                "BOOKING_CONFIRMED",
                "BOOKING_REJECTED",
                "BOOKING_COMPLETED",
                "BOOKING_NO_SHOW",
                "BOOKING_REOPENED",
              ],
            ],
            type: "string",
          },
          secret: {
            type: "string",
          },
        },
      },
    },
  },
  {
    description:
      'Generate a new API key and delete the current one. Provide API key to refresh as a Bearer token in the Authorization header (e.g. "Authorization: Bearer <apiKey>").',
    method: "post",
    name: "ApiKeysController_refresh",
    url: "https://api.cal.com/v2/api-keys/refresh",
    params: [
      {
        description: "Bearer <apiKey>",
        in: "header",
        name: "Authorization",
        required: true,
        explode: false,
        schema: {
          type: "string",
        },
        style: "simple",
      },
    ],
    body: {
      $ref: "#/$defs/RefreshApiKeyInput",
    },
    contentType: "application/json",
    defs: {
      RefreshApiKeyInput: {
        type: "object",
        properties: {
          apiKeyDaysValid: {
            default: 30,
            description:
              "For how many days is managed organization api key valid. Defaults to 30 days.",
            examples: [60],
            minimum: 1,
            type: "number",
          },
          apiKeyNeverExpires: {
            description: "If true, organization api key never expires.",
            examples: [true],
            type: "boolean",
          },
        },
      },
    },
  },
  {
    description: "Get all bookings",
    method: "get",
    name: "BookingsController_2024_08_13_getBookings",
    url: "https://api.cal.com/v2/bookings",
    params: [
      {
        description: "Must be set to 2024-08-13",
        in: "header",
        name: "cal-api-version",
        required: true,
        explode: false,
        schema: {
          default: "2024-08-13",
          type: "string",
        },
        style: "simple",
      },
      {
        description:
          "Filter bookings by status. If you want to filter by multiple statuses, separate them with a comma.",
        in: "query",
        name: "status",
        required: false,
        example: "?status=upcoming,past",
        explode: true,
        schema: {
          type: "array",
          items: {
            enum: ["upcoming", "recurring", "past", "cancelled", "unconfirmed"],
            type: "string",
          },
        },
        style: "form",
      },
      {
        description: "Filter bookings by the attendee's email address.",
        in: "query",
        name: "attendeeEmail",
        required: false,
        example: "example@domain.com",
        explode: true,
        schema: {
          type: "string",
        },
        style: "form",
      },
      {
        description: "Filter bookings by the attendee's name.",
        in: "query",
        name: "attendeeName",
        required: false,
        example: "John Doe",
        explode: true,
        schema: {
          type: "string",
        },
        style: "form",
      },
      {
        description:
          "Filter bookings by event type ids belonging to the user. Event type ids must be separated by a comma.",
        in: "query",
        name: "eventTypeIds",
        required: false,
        example: "?eventTypeIds=100,200",
        explode: true,
        schema: {
          type: "string",
        },
        style: "form",
      },
      {
        description: "Filter bookings by event type id belonging to the user.",
        in: "query",
        name: "eventTypeId",
        required: false,
        example: "?eventTypeId=100",
        explode: true,
        schema: {
          type: "string",
        },
        style: "form",
      },
      {
        description:
          "Filter bookings by team ids that user is part of. Team ids must be separated by a comma.",
        in: "query",
        name: "teamsIds",
        required: false,
        example: "?teamIds=50,60",
        explode: true,
        schema: {
          type: "string",
        },
        style: "form",
      },
      {
        description: "Filter bookings by team id that user is part of",
        in: "query",
        name: "teamId",
        required: false,
        example: "?teamId=50",
        explode: true,
        schema: {
          type: "string",
        },
        style: "form",
      },
      {
        description: "Filter bookings with start after this date string.",
        in: "query",
        name: "afterStart",
        required: false,
        example: "?afterStart=2025-03-07T10:00:00.000Z",
        explode: true,
        schema: {
          type: "string",
        },
        style: "form",
      },
      {
        description: "Filter bookings with end before this date string.",
        in: "query",
        name: "beforeEnd",
        required: false,
        example: "?beforeEnd=2025-03-07T11:00:00.000Z",
        explode: true,
        schema: {
          type: "string",
        },
        style: "form",
      },
      {
        description:
          "Filter bookings that have been updated after this date string.",
        in: "query",
        name: "afterUpdatedAt",
        required: false,
        example: "?afterUpdatedAt=2025-03-07T10:00:00.000Z",
        explode: true,
        schema: {
          type: "string",
        },
        style: "form",
      },
      {
        description:
          "Filter bookings that have been updated before this date string.",
        in: "query",
        name: "beforeUpdatedAt",
        required: false,
        example: "?beforeUpdatedAt=2025-03-14T11:00:00.000Z",
        explode: true,
        schema: {
          type: "string",
        },
        style: "form",
      },
      {
        description:
          "Sort results by their start time in ascending or descending order.",
        in: "query",
        name: "sortStart",
        required: false,
        example: "?sortStart=asc OR ?sortStart=desc",
        explode: true,
        schema: {
          enum: ["asc", "desc"],
          type: "string",
        },
        style: "form",
      },
      {
        description:
          "Sort results by their end time in ascending or descending order.",
        in: "query",
        name: "sortEnd",
        required: false,
        example: "?sortEnd=asc OR ?sortEnd=desc",
        explode: true,
        schema: {
          enum: ["asc", "desc"],
          type: "string",
        },
        style: "form",
      },
      {
        description:
          "Sort results by their creation time (when booking was made) in ascending or descending order.",
        in: "query",
        name: "sortCreated",
        required: false,
        example: "?sortCreated=asc OR ?sortCreated=desc",
        explode: true,
        schema: {
          enum: ["asc", "desc"],
          type: "string",
        },
        style: "form",
      },
      {
        description:
          "Sort results by their updated time (for example when booking status changes) in ascending or descending order.",
        in: "query",
        name: "sortUpdatedAt",
        required: false,
        example: "?sortUpdated=asc OR ?sortUpdated=desc",
        explode: true,
        schema: {
          enum: ["asc", "desc"],
          type: "string",
        },
        style: "form",
      },
      {
        description: "The number of items to return",
        in: "query",
        name: "take",
        required: false,
        example: 10,
        explode: true,
        schema: {
          type: "number",
        },
        style: "form",
      },
      {
        description: "The number of items to skip",
        in: "query",
        name: "skip",
        required: false,
        example: 0,
        explode: true,
        schema: {
          type: "number",
        },
        style: "form",
      },
      {
        description:
          "value must be `Bearer <token>` where `<token>` either managed user access token or api key prefixed with cal_",
        in: "header",
        name: "Authorization",
        required: true,
        explode: false,
        schema: {
          type: "string",
        },
        style: "simple",
      },
    ],
    defs: {},
  },
  {
    description:
      '\n      POST /v2/bookings is used to create regular bookings, recurring bookings and instant bookings. The request bodies for all 3 are almost the same except:\n      If eventTypeId in the request body is id of a regular event, then regular booking is created.\n\n      If it is an id of a recurring event type, then recurring booking is created.\n\n      Meaning that the request bodies are equal but the outcome depends on what kind of event type it is with the goal of making it as seamless for developers as possible.\n\n      For team event types it is possible to create instant meeting. To do that just pass `"instant": true` to the request body.\n\n      The start needs to be in UTC aka if the timezone is GMT+2 in Rome and meeting should start at 11, then UTC time should have hours 09:00 aka without time zone.\n      ',
    method: "post",
    name: "BookingsController_2024_08_13_createBooking",
    url: "https://api.cal.com/v2/bookings",
    params: [
      {
        description: "Must be set to 2024-08-13",
        in: "header",
        name: "cal-api-version",
        required: true,
        explode: false,
        schema: {
          default: "2024-08-13",
          type: "string",
        },
        style: "simple",
      },
    ],
    body: {
      anyOf: [
        {
          $ref: "#/$defs/CreateBookingInput_2024_08_13",
        },
        {
          $ref: "#/$defs/CreateInstantBookingInput_2024_08_13",
        },
        {
          $ref: "#/$defs/CreateRecurringBookingInput_2024_08_13",
        },
      ],
      type: "object",
      description:
        "Accepts different types of booking input: Create Booking (Option 1), Create Instant Booking (Option 2), or Create Recurring Booking (Option 3)",
    },
    contentType: "application/json",
    defs: {
      CreateBookingInput_2024_08_13: {
        required: ["start", "eventTypeId", "attendee"],
        type: "object",
        properties: {
          start: {
            description:
              "The start time of the booking in ISO 8601 format in UTC timezone.",
            examples: ["2024-08-13T09:00:00Z"],
            type: "string",
          },
          lengthInMinutes: {
            description:
              "If it is an event type that has multiple possible lengths that attendee can pick from, you can pass the desired booking length here.\n    If not provided then event type default length will be used for the booking.",
            examples: [30],
            type: "number",
          },
          eventTypeId: {
            description: "The ID of the event type that is booked.",
            examples: [123],
            type: "number",
          },
          attendee: {
            description: "The attendee's details.",
            allOf: [
              {
                $ref: "#/$defs/Attendee",
              },
            ],
          },
          guests: {
            description:
              "An optional list of guest emails attending the event.",
            examples: [["guest1@example.com", "guest2@example.com"]],
            type: "array",
            items: {
              type: "string",
            },
          },
          meetingUrl: {
            deprecated: true,
            description:
              "Deprecated - use 'location' instead. Meeting URL just for this booking. Displayed in email and calendar event. If not provided then cal video link will be generated.",
            examples: ["https://example.com/meeting"],
            type: "string",
          },
          location: {
            description:
              "One of the event type locations. If instead of passing one of the location objects as required by schema you are still passing a string please use an object.",
            anyOf: [
              {
                $ref: "#/$defs/BookingInputAddressLocation_2024_08_13",
              },
              {
                $ref: "#/$defs/BookingInputAttendeeAddressLocation_2024_08_13",
              },
              {
                $ref: "#/$defs/BookingInputAttendeeDefinedLocation_2024_08_13",
              },
              {
                $ref: "#/$defs/BookingInputAttendeePhoneLocation_2024_08_13",
              },
              {
                $ref: "#/$defs/BookingInputIntegrationLocation_2024_08_13",
              },
              {
                $ref: "#/$defs/BookingInputLinkLocation_2024_08_13",
              },
              {
                $ref: "#/$defs/BookingInputPhoneLocation_2024_08_13",
              },
            ],
            type: "object",
          },
          metadata: {
            description:
              "You can store any additional data you want here. Metadata must have at most 50 keys, each key up to 40 characters, and string values up to 500 characters.",
            examples: [
              {
                key: "value",
              },
            ],
            type: "object",
          },
          bookingFieldsResponses: {
            description:
              "Booking field responses consisting of an object with booking field slug as keys and user response as values.",
            examples: [
              {
                customField: "customValue",
              },
            ],
            type: "object",
          },
        },
      },
      Attendee: {
        required: ["name", "timeZone"],
        type: "object",
        properties: {
          name: {
            description: "The name of the attendee.",
            examples: ["John Doe"],
            type: "string",
          },
          email: {
            description: "The email of the attendee.",
            examples: ["john.doe@example.com"],
            type: "string",
          },
          timeZone: {
            description: "The time zone of the attendee.",
            examples: ["America/New_York"],
            type: "string",
          },
          phoneNumber: {
            description:
              "The phone number of the attendee in international format.",
            examples: ["+919876543210"],
            type: "string",
          },
          language: {
            default: "en",
            description:
              "The preferred language of the attendee. Used for booking confirmation.",
            enum: [
              "ar",
              "ca",
              "de",
              "es",
              "eu",
              "he",
              "id",
              "ja",
              "lv",
              "pl",
              "ro",
              "sr",
              "th",
              "vi",
              "az",
              "cs",
              "el",
              "es-419",
              "fi",
              "hr",
              "it",
              "km",
              "nl",
              "pt",
              "ru",
              "sv",
              "tr",
              "zh-CN",
              "bg",
              "da",
              "en",
              "et",
              "fr",
              "hu",
              "iw",
              "ko",
              "no",
              "pt-BR",
              "sk",
              "ta",
              "uk",
              "zh-TW",
            ],
            examples: ["it"],
            type: "string",
          },
        },
      },
      BookingInputAddressLocation_2024_08_13: {
        required: ["type"],
        type: "object",
        properties: {
          type: {
            description:
              "only allowed value for type is `address` - it refers to address defined by the organizer.",
            examples: ["address"],
            type: "string",
          },
        },
      },
      BookingInputAttendeeAddressLocation_2024_08_13: {
        required: ["type", "address"],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `attendeeAddress`",
            examples: ["attendeeAddress"],
            type: "string",
          },
          address: {
            examples: ["123 Example St, City, Country"],
            type: "string",
          },
        },
      },
      BookingInputAttendeeDefinedLocation_2024_08_13: {
        required: ["type", "location"],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `attendeeDefined`",
            examples: ["attendeeDefined"],
            type: "string",
          },
          location: {
            examples: ["321 Example St, City, Country"],
            type: "string",
          },
        },
      },
      BookingInputAttendeePhoneLocation_2024_08_13: {
        required: ["type", "phone"],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `attendeePhone`",
            examples: ["attendeePhone"],
            type: "string",
          },
          phone: {
            examples: ["+37120993151"],
            type: "string",
          },
        },
      },
      BookingInputIntegrationLocation_2024_08_13: {
        required: ["type", "integration"],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `integration`",
            examples: ["integration"],
            type: "string",
          },
          integration: {
            enum: [
              "cal-video",
              "google-meet",
              "zoom",
              "whereby-video",
              "whatsapp-video",
              "webex-video",
              "telegram-video",
              "tandem",
              "sylaps-video",
              "skype-video",
              "sirius-video",
              "signal-video",
              "shimmer-video",
              "salesroom-video",
              "roam-video",
              "riverside-video",
              "ping-video",
              "office365-video",
              "mirotalk-video",
              "jitsi",
              "jelly-video",
              "jelly-conferencing",
              "huddle",
              "facetime-video",
              "element-call-video",
              "eightxeight-video",
              "discord-video",
              "demodesk-video",
              "campfire-video",
              "around-video",
            ],
            examples: ["cal-video"],
            type: "string",
          },
        },
      },
      BookingInputLinkLocation_2024_08_13: {
        required: ["type"],
        type: "object",
        properties: {
          type: {
            description:
              "only allowed value for type is `link` - it refers to link defined by the organizer.",
            examples: ["link"],
            type: "string",
          },
        },
      },
      BookingInputPhoneLocation_2024_08_13: {
        required: ["type"],
        type: "object",
        properties: {
          type: {
            description:
              "only allowed value for type is `phone` - it refers to phone defined by the organizer.",
            examples: ["phone"],
            type: "string",
          },
        },
      },
      CreateInstantBookingInput_2024_08_13: {
        required: ["start", "eventTypeId", "attendee", "instant"],
        type: "object",
        properties: {
          start: {
            description:
              "The start time of the booking in ISO 8601 format in UTC timezone.",
            examples: ["2024-08-13T09:00:00Z"],
            type: "string",
          },
          lengthInMinutes: {
            description:
              "If it is an event type that has multiple possible lengths that attendee can pick from, you can pass the desired booking length here.\n    If not provided then event type default length will be used for the booking.",
            examples: [30],
            type: "number",
          },
          eventTypeId: {
            description: "The ID of the event type that is booked.",
            examples: [123],
            type: "number",
          },
          attendee: {
            description: "The attendee's details.",
            allOf: [
              {
                $ref: "#/$defs/Attendee",
              },
            ],
          },
          guests: {
            description:
              "An optional list of guest emails attending the event.",
            examples: [["guest1@example.com", "guest2@example.com"]],
            type: "array",
            items: {
              type: "string",
            },
          },
          meetingUrl: {
            deprecated: true,
            description:
              "Deprecated - use 'location' instead. Meeting URL just for this booking. Displayed in email and calendar event. If not provided then cal video link will be generated.",
            examples: ["https://example.com/meeting"],
            type: "string",
          },
          location: {
            description:
              "One of the event type locations. If instead of passing one of the location objects as required by schema you are still passing a string please use an object.",
            anyOf: [
              {
                $ref: "#/$defs/BookingInputAddressLocation_2024_08_13",
              },
              {
                $ref: "#/$defs/BookingInputAttendeeAddressLocation_2024_08_13",
              },
              {
                $ref: "#/$defs/BookingInputAttendeeDefinedLocation_2024_08_13",
              },
              {
                $ref: "#/$defs/BookingInputAttendeePhoneLocation_2024_08_13",
              },
              {
                $ref: "#/$defs/BookingInputIntegrationLocation_2024_08_13",
              },
              {
                $ref: "#/$defs/BookingInputLinkLocation_2024_08_13",
              },
              {
                $ref: "#/$defs/BookingInputPhoneLocation_2024_08_13",
              },
            ],
            type: "object",
          },
          metadata: {
            description:
              "You can store any additional data you want here. Metadata must have at most 50 keys, each key up to 40 characters, and string values up to 500 characters.",
            examples: [
              {
                key: "value",
              },
            ],
            type: "object",
          },
          bookingFieldsResponses: {
            description:
              "Booking field responses consisting of an object with booking field slug as keys and user response as values.",
            examples: [
              {
                customField: "customValue",
              },
            ],
            type: "object",
          },
          instant: {
            description:
              "Flag indicating if the booking is an instant booking. Only available for team events.",
            examples: [true],
            type: "boolean",
          },
        },
      },
      CreateRecurringBookingInput_2024_08_13: {
        required: ["start", "eventTypeId", "attendee"],
        type: "object",
        properties: {
          start: {
            description:
              "The start time of the booking in ISO 8601 format in UTC timezone.",
            examples: ["2024-08-13T09:00:00Z"],
            type: "string",
          },
          lengthInMinutes: {
            description:
              "If it is an event type that has multiple possible lengths that attendee can pick from, you can pass the desired booking length here.\n    If not provided then event type default length will be used for the booking.",
            examples: [30],
            type: "number",
          },
          eventTypeId: {
            description: "The ID of the event type that is booked.",
            examples: [123],
            type: "number",
          },
          attendee: {
            description: "The attendee's details.",
            allOf: [
              {
                $ref: "#/$defs/Attendee",
              },
            ],
          },
          guests: {
            description:
              "An optional list of guest emails attending the event.",
            examples: [["guest1@example.com", "guest2@example.com"]],
            type: "array",
            items: {
              type: "string",
            },
          },
          meetingUrl: {
            deprecated: true,
            description:
              "Deprecated - use 'location' instead. Meeting URL just for this booking. Displayed in email and calendar event. If not provided then cal video link will be generated.",
            examples: ["https://example.com/meeting"],
            type: "string",
          },
          location: {
            description:
              "One of the event type locations. If instead of passing one of the location objects as required by schema you are still passing a string please use an object.",
            anyOf: [
              {
                $ref: "#/$defs/BookingInputAddressLocation_2024_08_13",
              },
              {
                $ref: "#/$defs/BookingInputAttendeeAddressLocation_2024_08_13",
              },
              {
                $ref: "#/$defs/BookingInputAttendeeDefinedLocation_2024_08_13",
              },
              {
                $ref: "#/$defs/BookingInputAttendeePhoneLocation_2024_08_13",
              },
              {
                $ref: "#/$defs/BookingInputIntegrationLocation_2024_08_13",
              },
              {
                $ref: "#/$defs/BookingInputLinkLocation_2024_08_13",
              },
              {
                $ref: "#/$defs/BookingInputPhoneLocation_2024_08_13",
              },
            ],
            type: "object",
          },
          metadata: {
            description:
              "You can store any additional data you want here. Metadata must have at most 50 keys, each key up to 40 characters, and string values up to 500 characters.",
            examples: [
              {
                key: "value",
              },
            ],
            type: "object",
          },
          bookingFieldsResponses: {
            description:
              "Booking field responses consisting of an object with booking field slug as keys and user response as values.",
            examples: [
              {
                customField: "customValue",
              },
            ],
            type: "object",
          },
          recurrenceCount: {
            description:
              "The number of recurrences. If not provided then event type recurrence count will be used. Can't be more than\n    event type recurrence count",
            examples: [5],
            type: "number",
          },
        },
      },
    },
  },
  {
    description:
      "`:bookingUid` can be\n\n      1. uid of a normal booking\n\n      2. uid of one of the recurring booking recurrences\n\n      3. uid of recurring booking which will return an array of all recurring booking recurrences (stored as recurringBookingUid on one of the individual recurrences).",
    method: "get",
    name: "BookingsController_2024_08_13_getBooking",
    url: "https://api.cal.com/v2/bookings/{bookingUid}",
    params: [
      {
        description: "Must be set to 2024-08-13",
        in: "header",
        name: "cal-api-version",
        required: true,
        explode: false,
        schema: {
          default: "2024-08-13",
          type: "string",
        },
        style: "simple",
      },
      {
        in: "path",
        name: "bookingUid",
        required: true,
        explode: false,
        schema: {
          type: "string",
        },
        style: "simple",
      },
    ],
    defs: {},
  },
  {
    description: "Reschedule a booking or seated booking",
    method: "post",
    name: "BookingsController_2024_08_13_rescheduleBooking",
    url: "https://api.cal.com/v2/bookings/{bookingUid}/reschedule",
    params: [
      {
        description: "Must be set to 2024-08-13",
        in: "header",
        name: "cal-api-version",
        required: true,
        explode: false,
        schema: {
          default: "2024-08-13",
          type: "string",
        },
        style: "simple",
      },
      {
        in: "path",
        name: "bookingUid",
        required: true,
        explode: false,
        schema: {
          type: "string",
        },
        style: "simple",
      },
    ],
    body: {
      anyOf: [
        {
          $ref: "#/$defs/RescheduleBookingInput_2024_08_13",
        },
        {
          $ref: "#/$defs/RescheduleSeatedBookingInput_2024_08_13",
        },
      ],
      description:
        "Accepts different types of reschedule booking input: Reschedule Booking (Option 1) or Reschedule Seated Booking (Option 2)",
      type: "object",
    },
    contentType: "application/json",
    defs: {
      RescheduleBookingInput_2024_08_13: {
        required: ["start"],
        type: "object",
        properties: {
          start: {
            description: "Start time in ISO 8601 format for the new booking",
            examples: ["2024-08-13T10:00:00Z"],
            type: "string",
          },
          rescheduledBy: {
            description:
              "Email of the person who is rescheduling the booking - only needed when rescheduling a booking that requires a confirmation.\nIf event type owner email is provided then rescheduled booking will be automatically confirmed. If attendee email or no email is passed then the event type\nowner will have to confirm the rescheduled booking.",
            type: "string",
          },
          reschedulingReason: {
            description: "Reason for rescheduling the booking",
            examples: ["User requested reschedule"],
            type: "string",
          },
        },
      },
      RescheduleSeatedBookingInput_2024_08_13: {
        required: ["start", "seatUid"],
        type: "object",
        properties: {
          start: {
            description: "Start time in ISO 8601 format for the new booking",
            examples: ["2024-08-13T10:00:00Z"],
            type: "string",
          },
          rescheduledBy: {
            description:
              "Email of the person who is rescheduling the booking - only needed when rescheduling a booking that requires a confirmation.\nIf event type owner email is provided then rescheduled booking will be automatically confirmed. If attendee email or no email is passed then the event type\nowner will have to confirm the rescheduled booking.",
            type: "string",
          },
          seatUid: {
            description: "Uid of the specific seat within booking.",
            examples: ["3be561a9-31f1-4b8e-aefc-9d9a085f0dd1"],
            type: "string",
          },
        },
      },
    },
  },
  {
    description:
      ":bookingUid can be :bookingUid of an usual booking, individual recurrence or recurring booking to cancel all recurrences.\n    For seated bookings to cancel one individual booking provide :bookingUid and :seatUid in the request body. For recurring seated bookings it is not possible to cancel all of them with 1 call\n    like with non-seated recurring bookings by providing recurring bookind uid - you have to cancel each recurrence booking by its bookingUid + seatUid.",
    method: "post",
    name: "BookingsController_2024_08_13_cancelBooking",
    url: "https://api.cal.com/v2/bookings/{bookingUid}/cancel",
    params: [
      {
        description: "Must be set to 2024-08-13",
        in: "header",
        name: "cal-api-version",
        required: true,
        explode: false,
        schema: {
          default: "2024-08-13",
          type: "string",
        },
        style: "simple",
      },
      {
        in: "path",
        name: "bookingUid",
        required: true,
        explode: false,
        schema: {
          type: "string",
        },
        style: "simple",
      },
    ],
    body: {
      anyOf: [
        {
          $ref: "#/$defs/CancelBookingInput_2024_08_13",
        },
        {
          $ref: "#/$defs/CancelSeatedBookingInput_2024_08_13",
        },
      ],
      description:
        "Accepts different types of cancel booking input: Cancel Booking (Option 1) or Cancel Seated Booking (Option 2)",
      type: "object",
    },
    contentType: "application/json",
    defs: {
      CancelBookingInput_2024_08_13: {
        type: "object",
        properties: {
          cancellationReason: {
            examples: ["User requested cancellation"],
            type: "string",
          },
          cancelSubsequentBookings: {
            description:
              "For recurring non-seated booking - if true, cancel booking with the bookingUid of the individual recurrence and all recurrences that come after it.",
            type: "boolean",
          },
        },
      },
      CancelSeatedBookingInput_2024_08_13: {
        required: ["seatUid"],
        type: "object",
        properties: {
          seatUid: {
            description: "Uid of the specific seat within booking.",
            examples: ["3be561a9-31f1-4b8e-aefc-9d9a085f0dd1"],
            type: "string",
          },
        },
      },
    },
  },
  {
    description: "Mark a booking absence",
    method: "post",
    name: "BookingsController_2024_08_13_markNoShow",
    url: "https://api.cal.com/v2/bookings/{bookingUid}/mark-absent",
    params: [
      {
        description: "Must be set to 2024-08-13",
        in: "header",
        name: "cal-api-version",
        required: true,
        explode: false,
        schema: {
          default: "2024-08-13",
          type: "string",
        },
        style: "simple",
      },
      {
        in: "path",
        name: "bookingUid",
        required: true,
        explode: false,
        schema: {
          type: "string",
        },
        style: "simple",
      },
      {
        description:
          "value must be `Bearer <token>` where `<token>` either managed user access token or api key prefixed with cal_",
        in: "header",
        name: "Authorization",
        required: true,
        explode: false,
        schema: {
          type: "string",
        },
        style: "simple",
      },
    ],
    body: {
      $ref: "#/$defs/MarkAbsentBookingInput_2024_08_13",
    },
    contentType: "application/json",
    defs: {
      MarkAbsentBookingInput_2024_08_13: {
        type: "object",
        properties: {
          host: {
            description: "Whether the host was absent",
            examples: [false],
            type: "boolean",
          },
          attendees: {
            type: "array",
            items: {
              $ref: "#/$defs/Attendee",
            },
          },
        },
      },
      Attendee: {
        required: ["name", "timeZone"],
        type: "object",
        properties: {
          name: {
            description: "The name of the attendee.",
            examples: ["John Doe"],
            type: "string",
          },
          email: {
            description: "The email of the attendee.",
            examples: ["john.doe@example.com"],
            type: "string",
          },
          timeZone: {
            description: "The time zone of the attendee.",
            examples: ["America/New_York"],
            type: "string",
          },
          phoneNumber: {
            description:
              "The phone number of the attendee in international format.",
            examples: ["+919876543210"],
            type: "string",
          },
          language: {
            default: "en",
            description:
              "The preferred language of the attendee. Used for booking confirmation.",
            enum: [
              "ar",
              "ca",
              "de",
              "es",
              "eu",
              "he",
              "id",
              "ja",
              "lv",
              "pl",
              "ro",
              "sr",
              "th",
              "vi",
              "az",
              "cs",
              "el",
              "es-419",
              "fi",
              "hr",
              "it",
              "km",
              "nl",
              "pt",
              "ru",
              "sv",
              "tr",
              "zh-CN",
              "bg",
              "da",
              "en",
              "et",
              "fr",
              "hu",
              "iw",
              "ko",
              "no",
              "pt-BR",
              "sk",
              "ta",
              "uk",
              "zh-TW",
            ],
            examples: ["it"],
            type: "string",
          },
        },
      },
    },
  },
  {
    description: "Automatically reassign booking to a new host",
    method: "post",
    name: "BookingsController_2024_08_13_reassignBooking",
    url: "https://api.cal.com/v2/bookings/{bookingUid}/reassign",
    params: [
      {
        description: "Must be set to 2024-08-13",
        in: "header",
        name: "cal-api-version",
        required: true,
        explode: false,
        schema: {
          default: "2024-08-13",
          type: "string",
        },
        style: "simple",
      },
      {
        in: "path",
        name: "bookingUid",
        required: true,
        explode: false,
        schema: {
          type: "string",
        },
        style: "simple",
      },
      {
        description:
          "value must be `Bearer <token>` where `<token>` either managed user access token or api key prefixed with cal_",
        in: "header",
        name: "Authorization",
        required: true,
        explode: false,
        schema: {
          type: "string",
        },
        style: "simple",
      },
    ],
    defs: {},
  },
  {
    description: "Reassign a booking to a specific user",
    method: "post",
    name: "BookingsController_2024_08_13_reassignBookingToUser",
    url: "https://api.cal.com/v2/bookings/{bookingUid}/reassign/{userId}",
    params: [
      {
        description: "Must be set to 2024-08-13",
        in: "header",
        name: "cal-api-version",
        required: true,
        explode: false,
        schema: {
          default: "2024-08-13",
          type: "string",
        },
        style: "simple",
      },
      {
        in: "path",
        name: "bookingUid",
        required: true,
        explode: false,
        schema: {
          type: "string",
        },
        style: "simple",
      },
      {
        in: "path",
        name: "userId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
      {
        description:
          "value must be `Bearer <token>` where `<token>` either managed user access token or api key prefixed with cal_",
        in: "header",
        name: "Authorization",
        required: true,
        explode: false,
        schema: {
          type: "string",
        },
        style: "simple",
      },
    ],
    body: {
      $ref: "#/$defs/ReassignToUserBookingInput_2024_08_13",
    },
    contentType: "application/json",
    defs: {
      ReassignToUserBookingInput_2024_08_13: {
        type: "object",
        properties: {
          reason: {
            description: "Reason for reassigning the booking",
            examples: ["Host has to take another call"],
            type: "string",
          },
        },
      },
    },
  },
  {
    description: "Confirm booking that requires a confirmation",
    method: "post",
    name: "BookingsController_2024_08_13_confirmBooking",
    url: "https://api.cal.com/v2/bookings/{bookingUid}/confirm",
    params: [
      {
        description: "Must be set to 2024-08-13",
        in: "header",
        name: "cal-api-version",
        required: true,
        explode: false,
        schema: {
          default: "2024-08-13",
          type: "string",
        },
        style: "simple",
      },
      {
        in: "path",
        name: "bookingUid",
        required: true,
        explode: false,
        schema: {
          type: "string",
        },
        style: "simple",
      },
      {
        description:
          "value must be `Bearer <token>` where `<token>` either managed user access token or api key prefixed with cal_",
        in: "header",
        name: "Authorization",
        required: true,
        explode: false,
        schema: {
          type: "string",
        },
        style: "simple",
      },
    ],
    defs: {},
  },
  {
    description: "Decline booking that requires a confirmation",
    method: "post",
    name: "BookingsController_2024_08_13_declineBooking",
    url: "https://api.cal.com/v2/bookings/{bookingUid}/decline",
    params: [
      {
        description: "Must be set to 2024-08-13",
        in: "header",
        name: "cal-api-version",
        required: true,
        explode: false,
        schema: {
          default: "2024-08-13",
          type: "string",
        },
        style: "simple",
      },
      {
        in: "path",
        name: "bookingUid",
        required: true,
        explode: false,
        schema: {
          type: "string",
        },
        style: "simple",
      },
      {
        description:
          "value must be `Bearer <token>` where `<token>` either managed user access token or api key prefixed with cal_",
        in: "header",
        name: "Authorization",
        required: true,
        explode: false,
        schema: {
          type: "string",
        },
        style: "simple",
      },
    ],
    body: {
      $ref: "#/$defs/DeclineBookingInput_2024_08_13",
    },
    contentType: "application/json",
    defs: {
      DeclineBookingInput_2024_08_13: {
        type: "object",
        properties: {
          reason: {
            description:
              "Reason for declining a booking that requires a confirmation",
            examples: ["Host has to take another call"],
            type: "string",
          },
        },
      },
    },
  },
  {
    description:
      "Retrieve calendar links for a booking that can be used to add the event to various calendar services. Returns links for Google Calendar, Microsoft Office, Microsoft Outlook, and a downloadable ICS file.",
    method: "get",
    name: "BookingsController_2024_08_13_getCalendarLinks",
    url: "https://api.cal.com/v2/bookings/{bookingUid}/calendar-links",
    params: [
      {
        description: "Must be set to 2024-08-13",
        in: "header",
        name: "cal-api-version",
        required: true,
        explode: false,
        schema: {
          default: "2024-08-13",
          type: "string",
        },
        style: "simple",
      },
      {
        in: "path",
        name: "bookingUid",
        required: true,
        explode: false,
        schema: {
          type: "string",
        },
        style: "simple",
      },
    ],
    defs: {},
  },
  {
    description: "Save an ICS feed",
    method: "post",
    name: "CalendarsController_createIcsFeed",
    url: "https://api.cal.com/v2/calendars/ics-feed/save",
    body: {
      $ref: "#/$defs/CreateIcsFeedInputDto",
    },
    contentType: "application/json",
    defs: {
      CreateIcsFeedInputDto: {
        required: ["urls"],
        type: "object",
        properties: {
          urls: {
            description: "An array of ICS URLs",
            examples: [
              ["https://cal.com/ics/feed.ics", "http://cal.com/ics/feed.ics"],
            ],
            type: "array",
            items: {
              examples: ["https://cal.com/ics/feed.ics"],
              type: "string",
            },
          },
          readOnly: {
            default: true,
            description: "Whether to allowing writing to the calendar or not",
            examples: [false],
            type: "boolean",
          },
        },
      },
    },
  },
  {
    description: "Check an ICS feed",
    method: "get",
    name: "CalendarsController_checkIcsFeed",
    url: "https://api.cal.com/v2/calendars/ics-feed/check",
    defs: {},
  },
  {
    description:
      "Get busy times from a calendar. Example request URL is `https://api.cal.com/v2/calendars/busy-times?loggedInUsersTz=Europe%2FMadrid&dateFrom=2024-12-18&dateTo=2024-12-18&calendarsToLoad[0][credentialId]=135&calendarsToLoad[0][externalId]=skrauciz%40gmail.com`",
    method: "get",
    name: "CalendarsController_getBusyTimes",
    url: "https://api.cal.com/v2/calendars/busy-times",
    params: [
      {
        description:
          "The timezone of the logged in user represented as a string",
        in: "query",
        name: "loggedInUsersTz",
        required: true,
        example: "America/New_York",
        explode: true,
        schema: {
          type: "string",
        },
        style: "form",
      },
      {
        description: "The starting date for the busy times query",
        in: "query",
        name: "dateFrom",
        required: false,
        example: "2023-10-01",
        explode: true,
        schema: {
          type: "string",
        },
        style: "form",
      },
      {
        description: "The ending date for the busy times query",
        in: "query",
        name: "dateTo",
        required: false,
        example: "2023-10-31",
        explode: true,
        schema: {
          type: "string",
        },
        style: "form",
      },
      {
        in: "query",
        name: "credentialId",
        required: true,
        explode: true,
        schema: {
          type: "number",
        },
        style: "form",
      },
      {
        in: "query",
        name: "externalId",
        required: true,
        explode: true,
        schema: {
          type: "string",
        },
        style: "form",
      },
    ],
    defs: {},
  },
  {
    description: "Get all calendars",
    method: "get",
    name: "CalendarsController_getCalendars",
    url: "https://api.cal.com/v2/calendars",
    defs: {},
  },
  {
    description: "Get oAuth connect URL",
    method: "get",
    name: "CalendarsController_redirect",
    url: "https://api.cal.com/v2/calendars/{calendar}/connect",
    params: [
      {
        in: "header",
        name: "Authorization",
        required: true,
        explode: false,
        schema: {
          type: "string",
        },
        style: "simple",
      },
      {
        in: "path",
        name: "calendar",
        required: true,
        explode: false,
        schema: {
          enum: ["office365", "google"],
          type: "string",
        },
        style: "simple",
      },
    ],
    defs: {},
  },
  {
    description: "Save an oAuth calendar credentials",
    method: "get",
    name: "CalendarsController_save",
    url: "https://api.cal.com/v2/calendars/{calendar}/save",
    params: [
      {
        in: "query",
        name: "state",
        required: true,
        explode: true,
        schema: {
          type: "string",
        },
        style: "form",
      },
      {
        in: "query",
        name: "code",
        required: true,
        explode: true,
        schema: {
          type: "string",
        },
        style: "form",
      },
      {
        in: "path",
        name: "calendar",
        required: true,
        explode: false,
        schema: {
          enum: ["office365", "google"],
          type: "string",
        },
        style: "simple",
      },
    ],
    defs: {},
  },
  {
    description: "Sync credentials",
    method: "post",
    name: "CalendarsController_syncCredentials",
    url: "https://api.cal.com/v2/calendars/{calendar}/credentials",
    params: [
      {
        in: "path",
        name: "calendar",
        required: true,
        explode: false,
        schema: {
          enum: ["apple"],
          type: "string",
        },
        style: "simple",
      },
    ],
    defs: {},
  },
  {
    description: "Check a calendar connection",
    method: "get",
    name: "CalendarsController_check",
    url: "https://api.cal.com/v2/calendars/{calendar}/check",
    params: [
      {
        in: "path",
        name: "calendar",
        required: true,
        explode: false,
        schema: {
          enum: ["apple", "google", "office365"],
          type: "string",
        },
        style: "simple",
      },
    ],
    defs: {},
  },
  {
    description: "Disconnect a calendar",
    method: "post",
    name: "CalendarsController_deleteCalendarCredentials",
    url: "https://api.cal.com/v2/calendars/{calendar}/disconnect",
    params: [
      {
        in: "path",
        name: "calendar",
        required: true,
        explode: false,
        schema: {
          enum: ["apple", "google", "office365"],
          type: "string",
        },
        style: "simple",
      },
    ],
    body: {
      $ref: "#/$defs/DeleteCalendarCredentialsInputBodyDto",
    },
    contentType: "application/json",
    defs: {
      DeleteCalendarCredentialsInputBodyDto: {
        required: ["id"],
        type: "object",
        properties: {
          id: {
            description:
              "Credential ID of the calendar to delete, as returned by the /calendars endpoint",
            examples: [10],
            type: "integer",
          },
        },
      },
    },
  },
  {
    description: "Connect your conferencing application",
    method: "post",
    name: "ConferencingController_connect",
    url: "https://api.cal.com/v2/conferencing/{app}/connect",
    params: [
      {
        in: "path",
        name: "app",
        required: true,
        explode: false,
        schema: {
          type: "string",
        },
        style: "simple",
      },
    ],
    defs: {},
  },
  {
    description: "Get OAuth conferencing app auth url",
    method: "get",
    name: "ConferencingController_redirect",
    url: "https://api.cal.com/v2/conferencing/{app}/oauth/auth-url",
    params: [
      {
        in: "header",
        name: "Authorization",
        required: true,
        explode: false,
        schema: {
          type: "string",
        },
        style: "simple",
      },
      {
        in: "path",
        name: "app",
        required: true,
        explode: false,
        schema: {
          type: "string",
        },
        style: "simple",
      },
      {
        in: "query",
        name: "returnTo",
        required: true,
        explode: true,
        schema: {
          type: "string",
        },
        style: "form",
      },
      {
        in: "query",
        name: "onErrorReturnTo",
        required: true,
        explode: true,
        schema: {
          type: "string",
        },
        style: "form",
      },
    ],
    defs: {},
  },
  {
    description: "conferencing apps oauths callback",
    method: "get",
    name: "ConferencingController_save",
    url: "https://api.cal.com/v2/conferencing/{app}/oauth/callback",
    params: [
      {
        in: "query",
        name: "state",
        required: true,
        explode: true,
        schema: {
          type: "string",
        },
        style: "form",
      },
      {
        in: "path",
        name: "app",
        required: true,
        explode: false,
        schema: {
          type: "string",
        },
        style: "simple",
      },
      {
        in: "query",
        name: "code",
        required: true,
        explode: true,
        schema: {
          type: "string",
        },
        style: "form",
      },
    ],
    defs: {},
  },
  {
    description: "List your conferencing applications",
    method: "get",
    name: "ConferencingController_listInstalledConferencingApps",
    url: "https://api.cal.com/v2/conferencing",
    defs: {},
  },
  {
    description: "Set your default conferencing application",
    method: "post",
    name: "ConferencingController_default",
    url: "https://api.cal.com/v2/conferencing/{app}/default",
    params: [
      {
        in: "path",
        name: "app",
        required: true,
        explode: false,
        schema: {
          type: "string",
        },
        style: "simple",
      },
    ],
    defs: {},
  },
  {
    description: "Get your default conferencing application",
    method: "get",
    name: "ConferencingController_getDefault",
    url: "https://api.cal.com/v2/conferencing/default",
    defs: {},
  },
  {
    description: "Disconnect your conferencing application",
    method: "delete",
    name: "ConferencingController_disconnect",
    url: "https://api.cal.com/v2/conferencing/{app}/disconnect",
    params: [
      {
        in: "path",
        name: "app",
        required: true,
        explode: false,
        schema: {
          type: "string",
        },
        style: "simple",
      },
    ],
    defs: {},
  },
  {
    description: "Update destination calendars",
    method: "put",
    name: "DestinationCalendarsController_updateDestinationCalendars",
    url: "https://api.cal.com/v2/destination-calendars",
    body: {
      $ref: "#/$defs/DestinationCalendarsInputBodyDto",
    },
    contentType: "application/json",
    defs: {
      DestinationCalendarsInputBodyDto: {
        required: ["integration", "externalId"],
        type: "object",
        properties: {
          integration: {
            description:
              "The calendar service you want to integrate, as returned by the /calendars endpoint",
            enum: ["apple_calendar", "google_calendar", "office365_calendar"],
            examples: ["apple_calendar"],
            type: "string",
          },
          externalId: {
            description:
              "Unique identifier used to represent the specific calendar, as returned by the /calendars endpoint",
            examples: [
              "https://caldav.icloud.com/26962146906/calendars/1644422A-1945-4438-BBC0-4F0Q23A57R7S/",
            ],
            type: "string",
          },
          delegationCredentialId: {
            type: "string",
          },
        },
      },
    },
  },
  {
    description: "Get all event types",
    method: "get",
    name: "EventTypesController_2024_06_14_getEventTypes",
    url: "https://api.cal.com/v2/event-types",
    params: [
      {
        description: "Must be set to 2024-06-14",
        in: "header",
        name: "cal-api-version",
        required: true,
        explode: false,
        schema: {
          default: "2024-06-14",
          type: "string",
        },
        style: "simple",
      },
      {
        description:
          "The username of the user to get event types for. If only username provided will get all event types.",
        in: "query",
        name: "username",
        required: false,
        explode: true,
        schema: {
          type: "string",
        },
        style: "form",
      },
      {
        description:
          "Slug of event type to return. Notably, if eventSlug is provided then username must be provided too, because multiple users can have event with same slug.",
        in: "query",
        name: "eventSlug",
        required: false,
        explode: true,
        schema: {
          type: "string",
        },
        style: "form",
      },
      {
        description:
          "Get dynamic event type for multiple usernames separated by comma. e.g `usernames=alice,bob`",
        in: "query",
        name: "usernames",
        required: false,
        explode: true,
        schema: {
          type: "string",
        },
        style: "form",
      },
      {
        description:
          "slug of the user's organization if he is in one, orgId is not required if using this parameter",
        in: "query",
        name: "orgSlug",
        required: false,
        explode: true,
        schema: {
          type: "string",
        },
        style: "form",
      },
      {
        description:
          "ID of the organization of the user you want the get the event-types of, orgSlug is not needed when using this parameter",
        in: "query",
        name: "orgId",
        required: false,
        explode: true,
        schema: {
          type: "number",
        },
        style: "form",
      },
    ],
    defs: {},
  },
  {
    description: "Create an event type",
    method: "post",
    name: "EventTypesController_2024_06_14_createEventType",
    url: "https://api.cal.com/v2/event-types",
    params: [
      {
        description: "Must be set to 2024-06-14",
        in: "header",
        name: "cal-api-version",
        required: true,
        explode: false,
        schema: {
          default: "2024-06-14",
          type: "string",
        },
        style: "simple",
      },
      {
        description:
          "value must be `Bearer <token>` where `<token>` either managed user access token or api key prefixed with cal_",
        in: "header",
        name: "Authorization",
        required: true,
        explode: false,
        schema: {
          type: "string",
        },
        style: "simple",
      },
    ],
    body: {
      $ref: "#/$defs/CreateEventTypeInput_2024_06_14",
    },
    contentType: "application/json",
    defs: {
      CreateEventTypeInput_2024_06_14: {
        required: ["lengthInMinutes", "title", "slug"],
        type: "object",
        properties: {
          lengthInMinutes: {
            examples: [60],
            type: "number",
          },
          lengthInMinutesOptions: {
            description:
              "If you want that user can choose between different lengths of the event you can specify them here. Must include the provided `lengthInMinutes`.",
            examples: [[15, 30, 60]],
            type: "array",
            items: {
              type: "string",
            },
          },
          title: {
            examples: ["Learn the secrets of masterchief!"],
            type: "string",
          },
          slug: {
            examples: ["learn-the-secrets-of-masterchief"],
            type: "string",
          },
          description: {
            examples: [
              "Discover the culinary wonders of the Argentina by making the best flan ever!",
            ],
            type: "string",
          },
          bookingFields: {
            description:
              "Custom fields that can be added to the booking form when the event is booked by someone. By default booking form has name and email field.",
            type: "array",
            items: {
              anyOf: [
                {
                  $ref: "#/$defs/NameDefaultFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/EmailDefaultFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/TitleDefaultFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/NotesDefaultFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/GuestsDefaultFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/RescheduleReasonDefaultFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/PhoneFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/AddressFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/TextFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/NumberFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/TextAreaFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/SelectFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/MultiSelectFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/MultiEmailFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/CheckboxGroupFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/RadioGroupFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/BooleanFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/UrlFieldInput_2024_06_14",
                },
              ],
              type: "object",
            },
          },
          disableGuests: {
            description:
              "If true, person booking this event can't add guests via their emails.",
            type: "boolean",
          },
          slotInterval: {
            description:
              "Number representing length of each slot when event is booked. By default it equal length of the event type.\n      If event length is 60 minutes then we would have slots 9AM, 10AM, 11AM etc. but if it was changed to 30 minutes then\n      we would have slots 9AM, 9:30AM, 10AM, 10:30AM etc. as the available times to book the 60 minute event.",
            type: "number",
          },
          minimumBookingNotice: {
            description:
              "Minimum number of minutes before the event that a booking can be made.",
            type: "number",
          },
          beforeEventBuffer: {
            description:
              "Time spaces that can be prepended before an event to give more time before it.",
            type: "number",
          },
          afterEventBuffer: {
            description:
              "Time spaces that can be appended after an event to give more time after it.",
            type: "number",
          },
          scheduleId: {
            description:
              "If you want that this event has different schedule than user's default one you can specify it here.",
            type: "number",
          },
          bookingLimitsCount: {
            description: "Limit how many times this event can be booked",
            anyOf: [
              {
                $ref: "#/$defs/BaseBookingLimitsCount_2024_06_14",
              },
              {
                $ref: "#/$defs/Disabled_2024_06_14",
              },
            ],
            type: "object",
          },
          onlyShowFirstAvailableSlot: {
            description:
              "This will limit your availability for this event type to one slot per day, scheduled at the earliest available time.",
            type: "boolean",
          },
          bookingLimitsDuration: {
            description:
              "Limit total amount of time that this event can be booked",
            anyOf: [
              {
                $ref: "#/$defs/BaseBookingLimitsDuration_2024_06_14",
              },
              {
                $ref: "#/$defs/Disabled_2024_06_14",
              },
            ],
            type: "object",
          },
          bookingWindow: {
            description: "Limit how far in the future this event can be booked",
            anyOf: [
              {
                $ref: "#/$defs/BusinessDaysWindow_2024_06_14",
              },
              {
                $ref: "#/$defs/CalendarDaysWindow_2024_06_14",
              },
              {
                $ref: "#/$defs/RangeWindow_2024_06_14",
              },
              {
                $ref: "#/$defs/Disabled_2024_06_14",
              },
            ],
            type: "object",
          },
          offsetStart: {
            description:
              "Offset timeslots shown to bookers by a specified number of minutes",
            type: "number",
          },
          bookerLayouts: {
            description:
              "Should booker have week, month or column view. Specify default layout and enabled layouts user can pick.",
            allOf: [
              {
                $ref: "#/$defs/BookerLayouts_2024_06_14",
              },
            ],
          },
          confirmationPolicy: {
            description:
              "Specify how the booking needs to be manually confirmed before it is pushed to the integrations and a confirmation mail is sent.",
            anyOf: [
              {
                $ref: "#/$defs/BaseConfirmationPolicy_2024_06_14",
              },
              {
                $ref: "#/$defs/Disabled_2024_06_14",
              },
            ],
            type: "object",
          },
          recurrence: {
            description: "Create a recurring event type.",
            anyOf: [
              {
                $ref: "#/$defs/Recurrence_2024_06_14",
              },
              {
                $ref: "#/$defs/Disabled_2024_06_14",
              },
            ],
            type: "object",
          },
          requiresBookerEmailVerification: {
            type: "boolean",
          },
          hideCalendarNotes: {
            type: "boolean",
          },
          lockTimeZoneToggleOnBookingPage: {
            type: "boolean",
          },
          color: {
            $ref: "#/$defs/EventTypeColor_2024_06_14",
          },
          seats: {
            description: "Create an event type with multiple seats.",
            anyOf: [
              {
                $ref: "#/$defs/Seats_2024_06_14",
              },
              {
                $ref: "#/$defs/Disabled_2024_06_14",
              },
            ],
            type: "object",
          },
          customName: {
            description:
              "Customizable event name with valid variables: \n      {Event type title}, {Organiser}, {Scheduler}, {Location}, {Organiser first name}, \n      {Scheduler first name}, {Scheduler last name}, {Event duration}, {LOCATION}, \n      {HOST/ATTENDEE}, {HOST}, {ATTENDEE}, {USER}",
            examples: [
              "{Event type title} between {Organiser} and {Scheduler}",
            ],
            type: "string",
          },
          destinationCalendar: {
            $ref: "#/$defs/DestinationCalendar_2024_06_14",
          },
          useDestinationCalendarEmail: {
            type: "boolean",
          },
          hideCalendarEventDetails: {
            type: "boolean",
          },
          successRedirectUrl: {
            description:
              "A valid URL where the booker will redirect to, once the booking is completed successfully",
            examples: ["https://masterchief.com/argentina/flan/video/9129412"],
            type: "string",
          },
          locations: {
            description:
              "Locations where the event will take place. If not provided, cal video link will be used as the location.",
            type: "array",
            items: {
              anyOf: [
                {
                  $ref: "#/$defs/InputAddressLocation_2024_06_14",
                },
                {
                  $ref: "#/$defs/InputLinkLocation_2024_06_14",
                },
                {
                  $ref: "#/$defs/InputIntegrationLocation_2024_06_14",
                },
                {
                  $ref: "#/$defs/InputPhoneLocation_2024_06_14",
                },
                {
                  $ref: "#/$defs/InputAttendeeAddressLocation_2024_06_14",
                },
                {
                  $ref: "#/$defs/InputAttendeePhoneLocation_2024_06_14",
                },
                {
                  $ref: "#/$defs/InputAttendeeDefinedLocation_2024_06_14",
                },
              ],
              type: "object",
            },
          },
        },
      },
      NameDefaultFieldInput_2024_06_14: {
        required: ["type", "label", "placeholder"],
        type: "object",
        properties: {
          type: {
            description:
              "only allowed value for type is `name`. Used for having 1 booking field for both first name and last name.",
            examples: ["name"],
            type: "string",
          },
          label: {
            type: "string",
          },
          placeholder: {
            type: "string",
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if URL contains query parameter `&name=bob`,      the name field will be prefilled with this value and disabled.",
            type: "boolean",
          },
        },
      },
      EmailDefaultFieldInput_2024_06_14: {
        required: ["type", "label", "required", "placeholder"],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `email`",
            examples: ["email"],
            type: "string",
          },
          label: {
            type: "string",
          },
          required: {
            type: "object",
          },
          placeholder: {
            type: "string",
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if URL contains query parameter `&email=bob@gmail.com`,      the email field will be prefilled with this value and disabled.",
            type: "boolean",
          },
        },
      },
      TitleDefaultFieldInput_2024_06_14: {
        required: ["slug"],
        type: "object",
        properties: {
          slug: {
            description: "only allowed value for type is `title`",
            examples: ["title"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
          label: {
            type: "string",
          },
          placeholder: {
            type: "string",
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if URL contains query parameter `&title=journey`,      the title field will be prefilled with this value and disabled.",
            type: "boolean",
          },
        },
      },
      NotesDefaultFieldInput_2024_06_14: {
        required: ["slug"],
        type: "object",
        properties: {
          slug: {
            description: "only allowed value for type is `notes`",
            examples: ["notes"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
          label: {
            type: "string",
          },
          placeholder: {
            type: "string",
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if URL contains query parameter `&notes=journey`,      the notes field will be prefilled with this value and disabled.",
            type: "boolean",
          },
        },
      },
      GuestsDefaultFieldInput_2024_06_14: {
        required: ["slug"],
        type: "object",
        properties: {
          slug: {
            description: "only allowed value for type is `guests`",
            examples: ["guests"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
          label: {
            type: "string",
          },
          placeholder: {
            type: "string",
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if URL contains query parameter `&guests=bob@cal.com`,      the guests field will be prefilled with this value and disabled.",
            type: "boolean",
          },
        },
      },
      RescheduleReasonDefaultFieldInput_2024_06_14: {
        required: ["slug"],
        type: "object",
        properties: {
          slug: {
            description: "only allowed value for type is `rescheduleReason`",
            examples: ["rescheduleReason"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
          label: {
            type: "string",
          },
          placeholder: {
            type: "string",
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if URL contains query parameter `&rescheduleReason=travel`,      the rescheduleReason field will be prefilled with this value and disabled.",
            type: "boolean",
          },
        },
      },
      PhoneFieldInput_2024_06_14: {
        required: [
          "type",
          "slug",
          "label",
          "required",
          "placeholder",
          "hidden",
        ],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `phone`",
            examples: ["phone"],
            type: "string",
          },
          slug: {
            description:
              "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            examples: ["some-slug"],
            type: "string",
          },
          label: {
            type: "string",
          },
          required: {
            type: "boolean",
          },
          placeholder: {
            type: "string",
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `phone` and the URL contains query parameter `&phone=1234567890`,      the phone field will be prefilled with this value and disabled.",
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
        },
      },
      AddressFieldInput_2024_06_14: {
        required: [
          "type",
          "slug",
          "label",
          "required",
          "placeholder",
          "hidden",
        ],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `address`",
            examples: ["address"],
            type: "string",
          },
          slug: {
            description:
              "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            examples: ["some-slug"],
            type: "string",
          },
          label: {
            examples: ["Please enter your address"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          placeholder: {
            examples: ["e.g., 1234 Main St"],
            type: "string",
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `address` and the URL contains query parameter `&address=1234 Main St, London`,      the address field will be prefilled with this value and disabled.",
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
        },
      },
      TextFieldInput_2024_06_14: {
        required: [
          "type",
          "slug",
          "label",
          "required",
          "placeholder",
          "hidden",
        ],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `text`",
            examples: ["text"],
            type: "string",
          },
          slug: {
            description:
              "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            examples: ["some-slug"],
            type: "string",
          },
          label: {
            examples: ["Please enter your text"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          placeholder: {
            examples: ["e.g., Enter text here"],
            type: "string",
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `who-referred-you` and the URL contains query parameter `&who-referred-you=bob`,      the text field will be prefilled with this value and disabled.",
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
        },
      },
      NumberFieldInput_2024_06_14: {
        required: [
          "type",
          "slug",
          "label",
          "required",
          "placeholder",
          "hidden",
        ],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `number`",
            examples: ["number"],
            type: "string",
          },
          slug: {
            description:
              "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            examples: ["some-slug"],
            type: "string",
          },
          label: {
            examples: ["Please enter a number"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          placeholder: {
            examples: ["e.g., 100"],
            type: "string",
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `calories-per-day` and the URL contains query parameter `&calories-per-day=3000`,      the number field will be prefilled with this value and disabled.",
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
        },
      },
      TextAreaFieldInput_2024_06_14: {
        required: [
          "type",
          "slug",
          "label",
          "required",
          "placeholder",
          "hidden",
        ],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `textarea`",
            examples: ["textarea"],
            type: "string",
          },
          slug: {
            description:
              "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            examples: ["some-slug"],
            type: "string",
          },
          label: {
            examples: ["Please enter detailed information"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          placeholder: {
            examples: ["e.g., Detailed description here..."],
            type: "string",
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `dear-diary` and the URL contains query parameter `&dear-diary=Today I shipped a feature`,      the text area will be prefilled with this value and disabled.",
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
        },
      },
      SelectFieldInput_2024_06_14: {
        required: [
          "type",
          "slug",
          "label",
          "required",
          "placeholder",
          "options",
          "hidden",
        ],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `select`",
            examples: ["select"],
            type: "string",
          },
          slug: {
            description:
              "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            examples: ["some-slug"],
            type: "string",
          },
          label: {
            examples: ["Please select an option"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          placeholder: {
            examples: ["Select..."],
            type: "string",
          },
          options: {
            examples: [["Option 1", "Option 2"]],
            type: "array",
            items: {
              type: "string",
            },
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `language` and options of this select field are ['english', 'italian'] and the URL contains query parameter `&language=italian`,      the 'italian' will be selected and the select field will be disabled.",
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
        },
      },
      MultiSelectFieldInput_2024_06_14: {
        required: ["type", "slug", "label", "required", "options", "hidden"],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `multiselect`",
            examples: ["multiselect"],
            type: "string",
          },
          slug: {
            description:
              "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            examples: ["some-slug"],
            type: "string",
          },
          label: {
            examples: ["Please select multiple options"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          options: {
            examples: [["Option 1", "Option 2"]],
            type: "array",
            items: {
              type: "string",
            },
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `consultants` and the URL contains query parameter `&consultants=en&language=it`,      the 'en' and 'it' will be selected and the select field will be disabled.",
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
        },
      },
      MultiEmailFieldInput_2024_06_14: {
        required: [
          "type",
          "slug",
          "label",
          "required",
          "placeholder",
          "hidden",
        ],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `multiemail`",
            examples: ["multiemail"],
            type: "string",
          },
          slug: {
            description:
              "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            examples: ["some-slug"],
            type: "string",
          },
          label: {
            examples: ["Please enter multiple emails"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          placeholder: {
            examples: ["e.g., example@example.com"],
            type: "string",
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `consultants` and the URL contains query parameter `&consultants=alice@gmail.com&consultants=bob@gmail.com`,      the these emails will be added and none more can be added.",
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
        },
      },
      CheckboxGroupFieldInput_2024_06_14: {
        required: ["type", "slug", "label", "required", "options", "hidden"],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `checkbox`",
            examples: ["checkbox"],
            type: "string",
          },
          slug: {
            description:
              "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            examples: ["some-slug"],
            type: "string",
          },
          label: {
            examples: ["Select all that apply"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          options: {
            examples: [["Checkbox 1", "Checkbox 2"]],
            type: "array",
            items: {
              type: "string",
            },
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `notify-me` and the URL contains query parameter `&notify-me=true`,      the checkbox will be selected and the checkbox field will be disabled.",
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
        },
      },
      RadioGroupFieldInput_2024_06_14: {
        required: ["type", "slug", "label", "required", "options", "hidden"],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `radio`",
            examples: ["radio"],
            type: "string",
          },
          slug: {
            description:
              "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            examples: ["some-slug"],
            type: "string",
          },
          label: {
            examples: ["Select one option"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          options: {
            examples: [["Radio 1", "Radio 2"]],
            type: "array",
            items: {
              type: "string",
            },
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `language` and options of this select field are ['english', 'italian'] and the URL contains query parameter `&language=italian`,      the 'italian' radio button will be selected and the select field will be disabled.",
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
        },
      },
      BooleanFieldInput_2024_06_14: {
        required: ["type", "slug", "label", "required", "hidden"],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `boolean`",
            examples: ["boolean"],
            type: "string",
          },
          slug: {
            description:
              "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            examples: ["some-slug"],
            type: "string",
          },
          label: {
            examples: ["Agree to terms?"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          disableOnPrefill: {
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
        },
      },
      UrlFieldInput_2024_06_14: {
        required: [
          "type",
          "slug",
          "label",
          "required",
          "placeholder",
          "hidden",
        ],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `url`",
            examples: ["url"],
            type: "string",
          },
          slug: {
            description:
              "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            examples: ["some-slug"],
            type: "string",
          },
          label: {
            examples: ["Please enter your text"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          placeholder: {
            examples: ["e.g., Enter url here"],
            type: "string",
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `video-url` and the URL contains query parameter `&video-url=https://youtube.com/abc`the url field will be prefilled with this value and disabled.",
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
        },
      },
      BaseBookingLimitsCount_2024_06_14: {
        type: "object",
        properties: {
          day: {
            description: "The number of bookings per day",
            examples: [1],
            type: "number",
          },
          week: {
            description: "The number of bookings per week",
            examples: [2],
            type: "number",
          },
          month: {
            description: "The number of bookings per month",
            examples: [3],
            type: "number",
          },
          year: {
            description: "The number of bookings per year",
            examples: [4],
            type: "number",
          },
          disabled: {
            default: false,
            type: "boolean",
          },
        },
      },
      Disabled_2024_06_14: {
        required: ["disabled"],
        type: "object",
        properties: {
          disabled: {
            default: false,
            description: "Indicates if the option is disabled",
            examples: [true],
            type: "boolean",
          },
        },
      },
      BaseBookingLimitsDuration_2024_06_14: {
        type: "object",
        properties: {
          day: {
            description:
              "The duration of bookings per day (must be a multiple of 15)",
            examples: [60],
            type: "number",
          },
          week: {
            description:
              "The duration of bookings per week (must be a multiple of 15)",
            examples: [120],
            type: "number",
          },
          month: {
            description:
              "The duration of bookings per month (must be a multiple of 15)",
            examples: [180],
            type: "number",
          },
          year: {
            description:
              "The duration of bookings per year (must be a multiple of 15)",
            examples: [240],
            type: "number",
          },
        },
      },
      BusinessDaysWindow_2024_06_14: {
        required: ["type", "value"],
        type: "object",
        properties: {
          type: {
            description:
              "Whether the window should be business days, calendar days or a range of dates",
            enum: ["businessDays", "calendarDays", "range"],
            type: "string",
          },
          value: {
            description:
              "How many business day into the future can this event be booked",
            examples: [5],
            type: "number",
          },
          rolling: {
            description:
              "\n      Determines the behavior of the booking window:\n      - If **true**, the window is rolling. This means the number of available days will always be equal the specified 'value' \n        and adjust dynamically as bookings are made. For example, if 'value' is 3 and availability is only on Mondays, \n        a booker attempting to schedule on November 10 will see slots on November 11, 18, and 25. As one of these days \n        becomes fully booked, a new day (e.g., December 2) will open up to ensure 3 available days are always visible.\n      - If **false**, the window is fixed. This means the booking window only considers the next 'value' days from the\n        moment someone is trying to book. For example, if 'value' is 3, availability is only on Mondays, and the current \n        date is November 10, the booker will only see slots on November 11 because the window is restricted to the next \n        3 calendar days (November 10\u201312).\n    ",
            examples: [true],
            type: "boolean",
          },
        },
      },
      CalendarDaysWindow_2024_06_14: {
        required: ["type", "value"],
        type: "object",
        properties: {
          type: {
            description:
              "Whether the window should be business days, calendar days or a range of dates",
            enum: ["businessDays", "calendarDays", "range"],
            type: "string",
          },
          value: {
            description:
              "How many calendar days into the future can this event be booked",
            examples: [5],
            type: "number",
          },
          rolling: {
            description:
              "\n      Determines the behavior of the booking window:\n      - If **true**, the window is rolling. This means the number of available days will always be equal the specified 'value' \n        and adjust dynamically as bookings are made. For example, if 'value' is 3 and availability is only on Mondays, \n        a booker attempting to schedule on November 10 will see slots on November 11, 18, and 25. As one of these days \n        becomes fully booked, a new day (e.g., December 2) will open up to ensure 3 available days are always visible.\n      - If **false**, the window is fixed. This means the booking window only considers the next 'value' days from the\n        moment someone is trying to book. For example, if 'value' is 3, availability is only on Mondays, and the current \n        date is November 10, the booker will only see slots on November 11 because the window is restricted to the next \n        3 calendar days (November 10\u201312).\n    ",
            examples: [true],
            type: "boolean",
          },
        },
      },
      RangeWindow_2024_06_14: {
        required: ["type", "value"],
        type: "object",
        properties: {
          type: {
            description:
              "Whether the window should be business days, calendar days or a range of dates",
            enum: ["businessDays", "calendarDays", "range"],
            type: "string",
          },
          value: {
            description: "Date range for when this event can be booked.",
            examples: [["2030-09-05", "2030-09-09"]],
            type: "array",
            items: {
              type: "string",
            },
          },
        },
      },
      BookerLayouts_2024_06_14: {
        required: ["defaultLayout", "enabledLayouts"],
        type: "object",
        properties: {
          defaultLayout: {
            enum: ["month", "week", "column"],
            type: "string",
          },
          enabledLayouts: {
            type: "array",
            items: {
              enum: ["month", "week", "column"],
              type: "string",
            },
          },
        },
      },
      BaseConfirmationPolicy_2024_06_14: {
        required: ["type", "blockUnconfirmedBookingsInBooker"],
        type: "object",
        properties: {
          type: {
            description:
              "The policy that determines when confirmation is required",
            enum: ["always", "time"],
            examples: ["always"],
            type: "string",
          },
          noticeThreshold: {
            description:
              "The notice threshold required before confirmation is needed. Required when type is 'time'.",
            allOf: [
              {
                $ref: "#/$defs/NoticeThreshold_2024_06_14",
              },
            ],
          },
          blockUnconfirmedBookingsInBooker: {
            description: "Unconfirmed bookings still block calendar slots.",
            type: "boolean",
          },
        },
      },
      NoticeThreshold_2024_06_14: {
        required: ["unit", "count"],
        type: "object",
        properties: {
          unit: {
            description:
              "The unit of time for the notice threshold (e.g., minutes, hours)",
            examples: ["minutes"],
            type: "string",
          },
          count: {
            description: "The time value for the notice threshold",
            examples: [30],
            type: "number",
          },
        },
      },
      Recurrence_2024_06_14: {
        required: ["interval", "occurrences", "frequency"],
        type: "object",
        properties: {
          interval: {
            description: "Repeats every {count} week | month | year",
            examples: [10],
            type: "number",
          },
          occurrences: {
            description: "Repeats for a maximum of {count} events",
            examples: [10],
            type: "number",
          },
          frequency: {
            enum: ["yearly", "monthly", "weekly"],
            type: "string",
          },
        },
      },
      EventTypeColor_2024_06_14: {
        required: ["lightThemeHex", "darkThemeHex"],
        type: "object",
        properties: {
          lightThemeHex: {
            description: "Color used for event types in light theme",
            examples: ["#292929"],
            type: "string",
          },
          darkThemeHex: {
            description: "Color used for event types in dark theme",
            examples: ["#fafafa"],
            type: "string",
          },
        },
      },
      Seats_2024_06_14: {
        required: [
          "seatsPerTimeSlot",
          "showAttendeeInfo",
          "showAvailabilityCount",
        ],
        type: "object",
        properties: {
          seatsPerTimeSlot: {
            description: "Number of seats available per time slot",
            examples: [4],
            type: "number",
          },
          showAttendeeInfo: {
            description: "Show attendee information to other guests",
            examples: [true],
            type: "boolean",
          },
          showAvailabilityCount: {
            description: "Display the count of available seats",
            examples: [true],
            type: "boolean",
          },
        },
      },
      DestinationCalendar_2024_06_14: {
        required: ["integration", "externalId"],
        type: "object",
        properties: {
          integration: {
            description:
              "The integration type of the destination calendar. Refer to the /api/v2/calendars endpoint to retrieve the integration type of your connected calendars.",
            type: "string",
          },
          externalId: {
            description:
              "The external ID of the destination calendar. Refer to the /api/v2/calendars endpoint to retrieve the external IDs of your connected calendars.",
            type: "string",
          },
        },
      },
      InputAddressLocation_2024_06_14: {
        required: ["type", "address", "public"],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `address`",
            examples: ["address"],
            type: "string",
          },
          address: {
            examples: ["123 Example St, City, Country"],
            type: "string",
          },
          public: {
            type: "boolean",
          },
        },
      },
      InputLinkLocation_2024_06_14: {
        required: ["type", "link", "public"],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `link`",
            examples: ["link"],
            type: "string",
          },
          link: {
            examples: ["https://customvideo.com/join/123456"],
            type: "string",
          },
          public: {
            type: "boolean",
          },
        },
      },
      InputIntegrationLocation_2024_06_14: {
        required: ["type", "integration"],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `integration`",
            examples: ["integration"],
            type: "string",
          },
          integration: {
            enum: ["cal-video", "google-meet", "office365-video", "zoom"],
            examples: ["cal-video"],
            type: "string",
          },
        },
      },
      InputPhoneLocation_2024_06_14: {
        required: ["type", "phone", "public"],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `phone`",
            examples: ["phone"],
            type: "string",
          },
          phone: {
            examples: ["+37120993151"],
            type: "string",
          },
          public: {
            type: "boolean",
          },
        },
      },
      InputAttendeeAddressLocation_2024_06_14: {
        required: ["type"],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `attendeeAddress`",
            examples: ["attendeeAddress"],
            type: "string",
          },
        },
      },
      InputAttendeePhoneLocation_2024_06_14: {
        required: ["type"],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `attendeePhone`",
            examples: ["attendeePhone"],
            type: "string",
          },
        },
      },
      InputAttendeeDefinedLocation_2024_06_14: {
        required: ["type"],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `attendeeDefined`",
            examples: ["attendeeDefined"],
            type: "string",
          },
        },
      },
    },
  },
  {
    description: "Get an event type",
    method: "get",
    name: "EventTypesController_2024_06_14_getEventTypeById",
    url: "https://api.cal.com/v2/event-types/{eventTypeId}",
    params: [
      {
        description: "Must be set to 2024-06-14",
        in: "header",
        name: "cal-api-version",
        required: true,
        explode: false,
        schema: {
          default: "2024-06-14",
          type: "string",
        },
        style: "simple",
      },
      {
        in: "path",
        name: "eventTypeId",
        required: true,
        explode: false,
        schema: {
          type: "string",
        },
        style: "simple",
      },
      {
        description:
          "value must be `Bearer <token>` where `<token>` either managed user access token or api key prefixed with cal_",
        in: "header",
        name: "Authorization",
        required: true,
        explode: false,
        schema: {
          type: "string",
        },
        style: "simple",
      },
    ],
    defs: {},
  },
  {
    description: "Delete an event type",
    method: "delete",
    name: "EventTypesController_2024_06_14_deleteEventType",
    url: "https://api.cal.com/v2/event-types/{eventTypeId}",
    params: [
      {
        description: "Must be set to 2024-06-14",
        in: "header",
        name: "cal-api-version",
        required: true,
        explode: false,
        schema: {
          default: "2024-06-14",
          type: "string",
        },
        style: "simple",
      },
      {
        in: "path",
        name: "eventTypeId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
      {
        description:
          "value must be `Bearer <token>` where `<token>` either managed user access token or api key prefixed with cal_",
        in: "header",
        name: "Authorization",
        required: true,
        explode: false,
        schema: {
          type: "string",
        },
        style: "simple",
      },
    ],
    defs: {},
  },
  {
    description: "Update an event type",
    method: "patch",
    name: "EventTypesController_2024_06_14_updateEventType",
    url: "https://api.cal.com/v2/event-types/{eventTypeId}",
    params: [
      {
        description: "Must be set to 2024-06-14",
        in: "header",
        name: "cal-api-version",
        required: true,
        explode: false,
        schema: {
          default: "2024-06-14",
          type: "string",
        },
        style: "simple",
      },
      {
        in: "path",
        name: "eventTypeId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
      {
        description:
          "value must be `Bearer <token>` where `<token>` either managed user access token or api key prefixed with cal_",
        in: "header",
        name: "Authorization",
        required: true,
        explode: false,
        schema: {
          type: "string",
        },
        style: "simple",
      },
    ],
    body: {
      $ref: "#/$defs/UpdateEventTypeInput_2024_06_14",
    },
    contentType: "application/json",
    defs: {
      UpdateEventTypeInput_2024_06_14: {
        type: "object",
        properties: {
          lengthInMinutes: {
            examples: [60],
            type: "number",
          },
          lengthInMinutesOptions: {
            description:
              "If you want that user can choose between different lengths of the event you can specify them here. Must include the provided `lengthInMinutes`.",
            examples: [[15, 30, 60]],
            type: "array",
            items: {
              type: "string",
            },
          },
          title: {
            examples: ["Learn the secrets of masterchief!"],
            type: "string",
          },
          slug: {
            examples: ["learn-the-secrets-of-masterchief"],
            type: "string",
          },
          description: {
            examples: [
              "Discover the culinary wonders of the Argentina by making the best flan ever!",
            ],
            type: "string",
          },
          bookingFields: {
            description:
              "Custom fields that can be added to the booking form when the event is booked by someone. By default booking form has name and email field.",
            type: "array",
            items: {
              anyOf: [
                {
                  $ref: "#/$defs/NameDefaultFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/EmailDefaultFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/TitleDefaultFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/NotesDefaultFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/GuestsDefaultFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/RescheduleReasonDefaultFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/PhoneFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/AddressFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/TextFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/NumberFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/TextAreaFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/SelectFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/MultiSelectFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/MultiEmailFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/CheckboxGroupFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/RadioGroupFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/BooleanFieldInput_2024_06_14",
                },
              ],
              type: "object",
            },
          },
          disableGuests: {
            description:
              "If true, person booking this event can't add guests via their emails.",
            type: "boolean",
          },
          slotInterval: {
            description:
              "Number representing length of each slot when event is booked. By default it equal length of the event type.\n      If event length is 60 minutes then we would have slots 9AM, 10AM, 11AM etc. but if it was changed to 30 minutes then\n      we would have slots 9AM, 9:30AM, 10AM, 10:30AM etc. as the available times to book the 60 minute event.",
            type: "number",
          },
          minimumBookingNotice: {
            description:
              "Minimum number of minutes before the event that a booking can be made.",
            type: "number",
          },
          beforeEventBuffer: {
            description:
              "Time spaces that can be prepended before an event to give more time before it.",
            type: "number",
          },
          afterEventBuffer: {
            description:
              "Time spaces that can be appended after an event to give more time after it.",
            type: "number",
          },
          scheduleId: {
            description:
              "If you want that this event has different schedule than user's default one you can specify it here.",
            type: "number",
          },
          bookingLimitsCount: {
            description: "Limit how many times this event can be booked",
            anyOf: [
              {
                $ref: "#/$defs/BaseBookingLimitsCount_2024_06_14",
              },
              {
                $ref: "#/$defs/Disabled_2024_06_14",
              },
            ],
            type: "object",
          },
          onlyShowFirstAvailableSlot: {
            description:
              "This will limit your availability for this event type to one slot per day, scheduled at the earliest available time.",
            type: "boolean",
          },
          bookingLimitsDuration: {
            description:
              "Limit total amount of time that this event can be booked",
            anyOf: [
              {
                $ref: "#/$defs/BaseBookingLimitsDuration_2024_06_14",
              },
              {
                $ref: "#/$defs/Disabled_2024_06_14",
              },
            ],
            type: "object",
          },
          bookingWindow: {
            description: "Limit how far in the future this event can be booked",
            anyOf: [
              {
                $ref: "#/$defs/BusinessDaysWindow_2024_06_14",
              },
              {
                $ref: "#/$defs/CalendarDaysWindow_2024_06_14",
              },
              {
                $ref: "#/$defs/RangeWindow_2024_06_14",
              },
              {
                $ref: "#/$defs/Disabled_2024_06_14",
              },
            ],
            type: "object",
          },
          offsetStart: {
            description:
              "Offset timeslots shown to bookers by a specified number of minutes",
            type: "number",
          },
          bookerLayouts: {
            description:
              "Should booker have week, month or column view. Specify default layout and enabled layouts user can pick.",
            allOf: [
              {
                $ref: "#/$defs/BookerLayouts_2024_06_14",
              },
            ],
          },
          confirmationPolicy: {
            description:
              "Specify how the booking needs to be manually confirmed before it is pushed to the integrations and a confirmation mail is sent.",
            anyOf: [
              {
                $ref: "#/$defs/BaseConfirmationPolicy_2024_06_14",
              },
              {
                $ref: "#/$defs/Disabled_2024_06_14",
              },
            ],
            type: "object",
          },
          recurrence: {
            description: "Create a recurring event type.",
            anyOf: [
              {
                $ref: "#/$defs/Recurrence_2024_06_14",
              },
              {
                $ref: "#/$defs/Disabled_2024_06_14",
              },
            ],
            type: "object",
          },
          requiresBookerEmailVerification: {
            type: "boolean",
          },
          hideCalendarNotes: {
            type: "boolean",
          },
          lockTimeZoneToggleOnBookingPage: {
            type: "boolean",
          },
          color: {
            $ref: "#/$defs/EventTypeColor_2024_06_14",
          },
          seats: {
            description: "Create an event type with multiple seats.",
            anyOf: [
              {
                $ref: "#/$defs/Seats_2024_06_14",
              },
              {
                $ref: "#/$defs/Disabled_2024_06_14",
              },
            ],
            type: "object",
          },
          customName: {
            description:
              "Customizable event name with valid variables:\n      {Event type title}, {Organiser}, {Scheduler}, {Location}, {Organiser first name},\n      {Scheduler first name}, {Scheduler last name}, {Event duration}, {LOCATION},\n      {HOST/ATTENDEE}, {HOST}, {ATTENDEE}, {USER}",
            examples: [
              "{Event type title} between {Organiser} and {Scheduler}",
            ],
            type: "string",
          },
          destinationCalendar: {
            $ref: "#/$defs/DestinationCalendar_2024_06_14",
          },
          useDestinationCalendarEmail: {
            type: "boolean",
          },
          hideCalendarEventDetails: {
            type: "boolean",
          },
          successRedirectUrl: {
            description:
              "A valid URL where the booker will redirect to, once the booking is completed successfully",
            examples: ["https://masterchief.com/argentina/flan/video/9129412"],
            type: "string",
          },
          locations: {
            description:
              "Locations where the event will take place. If not provided, cal video link will be used as the location.",
            type: "array",
            items: {
              anyOf: [
                {
                  $ref: "#/$defs/InputAddressLocation_2024_06_14",
                },
                {
                  $ref: "#/$defs/InputLinkLocation_2024_06_14",
                },
                {
                  $ref: "#/$defs/InputIntegrationLocation_2024_06_14",
                },
                {
                  $ref: "#/$defs/InputPhoneLocation_2024_06_14",
                },
                {
                  $ref: "#/$defs/InputAttendeeAddressLocation_2024_06_14",
                },
                {
                  $ref: "#/$defs/InputAttendeePhoneLocation_2024_06_14",
                },
                {
                  $ref: "#/$defs/InputAttendeeDefinedLocation_2024_06_14",
                },
              ],
              type: "object",
            },
          },
        },
      },
      NameDefaultFieldInput_2024_06_14: {
        required: ["type", "label", "placeholder"],
        type: "object",
        properties: {
          type: {
            description:
              "only allowed value for type is `name`. Used for having 1 booking field for both first name and last name.",
            examples: ["name"],
            type: "string",
          },
          label: {
            type: "string",
          },
          placeholder: {
            type: "string",
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if URL contains query parameter `&name=bob`,      the name field will be prefilled with this value and disabled.",
            type: "boolean",
          },
        },
      },
      EmailDefaultFieldInput_2024_06_14: {
        required: ["type", "label", "required", "placeholder"],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `email`",
            examples: ["email"],
            type: "string",
          },
          label: {
            type: "string",
          },
          required: {
            type: "object",
          },
          placeholder: {
            type: "string",
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if URL contains query parameter `&email=bob@gmail.com`,      the email field will be prefilled with this value and disabled.",
            type: "boolean",
          },
        },
      },
      TitleDefaultFieldInput_2024_06_14: {
        required: ["slug"],
        type: "object",
        properties: {
          slug: {
            description: "only allowed value for type is `title`",
            examples: ["title"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
          label: {
            type: "string",
          },
          placeholder: {
            type: "string",
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if URL contains query parameter `&title=journey`,      the title field will be prefilled with this value and disabled.",
            type: "boolean",
          },
        },
      },
      NotesDefaultFieldInput_2024_06_14: {
        required: ["slug"],
        type: "object",
        properties: {
          slug: {
            description: "only allowed value for type is `notes`",
            examples: ["notes"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
          label: {
            type: "string",
          },
          placeholder: {
            type: "string",
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if URL contains query parameter `&notes=journey`,      the notes field will be prefilled with this value and disabled.",
            type: "boolean",
          },
        },
      },
      GuestsDefaultFieldInput_2024_06_14: {
        required: ["slug"],
        type: "object",
        properties: {
          slug: {
            description: "only allowed value for type is `guests`",
            examples: ["guests"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
          label: {
            type: "string",
          },
          placeholder: {
            type: "string",
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if URL contains query parameter `&guests=bob@cal.com`,      the guests field will be prefilled with this value and disabled.",
            type: "boolean",
          },
        },
      },
      RescheduleReasonDefaultFieldInput_2024_06_14: {
        required: ["slug"],
        type: "object",
        properties: {
          slug: {
            description: "only allowed value for type is `rescheduleReason`",
            examples: ["rescheduleReason"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
          label: {
            type: "string",
          },
          placeholder: {
            type: "string",
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if URL contains query parameter `&rescheduleReason=travel`,      the rescheduleReason field will be prefilled with this value and disabled.",
            type: "boolean",
          },
        },
      },
      PhoneFieldInput_2024_06_14: {
        required: [
          "type",
          "slug",
          "label",
          "required",
          "placeholder",
          "hidden",
        ],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `phone`",
            examples: ["phone"],
            type: "string",
          },
          slug: {
            description:
              "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            examples: ["some-slug"],
            type: "string",
          },
          label: {
            type: "string",
          },
          required: {
            type: "boolean",
          },
          placeholder: {
            type: "string",
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `phone` and the URL contains query parameter `&phone=1234567890`,      the phone field will be prefilled with this value and disabled.",
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
        },
      },
      AddressFieldInput_2024_06_14: {
        required: [
          "type",
          "slug",
          "label",
          "required",
          "placeholder",
          "hidden",
        ],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `address`",
            examples: ["address"],
            type: "string",
          },
          slug: {
            description:
              "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            examples: ["some-slug"],
            type: "string",
          },
          label: {
            examples: ["Please enter your address"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          placeholder: {
            examples: ["e.g., 1234 Main St"],
            type: "string",
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `address` and the URL contains query parameter `&address=1234 Main St, London`,      the address field will be prefilled with this value and disabled.",
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
        },
      },
      TextFieldInput_2024_06_14: {
        required: [
          "type",
          "slug",
          "label",
          "required",
          "placeholder",
          "hidden",
        ],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `text`",
            examples: ["text"],
            type: "string",
          },
          slug: {
            description:
              "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            examples: ["some-slug"],
            type: "string",
          },
          label: {
            examples: ["Please enter your text"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          placeholder: {
            examples: ["e.g., Enter text here"],
            type: "string",
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `who-referred-you` and the URL contains query parameter `&who-referred-you=bob`,      the text field will be prefilled with this value and disabled.",
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
        },
      },
      NumberFieldInput_2024_06_14: {
        required: [
          "type",
          "slug",
          "label",
          "required",
          "placeholder",
          "hidden",
        ],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `number`",
            examples: ["number"],
            type: "string",
          },
          slug: {
            description:
              "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            examples: ["some-slug"],
            type: "string",
          },
          label: {
            examples: ["Please enter a number"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          placeholder: {
            examples: ["e.g., 100"],
            type: "string",
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `calories-per-day` and the URL contains query parameter `&calories-per-day=3000`,      the number field will be prefilled with this value and disabled.",
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
        },
      },
      TextAreaFieldInput_2024_06_14: {
        required: [
          "type",
          "slug",
          "label",
          "required",
          "placeholder",
          "hidden",
        ],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `textarea`",
            examples: ["textarea"],
            type: "string",
          },
          slug: {
            description:
              "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            examples: ["some-slug"],
            type: "string",
          },
          label: {
            examples: ["Please enter detailed information"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          placeholder: {
            examples: ["e.g., Detailed description here..."],
            type: "string",
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `dear-diary` and the URL contains query parameter `&dear-diary=Today I shipped a feature`,      the text area will be prefilled with this value and disabled.",
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
        },
      },
      SelectFieldInput_2024_06_14: {
        required: [
          "type",
          "slug",
          "label",
          "required",
          "placeholder",
          "options",
          "hidden",
        ],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `select`",
            examples: ["select"],
            type: "string",
          },
          slug: {
            description:
              "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            examples: ["some-slug"],
            type: "string",
          },
          label: {
            examples: ["Please select an option"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          placeholder: {
            examples: ["Select..."],
            type: "string",
          },
          options: {
            examples: [["Option 1", "Option 2"]],
            type: "array",
            items: {
              type: "string",
            },
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `language` and options of this select field are ['english', 'italian'] and the URL contains query parameter `&language=italian`,      the 'italian' will be selected and the select field will be disabled.",
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
        },
      },
      MultiSelectFieldInput_2024_06_14: {
        required: ["type", "slug", "label", "required", "options", "hidden"],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `multiselect`",
            examples: ["multiselect"],
            type: "string",
          },
          slug: {
            description:
              "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            examples: ["some-slug"],
            type: "string",
          },
          label: {
            examples: ["Please select multiple options"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          options: {
            examples: [["Option 1", "Option 2"]],
            type: "array",
            items: {
              type: "string",
            },
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `consultants` and the URL contains query parameter `&consultants=en&language=it`,      the 'en' and 'it' will be selected and the select field will be disabled.",
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
        },
      },
      MultiEmailFieldInput_2024_06_14: {
        required: [
          "type",
          "slug",
          "label",
          "required",
          "placeholder",
          "hidden",
        ],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `multiemail`",
            examples: ["multiemail"],
            type: "string",
          },
          slug: {
            description:
              "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            examples: ["some-slug"],
            type: "string",
          },
          label: {
            examples: ["Please enter multiple emails"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          placeholder: {
            examples: ["e.g., example@example.com"],
            type: "string",
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `consultants` and the URL contains query parameter `&consultants=alice@gmail.com&consultants=bob@gmail.com`,      the these emails will be added and none more can be added.",
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
        },
      },
      CheckboxGroupFieldInput_2024_06_14: {
        required: ["type", "slug", "label", "required", "options", "hidden"],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `checkbox`",
            examples: ["checkbox"],
            type: "string",
          },
          slug: {
            description:
              "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            examples: ["some-slug"],
            type: "string",
          },
          label: {
            examples: ["Select all that apply"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          options: {
            examples: [["Checkbox 1", "Checkbox 2"]],
            type: "array",
            items: {
              type: "string",
            },
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `notify-me` and the URL contains query parameter `&notify-me=true`,      the checkbox will be selected and the checkbox field will be disabled.",
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
        },
      },
      RadioGroupFieldInput_2024_06_14: {
        required: ["type", "slug", "label", "required", "options", "hidden"],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `radio`",
            examples: ["radio"],
            type: "string",
          },
          slug: {
            description:
              "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            examples: ["some-slug"],
            type: "string",
          },
          label: {
            examples: ["Select one option"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          options: {
            examples: [["Radio 1", "Radio 2"]],
            type: "array",
            items: {
              type: "string",
            },
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `language` and options of this select field are ['english', 'italian'] and the URL contains query parameter `&language=italian`,      the 'italian' radio button will be selected and the select field will be disabled.",
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
        },
      },
      BooleanFieldInput_2024_06_14: {
        required: ["type", "slug", "label", "required", "hidden"],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `boolean`",
            examples: ["boolean"],
            type: "string",
          },
          slug: {
            description:
              "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            examples: ["some-slug"],
            type: "string",
          },
          label: {
            examples: ["Agree to terms?"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          disableOnPrefill: {
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
        },
      },
      BaseBookingLimitsCount_2024_06_14: {
        type: "object",
        properties: {
          day: {
            description: "The number of bookings per day",
            examples: [1],
            type: "number",
          },
          week: {
            description: "The number of bookings per week",
            examples: [2],
            type: "number",
          },
          month: {
            description: "The number of bookings per month",
            examples: [3],
            type: "number",
          },
          year: {
            description: "The number of bookings per year",
            examples: [4],
            type: "number",
          },
          disabled: {
            default: false,
            type: "boolean",
          },
        },
      },
      Disabled_2024_06_14: {
        required: ["disabled"],
        type: "object",
        properties: {
          disabled: {
            default: false,
            description: "Indicates if the option is disabled",
            examples: [true],
            type: "boolean",
          },
        },
      },
      BaseBookingLimitsDuration_2024_06_14: {
        type: "object",
        properties: {
          day: {
            description:
              "The duration of bookings per day (must be a multiple of 15)",
            examples: [60],
            type: "number",
          },
          week: {
            description:
              "The duration of bookings per week (must be a multiple of 15)",
            examples: [120],
            type: "number",
          },
          month: {
            description:
              "The duration of bookings per month (must be a multiple of 15)",
            examples: [180],
            type: "number",
          },
          year: {
            description:
              "The duration of bookings per year (must be a multiple of 15)",
            examples: [240],
            type: "number",
          },
        },
      },
      BusinessDaysWindow_2024_06_14: {
        required: ["type", "value"],
        type: "object",
        properties: {
          type: {
            description:
              "Whether the window should be business days, calendar days or a range of dates",
            enum: ["businessDays", "calendarDays", "range"],
            type: "string",
          },
          value: {
            description:
              "How many business day into the future can this event be booked",
            examples: [5],
            type: "number",
          },
          rolling: {
            description:
              "\n      Determines the behavior of the booking window:\n      - If **true**, the window is rolling. This means the number of available days will always be equal the specified 'value' \n        and adjust dynamically as bookings are made. For example, if 'value' is 3 and availability is only on Mondays, \n        a booker attempting to schedule on November 10 will see slots on November 11, 18, and 25. As one of these days \n        becomes fully booked, a new day (e.g., December 2) will open up to ensure 3 available days are always visible.\n      - If **false**, the window is fixed. This means the booking window only considers the next 'value' days from the\n        moment someone is trying to book. For example, if 'value' is 3, availability is only on Mondays, and the current \n        date is November 10, the booker will only see slots on November 11 because the window is restricted to the next \n        3 calendar days (November 10\u201312).\n    ",
            examples: [true],
            type: "boolean",
          },
        },
      },
      CalendarDaysWindow_2024_06_14: {
        required: ["type", "value"],
        type: "object",
        properties: {
          type: {
            description:
              "Whether the window should be business days, calendar days or a range of dates",
            enum: ["businessDays", "calendarDays", "range"],
            type: "string",
          },
          value: {
            description:
              "How many calendar days into the future can this event be booked",
            examples: [5],
            type: "number",
          },
          rolling: {
            description:
              "\n      Determines the behavior of the booking window:\n      - If **true**, the window is rolling. This means the number of available days will always be equal the specified 'value' \n        and adjust dynamically as bookings are made. For example, if 'value' is 3 and availability is only on Mondays, \n        a booker attempting to schedule on November 10 will see slots on November 11, 18, and 25. As one of these days \n        becomes fully booked, a new day (e.g., December 2) will open up to ensure 3 available days are always visible.\n      - If **false**, the window is fixed. This means the booking window only considers the next 'value' days from the\n        moment someone is trying to book. For example, if 'value' is 3, availability is only on Mondays, and the current \n        date is November 10, the booker will only see slots on November 11 because the window is restricted to the next \n        3 calendar days (November 10\u201312).\n    ",
            examples: [true],
            type: "boolean",
          },
        },
      },
      RangeWindow_2024_06_14: {
        required: ["type", "value"],
        type: "object",
        properties: {
          type: {
            description:
              "Whether the window should be business days, calendar days or a range of dates",
            enum: ["businessDays", "calendarDays", "range"],
            type: "string",
          },
          value: {
            description: "Date range for when this event can be booked.",
            examples: [["2030-09-05", "2030-09-09"]],
            type: "array",
            items: {
              type: "string",
            },
          },
        },
      },
      BookerLayouts_2024_06_14: {
        required: ["defaultLayout", "enabledLayouts"],
        type: "object",
        properties: {
          defaultLayout: {
            enum: ["month", "week", "column"],
            type: "string",
          },
          enabledLayouts: {
            type: "array",
            items: {
              enum: ["month", "week", "column"],
              type: "string",
            },
          },
        },
      },
      BaseConfirmationPolicy_2024_06_14: {
        required: ["type", "blockUnconfirmedBookingsInBooker"],
        type: "object",
        properties: {
          type: {
            description:
              "The policy that determines when confirmation is required",
            enum: ["always", "time"],
            examples: ["always"],
            type: "string",
          },
          noticeThreshold: {
            description:
              "The notice threshold required before confirmation is needed. Required when type is 'time'.",
            allOf: [
              {
                $ref: "#/$defs/NoticeThreshold_2024_06_14",
              },
            ],
          },
          blockUnconfirmedBookingsInBooker: {
            description: "Unconfirmed bookings still block calendar slots.",
            type: "boolean",
          },
        },
      },
      NoticeThreshold_2024_06_14: {
        required: ["unit", "count"],
        type: "object",
        properties: {
          unit: {
            description:
              "The unit of time for the notice threshold (e.g., minutes, hours)",
            examples: ["minutes"],
            type: "string",
          },
          count: {
            description: "The time value for the notice threshold",
            examples: [30],
            type: "number",
          },
        },
      },
      Recurrence_2024_06_14: {
        required: ["interval", "occurrences", "frequency"],
        type: "object",
        properties: {
          interval: {
            description: "Repeats every {count} week | month | year",
            examples: [10],
            type: "number",
          },
          occurrences: {
            description: "Repeats for a maximum of {count} events",
            examples: [10],
            type: "number",
          },
          frequency: {
            enum: ["yearly", "monthly", "weekly"],
            type: "string",
          },
        },
      },
      EventTypeColor_2024_06_14: {
        required: ["lightThemeHex", "darkThemeHex"],
        type: "object",
        properties: {
          lightThemeHex: {
            description: "Color used for event types in light theme",
            examples: ["#292929"],
            type: "string",
          },
          darkThemeHex: {
            description: "Color used for event types in dark theme",
            examples: ["#fafafa"],
            type: "string",
          },
        },
      },
      Seats_2024_06_14: {
        required: [
          "seatsPerTimeSlot",
          "showAttendeeInfo",
          "showAvailabilityCount",
        ],
        type: "object",
        properties: {
          seatsPerTimeSlot: {
            description: "Number of seats available per time slot",
            examples: [4],
            type: "number",
          },
          showAttendeeInfo: {
            description: "Show attendee information to other guests",
            examples: [true],
            type: "boolean",
          },
          showAvailabilityCount: {
            description: "Display the count of available seats",
            examples: [true],
            type: "boolean",
          },
        },
      },
      DestinationCalendar_2024_06_14: {
        required: ["integration", "externalId"],
        type: "object",
        properties: {
          integration: {
            description:
              "The integration type of the destination calendar. Refer to the /api/v2/calendars endpoint to retrieve the integration type of your connected calendars.",
            type: "string",
          },
          externalId: {
            description:
              "The external ID of the destination calendar. Refer to the /api/v2/calendars endpoint to retrieve the external IDs of your connected calendars.",
            type: "string",
          },
        },
      },
      InputAddressLocation_2024_06_14: {
        required: ["type", "address", "public"],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `address`",
            examples: ["address"],
            type: "string",
          },
          address: {
            examples: ["123 Example St, City, Country"],
            type: "string",
          },
          public: {
            type: "boolean",
          },
        },
      },
      InputLinkLocation_2024_06_14: {
        required: ["type", "link", "public"],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `link`",
            examples: ["link"],
            type: "string",
          },
          link: {
            examples: ["https://customvideo.com/join/123456"],
            type: "string",
          },
          public: {
            type: "boolean",
          },
        },
      },
      InputIntegrationLocation_2024_06_14: {
        required: ["type", "integration"],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `integration`",
            examples: ["integration"],
            type: "string",
          },
          integration: {
            enum: ["cal-video", "google-meet", "office365-video", "zoom"],
            examples: ["cal-video"],
            type: "string",
          },
        },
      },
      InputPhoneLocation_2024_06_14: {
        required: ["type", "phone", "public"],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `phone`",
            examples: ["phone"],
            type: "string",
          },
          phone: {
            examples: ["+37120993151"],
            type: "string",
          },
          public: {
            type: "boolean",
          },
        },
      },
      InputAttendeeAddressLocation_2024_06_14: {
        required: ["type"],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `attendeeAddress`",
            examples: ["attendeeAddress"],
            type: "string",
          },
        },
      },
      InputAttendeePhoneLocation_2024_06_14: {
        required: ["type"],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `attendeePhone`",
            examples: ["attendeePhone"],
            type: "string",
          },
        },
      },
      InputAttendeeDefinedLocation_2024_06_14: {
        required: ["type"],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `attendeeDefined`",
            examples: ["attendeeDefined"],
            type: "string",
          },
        },
      },
    },
  },
  {
    description: "Get all webhooks",
    method: "get",
    name: "EventTypeWebhooksController_getEventTypeWebhooks",
    url: "https://api.cal.com/v2/event-types/{eventTypeId}/webhooks",
    params: [
      {
        in: "path",
        name: "eventTypeId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
      {
        description: "The number of items to return",
        in: "query",
        name: "take",
        required: false,
        example: 10,
        explode: true,
        schema: {
          type: "number",
        },
        style: "form",
      },
      {
        description: "The number of items to skip",
        in: "query",
        name: "skip",
        required: false,
        example: 0,
        explode: true,
        schema: {
          type: "number",
        },
        style: "form",
      },
    ],
    defs: {},
  },
  {
    description: "Create a webhook",
    method: "post",
    name: "EventTypeWebhooksController_createEventTypeWebhook",
    url: "https://api.cal.com/v2/event-types/{eventTypeId}/webhooks",
    params: [
      {
        in: "path",
        name: "eventTypeId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
    ],
    body: {
      $ref: "#/$defs/CreateWebhookInputDto",
    },
    contentType: "application/json",
    defs: {
      CreateWebhookInputDto: {
        required: ["active", "subscriberUrl", "triggers"],
        type: "object",
        properties: {
          payloadTemplate: {
            description:
              "The template of the payload that will be sent to the subscriberUrl, check cal.com/docs/core-features/webhooks for more information",
            examples: [
              '{"content":"A new event has been scheduled","type":"{{type}}","name":"{{title}}","organizer":"{{organizer.name}}","booker":"{{attendees.0.name}}"}',
            ],
            type: "string",
          },
          active: {
            type: "boolean",
          },
          subscriberUrl: {
            type: "string",
          },
          triggers: {
            enum: [
              "BOOKING_CREATED",
              "BOOKING_PAYMENT_INITIATED",
              "BOOKING_PAID",
              "BOOKING_RESCHEDULED",
              "BOOKING_REQUESTED",
              "BOOKING_CANCELLED",
              "BOOKING_REJECTED",
              "BOOKING_NO_SHOW_UPDATED",
              "FORM_SUBMITTED",
              "MEETING_ENDED",
              "MEETING_STARTED",
              "RECORDING_READY",
              "INSTANT_MEETING",
              "RECORDING_TRANSCRIPTION_GENERATED",
              "OOO_CREATED",
              "AFTER_HOSTS_CAL_VIDEO_NO_SHOW",
              "AFTER_GUESTS_CAL_VIDEO_NO_SHOW",
              "FORM_SUBMITTED_NO_EVENT",
            ],
            examples: [
              [
                "BOOKING_CREATED",
                "BOOKING_RESCHEDULED",
                "BOOKING_CANCELLED",
                "BOOKING_CONFIRMED",
                "BOOKING_REJECTED",
                "BOOKING_COMPLETED",
                "BOOKING_NO_SHOW",
                "BOOKING_REOPENED",
              ],
            ],
            type: "string",
          },
          secret: {
            type: "string",
          },
        },
      },
    },
  },
  {
    description: "Delete all webhooks",
    method: "delete",
    name: "EventTypeWebhooksController_deleteAllEventTypeWebhooks",
    url: "https://api.cal.com/v2/event-types/{eventTypeId}/webhooks",
    params: [
      {
        in: "path",
        name: "eventTypeId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
    ],
    defs: {},
  },
  {
    description: "Get a webhook",
    method: "get",
    name: "EventTypeWebhooksController_getEventTypeWebhook",
    url: "https://api.cal.com/v2/event-types/{eventTypeId}/webhooks/{webhookId}",
    defs: {},
  },
  {
    description: "Delete a webhook",
    method: "delete",
    name: "EventTypeWebhooksController_deleteEventTypeWebhook",
    url: "https://api.cal.com/v2/event-types/{eventTypeId}/webhooks/{webhookId}",
    defs: {},
  },
  {
    description: "Update a webhook",
    method: "patch",
    name: "EventTypeWebhooksController_updateEventTypeWebhook",
    url: "https://api.cal.com/v2/event-types/{eventTypeId}/webhooks/{webhookId}",
    params: [
      {
        in: "path",
        name: "webhookId",
        required: true,
        explode: false,
        schema: {
          type: "string",
        },
        style: "simple",
      },
    ],
    body: {
      $ref: "#/$defs/UpdateWebhookInputDto",
    },
    contentType: "application/json",
    defs: {
      UpdateWebhookInputDto: {
        type: "object",
        properties: {
          payloadTemplate: {
            description:
              "The template of the payload that will be sent to the subscriberUrl, check cal.com/docs/core-features/webhooks for more information",
            examples: [
              '{"content":"A new event has been scheduled","type":"{{type}}","name":"{{title}}","organizer":"{{organizer.name}}","booker":"{{attendees.0.name}}"}',
            ],
            type: "string",
          },
          active: {
            type: "boolean",
          },
          subscriberUrl: {
            type: "string",
          },
          triggers: {
            enum: [
              "BOOKING_CREATED",
              "BOOKING_PAYMENT_INITIATED",
              "BOOKING_PAID",
              "BOOKING_RESCHEDULED",
              "BOOKING_REQUESTED",
              "BOOKING_CANCELLED",
              "BOOKING_REJECTED",
              "BOOKING_NO_SHOW_UPDATED",
              "FORM_SUBMITTED",
              "MEETING_ENDED",
              "MEETING_STARTED",
              "RECORDING_READY",
              "INSTANT_MEETING",
              "RECORDING_TRANSCRIPTION_GENERATED",
              "OOO_CREATED",
              "AFTER_HOSTS_CAL_VIDEO_NO_SHOW",
              "AFTER_GUESTS_CAL_VIDEO_NO_SHOW",
              "FORM_SUBMITTED_NO_EVENT",
            ],
            examples: [
              [
                "BOOKING_CREATED",
                "BOOKING_RESCHEDULED",
                "BOOKING_CANCELLED",
                "BOOKING_CONFIRMED",
                "BOOKING_REJECTED",
                "BOOKING_COMPLETED",
                "BOOKING_NO_SHOW",
                "BOOKING_REOPENED",
              ],
            ],
            type: "string",
          },
          secret: {
            type: "string",
          },
        },
      },
    },
  },
  {
    description: "Get my profile",
    method: "get",
    name: "MeController_getMe",
    url: "https://api.cal.com/v2/me",
    defs: {},
  },
  {
    description: "Update my profile",
    method: "patch",
    name: "MeController_updateMe",
    url: "https://api.cal.com/v2/me",
    body: {
      $ref: "#/$defs/UpdateManagedUserInput",
    },
    contentType: "application/json",
    defs: {
      UpdateManagedUserInput: {
        type: "object",
        properties: {
          email: {
            type: "string",
          },
          name: {
            type: "string",
          },
          timeFormat: {
            description: "Must be 12 or 24",
            enum: [12, 24],
            examples: [12],
            type: "number",
          },
          defaultScheduleId: {
            type: "number",
          },
          weekStart: {
            enum: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            examples: ["Monday"],
            type: "string",
          },
          timeZone: {
            type: "string",
          },
          locale: {
            enum: [
              "ar",
              "ca",
              "de",
              "es",
              "eu",
              "he",
              "id",
              "ja",
              "lv",
              "pl",
              "ro",
              "sr",
              "th",
              "vi",
              "az",
              "cs",
              "el",
              "es-419",
              "fi",
              "hr",
              "it",
              "km",
              "nl",
              "pt",
              "ru",
              "sv",
              "tr",
              "zh-CN",
              "bg",
              "da",
              "en",
              "et",
              "fr",
              "hu",
              "iw",
              "ko",
              "no",
              "pt-BR",
              "sk",
              "ta",
              "uk",
              "zh-TW",
            ],
            examples: ["en"],
            type: "string",
          },
          avatarUrl: {
            description: "URL of the user's avatar image",
            examples: [
              "https://cal.com/api/avatar/2b735186-b01b-46d3-87da-019b8f61776b.png",
            ],
            type: "string",
          },
        },
      },
    },
  },
  {
    description:
      "\u26a0\ufe0f First, this endpoint requires `Cookie: next-auth.session-token=eyJhbGciOiJ` header. Log into Cal web app using owner of organization that was created after visiting `/settings/organizations/new`, refresh swagger docs, and the cookie will be added to requests automatically to pass the NextAuthGuard.\nSecond, make sure that the logged in user has organizationId set to pass the OrganizationRolesGuard guard.",
    method: "get",
    name: "OAuthClientsController_getOAuthClients",
    url: "https://api.cal.com/v2/oauth-clients",
    defs: {},
  },
  {
    description:
      "\u26a0\ufe0f First, this endpoint requires `Cookie: next-auth.session-token=eyJhbGciOiJ` header. Log into Cal web app using owner of organization that was created after visiting `/settings/organizations/new`, refresh swagger docs, and the cookie will be added to requests automatically to pass the NextAuthGuard.\nSecond, make sure that the logged in user has organizationId set to pass the OrganizationRolesGuard guard.",
    method: "post",
    name: "OAuthClientsController_createOAuthClient",
    url: "https://api.cal.com/v2/oauth-clients",
    body: {
      $ref: "#/$defs/CreateOAuthClientInput",
    },
    contentType: "application/json",
    defs: {
      CreateOAuthClientInput: {
        required: ["name", "redirectUris", "permissions"],
        type: "object",
        properties: {
          logo: {
            type: "string",
          },
          name: {
            type: "string",
          },
          redirectUris: {
            type: "array",
            items: {
              type: "string",
            },
          },
          permissions: {
            description:
              'Array of permission keys like ["BOOKING_READ", "BOOKING_WRITE"]. Use ["*"] to grant all permissions.',
            type: "array",
            items: {
              enum: [
                "EVENT_TYPE_READ",
                "EVENT_TYPE_WRITE",
                "BOOKING_READ",
                "BOOKING_WRITE",
                "SCHEDULE_READ",
                "SCHEDULE_WRITE",
                "APPS_READ",
                "APPS_WRITE",
                "PROFILE_READ",
                "PROFILE_WRITE",
                "*",
              ],
              type: "string",
            },
          },
          bookingRedirectUri: {
            type: "string",
          },
          bookingCancelRedirectUri: {
            type: "string",
          },
          bookingRescheduleRedirectUri: {
            type: "string",
          },
          areEmailsEnabled: {
            type: "boolean",
          },
          areDefaultEventTypesEnabled: {
            default: false,
            description:
              "If true, when creating a managed user the managed user will have 4 default event types: 30 and 60 minutes without Cal video, 30 and 60 minutes with Cal video. Set this as false if you want to create a managed user and then manually create event types for the user.",
            type: "boolean",
          },
        },
      },
    },
  },
  {
    description:
      "\u26a0\ufe0f First, this endpoint requires `Cookie: next-auth.session-token=eyJhbGciOiJ` header. Log into Cal web app using owner of organization that was created after visiting `/settings/organizations/new`, refresh swagger docs, and the cookie will be added to requests automatically to pass the NextAuthGuard.\nSecond, make sure that the logged in user has organizationId set to pass the OrganizationRolesGuard guard.",
    method: "get",
    name: "OAuthClientsController_getOAuthClientById",
    url: "https://api.cal.com/v2/oauth-clients/{clientId}",
    params: [
      {
        in: "path",
        name: "clientId",
        required: true,
        explode: false,
        schema: {
          type: "string",
        },
        style: "simple",
      },
    ],
    defs: {},
  },
  {
    description:
      "\u26a0\ufe0f First, this endpoint requires `Cookie: next-auth.session-token=eyJhbGciOiJ` header. Log into Cal web app using owner of organization that was created after visiting `/settings/organizations/new`, refresh swagger docs, and the cookie will be added to requests automatically to pass the NextAuthGuard.\nSecond, make sure that the logged in user has organizationId set to pass the OrganizationRolesGuard guard.",
    method: "delete",
    name: "OAuthClientsController_deleteOAuthClient",
    url: "https://api.cal.com/v2/oauth-clients/{clientId}",
    params: [
      {
        in: "path",
        name: "clientId",
        required: true,
        explode: false,
        schema: {
          type: "string",
        },
        style: "simple",
      },
    ],
    defs: {},
  },
  {
    description:
      "\u26a0\ufe0f First, this endpoint requires `Cookie: next-auth.session-token=eyJhbGciOiJ` header. Log into Cal web app using owner of organization that was created after visiting `/settings/organizations/new`, refresh swagger docs, and the cookie will be added to requests automatically to pass the NextAuthGuard.\nSecond, make sure that the logged in user has organizationId set to pass the OrganizationRolesGuard guard.",
    method: "patch",
    name: "OAuthClientsController_updateOAuthClient",
    url: "https://api.cal.com/v2/oauth-clients/{clientId}",
    params: [
      {
        in: "path",
        name: "clientId",
        required: true,
        explode: false,
        schema: {
          type: "string",
        },
        style: "simple",
      },
    ],
    body: {
      $ref: "#/$defs/UpdateOAuthClientInput",
    },
    contentType: "application/json",
    defs: {
      UpdateOAuthClientInput: {
        type: "object",
        properties: {
          logo: {
            type: "string",
          },
          name: {
            type: "string",
          },
          redirectUris: {
            type: "array",
            items: {
              type: "string",
            },
          },
          bookingRedirectUri: {
            type: "string",
          },
          bookingCancelRedirectUri: {
            type: "string",
          },
          bookingRescheduleRedirectUri: {
            type: "string",
          },
          areEmailsEnabled: {
            type: "boolean",
          },
          areDefaultEventTypesEnabled: {
            description:
              "If true, when creating a managed user the managed user will have 4 default event types: 30 and 60 minutes without Cal video, 30 and 60 minutes with Cal video. Set this as false if you want to create a managed user and then manually create event types for the user.",
            type: "boolean",
          },
        },
      },
    },
  },
  {
    description:
      "\u26a0\ufe0f First, this endpoint requires `Cookie: next-auth.session-token=eyJhbGciOiJ` header. Log into Cal web app using owner of organization that was created after visiting `/settings/organizations/new`, refresh swagger docs, and the cookie will be added to requests automatically to pass the NextAuthGuard.\nSecond, make sure that the logged in user has organizationId set to pass the OrganizationRolesGuard guard.",
    method: "get",
    name: "OAuthClientsController_getOAuthClientManagedUsersById",
    url: "https://api.cal.com/v2/oauth-clients/{clientId}/managed-users",
    params: [
      {
        in: "path",
        name: "clientId",
        required: true,
        explode: false,
        schema: {
          type: "string",
        },
        style: "simple",
      },
      {
        description: "The number of items to return",
        in: "query",
        name: "limit",
        required: false,
        example: 10,
        explode: true,
        schema: {
          type: "number",
        },
        style: "form",
      },
      {
        description: "The number of items to skip",
        in: "query",
        name: "offset",
        required: false,
        example: 0,
        explode: true,
        schema: {
          type: "number",
        },
        style: "form",
      },
    ],
    defs: {},
  },
  {
    description: "Get all schedules of the authenticated user.",
    method: "get",
    name: "SchedulesController_2024_06_11_getSchedules",
    url: "https://api.cal.com/v2/schedules",
    params: [
      {
        description:
          "value must be `Bearer <token>` where `<token>` either managed user access token or api key prefixed with cal_",
        in: "header",
        name: "Authorization",
        required: true,
        explode: false,
        schema: {
          type: "string",
        },
        style: "simple",
      },
      {
        description: "Must be set to 2024-06-11",
        in: "header",
        name: "cal-api-version",
        required: true,
        explode: false,
        schema: {
          default: "2024-06-11",
          type: "string",
        },
        style: "simple",
      },
    ],
    defs: {},
  },
  {
    description:
      '\n      Create a schedule for the authenticated user.\n\n      The point of creating schedules is for event types to be available at specific times.\n\n      The first goal of schedules is to have a default schedule. If you are platform customer and created managed users, then it is important to note that each managed user should have a default schedule.\n      1. If you passed `timeZone` when creating managed user, then the default schedule from Monday to Friday from 9AM to 5PM will be created with that timezone. The managed user can then change the default schedule via the `AvailabilitySettings` atom.\n      2. If you did not, then we assume you want the user to have this specific schedule right away. You should create a default schedule by specifying\n      `"isDefault": true` in the request body. Until the user has a default schedule the user can\'t be booked nor manage their schedule via the AvailabilitySettings atom.\n\n      The second goal of schedules is to create another schedule that event types can point to. This is useful for when an event is booked because availability is not checked against the default schedule but instead against that specific schedule.\n      After creating a non-default schedule, you can update an event type to point to that schedule via the PATCH `event-types/{eventTypeId}` endpoint.\n\n      When specifying start time and end time for each day use the 24 hour format e.g. 08:00, 15:00 etc.\n      ',
    method: "post",
    name: "SchedulesController_2024_06_11_createSchedule",
    url: "https://api.cal.com/v2/schedules",
    params: [
      {
        description:
          "value must be `Bearer <token>` where `<token>` either managed user access token or api key prefixed with cal_",
        in: "header",
        name: "Authorization",
        required: true,
        explode: false,
        schema: {
          type: "string",
        },
        style: "simple",
      },
      {
        description: "Must be set to 2024-06-11",
        in: "header",
        name: "cal-api-version",
        required: true,
        explode: false,
        schema: {
          default: "2024-06-11",
          type: "string",
        },
        style: "simple",
      },
    ],
    body: {
      $ref: "#/$defs/CreateScheduleInput_2024_06_11",
    },
    contentType: "application/json",
    defs: {
      CreateScheduleInput_2024_06_11: {
        required: ["name", "timeZone", "isDefault"],
        type: "object",
        properties: {
          name: {
            examples: ["Catch up hours"],
            type: "string",
          },
          timeZone: {
            description:
              "Timezone is used to calculate available times when an event using the schedule is booked.",
            examples: ["Europe/Rome"],
            type: "string",
          },
          availability: {
            description:
              "Each object contains days and times when the user is available. If not passed, the default availability is Monday to Friday from 09:00 to 17:00.",
            examples: [
              [
                {
                  days: ["Monday", "Tuesday"],
                  startTime: "17:00",
                  endTime: "19:00",
                },
                {
                  days: ["Wednesday", "Thursday"],
                  startTime: "16:00",
                  endTime: "20:00",
                },
              ],
            ],
            type: "array",
            items: {
              $ref: "#/$defs/ScheduleAvailabilityInput_2024_06_11",
            },
          },
          isDefault: {
            description:
              "Each user should have 1 default schedule. If you specified `timeZone` when creating managed user, then the default schedule will be created with that timezone.\n    Default schedule means that if an event type is not tied to a specific schedule then the default schedule is used.",
            examples: [true],
            type: "boolean",
          },
          overrides: {
            description:
              "Need to change availability for a specific date? Add an override.",
            examples: [
              [
                {
                  date: "2024-05-20",
                  startTime: "18:00",
                  endTime: "21:00",
                },
              ],
            ],
            type: "array",
            items: {
              $ref: "#/$defs/ScheduleOverrideInput_2024_06_11",
            },
          },
        },
      },
      ScheduleAvailabilityInput_2024_06_11: {
        required: ["days", "startTime", "endTime"],
        type: "object",
        properties: {
          days: {
            description: "Array of days when schedule is active.",
            enum: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            examples: [["Monday", "Tuesday"]],
            type: "array",
            items: {
              enum: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              type: "string",
            },
          },
          startTime: {
            description:
              "startTime must be a valid time in format HH:MM e.g. 08:00",
            examples: ["08:00"],
            pattern: "TIME_FORMAT_HH_MM",
            type: "string",
          },
          endTime: {
            description:
              "endTime must be a valid time in format HH:MM e.g. 15:00",
            examples: ["15:00"],
            pattern: "TIME_FORMAT_HH_MM",
            type: "string",
          },
        },
      },
      ScheduleOverrideInput_2024_06_11: {
        required: ["date", "startTime", "endTime"],
        type: "object",
        properties: {
          date: {
            examples: ["2024-05-20"],
            type: "string",
          },
          startTime: {
            description:
              "startTime must be a valid time in format HH:MM e.g. 12:00",
            examples: ["12:00"],
            pattern: "TIME_FORMAT_HH_MM",
            type: "string",
          },
          endTime: {
            description:
              "endTime must be a valid time in format HH:MM e.g. 13:00",
            examples: ["13:00"],
            pattern: "TIME_FORMAT_HH_MM",
            type: "string",
          },
        },
      },
    },
  },
  {
    description: "Get the default schedule of the authenticated user.",
    method: "get",
    name: "SchedulesController_2024_06_11_getDefaultSchedule",
    url: "https://api.cal.com/v2/schedules/default",
    params: [
      {
        description:
          "value must be `Bearer <token>` where `<token>` either managed user access token or api key prefixed with cal_",
        in: "header",
        name: "Authorization",
        required: true,
        explode: false,
        schema: {
          type: "string",
        },
        style: "simple",
      },
      {
        description: "Must be set to 2024-06-11",
        in: "header",
        name: "cal-api-version",
        required: true,
        explode: false,
        schema: {
          default: "2024-06-11",
          type: "string",
        },
        style: "simple",
      },
    ],
    defs: {},
  },
  {
    description: "Get a schedule",
    method: "get",
    name: "SchedulesController_2024_06_11_getSchedule",
    url: "https://api.cal.com/v2/schedules/{scheduleId}",
    params: [
      {
        description:
          "value must be `Bearer <token>` where `<token>` either managed user access token or api key prefixed with cal_",
        in: "header",
        name: "Authorization",
        required: true,
        explode: false,
        schema: {
          type: "string",
        },
        style: "simple",
      },
      {
        description: "Must be set to 2024-06-11",
        in: "header",
        name: "cal-api-version",
        required: true,
        explode: false,
        schema: {
          default: "2024-06-11",
          type: "string",
        },
        style: "simple",
      },
      {
        in: "path",
        name: "scheduleId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
    ],
    defs: {},
  },
  {
    description: "Delete a schedule",
    method: "delete",
    name: "SchedulesController_2024_06_11_deleteSchedule",
    url: "https://api.cal.com/v2/schedules/{scheduleId}",
    params: [
      {
        description:
          "value must be `Bearer <token>` where `<token>` either managed user access token or api key prefixed with cal_",
        in: "header",
        name: "Authorization",
        required: true,
        explode: false,
        schema: {
          type: "string",
        },
        style: "simple",
      },
      {
        description: "Must be set to 2024-06-11",
        in: "header",
        name: "cal-api-version",
        required: true,
        explode: false,
        schema: {
          default: "2024-06-11",
          type: "string",
        },
        style: "simple",
      },
      {
        in: "path",
        name: "scheduleId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
    ],
    defs: {},
  },
  {
    description: "Update a schedule",
    method: "patch",
    name: "SchedulesController_2024_06_11_updateSchedule",
    url: "https://api.cal.com/v2/schedules/{scheduleId}",
    params: [
      {
        description:
          "value must be `Bearer <token>` where `<token>` either managed user access token or api key prefixed with cal_",
        in: "header",
        name: "Authorization",
        required: true,
        explode: false,
        schema: {
          type: "string",
        },
        style: "simple",
      },
      {
        description: "Must be set to 2024-06-11",
        in: "header",
        name: "cal-api-version",
        required: true,
        explode: false,
        schema: {
          default: "2024-06-11",
          type: "string",
        },
        style: "simple",
      },
      {
        in: "path",
        name: "scheduleId",
        required: true,
        explode: false,
        schema: {
          type: "string",
        },
        style: "simple",
      },
    ],
    body: {
      $ref: "#/$defs/UpdateScheduleInput_2024_06_11",
    },
    contentType: "application/json",
    defs: {
      UpdateScheduleInput_2024_06_11: {
        type: "object",
        properties: {
          name: {
            examples: ["One-on-one coaching"],
            type: "string",
          },
          timeZone: {
            examples: ["Europe/Rome"],
            type: "string",
          },
          availability: {
            examples: [
              [
                {
                  days: ["Monday", "Tuesday"],
                  startTime: "09:00",
                  endTime: "10:00",
                },
              ],
            ],
            type: "array",
            items: {
              $ref: "#/$defs/ScheduleAvailabilityInput_2024_06_11",
            },
          },
          isDefault: {
            examples: [true],
            type: "boolean",
          },
          overrides: {
            examples: [
              [
                {
                  date: "2024-05-20",
                  startTime: "12:00",
                  endTime: "14:00",
                },
              ],
            ],
            type: "array",
            items: {
              $ref: "#/$defs/ScheduleOverrideInput_2024_06_11",
            },
          },
        },
      },
      ScheduleAvailabilityInput_2024_06_11: {
        required: ["days", "startTime", "endTime"],
        type: "object",
        properties: {
          days: {
            description: "Array of days when schedule is active.",
            enum: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            examples: [["Monday", "Tuesday"]],
            type: "array",
            items: {
              enum: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              type: "string",
            },
          },
          startTime: {
            description:
              "startTime must be a valid time in format HH:MM e.g. 08:00",
            examples: ["08:00"],
            pattern: "TIME_FORMAT_HH_MM",
            type: "string",
          },
          endTime: {
            description:
              "endTime must be a valid time in format HH:MM e.g. 15:00",
            examples: ["15:00"],
            pattern: "TIME_FORMAT_HH_MM",
            type: "string",
          },
        },
      },
      ScheduleOverrideInput_2024_06_11: {
        required: ["date", "startTime", "endTime"],
        type: "object",
        properties: {
          date: {
            examples: ["2024-05-20"],
            type: "string",
          },
          startTime: {
            description:
              "startTime must be a valid time in format HH:MM e.g. 12:00",
            examples: ["12:00"],
            pattern: "TIME_FORMAT_HH_MM",
            type: "string",
          },
          endTime: {
            description:
              "endTime must be a valid time in format HH:MM e.g. 13:00",
            examples: ["13:00"],
            pattern: "TIME_FORMAT_HH_MM",
            type: "string",
          },
        },
      },
    },
  },
  {
    description: "Add a selected calendar",
    method: "post",
    name: "SelectedCalendarsController_addSelectedCalendar",
    url: "https://api.cal.com/v2/selected-calendars",
    body: {
      $ref: "#/$defs/SelectedCalendarsInputDto",
    },
    contentType: "application/json",
    defs: {
      SelectedCalendarsInputDto: {
        required: ["integration", "externalId", "credentialId"],
        type: "object",
        properties: {
          integration: {
            type: "string",
          },
          externalId: {
            type: "string",
          },
          credentialId: {
            type: "number",
          },
          delegationCredentialId: {
            type: "string",
          },
        },
      },
    },
  },
  {
    description: "Delete a selected calendar",
    method: "delete",
    name: "SelectedCalendarsController_deleteSelectedCalendar",
    url: "https://api.cal.com/v2/selected-calendars",
    params: [
      {
        in: "query",
        name: "integration",
        required: true,
        explode: true,
        schema: {
          type: "string",
        },
        style: "form",
      },
      {
        in: "query",
        name: "externalId",
        required: true,
        explode: true,
        schema: {
          type: "string",
        },
        style: "form",
      },
      {
        in: "query",
        name: "credentialId",
        required: true,
        explode: true,
        schema: {
          type: "string",
        },
        style: "form",
      },
      {
        in: "query",
        name: "delegationCredentialId",
        required: false,
        explode: true,
        schema: {
          type: "string",
        },
        style: "form",
      },
    ],
    defs: {},
  },
  {
    description:
      "\n      There are 4 ways to get available slots:\n      \n      1. By event type id. Event type id can be of user and team event types. Example '/v2/slots?eventTypeId=10&start=2050-09-05&end=2050-09-06&timeZone=Europe/Rome'\n\n      2. By event type slug + username. Example '/v2/slots?eventTypeSlug=intro&username=bob&start=2050-09-05&end=2050-09-06'\n\n      3. By event type slug + username + organization slug when searching within an organization. Example '/v2/slots?organizationSlug=org-slug&eventTypeSlug=intro&username=bob&start=2050-09-05&end=2050-09-06'\n\n      4. By usernames only (used for dynamic event type - there is no specific event but you want to know when 2 or more people are available). Example '/v2/slots?usernames=alice,bob&username=bob&organizationSlug=org-slug&start=2050-09-05&end=2050-09-06'. As you see you also need to provide the slug of the organization to which each user in the 'usernames' array belongs.\n\n      All of them require \"start\" and \"end\" query parameters which define the time range for which available slots should be checked.\n      Optional parameters are:\n      - timeZone: Time zone in which the available slots should be returned. Defaults to UTC.\n      - duration: Only use for event types that allow multiple durations or for dynamic event types. If not passed for multiple duration event types defaults to default duration. For dynamic event types defaults to 30 aka each returned slot is 30 minutes long. So duration=60 means that returned slots will be each 60 minutes long.\n      - slotFormat: Format of the slots. By default return is an object where each key is date and value is array of slots as string. If you want to get start and end of each slot use \"range\" as value.\n      ",
    method: "get",
    name: "SlotsController_2024_09_04_getAvailableSlots",
    url: "https://api.cal.com/v2/slots",
    params: [
      {
        description: "Must be set to 2024-09-04",
        in: "header",
        name: "cal-api-version",
        required: true,
        explode: false,
        schema: {
          default: "2024-09-04",
          type: "string",
        },
        style: "simple",
      },
      {
        description:
          "\n      Time starting from which available slots should be checked.\n    \n      Must be in UTC timezone as ISO 8601 datestring.\n      \n      You can pass date without hours which defaults to start of day or specify hours:\n      2024-08-13 (will have hours 00:00:00 aka at very beginning of the date) or you can specify hours manually like 2024-08-13T09:00:00Z.",
        in: "query",
        name: "start",
        required: true,
        example: "2050-09-05",
        explode: true,
        schema: {},
        style: "form",
      },
      {
        description:
          "\n    Time until which available slots should be checked.\n    \n    Must be in UTC timezone as ISO 8601 datestring.\n    \n    You can pass date without hours which defaults to end of day or specify hours:\n    2024-08-20 (will have hours 23:59:59 aka at the very end of the date) or you can specify hours manually like 2024-08-20T18:00:00Z.",
        in: "query",
        name: "end",
        required: true,
        example: "2050-09-06",
        explode: true,
        schema: {},
        style: "form",
      },
      {
        description: "The username of the user to get event types for.",
        in: "query",
        name: "username",
        required: false,
        example: "bob",
        explode: true,
        schema: {},
        style: "form",
      },
      {
        description:
          "The slug of the event type for which available slots should be checked. If slug is provided then username must be provided too.",
        in: "query",
        name: "eventTypeSlug",
        required: false,
        example: "event-type-slug",
        explode: true,
        schema: {},
        style: "form",
      },
      {
        description:
          "The ID of the event type for which available slots should be checked.",
        in: "query",
        name: "eventTypeId",
        required: false,
        example: "100",
        explode: true,
        schema: {},
        style: "form",
      },
      {
        description:
          "The usernames for which available slots should be checked separated by a comma.\n    \n    Checking slots by usernames is used mainly for dynamic events where there is no specific event but we just want to know when 2 or more people are available.\n    \n    Must contain at least 2 usernames.",
        in: "query",
        name: "usernames",
        required: false,
        example: "alice,bob",
        explode: true,
        schema: {},
        style: "form",
      },
      {
        description:
          "Format of slot times in response. Use 'range' to get start and end times. Use 'time' or omit this query parameter to get only start time.",
        in: "query",
        name: "slotFormat",
        required: false,
        example: "range",
        explode: true,
        schema: {},
        style: "form",
      },
      {
        description:
          "If event type has multiple possible durations then you can specify the desired duration here. Also, if you are fetching slots for a dynamic event then you can specify the duration her which defaults to 30, meaning that returned slots will be each 30 minutes long.",
        in: "query",
        name: "duration",
        required: false,
        example: "60",
        explode: true,
        schema: {},
        style: "form",
      },
      {
        description:
          "Time zone in which the available slots should be returned. Defaults to UTC.",
        in: "query",
        name: "timeZone",
        required: false,
        example: "Europe/Rome",
        explode: true,
        schema: {},
        style: "form",
      },
    ],
    defs: {},
  },
  {
    description:
      "Make a slot not available for others to book for a certain period of time.",
    method: "post",
    name: "SlotsController_2024_09_04_reserveSlot",
    url: "https://api.cal.com/v2/slots/reservations",
    params: [
      {
        description: "Must be set to 2024-09-04",
        in: "header",
        name: "cal-api-version",
        required: true,
        explode: false,
        schema: {
          default: "2024-09-04",
          type: "string",
        },
        style: "simple",
      },
    ],
    body: {
      $ref: "#/$defs/ReserveSlotInput_2024_09_04",
    },
    contentType: "application/json",
    defs: {
      ReserveSlotInput_2024_09_04: {
        required: ["eventTypeId", "slotStart"],
        type: "object",
        properties: {
          eventTypeId: {
            description:
              "The ID of the event type for which slot should be reserved.",
            examples: [1],
            type: "number",
          },
          slotStart: {
            description:
              "ISO 8601 datestring in UTC timezone representing available slot.",
            examples: ["2024-09-04T09:00:00Z"],
            type: "string",
          },
          slotDuration: {
            description:
              "By default slot duration is equal to event type length, but if you want to reserve a slot for an event type that has a variable length you can specify it here as a number in minutes. If you don't have this set explicitly that event type can have one of many lengths you can omit this.",
            examples: ["30"],
            type: "number",
          },
          reservationDuration: {
            description:
              "ONLY for authenticated requests with api key, access token or OAuth credentials (ID + secret).\n      \n      For how many minutes the slot should be reserved - for this long time noone else can book this event type at `start` time. If not provided, defaults to 5 minutes.",
            examples: [5],
            type: "number",
          },
        },
      },
    },
  },
  {
    description: "Get reserved slot",
    method: "get",
    name: "SlotsController_2024_09_04_getReservedSlot",
    url: "https://api.cal.com/v2/slots/reservations/{uid}",
    params: [
      {
        description: "Must be set to 2024-09-04",
        in: "header",
        name: "cal-api-version",
        required: true,
        explode: false,
        schema: {
          default: "2024-09-04",
          type: "string",
        },
        style: "simple",
      },
      {
        in: "path",
        name: "uid",
        required: true,
        explode: false,
        schema: {
          type: "string",
        },
        style: "simple",
      },
    ],
    defs: {},
  },
  {
    description: "",
    method: "delete",
    name: "SlotsController_2024_09_04_deleteReservedSlot",
    url: "https://api.cal.com/v2/slots/reservations/{uid}",
    params: [
      {
        description: "Must be set to 2024-09-04",
        in: "header",
        name: "cal-api-version",
        required: true,
        explode: false,
        schema: {
          default: "2024-09-04",
          type: "string",
        },
        style: "simple",
      },
      {
        in: "path",
        name: "uid",
        required: true,
        explode: false,
        schema: {
          type: "string",
        },
        style: "simple",
      },
    ],
    defs: {},
  },
  {
    description: "Updated reserved a slot",
    method: "patch",
    name: "SlotsController_2024_09_04_updateReservedSlot",
    url: "https://api.cal.com/v2/slots/reservations/{uid}",
    params: [
      {
        description: "Must be set to 2024-09-04",
        in: "header",
        name: "cal-api-version",
        required: true,
        explode: false,
        schema: {
          default: "2024-09-04",
          type: "string",
        },
        style: "simple",
      },
      {
        in: "path",
        name: "uid",
        required: true,
        explode: false,
        schema: {
          type: "string",
        },
        style: "simple",
      },
    ],
    body: {
      $ref: "#/$defs/ReserveSlotInput_2024_09_04",
    },
    contentType: "application/json",
    defs: {
      ReserveSlotInput_2024_09_04: {
        required: ["eventTypeId", "slotStart"],
        type: "object",
        properties: {
          eventTypeId: {
            description:
              "The ID of the event type for which slot should be reserved.",
            examples: [1],
            type: "number",
          },
          slotStart: {
            description:
              "ISO 8601 datestring in UTC timezone representing available slot.",
            examples: ["2024-09-04T09:00:00Z"],
            type: "string",
          },
          slotDuration: {
            description:
              "By default slot duration is equal to event type length, but if you want to reserve a slot for an event type that has a variable length you can specify it here as a number in minutes. If you don't have this set explicitly that event type can have one of many lengths you can omit this.",
            examples: ["30"],
            type: "number",
          },
          reservationDuration: {
            description:
              "ONLY for authenticated requests with api key, access token or OAuth credentials (ID + secret).\n      \n      For how many minutes the slot should be reserved - for this long time noone else can book this event type at `start` time. If not provided, defaults to 5 minutes.",
            examples: [5],
            type: "number",
          },
        },
      },
    },
  },
  {
    description: "Get stripe connect URL",
    method: "get",
    name: "StripeController_redirect",
    url: "https://api.cal.com/v2/stripe/connect",
    params: [
      {
        in: "header",
        name: "Authorization",
        required: true,
        explode: false,
        schema: {
          type: "string",
        },
        style: "simple",
      },
    ],
    defs: {},
  },
  {
    description: "Save stripe credentials",
    method: "get",
    name: "StripeController_save",
    url: "https://api.cal.com/v2/stripe/save",
    params: [
      {
        in: "query",
        name: "state",
        required: true,
        explode: true,
        schema: {
          type: "string",
        },
        style: "form",
      },
      {
        in: "query",
        name: "code",
        required: true,
        explode: true,
        schema: {
          type: "string",
        },
        style: "form",
      },
    ],
    defs: {},
  },
  {
    description: "Check stripe connection",
    method: "get",
    name: "StripeController_check",
    url: "https://api.cal.com/v2/stripe/check",
    defs: {},
  },
  {
    description: "Check team stripe connection",
    method: "get",
    name: "StripeController_checkTeamStripeConnection",
    url: "https://api.cal.com/v2/stripe/check/{teamId}",
    params: [
      {
        in: "path",
        name: "teamId",
        required: true,
        explode: false,
        schema: {
          type: "string",
        },
        style: "simple",
      },
    ],
    defs: {},
  },
  {
    description: "Get teams",
    method: "get",
    name: "TeamsController_getTeams",
    url: "https://api.cal.com/v2/teams",
    defs: {},
  },
  {
    description: "Create a team",
    method: "post",
    name: "TeamsController_createTeam",
    url: "https://api.cal.com/v2/teams",
    body: {
      $ref: "#/$defs/CreateTeamInput",
    },
    contentType: "application/json",
    defs: {
      CreateTeamInput: {
        required: ["name"],
        type: "object",
        properties: {
          name: {
            description: "Name of the team",
            examples: ["CalTeam"],
            minLength: 1,
            type: "string",
          },
          slug: {
            description: "Team slug",
            examples: ["caltel"],
            type: "string",
          },
          logoUrl: {
            description: "URL of the teams logo image",
            examples: [
              "https://i.cal.com/api/avatar/b0b58752-68ad-4c0d-8024-4fa382a77752.png",
            ],
            type: "string",
          },
          calVideoLogo: {
            type: "string",
          },
          appLogo: {
            type: "string",
          },
          appIconLogo: {
            type: "string",
          },
          bio: {
            type: "string",
          },
          hideBranding: {
            default: false,
            type: "boolean",
          },
          isPrivate: {
            type: "boolean",
          },
          hideBookATeamMember: {
            type: "boolean",
          },
          metadata: {
            description:
              "You can store any additional data you want here.\nMetadata must have at most 50 keys, each key up to 40 characters.\nValues can be strings (up to 500 characters), numbers, or booleans.",
            examples: [
              {
                key: "value",
              },
            ],
            type: "object",
          },
          theme: {
            type: "string",
          },
          brandColor: {
            type: "string",
          },
          darkBrandColor: {
            type: "string",
          },
          bannerUrl: {
            description:
              "URL of the teams banner image which is shown on booker",
            examples: [
              "https://i.cal.com/api/avatar/949be534-7a88-4185-967c-c020b0c0bef3.png",
            ],
            type: "string",
          },
          timeFormat: {
            type: "number",
          },
          timeZone: {
            default: "Europe/London",
            description:
              "Timezone is used to create teams's default schedule from Monday to Friday from 9AM to 5PM. It will default to Europe/London if not passed.",
            examples: ["America/New_York"],
            type: "string",
          },
          weekStart: {
            default: "Sunday",
            examples: ["Monday"],
            type: "string",
          },
          autoAcceptCreator: {
            default: true,
            type: "boolean",
          },
        },
      },
    },
  },
  {
    description: "Get a team",
    method: "get",
    name: "TeamsController_getTeam",
    url: "https://api.cal.com/v2/teams/{teamId}",
    params: [
      {
        in: "path",
        name: "teamId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
    ],
    defs: {},
  },
  {
    description: "Delete a team",
    method: "delete",
    name: "TeamsController_deleteTeam",
    url: "https://api.cal.com/v2/teams/{teamId}",
    params: [
      {
        in: "path",
        name: "teamId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
    ],
    defs: {},
  },
  {
    description: "Update a team",
    method: "patch",
    name: "TeamsController_updateTeam",
    url: "https://api.cal.com/v2/teams/{teamId}",
    params: [
      {
        in: "path",
        name: "teamId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
    ],
    body: {
      $ref: "#/$defs/UpdateOrgTeamDto",
    },
    contentType: "application/json",
    defs: {
      UpdateOrgTeamDto: {
        type: "object",
        properties: {
          name: {
            description: "Name of the team",
            examples: ["CalTeam"],
            minLength: 1,
            type: "string",
          },
          slug: {
            description: "Team slug",
            examples: ["caltel"],
            type: "string",
          },
          logoUrl: {
            description: "URL of the teams logo image",
            examples: [
              "https://i.cal.com/api/avatar/b0b58752-68ad-4c0d-8024-4fa382a77752.png",
            ],
            type: "string",
          },
          calVideoLogo: {
            type: "string",
          },
          appLogo: {
            type: "string",
          },
          appIconLogo: {
            type: "string",
          },
          bio: {
            type: "string",
          },
          hideBranding: {
            type: "boolean",
          },
          isPrivate: {
            type: "boolean",
          },
          hideBookATeamMember: {
            type: "boolean",
          },
          metadata: {
            description:
              "You can store any additional data you want here.\nMetadata must have at most 50 keys, each key up to 40 characters.\nValues can be strings (up to 500 characters), numbers, or booleans.",
            examples: [
              {
                key: "value",
              },
            ],
            type: "object",
          },
          theme: {
            type: "string",
          },
          brandColor: {
            type: "string",
          },
          darkBrandColor: {
            type: "string",
          },
          bannerUrl: {
            description:
              "URL of the teams banner image which is shown on booker",
            examples: [
              "https://i.cal.com/api/avatar/949be534-7a88-4185-967c-c020b0c0bef3.png",
            ],
            type: "string",
          },
          timeFormat: {
            type: "number",
          },
          timeZone: {
            description:
              "Timezone is used to create teams's default schedule from Monday to Friday from 9AM to 5PM. It will default to Europe/London if not passed.",
            examples: ["America/New_York"],
            type: "string",
          },
          weekStart: {
            examples: ["Monday"],
            type: "string",
          },
          bookingLimits: {
            type: "string",
          },
          includeManagedEventsInLimits: {
            type: "boolean",
          },
        },
      },
    },
  },
  {
    description: "Get a team event type",
    method: "get",
    name: "TeamsEventTypesController_getTeamEventTypes",
    url: "https://api.cal.com/v2/teams/{teamId}/event-types",
    params: [
      {
        in: "path",
        name: "teamId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
      {
        description: "Slug of team event type to return.",
        in: "query",
        name: "eventSlug",
        required: false,
        explode: true,
        schema: {
          type: "string",
        },
        style: "form",
      },
      {
        description:
          "Specifies the maximum number of hosts to include in the response. This limit helps optimize performance. If not provided, all Hosts will be fetched.",
        in: "query",
        name: "hostsLimit",
        required: false,
        explode: true,
        schema: {
          type: "number",
        },
        style: "form",
      },
    ],
    defs: {},
  },
  {
    description: "Create an event type",
    method: "post",
    name: "TeamsEventTypesController_createTeamEventType",
    url: "https://api.cal.com/v2/teams/{teamId}/event-types",
    params: [
      {
        in: "path",
        name: "teamId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
    ],
    body: {
      $ref: "#/$defs/CreateTeamEventTypeInput_2024_06_14",
    },
    contentType: "application/json",
    defs: {
      CreateTeamEventTypeInput_2024_06_14: {
        required: [
          "lengthInMinutes",
          "title",
          "slug",
          "schedulingType",
          "hosts",
        ],
        type: "object",
        properties: {
          lengthInMinutes: {
            examples: [60],
            type: "number",
          },
          lengthInMinutesOptions: {
            description:
              "If you want that user can choose between different lengths of the event you can specify them here. Must include the provided `lengthInMinutes`.",
            examples: [[15, 30, 60]],
            type: "array",
            items: {
              type: "string",
            },
          },
          title: {
            examples: ["Learn the secrets of masterchief!"],
            type: "string",
          },
          slug: {
            examples: ["learn-the-secrets-of-masterchief"],
            type: "string",
          },
          description: {
            examples: [
              "Discover the culinary wonders of the Argentina by making the best flan ever!",
            ],
            type: "string",
          },
          bookingFields: {
            description:
              "Custom fields that can be added to the booking form when the event is booked by someone. By default booking form has name and email field.",
            type: "array",
            items: {
              anyOf: [
                {
                  $ref: "#/$defs/NameDefaultFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/EmailDefaultFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/TitleDefaultFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/NotesDefaultFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/GuestsDefaultFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/RescheduleReasonDefaultFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/PhoneFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/AddressFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/TextFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/NumberFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/TextAreaFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/SelectFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/MultiSelectFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/MultiEmailFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/CheckboxGroupFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/RadioGroupFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/BooleanFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/UrlFieldInput_2024_06_14",
                },
              ],
              type: "object",
            },
          },
          disableGuests: {
            description:
              "If true, person booking this event can't add guests via their emails.",
            type: "boolean",
          },
          slotInterval: {
            description:
              "Number representing length of each slot when event is booked. By default it equal length of the event type.\n      If event length is 60 minutes then we would have slots 9AM, 10AM, 11AM etc. but if it was changed to 30 minutes then\n      we would have slots 9AM, 9:30AM, 10AM, 10:30AM etc. as the available times to book the 60 minute event.",
            type: "number",
          },
          minimumBookingNotice: {
            description:
              "Minimum number of minutes before the event that a booking can be made.",
            type: "number",
          },
          beforeEventBuffer: {
            description:
              "Time spaces that can be prepended before an event to give more time before it.",
            type: "number",
          },
          afterEventBuffer: {
            description:
              "Time spaces that can be appended after an event to give more time after it.",
            type: "number",
          },
          scheduleId: {
            description:
              "If you want that this event has different schedule than user's default one you can specify it here.",
            type: "number",
          },
          bookingLimitsCount: {
            description: "Limit how many times this event can be booked",
            anyOf: [
              {
                $ref: "#/$defs/BaseBookingLimitsCount_2024_06_14",
              },
              {
                $ref: "#/$defs/Disabled_2024_06_14",
              },
            ],
            type: "object",
          },
          onlyShowFirstAvailableSlot: {
            description:
              "This will limit your availability for this event type to one slot per day, scheduled at the earliest available time.",
            type: "boolean",
          },
          bookingLimitsDuration: {
            description:
              "Limit total amount of time that this event can be booked",
            anyOf: [
              {
                $ref: "#/$defs/BaseBookingLimitsDuration_2024_06_14",
              },
              {
                $ref: "#/$defs/Disabled_2024_06_14",
              },
            ],
            type: "object",
          },
          bookingWindow: {
            description: "Limit how far in the future this event can be booked",
            anyOf: [
              {
                $ref: "#/$defs/BusinessDaysWindow_2024_06_14",
              },
              {
                $ref: "#/$defs/CalendarDaysWindow_2024_06_14",
              },
              {
                $ref: "#/$defs/RangeWindow_2024_06_14",
              },
              {
                $ref: "#/$defs/Disabled_2024_06_14",
              },
            ],
            type: "object",
          },
          offsetStart: {
            description:
              "Offset timeslots shown to bookers by a specified number of minutes",
            type: "number",
          },
          bookerLayouts: {
            description:
              "Should booker have week, month or column view. Specify default layout and enabled layouts user can pick.",
            allOf: [
              {
                $ref: "#/$defs/BookerLayouts_2024_06_14",
              },
            ],
          },
          confirmationPolicy: {
            description:
              "Specify how the booking needs to be manually confirmed before it is pushed to the integrations and a confirmation mail is sent.",
            anyOf: [
              {
                $ref: "#/$defs/BaseConfirmationPolicy_2024_06_14",
              },
              {
                $ref: "#/$defs/Disabled_2024_06_14",
              },
            ],
            type: "object",
          },
          recurrence: {
            description: "Create a recurring event type.",
            anyOf: [
              {
                $ref: "#/$defs/Recurrence_2024_06_14",
              },
              {
                $ref: "#/$defs/Disabled_2024_06_14",
              },
            ],
            type: "object",
          },
          requiresBookerEmailVerification: {
            type: "boolean",
          },
          hideCalendarNotes: {
            type: "boolean",
          },
          lockTimeZoneToggleOnBookingPage: {
            type: "boolean",
          },
          color: {
            $ref: "#/$defs/EventTypeColor_2024_06_14",
          },
          seats: {
            description: "Create an event type with multiple seats.",
            anyOf: [
              {
                $ref: "#/$defs/Seats_2024_06_14",
              },
              {
                $ref: "#/$defs/Disabled_2024_06_14",
              },
            ],
            type: "object",
          },
          customName: {
            description:
              "Customizable event name with valid variables: \n      {Event type title}, {Organiser}, {Scheduler}, {Location}, {Organiser first name}, \n      {Scheduler first name}, {Scheduler last name}, {Event duration}, {LOCATION}, \n      {HOST/ATTENDEE}, {HOST}, {ATTENDEE}, {USER}",
            examples: [
              "{Event type title} between {Organiser} and {Scheduler}",
            ],
            type: "string",
          },
          destinationCalendar: {
            $ref: "#/$defs/DestinationCalendar_2024_06_14",
          },
          useDestinationCalendarEmail: {
            type: "boolean",
          },
          hideCalendarEventDetails: {
            type: "boolean",
          },
          successRedirectUrl: {
            description:
              "A valid URL where the booker will redirect to, once the booking is completed successfully",
            examples: ["https://masterchief.com/argentina/flan/video/9129412"],
            type: "string",
          },
          schedulingType: {
            type: "object",
          },
          hosts: {
            type: "array",
            items: {
              $ref: "#/$defs/Host",
            },
          },
          assignAllTeamMembers: {
            description:
              "If true, all current and future team members will be assigned to this event type",
            type: "boolean",
          },
          locations: {
            description:
              "Locations where the event will take place. If not provided, cal video link will be used as the location.",
            type: "array",
            items: {
              anyOf: [
                {
                  $ref: "#/$defs/InputAddressLocation_2024_06_14",
                },
                {
                  $ref: "#/$defs/InputLinkLocation_2024_06_14",
                },
                {
                  $ref: "#/$defs/InputIntegrationLocation_2024_06_14",
                },
                {
                  $ref: "#/$defs/InputPhoneLocation_2024_06_14",
                },
                {
                  $ref: "#/$defs/InputAttendeeAddressLocation_2024_06_14",
                },
                {
                  $ref: "#/$defs/InputAttendeePhoneLocation_2024_06_14",
                },
                {
                  $ref: "#/$defs/InputAttendeeDefinedLocation_2024_06_14",
                },
                {
                  $ref: "#/$defs/InputOrganizersDefaultApp_2024_06_14",
                },
              ],
              type: "object",
            },
          },
        },
      },
      NameDefaultFieldInput_2024_06_14: {
        required: ["type", "label", "placeholder"],
        type: "object",
        properties: {
          type: {
            description:
              "only allowed value for type is `name`. Used for having 1 booking field for both first name and last name.",
            examples: ["name"],
            type: "string",
          },
          label: {
            type: "string",
          },
          placeholder: {
            type: "string",
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if URL contains query parameter `&name=bob`,      the name field will be prefilled with this value and disabled.",
            type: "boolean",
          },
        },
      },
      EmailDefaultFieldInput_2024_06_14: {
        required: ["type", "label", "required", "placeholder"],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `email`",
            examples: ["email"],
            type: "string",
          },
          label: {
            type: "string",
          },
          required: {
            type: "object",
          },
          placeholder: {
            type: "string",
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if URL contains query parameter `&email=bob@gmail.com`,      the email field will be prefilled with this value and disabled.",
            type: "boolean",
          },
        },
      },
      TitleDefaultFieldInput_2024_06_14: {
        required: ["slug"],
        type: "object",
        properties: {
          slug: {
            description: "only allowed value for type is `title`",
            examples: ["title"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
          label: {
            type: "string",
          },
          placeholder: {
            type: "string",
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if URL contains query parameter `&title=journey`,      the title field will be prefilled with this value and disabled.",
            type: "boolean",
          },
        },
      },
      NotesDefaultFieldInput_2024_06_14: {
        required: ["slug"],
        type: "object",
        properties: {
          slug: {
            description: "only allowed value for type is `notes`",
            examples: ["notes"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
          label: {
            type: "string",
          },
          placeholder: {
            type: "string",
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if URL contains query parameter `&notes=journey`,      the notes field will be prefilled with this value and disabled.",
            type: "boolean",
          },
        },
      },
      GuestsDefaultFieldInput_2024_06_14: {
        required: ["slug"],
        type: "object",
        properties: {
          slug: {
            description: "only allowed value for type is `guests`",
            examples: ["guests"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
          label: {
            type: "string",
          },
          placeholder: {
            type: "string",
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if URL contains query parameter `&guests=bob@cal.com`,      the guests field will be prefilled with this value and disabled.",
            type: "boolean",
          },
        },
      },
      RescheduleReasonDefaultFieldInput_2024_06_14: {
        required: ["slug"],
        type: "object",
        properties: {
          slug: {
            description: "only allowed value for type is `rescheduleReason`",
            examples: ["rescheduleReason"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
          label: {
            type: "string",
          },
          placeholder: {
            type: "string",
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if URL contains query parameter `&rescheduleReason=travel`,      the rescheduleReason field will be prefilled with this value and disabled.",
            type: "boolean",
          },
        },
      },
      PhoneFieldInput_2024_06_14: {
        required: [
          "type",
          "slug",
          "label",
          "required",
          "placeholder",
          "hidden",
        ],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `phone`",
            examples: ["phone"],
            type: "string",
          },
          slug: {
            description:
              "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            examples: ["some-slug"],
            type: "string",
          },
          label: {
            type: "string",
          },
          required: {
            type: "boolean",
          },
          placeholder: {
            type: "string",
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `phone` and the URL contains query parameter `&phone=1234567890`,      the phone field will be prefilled with this value and disabled.",
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
        },
      },
      AddressFieldInput_2024_06_14: {
        required: [
          "type",
          "slug",
          "label",
          "required",
          "placeholder",
          "hidden",
        ],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `address`",
            examples: ["address"],
            type: "string",
          },
          slug: {
            description:
              "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            examples: ["some-slug"],
            type: "string",
          },
          label: {
            examples: ["Please enter your address"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          placeholder: {
            examples: ["e.g., 1234 Main St"],
            type: "string",
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `address` and the URL contains query parameter `&address=1234 Main St, London`,      the address field will be prefilled with this value and disabled.",
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
        },
      },
      TextFieldInput_2024_06_14: {
        required: [
          "type",
          "slug",
          "label",
          "required",
          "placeholder",
          "hidden",
        ],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `text`",
            examples: ["text"],
            type: "string",
          },
          slug: {
            description:
              "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            examples: ["some-slug"],
            type: "string",
          },
          label: {
            examples: ["Please enter your text"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          placeholder: {
            examples: ["e.g., Enter text here"],
            type: "string",
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `who-referred-you` and the URL contains query parameter `&who-referred-you=bob`,      the text field will be prefilled with this value and disabled.",
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
        },
      },
      NumberFieldInput_2024_06_14: {
        required: [
          "type",
          "slug",
          "label",
          "required",
          "placeholder",
          "hidden",
        ],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `number`",
            examples: ["number"],
            type: "string",
          },
          slug: {
            description:
              "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            examples: ["some-slug"],
            type: "string",
          },
          label: {
            examples: ["Please enter a number"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          placeholder: {
            examples: ["e.g., 100"],
            type: "string",
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `calories-per-day` and the URL contains query parameter `&calories-per-day=3000`,      the number field will be prefilled with this value and disabled.",
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
        },
      },
      TextAreaFieldInput_2024_06_14: {
        required: [
          "type",
          "slug",
          "label",
          "required",
          "placeholder",
          "hidden",
        ],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `textarea`",
            examples: ["textarea"],
            type: "string",
          },
          slug: {
            description:
              "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            examples: ["some-slug"],
            type: "string",
          },
          label: {
            examples: ["Please enter detailed information"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          placeholder: {
            examples: ["e.g., Detailed description here..."],
            type: "string",
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `dear-diary` and the URL contains query parameter `&dear-diary=Today I shipped a feature`,      the text area will be prefilled with this value and disabled.",
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
        },
      },
      SelectFieldInput_2024_06_14: {
        required: [
          "type",
          "slug",
          "label",
          "required",
          "placeholder",
          "options",
          "hidden",
        ],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `select`",
            examples: ["select"],
            type: "string",
          },
          slug: {
            description:
              "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            examples: ["some-slug"],
            type: "string",
          },
          label: {
            examples: ["Please select an option"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          placeholder: {
            examples: ["Select..."],
            type: "string",
          },
          options: {
            examples: [["Option 1", "Option 2"]],
            type: "array",
            items: {
              type: "string",
            },
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `language` and options of this select field are ['english', 'italian'] and the URL contains query parameter `&language=italian`,      the 'italian' will be selected and the select field will be disabled.",
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
        },
      },
      MultiSelectFieldInput_2024_06_14: {
        required: ["type", "slug", "label", "required", "options", "hidden"],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `multiselect`",
            examples: ["multiselect"],
            type: "string",
          },
          slug: {
            description:
              "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            examples: ["some-slug"],
            type: "string",
          },
          label: {
            examples: ["Please select multiple options"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          options: {
            examples: [["Option 1", "Option 2"]],
            type: "array",
            items: {
              type: "string",
            },
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `consultants` and the URL contains query parameter `&consultants=en&language=it`,      the 'en' and 'it' will be selected and the select field will be disabled.",
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
        },
      },
      MultiEmailFieldInput_2024_06_14: {
        required: [
          "type",
          "slug",
          "label",
          "required",
          "placeholder",
          "hidden",
        ],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `multiemail`",
            examples: ["multiemail"],
            type: "string",
          },
          slug: {
            description:
              "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            examples: ["some-slug"],
            type: "string",
          },
          label: {
            examples: ["Please enter multiple emails"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          placeholder: {
            examples: ["e.g., example@example.com"],
            type: "string",
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `consultants` and the URL contains query parameter `&consultants=alice@gmail.com&consultants=bob@gmail.com`,      the these emails will be added and none more can be added.",
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
        },
      },
      CheckboxGroupFieldInput_2024_06_14: {
        required: ["type", "slug", "label", "required", "options", "hidden"],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `checkbox`",
            examples: ["checkbox"],
            type: "string",
          },
          slug: {
            description:
              "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            examples: ["some-slug"],
            type: "string",
          },
          label: {
            examples: ["Select all that apply"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          options: {
            examples: [["Checkbox 1", "Checkbox 2"]],
            type: "array",
            items: {
              type: "string",
            },
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `notify-me` and the URL contains query parameter `&notify-me=true`,      the checkbox will be selected and the checkbox field will be disabled.",
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
        },
      },
      RadioGroupFieldInput_2024_06_14: {
        required: ["type", "slug", "label", "required", "options", "hidden"],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `radio`",
            examples: ["radio"],
            type: "string",
          },
          slug: {
            description:
              "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            examples: ["some-slug"],
            type: "string",
          },
          label: {
            examples: ["Select one option"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          options: {
            examples: [["Radio 1", "Radio 2"]],
            type: "array",
            items: {
              type: "string",
            },
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `language` and options of this select field are ['english', 'italian'] and the URL contains query parameter `&language=italian`,      the 'italian' radio button will be selected and the select field will be disabled.",
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
        },
      },
      BooleanFieldInput_2024_06_14: {
        required: ["type", "slug", "label", "required", "hidden"],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `boolean`",
            examples: ["boolean"],
            type: "string",
          },
          slug: {
            description:
              "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            examples: ["some-slug"],
            type: "string",
          },
          label: {
            examples: ["Agree to terms?"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          disableOnPrefill: {
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
        },
      },
      UrlFieldInput_2024_06_14: {
        required: [
          "type",
          "slug",
          "label",
          "required",
          "placeholder",
          "hidden",
        ],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `url`",
            examples: ["url"],
            type: "string",
          },
          slug: {
            description:
              "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            examples: ["some-slug"],
            type: "string",
          },
          label: {
            examples: ["Please enter your text"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          placeholder: {
            examples: ["e.g., Enter url here"],
            type: "string",
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `video-url` and the URL contains query parameter `&video-url=https://youtube.com/abc`the url field will be prefilled with this value and disabled.",
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
        },
      },
      BaseBookingLimitsCount_2024_06_14: {
        type: "object",
        properties: {
          day: {
            description: "The number of bookings per day",
            examples: [1],
            type: "number",
          },
          week: {
            description: "The number of bookings per week",
            examples: [2],
            type: "number",
          },
          month: {
            description: "The number of bookings per month",
            examples: [3],
            type: "number",
          },
          year: {
            description: "The number of bookings per year",
            examples: [4],
            type: "number",
          },
          disabled: {
            default: false,
            type: "boolean",
          },
        },
      },
      Disabled_2024_06_14: {
        required: ["disabled"],
        type: "object",
        properties: {
          disabled: {
            default: false,
            description: "Indicates if the option is disabled",
            examples: [true],
            type: "boolean",
          },
        },
      },
      BaseBookingLimitsDuration_2024_06_14: {
        type: "object",
        properties: {
          day: {
            description:
              "The duration of bookings per day (must be a multiple of 15)",
            examples: [60],
            type: "number",
          },
          week: {
            description:
              "The duration of bookings per week (must be a multiple of 15)",
            examples: [120],
            type: "number",
          },
          month: {
            description:
              "The duration of bookings per month (must be a multiple of 15)",
            examples: [180],
            type: "number",
          },
          year: {
            description:
              "The duration of bookings per year (must be a multiple of 15)",
            examples: [240],
            type: "number",
          },
        },
      },
      BusinessDaysWindow_2024_06_14: {
        required: ["type", "value"],
        type: "object",
        properties: {
          type: {
            description:
              "Whether the window should be business days, calendar days or a range of dates",
            enum: ["businessDays", "calendarDays", "range"],
            type: "string",
          },
          value: {
            description:
              "How many business day into the future can this event be booked",
            examples: [5],
            type: "number",
          },
          rolling: {
            description:
              "\n      Determines the behavior of the booking window:\n      - If **true**, the window is rolling. This means the number of available days will always be equal the specified 'value' \n        and adjust dynamically as bookings are made. For example, if 'value' is 3 and availability is only on Mondays, \n        a booker attempting to schedule on November 10 will see slots on November 11, 18, and 25. As one of these days \n        becomes fully booked, a new day (e.g., December 2) will open up to ensure 3 available days are always visible.\n      - If **false**, the window is fixed. This means the booking window only considers the next 'value' days from the\n        moment someone is trying to book. For example, if 'value' is 3, availability is only on Mondays, and the current \n        date is November 10, the booker will only see slots on November 11 because the window is restricted to the next \n        3 calendar days (November 10\u201312).\n    ",
            examples: [true],
            type: "boolean",
          },
        },
      },
      CalendarDaysWindow_2024_06_14: {
        required: ["type", "value"],
        type: "object",
        properties: {
          type: {
            description:
              "Whether the window should be business days, calendar days or a range of dates",
            enum: ["businessDays", "calendarDays", "range"],
            type: "string",
          },
          value: {
            description:
              "How many calendar days into the future can this event be booked",
            examples: [5],
            type: "number",
          },
          rolling: {
            description:
              "\n      Determines the behavior of the booking window:\n      - If **true**, the window is rolling. This means the number of available days will always be equal the specified 'value' \n        and adjust dynamically as bookings are made. For example, if 'value' is 3 and availability is only on Mondays, \n        a booker attempting to schedule on November 10 will see slots on November 11, 18, and 25. As one of these days \n        becomes fully booked, a new day (e.g., December 2) will open up to ensure 3 available days are always visible.\n      - If **false**, the window is fixed. This means the booking window only considers the next 'value' days from the\n        moment someone is trying to book. For example, if 'value' is 3, availability is only on Mondays, and the current \n        date is November 10, the booker will only see slots on November 11 because the window is restricted to the next \n        3 calendar days (November 10\u201312).\n    ",
            examples: [true],
            type: "boolean",
          },
        },
      },
      RangeWindow_2024_06_14: {
        required: ["type", "value"],
        type: "object",
        properties: {
          type: {
            description:
              "Whether the window should be business days, calendar days or a range of dates",
            enum: ["businessDays", "calendarDays", "range"],
            type: "string",
          },
          value: {
            description: "Date range for when this event can be booked.",
            examples: [["2030-09-05", "2030-09-09"]],
            type: "array",
            items: {
              type: "string",
            },
          },
        },
      },
      BookerLayouts_2024_06_14: {
        required: ["defaultLayout", "enabledLayouts"],
        type: "object",
        properties: {
          defaultLayout: {
            enum: ["month", "week", "column"],
            type: "string",
          },
          enabledLayouts: {
            type: "array",
            items: {
              enum: ["month", "week", "column"],
              type: "string",
            },
          },
        },
      },
      BaseConfirmationPolicy_2024_06_14: {
        required: ["type", "blockUnconfirmedBookingsInBooker"],
        type: "object",
        properties: {
          type: {
            description:
              "The policy that determines when confirmation is required",
            enum: ["always", "time"],
            examples: ["always"],
            type: "string",
          },
          noticeThreshold: {
            description:
              "The notice threshold required before confirmation is needed. Required when type is 'time'.",
            allOf: [
              {
                $ref: "#/$defs/NoticeThreshold_2024_06_14",
              },
            ],
          },
          blockUnconfirmedBookingsInBooker: {
            description: "Unconfirmed bookings still block calendar slots.",
            type: "boolean",
          },
        },
      },
      NoticeThreshold_2024_06_14: {
        required: ["unit", "count"],
        type: "object",
        properties: {
          unit: {
            description:
              "The unit of time for the notice threshold (e.g., minutes, hours)",
            examples: ["minutes"],
            type: "string",
          },
          count: {
            description: "The time value for the notice threshold",
            examples: [30],
            type: "number",
          },
        },
      },
      Recurrence_2024_06_14: {
        required: ["interval", "occurrences", "frequency"],
        type: "object",
        properties: {
          interval: {
            description: "Repeats every {count} week | month | year",
            examples: [10],
            type: "number",
          },
          occurrences: {
            description: "Repeats for a maximum of {count} events",
            examples: [10],
            type: "number",
          },
          frequency: {
            enum: ["yearly", "monthly", "weekly"],
            type: "string",
          },
        },
      },
      EventTypeColor_2024_06_14: {
        required: ["lightThemeHex", "darkThemeHex"],
        type: "object",
        properties: {
          lightThemeHex: {
            description: "Color used for event types in light theme",
            examples: ["#292929"],
            type: "string",
          },
          darkThemeHex: {
            description: "Color used for event types in dark theme",
            examples: ["#fafafa"],
            type: "string",
          },
        },
      },
      Seats_2024_06_14: {
        required: [
          "seatsPerTimeSlot",
          "showAttendeeInfo",
          "showAvailabilityCount",
        ],
        type: "object",
        properties: {
          seatsPerTimeSlot: {
            description: "Number of seats available per time slot",
            examples: [4],
            type: "number",
          },
          showAttendeeInfo: {
            description: "Show attendee information to other guests",
            examples: [true],
            type: "boolean",
          },
          showAvailabilityCount: {
            description: "Display the count of available seats",
            examples: [true],
            type: "boolean",
          },
        },
      },
      DestinationCalendar_2024_06_14: {
        required: ["integration", "externalId"],
        type: "object",
        properties: {
          integration: {
            description:
              "The integration type of the destination calendar. Refer to the /api/v2/calendars endpoint to retrieve the integration type of your connected calendars.",
            type: "string",
          },
          externalId: {
            description:
              "The external ID of the destination calendar. Refer to the /api/v2/calendars endpoint to retrieve the external IDs of your connected calendars.",
            type: "string",
          },
        },
      },
      Host: {
        required: ["userId"],
        type: "object",
        properties: {
          userId: {
            description: "Which user is the host of this event",
            type: "number",
          },
          mandatory: {
            description:
              "Only relevant for round robin event types. If true then the user must attend round robin event always.",
            type: "boolean",
          },
          priority: {
            enum: ["lowest", "low", "medium", "high", "highest"],
            type: "string",
          },
        },
      },
      InputAddressLocation_2024_06_14: {
        required: ["type", "address", "public"],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `address`",
            examples: ["address"],
            type: "string",
          },
          address: {
            examples: ["123 Example St, City, Country"],
            type: "string",
          },
          public: {
            type: "boolean",
          },
        },
      },
      InputLinkLocation_2024_06_14: {
        required: ["type", "link", "public"],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `link`",
            examples: ["link"],
            type: "string",
          },
          link: {
            examples: ["https://customvideo.com/join/123456"],
            type: "string",
          },
          public: {
            type: "boolean",
          },
        },
      },
      InputIntegrationLocation_2024_06_14: {
        required: ["type", "integration"],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `integration`",
            examples: ["integration"],
            type: "string",
          },
          integration: {
            enum: ["cal-video", "google-meet", "office365-video", "zoom"],
            examples: ["cal-video"],
            type: "string",
          },
        },
      },
      InputPhoneLocation_2024_06_14: {
        required: ["type", "phone", "public"],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `phone`",
            examples: ["phone"],
            type: "string",
          },
          phone: {
            examples: ["+37120993151"],
            type: "string",
          },
          public: {
            type: "boolean",
          },
        },
      },
      InputAttendeeAddressLocation_2024_06_14: {
        required: ["type"],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `attendeeAddress`",
            examples: ["attendeeAddress"],
            type: "string",
          },
        },
      },
      InputAttendeePhoneLocation_2024_06_14: {
        required: ["type"],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `attendeePhone`",
            examples: ["attendeePhone"],
            type: "string",
          },
        },
      },
      InputAttendeeDefinedLocation_2024_06_14: {
        required: ["type"],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `attendeeDefined`",
            examples: ["attendeeDefined"],
            type: "string",
          },
        },
      },
      InputOrganizersDefaultApp_2024_06_14: {
        required: ["type"],
        type: "object",
        properties: {
          type: {
            description:
              "only allowed value for type is `organizersDefaultApp`",
            examples: ["organizersDefaultApp"],
            type: "string",
          },
        },
      },
    },
  },
  {
    description: "Get an event type",
    method: "get",
    name: "TeamsEventTypesController_getTeamEventType",
    url: "https://api.cal.com/v2/teams/{teamId}/event-types/{eventTypeId}",
    params: [
      {
        in: "path",
        name: "teamId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
      {
        in: "path",
        name: "eventTypeId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
    ],
    defs: {},
  },
  {
    description: "Delete a team event type",
    method: "delete",
    name: "TeamsEventTypesController_deleteTeamEventType",
    url: "https://api.cal.com/v2/teams/{teamId}/event-types/{eventTypeId}",
    params: [
      {
        in: "path",
        name: "teamId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
      {
        in: "path",
        name: "eventTypeId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
    ],
    defs: {},
  },
  {
    description: "Update a team event type",
    method: "patch",
    name: "TeamsEventTypesController_updateTeamEventType",
    url: "https://api.cal.com/v2/teams/{teamId}/event-types/{eventTypeId}",
    params: [
      {
        in: "path",
        name: "teamId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
      {
        in: "path",
        name: "eventTypeId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
    ],
    body: {
      $ref: "#/$defs/UpdateTeamEventTypeInput_2024_06_14",
    },
    contentType: "application/json",
    defs: {
      UpdateTeamEventTypeInput_2024_06_14: {
        type: "object",
        properties: {
          lengthInMinutes: {
            examples: [60],
            type: "number",
          },
          lengthInMinutesOptions: {
            description:
              "If you want that user can choose between different lengths of the event you can specify them here. Must include the provided `lengthInMinutes`.",
            examples: [[15, 30, 60]],
            type: "array",
            items: {
              type: "string",
            },
          },
          title: {
            examples: ["Learn the secrets of masterchief!"],
            type: "string",
          },
          slug: {
            examples: ["learn-the-secrets-of-masterchief"],
            type: "string",
          },
          description: {
            examples: [
              "Discover the culinary wonders of the Argentina by making the best flan ever!",
            ],
            type: "string",
          },
          bookingFields: {
            description:
              "Custom fields that can be added to the booking form when the event is booked by someone. By default booking form has name and email field.",
            type: "array",
            items: {
              anyOf: [
                {
                  $ref: "#/$defs/NameDefaultFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/EmailDefaultFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/TitleDefaultFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/NotesDefaultFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/GuestsDefaultFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/RescheduleReasonDefaultFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/PhoneFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/AddressFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/TextFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/NumberFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/TextAreaFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/SelectFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/MultiSelectFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/MultiEmailFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/CheckboxGroupFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/RadioGroupFieldInput_2024_06_14",
                },
                {
                  $ref: "#/$defs/BooleanFieldInput_2024_06_14",
                },
              ],
              type: "object",
            },
          },
          disableGuests: {
            description:
              "If true, person booking this event can't add guests via their emails.",
            type: "boolean",
          },
          slotInterval: {
            description:
              "Number representing length of each slot when event is booked. By default it equal length of the event type.\n      If event length is 60 minutes then we would have slots 9AM, 10AM, 11AM etc. but if it was changed to 30 minutes then\n      we would have slots 9AM, 9:30AM, 10AM, 10:30AM etc. as the available times to book the 60 minute event.",
            type: "number",
          },
          minimumBookingNotice: {
            description:
              "Minimum number of minutes before the event that a booking can be made.",
            type: "number",
          },
          beforeEventBuffer: {
            description:
              "Time spaces that can be prepended before an event to give more time before it.",
            type: "number",
          },
          afterEventBuffer: {
            description:
              "Time spaces that can be appended after an event to give more time after it.",
            type: "number",
          },
          scheduleId: {
            description:
              "If you want that this event has different schedule than user's default one you can specify it here.",
            type: "number",
          },
          bookingLimitsCount: {
            description: "Limit how many times this event can be booked",
            anyOf: [
              {
                $ref: "#/$defs/BaseBookingLimitsCount_2024_06_14",
              },
              {
                $ref: "#/$defs/Disabled_2024_06_14",
              },
            ],
            type: "object",
          },
          onlyShowFirstAvailableSlot: {
            description:
              "This will limit your availability for this event type to one slot per day, scheduled at the earliest available time.",
            type: "boolean",
          },
          bookingLimitsDuration: {
            description:
              "Limit total amount of time that this event can be booked",
            anyOf: [
              {
                $ref: "#/$defs/BaseBookingLimitsDuration_2024_06_14",
              },
              {
                $ref: "#/$defs/Disabled_2024_06_14",
              },
            ],
            type: "object",
          },
          bookingWindow: {
            description: "Limit how far in the future this event can be booked",
            anyOf: [
              {
                $ref: "#/$defs/BusinessDaysWindow_2024_06_14",
              },
              {
                $ref: "#/$defs/CalendarDaysWindow_2024_06_14",
              },
              {
                $ref: "#/$defs/RangeWindow_2024_06_14",
              },
              {
                $ref: "#/$defs/Disabled_2024_06_14",
              },
            ],
            type: "object",
          },
          offsetStart: {
            description:
              "Offset timeslots shown to bookers by a specified number of minutes",
            type: "number",
          },
          bookerLayouts: {
            description:
              "Should booker have week, month or column view. Specify default layout and enabled layouts user can pick.",
            allOf: [
              {
                $ref: "#/$defs/BookerLayouts_2024_06_14",
              },
            ],
          },
          confirmationPolicy: {
            description:
              "Specify how the booking needs to be manually confirmed before it is pushed to the integrations and a confirmation mail is sent.",
            anyOf: [
              {
                $ref: "#/$defs/BaseConfirmationPolicy_2024_06_14",
              },
              {
                $ref: "#/$defs/Disabled_2024_06_14",
              },
            ],
            type: "object",
          },
          recurrence: {
            description: "Create a recurring event type.",
            anyOf: [
              {
                $ref: "#/$defs/Recurrence_2024_06_14",
              },
              {
                $ref: "#/$defs/Disabled_2024_06_14",
              },
            ],
            type: "object",
          },
          requiresBookerEmailVerification: {
            type: "boolean",
          },
          hideCalendarNotes: {
            type: "boolean",
          },
          lockTimeZoneToggleOnBookingPage: {
            type: "boolean",
          },
          color: {
            $ref: "#/$defs/EventTypeColor_2024_06_14",
          },
          seats: {
            description: "Create an event type with multiple seats.",
            anyOf: [
              {
                $ref: "#/$defs/Seats_2024_06_14",
              },
              {
                $ref: "#/$defs/Disabled_2024_06_14",
              },
            ],
            type: "object",
          },
          customName: {
            description:
              "Customizable event name with valid variables:\n      {Event type title}, {Organiser}, {Scheduler}, {Location}, {Organiser first name},\n      {Scheduler first name}, {Scheduler last name}, {Event duration}, {LOCATION},\n      {HOST/ATTENDEE}, {HOST}, {ATTENDEE}, {USER}",
            examples: [
              "{Event type title} between {Organiser} and {Scheduler}",
            ],
            type: "string",
          },
          destinationCalendar: {
            $ref: "#/$defs/DestinationCalendar_2024_06_14",
          },
          useDestinationCalendarEmail: {
            type: "boolean",
          },
          hideCalendarEventDetails: {
            type: "boolean",
          },
          successRedirectUrl: {
            description:
              "A valid URL where the booker will redirect to, once the booking is completed successfully",
            examples: ["https://masterchief.com/argentina/flan/video/9129412"],
            type: "string",
          },
          hosts: {
            type: "array",
            items: {
              $ref: "#/$defs/Host",
            },
          },
          assignAllTeamMembers: {
            description:
              "If true, all current and future team members will be assigned to this event type",
            type: "boolean",
          },
          locations: {
            description:
              "Locations where the event will take place. If not provided, cal video link will be used as the location.",
            type: "array",
            items: {
              anyOf: [
                {
                  $ref: "#/$defs/InputAddressLocation_2024_06_14",
                },
                {
                  $ref: "#/$defs/InputLinkLocation_2024_06_14",
                },
                {
                  $ref: "#/$defs/InputIntegrationLocation_2024_06_14",
                },
                {
                  $ref: "#/$defs/InputPhoneLocation_2024_06_14",
                },
                {
                  $ref: "#/$defs/InputAttendeeAddressLocation_2024_06_14",
                },
                {
                  $ref: "#/$defs/InputAttendeePhoneLocation_2024_06_14",
                },
                {
                  $ref: "#/$defs/InputAttendeeDefinedLocation_2024_06_14",
                },
                {
                  $ref: "#/$defs/InputOrganizersDefaultApp_2024_06_14",
                },
              ],
              type: "object",
            },
          },
        },
      },
      NameDefaultFieldInput_2024_06_14: {
        required: ["type", "label", "placeholder"],
        type: "object",
        properties: {
          type: {
            description:
              "only allowed value for type is `name`. Used for having 1 booking field for both first name and last name.",
            examples: ["name"],
            type: "string",
          },
          label: {
            type: "string",
          },
          placeholder: {
            type: "string",
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if URL contains query parameter `&name=bob`,      the name field will be prefilled with this value and disabled.",
            type: "boolean",
          },
        },
      },
      EmailDefaultFieldInput_2024_06_14: {
        required: ["type", "label", "required", "placeholder"],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `email`",
            examples: ["email"],
            type: "string",
          },
          label: {
            type: "string",
          },
          required: {
            type: "object",
          },
          placeholder: {
            type: "string",
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if URL contains query parameter `&email=bob@gmail.com`,      the email field will be prefilled with this value and disabled.",
            type: "boolean",
          },
        },
      },
      TitleDefaultFieldInput_2024_06_14: {
        required: ["slug"],
        type: "object",
        properties: {
          slug: {
            description: "only allowed value for type is `title`",
            examples: ["title"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
          label: {
            type: "string",
          },
          placeholder: {
            type: "string",
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if URL contains query parameter `&title=journey`,      the title field will be prefilled with this value and disabled.",
            type: "boolean",
          },
        },
      },
      NotesDefaultFieldInput_2024_06_14: {
        required: ["slug"],
        type: "object",
        properties: {
          slug: {
            description: "only allowed value for type is `notes`",
            examples: ["notes"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
          label: {
            type: "string",
          },
          placeholder: {
            type: "string",
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if URL contains query parameter `&notes=journey`,      the notes field will be prefilled with this value and disabled.",
            type: "boolean",
          },
        },
      },
      GuestsDefaultFieldInput_2024_06_14: {
        required: ["slug"],
        type: "object",
        properties: {
          slug: {
            description: "only allowed value for type is `guests`",
            examples: ["guests"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
          label: {
            type: "string",
          },
          placeholder: {
            type: "string",
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if URL contains query parameter `&guests=bob@cal.com`,      the guests field will be prefilled with this value and disabled.",
            type: "boolean",
          },
        },
      },
      RescheduleReasonDefaultFieldInput_2024_06_14: {
        required: ["slug"],
        type: "object",
        properties: {
          slug: {
            description: "only allowed value for type is `rescheduleReason`",
            examples: ["rescheduleReason"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
          label: {
            type: "string",
          },
          placeholder: {
            type: "string",
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if URL contains query parameter `&rescheduleReason=travel`,      the rescheduleReason field will be prefilled with this value and disabled.",
            type: "boolean",
          },
        },
      },
      PhoneFieldInput_2024_06_14: {
        required: [
          "type",
          "slug",
          "label",
          "required",
          "placeholder",
          "hidden",
        ],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `phone`",
            examples: ["phone"],
            type: "string",
          },
          slug: {
            description:
              "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            examples: ["some-slug"],
            type: "string",
          },
          label: {
            type: "string",
          },
          required: {
            type: "boolean",
          },
          placeholder: {
            type: "string",
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `phone` and the URL contains query parameter `&phone=1234567890`,      the phone field will be prefilled with this value and disabled.",
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
        },
      },
      AddressFieldInput_2024_06_14: {
        required: [
          "type",
          "slug",
          "label",
          "required",
          "placeholder",
          "hidden",
        ],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `address`",
            examples: ["address"],
            type: "string",
          },
          slug: {
            description:
              "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            examples: ["some-slug"],
            type: "string",
          },
          label: {
            examples: ["Please enter your address"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          placeholder: {
            examples: ["e.g., 1234 Main St"],
            type: "string",
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `address` and the URL contains query parameter `&address=1234 Main St, London`,      the address field will be prefilled with this value and disabled.",
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
        },
      },
      TextFieldInput_2024_06_14: {
        required: [
          "type",
          "slug",
          "label",
          "required",
          "placeholder",
          "hidden",
        ],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `text`",
            examples: ["text"],
            type: "string",
          },
          slug: {
            description:
              "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            examples: ["some-slug"],
            type: "string",
          },
          label: {
            examples: ["Please enter your text"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          placeholder: {
            examples: ["e.g., Enter text here"],
            type: "string",
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `who-referred-you` and the URL contains query parameter `&who-referred-you=bob`,      the text field will be prefilled with this value and disabled.",
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
        },
      },
      NumberFieldInput_2024_06_14: {
        required: [
          "type",
          "slug",
          "label",
          "required",
          "placeholder",
          "hidden",
        ],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `number`",
            examples: ["number"],
            type: "string",
          },
          slug: {
            description:
              "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            examples: ["some-slug"],
            type: "string",
          },
          label: {
            examples: ["Please enter a number"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          placeholder: {
            examples: ["e.g., 100"],
            type: "string",
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `calories-per-day` and the URL contains query parameter `&calories-per-day=3000`,      the number field will be prefilled with this value and disabled.",
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
        },
      },
      TextAreaFieldInput_2024_06_14: {
        required: [
          "type",
          "slug",
          "label",
          "required",
          "placeholder",
          "hidden",
        ],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `textarea`",
            examples: ["textarea"],
            type: "string",
          },
          slug: {
            description:
              "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            examples: ["some-slug"],
            type: "string",
          },
          label: {
            examples: ["Please enter detailed information"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          placeholder: {
            examples: ["e.g., Detailed description here..."],
            type: "string",
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `dear-diary` and the URL contains query parameter `&dear-diary=Today I shipped a feature`,      the text area will be prefilled with this value and disabled.",
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
        },
      },
      SelectFieldInput_2024_06_14: {
        required: [
          "type",
          "slug",
          "label",
          "required",
          "placeholder",
          "options",
          "hidden",
        ],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `select`",
            examples: ["select"],
            type: "string",
          },
          slug: {
            description:
              "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            examples: ["some-slug"],
            type: "string",
          },
          label: {
            examples: ["Please select an option"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          placeholder: {
            examples: ["Select..."],
            type: "string",
          },
          options: {
            examples: [["Option 1", "Option 2"]],
            type: "array",
            items: {
              type: "string",
            },
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `language` and options of this select field are ['english', 'italian'] and the URL contains query parameter `&language=italian`,      the 'italian' will be selected and the select field will be disabled.",
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
        },
      },
      MultiSelectFieldInput_2024_06_14: {
        required: ["type", "slug", "label", "required", "options", "hidden"],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `multiselect`",
            examples: ["multiselect"],
            type: "string",
          },
          slug: {
            description:
              "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            examples: ["some-slug"],
            type: "string",
          },
          label: {
            examples: ["Please select multiple options"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          options: {
            examples: [["Option 1", "Option 2"]],
            type: "array",
            items: {
              type: "string",
            },
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `consultants` and the URL contains query parameter `&consultants=en&language=it`,      the 'en' and 'it' will be selected and the select field will be disabled.",
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
        },
      },
      MultiEmailFieldInput_2024_06_14: {
        required: [
          "type",
          "slug",
          "label",
          "required",
          "placeholder",
          "hidden",
        ],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `multiemail`",
            examples: ["multiemail"],
            type: "string",
          },
          slug: {
            description:
              "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            examples: ["some-slug"],
            type: "string",
          },
          label: {
            examples: ["Please enter multiple emails"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          placeholder: {
            examples: ["e.g., example@example.com"],
            type: "string",
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `consultants` and the URL contains query parameter `&consultants=alice@gmail.com&consultants=bob@gmail.com`,      the these emails will be added and none more can be added.",
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
        },
      },
      CheckboxGroupFieldInput_2024_06_14: {
        required: ["type", "slug", "label", "required", "options", "hidden"],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `checkbox`",
            examples: ["checkbox"],
            type: "string",
          },
          slug: {
            description:
              "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            examples: ["some-slug"],
            type: "string",
          },
          label: {
            examples: ["Select all that apply"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          options: {
            examples: [["Checkbox 1", "Checkbox 2"]],
            type: "array",
            items: {
              type: "string",
            },
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `notify-me` and the URL contains query parameter `&notify-me=true`,      the checkbox will be selected and the checkbox field will be disabled.",
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
        },
      },
      RadioGroupFieldInput_2024_06_14: {
        required: ["type", "slug", "label", "required", "options", "hidden"],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `radio`",
            examples: ["radio"],
            type: "string",
          },
          slug: {
            description:
              "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            examples: ["some-slug"],
            type: "string",
          },
          label: {
            examples: ["Select one option"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          options: {
            examples: [["Radio 1", "Radio 2"]],
            type: "array",
            items: {
              type: "string",
            },
          },
          disableOnPrefill: {
            description:
              "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `language` and options of this select field are ['english', 'italian'] and the URL contains query parameter `&language=italian`,      the 'italian' radio button will be selected and the select field will be disabled.",
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
        },
      },
      BooleanFieldInput_2024_06_14: {
        required: ["type", "slug", "label", "required", "hidden"],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `boolean`",
            examples: ["boolean"],
            type: "string",
          },
          slug: {
            description:
              "Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking",
            examples: ["some-slug"],
            type: "string",
          },
          label: {
            examples: ["Agree to terms?"],
            type: "string",
          },
          required: {
            type: "boolean",
          },
          disableOnPrefill: {
            type: "boolean",
          },
          hidden: {
            description:
              "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
            type: "boolean",
          },
        },
      },
      BaseBookingLimitsCount_2024_06_14: {
        type: "object",
        properties: {
          day: {
            description: "The number of bookings per day",
            examples: [1],
            type: "number",
          },
          week: {
            description: "The number of bookings per week",
            examples: [2],
            type: "number",
          },
          month: {
            description: "The number of bookings per month",
            examples: [3],
            type: "number",
          },
          year: {
            description: "The number of bookings per year",
            examples: [4],
            type: "number",
          },
          disabled: {
            default: false,
            type: "boolean",
          },
        },
      },
      Disabled_2024_06_14: {
        required: ["disabled"],
        type: "object",
        properties: {
          disabled: {
            default: false,
            description: "Indicates if the option is disabled",
            examples: [true],
            type: "boolean",
          },
        },
      },
      BaseBookingLimitsDuration_2024_06_14: {
        type: "object",
        properties: {
          day: {
            description:
              "The duration of bookings per day (must be a multiple of 15)",
            examples: [60],
            type: "number",
          },
          week: {
            description:
              "The duration of bookings per week (must be a multiple of 15)",
            examples: [120],
            type: "number",
          },
          month: {
            description:
              "The duration of bookings per month (must be a multiple of 15)",
            examples: [180],
            type: "number",
          },
          year: {
            description:
              "The duration of bookings per year (must be a multiple of 15)",
            examples: [240],
            type: "number",
          },
        },
      },
      BusinessDaysWindow_2024_06_14: {
        required: ["type", "value"],
        type: "object",
        properties: {
          type: {
            description:
              "Whether the window should be business days, calendar days or a range of dates",
            enum: ["businessDays", "calendarDays", "range"],
            type: "string",
          },
          value: {
            description:
              "How many business day into the future can this event be booked",
            examples: [5],
            type: "number",
          },
          rolling: {
            description:
              "\n      Determines the behavior of the booking window:\n      - If **true**, the window is rolling. This means the number of available days will always be equal the specified 'value' \n        and adjust dynamically as bookings are made. For example, if 'value' is 3 and availability is only on Mondays, \n        a booker attempting to schedule on November 10 will see slots on November 11, 18, and 25. As one of these days \n        becomes fully booked, a new day (e.g., December 2) will open up to ensure 3 available days are always visible.\n      - If **false**, the window is fixed. This means the booking window only considers the next 'value' days from the\n        moment someone is trying to book. For example, if 'value' is 3, availability is only on Mondays, and the current \n        date is November 10, the booker will only see slots on November 11 because the window is restricted to the next \n        3 calendar days (November 10\u201312).\n    ",
            examples: [true],
            type: "boolean",
          },
        },
      },
      CalendarDaysWindow_2024_06_14: {
        required: ["type", "value"],
        type: "object",
        properties: {
          type: {
            description:
              "Whether the window should be business days, calendar days or a range of dates",
            enum: ["businessDays", "calendarDays", "range"],
            type: "string",
          },
          value: {
            description:
              "How many calendar days into the future can this event be booked",
            examples: [5],
            type: "number",
          },
          rolling: {
            description:
              "\n      Determines the behavior of the booking window:\n      - If **true**, the window is rolling. This means the number of available days will always be equal the specified 'value' \n        and adjust dynamically as bookings are made. For example, if 'value' is 3 and availability is only on Mondays, \n        a booker attempting to schedule on November 10 will see slots on November 11, 18, and 25. As one of these days \n        becomes fully booked, a new day (e.g., December 2) will open up to ensure 3 available days are always visible.\n      - If **false**, the window is fixed. This means the booking window only considers the next 'value' days from the\n        moment someone is trying to book. For example, if 'value' is 3, availability is only on Mondays, and the current \n        date is November 10, the booker will only see slots on November 11 because the window is restricted to the next \n        3 calendar days (November 10\u201312).\n    ",
            examples: [true],
            type: "boolean",
          },
        },
      },
      RangeWindow_2024_06_14: {
        required: ["type", "value"],
        type: "object",
        properties: {
          type: {
            description:
              "Whether the window should be business days, calendar days or a range of dates",
            enum: ["businessDays", "calendarDays", "range"],
            type: "string",
          },
          value: {
            description: "Date range for when this event can be booked.",
            examples: [["2030-09-05", "2030-09-09"]],
            type: "array",
            items: {
              type: "string",
            },
          },
        },
      },
      BookerLayouts_2024_06_14: {
        required: ["defaultLayout", "enabledLayouts"],
        type: "object",
        properties: {
          defaultLayout: {
            enum: ["month", "week", "column"],
            type: "string",
          },
          enabledLayouts: {
            type: "array",
            items: {
              enum: ["month", "week", "column"],
              type: "string",
            },
          },
        },
      },
      BaseConfirmationPolicy_2024_06_14: {
        required: ["type", "blockUnconfirmedBookingsInBooker"],
        type: "object",
        properties: {
          type: {
            description:
              "The policy that determines when confirmation is required",
            enum: ["always", "time"],
            examples: ["always"],
            type: "string",
          },
          noticeThreshold: {
            description:
              "The notice threshold required before confirmation is needed. Required when type is 'time'.",
            allOf: [
              {
                $ref: "#/$defs/NoticeThreshold_2024_06_14",
              },
            ],
          },
          blockUnconfirmedBookingsInBooker: {
            description: "Unconfirmed bookings still block calendar slots.",
            type: "boolean",
          },
        },
      },
      NoticeThreshold_2024_06_14: {
        required: ["unit", "count"],
        type: "object",
        properties: {
          unit: {
            description:
              "The unit of time for the notice threshold (e.g., minutes, hours)",
            examples: ["minutes"],
            type: "string",
          },
          count: {
            description: "The time value for the notice threshold",
            examples: [30],
            type: "number",
          },
        },
      },
      Recurrence_2024_06_14: {
        required: ["interval", "occurrences", "frequency"],
        type: "object",
        properties: {
          interval: {
            description: "Repeats every {count} week | month | year",
            examples: [10],
            type: "number",
          },
          occurrences: {
            description: "Repeats for a maximum of {count} events",
            examples: [10],
            type: "number",
          },
          frequency: {
            enum: ["yearly", "monthly", "weekly"],
            type: "string",
          },
        },
      },
      EventTypeColor_2024_06_14: {
        required: ["lightThemeHex", "darkThemeHex"],
        type: "object",
        properties: {
          lightThemeHex: {
            description: "Color used for event types in light theme",
            examples: ["#292929"],
            type: "string",
          },
          darkThemeHex: {
            description: "Color used for event types in dark theme",
            examples: ["#fafafa"],
            type: "string",
          },
        },
      },
      Seats_2024_06_14: {
        required: [
          "seatsPerTimeSlot",
          "showAttendeeInfo",
          "showAvailabilityCount",
        ],
        type: "object",
        properties: {
          seatsPerTimeSlot: {
            description: "Number of seats available per time slot",
            examples: [4],
            type: "number",
          },
          showAttendeeInfo: {
            description: "Show attendee information to other guests",
            examples: [true],
            type: "boolean",
          },
          showAvailabilityCount: {
            description: "Display the count of available seats",
            examples: [true],
            type: "boolean",
          },
        },
      },
      DestinationCalendar_2024_06_14: {
        required: ["integration", "externalId"],
        type: "object",
        properties: {
          integration: {
            description:
              "The integration type of the destination calendar. Refer to the /api/v2/calendars endpoint to retrieve the integration type of your connected calendars.",
            type: "string",
          },
          externalId: {
            description:
              "The external ID of the destination calendar. Refer to the /api/v2/calendars endpoint to retrieve the external IDs of your connected calendars.",
            type: "string",
          },
        },
      },
      Host: {
        required: ["userId"],
        type: "object",
        properties: {
          userId: {
            description: "Which user is the host of this event",
            type: "number",
          },
          mandatory: {
            description:
              "Only relevant for round robin event types. If true then the user must attend round robin event always.",
            type: "boolean",
          },
          priority: {
            enum: ["lowest", "low", "medium", "high", "highest"],
            type: "string",
          },
        },
      },
      InputAddressLocation_2024_06_14: {
        required: ["type", "address", "public"],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `address`",
            examples: ["address"],
            type: "string",
          },
          address: {
            examples: ["123 Example St, City, Country"],
            type: "string",
          },
          public: {
            type: "boolean",
          },
        },
      },
      InputLinkLocation_2024_06_14: {
        required: ["type", "link", "public"],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `link`",
            examples: ["link"],
            type: "string",
          },
          link: {
            examples: ["https://customvideo.com/join/123456"],
            type: "string",
          },
          public: {
            type: "boolean",
          },
        },
      },
      InputIntegrationLocation_2024_06_14: {
        required: ["type", "integration"],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `integration`",
            examples: ["integration"],
            type: "string",
          },
          integration: {
            enum: ["cal-video", "google-meet", "office365-video", "zoom"],
            examples: ["cal-video"],
            type: "string",
          },
        },
      },
      InputPhoneLocation_2024_06_14: {
        required: ["type", "phone", "public"],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `phone`",
            examples: ["phone"],
            type: "string",
          },
          phone: {
            examples: ["+37120993151"],
            type: "string",
          },
          public: {
            type: "boolean",
          },
        },
      },
      InputAttendeeAddressLocation_2024_06_14: {
        required: ["type"],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `attendeeAddress`",
            examples: ["attendeeAddress"],
            type: "string",
          },
        },
      },
      InputAttendeePhoneLocation_2024_06_14: {
        required: ["type"],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `attendeePhone`",
            examples: ["attendeePhone"],
            type: "string",
          },
        },
      },
      InputAttendeeDefinedLocation_2024_06_14: {
        required: ["type"],
        type: "object",
        properties: {
          type: {
            description: "only allowed value for type is `attendeeDefined`",
            examples: ["attendeeDefined"],
            type: "string",
          },
        },
      },
      InputOrganizersDefaultApp_2024_06_14: {
        required: ["type"],
        type: "object",
        properties: {
          type: {
            description:
              "only allowed value for type is `organizersDefaultApp`",
            examples: ["organizersDefaultApp"],
            type: "string",
          },
        },
      },
    },
  },
  {
    description: "Create a phone call",
    method: "post",
    name: "TeamsEventTypesController_createPhoneCall",
    url: "https://api.cal.com/v2/teams/{teamId}/event-types/{eventTypeId}/create-phone-call",
    params: [
      {
        in: "path",
        name: "eventTypeId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
      {
        in: "path",
        name: "orgId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
    ],
    body: {
      $ref: "#/$defs/CreatePhoneCallInput",
    },
    contentType: "application/json",
    defs: {
      CreatePhoneCallInput: {
        required: [
          "yourPhoneNumber",
          "numberToCall",
          "calApiKey",
          "enabled",
          "templateType",
        ],
        type: "object",
        properties: {
          yourPhoneNumber: {
            description: "Your phone number",
            pattern: "/^\\+[1-9]\\d{1,14}$/",
            type: "string",
          },
          numberToCall: {
            description: "Number to call",
            pattern: "/^\\+[1-9]\\d{1,14}$/",
            type: "string",
          },
          calApiKey: {
            description: "CAL API Key",
            type: "string",
          },
          enabled: {
            default: true,
            description: "Enabled status",
            type: "object",
          },
          templateType: {
            default: "CUSTOM_TEMPLATE",
            description: "Template type",
            enum: ["CHECK_IN_APPOINTMENT", "CUSTOM_TEMPLATE"],
            type: "string",
          },
          schedulerName: {
            description: "Scheduler name",
            type: "string",
          },
          guestName: {
            description: "Guest name",
            type: "string",
          },
          guestEmail: {
            description: "Guest email",
            type: "string",
          },
          guestCompany: {
            description: "Guest company",
            type: "string",
          },
          beginMessage: {
            description: "Begin message",
            type: "string",
          },
          generalPrompt: {
            description: "General prompt",
            type: "string",
          },
        },
      },
    },
  },
  {
    description: "Get all memberships",
    method: "get",
    name: "TeamsMembershipsController_getTeamMemberships",
    url: "https://api.cal.com/v2/teams/{teamId}/memberships",
    params: [
      {
        in: "path",
        name: "teamId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
      {
        description: "The number of items to return",
        in: "query",
        name: "take",
        required: false,
        example: 10,
        explode: true,
        schema: {
          type: "number",
        },
        style: "form",
      },
      {
        description: "The number of items to skip",
        in: "query",
        name: "skip",
        required: false,
        example: 0,
        explode: true,
        schema: {
          type: "number",
        },
        style: "form",
      },
    ],
    defs: {},
  },
  {
    description: "Create a membership",
    method: "post",
    name: "TeamsMembershipsController_createTeamMembership",
    url: "https://api.cal.com/v2/teams/{teamId}/memberships",
    params: [
      {
        in: "path",
        name: "teamId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
    ],
    body: {
      $ref: "#/$defs/CreateTeamMembershipInput",
    },
    contentType: "application/json",
    defs: {
      CreateTeamMembershipInput: {
        required: ["userId"],
        type: "object",
        properties: {
          userId: {
            type: "number",
          },
          accepted: {
            default: false,
            type: "boolean",
          },
          role: {
            default: "MEMBER",
            enum: ["MEMBER", "OWNER", "ADMIN"],
            type: "string",
          },
          disableImpersonation: {
            default: false,
            type: "boolean",
          },
        },
      },
    },
  },
  {
    description: "Get a membership",
    method: "get",
    name: "TeamsMembershipsController_getTeamMembership",
    url: "https://api.cal.com/v2/teams/{teamId}/memberships/{membershipId}",
    params: [
      {
        in: "path",
        name: "teamId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
      {
        in: "path",
        name: "membershipId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
    ],
    defs: {},
  },
  {
    description: "Delete a membership",
    method: "delete",
    name: "TeamsMembershipsController_deleteTeamMembership",
    url: "https://api.cal.com/v2/teams/{teamId}/memberships/{membershipId}",
    params: [
      {
        in: "path",
        name: "teamId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
      {
        in: "path",
        name: "membershipId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
    ],
    defs: {},
  },
  {
    description: "Create a membership",
    method: "patch",
    name: "TeamsMembershipsController_updateTeamMembership",
    url: "https://api.cal.com/v2/teams/{teamId}/memberships/{membershipId}",
    params: [
      {
        in: "path",
        name: "teamId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
      {
        in: "path",
        name: "membershipId",
        required: true,
        explode: false,
        schema: {
          type: "number",
        },
        style: "simple",
      },
    ],
    body: {
      $ref: "#/$defs/UpdateTeamMembershipInput",
    },
    contentType: "application/json",
    defs: {
      UpdateTeamMembershipInput: {
        type: "object",
        properties: {
          accepted: {
            type: "boolean",
          },
          role: {
            enum: ["MEMBER", "OWNER", "ADMIN"],
            type: "string",
          },
          disableImpersonation: {
            type: "boolean",
          },
        },
      },
    },
  },
  {
    description: "Get all timezones",
    method: "get",
    name: "TimezonesController_getTimeZones",
    url: "https://api.cal.com/v2/timezones",
    defs: {},
  },
  {
    description:
      "Gets a paginated list of webhooks for the authenticated user.",
    method: "get",
    name: "WebhooksController_getWebhooks",
    url: "https://api.cal.com/v2/webhooks",
    params: [
      {
        description: "The number of items to return",
        in: "query",
        name: "take",
        required: false,
        example: 10,
        explode: true,
        schema: {
          type: "number",
        },
        style: "form",
      },
      {
        description: "The number of items to skip",
        in: "query",
        name: "skip",
        required: false,
        example: 0,
        explode: true,
        schema: {
          type: "number",
        },
        style: "form",
      },
    ],
    defs: {},
  },
  {
    description: "Create a webhook",
    method: "post",
    name: "WebhooksController_createWebhook",
    url: "https://api.cal.com/v2/webhooks",
    body: {
      $ref: "#/$defs/CreateWebhookInputDto",
    },
    contentType: "application/json",
    defs: {
      CreateWebhookInputDto: {
        required: ["active", "subscriberUrl", "triggers"],
        type: "object",
        properties: {
          payloadTemplate: {
            description:
              "The template of the payload that will be sent to the subscriberUrl, check cal.com/docs/core-features/webhooks for more information",
            examples: [
              '{"content":"A new event has been scheduled","type":"{{type}}","name":"{{title}}","organizer":"{{organizer.name}}","booker":"{{attendees.0.name}}"}',
            ],
            type: "string",
          },
          active: {
            type: "boolean",
          },
          subscriberUrl: {
            type: "string",
          },
          triggers: {
            enum: [
              "BOOKING_CREATED",
              "BOOKING_PAYMENT_INITIATED",
              "BOOKING_PAID",
              "BOOKING_RESCHEDULED",
              "BOOKING_REQUESTED",
              "BOOKING_CANCELLED",
              "BOOKING_REJECTED",
              "BOOKING_NO_SHOW_UPDATED",
              "FORM_SUBMITTED",
              "MEETING_ENDED",
              "MEETING_STARTED",
              "RECORDING_READY",
              "INSTANT_MEETING",
              "RECORDING_TRANSCRIPTION_GENERATED",
              "OOO_CREATED",
              "AFTER_HOSTS_CAL_VIDEO_NO_SHOW",
              "AFTER_GUESTS_CAL_VIDEO_NO_SHOW",
              "FORM_SUBMITTED_NO_EVENT",
            ],
            examples: [
              [
                "BOOKING_CREATED",
                "BOOKING_RESCHEDULED",
                "BOOKING_CANCELLED",
                "BOOKING_CONFIRMED",
                "BOOKING_REJECTED",
                "BOOKING_COMPLETED",
                "BOOKING_NO_SHOW",
                "BOOKING_REOPENED",
              ],
            ],
            type: "string",
          },
          secret: {
            type: "string",
          },
        },
      },
    },
  },
  {
    description: "Get a webhook",
    method: "get",
    name: "WebhooksController_getWebhook",
    url: "https://api.cal.com/v2/webhooks/{webhookId}",
    defs: {},
  },
  {
    description: "Delete a webhook",
    method: "delete",
    name: "WebhooksController_deleteWebhook",
    url: "https://api.cal.com/v2/webhooks/{webhookId}",
    params: [
      {
        in: "path",
        name: "webhookId",
        required: true,
        explode: false,
        schema: {
          type: "string",
        },
        style: "simple",
      },
    ],
    defs: {},
  },
  {
    description: "Update a webhook",
    method: "patch",
    name: "WebhooksController_updateWebhook",
    url: "https://api.cal.com/v2/webhooks/{webhookId}",
    params: [
      {
        in: "path",
        name: "webhookId",
        required: true,
        explode: false,
        schema: {
          type: "string",
        },
        style: "simple",
      },
    ],
    body: {
      $ref: "#/$defs/UpdateWebhookInputDto",
    },
    contentType: "application/json",
    defs: {
      UpdateWebhookInputDto: {
        type: "object",
        properties: {
          payloadTemplate: {
            description:
              "The template of the payload that will be sent to the subscriberUrl, check cal.com/docs/core-features/webhooks for more information",
            examples: [
              '{"content":"A new event has been scheduled","type":"{{type}}","name":"{{title}}","organizer":"{{organizer.name}}","booker":"{{attendees.0.name}}"}',
            ],
            type: "string",
          },
          active: {
            type: "boolean",
          },
          subscriberUrl: {
            type: "string",
          },
          triggers: {
            enum: [
              "BOOKING_CREATED",
              "BOOKING_PAYMENT_INITIATED",
              "BOOKING_PAID",
              "BOOKING_RESCHEDULED",
              "BOOKING_REQUESTED",
              "BOOKING_CANCELLED",
              "BOOKING_REJECTED",
              "BOOKING_NO_SHOW_UPDATED",
              "FORM_SUBMITTED",
              "MEETING_ENDED",
              "MEETING_STARTED",
              "RECORDING_READY",
              "INSTANT_MEETING",
              "RECORDING_TRANSCRIPTION_GENERATED",
              "OOO_CREATED",
              "AFTER_HOSTS_CAL_VIDEO_NO_SHOW",
              "AFTER_GUESTS_CAL_VIDEO_NO_SHOW",
              "FORM_SUBMITTED_NO_EVENT",
            ],
            examples: [
              [
                "BOOKING_CREATED",
                "BOOKING_RESCHEDULED",
                "BOOKING_CANCELLED",
                "BOOKING_CONFIRMED",
                "BOOKING_REJECTED",
                "BOOKING_COMPLETED",
                "BOOKING_NO_SHOW",
                "BOOKING_REOPENED",
              ],
            ],
            type: "string",
          },
          secret: {
            type: "string",
          },
        },
      },
    },
  },
];
