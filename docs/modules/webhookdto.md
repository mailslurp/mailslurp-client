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

## Properties

### basicAuth

• `Optional` **basicAuth**: boolean

*Defined in [src/generated/api.ts:4721](https://github.com/mailslurp/mailslurp-client/blob/6b679b8/src/generated/api.ts#L4721)*

Does webhook expect basic authentication? If true it means you created this webhook with a username and password. MailSlurp will use these in the URL to authenticate itself.

**`memberof`** WebhookDto

___

### createdAt

• `Optional` **createdAt**: Date

*Defined in [src/generated/api.ts:4727](https://github.com/mailslurp/mailslurp-client/blob/6b679b8/src/generated/api.ts#L4727)*

When the webhook was created

**`memberof`** WebhookDto

___

### eventName

• `Optional` **eventName**: [EventNameEnum](../enums/webhookdto.eventnameenum.md)

*Defined in [src/generated/api.ts:4733](https://github.com/mailslurp/mailslurp-client/blob/6b679b8/src/generated/api.ts#L4733)*

**`memberof`** WebhookDto

___

### id

• `Optional` **id**: string

*Defined in [src/generated/api.ts:4739](https://github.com/mailslurp/mailslurp-client/blob/6b679b8/src/generated/api.ts#L4739)*

ID of the Webhook

**`memberof`** WebhookDto

___

### inboxId

• `Optional` **inboxId**: string

*Defined in [src/generated/api.ts:4745](https://github.com/mailslurp/mailslurp-client/blob/6b679b8/src/generated/api.ts#L4745)*

The inbox that the Webhook will be triggered by

**`memberof`** WebhookDto

___

### method

• `Optional` **method**: [MethodEnum](../enums/webhookdto.methodenum.md)

*Defined in [src/generated/api.ts:4751](https://github.com/mailslurp/mailslurp-client/blob/6b679b8/src/generated/api.ts#L4751)*

HTTP method that your server endpoint must listen for

**`memberof`** WebhookDto

___

### name

• `Optional` **name**: string

*Defined in [src/generated/api.ts:4757](https://github.com/mailslurp/mailslurp-client/blob/6b679b8/src/generated/api.ts#L4757)*

Name of the webhook

**`memberof`** WebhookDto

___

### payloadJsonSchema

• `Optional` **payloadJsonSchema**: string

*Defined in [src/generated/api.ts:4763](https://github.com/mailslurp/mailslurp-client/blob/6b679b8/src/generated/api.ts#L4763)*

JSON Schema for the payload that will be sent to your URL via the HTTP method described.

**`memberof`** WebhookDto

___

### updatedAt

•  **updatedAt**: Date

*Defined in [src/generated/api.ts:4769](https://github.com/mailslurp/mailslurp-client/blob/6b679b8/src/generated/api.ts#L4769)*

**`memberof`** WebhookDto

___

### url

• `Optional` **url**: string

*Defined in [src/generated/api.ts:4775](https://github.com/mailslurp/mailslurp-client/blob/6b679b8/src/generated/api.ts#L4775)*

URL of your server that the webhook will be sent to. The schema of the JSON that is sent is described by the payloadJsonSchema.

**`memberof`** WebhookDto
