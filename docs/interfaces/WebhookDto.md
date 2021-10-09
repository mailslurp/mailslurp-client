# Interface: WebhookDto

Representation of a webhook for an inbox. The URL specified will be using by MailSlurp whenever an email is received by the attached inbox. A webhook entity should have a URL that points to your server. Your server should accept HTTP/S POST requests and return a success 200. MailSlurp will retry your webhooks if they fail. See https://api.mailslurp.com/schemas/webhook-payload for the payload schema.

**`export`**

**`interface`** WebhookDto

## Table of contents

### Properties

- [basicAuth](WebhookDto.md#basicauth)
- [createdAt](WebhookDto.md#createdat)
- [eventName](WebhookDto.md#eventname)
- [id](WebhookDto.md#id)
- [inboxId](WebhookDto.md#inboxid)
- [method](WebhookDto.md#method)
- [name](WebhookDto.md#name)
- [payloadJsonSchema](WebhookDto.md#payloadjsonschema)
- [updatedAt](WebhookDto.md#updatedat)
- [url](WebhookDto.md#url)
- [userId](WebhookDto.md#userid)

## Properties

### basicAuth

• `Optional` **basicAuth**: `boolean`

Does webhook expect basic authentication? If true it means you created this webhook with a username and password. MailSlurp will use these in the URL to authenticate itself.

**`memberof`** WebhookDto

___

### createdAt

• `Optional` **createdAt**: `Date`

When the webhook was created

**`memberof`** WebhookDto

___

### eventName

• `Optional` **eventName**: [`WebhookDtoEventNameEnum`](../enums/WebhookDtoEventNameEnum.md)

**`memberof`** WebhookDto

___

### id

• `Optional` **id**: `string`

ID of the Webhook

**`memberof`** WebhookDto

___

### inboxId

• `Optional` **inboxId**: `string`

The inbox that the Webhook will be triggered by

**`memberof`** WebhookDto

___

### method

• `Optional` **method**: [`WebhookDtoMethodEnum`](../enums/WebhookDtoMethodEnum.md)

HTTP method that your server endpoint must listen for

**`memberof`** WebhookDto

___

### name

• `Optional` **name**: `string`

Name of the webhook

**`memberof`** WebhookDto

___

### payloadJsonSchema

• `Optional` **payloadJsonSchema**: `string`

Deprecated. Fetch JSON Schema for webhook using the getJsonSchemaForWebhookPayload method

**`memberof`** WebhookDto

___

### updatedAt

• **updatedAt**: `Date`

**`memberof`** WebhookDto

___

### url

• `Optional` **url**: `string`

URL of your server that the webhook will be sent to. The schema of the JSON that is sent is described by the payloadJsonSchema.

**`memberof`** WebhookDto

___

### userId

• `Optional` **userId**: `string`

User ID of the Webhook

**`memberof`** WebhookDto
