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

*Defined in [src/generated/api.ts:5445](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L5445)*

List of attachment meta data objects if attachments present

**`memberof`** WebhookNewEmailPayload

___

### bcc

• `Optional` **bcc**: Array\<string>

*Defined in [src/generated/api.ts:5451](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L5451)*

List of `BCC` recipients email was addressed to

**`memberof`** WebhookNewEmailPayload

___

### cc

• `Optional` **cc**: Array\<string>

*Defined in [src/generated/api.ts:5457](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L5457)*

List of `CC` recipients email was addressed to

**`memberof`** WebhookNewEmailPayload

___

### createdAt

• `Optional` **createdAt**: Date

*Defined in [src/generated/api.ts:5463](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L5463)*

Date time of event creation

**`memberof`** WebhookNewEmailPayload

___

### emailId

• `Optional` **emailId**: string

*Defined in [src/generated/api.ts:5469](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L5469)*

ID of the email that was received. Use this ID for fetching the email with the `EmailController`.

**`memberof`** WebhookNewEmailPayload

___

### eventName

• `Optional` **eventName**: [EventNameEnum](../enums/webhooknewemailpayload.eventnameenum.md)

*Defined in [src/generated/api.ts:5475](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L5475)*

Name of the event type webhook is being triggered for.

**`memberof`** WebhookNewEmailPayload

___

### from

• `Optional` **from**: string

*Defined in [src/generated/api.ts:5481](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L5481)*

Who the email was sent from

**`memberof`** WebhookNewEmailPayload

___

### inboxId

• `Optional` **inboxId**: string

*Defined in [src/generated/api.ts:5487](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L5487)*

Id of the inbox that received an email

**`memberof`** WebhookNewEmailPayload

___

### messageId

• `Optional` **messageId**: string

*Defined in [src/generated/api.ts:5493](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L5493)*

Idempotent message ID. Store this ID locally or in a database to prevent message duplication.

**`memberof`** WebhookNewEmailPayload

___

### subject

• `Optional` **subject**: string

*Defined in [src/generated/api.ts:5499](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L5499)*

The subject line of the email message

**`memberof`** WebhookNewEmailPayload

___

### to

• `Optional` **to**: Array\<string>

*Defined in [src/generated/api.ts:5505](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L5505)*

List of `To` recipients that email was addressed to

**`memberof`** WebhookNewEmailPayload

___

### webhookId

• `Optional` **webhookId**: string

*Defined in [src/generated/api.ts:5511](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L5511)*

ID of webhook entity being triggered

**`memberof`** WebhookNewEmailPayload

___

### webhookName

• `Optional` **webhookName**: string

*Defined in [src/generated/api.ts:5517](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L5517)*

Name of the webhook being triggered

**`memberof`** WebhookNewEmailPayload
