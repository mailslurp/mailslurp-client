**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / UploadAttachmentOptions

# Interface: UploadAttachmentOptions

Options for uploading files for attachments. When sending emails with the API that require attachments first upload each attachment. Then use the returned attachment ID in your `SendEmailOptions` when sending an email. This way you can use attachments multiple times once they have been uploaded.

**`export`** 

**`interface`** UploadAttachmentOptions

## Hierarchy

* **UploadAttachmentOptions**

## Index

### Properties

* [base64Contents](uploadattachmentoptions.md#base64contents)
* [contentType](uploadattachmentoptions.md#contenttype)
* [filename](uploadattachmentoptions.md#filename)

## Properties

### base64Contents

•  **base64Contents**: string

*Defined in [src/generated/api.ts:5189](https://github.com/mailslurp/mailslurp-client/blob/e4d4355/src/generated/api.ts#L5189)*

Base64 encoded string of file contents. Typically this means reading the bytes or string content of a file and then converting that to a base64 encoded string.

**`memberof`** UploadAttachmentOptions

___

### contentType

• `Optional` **contentType**: string

*Defined in [src/generated/api.ts:5195](https://github.com/mailslurp/mailslurp-client/blob/e4d4355/src/generated/api.ts#L5195)*

Optional contentType for file. For instance `application/pdf`

**`memberof`** UploadAttachmentOptions

___

### filename

• `Optional` **filename**: string

*Defined in [src/generated/api.ts:5201](https://github.com/mailslurp/mailslurp-client/blob/e4d4355/src/generated/api.ts#L5201)*

Optional filename to save upload with. Will be the name that is shown in email clients

**`memberof`** UploadAttachmentOptions
