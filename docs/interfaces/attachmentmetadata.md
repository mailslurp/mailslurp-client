**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / AttachmentMetaData

# Interface: AttachmentMetaData

Meta data associated with an attachment. Attachments are stored as byte blobs so the meta data is stored separately.

**`export`** 

**`interface`** AttachmentMetaData

## Hierarchy

* **AttachmentMetaData**

## Index

### Properties

* [contentLength](attachmentmetadata.md#contentlength)
* [contentType](attachmentmetadata.md#contenttype)
* [id](attachmentmetadata.md#id)
* [name](attachmentmetadata.md#name)

## Properties

### contentLength

• `Optional` **contentLength**: number

*Defined in [src/generated/api.ts:324](https://github.com/mailslurp/mailslurp-client/blob/b27590b/src/generated/api.ts#L324)*

Size of attachment in bytes

**`memberof`** AttachmentMetaData

___

### contentType

• `Optional` **contentType**: string

*Defined in [src/generated/api.ts:330](https://github.com/mailslurp/mailslurp-client/blob/b27590b/src/generated/api.ts#L330)*

Content type of attachment such as `image/png`

**`memberof`** AttachmentMetaData

___

### id

• `Optional` **id**: string

*Defined in [src/generated/api.ts:336](https://github.com/mailslurp/mailslurp-client/blob/b27590b/src/generated/api.ts#L336)*

ID of attachment

**`memberof`** AttachmentMetaData

___

### name

• `Optional` **name**: string

*Defined in [src/generated/api.ts:342](https://github.com/mailslurp/mailslurp-client/blob/b27590b/src/generated/api.ts#L342)*

Name of attachment if given

**`memberof`** AttachmentMetaData
