[MailSlurp JS](../README.md) / WebhookBounceRecipientPayload

# Interface: WebhookBounceRecipientPayload

BOUNCE_RECIPIENT webhook payload. Sent to your webhook url endpoint via HTTP POST when an email caused a bounce to occur for a recipient. Save the recipient to a ban list of your server and avoid email them again.

**`Export`**

**`Interface`**

WebhookBounceRecipientPayload

## Table of contents

### Properties

- [eventName](WebhookBounceRecipientPayload.md#eventname)
- [messageId](WebhookBounceRecipientPayload.md#messageid)
- [recipient](WebhookBounceRecipientPayload.md#recipient)
- [webhookId](WebhookBounceRecipientPayload.md#webhookid)
- [webhookName](WebhookBounceRecipientPayload.md#webhookname)

## Properties

### eventName

• **eventName**: [`WebhookBounceRecipientPayloadEventNameEnum`](../enums/WebhookBounceRecipientPayloadEventNameEnum.md)

Name of the event type webhook is being triggered for.

**`Memberof`**

WebhookBounceRecipientPayload

___

### messageId

• **messageId**: `string`

Idempotent message ID. Store this ID locally or in a database to prevent message duplication.

**`Memberof`**

WebhookBounceRecipientPayload

___

### recipient

• **recipient**: `string`

Email address that caused a bounce. Make note of the address and try not to message it again to preserve your reputation.

**`Memberof`**

WebhookBounceRecipientPayload

___

### webhookId

• **webhookId**: `string`

ID of webhook entity being triggered

**`Memberof`**

WebhookBounceRecipientPayload

___

### webhookName

• `Optional` **webhookName**: `string`

Name of the webhook being triggered

**`Memberof`**

WebhookBounceRecipientPayload
