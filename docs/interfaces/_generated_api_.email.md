# Interface: Email

Email model (also referred to as EmailDto). Represents an email that was received by an inbox. If you want the original SMTP message see the `getRawEmail` endpoint.

**`export`** 

**`interface`** Email

## Hierarchy

* **Email**

## Properties

### `Optional` analysis

• **analysis**? : *[EmailAnalysis](_generated_api_.emailanalysis.md)*

*Defined in [src/generated/api.ts:581](https://github.com/mailslurp/mailslurp-client-ts-js/blob/5d485ad/src/generated/api.ts#L581)*

Smart analysis of email content including spam ratings\"

**`type`** {EmailAnalysis}

**`memberof`** Email

___

### `Optional` attachments

• **attachments**? : *Array‹string›*

*Defined in [src/generated/api.ts:587](https://github.com/mailslurp/mailslurp-client-ts-js/blob/5d485ad/src/generated/api.ts#L587)*

List of IDs of attachments found in the email. Use these IDs with the Inbox and Email Controllers to download attachments and attachment meta data such as filesize, name, extension.

**`type`** {Array<string>}

**`memberof`** Email

___

### `Optional` bcc

• **bcc**? : *Array‹string›*

*Defined in [src/generated/api.ts:593](https://github.com/mailslurp/mailslurp-client-ts-js/blob/5d485ad/src/generated/api.ts#L593)*

List of `BCC` recipients email was addressed to

**`type`** {Array<string>}

**`memberof`** Email

___

### `Optional` body

• **body**? : *string*

*Defined in [src/generated/api.ts:599](https://github.com/mailslurp/mailslurp-client-ts-js/blob/5d485ad/src/generated/api.ts#L599)*

The body of the email message

**`type`** {string}

**`memberof`** Email

___

### `Optional` cc

• **cc**? : *Array‹string›*

*Defined in [src/generated/api.ts:605](https://github.com/mailslurp/mailslurp-client-ts-js/blob/5d485ad/src/generated/api.ts#L605)*

List of `CC` recipients email was addressed to

**`type`** {Array<string>}

**`memberof`** Email

___

### `Optional` charset

• **charset**? : *string*

*Defined in [src/generated/api.ts:611](https://github.com/mailslurp/mailslurp-client-ts-js/blob/5d485ad/src/generated/api.ts#L611)*

Detected character set of the email body such as UTF-8

**`type`** {string}

**`memberof`** Email

___

### `Optional` createdAt

• **createdAt**? : *Date*

*Defined in [src/generated/api.ts:617](https://github.com/mailslurp/mailslurp-client-ts-js/blob/5d485ad/src/generated/api.ts#L617)*

When was the email received by MailSlurp

**`type`** {Date}

**`memberof`** Email

___

### `Optional` from

• **from**? : *string*

*Defined in [src/generated/api.ts:623](https://github.com/mailslurp/mailslurp-client-ts-js/blob/5d485ad/src/generated/api.ts#L623)*

Who the email was sent from

**`type`** {string}

**`memberof`** Email

___

### `Optional` headers

• **headers**? : *object*

*Defined in [src/generated/api.ts:629](https://github.com/mailslurp/mailslurp-client-ts-js/blob/5d485ad/src/generated/api.ts#L629)*

**`type`** {{ [key: string]: string; }}

**`memberof`** Email

#### Type declaration:

* \[ **key**: *string*\]: string

___

### `Optional` id

• **id**? : *string*

*Defined in [src/generated/api.ts:635](https://github.com/mailslurp/mailslurp-client-ts-js/blob/5d485ad/src/generated/api.ts#L635)*

ID of the email

**`type`** {string}

**`memberof`** Email

___

### `Optional` inboxId

• **inboxId**? : *string*

*Defined in [src/generated/api.ts:641](https://github.com/mailslurp/mailslurp-client-ts-js/blob/5d485ad/src/generated/api.ts#L641)*

ID of the inbox that received the email

**`type`** {string}

**`memberof`** Email

___

### `Optional` isHTML

• **isHTML**? : *boolean*

*Defined in [src/generated/api.ts:647](https://github.com/mailslurp/mailslurp-client-ts-js/blob/5d485ad/src/generated/api.ts#L647)*

Was HTML sent in the email body

**`type`** {boolean}

**`memberof`** Email

___

### `Optional` read

• **read**? : *boolean*

*Defined in [src/generated/api.ts:653](https://github.com/mailslurp/mailslurp-client-ts-js/blob/5d485ad/src/generated/api.ts#L653)*

Has the email been viewed ever

**`type`** {boolean}

**`memberof`** Email

___

### `Optional` subject

• **subject**? : *string*

*Defined in [src/generated/api.ts:659](https://github.com/mailslurp/mailslurp-client-ts-js/blob/5d485ad/src/generated/api.ts#L659)*

The subject line of the email message

**`type`** {string}

**`memberof`** Email

___

### `Optional` to

• **to**? : *Array‹string›*

*Defined in [src/generated/api.ts:665](https://github.com/mailslurp/mailslurp-client-ts-js/blob/5d485ad/src/generated/api.ts#L665)*

List of `To` recipients email was addressed to

**`type`** {Array<string>}

**`memberof`** Email

___

### `Optional` updatedAt

• **updatedAt**? : *Date*

*Defined in [src/generated/api.ts:671](https://github.com/mailslurp/mailslurp-client-ts-js/blob/5d485ad/src/generated/api.ts#L671)*

When was the email last updated

**`type`** {Date}

**`memberof`** Email

___

### `Optional` userId

• **userId**? : *string*

*Defined in [src/generated/api.ts:677](https://github.com/mailslurp/mailslurp-client-ts-js/blob/5d485ad/src/generated/api.ts#L677)*

ID of user that email belongs

**`type`** {string}

**`memberof`** Email
