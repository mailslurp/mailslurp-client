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
- [phoneId](WebhookDto.md#phoneid)
- [requestBodyTemplate](WebhookDto.md#requestbodytemplate)
- [requestHeaders](WebhookDto.md#requestheaders)
- [updatedAt](WebhookDto.md#updatedat)
- [url](WebhookDto.md#url)
- [userId](WebhookDto.md#userid)

## Properties

### <a id="basicauth" name="basicauth"></a> basicAuth

• **basicAuth**: `boolean`

Does webhook expect basic authentication? If true it means you created this webhook with a username and password. MailSlurp will use these in the URL to authenticate itself.

**`memberof`** WebhookDto

___

### <a id="createdat" name="createdat"></a> createdAt

• **createdAt**: `Date`

When the webhook was created

**`memberof`** WebhookDto

___

### <a id="eventname" name="eventname"></a> eventName

• `Optional` **eventName**: [`WebhookDtoEventNameEnum`](../enums/WebhookDtoEventNameEnum.md)

Webhook trigger event name

**`memberof`** WebhookDto

___

### <a id="id" name="id"></a> id

• **id**: `string`

ID of the Webhook

**`memberof`** WebhookDto

___

### <a id="inboxid" name="inboxid"></a> inboxId

• `Optional` **inboxId**: `string`

The inbox that the Webhook will be triggered by. If null then webhook triggered at account level or phone level if phoneId set

**`memberof`** WebhookDto

___

### <a id="method" name="method"></a> method

• **method**: [`WebhookDtoMethodEnum`](../enums/WebhookDtoMethodEnum.md)

HTTP method that your server endpoint must listen for

**`memberof`** WebhookDto

___

### <a id="name" name="name"></a> name

• `Optional` **name**: `string`

Name of the webhook

**`memberof`** WebhookDto

___

### <a id="payloadjsonschema" name="payloadjsonschema"></a> payloadJsonSchema

• **payloadJsonSchema**: `string`

Deprecated. Fetch JSON Schema for webhook using the getJsonSchemaForWebhookPayload method

**`memberof`** WebhookDto

___

### <a id="phoneid" name="phoneid"></a> phoneId

• `Optional` **phoneId**: `string`

The phoneNumberId that the Webhook will be triggered by. If null then webhook triggered at account level or inbox level if inboxId set

**`memberof`** WebhookDto

___

### <a id="requestbodytemplate" name="requestbodytemplate"></a> requestBodyTemplate

• `Optional` **requestBodyTemplate**: `string`

Request body template for HTTP request that will be sent for the webhook. Use Moustache style template variables to insert values from the original event payload.

**`memberof`** WebhookDto

___

### <a id="requestheaders" name="requestheaders"></a> requestHeaders

• `Optional` **requestHeaders**: [`WebhookHeaders`](WebhookHeaders.md)

**`memberof`** WebhookDto

___

### <a id="updatedat" name="updatedat"></a> updatedAt

• **updatedAt**: `Date`

**`memberof`** WebhookDto

___

### <a id="url" name="url"></a> url

• **url**: `string`

URL of your server that the webhook will be sent to. The schema of the JSON that is sent is described by the payloadJsonSchema.

**`memberof`** WebhookDto

___

### <a id="userid" name="userid"></a> userId

• **userId**: `string`

User ID of the Webhook

**`memberof`** WebhookDto
