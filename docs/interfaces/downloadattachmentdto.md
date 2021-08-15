[MailSlurp JS](../README.md) / DownloadAttachmentDto

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

#### Defined in

[src/generated/api.ts:1881](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1881)

___

### contentType

• `Optional` **contentType**: `string`

Content type of attachment. Examples are `image/png`, `application/msword`, `text/csv` etc.

**`memberof`** DownloadAttachmentDto

#### Defined in

[src/generated/api.ts:1887](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1887)

___

### sizeBytes

• `Optional` **sizeBytes**: `number`

Size in bytes of attachment content

**`memberof`** DownloadAttachmentDto

#### Defined in

[src/generated/api.ts:1893](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1893)
