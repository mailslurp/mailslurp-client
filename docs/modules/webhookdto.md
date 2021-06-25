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

*Defined in [src/generated/api.ts:5152](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L5152)*

Does webhook expect basic authentication? If true it means you created this webhook with a username and password. MailSlurp will use these in the URL to authenticate itself.

**`memberof`** WebhookDto

___

### createdAt

• `Optional` **createdAt**: Date

*Defined in [src/generated/api.ts:5158](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L5158)*

When the webhook was created

**`memberof`** WebhookDto

___

### eventName

• `Optional` **eventName**: [EventNameEnum](../enums/webhookdto.eventnameenum.md)

*Defined in [src/generated/api.ts:5164](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L5164)*

**`memberof`** WebhookDto

___

### id

• `Optional` **id**: string

*Defined in [src/generated/api.ts:5170](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L5170)*

ID of the Webhook

**`memberof`** WebhookDto

___

### inboxId

• `Optional` **inboxId**: string

*Defined in [src/generated/api.ts:5176](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L5176)*

The inbox that the Webhook will be triggered by

**`memberof`** WebhookDto

___

### method

• `Optional` **method**: [MethodEnum](../enums/webhookdto.methodenum.md)

*Defined in [src/generated/api.ts:5182](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L5182)*

HTTP method that your server endpoint must listen for

**`memberof`** WebhookDto

___

### name

• `Optional` **name**: string

*Defined in [src/generated/api.ts:5188](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L5188)*

Name of the webhook

**`memberof`** WebhookDto

___

### payloadJsonSchema

• `Optional` **payloadJsonSchema**: string

*Defined in [src/generated/api.ts:5194](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L5194)*

JSON Schema for the payload that will be sent to your URL via the HTTP method described.

**`memberof`** WebhookDto

___

### updatedAt

•  **updatedAt**: Date

*Defined in [src/generated/api.ts:5200](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L5200)*

**`memberof`** WebhookDto

___

### url

• `Optional` **url**: string

*Defined in [src/generated/api.ts:5206](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L5206)*

URL of your server that the webhook will be sent to. The schema of the JSON that is sent is described by the payloadJsonSchema.

**`memberof`** WebhookDto

___

### userId

• `Optional` **userId**: string

*Defined in [src/generated/api.ts:5212](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L5212)*

User ID of the Webhook

**`memberof`** WebhookDto
