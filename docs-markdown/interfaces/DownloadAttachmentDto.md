[MailSlurp JS](../README.md) / DownloadAttachmentDto

# Interface: DownloadAttachmentDto

Content of attachment

**`Export`**

**`Interface`**

DownloadAttachmentDto

## Table of contents

### Properties

- [base64FileContents](DownloadAttachmentDto.md#base64filecontents)
- [contentType](DownloadAttachmentDto.md#contenttype)
- [sizeBytes](DownloadAttachmentDto.md#sizebytes)

## Properties

### base64FileContents

• **base64FileContents**: `string`

Base64 encoded string of attachment bytes. Decode the base64 encoded string to get the raw contents. If the file has a content type such as `text/html` you can read the contents directly by converting it to string using `utf-8` encoding.

**`Memberof`**

DownloadAttachmentDto

___

### contentType

• **contentType**: `string`

Content type of attachment. Examples are `image/png`, `application/msword`, `text/csv` etc.

**`Memberof`**

DownloadAttachmentDto

___

### sizeBytes

• **sizeBytes**: `number`

Size in bytes of attachment content

**`Memberof`**

DownloadAttachmentDto
