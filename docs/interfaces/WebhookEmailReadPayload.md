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

[src/generated/api.ts:6387](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/generated/api.ts#L6387)

___

### emailId

• `Optional` **emailId**: `string`

ID of the email that was received. Use this ID for fetching the email with the `EmailController`.

**`memberof`** WebhookEmailReadPayload

#### Defined in

[src/generated/api.ts:6393](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/generated/api.ts#L6393)

___

### emailIsRead

• `Optional` **emailIsRead**: `boolean`

Is the email read

**`memberof`** WebhookEmailReadPayload

#### Defined in

[src/generated/api.ts:6399](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/generated/api.ts#L6399)

___

### eventName

• `Optional` **eventName**: [`EventNameEnum`](../enums/WebhookEmailReadPayload.EventNameEnum.md)

Name of the event type webhook is being triggered for.

**`memberof`** WebhookEmailReadPayload

#### Defined in

[src/generated/api.ts:6405](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/generated/api.ts#L6405)

___

### inboxId

• `Optional` **inboxId**: `string`

Id of the inbox that received an email

**`memberof`** WebhookEmailReadPayload

#### Defined in

[src/generated/api.ts:6411](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/generated/api.ts#L6411)

___

### messageId

• `Optional` **messageId**: `string`

Idempotent message ID. Store this ID locally or in a database to prevent message duplication.

**`memberof`** WebhookEmailReadPayload

#### Defined in

[src/generated/api.ts:6417](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/generated/api.ts#L6417)

___

### webhookId

• `Optional` **webhookId**: `string`

ID of webhook entity being triggered

**`memberof`** WebhookEmailReadPayload

#### Defined in

[src/generated/api.ts:6423](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/generated/api.ts#L6423)

___

### webhookName

• `Optional` **webhookName**: `string`

Name of the webhook being triggered

**`memberof`** WebhookEmailReadPayload

#### Defined in

[src/generated/api.ts:6429](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/generated/api.ts#L6429)
