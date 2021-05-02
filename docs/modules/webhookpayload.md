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

*Defined in [src/generated/api.ts:4434](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L4434)*

List of attachment meta data objects if attachments present

**`memberof`** WebhookPayload

___

### bcc

• `Optional` **bcc**: Array\<string>

*Defined in [src/generated/api.ts:4440](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L4440)*

List of `BCC` recipients email was addressed to

**`memberof`** WebhookPayload

___

### cc

• `Optional` **cc**: Array\<string>

*Defined in [src/generated/api.ts:4446](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L4446)*

List of `CC` recipients email was addressed to

**`memberof`** WebhookPayload

___

### createdAt

• `Optional` **createdAt**: Date

*Defined in [src/generated/api.ts:4452](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L4452)*

Date time of event creation

**`memberof`** WebhookPayload

___

### emailId

• `Optional` **emailId**: string

*Defined in [src/generated/api.ts:4458](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L4458)*

ID of the email that was received. Use this ID for fetching the email

**`memberof`** WebhookPayload

___

### eventName

• `Optional` **eventName**: [EventNameEnum](../enums/webhookpayload.eventnameenum.md)

*Defined in [src/generated/api.ts:4464](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L4464)*

Name of the event type webhook is being triggered for

**`memberof`** WebhookPayload

___

### from

• `Optional` **from**: string

*Defined in [src/generated/api.ts:4470](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L4470)*

Who the email was sent from

**`memberof`** WebhookPayload

___

### inboxId

• `Optional` **inboxId**: string

*Defined in [src/generated/api.ts:4476](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L4476)*

Id of the inbox that receive an email

**`memberof`** WebhookPayload

___

### messageId

• `Optional` **messageId**: string

*Defined in [src/generated/api.ts:4482](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L4482)*

Idempotent message ID. Store this ID locally or in a database to prevent message duplication.

**`memberof`** WebhookPayload

___

### subject

• `Optional` **subject**: string

*Defined in [src/generated/api.ts:4488](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L4488)*

The subject line of the email message

**`memberof`** WebhookPayload

___

### to

• `Optional` **to**: Array\<string>

*Defined in [src/generated/api.ts:4494](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L4494)*

List of `To` recipients that email was addressed to

**`memberof`** WebhookPayload

___

### webhookId

• `Optional` **webhookId**: string

*Defined in [src/generated/api.ts:4500](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L4500)*

ID of webhook entity being triggered

**`memberof`** WebhookPayload

___

### webhookName

• `Optional` **webhookName**: string

*Defined in [src/generated/api.ts:4506](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L4506)*

Name of the webhook being triggered

**`memberof`** WebhookPayload
