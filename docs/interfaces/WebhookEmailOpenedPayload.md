# Interface: WebhookEmailOpenedPayload

EMAIL_OPENED webhook payload. Sent to your webhook url endpoint via HTTP POST when an email containing a tracking pixel is opened and the pixel image is loaded by a reader.

**`export`**

**`interface`** WebhookEmailOpenedPayload

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

### <a id="createdat" name="createdat"></a> createdAt

• **createdAt**: `Date`

Date time of event creation

**`memberof`** WebhookEmailOpenedPayload

___

### <a id="eventname" name="eventname"></a> eventName

• **eventName**: [`WebhookEmailOpenedPayloadEventNameEnum`](../enums/WebhookEmailOpenedPayloadEventNameEnum.md)

Name of the event type webhook is being triggered for.

**`memberof`** WebhookEmailOpenedPayload

___

### <a id="inboxid" name="inboxid"></a> inboxId

• **inboxId**: `string`

Id of the inbox that received an email

**`memberof`** WebhookEmailOpenedPayload

___

### <a id="messageid" name="messageid"></a> messageId

• **messageId**: `string`

Idempotent message ID. Store this ID locally or in a database to prevent message duplication.

**`memberof`** WebhookEmailOpenedPayload

___

### <a id="pixelid" name="pixelid"></a> pixelId

• **pixelId**: `string`

ID of the tracking pixel

**`memberof`** WebhookEmailOpenedPayload

___

### <a id="recipient" name="recipient"></a> recipient

• **recipient**: `string`

Email address for the recipient of the tracking pixel

**`memberof`** WebhookEmailOpenedPayload

___

### <a id="sentemailid" name="sentemailid"></a> sentEmailId

• **sentEmailId**: `string`

ID of sent email

**`memberof`** WebhookEmailOpenedPayload

___

### <a id="webhookid" name="webhookid"></a> webhookId

• **webhookId**: `string`

ID of webhook entity being triggered

**`memberof`** WebhookEmailOpenedPayload

___

### <a id="webhookname" name="webhookname"></a> webhookName

• `Optional` **webhookName**: `string`

Name of the webhook being triggered

**`memberof`** WebhookEmailOpenedPayload
