[MailSlurp JS](../README.md) / WebhookEmailOpenedPayload

# Interface: WebhookEmailOpenedPayload

EMAIL_OPENED webhook payload. Sent to your webhook url endpoint via HTTP POST when an email containing a tracking pixel is opened and the pixel image is loaded by a reader.

**`Export`**

**`Interface`**

WebhookEmailOpenedPayload

## Table of contents

### Properties

- [createdAt](WebhookEmailOpenedPayload.md#createdat)
- [eventName](WebhookEmailOpenedPayload.md#eventname)
- [inboxId](WebhookEmailOpenedPayload.md#inboxid)
- [messageId](WebhookEmailOpenedPayload.md#messageid)
- [pixelId](WebhookEmailOpenedPayload.md#pixelid)
- [recipient](WebhookEmailOpenedPayload.md#recipient)
- [sentEmailId](WebhookEmailOpenedPayload.md#sentemailid)
- [webhookId](WebhookEmailOpenedPayload.md#webhookid)
- [webhookName](WebhookEmailOpenedPayload.md#webhookname)

## Properties

### createdAt

• **createdAt**: `Date`

Date time of event creation

**`Memberof`**

WebhookEmailOpenedPayload

___

### eventName

• **eventName**: [`WebhookEmailOpenedPayloadEventNameEnum`](../enums/WebhookEmailOpenedPayloadEventNameEnum.md)

Name of the event type webhook is being triggered for.

**`Memberof`**

WebhookEmailOpenedPayload

___

### inboxId

• **inboxId**: `string`

Id of the inbox

**`Memberof`**

WebhookEmailOpenedPayload

___

### messageId

• **messageId**: `string`

Idempotent message ID. Store this ID locally or in a database to prevent message duplication.

**`Memberof`**

WebhookEmailOpenedPayload

___

### pixelId

• **pixelId**: `string`

ID of the tracking pixel

**`Memberof`**

WebhookEmailOpenedPayload

___

### recipient

• **recipient**: `string`

Email address for the recipient of the tracking pixel

**`Memberof`**

WebhookEmailOpenedPayload

___

### sentEmailId

• **sentEmailId**: `string`

ID of sent email

**`Memberof`**

WebhookEmailOpenedPayload

___

### webhookId

• **webhookId**: `string`

ID of webhook entity being triggered

**`Memberof`**

WebhookEmailOpenedPayload

___

### webhookName

• `Optional` **webhookName**: `string`

Name of the webhook being triggered

**`Memberof`**

WebhookEmailOpenedPayload
