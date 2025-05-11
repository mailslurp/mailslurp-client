[MailSlurp JS](../README.md) / Email

# Interface: Email

Email entity (also known as EmailDto). When an SMTP email message is received by MailSlurp it is parsed. The body and attachments are written to disk and the fields such as to, from, subject etc are stored in a database. The `body` contains the email content. If you want the original SMTP message see the `getRawEmail` endpoints. The attachments can be fetched using the AttachmentController

**`Export`**

**`Interface`**

Email

## Table of contents

### Properties

- [analysis](Email.md#analysis)
- [attachments](Email.md#attachments)
- [bcc](Email.md#bcc)
- [body](Email.md#body)
- [bodyExcerpt](Email.md#bodyexcerpt)
- [bodyMD5Hash](Email.md#bodymd5hash)
- [bodyPartContentTypes](Email.md#bodypartcontenttypes)
- [cc](Email.md#cc)
- [charset](Email.md#charset)
- [createdAt](Email.md#createdat)
- [domainId](Email.md#domainid)
- [externalId](Email.md#externalid)
- [favourite](Email.md#favourite)
- [from](Email.md#from)
- [headers](Email.md#headers)
- [headersMap](Email.md#headersmap)
- [html](Email.md#html)
- [id](Email.md#id)
- [inReplyTo](Email.md#inreplyto)
- [inboxId](Email.md#inboxid)
- [isHTML](Email.md#ishtml)
- [isXAmpHtml](Email.md#isxamphtml)
- [messageId](Email.md#messageid)
- [read](Email.md#read)
- [recipients](Email.md#recipients)
- [replyTo](Email.md#replyto)
- [sender](Email.md#sender)
- [sizeBytes](Email.md#sizebytes)
- [subject](Email.md#subject)
- [teamAccess](Email.md#teamaccess)
- [textExcerpt](Email.md#textexcerpt)
- [threadId](Email.md#threadid)
- [to](Email.md#to)
- [updatedAt](Email.md#updatedat)
- [userId](Email.md#userid)
- [xampHtml](Email.md#xamphtml)

## Properties

### analysis

• `Optional` **analysis**: [`EmailAnalysis`](EmailAnalysis.md)

**`Memberof`**

Email

___

### attachments

• `Optional` **attachments**: `string`[]

List of IDs of attachments found in the email. Use these IDs with the Inbox and Email Controllers to download attachments and attachment meta data such as filesize, name, extension.

**`Memberof`**

Email

___

### bcc

• `Optional` **bcc**: `string`[]

List of `BCC` recipients email addresses that the email was addressed to. See recipients object for names.

**`Memberof`**

Email

___

### body

• `Optional` **body**: `string`

The body of the email message as text parsed from the SMTP message body (does not include attachments). Fetch the raw content to access the SMTP message and use the attachments property to access attachments. The body is stored separately to the email entity so the body is not returned in paginated results only in full single email or wait requests.

**`Memberof`**

Email

___

### bodyExcerpt

• `Optional` **bodyExcerpt**: `string`

An excerpt of the body of the email message for quick preview. Takes HTML content part if exists falls back to TEXT content part if not

**`Memberof`**

Email

___

### bodyMD5Hash

• `Optional` **bodyMD5Hash**: `string`

A hash signature of the email message using MD5. Useful for comparing emails without fetching full body.

**`Memberof`**

Email

___

### bodyPartContentTypes

• `Optional` **bodyPartContentTypes**: `string`[]

A list of detected multipart mime message body part content types such as text/plain and text/html. Can be used with email bodyPart endpoints to fetch individual body parts.

**`Memberof`**

Email

___

### cc

• `Optional` **cc**: `string`[]

List of `CC` recipients email addresses that the email was addressed to. See recipients object for names.

**`Memberof`**

Email

___

### charset

• `Optional` **charset**: `string`

Detected character set of the email body such as UTF-8

**`Memberof`**

Email

___

### createdAt

• **createdAt**: `Date`

When was the email received by MailSlurp

**`Memberof`**

Email

___

### domainId

• `Optional` **domainId**: `string`

ID of the domain that received the email

**`Memberof`**

Email

___

### externalId

• `Optional` **externalId**: `string`

UID used by external IMAP server to identify email

**`Memberof`**

Email

___

### favourite

• `Optional` **favourite**: `boolean`

Is email favourited

**`Memberof`**

Email

___

### from

• `Optional` **from**: `string`

Who the email was sent from. An email address - see fromName for the sender name.

**`Memberof`**

Email

___

### headers

• `Optional` **headers**: `Object`

Collection of SMTP headers attached to email

**`Memberof`**

Email

#### Index signature

▪ [key: `string`]: `string`

___

### headersMap

• `Optional` **headersMap**: `Object`

Multi-value map of SMTP headers attached to email

**`Memberof`**

Email

#### Index signature

▪ [key: `string`]: `string`[]

___

### html

• `Optional` **html**: `boolean`

**`Memberof`**

Email

___

### id

• **id**: `string`

ID of the email entity

**`Memberof`**

Email

___

### inReplyTo

• `Optional` **inReplyTo**: `string`

Parsed value of In-Reply-To header. A Message-ID in a thread.

**`Memberof`**

Email

___

### inboxId

• **inboxId**: `string`

ID of the inbox that received the email

**`Memberof`**

Email

___

### isHTML

• `Optional` **isHTML**: `boolean`

Is the email body content type HTML?

**`Memberof`**

Email

___

### isXAmpHtml

• `Optional` **isXAmpHtml**: `boolean`

Is the email body content type x-amp-html Amp4Email?

**`Memberof`**

Email

___

### messageId

• `Optional` **messageId**: `string`

RFC 5322 Message-ID header value without angle brackets.

**`Memberof`**

Email

___

### read

• **read**: `boolean`

Read flag. Has the email ever been viewed in the dashboard or fetched via the API with a hydrated body? If so the email is marked as read. Paginated results do not affect read status. Read status is different to email opened event as it depends on your own account accessing the email. Email opened is determined by tracking pixels sent to other uses if enable during sending. You can listened for both email read and email opened events using webhooks.

**`Memberof`**

Email

___

### recipients

• `Optional` **recipients**: [`EmailRecipients`](EmailRecipients.md)

**`Memberof`**

Email

___

### replyTo

• `Optional` **replyTo**: `string`

The `replyTo` field on the received email message

**`Memberof`**

Email

___

### sender

• `Optional` **sender**: [`Sender`](Sender.md)

**`Memberof`**

Email

___

### sizeBytes

• `Optional` **sizeBytes**: `number`

Size of raw email message in bytes

**`Memberof`**

Email

___

### subject

• `Optional` **subject**: `string`

The subject line of the email message as specified by SMTP subject header

**`Memberof`**

Email

___

### teamAccess

• **teamAccess**: `boolean`

Can the email be accessed by organization team members

**`Memberof`**

Email

___

### textExcerpt

• `Optional` **textExcerpt**: `string`

An excerpt of the body of the email message for quick preview. Takes TEXT content part if exists

**`Memberof`**

Email

___

### threadId

• `Optional` **threadId**: `string`

MailSlurp thread ID for email chain that enables lookup for In-Reply-To and References fields.

**`Memberof`**

Email

___

### to

• **to**: `string`[]

List of `To` recipient email addresses that the email was addressed to. See recipients object for names.

**`Memberof`**

Email

___

### updatedAt

• **updatedAt**: `Date`

When was the email last updated

**`Memberof`**

Email

___

### userId

• **userId**: `string`

ID of user that email belongs to

**`Memberof`**

Email

___

### xampHtml

• `Optional` **xampHtml**: `boolean`

**`Memberof`**

Email
