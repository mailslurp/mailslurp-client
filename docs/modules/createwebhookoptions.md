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

*Defined in [src/generated/api.ts:890](https://github.com/mailslurp/mailslurp-client/blob/6b679b8/src/generated/api.ts#L890)*

Optional basic authentication that MailSlurp should use when calling the URL. For instance if your URL is https://example.com then basic auth will call a URL like https://{username}@{password}:example.com

**`memberof`** CreateWebhookOptions

___

### eventName

• `Optional` **eventName**: [EventNameEnum](../enums/createwebhookoptions.eventnameenum.md)

*Defined in [src/generated/api.ts:896](https://github.com/mailslurp/mailslurp-client/blob/6b679b8/src/generated/api.ts#L896)*

Optional webhook event name. Default is `EMAIL_RECEIVED`. Payload differ according to the webhook event name.

**`memberof`** CreateWebhookOptions

___

### name

• `Optional` **name**: string

*Defined in [src/generated/api.ts:902](https://github.com/mailslurp/mailslurp-client/blob/6b679b8/src/generated/api.ts#L902)*

Optional name for the webhook

**`memberof`** CreateWebhookOptions

___

### url

• `Optional` **url**: string

*Defined in [src/generated/api.ts:908](https://github.com/mailslurp/mailslurp-client/blob/6b679b8/src/generated/api.ts#L908)*

Public URL on your server that MailSlurp can post WebhookNotification payload to when an email is received. The payload of the submitted JSON is described by https://api.mailslurp.com/schemas/webhook-payload

**`memberof`** CreateWebhookOptions
