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

*Defined in [src/generated/api.ts:1277](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L1277)*

Base64 encoded string of attachment bytes. Decode the base64 string to get the raw file bytes

**`memberof`** DownloadAttachmentDto

___

### contentType

• `Optional` **contentType**: string

*Defined in [src/generated/api.ts:1283](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L1283)*

Content type of attachment

**`memberof`** DownloadAttachmentDto

___

### sizeBytes

• `Optional` **sizeBytes**: number

*Defined in [src/generated/api.ts:1289](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L1289)*

Size in bytes of attachment

**`memberof`** DownloadAttachmentDto
