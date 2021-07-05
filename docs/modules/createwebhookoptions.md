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

*Defined in [src/generated/api.ts:968](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L968)*

Optional basic authentication that MailSlurp should use when calling the URL. For instance if your URL is https://example.com then basic auth will call a URL like https://{username}@{password}:example.com

**`memberof`** CreateWebhookOptions

___

### eventName

• `Optional` **eventName**: [EventNameEnum](../enums/createwebhookoptions.eventnameenum.md)

*Defined in [src/generated/api.ts:974](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L974)*

Optional webhook event name. Default is `EMAIL_RECEIVED` and is triggered when an email is received by the inbox associated with the webhook. Payload differ according to the webhook event name. The other events are `NEW_EMAIL`, `NEW_CONTACT`, and `NEW_ATTACHMENT` and `EMAIL_OPENED`. `EMAIL_OPENED` requires the use of tracking pixels when sending. See the email tracking guide for more information.

**`memberof`** CreateWebhookOptions

___

### name

• `Optional` **name**: string

*Defined in [src/generated/api.ts:980](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L980)*

Optional name for the webhook

**`memberof`** CreateWebhookOptions

___

### url

• `Optional` **url**: string

*Defined in [src/generated/api.ts:986](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L986)*

Public URL on your server that MailSlurp can post WebhookNotification payload to when an email is received or an event is trigger. The payload of the submitted JSON is dependent on the webhook event type. The default `EMAIL_RECEIVED` payload is described by `https://api.mailslurp.com/schemas/webhook-payload`. The other events, `NEW_EMAIL`, `NEW_CONTACT`, and `NEW_ATTACHMENT` are described by `https://api.mailslurp.com/schemas/webhook-new-email-payload`, `https://api.mailslurp.com/schemas/webhook-new-contact-payload`,`https://api.mailslurp.com/schemas/webhook-new-attachment-payload` respectively.

**`memberof`** CreateWebhookOptions
