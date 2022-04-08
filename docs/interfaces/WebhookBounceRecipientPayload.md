# Interface: WebhookBounceRecipientPayload

EMAIL_READ webhook payload. Sent to your webhook url endpoint via HTTP POST when an email is read. This happens when an email is requested in full from the API or a user views the email in the dashboard.

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

### eventName

• **eventName**: [`WebhookBounceRecipientPayloadEventNameEnum`](../enums/WebhookBounceRecipientPayloadEventNameEnum.md)

Name of the event type webhook is being triggered for.

**`memberof`** WebhookBounceRecipientPayload

___

### messageId

• **messageId**: `string`

Idempotent message ID. Store this ID locally or in a database to prevent message duplication.

**`memberof`** WebhookBounceRecipientPayload

___

### recipient

• **recipient**: `string`

Email address that caused a bounce. Make note of the address and try not to message it again to preserve your reputation.

**`memberof`** WebhookBounceRecipientPayload

___

### webhookId

• **webhookId**: `string`

ID of webhook entity being triggered

**`memberof`** WebhookBounceRecipientPayload

___

### webhookName

• `Optional` **webhookName**: `string`

Name of the webhook being triggered

**`memberof`** WebhookBounceRecipientPayload
