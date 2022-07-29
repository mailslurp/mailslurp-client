# Interface: CreateWebhookOptions

Options for creating a webhook. Webhooks can be attached to inboxes and MailSlurp will POST a webhook payload to the URL specified whenever the webhook's event is triggered. Webhooks are great for processing many inbound emails and responding to other events at scale.

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

Optional webhook event name. Default is `EMAIL_RECEIVED` and is triggered when an email is received by the inbox associated with the webhook. Payload differ according to the webhook event name.

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

Public URL on your server that MailSlurp can post WebhookNotification payload to when an email is received or an event is trigger. The payload of the submitted JSON is dependent on the webhook event type. See docs.mailslurp.com/webhooks for event payload documentation.

**`memberof`** CreateWebhookOptions
