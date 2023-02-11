[MailSlurp JS](../README.md) / WebhookNewAttachmentPayload

# Interface: WebhookNewAttachmentPayload

NEW_ATTACHMENT webhook payload. Sent to your webhook url endpoint via HTTP POST when an email is received by the inbox that your webhook is attached to that contains an attachment. You can use the attachmentId to download the attachment.

**`Export`**

**`Interface`**

WebhookNewAttachmentPayload

## Table of contents

### Properties

- [attachmentId](WebhookNewAttachmentPayload.md#attachmentid)
- [contentLength](WebhookNewAttachmentPayload.md#contentlength)
- [contentType](WebhookNewAttachmentPayload.md#contenttype)
- [eventName](WebhookNewAttachmentPayload.md#eventname)
- [messageId](WebhookNewAttachmentPayload.md#messageid)
- [name](WebhookNewAttachmentPayload.md#name)
- [webhookId](WebhookNewAttachmentPayload.md#webhookid)
- [webhookName](WebhookNewAttachmentPayload.md#webhookname)

## Properties

### attachmentId

• **attachmentId**: `string`

ID of attachment. Use the `AttachmentController` to

**`Memberof`**

WebhookNewAttachmentPayload

___

### contentLength

• **contentLength**: `number`

Size of attachment in bytes

**`Memberof`**

WebhookNewAttachmentPayload

___

### contentType

• **contentType**: `string`

Content type of attachment such as 'image/png' or 'application/pdf

**`Memberof`**

WebhookNewAttachmentPayload

___

### eventName

• **eventName**: [`WebhookNewAttachmentPayloadEventNameEnum`](../enums/WebhookNewAttachmentPayloadEventNameEnum.md)

Name of the event type webhook is being triggered for.

**`Memberof`**

WebhookNewAttachmentPayload

___

### messageId

• **messageId**: `string`

Idempotent message ID. Store this ID locally or in a database to prevent message duplication.

**`Memberof`**

WebhookNewAttachmentPayload

___

### name

• **name**: `string`

Filename of the attachment if present

**`Memberof`**

WebhookNewAttachmentPayload

___

### webhookId

• **webhookId**: `string`

ID of webhook entity being triggered

**`Memberof`**

WebhookNewAttachmentPayload

___

### webhookName

• `Optional` **webhookName**: `string`

Name of the webhook being triggered

**`Memberof`**

WebhookNewAttachmentPayload
