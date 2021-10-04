[MailSlurp JS](../README.md) / AttachmentMetaData

# Interface: AttachmentMetaData

Meta data associated with an attachment. Attachments are stored as byte blobs so the meta data is stored separately.

**`export`**

**`interface`** AttachmentMetaData

## Table of contents

### Properties

- [contentLength](AttachmentMetaData.md#contentlength)
- [contentType](AttachmentMetaData.md#contenttype)
- [id](AttachmentMetaData.md#id)
- [name](AttachmentMetaData.md#name)

## Properties

### contentLength

• `Optional` **contentLength**: `number`

Size of attachment in bytes

**`memberof`** AttachmentMetaData

#### Defined in

[src/generated/api.ts:326](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L326)

___

### contentType

• `Optional` **contentType**: `string`

Content type of attachment such as `image/png`

**`memberof`** AttachmentMetaData

#### Defined in

[src/generated/api.ts:332](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L332)

___

### id

• `Optional` **id**: `string`

ID of attachment

**`memberof`** AttachmentMetaData

#### Defined in

[src/generated/api.ts:338](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L338)

___

### name

• `Optional` **name**: `string`

Name of attachment if given

**`memberof`** AttachmentMetaData

#### Defined in

[src/generated/api.ts:344](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L344)
