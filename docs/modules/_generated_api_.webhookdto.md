# Module: WebhookDto

**`export`** 

**`namespace`** WebhookDto

## Properties

### `Optional` basicAuth

• **basicAuth**? : *boolean*

*Defined in [src/generated/api.ts:2603](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L2603)*

Does webhook expect basic authentication? If true it means you created this webhook with a username and password. MailSlurp will use these in the URL to authenticate itself.

**`type`** {boolean}

**`memberof`** WebhookDto

___

### `Optional` createdAt

• **createdAt**? : *Date*

*Defined in [src/generated/api.ts:2609](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L2609)*

When the webhook was created

**`type`** {Date}

**`memberof`** WebhookDto

___

### `Optional` id

• **id**? : *string*

*Defined in [src/generated/api.ts:2615](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L2615)*

ID of the Webhook

**`type`** {string}

**`memberof`** WebhookDto

___

### `Optional` inboxId

• **inboxId**? : *string*

*Defined in [src/generated/api.ts:2621](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L2621)*

The inbox that the Webhook will be triggered by

**`type`** {string}

**`memberof`** WebhookDto

___

### `Optional` method

• **method**? : *[MethodEnum](../enums/_generated_api_.webhookdto.methodenum.md)*

*Defined in [src/generated/api.ts:2627](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L2627)*

HTTP method that your server endpoint must listen for

**`type`** {string}

**`memberof`** WebhookDto

___

### `Optional` name

• **name**? : *string*

*Defined in [src/generated/api.ts:2633](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L2633)*

Name of the webhook

**`type`** {string}

**`memberof`** WebhookDto

___

### `Optional` payloadJsonSchema

• **payloadJsonSchema**? : *string*

*Defined in [src/generated/api.ts:2639](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L2639)*

JSON Schema for the payload that will be sent to your URL via the HTTP method described.

**`type`** {string}

**`memberof`** WebhookDto

___

###  updatedAt

• **updatedAt**: *Date*

*Defined in [src/generated/api.ts:2645](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L2645)*

**`type`** {Date}

**`memberof`** WebhookDto

___

### `Optional` url

• **url**? : *string*

*Defined in [src/generated/api.ts:2651](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L2651)*

URL of your server that the webhook will be sent to. The schema of the JSON that is sent is described by the payloadJsonSchema.

**`type`** {string}

**`memberof`** WebhookDto
