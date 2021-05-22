**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / CreateWebhookOptions

# Namespace: CreateWebhookOptions

**`export`** 

**`namespace`** CreateWebhookOptions

## Index

### Enumerations

* [EventNameEnum](../enums/createwebhookoptions.eventnameenum.md)

### Properties

* [basicAuth](createwebhookoptions.md#basicauth)
* [eventName](createwebhookoptions.md#eventname)
* [name](createwebhookoptions.md#name)
* [url](createwebhookoptions.md#url)

## Properties

### basicAuth

• `Optional` **basicAuth**: [BasicAuthOptions](../interfaces/basicauthoptions.md)

*Defined in [src/generated/api.ts:848](https://github.com/mailslurp/mailslurp-client/blob/8d5c17f/src/generated/api.ts#L848)*

Optional basic authentication that MailSlurp should use when calling the URL. For instance if your URL is https://example.com then basic auth will call a URL like https://{username}@{password}:example.com

**`memberof`** CreateWebhookOptions

___

### eventName

• `Optional` **eventName**: [EventNameEnum](../enums/createwebhookoptions.eventnameenum.md)

*Defined in [src/generated/api.ts:854](https://github.com/mailslurp/mailslurp-client/blob/8d5c17f/src/generated/api.ts#L854)*

Optional webhook event name. Default is `EMAIL_RECEIVED`. Payload differ according to the webhook event name.

**`memberof`** CreateWebhookOptions

___

### name

• `Optional` **name**: string

*Defined in [src/generated/api.ts:860](https://github.com/mailslurp/mailslurp-client/blob/8d5c17f/src/generated/api.ts#L860)*

Optional name for the webhook

**`memberof`** CreateWebhookOptions

___

### url

• `Optional` **url**: string

*Defined in [src/generated/api.ts:866](https://github.com/mailslurp/mailslurp-client/blob/8d5c17f/src/generated/api.ts#L866)*

Public URL on your server that MailSlurp can post WebhookNotification payload to when an email is received. The payload of the submitted JSON is described by https://api.mailslurp.com/schemas/webhook-payload

**`memberof`** CreateWebhookOptions
