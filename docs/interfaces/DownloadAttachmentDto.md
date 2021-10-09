# Interface: DownloadAttachmentDto

Content of attachment

**`export`**

**`interface`** DownloadAttachmentDto

## Table of contents

### Properties

- [base64FileContents](DownloadAttachmentDto.md#base64filecontents)
- [contentType](DownloadAttachmentDto.md#contenttype)
- [sizeBytes](DownloadAttachmentDto.md#sizebytes)

## Properties

### base64FileContents

• `Optional` **base64FileContents**: `string`

Base64 encoded string of attachment bytes. Decode the base64 encoded string to get the raw contents. If the file has a content type such as `text/html` you can read the contents directly by converting it to string using `utf-8` encoding.

**`memberof`** DownloadAttachmentDto

___

### contentType

• `Optional` **contentType**: `string`

Content type of attachment. Examples are `image/png`, `application/msword`, `text/csv` etc.

**`memberof`** DownloadAttachmentDto

___

### sizeBytes

• `Optional` **sizeBytes**: `number`

Size in bytes of attachment content

**`memberof`** DownloadAttachmentDto
