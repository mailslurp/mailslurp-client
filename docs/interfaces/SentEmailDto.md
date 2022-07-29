# Interface: SentEmailDto

Sent email details

**`export`**

**`interface`** SentEmailDto

## Table of contents

### Properties

- [attachments](SentEmailDto.md#attachments)
- [bcc](SentEmailDto.md#bcc)
- [body](SentEmailDto.md#body)
- [bodyMD5Hash](SentEmailDto.md#bodymd5hash)
- [cc](SentEmailDto.md#cc)
- [charset](SentEmailDto.md#charset)
- [domainId](SentEmailDto.md#domainid)
- [from](SentEmailDto.md#from)
- [html](SentEmailDto.md#html)
- [id](SentEmailDto.md#id)
- [inboxId](SentEmailDto.md#inboxid)
- [isHTML](SentEmailDto.md#ishtml)
- [messageId](SentEmailDto.md#messageid)
- [messageIds](SentEmailDto.md#messageids)
- [pixelIds](SentEmailDto.md#pixelids)
- [replyTo](SentEmailDto.md#replyto)
- [sentAt](SentEmailDto.md#sentat)
- [subject](SentEmailDto.md#subject)
- [templateId](SentEmailDto.md#templateid)
- [templateVariables](SentEmailDto.md#templatevariables)
- [to](SentEmailDto.md#to)
- [toContacts](SentEmailDto.md#tocontacts)
- [toGroup](SentEmailDto.md#togroup)
- [userId](SentEmailDto.md#userid)
- [virtualSend](SentEmailDto.md#virtualsend)

## Properties

### <a id="attachments" name="attachments"></a> attachments

• `Optional` **attachments**: `string`[]

Array of IDs of attachments that were sent with this email

**`memberof`** SentEmailDto

___

### <a id="bcc" name="bcc"></a> bcc

• `Optional` **bcc**: `string`[]

**`memberof`** SentEmailDto

___

### <a id="body" name="body"></a> body

• `Optional` **body**: `string`

**`memberof`** SentEmailDto

___

### <a id="bodymd5hash" name="bodymd5hash"></a> bodyMD5Hash

• `Optional` **bodyMD5Hash**: `string`

MD5 Hash

**`memberof`** SentEmailDto

___

### <a id="cc" name="cc"></a> cc

• `Optional` **cc**: `string`[]

**`memberof`** SentEmailDto

___

### <a id="charset" name="charset"></a> charset

• `Optional` **charset**: `string`

**`memberof`** SentEmailDto

___

### <a id="domainid" name="domainid"></a> domainId

• `Optional` **domainId**: `string`

Domain ID

**`memberof`** SentEmailDto

___

### <a id="from" name="from"></a> from

• `Optional` **from**: `string`

**`memberof`** SentEmailDto

___

### <a id="html" name="html"></a> html

• `Optional` **html**: `boolean`

**`memberof`** SentEmailDto

___

### <a id="id" name="id"></a> id

• **id**: `string`

ID of sent email

**`memberof`** SentEmailDto

___

### <a id="inboxid" name="inboxid"></a> inboxId

• **inboxId**: `string`

Inbox ID email was sent from

**`memberof`** SentEmailDto

___

### <a id="ishtml" name="ishtml"></a> isHTML

• `Optional` **isHTML**: `boolean`

**`memberof`** SentEmailDto

___

### <a id="messageid" name="messageid"></a> messageId

• `Optional` **messageId**: `string`

**`memberof`** SentEmailDto

___

### <a id="messageids" name="messageids"></a> messageIds

• `Optional` **messageIds**: `string`[]

**`memberof`** SentEmailDto

___

### <a id="pixelids" name="pixelids"></a> pixelIds

• `Optional` **pixelIds**: `string`[]

**`memberof`** SentEmailDto

___

### <a id="replyto" name="replyto"></a> replyTo

• `Optional` **replyTo**: `string`

**`memberof`** SentEmailDto

___

### <a id="sentat" name="sentat"></a> sentAt

• **sentAt**: `Date`

**`memberof`** SentEmailDto

___

### <a id="subject" name="subject"></a> subject

• `Optional` **subject**: `string`

**`memberof`** SentEmailDto

___

### <a id="templateid" name="templateid"></a> templateId

• `Optional` **templateId**: `string`

**`memberof`** SentEmailDto

___

### <a id="templatevariables" name="templatevariables"></a> templateVariables

• `Optional` **templateVariables**: `Object`

**`memberof`** SentEmailDto

#### Index signature

▪ [key: `string`]: `object`

___

### <a id="to" name="to"></a> to

• `Optional` **to**: `string`[]

Recipients email was sent to

**`memberof`** SentEmailDto

___

### <a id="tocontacts" name="tocontacts"></a> toContacts

• `Optional` **toContacts**: `string`[]

**`memberof`** SentEmailDto

___

### <a id="togroup" name="togroup"></a> toGroup

• `Optional` **toGroup**: `string`

**`memberof`** SentEmailDto

___

### <a id="userid" name="userid"></a> userId

• **userId**: `string`

User ID

**`memberof`** SentEmailDto

___

### <a id="virtualsend" name="virtualsend"></a> virtualSend

• `Optional` **virtualSend**: `boolean`

**`memberof`** SentEmailDto
