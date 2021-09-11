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

Smart analysis of email content including spam ratings

**`memberof`** Email

#### Defined in

[src/generated/api.ts:1851](https://github.com/mailslurp/mailslurp-client/blob/f0f645f/src/generated/api.ts#L1851)

___

### attachments

• `Optional` **attachments**: `string`[]

List of IDs of attachments found in the email. Use these IDs with the Inbox and Email Controllers to download attachments and attachment meta data such as filesize, name, extension.

**`memberof`** Email

#### Defined in

[src/generated/api.ts:1857](https://github.com/mailslurp/mailslurp-client/blob/f0f645f/src/generated/api.ts#L1857)

___

### bcc

• `Optional` **bcc**: `string`[]

List of `BCC` recipients email addresses that the email was addressed to. See recipients object for names.

**`memberof`** Email

#### Defined in

[src/generated/api.ts:1863](https://github.com/mailslurp/mailslurp-client/blob/f0f645f/src/generated/api.ts#L1863)

___

### body

• `Optional` **body**: `string`

The body of the email message as text parsed from the SMTP message body (does not include attachments). Fetch the raw content to access the SMTP message and use the attachments property to access attachments. The body is stored separately to the email entity so the body is not returned in paginated results only in full single email or wait requests.

**`memberof`** Email

#### Defined in

[src/generated/api.ts:1869](https://github.com/mailslurp/mailslurp-client/blob/f0f645f/src/generated/api.ts#L1869)

___

### bodyExcerpt

• `Optional` **bodyExcerpt**: `string`

An excerpt of the body of the email message for quick preview .

**`memberof`** Email

#### Defined in

[src/generated/api.ts:1875](https://github.com/mailslurp/mailslurp-client/blob/f0f645f/src/generated/api.ts#L1875)

___

### bodyMD5Hash

• `Optional` **bodyMD5Hash**: `string`

A hash signature of the email message using MD5. Useful for comparing emails without fetching full body.

**`memberof`** Email

#### Defined in

[src/generated/api.ts:1881](https://github.com/mailslurp/mailslurp-client/blob/f0f645f/src/generated/api.ts#L1881)

___

### cc

• `Optional` **cc**: `string`[]

List of `CC` recipients email addresses that the email was addressed to. See recipients object for names.

**`memberof`** Email

#### Defined in

[src/generated/api.ts:1887](https://github.com/mailslurp/mailslurp-client/blob/f0f645f/src/generated/api.ts#L1887)

___

### charset

• `Optional` **charset**: `string`

Detected character set of the email body such as UTF-8

**`memberof`** Email

#### Defined in

[src/generated/api.ts:1893](https://github.com/mailslurp/mailslurp-client/blob/f0f645f/src/generated/api.ts#L1893)

___

### createdAt

• `Optional` **createdAt**: `Date`

When was the email received by MailSlurp

**`memberof`** Email

#### Defined in

[src/generated/api.ts:1899](https://github.com/mailslurp/mailslurp-client/blob/f0f645f/src/generated/api.ts#L1899)

___

### from

• `Optional` **from**: `string`

Who the email was sent from. An email address - see fromName for the sender name.

**`memberof`** Email

#### Defined in

[src/generated/api.ts:1905](https://github.com/mailslurp/mailslurp-client/blob/f0f645f/src/generated/api.ts#L1905)

___

### headers

• `Optional` **headers**: `Object`

Collection of SMTP headers attached to email

**`memberof`** Email

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[src/generated/api.ts:1911](https://github.com/mailslurp/mailslurp-client/blob/f0f645f/src/generated/api.ts#L1911)

___

### id

• `Optional` **id**: `string`

ID of the email entity

**`memberof`** Email

#### Defined in

[src/generated/api.ts:1917](https://github.com/mailslurp/mailslurp-client/blob/f0f645f/src/generated/api.ts#L1917)

___

### inboxId

• `Optional` **inboxId**: `string`

ID of the inbox that received the email

**`memberof`** Email

#### Defined in

[src/generated/api.ts:1923](https://github.com/mailslurp/mailslurp-client/blob/f0f645f/src/generated/api.ts#L1923)

___

### isHTML

• `Optional` **isHTML**: `boolean`

Is the email body HTML

**`memberof`** Email

#### Defined in

[src/generated/api.ts:1929](https://github.com/mailslurp/mailslurp-client/blob/f0f645f/src/generated/api.ts#L1929)

___

### read

• `Optional` **read**: `boolean`

Read flag. Has the email ever been viewed in the dashboard or fetched via the API with a hydrated body? If so the email is marked as read. Paginated results do not affect read status. Read status is different to email opened event as it depends on your own account accessing the email. Email opened is determined by tracking pixels sent to other uses if enable during sending. You can listened for both email read and email opened events using webhooks.

**`memberof`** Email

#### Defined in

[src/generated/api.ts:1935](https://github.com/mailslurp/mailslurp-client/blob/f0f645f/src/generated/api.ts#L1935)

___

### recipients

• `Optional` **recipients**: [`EmailRecipients`](EmailRecipients.md)

The `To`,`CC`,`BCC` recipients stored in object form with email address and name accessible.

**`memberof`** Email

#### Defined in

[src/generated/api.ts:1941](https://github.com/mailslurp/mailslurp-client/blob/f0f645f/src/generated/api.ts#L1941)

___

### replyTo

• `Optional` **replyTo**: `string`

The `replyTo` field on the received email message

**`memberof`** Email

#### Defined in

[src/generated/api.ts:1947](https://github.com/mailslurp/mailslurp-client/blob/f0f645f/src/generated/api.ts#L1947)

___

### sender

• `Optional` **sender**: [`Sender`](Sender.md)

Sender object containing from email address and from personal name if provided in address

**`memberof`** Email

#### Defined in

[src/generated/api.ts:1953](https://github.com/mailslurp/mailslurp-client/blob/f0f645f/src/generated/api.ts#L1953)

___

### subject

• `Optional` **subject**: `string`

The subject line of the email message as specified by SMTP subject header

**`memberof`** Email

#### Defined in

[src/generated/api.ts:1959](https://github.com/mailslurp/mailslurp-client/blob/f0f645f/src/generated/api.ts#L1959)

___

### teamAccess

• `Optional` **teamAccess**: `boolean`

Can the email be accessed by organization team members

**`memberof`** Email

#### Defined in

[src/generated/api.ts:1965](https://github.com/mailslurp/mailslurp-client/blob/f0f645f/src/generated/api.ts#L1965)

___

### to

• `Optional` **to**: `string`[]

List of `To` recipient email addresses that the email was addressed to. See recipients object for names.

**`memberof`** Email

#### Defined in

[src/generated/api.ts:1971](https://github.com/mailslurp/mailslurp-client/blob/f0f645f/src/generated/api.ts#L1971)

___

### updatedAt

• `Optional` **updatedAt**: `Date`

When was the email last updated

**`memberof`** Email

#### Defined in

[src/generated/api.ts:1977](https://github.com/mailslurp/mailslurp-client/blob/f0f645f/src/generated/api.ts#L1977)

___

### userId

• `Optional` **userId**: `string`

ID of user that email belongs to

**`memberof`** Email

#### Defined in

[src/generated/api.ts:1983](https://github.com/mailslurp/mailslurp-client/blob/f0f645f/src/generated/api.ts#L1983)
