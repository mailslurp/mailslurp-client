[MailSlurp JS](../README.md) › [Globals](../globals.md) › ["lib/models/WebhookDto"](../modules/_lib_models_webhookdto_.md) › [WebhookDto](_lib_models_webhookdto_.webhookdto.md)

# Interface: WebhookDto

Representation of a webhook for an inbox. The URL specified will be using by MailSlurp whenever an email is received by the attached inbox.

**`export`** 

**`interface`** WebhookDto

## Hierarchy

* **WebhookDto**

## Index

### Properties

* [basicAuth](_lib_models_webhookdto_.webhookdto.md#optional-basicauth)
* [createdAt](_lib_models_webhookdto_.webhookdto.md#optional-createdat)
* [id](_lib_models_webhookdto_.webhookdto.md#optional-id)
* [inboxId](_lib_models_webhookdto_.webhookdto.md#optional-inboxid)
* [method](_lib_models_webhookdto_.webhookdto.md#optional-method)
* [name](_lib_models_webhookdto_.webhookdto.md#optional-name)
* [payloadJsonSchema](_lib_models_webhookdto_.webhookdto.md#optional-payloadjsonschema)
* [updatedAt](_lib_models_webhookdto_.webhookdto.md#updatedat)
* [url](_lib_models_webhookdto_.webhookdto.md#optional-url)

## Properties

### `Optional` basicAuth

• **basicAuth**? : *boolean*

*Defined in [src/lib/models/WebhookDto.ts:27](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/WebhookDto.ts#L27)*

Does webhook expect basic authentication? If true it means you created this webhook with a username and password. MailSlurp will use these in the URL to authenticate itself.

**`type`** {boolean}

**`memberof`** WebhookDto

___

### `Optional` createdAt

• **createdAt**? : *Date*

*Defined in [src/lib/models/WebhookDto.ts:33](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/WebhookDto.ts#L33)*

When the webhook was created

**`type`** {Date}

**`memberof`** WebhookDto

___

### `Optional` id

• **id**? : *string*

*Defined in [src/lib/models/WebhookDto.ts:39](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/WebhookDto.ts#L39)*

ID of the Webhook

**`type`** {string}

**`memberof`** WebhookDto

___

### `Optional` inboxId

• **inboxId**? : *string*

*Defined in [src/lib/models/WebhookDto.ts:45](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/WebhookDto.ts#L45)*

The inbox that the Webhook will be triggered by

**`type`** {string}

**`memberof`** WebhookDto

___

### `Optional` method

• **method**? : *[WebhookDtoMethodEnum](../enums/_lib_models_webhookdto_.webhookdtomethodenum.md)*

*Defined in [src/lib/models/WebhookDto.ts:51](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/WebhookDto.ts#L51)*

HTTP method that your server endpoint must listen for

**`type`** {string}

**`memberof`** WebhookDto

___

### `Optional` name

• **name**? : *string*

*Defined in [src/lib/models/WebhookDto.ts:57](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/WebhookDto.ts#L57)*

Name of the webhook

**`type`** {string}

**`memberof`** WebhookDto

___

### `Optional` payloadJsonSchema

• **payloadJsonSchema**? : *string*

*Defined in [src/lib/models/WebhookDto.ts:63](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/WebhookDto.ts#L63)*

JSON Schema for the payload that will be sent to your URL via the HTTP method described.

**`type`** {string}

**`memberof`** WebhookDto

___

###  updatedAt

• **updatedAt**: *Date*

*Defined in [src/lib/models/WebhookDto.ts:69](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/WebhookDto.ts#L69)*

**`type`** {Date}

**`memberof`** WebhookDto

___

### `Optional` url

• **url**? : *string*

*Defined in [src/lib/models/WebhookDto.ts:75](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/WebhookDto.ts#L75)*

URL of your server that the webhook will be sent to. The schema of the JSON that is sent is described by the payloadJsonSchema.

**`type`** {string}

**`memberof`** WebhookDto
