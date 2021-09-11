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

[src/generated/api.ts:6332](https://github.com/mailslurp/mailslurp-client/blob/20b4039/src/generated/api.ts#L6332)

___

### eventName

• `Optional` **eventName**: [`EventNameEnum`](../enums/WebhookEmailOpenedPayload.EventNameEnum.md)

Name of the event type webhook is being triggered for.

**`memberof`** WebhookEmailOpenedPayload

#### Defined in

[src/generated/api.ts:6338](https://github.com/mailslurp/mailslurp-client/blob/20b4039/src/generated/api.ts#L6338)

___

### inboxId

• `Optional` **inboxId**: `string`

Id of the inbox that received an email

**`memberof`** WebhookEmailOpenedPayload

#### Defined in

[src/generated/api.ts:6344](https://github.com/mailslurp/mailslurp-client/blob/20b4039/src/generated/api.ts#L6344)

___

### messageId

• `Optional` **messageId**: `string`

Idempotent message ID. Store this ID locally or in a database to prevent message duplication.

**`memberof`** WebhookEmailOpenedPayload

#### Defined in

[src/generated/api.ts:6350](https://github.com/mailslurp/mailslurp-client/blob/20b4039/src/generated/api.ts#L6350)

___

### pixelId

• `Optional` **pixelId**: `string`

ID of the tracking pixel

**`memberof`** WebhookEmailOpenedPayload

#### Defined in

[src/generated/api.ts:6356](https://github.com/mailslurp/mailslurp-client/blob/20b4039/src/generated/api.ts#L6356)

___

### recipient

• `Optional` **recipient**: `string`

Email address for the recipient of the tracking pixel

**`memberof`** WebhookEmailOpenedPayload

#### Defined in

[src/generated/api.ts:6362](https://github.com/mailslurp/mailslurp-client/blob/20b4039/src/generated/api.ts#L6362)

___

### sentEmailId

• `Optional` **sentEmailId**: `string`

ID of sent email

**`memberof`** WebhookEmailOpenedPayload

#### Defined in

[src/generated/api.ts:6368](https://github.com/mailslurp/mailslurp-client/blob/20b4039/src/generated/api.ts#L6368)

___

### webhookId

• `Optional` **webhookId**: `string`

ID of webhook entity being triggered

**`memberof`** WebhookEmailOpenedPayload

#### Defined in

[src/generated/api.ts:6374](https://github.com/mailslurp/mailslurp-client/blob/20b4039/src/generated/api.ts#L6374)

___

### webhookName

• `Optional` **webhookName**: `string`

Name of the webhook being triggered

**`memberof`** WebhookEmailOpenedPayload

#### Defined in

[src/generated/api.ts:6380](https://github.com/mailslurp/mailslurp-client/blob/20b4039/src/generated/api.ts#L6380)
