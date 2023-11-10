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
- [cc](EmailProjection.md#cc)
- [createdAt](EmailProjection.md#createdat)
- [domainId](EmailProjection.md#domainid)
- [from](EmailProjection.md#from)
- [id](EmailProjection.md#id)
- [inboxId](EmailProjection.md#inboxid)
- [read](EmailProjection.md#read)
- [subject](EmailProjection.md#subject)
- [teamAccess](EmailProjection.md#teamaccess)
- [textExcerpt](EmailProjection.md#textexcerpt)
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

### from

• `Optional` **from**: `string`

**`Memberof`**

EmailProjection

___

### id

• **id**: `string`

**`Memberof`**

EmailProjection

___

### inboxId

• **inboxId**: `string`

**`Memberof`**

EmailProjection

___

### read

• **read**: `boolean`

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

### to

• **to**: `string`[]

**`Memberof`**

EmailProjection
