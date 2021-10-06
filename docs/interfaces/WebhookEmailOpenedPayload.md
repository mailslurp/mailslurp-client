[MailSlurp JS](../README.md) / WebhookEmailOpenedPayload

# Interface: WebhookEmailOpenedPayload

EMAIL_OPENED webhook payload. Sent to your webhook url endpoint via HTTP POST when an email containing a tracking pixel is opened and the pixel image is loaded by a reader.

**`export`**

**`interface`** WebhookEmailOpenedPayload

## Table of contents

### Properties

- [createdAt](WebhookEmailOpenedPayload.md#createdat)
- [eventName](WebhookEmailOpenedPayload.md#eventname)
- [inboxId](WebhookEmailOpenedPayload.md#inboxid)
- [messageId](WebhookEmailOpenedPayload.md#messageid)
- [pixelId](WebhookEmailOpenedPayload.md#pixelid)
- [recipient](WebhookEmailOpenedPayload.md#recipient)
- [sentEmailId](WebhookEmailOpenedPayload.md#sentemailid)
- [webhookId](WebhookEmailOpenedPayload.md#webhookid)
- [webhookName](WebhookEmailOpenedPayload.md#webhookname)

## Properties

### createdAt

• `Optional` **createdAt**: `Date`

Date time of event creation

**`memberof`** WebhookEmailOpenedPayload

#### Defined in

[src/generated/api.ts:6378](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L6378)

___

### eventName

• `Optional` **eventName**: [`EventNameEnum`](../enums/WebhookEmailOpenedPayload.EventNameEnum.md)

Name of the event type webhook is being triggered for.

**`memberof`** WebhookEmailOpenedPayload

#### Defined in

[src/generated/api.ts:6384](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L6384)

___

### inboxId

• `Optional` **inboxId**: `string`

Id of the inbox that received an email

**`memberof`** WebhookEmailOpenedPayload

#### Defined in

[src/generated/api.ts:6390](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L6390)

___

### messageId

• `Optional` **messageId**: `string`

Idempotent message ID. Store this ID locally or in a database to prevent message duplication.

**`memberof`** WebhookEmailOpenedPayload

#### Defined in

[src/generated/api.ts:6396](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L6396)

___

### pixelId

• `Optional` **pixelId**: `string`

ID of the tracking pixel

**`memberof`** WebhookEmailOpenedPayload

#### Defined in

[src/generated/api.ts:6402](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L6402)

___

### recipient

• `Optional` **recipient**: `string`

Email address for the recipient of the tracking pixel

**`memberof`** WebhookEmailOpenedPayload

#### Defined in

[src/generated/api.ts:6408](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L6408)

___

### sentEmailId

• `Optional` **sentEmailId**: `string`

ID of sent email

**`memberof`** WebhookEmailOpenedPayload

#### Defined in

[src/generated/api.ts:6414](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L6414)

___

### webhookId

• `Optional` **webhookId**: `string`

ID of webhook entity being triggered

**`memberof`** WebhookEmailOpenedPayload

#### Defined in

[src/generated/api.ts:6420](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L6420)

___

### webhookName

• `Optional` **webhookName**: `string`

Name of the webhook being triggered

**`memberof`** WebhookEmailOpenedPayload

#### Defined in

[src/generated/api.ts:6426](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L6426)
