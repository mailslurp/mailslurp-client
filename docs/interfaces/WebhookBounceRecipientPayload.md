# Interface: WebhookBounceRecipientPayload

BOUNCE_RECIPIENT webhook payload. Sent to your webhook url endpoint via HTTP POST when an email caused a bounce to occur for a recipient. Save the recipient to a ban list of your server and avoid email them again.

**`export`**

**`interface`** WebhookBounceRecipientPayload

## Table of contents

### Properties

- [eventName](WebhookBounceRecipientPayload.md#eventname)
- [messageId](WebhookBounceRecipientPayload.md#messageid)
- [recipient](WebhookBounceRecipientPayload.md#recipient)
- [webhookId](WebhookBounceRecipientPayload.md#webhookid)
- [webhookName](WebhookBounceRecipientPayload.md#webhookname)

## Properties

### <a id="eventname" name="eventname"></a> eventName

• **eventName**: [`WebhookBounceRecipientPayloadEventNameEnum`](../enums/WebhookBounceRecipientPayloadEventNameEnum.md)

Name of the event type webhook is being triggered for.

**`memberof`** WebhookBounceRecipientPayload

___

### <a id="messageid" name="messageid"></a> messageId

• **messageId**: `string`

Idempotent message ID. Store this ID locally or in a database to prevent message duplication.

**`memberof`** WebhookBounceRecipientPayload

___

### <a id="recipient" name="recipient"></a> recipient

• **recipient**: `string`

Email address that caused a bounce. Make note of the address and try not to message it again to preserve your reputation.

**`memberof`** WebhookBounceRecipientPayload

___

### <a id="webhookid" name="webhookid"></a> webhookId

• **webhookId**: `string`

ID of webhook entity being triggered

**`memberof`** WebhookBounceRecipientPayload

___

### <a id="webhookname" name="webhookname"></a> webhookName

• `Optional` **webhookName**: `string`

Name of the webhook being triggered

**`memberof`** WebhookBounceRecipientPayload
