# Interface: EmailPreview

Preview of an email message. For full message (including body and attachments) call the `getEmail` or other email endpoints with the provided email ID.

**`export`** 

**`interface`** EmailPreview

## Hierarchy

* **EmailPreview**

## Properties

### `Optional` attachments

• **attachments**? : *Array‹string›*

*Defined in [src/generated/api.ts:729](https://github.com/mailslurp/mailslurp-client-ts-js/blob/5d485ad/src/generated/api.ts#L729)*

List of IDs of attachments found in the email. Use these IDs with the Inbox and Email Controllers to download attachments and attachment meta data such as filesize, name, extension.

**`type`** {Array<string>}

**`memberof`** EmailPreview

___

### `Optional` bcc

• **bcc**? : *Array‹string›*

*Defined in [src/generated/api.ts:735](https://github.com/mailslurp/mailslurp-client-ts-js/blob/5d485ad/src/generated/api.ts#L735)*

List of `BCC` recipients email was addressed to

**`type`** {Array<string>}

**`memberof`** EmailPreview

___

### `Optional` cc

• **cc**? : *Array‹string›*

*Defined in [src/generated/api.ts:741](https://github.com/mailslurp/mailslurp-client-ts-js/blob/5d485ad/src/generated/api.ts#L741)*

List of `CC` recipients email was addressed to

**`type`** {Array<string>}

**`memberof`** EmailPreview

___

### `Optional` createdAt

• **createdAt**? : *Date*

*Defined in [src/generated/api.ts:747](https://github.com/mailslurp/mailslurp-client-ts-js/blob/5d485ad/src/generated/api.ts#L747)*

When was the email received by MailSlurp

**`type`** {Date}

**`memberof`** EmailPreview

___

### `Optional` id

• **id**? : *string*

*Defined in [src/generated/api.ts:753](https://github.com/mailslurp/mailslurp-client-ts-js/blob/5d485ad/src/generated/api.ts#L753)*

ID of the email

**`type`** {string}

**`memberof`** EmailPreview

___

### `Optional` read

• **read**? : *boolean*

*Defined in [src/generated/api.ts:759](https://github.com/mailslurp/mailslurp-client-ts-js/blob/5d485ad/src/generated/api.ts#L759)*

Has the email been viewed ever

**`type`** {boolean}

**`memberof`** EmailPreview

___

### `Optional` subject

• **subject**? : *string*

*Defined in [src/generated/api.ts:765](https://github.com/mailslurp/mailslurp-client-ts-js/blob/5d485ad/src/generated/api.ts#L765)*

The subject line of the email message

**`type`** {string}

**`memberof`** EmailPreview

___

### `Optional` to

• **to**? : *Array‹string›*

*Defined in [src/generated/api.ts:771](https://github.com/mailslurp/mailslurp-client-ts-js/blob/5d485ad/src/generated/api.ts#L771)*

List of `To` recipients email was addressed to

**`type`** {Array<string>}

**`memberof`** EmailPreview
