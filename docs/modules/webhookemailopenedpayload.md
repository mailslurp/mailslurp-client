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

*Defined in [src/generated/api.ts:6151](https://github.com/mailslurp/mailslurp-client/blob/cce5bf2/src/generated/api.ts#L6151)*

Date time of event creation

**`memberof`** WebhookEmailOpenedPayload

___

### eventName

• `Optional` **eventName**: [EventNameEnum](../enums/webhookemailopenedpayload.eventnameenum.md)

*Defined in [src/generated/api.ts:6157](https://github.com/mailslurp/mailslurp-client/blob/cce5bf2/src/generated/api.ts#L6157)*

Name of the event type webhook is being triggered for.

**`memberof`** WebhookEmailOpenedPayload

___

### inboxId

• `Optional` **inboxId**: string

*Defined in [src/generated/api.ts:6163](https://github.com/mailslurp/mailslurp-client/blob/cce5bf2/src/generated/api.ts#L6163)*

Id of the inbox that received an email

**`memberof`** WebhookEmailOpenedPayload

___

### messageId

• `Optional` **messageId**: string

*Defined in [src/generated/api.ts:6169](https://github.com/mailslurp/mailslurp-client/blob/cce5bf2/src/generated/api.ts#L6169)*

Idempotent message ID. Store this ID locally or in a database to prevent message duplication.

**`memberof`** WebhookEmailOpenedPayload

___

### pixelId

• `Optional` **pixelId**: string

*Defined in [src/generated/api.ts:6175](https://github.com/mailslurp/mailslurp-client/blob/cce5bf2/src/generated/api.ts#L6175)*

ID of the tracking pixel

**`memberof`** WebhookEmailOpenedPayload

___

### recipient

• `Optional` **recipient**: string

*Defined in [src/generated/api.ts:6181](https://github.com/mailslurp/mailslurp-client/blob/cce5bf2/src/generated/api.ts#L6181)*

Email address for the recipient of the tracking pixel

**`memberof`** WebhookEmailOpenedPayload

___

### sentEmailId

• `Optional` **sentEmailId**: string

*Defined in [src/generated/api.ts:6187](https://github.com/mailslurp/mailslurp-client/blob/cce5bf2/src/generated/api.ts#L6187)*

ID of sent email

**`memberof`** WebhookEmailOpenedPayload

___

### webhookId

• `Optional` **webhookId**: string

*Defined in [src/generated/api.ts:6193](https://github.com/mailslurp/mailslurp-client/blob/cce5bf2/src/generated/api.ts#L6193)*

ID of webhook entity being triggered

**`memberof`** WebhookEmailOpenedPayload

___

### webhookName

• `Optional` **webhookName**: string

*Defined in [src/generated/api.ts:6199](https://github.com/mailslurp/mailslurp-client/blob/cce5bf2/src/generated/api.ts#L6199)*

Name of the webhook being triggered

**`memberof`** WebhookEmailOpenedPayload
