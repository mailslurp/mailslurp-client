# Interface: Email

Email model (also referred to as EmailDto). Represents an email that was received by an inbox. If you want the original SMTP message see the `getRawEmail` endpoint.

**`export`** 

**`interface`** Email

## Hierarchy

* **Email**

## Properties

### `Optional` analysis

• **analysis**? : *[EmailAnalysis](_generated_api_.emailanalysis.md)*

*Defined in [src/generated/api.ts:595](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L595)*

Smart analysis of email content including spam ratings\"

**`type`** {EmailAnalysis}

**`memberof`** Email

___

### `Optional` attachments

• **attachments**? : *Array‹string›*

*Defined in [src/generated/api.ts:601](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L601)*

List of IDs of attachments found in the email. Use these IDs with the Inbox and Email Controllers to download attachments and attachment meta data such as filesize, name, extension.

**`type`** {Array<string>}

**`memberof`** Email

___

### `Optional` bcc

• **bcc**? : *Array‹string›*

*Defined in [src/generated/api.ts:607](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L607)*

List of `BCC` recipients email was addressed to

**`type`** {Array<string>}

**`memberof`** Email

___

### `Optional` body

• **body**? : *string*

*Defined in [src/generated/api.ts:613](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L613)*

The body of the email message

**`type`** {string}

**`memberof`** Email

___

### `Optional` cc

• **cc**? : *Array‹string›*

*Defined in [src/generated/api.ts:619](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L619)*

List of `CC` recipients email was addressed to

**`type`** {Array<string>}

**`memberof`** Email

___

### `Optional` charset

• **charset**? : *string*

*Defined in [src/generated/api.ts:625](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L625)*

Detected character set of the email body such as UTF-8

**`type`** {string}

**`memberof`** Email

___

### `Optional` createdAt

• **createdAt**? : *Date*

*Defined in [src/generated/api.ts:631](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L631)*

When was the email received by MailSlurp

**`type`** {Date}

**`memberof`** Email

___

### `Optional` from

• **from**? : *string*

*Defined in [src/generated/api.ts:637](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L637)*

Who the email was sent from

**`type`** {string}

**`memberof`** Email

___

### `Optional` headers

• **headers**? : *object*

*Defined in [src/generated/api.ts:643](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L643)*

**`type`** {{ [key: string]: string; }}

**`memberof`** Email

#### Type declaration:

* \[ **key**: *string*\]: string

___

### `Optional` id

• **id**? : *string*

*Defined in [src/generated/api.ts:649](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L649)*

ID of the email

**`type`** {string}

**`memberof`** Email

___

### `Optional` inboxId

• **inboxId**? : *string*

*Defined in [src/generated/api.ts:655](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L655)*

ID of the inbox that received the email

**`type`** {string}

**`memberof`** Email

___

### `Optional` isHTML

• **isHTML**? : *boolean*

*Defined in [src/generated/api.ts:661](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L661)*

Was HTML sent in the email body

**`type`** {boolean}

**`memberof`** Email

___

### `Optional` read

• **read**? : *boolean*

*Defined in [src/generated/api.ts:667](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L667)*

Has the email been viewed ever

**`type`** {boolean}

**`memberof`** Email

___

### `Optional` subject

• **subject**? : *string*

*Defined in [src/generated/api.ts:673](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L673)*

The subject line of the email message

**`type`** {string}

**`memberof`** Email

___

### `Optional` to

• **to**? : *Array‹string›*

*Defined in [src/generated/api.ts:679](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L679)*

List of `To` recipients email was addressed to

**`type`** {Array<string>}

**`memberof`** Email

___

### `Optional` updatedAt

• **updatedAt**? : *Date*

*Defined in [src/generated/api.ts:685](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L685)*

When was the email last updated

**`type`** {Date}

**`memberof`** Email

___

### `Optional` userId

• **userId**? : *string*

*Defined in [src/generated/api.ts:691](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L691)*

ID of user that email belongs

**`type`** {string}

**`memberof`** Email
