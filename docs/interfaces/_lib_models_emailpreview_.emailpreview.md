[MailSlurp JS](../README.md) › [Globals](../globals.md) › ["lib/models/EmailPreview"](../modules/_lib_models_emailpreview_.md) › [EmailPreview](_lib_models_emailpreview_.emailpreview.md)

# Interface: EmailPreview

Preview of an email message. For full message call the email endpoints with the provided email id.

**`export`** 

**`interface`** EmailPreview

## Hierarchy

* **EmailPreview**

## Index

### Properties

* [attachments](_lib_models_emailpreview_.emailpreview.md#optional-attachments)
* [bcc](_lib_models_emailpreview_.emailpreview.md#optional-bcc)
* [cc](_lib_models_emailpreview_.emailpreview.md#optional-cc)
* [createdAt](_lib_models_emailpreview_.emailpreview.md#optional-createdat)
* [id](_lib_models_emailpreview_.emailpreview.md#optional-id)
* [read](_lib_models_emailpreview_.emailpreview.md#optional-read)
* [subject](_lib_models_emailpreview_.emailpreview.md#optional-subject)
* [to](_lib_models_emailpreview_.emailpreview.md#optional-to)

## Properties

### `Optional` attachments

• **attachments**? : *Array‹string›*

*Defined in [src/lib/models/EmailPreview.ts:27](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/EmailPreview.ts#L27)*

List of IDs of attachments found in the email. Use these IDs with the Inbox and Email Controllers to download attachments and attachment meta data such as filesize, name, extension.

**`type`** {Array<string>}

**`memberof`** EmailPreview

___

### `Optional` bcc

• **bcc**? : *Array‹string›*

*Defined in [src/lib/models/EmailPreview.ts:33](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/EmailPreview.ts#L33)*

List of `BCC` recipients email was addressed to

**`type`** {Array<string>}

**`memberof`** EmailPreview

___

### `Optional` cc

• **cc**? : *Array‹string›*

*Defined in [src/lib/models/EmailPreview.ts:39](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/EmailPreview.ts#L39)*

List of `CC` recipients email was addressed to

**`type`** {Array<string>}

**`memberof`** EmailPreview

___

### `Optional` createdAt

• **createdAt**? : *Date*

*Defined in [src/lib/models/EmailPreview.ts:45](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/EmailPreview.ts#L45)*

When was the email received by MailSlurp

**`type`** {Date}

**`memberof`** EmailPreview

___

### `Optional` id

• **id**? : *string*

*Defined in [src/lib/models/EmailPreview.ts:51](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/EmailPreview.ts#L51)*

ID of the email

**`type`** {string}

**`memberof`** EmailPreview

___

### `Optional` read

• **read**? : *boolean*

*Defined in [src/lib/models/EmailPreview.ts:57](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/EmailPreview.ts#L57)*

Has the email been viewed ever

**`type`** {boolean}

**`memberof`** EmailPreview

___

### `Optional` subject

• **subject**? : *string*

*Defined in [src/lib/models/EmailPreview.ts:63](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/EmailPreview.ts#L63)*

The subject line of the email message

**`type`** {string}

**`memberof`** EmailPreview

___

### `Optional` to

• **to**? : *Array‹string›*

*Defined in [src/lib/models/EmailPreview.ts:69](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/EmailPreview.ts#L69)*

List of `To` recipients email was addressed to

**`type`** {Array<string>}

**`memberof`** EmailPreview
