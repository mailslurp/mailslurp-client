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

*Defined in [src/generated/api.ts:2865](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L2865)*

Does webhook expect basic authentication? If true it means you created this webhook with a username and password. MailSlurp will use these in the URL to authenticate itself.

**`memberof`** WebhookDto

___

### createdAt

• `Optional` **createdAt**: Date

*Defined in [src/generated/api.ts:2871](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L2871)*

When the webhook was created

**`memberof`** WebhookDto

___

### id

• `Optional` **id**: string

*Defined in [src/generated/api.ts:2877](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L2877)*

ID of the Webhook

**`memberof`** WebhookDto

___

### inboxId

• `Optional` **inboxId**: string

*Defined in [src/generated/api.ts:2883](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L2883)*

The inbox that the Webhook will be triggered by

**`memberof`** WebhookDto

___

### method

• `Optional` **method**: [MethodEnum](../enums/webhookdto.methodenum.md)

*Defined in [src/generated/api.ts:2889](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L2889)*

HTTP method that your server endpoint must listen for

**`memberof`** WebhookDto

___

### name

• `Optional` **name**: string

*Defined in [src/generated/api.ts:2895](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L2895)*

Name of the webhook

**`memberof`** WebhookDto

___

### payloadJsonSchema

• `Optional` **payloadJsonSchema**: string

*Defined in [src/generated/api.ts:2901](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L2901)*

JSON Schema for the payload that will be sent to your URL via the HTTP method described.

**`memberof`** WebhookDto

___

### updatedAt

•  **updatedAt**: Date

*Defined in [src/generated/api.ts:2907](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L2907)*

**`memberof`** WebhookDto

___

### url

• `Optional` **url**: string

*Defined in [src/generated/api.ts:2913](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L2913)*

URL of your server that the webhook will be sent to. The schema of the JSON that is sent is described by the payloadJsonSchema.

**`memberof`** WebhookDto
