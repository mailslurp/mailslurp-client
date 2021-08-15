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

[src/generated/api.ts:6266](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L6266)

___

### eventName

• `Optional` **eventName**: [`EventNameEnum`](../enums/WebhookEmailOpenedPayload.EventNameEnum.md)

Name of the event type webhook is being triggered for.

**`memberof`** WebhookEmailOpenedPayload

#### Defined in

[src/generated/api.ts:6272](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L6272)

___

### inboxId

• `Optional` **inboxId**: `string`

Id of the inbox that received an email

**`memberof`** WebhookEmailOpenedPayload

#### Defined in

[src/generated/api.ts:6278](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L6278)

___

### messageId

• `Optional` **messageId**: `string`

Idempotent message ID. Store this ID locally or in a database to prevent message duplication.

**`memberof`** WebhookEmailOpenedPayload

#### Defined in

[src/generated/api.ts:6284](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L6284)

___

### pixelId

• `Optional` **pixelId**: `string`

ID of the tracking pixel

**`memberof`** WebhookEmailOpenedPayload

#### Defined in

[src/generated/api.ts:6290](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L6290)

___

### recipient

• `Optional` **recipient**: `string`

Email address for the recipient of the tracking pixel

**`memberof`** WebhookEmailOpenedPayload

#### Defined in

[src/generated/api.ts:6296](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L6296)

___

### sentEmailId

• `Optional` **sentEmailId**: `string`

ID of sent email

**`memberof`** WebhookEmailOpenedPayload

#### Defined in

[src/generated/api.ts:6302](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L6302)

___

### webhookId

• `Optional` **webhookId**: `string`

ID of webhook entity being triggered

**`memberof`** WebhookEmailOpenedPayload

#### Defined in

[src/generated/api.ts:6308](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L6308)

___

### webhookName

• `Optional` **webhookName**: `string`

Name of the webhook being triggered

**`memberof`** WebhookEmailOpenedPayload

#### Defined in

[src/generated/api.ts:6314](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L6314)
