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
- [domainId](EmailProjection.md#domainid)
- [from](EmailProjection.md#from)
- [id](EmailProjection.md#id)
- [inboxId](EmailProjection.md#inboxid)
- [read](EmailProjection.md#read)
- [subject](EmailProjection.md#subject)
- [teamAccess](EmailProjection.md#teamaccess)
- [to](EmailProjection.md#to)

## Properties

### <a id="attachments" name="attachments"></a> attachments

• `Optional` **attachments**: `string`[]

**`memberof`** EmailProjection

___

### <a id="bcc" name="bcc"></a> bcc

• `Optional` **bcc**: `string`[]

**`memberof`** EmailProjection

___

### <a id="bodyexcerpt" name="bodyexcerpt"></a> bodyExcerpt

• `Optional` **bodyExcerpt**: `string`

**`memberof`** EmailProjection

___

### <a id="bodymd5hash" name="bodymd5hash"></a> bodyMD5Hash

• `Optional` **bodyMD5Hash**: `string`

**`memberof`** EmailProjection

___

### <a id="cc" name="cc"></a> cc

• `Optional` **cc**: `string`[]

**`memberof`** EmailProjection

___

### <a id="createdat" name="createdat"></a> createdAt

• **createdAt**: `Date`

**`memberof`** EmailProjection

___

### <a id="domainid" name="domainid"></a> domainId

• `Optional` **domainId**: `string`

**`memberof`** EmailProjection

___

### <a id="from" name="from"></a> from

• `Optional` **from**: `string`

**`memberof`** EmailProjection

___

### <a id="id" name="id"></a> id

• **id**: `string`

**`memberof`** EmailProjection

___

### <a id="inboxid" name="inboxid"></a> inboxId

• **inboxId**: `string`

**`memberof`** EmailProjection

___

### <a id="read" name="read"></a> read

• **read**: `boolean`

**`memberof`** EmailProjection

___

### <a id="subject" name="subject"></a> subject

• `Optional` **subject**: `string`

**`memberof`** EmailProjection

___

### <a id="teamaccess" name="teamaccess"></a> teamAccess

• **teamAccess**: `boolean`

**`memberof`** EmailProjection

___

### <a id="to" name="to"></a> to

• **to**: `string`[]

**`memberof`** EmailProjection
