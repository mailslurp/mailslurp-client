[MailSlurp JS](../README.md) / EmailPreview

# Interface: EmailPreview

Preview of an email message. For full message (including body and attachments) call the `getEmail` or other email endpoints with the provided email ID.

**`Export`**

**`Interface`**

EmailPreview

## Table of contents

### Properties

- [attachments](EmailPreview.md#attachments)
- [bcc](EmailPreview.md#bcc)
- [bodyPartContentTypes](EmailPreview.md#bodypartcontenttypes)
- [cc](EmailPreview.md#cc)
- [createdAt](EmailPreview.md#createdat)
- [domainId](EmailPreview.md#domainid)
- [favourite](EmailPreview.md#favourite)
- [from](EmailPreview.md#from)
- [id](EmailPreview.md#id)
- [inReplyTo](EmailPreview.md#inreplyto)
- [inboxId](EmailPreview.md#inboxid)
- [messageId](EmailPreview.md#messageid)
- [plusAddress](EmailPreview.md#plusaddress)
- [read](EmailPreview.md#read)
- [recipients](EmailPreview.md#recipients)
- [sender](EmailPreview.md#sender)
- [sizeBytes](EmailPreview.md#sizebytes)
- [subject](EmailPreview.md#subject)
- [threadId](EmailPreview.md#threadid)
- [to](EmailPreview.md#to)

## Properties

### attachments

• `Optional` **attachments**: `string`[]

List of IDs of attachments found in the email. Use these IDs with the Inbox and Email Controllers to download attachments and attachment meta data such as filesize, name, extension.

**`Memberof`**

EmailPreview

___

### bcc

• `Optional` **bcc**: `string`[]

List of `BCC` recipients email addresses that the email was addressed to. See recipients object for names.

**`Memberof`**

EmailPreview

___

### bodyPartContentTypes

• `Optional` **bodyPartContentTypes**: `string`[]

**`Memberof`**

EmailPreview

___

### cc

• `Optional` **cc**: `string`[]

List of `CC` recipients email addresses that the email was addressed to. See recipients object for names.

**`Memberof`**

EmailPreview

___

### createdAt

• **createdAt**: `Date`

When was the email received by MailSlurp

**`Memberof`**

EmailPreview

___

### domainId

• `Optional` **domainId**: `string`

ID of the domain that received the email

**`Memberof`**

EmailPreview

___

### favourite

• `Optional` **favourite**: `boolean`

**`Memberof`**

EmailPreview

___

### from

• `Optional` **from**: `string`

Who the email was sent from. An email address - see fromName for the sender name.

**`Memberof`**

EmailPreview

___

### id

• **id**: `string`

ID of the email entity

**`Memberof`**

EmailPreview

___

### inReplyTo

• `Optional` **inReplyTo**: `string`

Parsed value of In-Reply-To header. A Message-ID in a thread.

**`Memberof`**

EmailPreview

___

### inboxId

• `Optional` **inboxId**: `string`

ID of the inbox that received the email

**`Memberof`**

EmailPreview

___

### messageId

• `Optional` **messageId**: `string`

RFC 5322 Message-ID header value without angle brackets.

**`Memberof`**

EmailPreview

___

### plusAddress

• `Optional` **plusAddress**: `string`

**`Memberof`**

EmailPreview

___

### read

• **read**: `boolean`

Read flag. Has the email ever been viewed in the dashboard or fetched via the API with a hydrated body? If so the email is marked as read. Paginated results do not affect read status. Read status is different to email opened event as it depends on your own account accessing the email. Email opened is determined by tracking pixels sent to other uses if enable during sending. You can listened for both email read and email opened events using webhooks.

**`Memberof`**

EmailPreview

___

### recipients

• `Optional` **recipients**: [`EmailRecipients`](EmailRecipients.md)

**`Memberof`**

EmailPreview

___

### sender

• `Optional` **sender**: [`Sender`](Sender.md)

**`Memberof`**

EmailPreview

___

### sizeBytes

• `Optional` **sizeBytes**: `number`

**`Memberof`**

EmailPreview

___

### subject

• `Optional` **subject**: `string`

The subject line of the email message as specified by SMTP subject header

**`Memberof`**

EmailPreview

___

### threadId

• `Optional` **threadId**: `string`

MailSlurp thread ID for email chain that enables lookup for In-Reply-To and References fields.

**`Memberof`**

EmailPreview

___

### to

• **to**: `string`[]

List of `To` recipient email addresses that the email was addressed to. See recipients object for names.

**`Memberof`**

EmailPreview
