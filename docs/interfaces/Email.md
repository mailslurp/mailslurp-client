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

[src/generated/api.ts:1907](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L1907)

___

### attachments

• `Optional` **attachments**: `string`[]

List of IDs of attachments found in the email. Use these IDs with the Inbox and Email Controllers to download attachments and attachment meta data such as filesize, name, extension.

**`memberof`** Email

#### Defined in

[src/generated/api.ts:1913](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L1913)

___

### bcc

• `Optional` **bcc**: `string`[]

List of `BCC` recipients email addresses that the email was addressed to. See recipients object for names.

**`memberof`** Email

#### Defined in

[src/generated/api.ts:1919](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L1919)

___

### body

• `Optional` **body**: `string`

The body of the email message as text parsed from the SMTP message body (does not include attachments). Fetch the raw content to access the SMTP message and use the attachments property to access attachments. The body is stored separately to the email entity so the body is not returned in paginated results only in full single email or wait requests.

**`memberof`** Email

#### Defined in

[src/generated/api.ts:1925](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L1925)

___

### bodyExcerpt

• `Optional` **bodyExcerpt**: `string`

An excerpt of the body of the email message for quick preview .

**`memberof`** Email

#### Defined in

[src/generated/api.ts:1931](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L1931)

___

### bodyMD5Hash

• `Optional` **bodyMD5Hash**: `string`

A hash signature of the email message using MD5. Useful for comparing emails without fetching full body.

**`memberof`** Email

#### Defined in

[src/generated/api.ts:1937](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L1937)

___

### cc

• `Optional` **cc**: `string`[]

List of `CC` recipients email addresses that the email was addressed to. See recipients object for names.

**`memberof`** Email

#### Defined in

[src/generated/api.ts:1943](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L1943)

___

### charset

• `Optional` **charset**: `string`

Detected character set of the email body such as UTF-8

**`memberof`** Email

#### Defined in

[src/generated/api.ts:1949](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L1949)

___

### createdAt

• `Optional` **createdAt**: `Date`

When was the email received by MailSlurp

**`memberof`** Email

#### Defined in

[src/generated/api.ts:1955](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L1955)

___

### from

• `Optional` **from**: `string`

Who the email was sent from. An email address - see fromName for the sender name.

**`memberof`** Email

#### Defined in

[src/generated/api.ts:1961](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L1961)

___

### headers

• `Optional` **headers**: `Object`

Collection of SMTP headers attached to email

**`memberof`** Email

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[src/generated/api.ts:1967](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L1967)

___

### id

• `Optional` **id**: `string`

ID of the email entity

**`memberof`** Email

#### Defined in

[src/generated/api.ts:1973](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L1973)

___

### inboxId

• `Optional` **inboxId**: `string`

ID of the inbox that received the email

**`memberof`** Email

#### Defined in

[src/generated/api.ts:1979](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L1979)

___

### isHTML

• `Optional` **isHTML**: `boolean`

Is the email body HTML

**`memberof`** Email

#### Defined in

[src/generated/api.ts:1985](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L1985)

___

### read

• `Optional` **read**: `boolean`

Read flag. Has the email ever been viewed in the dashboard or fetched via the API with a hydrated body? If so the email is marked as read. Paginated results do not affect read status. Read status is different to email opened event as it depends on your own account accessing the email. Email opened is determined by tracking pixels sent to other uses if enable during sending. You can listened for both email read and email opened events using webhooks.

**`memberof`** Email

#### Defined in

[src/generated/api.ts:1991](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L1991)

___

### recipients

• `Optional` **recipients**: [`EmailRecipients`](EmailRecipients.md)

The `To`,`CC`,`BCC` recipients stored in object form with email address and name accessible.

**`memberof`** Email

#### Defined in

[src/generated/api.ts:1997](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L1997)

___

### replyTo

• `Optional` **replyTo**: `string`

The `replyTo` field on the received email message

**`memberof`** Email

#### Defined in

[src/generated/api.ts:2003](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L2003)

___

### sender

• `Optional` **sender**: [`Sender`](Sender.md)

Sender object containing from email address and from personal name if provided in address

**`memberof`** Email

#### Defined in

[src/generated/api.ts:2009](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L2009)

___

### subject

• `Optional` **subject**: `string`

The subject line of the email message as specified by SMTP subject header

**`memberof`** Email

#### Defined in

[src/generated/api.ts:2015](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L2015)

___

### teamAccess

• `Optional` **teamAccess**: `boolean`

Can the email be accessed by organization team members

**`memberof`** Email

#### Defined in

[src/generated/api.ts:2021](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L2021)

___

### to

• `Optional` **to**: `string`[]

List of `To` recipient email addresses that the email was addressed to. See recipients object for names.

**`memberof`** Email

#### Defined in

[src/generated/api.ts:2027](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L2027)

___

### updatedAt

• `Optional` **updatedAt**: `Date`

When was the email last updated

**`memberof`** Email

#### Defined in

[src/generated/api.ts:2033](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L2033)

___

### userId

• `Optional` **userId**: `string`

ID of user that email belongs to

**`memberof`** Email

#### Defined in

[src/generated/api.ts:2039](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L2039)
