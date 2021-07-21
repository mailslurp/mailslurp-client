**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / WebhookNewEmailPayload

# Namespace: WebhookNewEmailPayload

**`export`** 

**`namespace`** WebhookNewEmailPayload

## Index

### Enumerations

* [EventNameEnum](../enums/webhooknewemailpayload.eventnameenum.md)

### Properties

* [attachmentMetaDatas](webhooknewemailpayload.md#attachmentmetadatas)
* [bcc](webhooknewemailpayload.md#bcc)
* [cc](webhooknewemailpayload.md#cc)
* [createdAt](webhooknewemailpayload.md#createdat)
* [emailId](webhooknewemailpayload.md#emailid)
* [eventName](webhooknewemailpayload.md#eventname)
* [from](webhooknewemailpayload.md#from)
* [inboxId](webhooknewemailpayload.md#inboxid)
* [messageId](webhooknewemailpayload.md#messageid)
* [subject](webhooknewemailpayload.md#subject)
* [to](webhooknewemailpayload.md#to)
* [webhookId](webhooknewemailpayload.md#webhookid)
* [webhookName](webhooknewemailpayload.md#webhookname)

## Properties

### attachmentMetaDatas

• `Optional` **attachmentMetaDatas**: Array\<[AttachmentMetaData](../interfaces/attachmentmetadata.md)>

*Defined in [src/generated/api.ts:6299](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L6299)*

List of attachment meta data objects if attachments present

**`memberof`** WebhookNewEmailPayload

___

### bcc

• `Optional` **bcc**: Array\<string>

*Defined in [src/generated/api.ts:6305](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L6305)*

List of `BCC` recipients email was addressed to

**`memberof`** WebhookNewEmailPayload

___

### cc

• `Optional` **cc**: Array\<string>

*Defined in [src/generated/api.ts:6311](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L6311)*

List of `CC` recipients email was addressed to

**`memberof`** WebhookNewEmailPayload

___

### createdAt

• `Optional` **createdAt**: Date

*Defined in [src/generated/api.ts:6317](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L6317)*

Date time of event creation

**`memberof`** WebhookNewEmailPayload

___

### emailId

• `Optional` **emailId**: string

*Defined in [src/generated/api.ts:6323](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L6323)*

ID of the email that was received. Use this ID for fetching the email with the `EmailController`.

**`memberof`** WebhookNewEmailPayload

___

### eventName

• `Optional` **eventName**: [EventNameEnum](../enums/webhooknewemailpayload.eventnameenum.md)

*Defined in [src/generated/api.ts:6329](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L6329)*

Name of the event type webhook is being triggered for.

**`memberof`** WebhookNewEmailPayload

___

### from

• `Optional` **from**: string

*Defined in [src/generated/api.ts:6335](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L6335)*

Who the email was sent from

**`memberof`** WebhookNewEmailPayload

___

### inboxId

• `Optional` **inboxId**: string

*Defined in [src/generated/api.ts:6341](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L6341)*

Id of the inbox that received an email

**`memberof`** WebhookNewEmailPayload

___

### messageId

• `Optional` **messageId**: string

*Defined in [src/generated/api.ts:6347](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L6347)*

Idempotent message ID. Store this ID locally or in a database to prevent message duplication.

**`memberof`** WebhookNewEmailPayload

___

### subject

• `Optional` **subject**: string

*Defined in [src/generated/api.ts:6353](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L6353)*

The subject line of the email message

**`memberof`** WebhookNewEmailPayload

___

### to

• `Optional` **to**: Array\<string>

*Defined in [src/generated/api.ts:6359](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L6359)*

List of `To` recipients that email was addressed to

**`memberof`** WebhookNewEmailPayload

___

### webhookId

• `Optional` **webhookId**: string

*Defined in [src/generated/api.ts:6365](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L6365)*

ID of webhook entity being triggered

**`memberof`** WebhookNewEmailPayload

___

### webhookName

• `Optional` **webhookName**: string

*Defined in [src/generated/api.ts:6371](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L6371)*

Name of the webhook being triggered

**`memberof`** WebhookNewEmailPayload
