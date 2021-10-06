[MailSlurp JS](../README.md) / CreateWebhookOptions

# Interface: CreateWebhookOptions

Options for creating a webhook. Webhooks can be attached to inboxes and MailSlurp will POST a webhook payload to the URL specified whenever the inbox receives an email. Webhooks are great for processing many inbound emails.

**`export`**

**`interface`** CreateWebhookOptions

## Table of contents

### Properties

- [basicAuth](CreateWebhookOptions.md#basicauth)
- [eventName](CreateWebhookOptions.md#eventname)
- [name](CreateWebhookOptions.md#name)
- [url](CreateWebhookOptions.md#url)

## Properties

### basicAuth

• `Optional` **basicAuth**: [`BasicAuthOptions`](BasicAuthOptions.md)

Optional basic authentication that MailSlurp should use when calling the URL. For instance if your URL is https://example.com then basic auth will call a URL like https://{username}@{password}:example.com

**`memberof`** CreateWebhookOptions

#### Defined in

[src/generated/api.ts:1176](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1176)

___

### eventName

• `Optional` **eventName**: [`EventNameEnum`](../enums/CreateWebhookOptions.EventNameEnum.md)

Optional webhook event name. Default is `EMAIL_RECEIVED` and is triggered when an email is received by the inbox associated with the webhook. Payload differ according to the webhook event name. The other events are `NEW_EMAIL`, `NEW_CONTACT`, and `NEW_ATTACHMENT` and `EMAIL_OPENED`. `EMAIL_OPENED` requires the use of tracking pixels when sending. See the email tracking guide for more information.

**`memberof`** CreateWebhookOptions

#### Defined in

[src/generated/api.ts:1182](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1182)

___

### name

• `Optional` **name**: `string`

Optional name for the webhook

**`memberof`** CreateWebhookOptions

#### Defined in

[src/generated/api.ts:1188](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1188)

___

### url

• `Optional` **url**: `string`

Public URL on your server that MailSlurp can post WebhookNotification payload to when an email is received or an event is trigger. The payload of the submitted JSON is dependent on the webhook event type. The default `EMAIL_RECEIVED` payload is described by `https://api.mailslurp.com/schemas/webhook-payload`. The other events, `NEW_EMAIL`, `NEW_CONTACT`, and `NEW_ATTACHMENT` are described by `https://api.mailslurp.com/schemas/webhook-new-email-payload`, `https://api.mailslurp.com/schemas/webhook-new-contact-payload`,`https://api.mailslurp.com/schemas/webhook-new-attachment-payload` respectively.

**`memberof`** CreateWebhookOptions

#### Defined in

[src/generated/api.ts:1194](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1194)
