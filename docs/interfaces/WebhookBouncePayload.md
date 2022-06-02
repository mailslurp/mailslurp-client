# Interface: WebhookBouncePayload

BOUNCE webhook payload. Sent to your webhook url endpoint via HTTP POST when an email bounced or was rejected by a recipient. Save the recipients to a ban list on your server and avoid emailing them again. It is recommended you also listen to the BOUNCE_RECIPIENT payload.

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

### <a id="bounceid" name="bounceid"></a> bounceId

• **bounceId**: `string`

ID of the bounce email record. Use the ID with the bounce controller to view more information

**`memberof`** WebhookBouncePayload

___

### <a id="bouncerecipients" name="bouncerecipients"></a> bounceRecipients

• `Optional` **bounceRecipients**: `string`[]

Email addresses that resulted in a bounce or email being rejected. Please save these recipients and avoid emailing them in the future to maintain your reputation.

**`memberof`** WebhookBouncePayload

___

### <a id="eventname" name="eventname"></a> eventName

• **eventName**: [`WebhookBouncePayloadEventNameEnum`](../enums/WebhookBouncePayloadEventNameEnum.md)

Name of the event type webhook is being triggered for.

**`memberof`** WebhookBouncePayload

___

### <a id="messageid" name="messageid"></a> messageId

• **messageId**: `string`

Idempotent message ID. Store this ID locally or in a database to prevent message duplication.

**`memberof`** WebhookBouncePayload

___

### <a id="sender" name="sender"></a> sender

• **sender**: `string`

**`memberof`** WebhookBouncePayload

___

### <a id="senttorecipients" name="senttorecipients"></a> sentToRecipients

• `Optional` **sentToRecipients**: `string`[]

**`memberof`** WebhookBouncePayload

___

### <a id="webhookid" name="webhookid"></a> webhookId

• **webhookId**: `string`

ID of webhook entity being triggered

**`memberof`** WebhookBouncePayload

___

### <a id="webhookname" name="webhookname"></a> webhookName

• `Optional` **webhookName**: `string`

Name of the webhook being triggered

**`memberof`** WebhookBouncePayload
