[MailSlurp JS](../README.md) / AttachmentMetaData

# Interface: AttachmentMetaData

Meta data associated with an attachment. Attachments are stored as byte blobs so the meta data is stored separately.

**`Export`**

**`Interface`**

AttachmentMetaData

## Table of contents

### Properties

- [contentLength](AttachmentMetaData.md#contentlength)
- [contentType](AttachmentMetaData.md#contenttype)
- [id](AttachmentMetaData.md#id)
- [name](AttachmentMetaData.md#name)

## Properties

### contentLength

• **contentLength**: `number`

Size of attachment in bytes

**`Memberof`**

AttachmentMetaData

___

### contentType

• **contentType**: `string`

Content type of attachment such as `image/png`

**`Memberof`**

AttachmentMetaData

___

### id

• **id**: `string`

ID of attachment. Can be used to with attachment controller endpoints to download attachment or with sending methods to attach to an email.

**`Memberof`**

AttachmentMetaData

___

### name

• **name**: `string`

Name of attachment if given

**`Memberof`**

AttachmentMetaData
