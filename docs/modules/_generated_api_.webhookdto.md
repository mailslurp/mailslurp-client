# Module: WebhookDto

**`export`** 

**`namespace`** WebhookDto

## Properties

### `Optional` basicAuth

• **basicAuth**? : *boolean*

*Defined in [src/generated/api.ts:2446](https://github.com/mailslurp/mailslurp-client-ts-js/blob/507ad2d/src/generated/api.ts#L2446)*

Does webhook expect basic authentication? If true it means you created this webhook with a username and password. MailSlurp will use these in the URL to authenticate itself.

**`type`** {boolean}

**`memberof`** WebhookDto

___

### `Optional` createdAt

• **createdAt**? : *Date*

*Defined in [src/generated/api.ts:2452](https://github.com/mailslurp/mailslurp-client-ts-js/blob/507ad2d/src/generated/api.ts#L2452)*

When the webhook was created

**`type`** {Date}

**`memberof`** WebhookDto

___

### `Optional` id

• **id**? : *string*

*Defined in [src/generated/api.ts:2458](https://github.com/mailslurp/mailslurp-client-ts-js/blob/507ad2d/src/generated/api.ts#L2458)*

ID of the Webhook

**`type`** {string}

**`memberof`** WebhookDto

___

### `Optional` inboxId

• **inboxId**? : *string*

*Defined in [src/generated/api.ts:2464](https://github.com/mailslurp/mailslurp-client-ts-js/blob/507ad2d/src/generated/api.ts#L2464)*

The inbox that the Webhook will be triggered by

**`type`** {string}

**`memberof`** WebhookDto

___

### `Optional` method

• **method**? : *[MethodEnum](../enums/_generated_api_.webhookdto.methodenum.md)*

*Defined in [src/generated/api.ts:2470](https://github.com/mailslurp/mailslurp-client-ts-js/blob/507ad2d/src/generated/api.ts#L2470)*

HTTP method that your server endpoint must listen for

**`type`** {string}

**`memberof`** WebhookDto

___

### `Optional` name

• **name**? : *string*

*Defined in [src/generated/api.ts:2476](https://github.com/mailslurp/mailslurp-client-ts-js/blob/507ad2d/src/generated/api.ts#L2476)*

Name of the webhook

**`type`** {string}

**`memberof`** WebhookDto

___

### `Optional` payloadJsonSchema

• **payloadJsonSchema**? : *string*

*Defined in [src/generated/api.ts:2482](https://github.com/mailslurp/mailslurp-client-ts-js/blob/507ad2d/src/generated/api.ts#L2482)*

JSON Schema for the payload that will be sent to your URL via the HTTP method described.

**`type`** {string}

**`memberof`** WebhookDto

___

###  updatedAt

• **updatedAt**: *Date*

*Defined in [src/generated/api.ts:2488](https://github.com/mailslurp/mailslurp-client-ts-js/blob/507ad2d/src/generated/api.ts#L2488)*

**`type`** {Date}

**`memberof`** WebhookDto

___

### `Optional` url

• **url**? : *string*

*Defined in [src/generated/api.ts:2494](https://github.com/mailslurp/mailslurp-client-ts-js/blob/507ad2d/src/generated/api.ts#L2494)*

URL of your server that the webhook will be sent to. The schema of the JSON that is sent is described by the payloadJsonSchema.

**`type`** {string}

**`memberof`** WebhookDto
