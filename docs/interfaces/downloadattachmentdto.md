**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / DownloadAttachmentDto

# Interface: DownloadAttachmentDto

Content of attachment

**`export`** 

**`interface`** DownloadAttachmentDto

## Hierarchy

* **DownloadAttachmentDto**

## Index

### Properties

* [base64FileContents](downloadattachmentdto.md#base64filecontents)
* [contentType](downloadattachmentdto.md#contenttype)
* [sizeBytes](downloadattachmentdto.md#sizebytes)

## Properties

### base64FileContents

• `Optional` **base64FileContents**: string

*Defined in [src/generated/api.ts:1568](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L1568)*

Base64 encoded string of attachment bytes. Decode the base64 encoded string to get the raw contents. If the file has a content type such as `text/html` you can read the contents directly by converting it to string using `utf-8` encoding.

**`memberof`** DownloadAttachmentDto

___

### contentType

• `Optional` **contentType**: string

*Defined in [src/generated/api.ts:1574](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L1574)*

Content type of attachment. Examples are `image/png`, `application/msword`, `text/csv` etc.

**`memberof`** DownloadAttachmentDto

___

### sizeBytes

• `Optional` **sizeBytes**: number

*Defined in [src/generated/api.ts:1580](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L1580)*

Size in bytes of attachment content

**`memberof`** DownloadAttachmentDto
