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
- [domainId](Email.md#domainid)
- [from](Email.md#from)
- [headers](Email.md#headers)
- [html](Email.md#html)
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

### <a id="analysis" name="analysis"></a> analysis

• `Optional` **analysis**: [`EmailAnalysis`](EmailAnalysis.md)

**`memberof`** Email

___

### <a id="attachments" name="attachments"></a> attachments

• `Optional` **attachments**: `string`[]

List of IDs of attachments found in the email. Use these IDs with the Inbox and Email Controllers to download attachments and attachment meta data such as filesize, name, extension.

**`memberof`** Email

___

### <a id="bcc" name="bcc"></a> bcc

• `Optional` **bcc**: `string`[]

List of `BCC` recipients email addresses that the email was addressed to. See recipients object for names.

**`memberof`** Email

___

### <a id="body" name="body"></a> body

• `Optional` **body**: `string`

The body of the email message as text parsed from the SMTP message body (does not include attachments). Fetch the raw content to access the SMTP message and use the attachments property to access attachments. The body is stored separately to the email entity so the body is not returned in paginated results only in full single email or wait requests.

**`memberof`** Email

___

### <a id="bodyexcerpt" name="bodyexcerpt"></a> bodyExcerpt

• `Optional` **bodyExcerpt**: `string`

An excerpt of the body of the email message for quick preview .

**`memberof`** Email

___

### <a id="bodymd5hash" name="bodymd5hash"></a> bodyMD5Hash

• `Optional` **bodyMD5Hash**: `string`

A hash signature of the email message using MD5. Useful for comparing emails without fetching full body.

**`memberof`** Email

___

### <a id="cc" name="cc"></a> cc

• `Optional` **cc**: `string`[]

List of `CC` recipients email addresses that the email was addressed to. See recipients object for names.

**`memberof`** Email

___

### <a id="charset" name="charset"></a> charset

• `Optional` **charset**: `string`

Detected character set of the email body such as UTF-8

**`memberof`** Email

___

### <a id="createdat" name="createdat"></a> createdAt

• **createdAt**: `Date`

When was the email received by MailSlurp

**`memberof`** Email

___

### <a id="domainid" name="domainid"></a> domainId

• `Optional` **domainId**: `string`

ID of the domain that received the email

**`memberof`** Email

___

### <a id="from" name="from"></a> from

• `Optional` **from**: `string`

Who the email was sent from. An email address - see fromName for the sender name.

**`memberof`** Email

___

### <a id="headers" name="headers"></a> headers

• `Optional` **headers**: `Object`

Collection of SMTP headers attached to email

**`memberof`** Email

#### Index signature

▪ [key: `string`]: `string`

___

### <a id="html" name="html"></a> html

• `Optional` **html**: `boolean`

**`memberof`** Email

___

### <a id="id" name="id"></a> id

• **id**: `string`

ID of the email entity

**`memberof`** Email

___

### <a id="inboxid" name="inboxid"></a> inboxId

• **inboxId**: `string`

ID of the inbox that received the email

**`memberof`** Email

___

### <a id="ishtml" name="ishtml"></a> isHTML

• `Optional` **isHTML**: `boolean`

Is the email body content type HTML?

**`memberof`** Email

___

### <a id="read" name="read"></a> read

• **read**: `boolean`

Read flag. Has the email ever been viewed in the dashboard or fetched via the API with a hydrated body? If so the email is marked as read. Paginated results do not affect read status. Read status is different to email opened event as it depends on your own account accessing the email. Email opened is determined by tracking pixels sent to other uses if enable during sending. You can listened for both email read and email opened events using webhooks.

**`memberof`** Email

___

### <a id="recipients" name="recipients"></a> recipients

• `Optional` **recipients**: [`EmailRecipients`](EmailRecipients.md)

**`memberof`** Email

___

### <a id="replyto" name="replyto"></a> replyTo

• `Optional` **replyTo**: `string`

The `replyTo` field on the received email message

**`memberof`** Email

___

### <a id="sender" name="sender"></a> sender

• `Optional` **sender**: [`Sender`](Sender.md)

**`memberof`** Email

___

### <a id="subject" name="subject"></a> subject

• `Optional` **subject**: `string`

The subject line of the email message as specified by SMTP subject header

**`memberof`** Email

___

### <a id="teamaccess" name="teamaccess"></a> teamAccess

• **teamAccess**: `boolean`

Can the email be accessed by organization team members

**`memberof`** Email

___

### <a id="to" name="to"></a> to

• **to**: `string`[]

List of `To` recipient email addresses that the email was addressed to. See recipients object for names.

**`memberof`** Email

___

### <a id="updatedat" name="updatedat"></a> updatedAt

• **updatedAt**: `Date`

When was the email last updated

**`memberof`** Email

___

### <a id="userid" name="userid"></a> userId

• **userId**: `string`

ID of user that email belongs to

**`memberof`** Email
