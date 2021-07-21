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

*Defined in [src/generated/api.ts:6055](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L6055)*

Date time of event creation

**`memberof`** WebhookEmailOpenedPayload

___

### eventName

• `Optional` **eventName**: [EventNameEnum](../enums/webhookemailopenedpayload.eventnameenum.md)

*Defined in [src/generated/api.ts:6061](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L6061)*

Name of the event type webhook is being triggered for.

**`memberof`** WebhookEmailOpenedPayload

___

### inboxId

• `Optional` **inboxId**: string

*Defined in [src/generated/api.ts:6067](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L6067)*

Id of the inbox that received an email

**`memberof`** WebhookEmailOpenedPayload

___

### messageId

• `Optional` **messageId**: string

*Defined in [src/generated/api.ts:6073](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L6073)*

Idempotent message ID. Store this ID locally or in a database to prevent message duplication.

**`memberof`** WebhookEmailOpenedPayload

___

### pixelId

• `Optional` **pixelId**: string

*Defined in [src/generated/api.ts:6079](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L6079)*

ID of the tracking pixel

**`memberof`** WebhookEmailOpenedPayload

___

### recipient

• `Optional` **recipient**: string

*Defined in [src/generated/api.ts:6085](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L6085)*

Email address for the recipient of the tracking pixel

**`memberof`** WebhookEmailOpenedPayload

___

### sentEmailId

• `Optional` **sentEmailId**: string

*Defined in [src/generated/api.ts:6091](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L6091)*

ID of sent email

**`memberof`** WebhookEmailOpenedPayload

___

### webhookId

• `Optional` **webhookId**: string

*Defined in [src/generated/api.ts:6097](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L6097)*

ID of webhook entity being triggered

**`memberof`** WebhookEmailOpenedPayload

___

### webhookName

• `Optional` **webhookName**: string

*Defined in [src/generated/api.ts:6103](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L6103)*

Name of the webhook being triggered

**`memberof`** WebhookEmailOpenedPayload
