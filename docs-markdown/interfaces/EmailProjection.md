[MailSlurp JS](../README.md) / EmailProjection

# Interface: EmailProjection

A compact representation of a full email. Used in list endpoints to keep response sizes low. Body and attachments are not included. To get all fields of the email use the `getEmail` method with the email projection's ID. See `EmailDto` for documentation on projection properties.

**`Export`**

**`Interface`**

EmailProjection

## Table of contents

### Properties

- [attachments](EmailProjection.md#attachments)
- [bcc](EmailProjection.md#bcc)
- [bodyExcerpt](EmailProjection.md#bodyexcerpt)
- [bodyMD5Hash](EmailProjection.md#bodymd5hash)
- [bodyPartContentTypes](EmailProjection.md#bodypartcontenttypes)
- [cc](EmailProjection.md#cc)
- [createdAt](EmailProjection.md#createdat)
- [domainId](EmailProjection.md#domainid)
- [favourite](EmailProjection.md#favourite)
- [from](EmailProjection.md#from)
- [id](EmailProjection.md#id)
- [inReplyTo](EmailProjection.md#inreplyto)
- [inboxId](EmailProjection.md#inboxid)
- [messageId](EmailProjection.md#messageid)
- [plusAddress](EmailProjection.md#plusaddress)
- [read](EmailProjection.md#read)
- [recipients](EmailProjection.md#recipients)
- [sender](EmailProjection.md#sender)
- [subject](EmailProjection.md#subject)
- [teamAccess](EmailProjection.md#teamaccess)
- [textExcerpt](EmailProjection.md#textexcerpt)
- [threadId](EmailProjection.md#threadid)
- [to](EmailProjection.md#to)

## Properties

### attachments

• `Optional` **attachments**: `string`[]

**`Memberof`**

EmailProjection

___

### bcc

• `Optional` **bcc**: `string`[]

**`Memberof`**

EmailProjection

___

### bodyExcerpt

• `Optional` **bodyExcerpt**: `string`

**`Memberof`**

EmailProjection

___

### bodyMD5Hash

• `Optional` **bodyMD5Hash**: `string`

**`Memberof`**

EmailProjection

___

### bodyPartContentTypes

• `Optional` **bodyPartContentTypes**: `string`[]

**`Memberof`**

EmailProjection

___

### cc

• `Optional` **cc**: `string`[]

**`Memberof`**

EmailProjection

___

### createdAt

• **createdAt**: `Date`

**`Memberof`**

EmailProjection

___

### domainId

• `Optional` **domainId**: `string`

**`Memberof`**

EmailProjection

___

### favourite

• `Optional` **favourite**: `boolean`

**`Memberof`**

EmailProjection

___

### from

• **from**: `string`

**`Memberof`**

EmailProjection

___

### id

• **id**: `string`

**`Memberof`**

EmailProjection

___

### inReplyTo

• `Optional` **inReplyTo**: `string`

**`Memberof`**

EmailProjection

___

### inboxId

• **inboxId**: `string`

**`Memberof`**

EmailProjection

___

### messageId

• `Optional` **messageId**: `string`

**`Memberof`**

EmailProjection

___

### plusAddress

• `Optional` **plusAddress**: `string`

**`Memberof`**

EmailProjection

___

### read

• **read**: `boolean`

**`Memberof`**

EmailProjection

___

### recipients

• `Optional` **recipients**: [`EmailRecipients`](EmailRecipients.md)

**`Memberof`**

EmailProjection

___

### sender

• `Optional` **sender**: [`Sender`](Sender.md)

**`Memberof`**

EmailProjection

___

### subject

• `Optional` **subject**: `string`

**`Memberof`**

EmailProjection

___

### teamAccess

• **teamAccess**: `boolean`

**`Memberof`**

EmailProjection

___

### textExcerpt

• `Optional` **textExcerpt**: `string`

**`Memberof`**

EmailProjection

___

### threadId

• `Optional` **threadId**: `string`

**`Memberof`**

EmailProjection

___

### to

• **to**: `string`[]

**`Memberof`**

EmailProjection
