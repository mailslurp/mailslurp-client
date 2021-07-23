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

*Defined in [src/generated/api.ts:381](https://github.com/mailslurp/mailslurp-client/blob/c5e5f20/src/generated/api.ts#L381)*

Size of attachment in bytes

**`memberof`** AttachmentMetaData

___

### contentType

• `Optional` **contentType**: string

*Defined in [src/generated/api.ts:387](https://github.com/mailslurp/mailslurp-client/blob/c5e5f20/src/generated/api.ts#L387)*

Content type of attachment such as `image/png`

**`memberof`** AttachmentMetaData

___

### id

• `Optional` **id**: string

*Defined in [src/generated/api.ts:393](https://github.com/mailslurp/mailslurp-client/blob/c5e5f20/src/generated/api.ts#L393)*

ID of attachment

**`memberof`** AttachmentMetaData

___

### name

• `Optional` **name**: string

*Defined in [src/generated/api.ts:399](https://github.com/mailslurp/mailslurp-client/blob/c5e5f20/src/generated/api.ts#L399)*

Name of attachment if given

**`memberof`** AttachmentMetaData
