# Interface: WebhookBouncePayload

EMAIL_READ webhook payload. Sent to your webhook url endpoint via HTTP POST when an email is read. This happens when an email is requested in full from the API or a user views the email in the dashboard.

**`export`**

**`interface`** WebhookBouncePayload

## Table of contents

### Properties

- [bounceId](WebhookBouncePayload.md#bounceid)
- [bounceRecipients](WebhookBouncePayload.md#bouncerecipients)
- [eventName](WebhookBouncePayload.md#eventname)
- [messageId](WebhookBouncePayload.md#messageid)
- [sender](WebhookBouncePayload.md#sender)
- [sentToRecipients](WebhookBouncePayload.md#senttorecipients)
- [webhookId](WebhookBouncePayload.md#webhookid)
- [webhookName](WebhookBouncePayload.md#webhookname)

## Properties

### bounceId

• **bounceId**: `string`

ID of the bounce email record. Use the ID with the bounce controller to view more information

**`memberof`** WebhookBouncePayload

___

### bounceRecipients

• `Optional` **bounceRecipients**: `string`[]

Email addresses that resulted in a bounce or email being rejected. Please save these recipients and avoid emailing them in the future to maintain your reputation.

**`memberof`** WebhookBouncePayload

___

### eventName

• **eventName**: [`WebhookBouncePayloadEventNameEnum`](../enums/WebhookBouncePayloadEventNameEnum.md)

Name of the event type webhook is being triggered for.

**`memberof`** WebhookBouncePayload

___

### messageId

• **messageId**: `string`

Idempotent message ID. Store this ID locally or in a database to prevent message duplication.

**`memberof`** WebhookBouncePayload

___

### sender

• **sender**: `string`

**`memberof`** WebhookBouncePayload

___

### sentToRecipients

• `Optional` **sentToRecipients**: `string`[]

**`memberof`** WebhookBouncePayload

___

### webhookId

• **webhookId**: `string`

ID of webhook entity being triggered

**`memberof`** WebhookBouncePayload

___

### webhookName

• `Optional` **webhookName**: `string`

Name of the webhook being triggered

**`memberof`** WebhookBouncePayload
