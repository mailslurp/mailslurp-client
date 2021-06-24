**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / WebhookDto

# Namespace: WebhookDto

**`export`** 

**`namespace`** WebhookDto

## Index

### Enumerations

* [EventNameEnum](../enums/webhookdto.eventnameenum.md)
* [MethodEnum](../enums/webhookdto.methodenum.md)

### Properties

* [basicAuth](webhookdto.md#basicauth)
* [createdAt](webhookdto.md#createdat)
* [eventName](webhookdto.md#eventname)
* [id](webhookdto.md#id)
* [inboxId](webhookdto.md#inboxid)
* [method](webhookdto.md#method)
* [name](webhookdto.md#name)
* [payloadJsonSchema](webhookdto.md#payloadjsonschema)
* [updatedAt](webhookdto.md#updatedat)
* [url](webhookdto.md#url)
* [userId](webhookdto.md#userid)

## Properties

### basicAuth

• `Optional` **basicAuth**: boolean

*Defined in [src/generated/api.ts:5149](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L5149)*

Does webhook expect basic authentication? If true it means you created this webhook with a username and password. MailSlurp will use these in the URL to authenticate itself.

**`memberof`** WebhookDto

___

### createdAt

• `Optional` **createdAt**: Date

*Defined in [src/generated/api.ts:5155](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L5155)*

When the webhook was created

**`memberof`** WebhookDto

___

### eventName

• `Optional` **eventName**: [EventNameEnum](../enums/webhookdto.eventnameenum.md)

*Defined in [src/generated/api.ts:5161](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L5161)*

**`memberof`** WebhookDto

___

### id

• `Optional` **id**: string

*Defined in [src/generated/api.ts:5167](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L5167)*

ID of the Webhook

**`memberof`** WebhookDto

___

### inboxId

• `Optional` **inboxId**: string

*Defined in [src/generated/api.ts:5173](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L5173)*

The inbox that the Webhook will be triggered by

**`memberof`** WebhookDto

___

### method

• `Optional` **method**: [MethodEnum](../enums/webhookdto.methodenum.md)

*Defined in [src/generated/api.ts:5179](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L5179)*

HTTP method that your server endpoint must listen for

**`memberof`** WebhookDto

___

### name

• `Optional` **name**: string

*Defined in [src/generated/api.ts:5185](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L5185)*

Name of the webhook

**`memberof`** WebhookDto

___

### payloadJsonSchema

• `Optional` **payloadJsonSchema**: string

*Defined in [src/generated/api.ts:5191](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L5191)*

JSON Schema for the payload that will be sent to your URL via the HTTP method described.

**`memberof`** WebhookDto

___

### updatedAt

•  **updatedAt**: Date

*Defined in [src/generated/api.ts:5197](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L5197)*

**`memberof`** WebhookDto

___

### url

• `Optional` **url**: string

*Defined in [src/generated/api.ts:5203](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L5203)*

URL of your server that the webhook will be sent to. The schema of the JSON that is sent is described by the payloadJsonSchema.

**`memberof`** WebhookDto

___

### userId

• `Optional` **userId**: string

*Defined in [src/generated/api.ts:5209](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L5209)*

User ID of the Webhook

**`memberof`** WebhookDto
