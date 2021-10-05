[MailSlurp JS](../README.md) / UploadAttachmentOptions

# Interface: UploadAttachmentOptions

Options for uploading files for attachments. When sending emails with the API that require attachments first upload each attachment. Then use the returned attachment ID in your `SendEmailOptions` when sending an email. This way you can use attachments multiple times once they have been uploaded.

**`export`**

**`interface`** UploadAttachmentOptions

## Table of contents

### Properties

- [base64Contents](UploadAttachmentOptions.md#base64contents)
- [contentType](UploadAttachmentOptions.md#contenttype)
- [filename](UploadAttachmentOptions.md#filename)

## Properties

### base64Contents

• **base64Contents**: `string`

Base64 encoded string of file contents. Typically this means reading the bytes or string content of a file and then converting that to a base64 encoded string. For examples of how to do this see https://www.mailslurp.com/guides/base64-file-uploads/

**`memberof`** UploadAttachmentOptions

#### Defined in

[src/generated/api.ts:6082](https://github.com/mailslurp/mailslurp-client/blob/004c609/src/generated/api.ts#L6082)

___

### contentType

• `Optional` **contentType**: `string`

Optional contentType for file. For instance `application/pdf`

**`memberof`** UploadAttachmentOptions

#### Defined in

[src/generated/api.ts:6088](https://github.com/mailslurp/mailslurp-client/blob/004c609/src/generated/api.ts#L6088)

___

### filename

• `Optional` **filename**: `string`

Optional filename to save upload with. Will be the name that is shown in email clients

**`memberof`** UploadAttachmentOptions

#### Defined in

[src/generated/api.ts:6094](https://github.com/mailslurp/mailslurp-client/blob/004c609/src/generated/api.ts#L6094)
