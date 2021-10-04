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

[src/generated/api.ts:6459](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L6459)

___

### emailId

• `Optional` **emailId**: `string`

ID of the email that was received. Use this ID for fetching the email with the `EmailController`.

**`memberof`** WebhookEmailReadPayload

#### Defined in

[src/generated/api.ts:6465](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L6465)

___

### emailIsRead

• `Optional` **emailIsRead**: `boolean`

Is the email read

**`memberof`** WebhookEmailReadPayload

#### Defined in

[src/generated/api.ts:6471](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L6471)

___

### eventName

• `Optional` **eventName**: [`EventNameEnum`](../enums/WebhookEmailReadPayload.EventNameEnum.md)

Name of the event type webhook is being triggered for.

**`memberof`** WebhookEmailReadPayload

#### Defined in

[src/generated/api.ts:6477](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L6477)

___

### inboxId

• `Optional` **inboxId**: `string`

Id of the inbox that received an email

**`memberof`** WebhookEmailReadPayload

#### Defined in

[src/generated/api.ts:6483](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L6483)

___

### messageId

• `Optional` **messageId**: `string`

Idempotent message ID. Store this ID locally or in a database to prevent message duplication.

**`memberof`** WebhookEmailReadPayload

#### Defined in

[src/generated/api.ts:6489](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L6489)

___

### webhookId

• `Optional` **webhookId**: `string`

ID of webhook entity being triggered

**`memberof`** WebhookEmailReadPayload

#### Defined in

[src/generated/api.ts:6495](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L6495)

___

### webhookName

• `Optional` **webhookName**: `string`

Name of the webhook being triggered

**`memberof`** WebhookEmailReadPayload

#### Defined in

[src/generated/api.ts:6501](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L6501)
