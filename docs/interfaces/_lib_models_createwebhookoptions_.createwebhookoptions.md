[MailSlurp JS](../README.md) › [Globals](../globals.md) › ["lib/models/CreateWebhookOptions"](../modules/_lib_models_createwebhookoptions_.md) › [CreateWebhookOptions](_lib_models_createwebhookoptions_.createwebhookoptions.md)

# Interface: CreateWebhookOptions

Options for creating a webhook. Webhooks can be attached to inboxes and MailSlurp will POST a webhook payload to the URL specified whenever the inbox receives an email. Webhooks are great for processing many inbound emails.

**`export`** 

**`interface`** CreateWebhookOptions

## Hierarchy

* **CreateWebhookOptions**

## Index

### Properties

* [basicAuth](_lib_models_createwebhookoptions_.createwebhookoptions.md#optional-basicauth)
* [name](_lib_models_createwebhookoptions_.createwebhookoptions.md#optional-name)
* [url](_lib_models_createwebhookoptions_.createwebhookoptions.md#optional-url)

## Properties

### `Optional` basicAuth

• **basicAuth**? : *[BasicAuthOptions](_lib_models_basicauthoptions_.basicauthoptions.md)*

*Defined in [src/lib/models/CreateWebhookOptions.ts:34](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/CreateWebhookOptions.ts#L34)*

**`type`** {BasicAuthOptions}

**`memberof`** CreateWebhookOptions

___

### `Optional` name

• **name**? : *string*

*Defined in [src/lib/models/CreateWebhookOptions.ts:40](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/CreateWebhookOptions.ts#L40)*

Optional name for the webhook

**`type`** {string}

**`memberof`** CreateWebhookOptions

___

### `Optional` url

• **url**? : *string*

*Defined in [src/lib/models/CreateWebhookOptions.ts:46](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/CreateWebhookOptions.ts#L46)*

Public URL on your server that MailSlurp can post WebhookNotification payload to when an email is received. The payload of the submitted JSON is described by https://api.mailslurp.com/schemas/webhook-payload

**`type`** {string}

**`memberof`** CreateWebhookOptions
