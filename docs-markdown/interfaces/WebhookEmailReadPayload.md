[MailSlurp JS](../README.md) / WebhookEmailReadPayload

# Interface: WebhookEmailReadPayload

EMAIL_READ webhook payload. Sent to your webhook url endpoint via HTTP POST when an email is read. This happens when an email is requested in full from the API or a user views the email in the dashboard.

**`Export`**

**`Interface`**

WebhookEmailReadPayload

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

• **createdAt**: `Date`

Date time of event creation

**`Memberof`**

WebhookEmailReadPayload

___

### emailId

• **emailId**: `string`

ID of the email that was received. Use this ID for fetching the email with the `EmailController`.

**`Memberof`**

WebhookEmailReadPayload

___

### emailIsRead

• **emailIsRead**: `boolean`

Is the email read

**`Memberof`**

WebhookEmailReadPayload

___

### eventName

• **eventName**: [`WebhookEmailReadPayloadEventNameEnum`](../enums/WebhookEmailReadPayloadEventNameEnum.md)

Name of the event type webhook is being triggered for.

**`Memberof`**

WebhookEmailReadPayload

___

### inboxId

• **inboxId**: `string`

Id of the inbox

**`Memberof`**

WebhookEmailReadPayload

___

### messageId

• **messageId**: `string`

Idempotent message ID. Store this ID locally or in a database to prevent message duplication.

**`Memberof`**

WebhookEmailReadPayload

___

### webhookId

• **webhookId**: `string`

ID of webhook entity being triggered

**`Memberof`**

WebhookEmailReadPayload

___

### webhookName

• `Optional` **webhookName**: `string`

Name of the webhook being triggered

**`Memberof`**

WebhookEmailReadPayload
