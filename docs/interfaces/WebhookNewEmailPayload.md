[MailSlurp JS](../README.md) / WebhookNewEmailPayload

# Interface: WebhookNewEmailPayload

NEW_EMAIL webhook payload. Sent to your webhook url endpoint via HTTP POST when an email is received by the inbox that your webhook is attached to. Use the email ID to fetch the full email body or attachments.

**`export`**

**`interface`** WebhookNewEmailPayload

## Table of contents

### Properties

- [attachmentMetaDatas](WebhookNewEmailPayload.md#attachmentmetadatas)
- [bcc](WebhookNewEmailPayload.md#bcc)
- [cc](WebhookNewEmailPayload.md#cc)
- [createdAt](WebhookNewEmailPayload.md#createdat)
- [emailId](WebhookNewEmailPayload.md#emailid)
- [eventName](WebhookNewEmailPayload.md#eventname)
- [from](WebhookNewEmailPayload.md#from)
- [inboxId](WebhookNewEmailPayload.md#inboxid)
- [messageId](WebhookNewEmailPayload.md#messageid)
- [subject](WebhookNewEmailPayload.md#subject)
- [to](WebhookNewEmailPayload.md#to)
- [webhookId](WebhookNewEmailPayload.md#webhookid)
- [webhookName](WebhookNewEmailPayload.md#webhookname)

## Properties

### attachmentMetaDatas

• `Optional` **attachmentMetaDatas**: [`AttachmentMetaData`](AttachmentMetaData.md)[]

List of attachment meta data objects if attachments present

**`memberof`** WebhookNewEmailPayload

#### Defined in

[src/generated/api.ts:6614](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L6614)

___

### bcc

• `Optional` **bcc**: `string`[]

List of `BCC` recipients email was addressed to

**`memberof`** WebhookNewEmailPayload

#### Defined in

[src/generated/api.ts:6620](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L6620)

___

### cc

• `Optional` **cc**: `string`[]

List of `CC` recipients email was addressed to

**`memberof`** WebhookNewEmailPayload

#### Defined in

[src/generated/api.ts:6626](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L6626)

___

### createdAt

• `Optional` **createdAt**: `Date`

Date time of event creation

**`memberof`** WebhookNewEmailPayload

#### Defined in

[src/generated/api.ts:6632](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L6632)

___

### emailId

• `Optional` **emailId**: `string`

ID of the email that was received. Use this ID for fetching the email with the `EmailController`.

**`memberof`** WebhookNewEmailPayload

#### Defined in

[src/generated/api.ts:6638](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L6638)

___

### eventName

• `Optional` **eventName**: [`EventNameEnum`](../enums/WebhookNewEmailPayload.EventNameEnum.md)

Name of the event type webhook is being triggered for.

**`memberof`** WebhookNewEmailPayload

#### Defined in

[src/generated/api.ts:6644](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L6644)

___

### from

• `Optional` **from**: `string`

Who the email was sent from

**`memberof`** WebhookNewEmailPayload

#### Defined in

[src/generated/api.ts:6650](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L6650)

___

### inboxId

• `Optional` **inboxId**: `string`

Id of the inbox that received an email

**`memberof`** WebhookNewEmailPayload

#### Defined in

[src/generated/api.ts:6656](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L6656)

___

### messageId

• `Optional` **messageId**: `string`

Idempotent message ID. Store this ID locally or in a database to prevent message duplication.

**`memberof`** WebhookNewEmailPayload

#### Defined in

[src/generated/api.ts:6662](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L6662)

___

### subject

• `Optional` **subject**: `string`

The subject line of the email message

**`memberof`** WebhookNewEmailPayload

#### Defined in

[src/generated/api.ts:6668](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L6668)

___

### to

• `Optional` **to**: `string`[]

List of `To` recipients that email was addressed to

**`memberof`** WebhookNewEmailPayload

#### Defined in

[src/generated/api.ts:6674](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L6674)

___

### webhookId

• `Optional` **webhookId**: `string`

ID of webhook entity being triggered

**`memberof`** WebhookNewEmailPayload

#### Defined in

[src/generated/api.ts:6680](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L6680)

___

### webhookName

• `Optional` **webhookName**: `string`

Name of the webhook being triggered

**`memberof`** WebhookNewEmailPayload

#### Defined in

[src/generated/api.ts:6686](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L6686)
