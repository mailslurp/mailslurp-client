[MailSlurp JS](../README.md) › [Globals](../globals.md) › ["generated/api"](../modules/_generated_api_.md) › [UploadAttachmentOptions](_generated_api_.uploadattachmentoptions.md)

# Interface: UploadAttachmentOptions

Options for uploading files for attachments. When sending emails with the API that require attachments first upload each attachment. Then use the returned attachment ID in your SendEmailOptions when sending an email. This way you can use attachments multiple times once they have been uploaded.

**`export`** 

**`interface`** UploadAttachmentOptions

## Hierarchy

* **UploadAttachmentOptions**

## Index

### Properties

* [base64Contents](_generated_api_.uploadattachmentoptions.md#optional-base64contents)
* [contentType](_generated_api_.uploadattachmentoptions.md#optional-contenttype)
* [filename](_generated_api_.uploadattachmentoptions.md#optional-filename)

## Properties

### `Optional` base64Contents

• **base64Contents**? : *string*

*Defined in [src/generated/api.ts:2295](https://github.com/mailslurp/mailslurp-client-ts-js/blob/26ccbd6/src/generated/api.ts#L2295)*

Base64 encoded string of file contents

**`type`** {string}

**`memberof`** UploadAttachmentOptions

___

### `Optional` contentType

• **contentType**? : *string*

*Defined in [src/generated/api.ts:2301](https://github.com/mailslurp/mailslurp-client-ts-js/blob/26ccbd6/src/generated/api.ts#L2301)*

Optional contentType for file. For instance `application/pdf`

**`type`** {string}

**`memberof`** UploadAttachmentOptions

___

### `Optional` filename

• **filename**? : *string*

*Defined in [src/generated/api.ts:2307](https://github.com/mailslurp/mailslurp-client-ts-js/blob/26ccbd6/src/generated/api.ts#L2307)*

Optional filename to save upload with

**`type`** {string}

**`memberof`** UploadAttachmentOptions
