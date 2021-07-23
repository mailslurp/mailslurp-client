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

*Defined in [src/generated/api.ts:6111](https://github.com/mailslurp/mailslurp-client/blob/c5e5f20/src/generated/api.ts#L6111)*

Date time of event creation

**`memberof`** WebhookEmailOpenedPayload

___

### eventName

• `Optional` **eventName**: [EventNameEnum](../enums/webhookemailopenedpayload.eventnameenum.md)

*Defined in [src/generated/api.ts:6117](https://github.com/mailslurp/mailslurp-client/blob/c5e5f20/src/generated/api.ts#L6117)*

Name of the event type webhook is being triggered for.

**`memberof`** WebhookEmailOpenedPayload

___

### inboxId

• `Optional` **inboxId**: string

*Defined in [src/generated/api.ts:6123](https://github.com/mailslurp/mailslurp-client/blob/c5e5f20/src/generated/api.ts#L6123)*

Id of the inbox that received an email

**`memberof`** WebhookEmailOpenedPayload

___

### messageId

• `Optional` **messageId**: string

*Defined in [src/generated/api.ts:6129](https://github.com/mailslurp/mailslurp-client/blob/c5e5f20/src/generated/api.ts#L6129)*

Idempotent message ID. Store this ID locally or in a database to prevent message duplication.

**`memberof`** WebhookEmailOpenedPayload

___

### pixelId

• `Optional` **pixelId**: string

*Defined in [src/generated/api.ts:6135](https://github.com/mailslurp/mailslurp-client/blob/c5e5f20/src/generated/api.ts#L6135)*

ID of the tracking pixel

**`memberof`** WebhookEmailOpenedPayload

___

### recipient

• `Optional` **recipient**: string

*Defined in [src/generated/api.ts:6141](https://github.com/mailslurp/mailslurp-client/blob/c5e5f20/src/generated/api.ts#L6141)*

Email address for the recipient of the tracking pixel

**`memberof`** WebhookEmailOpenedPayload

___

### sentEmailId

• `Optional` **sentEmailId**: string

*Defined in [src/generated/api.ts:6147](https://github.com/mailslurp/mailslurp-client/blob/c5e5f20/src/generated/api.ts#L6147)*

ID of sent email

**`memberof`** WebhookEmailOpenedPayload

___

### webhookId

• `Optional` **webhookId**: string

*Defined in [src/generated/api.ts:6153](https://github.com/mailslurp/mailslurp-client/blob/c5e5f20/src/generated/api.ts#L6153)*

ID of webhook entity being triggered

**`memberof`** WebhookEmailOpenedPayload

___

### webhookName

• `Optional` **webhookName**: string

*Defined in [src/generated/api.ts:6159](https://github.com/mailslurp/mailslurp-client/blob/c5e5f20/src/generated/api.ts#L6159)*

Name of the webhook being triggered

**`memberof`** WebhookEmailOpenedPayload
