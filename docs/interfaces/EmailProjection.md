# Interface: EmailProjection

A compact representation of a full email. Used in list endpoints to keep response sizes low. Body and attachments are not included. To get all fields of the email use the `getEmail` method with the email projection's ID. See `EmailDto` for documentation on projection properties.

**`export`**

**`interface`** EmailProjection

## Table of contents

### Properties

- [attachments](EmailProjection.md#attachments)
- [bcc](EmailProjection.md#bcc)
- [bodyExcerpt](EmailProjection.md#bodyexcerpt)
- [bodyMD5Hash](EmailProjection.md#bodymd5hash)
- [cc](EmailProjection.md#cc)
- [createdAt](EmailProjection.md#createdat)
- [from](EmailProjection.md#from)
- [id](EmailProjection.md#id)
- [inboxId](EmailProjection.md#inboxid)
- [read](EmailProjection.md#read)
- [subject](EmailProjection.md#subject)
- [teamAccess](EmailProjection.md#teamaccess)
- [to](EmailProjection.md#to)

## Properties

### attachments

• `Optional` **attachments**: `string`[]

**`memberof`** EmailProjection

___

### bcc

• `Optional` **bcc**: `string`[]

**`memberof`** EmailProjection

___

### bodyExcerpt

• `Optional` **bodyExcerpt**: `string`

**`memberof`** EmailProjection

___

### bodyMD5Hash

• `Optional` **bodyMD5Hash**: `string`

**`memberof`** EmailProjection

___

### cc

• `Optional` **cc**: `string`[]

**`memberof`** EmailProjection

___

### createdAt

• **createdAt**: `Date`

**`memberof`** EmailProjection

___

### from

• `Optional` **from**: `string`

**`memberof`** EmailProjection

___

### id

• **id**: `string`

**`memberof`** EmailProjection

___

### inboxId

• **inboxId**: `string`

**`memberof`** EmailProjection

___

### read

• `Optional` **read**: `boolean`

**`memberof`** EmailProjection

___

### subject

• `Optional` **subject**: `string`

**`memberof`** EmailProjection

___

### teamAccess

• `Optional` **teamAccess**: `boolean`

**`memberof`** EmailProjection

___

### to

• **to**: `string`[]

**`memberof`** EmailProjection
