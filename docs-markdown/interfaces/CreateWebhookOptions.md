[MailSlurp JS](../README.md) / CreateWebhookOptions

# Interface: CreateWebhookOptions

Options for creating a webhook. Webhooks can be attached to inboxes and MailSlurp will POST a webhook payload to the URL specified whenever the webhook's event is triggered. Webhooks are great for processing many inbound emails and responding to other events at scale. Customize the payload sent to your endpoint by setting the `requestBodyTemplate` property to a string with moustache style variables. Property names from the standard payload model for the given event are available as variables.

**`Export`**

**`Interface`**

CreateWebhookOptions

## Table of contents

### Properties

- [basicAuth](CreateWebhookOptions.md#basicauth)
- [eventName](CreateWebhookOptions.md#eventname)
- [ignoreInsecureSslCertificates](CreateWebhookOptions.md#ignoreinsecuresslcertificates)
- [includeHeaders](CreateWebhookOptions.md#includeheaders)
- [name](CreateWebhookOptions.md#name)
- [requestBodyTemplate](CreateWebhookOptions.md#requestbodytemplate)
- [url](CreateWebhookOptions.md#url)

## Properties

### basicAuth

• `Optional` **basicAuth**: [`BasicAuthOptions`](BasicAuthOptions.md)

**`Memberof`**

CreateWebhookOptions

___

### eventName

• `Optional` **eventName**: [`CreateWebhookOptionsEventNameEnum`](../enums/CreateWebhookOptionsEventNameEnum.md)

Optional webhook event name. Default is `EMAIL_RECEIVED` and is triggered when an email is received by the inbox associated with the webhook. Payload differ according to the webhook event name.

**`Memberof`**

CreateWebhookOptions

___

### ignoreInsecureSslCertificates

• `Optional` **ignoreInsecureSslCertificates**: `boolean`

Ignore insecure SSL certificates when sending request. Useful for self-signed certs.

**`Memberof`**

CreateWebhookOptions

___

### includeHeaders

• `Optional` **includeHeaders**: [`WebhookHeaders`](WebhookHeaders.md)

**`Memberof`**

CreateWebhookOptions

___

### name

• `Optional` **name**: `string`

Optional name for the webhook

**`Memberof`**

CreateWebhookOptions

___

### requestBodyTemplate

• `Optional` **requestBodyTemplate**: `string`

Template for the JSON body of the webhook request that will be sent to your server. Use Moustache style `{{variableName}}` templating to use parts of the standard webhook payload for the given event.

**`Memberof`**

CreateWebhookOptions

___

### url

• **url**: `string`

Public URL on your server that MailSlurp can post WebhookNotification payload to when an email is received or an event is trigger. The payload of the submitted JSON is dependent on the webhook event type. See docs.mailslurp.com/webhooks for event payload documentation.

**`Memberof`**

CreateWebhookOptions
