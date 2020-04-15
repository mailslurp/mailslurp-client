# Interface: Email

Representation of an email received by an inbox. Use the ID to access more properties of an email using the EmailController endpoints.

**`export`** 

**`interface`** Email

## Hierarchy

* **Email**

## Properties

### `Optional` analysis

• **analysis**? : *[EmailAnalysis](_generated_api_.emailanalysis.md)*

*Defined in [src/generated/api.ts:566](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L566)*

Smart analysis of email content including spam ratings\"

**`type`** {EmailAnalysis}

**`memberof`** Email

___

### `Optional` attachments

• **attachments**? : *Array‹string›*

*Defined in [src/generated/api.ts:572](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L572)*

List of IDs of attachments found in the email. Use these IDs with the Inbox and Email Controllers to download attachments and attachment meta data such as filesize, name, extension.

**`type`** {Array<string>}

**`memberof`** Email

___

### `Optional` bcc

• **bcc**? : *Array‹string›*

*Defined in [src/generated/api.ts:578](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L578)*

List of `BCC` recipients email was addressed to

**`type`** {Array<string>}

**`memberof`** Email

___

### `Optional` body

• **body**? : *string*

*Defined in [src/generated/api.ts:584](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L584)*

The body of the email message

**`type`** {string}

**`memberof`** Email

___

### `Optional` cc

• **cc**? : *Array‹string›*

*Defined in [src/generated/api.ts:590](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L590)*

List of `CC` recipients email was addressed to

**`type`** {Array<string>}

**`memberof`** Email

___

### `Optional` charset

• **charset**? : *string*

*Defined in [src/generated/api.ts:596](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L596)*

Detected character set of the email body such as UTF-8

**`type`** {string}

**`memberof`** Email

___

### `Optional` createdAt

• **createdAt**? : *Date*

*Defined in [src/generated/api.ts:602](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L602)*

When was the email received by MailSlurp

**`type`** {Date}

**`memberof`** Email

___

### `Optional` from

• **from**? : *string*

*Defined in [src/generated/api.ts:608](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L608)*

Who the email was sent from

**`type`** {string}

**`memberof`** Email

___

### `Optional` headers

• **headers**? : *object*

*Defined in [src/generated/api.ts:614](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L614)*

**`type`** {{ [key: string]: string; }}

**`memberof`** Email

#### Type declaration:

* \[ **key**: *string*\]: string

___

### `Optional` id

• **id**? : *string*

*Defined in [src/generated/api.ts:620](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L620)*

ID of the email

**`type`** {string}

**`memberof`** Email

___

### `Optional` inboxId

• **inboxId**? : *string*

*Defined in [src/generated/api.ts:626](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L626)*

ID of the inbox that received the email

**`type`** {string}

**`memberof`** Email

___

### `Optional` isHTML

• **isHTML**? : *boolean*

*Defined in [src/generated/api.ts:632](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L632)*

Was HTML sent in the email body

**`type`** {boolean}

**`memberof`** Email

___

### `Optional` read

• **read**? : *boolean*

*Defined in [src/generated/api.ts:638](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L638)*

Has the email been viewed ever

**`type`** {boolean}

**`memberof`** Email

___

### `Optional` subject

• **subject**? : *string*

*Defined in [src/generated/api.ts:644](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L644)*

The subject line of the email message

**`type`** {string}

**`memberof`** Email

___

### `Optional` to

• **to**? : *Array‹string›*

*Defined in [src/generated/api.ts:650](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L650)*

List of `To` recipients email was addressed to

**`type`** {Array<string>}

**`memberof`** Email

___

### `Optional` updatedAt

• **updatedAt**? : *Date*

*Defined in [src/generated/api.ts:656](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L656)*

When was the email last updated

**`type`** {Date}

**`memberof`** Email

___

### `Optional` userId

• **userId**? : *string*

*Defined in [src/generated/api.ts:662](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L662)*

ID of user that email belongs

**`type`** {string}

**`memberof`** Email
