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

*Defined in [src/generated/api.ts:5478](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L5478)*

Date time of event creation

**`memberof`** WebhookEmailOpenedPayload

___

### eventName

• `Optional` **eventName**: [EventNameEnum](../enums/webhookemailopenedpayload.eventnameenum.md)

*Defined in [src/generated/api.ts:5484](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L5484)*

Name of the event type webhook is being triggered for.

**`memberof`** WebhookEmailOpenedPayload

___

### inboxId

• `Optional` **inboxId**: string

*Defined in [src/generated/api.ts:5490](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L5490)*

Id of the inbox that received an email

**`memberof`** WebhookEmailOpenedPayload

___

### messageId

• `Optional` **messageId**: string

*Defined in [src/generated/api.ts:5496](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L5496)*

Idempotent message ID. Store this ID locally or in a database to prevent message duplication.

**`memberof`** WebhookEmailOpenedPayload

___

### pixelId

• `Optional` **pixelId**: string

*Defined in [src/generated/api.ts:5502](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L5502)*

ID of the tracking pixel

**`memberof`** WebhookEmailOpenedPayload

___

### recipient

• `Optional` **recipient**: string

*Defined in [src/generated/api.ts:5508](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L5508)*

Email address for the recipient of the tracking pixel

**`memberof`** WebhookEmailOpenedPayload

___

### sentEmailId

• `Optional` **sentEmailId**: string

*Defined in [src/generated/api.ts:5514](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L5514)*

ID of sent email

**`memberof`** WebhookEmailOpenedPayload

___

### webhookId

• `Optional` **webhookId**: string

*Defined in [src/generated/api.ts:5520](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L5520)*

ID of webhook entity being triggered

**`memberof`** WebhookEmailOpenedPayload

___

### webhookName

• `Optional` **webhookName**: string

*Defined in [src/generated/api.ts:5526](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L5526)*

Name of the webhook being triggered

**`memberof`** WebhookEmailOpenedPayload
