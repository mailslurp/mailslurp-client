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

*Defined in [src/generated/api.ts:653](https://github.com/mailslurp/mailslurp-client/blob/c6aef6d/src/generated/api.ts#L653)*

Base64 encoded string of attachment bytes. Decode the base64 string to get the raw file bytes

**`memberof`** DownloadAttachmentDto

___

### contentType

• `Optional` **contentType**: string

*Defined in [src/generated/api.ts:659](https://github.com/mailslurp/mailslurp-client/blob/c6aef6d/src/generated/api.ts#L659)*

Content type of attachment

**`memberof`** DownloadAttachmentDto

___

### sizeBytes

• `Optional` **sizeBytes**: number

*Defined in [src/generated/api.ts:665](https://github.com/mailslurp/mailslurp-client/blob/c6aef6d/src/generated/api.ts#L665)*

Size in bytes of attachment

**`memberof`** DownloadAttachmentDto
