[MailSlurp JS](../README.md) / WebhookBouncePayload

# Interface: WebhookBouncePayload

BOUNCE webhook payload. Sent to your webhook url endpoint via HTTP POST when an email bounced or was rejected by a recipient. Save the recipients to a ban list on your server and avoid emailing them again. It is recommended you also listen to the BOUNCE_RECIPIENT payload.

**`Export`**

**`Interface`**

WebhookBouncePayload

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

**`Memberof`**

WebhookBouncePayload

___

### bounceRecipients

• `Optional` **bounceRecipients**: `string`[]

Email addresses that resulted in a bounce or email being rejected. Please save these recipients and avoid emailing them in the future to maintain your reputation.

**`Memberof`**

WebhookBouncePayload

___

### eventName

• **eventName**: [`WebhookBouncePayloadEventNameEnum`](../enums/WebhookBouncePayloadEventNameEnum.md)

Name of the event type webhook is being triggered for.

**`Memberof`**

WebhookBouncePayload

___

### messageId

• **messageId**: `string`

Idempotent message ID. Store this ID locally or in a database to prevent message duplication.

**`Memberof`**

WebhookBouncePayload

___

### sender

• **sender**: `string`

Sender causing bounce

**`Memberof`**

WebhookBouncePayload

___

### sentToRecipients

• `Optional` **sentToRecipients**: `string`[]

Email sent to recipients

**`Memberof`**

WebhookBouncePayload

___

### webhookId

• **webhookId**: `string`

ID of webhook entity being triggered

**`Memberof`**

WebhookBouncePayload

___

### webhookName

• `Optional` **webhookName**: `string`

Name of the webhook being triggered

**`Memberof`**

WebhookBouncePayload
