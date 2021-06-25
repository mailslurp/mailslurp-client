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

*Defined in [src/generated/api.ts:5257](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L5257)*

ID of attachment. Use the `AttachmentController` to

**`memberof`** WebhookNewAttachmentPayload

___

### contentLength

• `Optional` **contentLength**: number

*Defined in [src/generated/api.ts:5263](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L5263)*

Size of attachment in bytes

**`memberof`** WebhookNewAttachmentPayload

___

### contentType

• `Optional` **contentType**: string

*Defined in [src/generated/api.ts:5269](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L5269)*

Content type of attachment such as 'image/png' or 'application/pdf

**`memberof`** WebhookNewAttachmentPayload

___

### eventName

• `Optional` **eventName**: [EventNameEnum](../enums/webhooknewattachmentpayload.eventnameenum.md)

*Defined in [src/generated/api.ts:5275](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L5275)*

Name of the event type webhook is being triggered for.

**`memberof`** WebhookNewAttachmentPayload

___

### messageId

• `Optional` **messageId**: string

*Defined in [src/generated/api.ts:5281](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L5281)*

Idempotent message ID. Store this ID locally or in a database to prevent message duplication.

**`memberof`** WebhookNewAttachmentPayload

___

### name

• `Optional` **name**: string

*Defined in [src/generated/api.ts:5287](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L5287)*

Filename of the attachment if present

**`memberof`** WebhookNewAttachmentPayload

___

### webhookId

• `Optional` **webhookId**: string

*Defined in [src/generated/api.ts:5293](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L5293)*

ID of webhook entity being triggered

**`memberof`** WebhookNewAttachmentPayload

___

### webhookName

• `Optional` **webhookName**: string

*Defined in [src/generated/api.ts:5299](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L5299)*

Name of the webhook being triggered

**`memberof`** WebhookNewAttachmentPayload
