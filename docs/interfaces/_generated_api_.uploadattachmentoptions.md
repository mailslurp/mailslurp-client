# Interface: UploadAttachmentOptions

Options for uploading files for attachments. When sending emails with the API that require attachments first upload each attachment. Then use the returned attachment ID in your SendEmailOptions when sending an email. This way you can use attachments multiple times once they have been uploaded.

**`export`** 

**`interface`** UploadAttachmentOptions

## Hierarchy

* **UploadAttachmentOptions**

## Properties

### `Optional` base64Contents

• **base64Contents**? : *string*

*Defined in [src/generated/api.ts:2292](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L2292)*

Base64 encoded string of file contents

**`type`** {string}

**`memberof`** UploadAttachmentOptions

___

### `Optional` contentType

• **contentType**? : *string*

*Defined in [src/generated/api.ts:2298](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L2298)*

Optional contentType for file. For instance `application/pdf`

**`type`** {string}

**`memberof`** UploadAttachmentOptions

___

### `Optional` filename

• **filename**? : *string*

*Defined in [src/generated/api.ts:2304](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L2304)*

Optional filename to save upload with

**`type`** {string}

**`memberof`** UploadAttachmentOptions
