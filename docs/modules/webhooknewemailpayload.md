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

*Defined in [src/generated/api.ts:6325](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L6325)*

List of attachment meta data objects if attachments present

**`memberof`** WebhookNewEmailPayload

___

### bcc

• `Optional` **bcc**: Array\<string>

*Defined in [src/generated/api.ts:6331](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L6331)*

List of `BCC` recipients email was addressed to

**`memberof`** WebhookNewEmailPayload

___

### cc

• `Optional` **cc**: Array\<string>

*Defined in [src/generated/api.ts:6337](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L6337)*

List of `CC` recipients email was addressed to

**`memberof`** WebhookNewEmailPayload

___

### createdAt

• `Optional` **createdAt**: Date

*Defined in [src/generated/api.ts:6343](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L6343)*

Date time of event creation

**`memberof`** WebhookNewEmailPayload

___

### emailId

• `Optional` **emailId**: string

*Defined in [src/generated/api.ts:6349](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L6349)*

ID of the email that was received. Use this ID for fetching the email with the `EmailController`.

**`memberof`** WebhookNewEmailPayload

___

### eventName

• `Optional` **eventName**: [EventNameEnum](../enums/webhooknewemailpayload.eventnameenum.md)

*Defined in [src/generated/api.ts:6355](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L6355)*

Name of the event type webhook is being triggered for.

**`memberof`** WebhookNewEmailPayload

___

### from

• `Optional` **from**: string

*Defined in [src/generated/api.ts:6361](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L6361)*

Who the email was sent from

**`memberof`** WebhookNewEmailPayload

___

### inboxId

• `Optional` **inboxId**: string

*Defined in [src/generated/api.ts:6367](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L6367)*

Id of the inbox that received an email

**`memberof`** WebhookNewEmailPayload

___

### messageId

• `Optional` **messageId**: string

*Defined in [src/generated/api.ts:6373](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L6373)*

Idempotent message ID. Store this ID locally or in a database to prevent message duplication.

**`memberof`** WebhookNewEmailPayload

___

### subject

• `Optional` **subject**: string

*Defined in [src/generated/api.ts:6379](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L6379)*

The subject line of the email message

**`memberof`** WebhookNewEmailPayload

___

### to

• `Optional` **to**: Array\<string>

*Defined in [src/generated/api.ts:6385](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L6385)*

List of `To` recipients that email was addressed to

**`memberof`** WebhookNewEmailPayload

___

### webhookId

• `Optional` **webhookId**: string

*Defined in [src/generated/api.ts:6391](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L6391)*

ID of webhook entity being triggered

**`memberof`** WebhookNewEmailPayload

___

### webhookName

• `Optional` **webhookName**: string

*Defined in [src/generated/api.ts:6397](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L6397)*

Name of the webhook being triggered

**`memberof`** WebhookNewEmailPayload
