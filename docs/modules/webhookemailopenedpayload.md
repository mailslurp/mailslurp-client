**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / WebhookEmailOpenedPayload

# Namespace: WebhookEmailOpenedPayload

**`export`** 

**`namespace`** WebhookEmailOpenedPayload

## Index

### Enumerations

* [EventNameEnum](../enums/webhookemailopenedpayload.eventnameenum.md)

### Properties

* [createdAt](webhookemailopenedpayload.md#createdat)
* [eventName](webhookemailopenedpayload.md#eventname)
* [inboxId](webhookemailopenedpayload.md#inboxid)
* [messageId](webhookemailopenedpayload.md#messageid)
* [pixelId](webhookemailopenedpayload.md#pixelid)
* [recipient](webhookemailopenedpayload.md#recipient)
* [sentEmailId](webhookemailopenedpayload.md#sentemailid)
* [webhookId](webhookemailopenedpayload.md#webhookid)
* [webhookName](webhookemailopenedpayload.md#webhookname)

## Properties

### createdAt

• `Optional` **createdAt**: Date

*Defined in [src/generated/api.ts:6029](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L6029)*

Date time of event creation

**`memberof`** WebhookEmailOpenedPayload

___

### eventName

• `Optional` **eventName**: [EventNameEnum](../enums/webhookemailopenedpayload.eventnameenum.md)

*Defined in [src/generated/api.ts:6035](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L6035)*

Name of the event type webhook is being triggered for.

**`memberof`** WebhookEmailOpenedPayload

___

### inboxId

• `Optional` **inboxId**: string

*Defined in [src/generated/api.ts:6041](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L6041)*

Id of the inbox that received an email

**`memberof`** WebhookEmailOpenedPayload

___

### messageId

• `Optional` **messageId**: string

*Defined in [src/generated/api.ts:6047](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L6047)*

Idempotent message ID. Store this ID locally or in a database to prevent message duplication.

**`memberof`** WebhookEmailOpenedPayload

___

### pixelId

• `Optional` **pixelId**: string

*Defined in [src/generated/api.ts:6053](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L6053)*

ID of the tracking pixel

**`memberof`** WebhookEmailOpenedPayload

___

### recipient

• `Optional` **recipient**: string

*Defined in [src/generated/api.ts:6059](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L6059)*

Email address for the recipient of the tracking pixel

**`memberof`** WebhookEmailOpenedPayload

___

### sentEmailId

• `Optional` **sentEmailId**: string

*Defined in [src/generated/api.ts:6065](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L6065)*

ID of sent email

**`memberof`** WebhookEmailOpenedPayload

___

### webhookId

• `Optional` **webhookId**: string

*Defined in [src/generated/api.ts:6071](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L6071)*

ID of webhook entity being triggered

**`memberof`** WebhookEmailOpenedPayload

___

### webhookName

• `Optional` **webhookName**: string

*Defined in [src/generated/api.ts:6077](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L6077)*

Name of the webhook being triggered

**`memberof`** WebhookEmailOpenedPayload
