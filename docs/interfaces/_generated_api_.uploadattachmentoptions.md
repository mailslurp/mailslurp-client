# Interface: UploadAttachmentOptions

Options for uploading files for attachments. When sending emails with the API that require attachments first upload each attachment. Then use the returned attachment ID in your `SendEmailOptions` when sending an email. This way you can use attachments multiple times once they have been uploaded.

**`export`** 

**`interface`** UploadAttachmentOptions

## Hierarchy

* **UploadAttachmentOptions**

## Properties

### `Optional` base64Contents

• **base64Contents**? : *string*

*Defined in [src/generated/api.ts:2307](https://github.com/mailslurp/mailslurp-client-ts-js/blob/507ad2d/src/generated/api.ts#L2307)*

Base64 encoded string of file contents

**`type`** {string}

**`memberof`** UploadAttachmentOptions

___

### `Optional` contentType

• **contentType**? : *string*

*Defined in [src/generated/api.ts:2313](https://github.com/mailslurp/mailslurp-client-ts-js/blob/507ad2d/src/generated/api.ts#L2313)*

Optional contentType for file. For instance `application/pdf`

**`type`** {string}

**`memberof`** UploadAttachmentOptions

___

### `Optional` filename

• **filename**? : *string*

*Defined in [src/generated/api.ts:2319](https://github.com/mailslurp/mailslurp-client-ts-js/blob/507ad2d/src/generated/api.ts#L2319)*

Optional filename to save upload with

**`type`** {string}

**`memberof`** UploadAttachmentOptions
