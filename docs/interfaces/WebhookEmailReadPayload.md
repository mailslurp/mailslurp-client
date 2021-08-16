[MailSlurp JS](../README.md) / WebhookEmailReadPayload

# Interface: WebhookEmailReadPayload

EMAIL_READ webhook payload. Sent to your webhook url endpoint via HTTP POST when an email is read. This happens when an email is requested in full from the API or a user views the email in the dashboard.

**`export`**

**`interface`** WebhookEmailReadPayload

## Table of contents

### Properties

- [createdAt](WebhookEmailReadPayload.md#createdat)
- [emailId](WebhookEmailReadPayload.md#emailid)
- [emailIsRead](WebhookEmailReadPayload.md#emailisread)
- [eventName](WebhookEmailReadPayload.md#eventname)
- [inboxId](WebhookEmailReadPayload.md#inboxid)
- [messageId](WebhookEmailReadPayload.md#messageid)
- [webhookId](WebhookEmailReadPayload.md#webhookid)
- [webhookName](WebhookEmailReadPayload.md#webhookname)

## Properties

### createdAt

• `Optional` **createdAt**: `Date`

Date time of event creation

**`memberof`** WebhookEmailReadPayload

#### Defined in

[src/generated/api.ts:6347](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L6347)

___

### emailId

• `Optional` **emailId**: `string`

ID of the email that was received. Use this ID for fetching the email with the `EmailController`.

**`memberof`** WebhookEmailReadPayload

#### Defined in

[src/generated/api.ts:6353](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L6353)

___

### emailIsRead

• `Optional` **emailIsRead**: `boolean`

Is the email read

**`memberof`** WebhookEmailReadPayload

#### Defined in

[src/generated/api.ts:6359](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L6359)

___

### eventName

• `Optional` **eventName**: [`EventNameEnum`](../enums/WebhookEmailReadPayload.EventNameEnum.md)

Name of the event type webhook is being triggered for.

**`memberof`** WebhookEmailReadPayload

#### Defined in

[src/generated/api.ts:6365](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L6365)

___

### inboxId

• `Optional` **inboxId**: `string`

Id of the inbox that received an email

**`memberof`** WebhookEmailReadPayload

#### Defined in

[src/generated/api.ts:6371](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L6371)

___

### messageId

• `Optional` **messageId**: `string`

Idempotent message ID. Store this ID locally or in a database to prevent message duplication.

**`memberof`** WebhookEmailReadPayload

#### Defined in

[src/generated/api.ts:6377](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L6377)

___

### webhookId

• `Optional` **webhookId**: `string`

ID of webhook entity being triggered

**`memberof`** WebhookEmailReadPayload

#### Defined in

[src/generated/api.ts:6383](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L6383)

___

### webhookName

• `Optional` **webhookName**: `string`

Name of the webhook being triggered

**`memberof`** WebhookEmailReadPayload

#### Defined in

[src/generated/api.ts:6389](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L6389)
