[MailSlurp JS](../README.md) / WebhookDto

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

#### Defined in

[src/generated/api.ts:6199](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/generated/api.ts#L6199)

___

### createdAt

• `Optional` **createdAt**: `Date`

When the webhook was created

**`memberof`** WebhookDto

#### Defined in

[src/generated/api.ts:6205](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/generated/api.ts#L6205)

___

### eventName

• `Optional` **eventName**: [`EventNameEnum`](../enums/WebhookDto.EventNameEnum.md)

**`memberof`** WebhookDto

#### Defined in

[src/generated/api.ts:6211](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/generated/api.ts#L6211)

___

### id

• `Optional` **id**: `string`

ID of the Webhook

**`memberof`** WebhookDto

#### Defined in

[src/generated/api.ts:6217](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/generated/api.ts#L6217)

___

### inboxId

• `Optional` **inboxId**: `string`

The inbox that the Webhook will be triggered by

**`memberof`** WebhookDto

#### Defined in

[src/generated/api.ts:6223](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/generated/api.ts#L6223)

___

### method

• `Optional` **method**: [`MethodEnum`](../enums/WebhookDto.MethodEnum.md)

HTTP method that your server endpoint must listen for

**`memberof`** WebhookDto

#### Defined in

[src/generated/api.ts:6229](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/generated/api.ts#L6229)

___

### name

• `Optional` **name**: `string`

Name of the webhook

**`memberof`** WebhookDto

#### Defined in

[src/generated/api.ts:6235](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/generated/api.ts#L6235)

___

### payloadJsonSchema

• `Optional` **payloadJsonSchema**: `string`

JSON Schema for the payload that will be sent to your URL via the HTTP method described.

**`memberof`** WebhookDto

#### Defined in

[src/generated/api.ts:6241](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/generated/api.ts#L6241)

___

### updatedAt

• **updatedAt**: `Date`

**`memberof`** WebhookDto

#### Defined in

[src/generated/api.ts:6247](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/generated/api.ts#L6247)

___

### url

• `Optional` **url**: `string`

URL of your server that the webhook will be sent to. The schema of the JSON that is sent is described by the payloadJsonSchema.

**`memberof`** WebhookDto

#### Defined in

[src/generated/api.ts:6253](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/generated/api.ts#L6253)

___

### userId

• `Optional` **userId**: `string`

User ID of the Webhook

**`memberof`** WebhookDto

#### Defined in

[src/generated/api.ts:6259](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/generated/api.ts#L6259)
