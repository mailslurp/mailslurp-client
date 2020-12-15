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

*Defined in [src/generated/api.ts:1089](https://github.com/mailslurp/mailslurp-client/blob/36fa2ad/src/generated/api.ts#L1089)*

Base64 encoded string of attachment bytes. Decode the base64 string to get the raw file bytes

**`memberof`** DownloadAttachmentDto

___

### contentType

• `Optional` **contentType**: string

*Defined in [src/generated/api.ts:1095](https://github.com/mailslurp/mailslurp-client/blob/36fa2ad/src/generated/api.ts#L1095)*

Content type of attachment

**`memberof`** DownloadAttachmentDto

___

### sizeBytes

• `Optional` **sizeBytes**: number

*Defined in [src/generated/api.ts:1101](https://github.com/mailslurp/mailslurp-client/blob/36fa2ad/src/generated/api.ts#L1101)*

Size in bytes of attachment

**`memberof`** DownloadAttachmentDto
