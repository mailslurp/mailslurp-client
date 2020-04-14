[MailSlurp JS](../README.md) › [Globals](../globals.md) › ["generated/api"](../modules/_generated_api_.md) › [EmailPreview](_generated_api_.emailpreview.md)

# Interface: EmailPreview

Preview of an email message. For full message call the email endpoints with the provided email id.

**`export`** 

**`interface`** EmailPreview

## Hierarchy

* **EmailPreview**

## Index

### Properties

* [attachments](_generated_api_.emailpreview.md#optional-attachments)
* [bcc](_generated_api_.emailpreview.md#optional-bcc)
* [cc](_generated_api_.emailpreview.md#optional-cc)
* [createdAt](_generated_api_.emailpreview.md#optional-createdat)
* [id](_generated_api_.emailpreview.md#optional-id)
* [read](_generated_api_.emailpreview.md#optional-read)
* [subject](_generated_api_.emailpreview.md#optional-subject)
* [to](_generated_api_.emailpreview.md#optional-to)

## Properties

### `Optional` attachments

• **attachments**? : *Array‹string›*

*Defined in [src/generated/api.ts:717](https://github.com/mailslurp/mailslurp-client-ts-js/blob/e9348f1/src/generated/api.ts#L717)*

List of IDs of attachments found in the email. Use these IDs with the Inbox and Email Controllers to download attachments and attachment meta data such as filesize, name, extension.

**`type`** {Array<string>}

**`memberof`** EmailPreview

___

### `Optional` bcc

• **bcc**? : *Array‹string›*

*Defined in [src/generated/api.ts:723](https://github.com/mailslurp/mailslurp-client-ts-js/blob/e9348f1/src/generated/api.ts#L723)*

List of `BCC` recipients email was addressed to

**`type`** {Array<string>}

**`memberof`** EmailPreview

___

### `Optional` cc

• **cc**? : *Array‹string›*

*Defined in [src/generated/api.ts:729](https://github.com/mailslurp/mailslurp-client-ts-js/blob/e9348f1/src/generated/api.ts#L729)*

List of `CC` recipients email was addressed to

**`type`** {Array<string>}

**`memberof`** EmailPreview

___

### `Optional` createdAt

• **createdAt**? : *Date*

*Defined in [src/generated/api.ts:735](https://github.com/mailslurp/mailslurp-client-ts-js/blob/e9348f1/src/generated/api.ts#L735)*

When was the email received by MailSlurp

**`type`** {Date}

**`memberof`** EmailPreview

___

### `Optional` id

• **id**? : *string*

*Defined in [src/generated/api.ts:741](https://github.com/mailslurp/mailslurp-client-ts-js/blob/e9348f1/src/generated/api.ts#L741)*

ID of the email

**`type`** {string}

**`memberof`** EmailPreview

___

### `Optional` read

• **read**? : *boolean*

*Defined in [src/generated/api.ts:747](https://github.com/mailslurp/mailslurp-client-ts-js/blob/e9348f1/src/generated/api.ts#L747)*

Has the email been viewed ever

**`type`** {boolean}

**`memberof`** EmailPreview

___

### `Optional` subject

• **subject**? : *string*

*Defined in [src/generated/api.ts:753](https://github.com/mailslurp/mailslurp-client-ts-js/blob/e9348f1/src/generated/api.ts#L753)*

The subject line of the email message

**`type`** {string}

**`memberof`** EmailPreview

___

### `Optional` to

• **to**? : *Array‹string›*

*Defined in [src/generated/api.ts:759](https://github.com/mailslurp/mailslurp-client-ts-js/blob/e9348f1/src/generated/api.ts#L759)*

List of `To` recipients email was addressed to

**`type`** {Array<string>}

**`memberof`** EmailPreview
