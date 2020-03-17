[MailSlurp JS](../README.md) › [Globals](../globals.md) › ["lib/models/UploadAttachmentOptions"](../modules/_lib_models_uploadattachmentoptions_.md) › [UploadAttachmentOptions](_lib_models_uploadattachmentoptions_.uploadattachmentoptions.md)

# Interface: UploadAttachmentOptions

Options for uploading files for attachments. When sending emails with the API that require attachments first upload each attachment. Then use the returned attachment ID in your SendEmailOptions when sending an email. This way you can use attachments multiple times once they have been uploaded.

**`export`** 

**`interface`** UploadAttachmentOptions

## Hierarchy

* **UploadAttachmentOptions**

## Index

### Properties

* [base64Contents](_lib_models_uploadattachmentoptions_.uploadattachmentoptions.md#optional-base64contents)
* [contentType](_lib_models_uploadattachmentoptions_.uploadattachmentoptions.md#optional-contenttype)
* [filename](_lib_models_uploadattachmentoptions_.uploadattachmentoptions.md#optional-filename)

## Properties

### `Optional` base64Contents

• **base64Contents**? : *string*

*Defined in [src/lib/models/UploadAttachmentOptions.ts:27](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/UploadAttachmentOptions.ts#L27)*

Base64 encoded string of file contents

**`type`** {string}

**`memberof`** UploadAttachmentOptions

___

### `Optional` contentType

• **contentType**? : *string*

*Defined in [src/lib/models/UploadAttachmentOptions.ts:33](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/UploadAttachmentOptions.ts#L33)*

Optional contentType for file. For instance `application/pdf`

**`type`** {string}

**`memberof`** UploadAttachmentOptions

___

### `Optional` filename

• **filename**? : *string*

*Defined in [src/lib/models/UploadAttachmentOptions.ts:39](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/UploadAttachmentOptions.ts#L39)*

Optional filename to save upload with

**`type`** {string}

**`memberof`** UploadAttachmentOptions
