[MailSlurp JS](../README.md) / WebhookDto

# Interface: WebhookDto

Representation of a webhook for an inbox. The URL specified will be using by MailSlurp whenever an email is received by the attached inbox. A webhook entity should have a URL that points to your server. Your server should accept HTTP/S POST requests and return a success 200. MailSlurp will retry your webhooks if they fail. See https://api.mailslurp.com/schemas/webhook-payload for the payload schema.

**`Export`**

**`Interface`**

WebhookDto

## Table of contents

### Properties

- [basicAuth](WebhookDto.md#basicauth)
- [createdAt](WebhookDto.md#createdat)
- [eventName](WebhookDto.md#eventname)
- [id](WebhookDto.md#id)
- [ignoreInsecureSslCertificates](WebhookDto.md#ignoreinsecuresslcertificates)
- [inboxId](WebhookDto.md#inboxid)
- [method](WebhookDto.md#method)
- [name](WebhookDto.md#name)
- [payloadJsonSchema](WebhookDto.md#payloadjsonschema)
- [phoneId](WebhookDto.md#phoneid)
- [requestBodyTemplate](WebhookDto.md#requestbodytemplate)
- [requestHeaders](WebhookDto.md#requestheaders)
- [updatedAt](WebhookDto.md#updatedat)
- [url](WebhookDto.md#url)
- [useStaticIpRange](WebhookDto.md#usestaticiprange)
- [userId](WebhookDto.md#userid)

## Properties

### basicAuth

• **basicAuth**: `boolean`

Does webhook expect basic authentication? If true it means you created this webhook with a username and password. MailSlurp will use these in the URL to authenticate itself.

**`Memberof`**

WebhookDto

___

### createdAt

• **createdAt**: `Date`

When the webhook was created

**`Memberof`**

WebhookDto

___

### eventName

• `Optional` **eventName**: [`WebhookDtoEventNameEnum`](../enums/WebhookDtoEventNameEnum.md)

Webhook trigger event name

**`Memberof`**

WebhookDto

___

### id

• **id**: `string`

ID of the Webhook

**`Memberof`**

WebhookDto

___

### ignoreInsecureSslCertificates

• `Optional` **ignoreInsecureSslCertificates**: `boolean`

Should notifier ignore insecure SSL certificates

**`Memberof`**

WebhookDto

___

### inboxId

• `Optional` **inboxId**: `string`

The inbox that the Webhook will be triggered by. If null then webhook triggered at account level or phone level if phoneId set

**`Memberof`**

WebhookDto

___

### method

• **method**: [`WebhookDtoMethodEnum`](../enums/WebhookDtoMethodEnum.md)

HTTP method that your server endpoint must listen for

**`Memberof`**

WebhookDto

___

### name

• `Optional` **name**: `string`

Name of the webhook

**`Memberof`**

WebhookDto

___

### payloadJsonSchema

• **payloadJsonSchema**: `string`

Deprecated. Fetch JSON Schema for webhook using the getJsonSchemaForWebhookPayload method

**`Memberof`**

WebhookDto

___

### phoneId

• `Optional` **phoneId**: `string`

The phoneNumberId that the Webhook will be triggered by. If null then webhook triggered at account level or inbox level if inboxId set

**`Memberof`**

WebhookDto

___

### requestBodyTemplate

• `Optional` **requestBodyTemplate**: `string`

Request body template for HTTP request that will be sent for the webhook. Use Moustache style template variables to insert values from the original event payload.

**`Memberof`**

WebhookDto

___

### requestHeaders

• `Optional` **requestHeaders**: [`WebhookHeaders`](WebhookHeaders.md)

**`Memberof`**

WebhookDto

___

### updatedAt

• **updatedAt**: `Date`

**`Memberof`**

WebhookDto

___

### url

• **url**: `string`

URL of your server that the webhook will be sent to. The schema of the JSON that is sent is described by the payloadJsonSchema.

**`Memberof`**

WebhookDto

___

### useStaticIpRange

• `Optional` **useStaticIpRange**: `boolean`

Should notifier use static IP range when sending webhook payload

**`Memberof`**

WebhookDto

___

### userId

• **userId**: `string`

User ID of the Webhook

**`Memberof`**

WebhookDto
