# Module: WebhookDto

**`export`** 

**`namespace`** WebhookDto

## Properties

### `Optional` basicAuth

• **basicAuth**? : *boolean*

*Defined in [src/generated/api.ts:2434](https://github.com/mailslurp/mailslurp-client-ts-js/blob/6b83217/src/generated/api.ts#L2434)*

Does webhook expect basic authentication? If true it means you created this webhook with a username and password. MailSlurp will use these in the URL to authenticate itself.

**`type`** {boolean}

**`memberof`** WebhookDto

___

### `Optional` createdAt

• **createdAt**? : *Date*

*Defined in [src/generated/api.ts:2440](https://github.com/mailslurp/mailslurp-client-ts-js/blob/6b83217/src/generated/api.ts#L2440)*

When the webhook was created

**`type`** {Date}

**`memberof`** WebhookDto

___

### `Optional` id

• **id**? : *string*

*Defined in [src/generated/api.ts:2446](https://github.com/mailslurp/mailslurp-client-ts-js/blob/6b83217/src/generated/api.ts#L2446)*

ID of the Webhook

**`type`** {string}

**`memberof`** WebhookDto

___

### `Optional` inboxId

• **inboxId**? : *string*

*Defined in [src/generated/api.ts:2452](https://github.com/mailslurp/mailslurp-client-ts-js/blob/6b83217/src/generated/api.ts#L2452)*

The inbox that the Webhook will be triggered by

**`type`** {string}

**`memberof`** WebhookDto

___

### `Optional` method

• **method**? : *[MethodEnum](../enums/_generated_api_.webhookdto.methodenum.md)*

*Defined in [src/generated/api.ts:2458](https://github.com/mailslurp/mailslurp-client-ts-js/blob/6b83217/src/generated/api.ts#L2458)*

HTTP method that your server endpoint must listen for

**`type`** {string}

**`memberof`** WebhookDto

___

### `Optional` name

• **name**? : *string*

*Defined in [src/generated/api.ts:2464](https://github.com/mailslurp/mailslurp-client-ts-js/blob/6b83217/src/generated/api.ts#L2464)*

Name of the webhook

**`type`** {string}

**`memberof`** WebhookDto

___

### `Optional` payloadJsonSchema

• **payloadJsonSchema**? : *string*

*Defined in [src/generated/api.ts:2470](https://github.com/mailslurp/mailslurp-client-ts-js/blob/6b83217/src/generated/api.ts#L2470)*

JSON Schema for the payload that will be sent to your URL via the HTTP method described.

**`type`** {string}

**`memberof`** WebhookDto

___

###  updatedAt

• **updatedAt**: *Date*

*Defined in [src/generated/api.ts:2476](https://github.com/mailslurp/mailslurp-client-ts-js/blob/6b83217/src/generated/api.ts#L2476)*

**`type`** {Date}

**`memberof`** WebhookDto

___

### `Optional` url

• **url**? : *string*

*Defined in [src/generated/api.ts:2482](https://github.com/mailslurp/mailslurp-client-ts-js/blob/6b83217/src/generated/api.ts#L2482)*

URL of your server that the webhook will be sent to. The schema of the JSON that is sent is described by the payloadJsonSchema.

**`type`** {string}

**`memberof`** WebhookDto
