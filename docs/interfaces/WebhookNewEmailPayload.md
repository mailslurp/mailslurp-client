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

[src/generated/api.ts:6726](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L6726)

___

### bcc

• `Optional` **bcc**: `string`[]

List of `BCC` recipients email addresses that the email was addressed to. See recipients object for names.

**`memberof`** WebhookNewEmailPayload

#### Defined in

[src/generated/api.ts:6732](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L6732)

___

### cc

• `Optional` **cc**: `string`[]

List of `CC` recipients email addresses that the email was addressed to. See recipients object for names.

**`memberof`** WebhookNewEmailPayload

#### Defined in

[src/generated/api.ts:6738](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L6738)

___

### createdAt

• `Optional` **createdAt**: `Date`

Date time of event creation

**`memberof`** WebhookNewEmailPayload

#### Defined in

[src/generated/api.ts:6744](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L6744)

___

### emailId

• `Optional` **emailId**: `string`

ID of the email that was received. Use this ID for fetching the email with the `EmailController`.

**`memberof`** WebhookNewEmailPayload

#### Defined in

[src/generated/api.ts:6750](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L6750)

___

### eventName

• `Optional` **eventName**: [`EventNameEnum`](../enums/WebhookNewEmailPayload.EventNameEnum.md)

Name of the event type webhook is being triggered for.

**`memberof`** WebhookNewEmailPayload

#### Defined in

[src/generated/api.ts:6756](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L6756)

___

### from

• `Optional` **from**: `string`

Who the email was sent from. An email address - see fromName for the sender name.

**`memberof`** WebhookNewEmailPayload

#### Defined in

[src/generated/api.ts:6762](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L6762)

___

### inboxId

• `Optional` **inboxId**: `string`

Id of the inbox that received an email

**`memberof`** WebhookNewEmailPayload

#### Defined in

[src/generated/api.ts:6768](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L6768)

___

### messageId

• `Optional` **messageId**: `string`

Idempotent message ID. Store this ID locally or in a database to prevent message duplication.

**`memberof`** WebhookNewEmailPayload

#### Defined in

[src/generated/api.ts:6774](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L6774)

___

### subject

• `Optional` **subject**: `string`

The subject line of the email message as specified by SMTP subject header

**`memberof`** WebhookNewEmailPayload

#### Defined in

[src/generated/api.ts:6780](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L6780)

___

### to

• `Optional` **to**: `string`[]

List of `To` recipient email addresses that the email was addressed to. See recipients object for names.

**`memberof`** WebhookNewEmailPayload

#### Defined in

[src/generated/api.ts:6786](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L6786)

___

### webhookId

• `Optional` **webhookId**: `string`

ID of webhook entity being triggered

**`memberof`** WebhookNewEmailPayload

#### Defined in

[src/generated/api.ts:6792](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L6792)

___

### webhookName

• `Optional` **webhookName**: `string`

Name of the webhook being triggered

**`memberof`** WebhookNewEmailPayload

#### Defined in

[src/generated/api.ts:6798](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L6798)
