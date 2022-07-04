# Interface: CreateWebhookOptions

Options for creating a webhook. Webhooks can be attached to inboxes and MailSlurp will POST a webhook payload to the URL specified whenever the inbox receives an email. Webhooks are great for processing many inbound emails.

**`export`**

**`interface`** CreateWebhookOptions

## Table of contents

### Properties

- [basicAuth](CreateWebhookOptions.md#basicauth)
- [eventName](CreateWebhookOptions.md#eventname)
- [includeHeaders](CreateWebhookOptions.md#includeheaders)
- [name](CreateWebhookOptions.md#name)
- [url](CreateWebhookOptions.md#url)

## Properties

### <a id="basicauth" name="basicauth"></a> basicAuth

• `Optional` **basicAuth**: [`BasicAuthOptions`](BasicAuthOptions.md)

**`memberof`** CreateWebhookOptions

___

### <a id="eventname" name="eventname"></a> eventName

• `Optional` **eventName**: [`CreateWebhookOptionsEventNameEnum`](../enums/CreateWebhookOptionsEventNameEnum.md)

Optional webhook event name. Default is `EMAIL_RECEIVED` and is triggered when an email is received by the inbox associated with the webhook. Payload differ according to the webhook event name. The other events are `NEW_EMAIL`, `NEW_CONTACT`, and `NEW_ATTACHMENT` and `EMAIL_OPENED`. `EMAIL_OPENED` requires the use of tracking pixels when sending. See the email tracking guide for more information.

**`memberof`** CreateWebhookOptions

___

### <a id="includeheaders" name="includeheaders"></a> includeHeaders

• `Optional` **includeHeaders**: [`WebhookHeaders`](WebhookHeaders.md)

**`memberof`** CreateWebhookOptions

___

### <a id="name" name="name"></a> name

• `Optional` **name**: `string`

Optional name for the webhook

**`memberof`** CreateWebhookOptions

___

### <a id="url" name="url"></a> url

• **url**: `string`

Public URL on your server that MailSlurp can post WebhookNotification payload to when an email is received or an event is trigger. The payload of the submitted JSON is dependent on the webhook event type. The default `EMAIL_RECEIVED` payload is described by `https://api.mailslurp.com/schemas/webhook-payload`. The other events, `NEW_EMAIL`, `NEW_CONTACT`, and `NEW_ATTACHMENT` are described by `https://api.mailslurp.com/schemas/webhook-new-email-payload`, `https://api.mailslurp.com/schemas/webhook-new-contact-payload`,`https://api.mailslurp.com/schemas/webhook-new-attachment-payload` respectively.

**`memberof`** CreateWebhookOptions
