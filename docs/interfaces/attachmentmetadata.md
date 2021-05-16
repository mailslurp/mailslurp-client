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

*Defined in [src/generated/api.ts:380](https://github.com/mailslurp/mailslurp-client/blob/751f7bb/src/generated/api.ts#L380)*

Size of attachment in bytes

**`memberof`** AttachmentMetaData

___

### contentType

• `Optional` **contentType**: string

*Defined in [src/generated/api.ts:386](https://github.com/mailslurp/mailslurp-client/blob/751f7bb/src/generated/api.ts#L386)*

Content type of attachment such as `image/png`

**`memberof`** AttachmentMetaData

___

### id

• `Optional` **id**: string

*Defined in [src/generated/api.ts:392](https://github.com/mailslurp/mailslurp-client/blob/751f7bb/src/generated/api.ts#L392)*

ID of attachment

**`memberof`** AttachmentMetaData

___

### name

• `Optional` **name**: string

*Defined in [src/generated/api.ts:398](https://github.com/mailslurp/mailslurp-client/blob/751f7bb/src/generated/api.ts#L398)*

Name of attachment if given

**`memberof`** AttachmentMetaData
