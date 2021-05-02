**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / WebhookDto

# Namespace: WebhookDto

**`export`** 

**`namespace`** WebhookDto

## Index

### Enumerations

* [MethodEnum](../enums/webhookdto.methodenum.md)

### Properties

* [basicAuth](webhookdto.md#basicauth)
* [createdAt](webhookdto.md#createdat)
* [id](webhookdto.md#id)
* [inboxId](webhookdto.md#inboxid)
* [method](webhookdto.md#method)
* [name](webhookdto.md#name)
* [payloadJsonSchema](webhookdto.md#payloadjsonschema)
* [updatedAt](webhookdto.md#updatedat)
* [url](webhookdto.md#url)

## Properties

### basicAuth

• `Optional` **basicAuth**: boolean

*Defined in [src/generated/api.ts:4351](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L4351)*

Does webhook expect basic authentication? If true it means you created this webhook with a username and password. MailSlurp will use these in the URL to authenticate itself.

**`memberof`** WebhookDto

___

### createdAt

• `Optional` **createdAt**: Date

*Defined in [src/generated/api.ts:4357](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L4357)*

When the webhook was created

**`memberof`** WebhookDto

___

### id

• `Optional` **id**: string

*Defined in [src/generated/api.ts:4363](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L4363)*

ID of the Webhook

**`memberof`** WebhookDto

___

### inboxId

• `Optional` **inboxId**: string

*Defined in [src/generated/api.ts:4369](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L4369)*

The inbox that the Webhook will be triggered by

**`memberof`** WebhookDto

___

### method

• `Optional` **method**: [MethodEnum](../enums/webhookdto.methodenum.md)

*Defined in [src/generated/api.ts:4375](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L4375)*

HTTP method that your server endpoint must listen for

**`memberof`** WebhookDto

___

### name

• `Optional` **name**: string

*Defined in [src/generated/api.ts:4381](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L4381)*

Name of the webhook

**`memberof`** WebhookDto

___

### payloadJsonSchema

• `Optional` **payloadJsonSchema**: string

*Defined in [src/generated/api.ts:4387](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L4387)*

JSON Schema for the payload that will be sent to your URL via the HTTP method described.

**`memberof`** WebhookDto

___

### updatedAt

•  **updatedAt**: Date

*Defined in [src/generated/api.ts:4393](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L4393)*

**`memberof`** WebhookDto

___

### url

• `Optional` **url**: string

*Defined in [src/generated/api.ts:4399](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L4399)*

URL of your server that the webhook will be sent to. The schema of the JSON that is sent is described by the payloadJsonSchema.

**`memberof`** WebhookDto
