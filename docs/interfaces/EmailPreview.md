[MailSlurp JS](../README.md) / EmailPreview

# Interface: EmailPreview

Preview of an email message. For full message (including body and attachments) call the `getEmail` or other email endpoints with the provided email ID.

**`export`**

**`interface`** EmailPreview

## Table of contents

### Properties

- [attachments](EmailPreview.md#attachments)
- [bcc](EmailPreview.md#bcc)
- [cc](EmailPreview.md#cc)
- [createdAt](EmailPreview.md#createdat)
- [from](EmailPreview.md#from)
- [id](EmailPreview.md#id)
- [read](EmailPreview.md#read)
- [subject](EmailPreview.md#subject)
- [to](EmailPreview.md#to)

## Properties

### attachments

• `Optional` **attachments**: `string`[]

List of IDs of attachments found in the email. Use these IDs with the Inbox and Email Controllers to download attachments and attachment meta data such as filesize, name, extension.

**`memberof`** EmailPreview

#### Defined in

[src/generated/api.ts:2075](https://github.com/mailslurp/mailslurp-client/blob/113e801/src/generated/api.ts#L2075)

___

### bcc

• `Optional` **bcc**: `string`[]

List of `BCC` recipients email addresses that the email was addressed to. See recipients object for names.

**`memberof`** EmailPreview

#### Defined in

[src/generated/api.ts:2081](https://github.com/mailslurp/mailslurp-client/blob/113e801/src/generated/api.ts#L2081)

___

### cc

• `Optional` **cc**: `string`[]

List of `CC` recipients email addresses that the email was addressed to. See recipients object for names.

**`memberof`** EmailPreview

#### Defined in

[src/generated/api.ts:2087](https://github.com/mailslurp/mailslurp-client/blob/113e801/src/generated/api.ts#L2087)

___

### createdAt

• `Optional` **createdAt**: `Date`

When was the email received by MailSlurp

**`memberof`** EmailPreview

#### Defined in

[src/generated/api.ts:2093](https://github.com/mailslurp/mailslurp-client/blob/113e801/src/generated/api.ts#L2093)

___

### from

• `Optional` **from**: `string`

Who the email was sent from. An email address - see fromName for the sender name.

**`memberof`** EmailPreview

#### Defined in

[src/generated/api.ts:2099](https://github.com/mailslurp/mailslurp-client/blob/113e801/src/generated/api.ts#L2099)

___

### id

• `Optional` **id**: `string`

ID of the email entity

**`memberof`** EmailPreview

#### Defined in

[src/generated/api.ts:2105](https://github.com/mailslurp/mailslurp-client/blob/113e801/src/generated/api.ts#L2105)

___

### read

• `Optional` **read**: `boolean`

Read flag. Has the email ever been viewed in the dashboard or fetched via the API with a hydrated body? If so the email is marked as read. Paginated results do not affect read status. Read status is different to email opened event as it depends on your own account accessing the email. Email opened is determined by tracking pixels sent to other uses if enable during sending. You can listened for both email read and email opened events using webhooks.

**`memberof`** EmailPreview

#### Defined in

[src/generated/api.ts:2111](https://github.com/mailslurp/mailslurp-client/blob/113e801/src/generated/api.ts#L2111)

___

### subject

• `Optional` **subject**: `string`

The subject line of the email message as specified by SMTP subject header

**`memberof`** EmailPreview

#### Defined in

[src/generated/api.ts:2117](https://github.com/mailslurp/mailslurp-client/blob/113e801/src/generated/api.ts#L2117)

___

### to

• `Optional` **to**: `string`[]

List of `To` recipient email addresses that the email was addressed to. See recipients object for names.

**`memberof`** EmailPreview

#### Defined in

[src/generated/api.ts:2123](https://github.com/mailslurp/mailslurp-client/blob/113e801/src/generated/api.ts#L2123)
