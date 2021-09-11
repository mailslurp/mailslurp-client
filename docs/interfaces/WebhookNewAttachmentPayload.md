[MailSlurp JS](../README.md) / WebhookNewAttachmentPayload

# Interface: WebhookNewAttachmentPayload

NEW_ATTACHMENT webhook payload. Sent to your webhook url endpoint via HTTP POST when an email is received by the inbox that your webhook is attached to that contains an attachment. You can use the attachmentId to download the attachment.

**`export`**

**`interface`** WebhookNewAttachmentPayload

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

• `Optional` **attachmentId**: `string`

ID of attachment. Use the `AttachmentController` to

**`memberof`** WebhookNewAttachmentPayload

#### Defined in

[src/generated/api.ts:6488](https://github.com/mailslurp/mailslurp-client/blob/f0f645f/src/generated/api.ts#L6488)

___

### contentLength

• `Optional` **contentLength**: `number`

Size of attachment in bytes

**`memberof`** WebhookNewAttachmentPayload

#### Defined in

[src/generated/api.ts:6494](https://github.com/mailslurp/mailslurp-client/blob/f0f645f/src/generated/api.ts#L6494)

___

### contentType

• `Optional` **contentType**: `string`

Content type of attachment such as 'image/png' or 'application/pdf

**`memberof`** WebhookNewAttachmentPayload

#### Defined in

[src/generated/api.ts:6500](https://github.com/mailslurp/mailslurp-client/blob/f0f645f/src/generated/api.ts#L6500)

___

### eventName

• `Optional` **eventName**: [`EventNameEnum`](../enums/WebhookNewAttachmentPayload.EventNameEnum.md)

Name of the event type webhook is being triggered for.

**`memberof`** WebhookNewAttachmentPayload

#### Defined in

[src/generated/api.ts:6506](https://github.com/mailslurp/mailslurp-client/blob/f0f645f/src/generated/api.ts#L6506)

___

### messageId

• `Optional` **messageId**: `string`

Idempotent message ID. Store this ID locally or in a database to prevent message duplication.

**`memberof`** WebhookNewAttachmentPayload

#### Defined in

[src/generated/api.ts:6512](https://github.com/mailslurp/mailslurp-client/blob/f0f645f/src/generated/api.ts#L6512)

___

### name

• `Optional` **name**: `string`

Filename of the attachment if present

**`memberof`** WebhookNewAttachmentPayload

#### Defined in

[src/generated/api.ts:6518](https://github.com/mailslurp/mailslurp-client/blob/f0f645f/src/generated/api.ts#L6518)

___

### webhookId

• `Optional` **webhookId**: `string`

ID of webhook entity being triggered

**`memberof`** WebhookNewAttachmentPayload

#### Defined in

[src/generated/api.ts:6524](https://github.com/mailslurp/mailslurp-client/blob/f0f645f/src/generated/api.ts#L6524)

___

### webhookName

• `Optional` **webhookName**: `string`

Name of the webhook being triggered

**`memberof`** WebhookNewAttachmentPayload

#### Defined in

[src/generated/api.ts:6530](https://github.com/mailslurp/mailslurp-client/blob/f0f645f/src/generated/api.ts#L6530)
