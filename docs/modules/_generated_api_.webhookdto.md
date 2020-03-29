[MailSlurp JS](../README.md) › [Globals](../globals.md) › ["generated/api"](_generated_api_.md) › [WebhookDto](_generated_api_.webhookdto.md)

# Module: WebhookDto

**`export`** 

**`namespace`** WebhookDto

## Index

### Enumerations

* [MethodEnum](../enums/_generated_api_.webhookdto.methodenum.md)

### Properties

* [basicAuth](_generated_api_.webhookdto.md#optional-basicauth)
* [createdAt](_generated_api_.webhookdto.md#optional-createdat)
* [id](_generated_api_.webhookdto.md#optional-id)
* [inboxId](_generated_api_.webhookdto.md#optional-inboxid)
* [method](_generated_api_.webhookdto.md#optional-method)
* [name](_generated_api_.webhookdto.md#optional-name)
* [payloadJsonSchema](_generated_api_.webhookdto.md#optional-payloadjsonschema)
* [updatedAt](_generated_api_.webhookdto.md#updatedat)
* [url](_generated_api_.webhookdto.md#optional-url)

## Properties

### `Optional` basicAuth

• **basicAuth**? : *boolean*

Defined in src/generated/api.ts:2270

Does webhook expect basic authentication? If true it means you created this webhook with a username and password. MailSlurp will use these in the URL to authenticate itself.

**`type`** {boolean}

**`memberof`** WebhookDto

___

### `Optional` createdAt

• **createdAt**? : *Date*

Defined in src/generated/api.ts:2276

When the webhook was created

**`type`** {Date}

**`memberof`** WebhookDto

___

### `Optional` id

• **id**? : *string*

Defined in src/generated/api.ts:2282

ID of the Webhook

**`type`** {string}

**`memberof`** WebhookDto

___

### `Optional` inboxId

• **inboxId**? : *string*

Defined in src/generated/api.ts:2288

The inbox that the Webhook will be triggered by

**`type`** {string}

**`memberof`** WebhookDto

___

### `Optional` method

• **method**? : *[MethodEnum](../enums/_generated_api_.webhookdto.methodenum.md)*

Defined in src/generated/api.ts:2294

HTTP method that your server endpoint must listen for

**`type`** {string}

**`memberof`** WebhookDto

___

### `Optional` name

• **name**? : *string*

Defined in src/generated/api.ts:2300

Name of the webhook

**`type`** {string}

**`memberof`** WebhookDto

___

### `Optional` payloadJsonSchema

• **payloadJsonSchema**? : *string*

Defined in src/generated/api.ts:2306

JSON Schema for the payload that will be sent to your URL via the HTTP method described.

**`type`** {string}

**`memberof`** WebhookDto

___

###  updatedAt

• **updatedAt**: *Date*

Defined in src/generated/api.ts:2312

**`type`** {Date}

**`memberof`** WebhookDto

___

### `Optional` url

• **url**? : *string*

Defined in src/generated/api.ts:2318

URL of your server that the webhook will be sent to. The schema of the JSON that is sent is described by the payloadJsonSchema.

**`type`** {string}

**`memberof`** WebhookDto
