**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / WebhookNewAttachmentPayload

# Namespace: WebhookNewAttachmentPayload

**`export`** 

**`namespace`** WebhookNewAttachmentPayload

## Index

### Enumerations

* [EventNameEnum](../enums/webhooknewattachmentpayload.eventnameenum.md)

### Properties

* [attachmentId](webhooknewattachmentpayload.md#attachmentid)
* [contentLength](webhooknewattachmentpayload.md#contentlength)
* [contentType](webhooknewattachmentpayload.md#contenttype)
* [eventName](webhooknewattachmentpayload.md#eventname)
* [messageId](webhooknewattachmentpayload.md#messageid)
* [name](webhooknewattachmentpayload.md#name)
* [webhookId](webhooknewattachmentpayload.md#webhookid)
* [webhookName](webhooknewattachmentpayload.md#webhookname)

## Properties

### attachmentId

• `Optional` **attachmentId**: string

*Defined in [src/generated/api.ts:4980](https://github.com/mailslurp/mailslurp-client/blob/85c640b/src/generated/api.ts#L4980)*

ID of attachment. Use the `AttachmentController` to

**`memberof`** WebhookNewAttachmentPayload

___

### contentLength

• `Optional` **contentLength**: number

*Defined in [src/generated/api.ts:4986](https://github.com/mailslurp/mailslurp-client/blob/85c640b/src/generated/api.ts#L4986)*

Size of attachment in bytes

**`memberof`** WebhookNewAttachmentPayload

___

### contentType

• `Optional` **contentType**: string

*Defined in [src/generated/api.ts:4992](https://github.com/mailslurp/mailslurp-client/blob/85c640b/src/generated/api.ts#L4992)*

Content type of attachment such as 'image/png' or 'application/pdf

**`memberof`** WebhookNewAttachmentPayload

___

### eventName

• `Optional` **eventName**: [EventNameEnum](../enums/webhooknewattachmentpayload.eventnameenum.md)

*Defined in [src/generated/api.ts:4998](https://github.com/mailslurp/mailslurp-client/blob/85c640b/src/generated/api.ts#L4998)*

Name of the event type webhook is being triggered for.

**`memberof`** WebhookNewAttachmentPayload

___

### messageId

• `Optional` **messageId**: string

*Defined in [src/generated/api.ts:5004](https://github.com/mailslurp/mailslurp-client/blob/85c640b/src/generated/api.ts#L5004)*

Idempotent message ID. Store this ID locally or in a database to prevent message duplication.

**`memberof`** WebhookNewAttachmentPayload

___

### name

• `Optional` **name**: string

*Defined in [src/generated/api.ts:5010](https://github.com/mailslurp/mailslurp-client/blob/85c640b/src/generated/api.ts#L5010)*

Filename of the attachment if present

**`memberof`** WebhookNewAttachmentPayload

___

### webhookId

• `Optional` **webhookId**: string

*Defined in [src/generated/api.ts:5016](https://github.com/mailslurp/mailslurp-client/blob/85c640b/src/generated/api.ts#L5016)*

ID of webhook entity being triggered

**`memberof`** WebhookNewAttachmentPayload

___

### webhookName

• `Optional` **webhookName**: string

*Defined in [src/generated/api.ts:5022](https://github.com/mailslurp/mailslurp-client/blob/85c640b/src/generated/api.ts#L5022)*

Name of the webhook being triggered

**`memberof`** WebhookNewAttachmentPayload
