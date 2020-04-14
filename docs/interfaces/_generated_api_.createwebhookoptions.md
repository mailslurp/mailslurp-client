[MailSlurp JS](../README.md) › [Globals](../globals.md) › ["generated/api"](../modules/_generated_api_.md) › [CreateWebhookOptions](_generated_api_.createwebhookoptions.md)

# Interface: CreateWebhookOptions

Options for creating a webhook. Webhooks can be attached to inboxes and MailSlurp will POST a webhook payload to the URL specified whenever the inbox receives an email. Webhooks are great for processing many inbound emails.

**`export`** 

**`interface`** CreateWebhookOptions

## Hierarchy

* **CreateWebhookOptions**

## Index

### Properties

* [basicAuth](_generated_api_.createwebhookoptions.md#optional-basicauth)
* [name](_generated_api_.createwebhookoptions.md#optional-name)
* [url](_generated_api_.createwebhookoptions.md#optional-url)

## Properties

### `Optional` basicAuth

• **basicAuth**? : *[BasicAuthOptions](_generated_api_.basicauthoptions.md)*

*Defined in [src/generated/api.ts:467](https://github.com/mailslurp/mailslurp-client-ts-js/blob/e9348f1/src/generated/api.ts#L467)*

Optional basic authentication that MailSlurp should use when calling the URL. For instance if your URL is https://example.com then basic auth will call a URL like https://{username}@{password}:example.com

**`type`** {BasicAuthOptions}

**`memberof`** CreateWebhookOptions

___

### `Optional` name

• **name**? : *string*

*Defined in [src/generated/api.ts:473](https://github.com/mailslurp/mailslurp-client-ts-js/blob/e9348f1/src/generated/api.ts#L473)*

Optional name for the webhook

**`type`** {string}

**`memberof`** CreateWebhookOptions

___

### `Optional` url

• **url**? : *string*

*Defined in [src/generated/api.ts:479](https://github.com/mailslurp/mailslurp-client-ts-js/blob/e9348f1/src/generated/api.ts#L479)*

Public URL on your server that MailSlurp can post WebhookNotification payload to when an email is received. The payload of the submitted JSON is described by https://api.mailslurp.com/schemas/webhook-payload

**`type`** {string}

**`memberof`** CreateWebhookOptions
