# Interface: AbstractWebhookPayload

Abstract webhook payload. Use the correct payload type for your webhook event type in order to access all the specific properties for that event. See the `NEW_EMAIL`,`NEW_CONTACT`, `NEW_ATTACHMENT` and `EMAIL_OPENED` payloads for the properties available for those events.

**`export`**

**`interface`** AbstractWebhookPayload

## Table of contents

### Properties

- [eventName](AbstractWebhookPayload.md#eventname)
- [messageId](AbstractWebhookPayload.md#messageid)
- [webhookId](AbstractWebhookPayload.md#webhookid)
- [webhookName](AbstractWebhookPayload.md#webhookname)

## Properties

### <a id="eventname" name="eventname"></a> eventName

• **eventName**: [`AbstractWebhookPayloadEventNameEnum`](../enums/AbstractWebhookPayloadEventNameEnum.md)

**`memberof`** AbstractWebhookPayload

___

### <a id="messageid" name="messageid"></a> messageId

• **messageId**: `string`

**`memberof`** AbstractWebhookPayload

___

### <a id="webhookid" name="webhookid"></a> webhookId

• **webhookId**: `string`

**`memberof`** AbstractWebhookPayload

___

### <a id="webhookname" name="webhookname"></a> webhookName

• `Optional` **webhookName**: `string`

**`memberof`** AbstractWebhookPayload
