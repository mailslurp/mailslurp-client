[MailSlurp JS](../README.md) › [Globals](../globals.md) › ["generated/api"](../modules/_generated_api_.md) › [Email](_generated_api_.email.md)

# Interface: Email

Representation of an email received by an inbox. Use the ID to access more properties of an email using the EmailController endpoints.

**`export`** 

**`interface`** Email

## Hierarchy

* **Email**

## Index

### Properties

* [analysis](_generated_api_.email.md#optional-analysis)
* [attachments](_generated_api_.email.md#optional-attachments)
* [bcc](_generated_api_.email.md#optional-bcc)
* [body](_generated_api_.email.md#optional-body)
* [cc](_generated_api_.email.md#optional-cc)
* [charset](_generated_api_.email.md#optional-charset)
* [createdAt](_generated_api_.email.md#optional-createdat)
* [from](_generated_api_.email.md#optional-from)
* [headers](_generated_api_.email.md#optional-headers)
* [id](_generated_api_.email.md#optional-id)
* [inboxId](_generated_api_.email.md#optional-inboxid)
* [isHTML](_generated_api_.email.md#optional-ishtml)
* [read](_generated_api_.email.md#optional-read)
* [subject](_generated_api_.email.md#optional-subject)
* [to](_generated_api_.email.md#optional-to)
* [updatedAt](_generated_api_.email.md#optional-updatedat)
* [userId](_generated_api_.email.md#optional-userid)

## Properties

### `Optional` analysis

• **analysis**? : *[EmailAnalysis](_generated_api_.emailanalysis.md)*

*Defined in [src/generated/api.ts:569](https://github.com/mailslurp/mailslurp-client-ts-js/blob/26ccbd6/src/generated/api.ts#L569)*

Smart analysis of email content including spam ratings\"

**`type`** {EmailAnalysis}

**`memberof`** Email

___

### `Optional` attachments

• **attachments**? : *Array‹string›*

*Defined in [src/generated/api.ts:575](https://github.com/mailslurp/mailslurp-client-ts-js/blob/26ccbd6/src/generated/api.ts#L575)*

List of IDs of attachments found in the email. Use these IDs with the Inbox and Email Controllers to download attachments and attachment meta data such as filesize, name, extension.

**`type`** {Array<string>}

**`memberof`** Email

___

### `Optional` bcc

• **bcc**? : *Array‹string›*

*Defined in [src/generated/api.ts:581](https://github.com/mailslurp/mailslurp-client-ts-js/blob/26ccbd6/src/generated/api.ts#L581)*

List of `BCC` recipients email was addressed to

**`type`** {Array<string>}

**`memberof`** Email

___

### `Optional` body

• **body**? : *string*

*Defined in [src/generated/api.ts:587](https://github.com/mailslurp/mailslurp-client-ts-js/blob/26ccbd6/src/generated/api.ts#L587)*

The body of the email message

**`type`** {string}

**`memberof`** Email

___

### `Optional` cc

• **cc**? : *Array‹string›*

*Defined in [src/generated/api.ts:593](https://github.com/mailslurp/mailslurp-client-ts-js/blob/26ccbd6/src/generated/api.ts#L593)*

List of `CC` recipients email was addressed to

**`type`** {Array<string>}

**`memberof`** Email

___

### `Optional` charset

• **charset**? : *string*

*Defined in [src/generated/api.ts:599](https://github.com/mailslurp/mailslurp-client-ts-js/blob/26ccbd6/src/generated/api.ts#L599)*

Detected character set of the email body such as UTF-8

**`type`** {string}

**`memberof`** Email

___

### `Optional` createdAt

• **createdAt**? : *Date*

*Defined in [src/generated/api.ts:605](https://github.com/mailslurp/mailslurp-client-ts-js/blob/26ccbd6/src/generated/api.ts#L605)*

When was the email received by MailSlurp

**`type`** {Date}

**`memberof`** Email

___

### `Optional` from

• **from**? : *string*

*Defined in [src/generated/api.ts:611](https://github.com/mailslurp/mailslurp-client-ts-js/blob/26ccbd6/src/generated/api.ts#L611)*

Who the email was sent from

**`type`** {string}

**`memberof`** Email

___

### `Optional` headers

• **headers**? : *object*

*Defined in [src/generated/api.ts:617](https://github.com/mailslurp/mailslurp-client-ts-js/blob/26ccbd6/src/generated/api.ts#L617)*

**`type`** {{ [key: string]: string; }}

**`memberof`** Email

#### Type declaration:

* \[ **key**: *string*\]: string

___

### `Optional` id

• **id**? : *string*

*Defined in [src/generated/api.ts:623](https://github.com/mailslurp/mailslurp-client-ts-js/blob/26ccbd6/src/generated/api.ts#L623)*

ID of the email

**`type`** {string}

**`memberof`** Email

___

### `Optional` inboxId

• **inboxId**? : *string*

*Defined in [src/generated/api.ts:629](https://github.com/mailslurp/mailslurp-client-ts-js/blob/26ccbd6/src/generated/api.ts#L629)*

ID of the inbox that received the email

**`type`** {string}

**`memberof`** Email

___

### `Optional` isHTML

• **isHTML**? : *boolean*

*Defined in [src/generated/api.ts:635](https://github.com/mailslurp/mailslurp-client-ts-js/blob/26ccbd6/src/generated/api.ts#L635)*

Was HTML sent in the email body

**`type`** {boolean}

**`memberof`** Email

___

### `Optional` read

• **read**? : *boolean*

*Defined in [src/generated/api.ts:641](https://github.com/mailslurp/mailslurp-client-ts-js/blob/26ccbd6/src/generated/api.ts#L641)*

Has the email been viewed ever

**`type`** {boolean}

**`memberof`** Email

___

### `Optional` subject

• **subject**? : *string*

*Defined in [src/generated/api.ts:647](https://github.com/mailslurp/mailslurp-client-ts-js/blob/26ccbd6/src/generated/api.ts#L647)*

The subject line of the email message

**`type`** {string}

**`memberof`** Email

___

### `Optional` to

• **to**? : *Array‹string›*

*Defined in [src/generated/api.ts:653](https://github.com/mailslurp/mailslurp-client-ts-js/blob/26ccbd6/src/generated/api.ts#L653)*

List of `To` recipients email was addressed to

**`type`** {Array<string>}

**`memberof`** Email

___

### `Optional` updatedAt

• **updatedAt**? : *Date*

*Defined in [src/generated/api.ts:659](https://github.com/mailslurp/mailslurp-client-ts-js/blob/26ccbd6/src/generated/api.ts#L659)*

When was the email last updated

**`type`** {Date}

**`memberof`** Email

___

### `Optional` userId

• **userId**? : *string*

*Defined in [src/generated/api.ts:665](https://github.com/mailslurp/mailslurp-client-ts-js/blob/26ccbd6/src/generated/api.ts#L665)*

ID of user that email belongs

**`type`** {string}

**`memberof`** Email
