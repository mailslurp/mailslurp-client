[MailSlurp JS](../README.md) / Email

# Interface: Email

Email entity (also known as EmailDto). When an SMTP email message is received by MailSlurp it is parsed. The body and attachments are written to disk and the fields such as to, from, subject etc are stored in a database. The `body` contains the email content. If you want the original SMTP message see the `getRawEmail` endpoints. The attachments can be fetched using the AttachmentController

**`export`**

**`interface`** Email

## Table of contents

### Properties

- [analysis](Email.md#analysis)
- [attachments](Email.md#attachments)
- [bcc](Email.md#bcc)
- [body](Email.md#body)
- [bodyExcerpt](Email.md#bodyexcerpt)
- [bodyMD5Hash](Email.md#bodymd5hash)
- [cc](Email.md#cc)
- [charset](Email.md#charset)
- [createdAt](Email.md#createdat)
- [from](Email.md#from)
- [headers](Email.md#headers)
- [id](Email.md#id)
- [inboxId](Email.md#inboxid)
- [isHTML](Email.md#ishtml)
- [read](Email.md#read)
- [recipients](Email.md#recipients)
- [replyTo](Email.md#replyto)
- [sender](Email.md#sender)
- [subject](Email.md#subject)
- [teamAccess](Email.md#teamaccess)
- [to](Email.md#to)
- [updatedAt](Email.md#updatedat)
- [userId](Email.md#userid)

## Properties

### analysis

• `Optional` **analysis**: [`EmailAnalysis`](EmailAnalysis.md)

**`memberof`** Email

___

### attachments

• `Optional` **attachments**: `string`[]

List of IDs of attachments found in the email. Use these IDs with the Inbox and Email Controllers to download attachments and attachment meta data such as filesize, name, extension.

**`memberof`** Email

___

### bcc

• `Optional` **bcc**: `string`[]

List of `BCC` recipients email addresses that the email was addressed to. See recipients object for names.

**`memberof`** Email

___

### body

• `Optional` **body**: `string`

The body of the email message as text parsed from the SMTP message body (does not include attachments). Fetch the raw content to access the SMTP message and use the attachments property to access attachments. The body is stored separately to the email entity so the body is not returned in paginated results only in full single email or wait requests.

**`memberof`** Email

___

### bodyExcerpt

• `Optional` **bodyExcerpt**: `string`

An excerpt of the body of the email message for quick preview .

**`memberof`** Email

___

### bodyMD5Hash

• `Optional` **bodyMD5Hash**: `string`

A hash signature of the email message using MD5. Useful for comparing emails without fetching full body.

**`memberof`** Email

___

### cc

• `Optional` **cc**: `string`[]

List of `CC` recipients email addresses that the email was addressed to. See recipients object for names.

**`memberof`** Email

___

### charset

• `Optional` **charset**: `string`

Detected character set of the email body such as UTF-8

**`memberof`** Email

___

### createdAt

• `Optional` **createdAt**: `Date`

When was the email received by MailSlurp

**`memberof`** Email

___

### from

• `Optional` **from**: `string`

Who the email was sent from. An email address - see fromName for the sender name.

**`memberof`** Email

___

### headers

• `Optional` **headers**: `Object`

Collection of SMTP headers attached to email

**`memberof`** Email

#### Index signature

▪ [key: `string`]: `string`

___

### id

• `Optional` **id**: `string`

ID of the email entity

**`memberof`** Email

___

### inboxId

• `Optional` **inboxId**: `string`

ID of the inbox that received the email

**`memberof`** Email

___

### isHTML

• `Optional` **isHTML**: `boolean`

Is the email body HTML

**`memberof`** Email

___

### read

• `Optional` **read**: `boolean`

Read flag. Has the email ever been viewed in the dashboard or fetched via the API with a hydrated body? If so the email is marked as read. Paginated results do not affect read status. Read status is different to email opened event as it depends on your own account accessing the email. Email opened is determined by tracking pixels sent to other uses if enable during sending. You can listened for both email read and email opened events using webhooks.

**`memberof`** Email

___

### recipients

• `Optional` **recipients**: [`EmailRecipients`](EmailRecipients.md)

**`memberof`** Email

___

### replyTo

• `Optional` **replyTo**: `string`

The `replyTo` field on the received email message

**`memberof`** Email

___

### sender

• `Optional` **sender**: [`Sender`](Sender.md)

**`memberof`** Email

___

### subject

• `Optional` **subject**: `string`

The subject line of the email message as specified by SMTP subject header

**`memberof`** Email

___

### teamAccess

• `Optional` **teamAccess**: `boolean`

Can the email be accessed by organization team members

**`memberof`** Email

___

### to

• `Optional` **to**: `string`[]

List of `To` recipient email addresses that the email was addressed to. See recipients object for names.

**`memberof`** Email

___

### updatedAt

• `Optional` **updatedAt**: `Date`

When was the email last updated

**`memberof`** Email

___

### userId

• `Optional` **userId**: `string`

ID of user that email belongs to

**`memberof`** Email
