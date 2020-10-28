# Interface: EmailPreview

Preview of an email message. For full message (including body and attachments) call the `getEmail` or other email endpoints with the provided email ID.

**`export`** 

**`interface`** EmailPreview

## Hierarchy

* **EmailPreview**

## Properties

### `Optional` attachments

• **attachments**? : *Array‹string›*

*Defined in [src/generated/api.ts:743](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L743)*

List of IDs of attachments found in the email. Use these IDs with the Inbox and Email Controllers to download attachments and attachment meta data such as filesize, name, extension.

**`type`** {Array<string>}

**`memberof`** EmailPreview

___

### `Optional` bcc

• **bcc**? : *Array‹string›*

*Defined in [src/generated/api.ts:749](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L749)*

List of `BCC` recipients email was addressed to

**`type`** {Array<string>}

**`memberof`** EmailPreview

___

### `Optional` cc

• **cc**? : *Array‹string›*

*Defined in [src/generated/api.ts:755](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L755)*

List of `CC` recipients email was addressed to

**`type`** {Array<string>}

**`memberof`** EmailPreview

___

### `Optional` createdAt

• **createdAt**? : *Date*

*Defined in [src/generated/api.ts:761](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L761)*

When was the email received by MailSlurp

**`type`** {Date}

**`memberof`** EmailPreview

___

### `Optional` from

• **from**? : *string*

*Defined in [src/generated/api.ts:767](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L767)*

Who the email was sent from

**`type`** {string}

**`memberof`** EmailPreview

___

### `Optional` id

• **id**? : *string*

*Defined in [src/generated/api.ts:773](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L773)*

ID of the email

**`type`** {string}

**`memberof`** EmailPreview

___

### `Optional` read

• **read**? : *boolean*

*Defined in [src/generated/api.ts:779](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L779)*

Has the email been viewed ever

**`type`** {boolean}

**`memberof`** EmailPreview

___

### `Optional` subject

• **subject**? : *string*

*Defined in [src/generated/api.ts:785](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L785)*

The subject line of the email message

**`type`** {string}

**`memberof`** EmailPreview

___

### `Optional` to

• **to**? : *Array‹string›*

*Defined in [src/generated/api.ts:791](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L791)*

List of `To` recipients email was addressed to

**`type`** {Array<string>}

**`memberof`** EmailPreview
