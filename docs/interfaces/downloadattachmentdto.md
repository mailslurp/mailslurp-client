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

*Defined in [src/generated/api.ts:639](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L639)*

Base64 encoded string of attachment bytes. Decode the base64 string to get the raw file bytes

**`memberof`** DownloadAttachmentDto

___

### contentType

• `Optional` **contentType**: string

*Defined in [src/generated/api.ts:645](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L645)*

Content type of attachment

**`memberof`** DownloadAttachmentDto

___

### sizeBytes

• `Optional` **sizeBytes**: number

*Defined in [src/generated/api.ts:651](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L651)*

Size in bytes of attachment

**`memberof`** DownloadAttachmentDto
