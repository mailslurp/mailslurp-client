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

*Defined in [src/generated/api.ts:6421](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L6421)*

List of attachment meta data objects if attachments present

**`memberof`** WebhookNewEmailPayload

___

### bcc

• `Optional` **bcc**: Array\<string>

*Defined in [src/generated/api.ts:6427](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L6427)*

List of `BCC` recipients email was addressed to

**`memberof`** WebhookNewEmailPayload

___

### cc

• `Optional` **cc**: Array\<string>

*Defined in [src/generated/api.ts:6433](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L6433)*

List of `CC` recipients email was addressed to

**`memberof`** WebhookNewEmailPayload

___

### createdAt

• `Optional` **createdAt**: Date

*Defined in [src/generated/api.ts:6439](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L6439)*

Date time of event creation

**`memberof`** WebhookNewEmailPayload

___

### emailId

• `Optional` **emailId**: string

*Defined in [src/generated/api.ts:6445](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L6445)*

ID of the email that was received. Use this ID for fetching the email with the `EmailController`.

**`memberof`** WebhookNewEmailPayload

___

### eventName

• `Optional` **eventName**: [EventNameEnum](../enums/webhooknewemailpayload.eventnameenum.md)

*Defined in [src/generated/api.ts:6451](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L6451)*

Name of the event type webhook is being triggered for.

**`memberof`** WebhookNewEmailPayload

___

### from

• `Optional` **from**: string

*Defined in [src/generated/api.ts:6457](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L6457)*

Who the email was sent from

**`memberof`** WebhookNewEmailPayload

___

### inboxId

• `Optional` **inboxId**: string

*Defined in [src/generated/api.ts:6463](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L6463)*

Id of the inbox that received an email

**`memberof`** WebhookNewEmailPayload

___

### messageId

• `Optional` **messageId**: string

*Defined in [src/generated/api.ts:6469](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L6469)*

Idempotent message ID. Store this ID locally or in a database to prevent message duplication.

**`memberof`** WebhookNewEmailPayload

___

### subject

• `Optional` **subject**: string

*Defined in [src/generated/api.ts:6475](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L6475)*

The subject line of the email message

**`memberof`** WebhookNewEmailPayload

___

### to

• `Optional` **to**: Array\<string>

*Defined in [src/generated/api.ts:6481](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L6481)*

List of `To` recipients that email was addressed to

**`memberof`** WebhookNewEmailPayload

___

### webhookId

• `Optional` **webhookId**: string

*Defined in [src/generated/api.ts:6487](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L6487)*

ID of webhook entity being triggered

**`memberof`** WebhookNewEmailPayload

___

### webhookName

• `Optional` **webhookName**: string

*Defined in [src/generated/api.ts:6493](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L6493)*

Name of the webhook being triggered

**`memberof`** WebhookNewEmailPayload
