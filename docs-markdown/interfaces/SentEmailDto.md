[MailSlurp JS](../README.md) / SentEmailDto

# Interface: SentEmailDto

Sent email details

**`Export`**

**`Interface`**

SentEmailDto

## Table of contents

### Properties

- [attachments](SentEmailDto.md#attachments)
- [bcc](SentEmailDto.md#bcc)
- [body](SentEmailDto.md#body)
- [bodyExcerpt](SentEmailDto.md#bodyexcerpt)
- [bodyMD5Hash](SentEmailDto.md#bodymd5hash)
- [cc](SentEmailDto.md#cc)
- [charset](SentEmailDto.md#charset)
- [createdAt](SentEmailDto.md#createdat)
- [domainId](SentEmailDto.md#domainid)
- [favourite](SentEmailDto.md#favourite)
- [from](SentEmailDto.md#from)
- [headers](SentEmailDto.md#headers)
- [html](SentEmailDto.md#html)
- [id](SentEmailDto.md#id)
- [inReplyTo](SentEmailDto.md#inreplyto)
- [inboxId](SentEmailDto.md#inboxid)
- [isHTML](SentEmailDto.md#ishtml)
- [messageId](SentEmailDto.md#messageid)
- [messageIds](SentEmailDto.md#messageids)
- [pixelIds](SentEmailDto.md#pixelids)
- [recipients](SentEmailDto.md#recipients)
- [replyTo](SentEmailDto.md#replyto)
- [sender](SentEmailDto.md#sender)
- [sentAt](SentEmailDto.md#sentat)
- [sizeBytes](SentEmailDto.md#sizebytes)
- [subject](SentEmailDto.md#subject)
- [templateId](SentEmailDto.md#templateid)
- [templateVariables](SentEmailDto.md#templatevariables)
- [textExcerpt](SentEmailDto.md#textexcerpt)
- [threadId](SentEmailDto.md#threadid)
- [to](SentEmailDto.md#to)
- [toContacts](SentEmailDto.md#tocontacts)
- [toGroup](SentEmailDto.md#togroup)
- [userId](SentEmailDto.md#userid)
- [virtualSend](SentEmailDto.md#virtualsend)

## Properties

### attachments

• `Optional` **attachments**: `string`[]

Array of IDs of attachments that were sent with this email

**`Memberof`**

SentEmailDto

___

### bcc

• `Optional` **bcc**: `string`[]

**`Memberof`**

SentEmailDto

___

### body

• `Optional` **body**: `string`

Sent email body

**`Memberof`**

SentEmailDto

___

### bodyExcerpt

• `Optional` **bodyExcerpt**: `string`

An excerpt of the body of the email message for quick preview. Takes HTML content part if exists falls back to TEXT content part if not

**`Memberof`**

SentEmailDto

___

### bodyMD5Hash

• `Optional` **bodyMD5Hash**: `string`

MD5 Hash

**`Memberof`**

SentEmailDto

___

### cc

• `Optional` **cc**: `string`[]

**`Memberof`**

SentEmailDto

___

### charset

• `Optional` **charset**: `string`

**`Memberof`**

SentEmailDto

___

### createdAt

• **createdAt**: `Date`

**`Memberof`**

SentEmailDto

___

### domainId

• `Optional` **domainId**: `string`

Domain ID

**`Memberof`**

SentEmailDto

___

### favourite

• `Optional` **favourite**: `boolean`

Is email favourited

**`Memberof`**

SentEmailDto

___

### from

• `Optional` **from**: `string`

Sent from address

**`Memberof`**

SentEmailDto

___

### headers

• `Optional` **headers**: `Object`

**`Memberof`**

SentEmailDto

#### Index signature

▪ [key: `string`]: `string`

___

### html

• `Optional` **html**: `boolean`

**`Memberof`**

SentEmailDto

___

### id

• **id**: `string`

ID of sent email

**`Memberof`**

SentEmailDto

___

### inReplyTo

• `Optional` **inReplyTo**: `string`

Parsed value of In-Reply-To header. A Message-ID in a thread.

**`Memberof`**

SentEmailDto

___

### inboxId

• **inboxId**: `string`

Inbox ID email was sent from

**`Memberof`**

SentEmailDto

___

### isHTML

• `Optional` **isHTML**: `boolean`

**`Memberof`**

SentEmailDto

___

### messageId

• `Optional` **messageId**: `string`

RFC 5322 Message-ID header value without angle brackets.

**`Memberof`**

SentEmailDto

___

### messageIds

• `Optional` **messageIds**: `string`[]

**`Memberof`**

SentEmailDto

___

### pixelIds

• `Optional` **pixelIds**: `string`[]

**`Memberof`**

SentEmailDto

___

### recipients

• `Optional` **recipients**: [`EmailRecipients`](EmailRecipients.md)

**`Memberof`**

SentEmailDto

___

### replyTo

• `Optional` **replyTo**: `string`

**`Memberof`**

SentEmailDto

___

### sender

• `Optional` **sender**: [`Sender`](Sender.md)

**`Memberof`**

SentEmailDto

___

### sentAt

• **sentAt**: `Date`

**`Memberof`**

SentEmailDto

___

### sizeBytes

• `Optional` **sizeBytes**: `number`

Size of raw email message in bytes

**`Memberof`**

SentEmailDto

___

### subject

• `Optional` **subject**: `string`

**`Memberof`**

SentEmailDto

___

### templateId

• `Optional` **templateId**: `string`

**`Memberof`**

SentEmailDto

___

### templateVariables

• `Optional` **templateVariables**: `Object`

**`Memberof`**

SentEmailDto

#### Index signature

▪ [key: `string`]: `object`

___

### textExcerpt

• `Optional` **textExcerpt**: `string`

An excerpt of the body of the email message for quick preview. Takes TEXT content part if exists

**`Memberof`**

SentEmailDto

___

### threadId

• `Optional` **threadId**: `string`

MailSlurp thread ID for email chain that enables lookup for In-Reply-To and References fields.

**`Memberof`**

SentEmailDto

___

### to

• `Optional` **to**: `string`[]

Recipients email was sent to

**`Memberof`**

SentEmailDto

___

### toContacts

• `Optional` **toContacts**: `string`[]

**`Memberof`**

SentEmailDto

___

### toGroup

• `Optional` **toGroup**: `string`

**`Memberof`**

SentEmailDto

___

### userId

• **userId**: `string`

User ID

**`Memberof`**

SentEmailDto

___

### virtualSend

• `Optional` **virtualSend**: `boolean`

**`Memberof`**

SentEmailDto
