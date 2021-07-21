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

*Defined in [src/generated/api.ts:6135](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L6135)*

ID of attachment. Use the `AttachmentController` to

**`memberof`** WebhookNewAttachmentPayload

___

### contentLength

• `Optional` **contentLength**: number

*Defined in [src/generated/api.ts:6141](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L6141)*

Size of attachment in bytes

**`memberof`** WebhookNewAttachmentPayload

___

### contentType

• `Optional` **contentType**: string

*Defined in [src/generated/api.ts:6147](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L6147)*

Content type of attachment such as 'image/png' or 'application/pdf

**`memberof`** WebhookNewAttachmentPayload

___

### eventName

• `Optional` **eventName**: [EventNameEnum](../enums/webhooknewattachmentpayload.eventnameenum.md)

*Defined in [src/generated/api.ts:6153](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L6153)*

Name of the event type webhook is being triggered for.

**`memberof`** WebhookNewAttachmentPayload

___

### messageId

• `Optional` **messageId**: string

*Defined in [src/generated/api.ts:6159](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L6159)*

Idempotent message ID. Store this ID locally or in a database to prevent message duplication.

**`memberof`** WebhookNewAttachmentPayload

___

### name

• `Optional` **name**: string

*Defined in [src/generated/api.ts:6165](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L6165)*

Filename of the attachment if present

**`memberof`** WebhookNewAttachmentPayload

___

### webhookId

• `Optional` **webhookId**: string

*Defined in [src/generated/api.ts:6171](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L6171)*

ID of webhook entity being triggered

**`memberof`** WebhookNewAttachmentPayload

___

### webhookName

• `Optional` **webhookName**: string

*Defined in [src/generated/api.ts:6177](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L6177)*

Name of the webhook being triggered

**`memberof`** WebhookNewAttachmentPayload
