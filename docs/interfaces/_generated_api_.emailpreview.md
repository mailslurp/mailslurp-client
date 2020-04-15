# Interface: EmailPreview

Preview of an email message. For full message call the email endpoints with the provided email id.

**`export`** 

**`interface`** EmailPreview

## Hierarchy

* **EmailPreview**

## Properties

### `Optional` attachments

• **attachments**? : *Array‹string›*

*Defined in [src/generated/api.ts:714](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L714)*

List of IDs of attachments found in the email. Use these IDs with the Inbox and Email Controllers to download attachments and attachment meta data such as filesize, name, extension.

**`type`** {Array<string>}

**`memberof`** EmailPreview

___

### `Optional` bcc

• **bcc**? : *Array‹string›*

*Defined in [src/generated/api.ts:720](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L720)*

List of `BCC` recipients email was addressed to

**`type`** {Array<string>}

**`memberof`** EmailPreview

___

### `Optional` cc

• **cc**? : *Array‹string›*

*Defined in [src/generated/api.ts:726](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L726)*

List of `CC` recipients email was addressed to

**`type`** {Array<string>}

**`memberof`** EmailPreview

___

### `Optional` createdAt

• **createdAt**? : *Date*

*Defined in [src/generated/api.ts:732](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L732)*

When was the email received by MailSlurp

**`type`** {Date}

**`memberof`** EmailPreview

___

### `Optional` id

• **id**? : *string*

*Defined in [src/generated/api.ts:738](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L738)*

ID of the email

**`type`** {string}

**`memberof`** EmailPreview

___

### `Optional` read

• **read**? : *boolean*

*Defined in [src/generated/api.ts:744](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L744)*

Has the email been viewed ever

**`type`** {boolean}

**`memberof`** EmailPreview

___

### `Optional` subject

• **subject**? : *string*

*Defined in [src/generated/api.ts:750](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L750)*

The subject line of the email message

**`type`** {string}

**`memberof`** EmailPreview

___

### `Optional` to

• **to**? : *Array‹string›*

*Defined in [src/generated/api.ts:756](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L756)*

List of `To` recipients email was addressed to

**`type`** {Array<string>}

**`memberof`** EmailPreview
