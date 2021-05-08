**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / WebhookPayload

# Namespace: WebhookPayload

**`export`** 

**`namespace`** WebhookPayload

## Index

### Enumerations

* [EventNameEnum](../enums/webhookpayload.eventnameenum.md)

### Properties

* [attachmentMetaDatas](webhookpayload.md#attachmentmetadatas)
* [bcc](webhookpayload.md#bcc)
* [cc](webhookpayload.md#cc)
* [createdAt](webhookpayload.md#createdat)
* [emailId](webhookpayload.md#emailid)
* [eventName](webhookpayload.md#eventname)
* [from](webhookpayload.md#from)
* [inboxId](webhookpayload.md#inboxid)
* [messageId](webhookpayload.md#messageid)
* [subject](webhookpayload.md#subject)
* [to](webhookpayload.md#to)
* [webhookId](webhookpayload.md#webhookid)
* [webhookName](webhookpayload.md#webhookname)

## Properties

### attachmentMetaDatas

• `Optional` **attachmentMetaDatas**: Array\<[AttachmentMetaData](../interfaces/attachmentmetadata.md)>

*Defined in [src/generated/api.ts:4564](https://github.com/mailslurp/mailslurp-client/blob/c83a162/src/generated/api.ts#L4564)*

List of attachment meta data objects if attachments present

**`memberof`** WebhookPayload

___

### bcc

• `Optional` **bcc**: Array\<string>

*Defined in [src/generated/api.ts:4570](https://github.com/mailslurp/mailslurp-client/blob/c83a162/src/generated/api.ts#L4570)*

List of `BCC` recipients email was addressed to

**`memberof`** WebhookPayload

___

### cc

• `Optional` **cc**: Array\<string>

*Defined in [src/generated/api.ts:4576](https://github.com/mailslurp/mailslurp-client/blob/c83a162/src/generated/api.ts#L4576)*

List of `CC` recipients email was addressed to

**`memberof`** WebhookPayload

___

### createdAt

• `Optional` **createdAt**: Date

*Defined in [src/generated/api.ts:4582](https://github.com/mailslurp/mailslurp-client/blob/c83a162/src/generated/api.ts#L4582)*

Date time of event creation

**`memberof`** WebhookPayload

___

### emailId

• `Optional` **emailId**: string

*Defined in [src/generated/api.ts:4588](https://github.com/mailslurp/mailslurp-client/blob/c83a162/src/generated/api.ts#L4588)*

ID of the email that was received. Use this ID for fetching the email

**`memberof`** WebhookPayload

___

### eventName

• `Optional` **eventName**: [EventNameEnum](../enums/webhookpayload.eventnameenum.md)

*Defined in [src/generated/api.ts:4594](https://github.com/mailslurp/mailslurp-client/blob/c83a162/src/generated/api.ts#L4594)*

Name of the event type webhook is being triggered for

**`memberof`** WebhookPayload

___

### from

• `Optional` **from**: string

*Defined in [src/generated/api.ts:4600](https://github.com/mailslurp/mailslurp-client/blob/c83a162/src/generated/api.ts#L4600)*

Who the email was sent from

**`memberof`** WebhookPayload

___

### inboxId

• `Optional` **inboxId**: string

*Defined in [src/generated/api.ts:4606](https://github.com/mailslurp/mailslurp-client/blob/c83a162/src/generated/api.ts#L4606)*

Id of the inbox that receive an email

**`memberof`** WebhookPayload

___

### messageId

• `Optional` **messageId**: string

*Defined in [src/generated/api.ts:4612](https://github.com/mailslurp/mailslurp-client/blob/c83a162/src/generated/api.ts#L4612)*

Idempotent message ID. Store this ID locally or in a database to prevent message duplication.

**`memberof`** WebhookPayload

___

### subject

• `Optional` **subject**: string

*Defined in [src/generated/api.ts:4618](https://github.com/mailslurp/mailslurp-client/blob/c83a162/src/generated/api.ts#L4618)*

The subject line of the email message

**`memberof`** WebhookPayload

___

### to

• `Optional` **to**: Array\<string>

*Defined in [src/generated/api.ts:4624](https://github.com/mailslurp/mailslurp-client/blob/c83a162/src/generated/api.ts#L4624)*

List of `To` recipients that email was addressed to

**`memberof`** WebhookPayload

___

### webhookId

• `Optional` **webhookId**: string

*Defined in [src/generated/api.ts:4630](https://github.com/mailslurp/mailslurp-client/blob/c83a162/src/generated/api.ts#L4630)*

ID of webhook entity being triggered

**`memberof`** WebhookPayload

___

### webhookName

• `Optional` **webhookName**: string

*Defined in [src/generated/api.ts:4636](https://github.com/mailslurp/mailslurp-client/blob/c83a162/src/generated/api.ts#L4636)*

Name of the webhook being triggered

**`memberof`** WebhookPayload
