[MailSlurp JS](../README.md) / AbstractWebhookPayload

# Interface: AbstractWebhookPayload

Abstract webhook payload. Use the correct payload type for your webhook event type in order to access all the specific properties for that event. See the `NEW_EMAIL`,`NEW_CONTACT`, `NEW_ATTACHMENT` and `EMAIL_OPENED` payloads for the properties available for those events.

**`Export`**

**`Interface`**

AbstractWebhookPayload

## Table of contents

### Properties

- [eventName](AbstractWebhookPayload.md#eventname)
- [messageId](AbstractWebhookPayload.md#messageid)
- [webhookId](AbstractWebhookPayload.md#webhookid)
- [webhookName](AbstractWebhookPayload.md#webhookname)

## Properties

### eventName

• **eventName**: [`AbstractWebhookPayloadEventNameEnum`](../enums/AbstractWebhookPayloadEventNameEnum.md)

**`Memberof`**

AbstractWebhookPayload

___

### messageId

• **messageId**: `string`

**`Memberof`**

AbstractWebhookPayload

___

### webhookId

• **webhookId**: `string`

**`Memberof`**

AbstractWebhookPayload

___

### webhookName

• `Optional` **webhookName**: `string`

**`Memberof`**

AbstractWebhookPayload
