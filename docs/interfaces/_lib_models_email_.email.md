[MailSlurp JS](../README.md) › [Globals](../globals.md) › ["lib/models/Email"](../modules/_lib_models_email_.md) › [Email](_lib_models_email_.email.md)

# Interface: Email

Representation of an email received by an inbox. Use the ID to access more properties of an email using the EmailController endpoints.

**`export`** 

**`interface`** Email

## Hierarchy

* **Email**

## Index

### Properties

* [analysis](_lib_models_email_.email.md#optional-analysis)
* [attachments](_lib_models_email_.email.md#optional-attachments)
* [bcc](_lib_models_email_.email.md#optional-bcc)
* [body](_lib_models_email_.email.md#optional-body)
* [cc](_lib_models_email_.email.md#optional-cc)
* [charset](_lib_models_email_.email.md#optional-charset)
* [createdAt](_lib_models_email_.email.md#optional-createdat)
* [from](_lib_models_email_.email.md#optional-from)
* [headers](_lib_models_email_.email.md#optional-headers)
* [id](_lib_models_email_.email.md#optional-id)
* [inboxId](_lib_models_email_.email.md#optional-inboxid)
* [isHTML](_lib_models_email_.email.md#optional-ishtml)
* [read](_lib_models_email_.email.md#optional-read)
* [subject](_lib_models_email_.email.md#optional-subject)
* [to](_lib_models_email_.email.md#optional-to)
* [updatedAt](_lib_models_email_.email.md#optional-updatedat)
* [userId](_lib_models_email_.email.md#optional-userid)

## Properties

### `Optional` analysis

• **analysis**? : *[EmailAnalysis](_lib_models_emailanalysis_.emailanalysis.md)*

*Defined in [src/lib/models/Email.ts:34](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/Email.ts#L34)*

**`type`** {EmailAnalysis}

**`memberof`** Email

___

### `Optional` attachments

• **attachments**? : *Array‹string›*

*Defined in [src/lib/models/Email.ts:40](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/Email.ts#L40)*

List of IDs of attachments found in the email. Use these IDs with the Inbox and Email Controllers to download attachments and attachment meta data such as filesize, name, extension.

**`type`** {Array<string>}

**`memberof`** Email

___

### `Optional` bcc

• **bcc**? : *Array‹string›*

*Defined in [src/lib/models/Email.ts:46](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/Email.ts#L46)*

List of `BCC` recipients email was addressed to

**`type`** {Array<string>}

**`memberof`** Email

___

### `Optional` body

• **body**? : *string*

*Defined in [src/lib/models/Email.ts:52](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/Email.ts#L52)*

The body of the email message

**`type`** {string}

**`memberof`** Email

___

### `Optional` cc

• **cc**? : *Array‹string›*

*Defined in [src/lib/models/Email.ts:58](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/Email.ts#L58)*

List of `CC` recipients email was addressed to

**`type`** {Array<string>}

**`memberof`** Email

___

### `Optional` charset

• **charset**? : *string*

*Defined in [src/lib/models/Email.ts:64](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/Email.ts#L64)*

Detected character set of the email body such as UTF-8

**`type`** {string}

**`memberof`** Email

___

### `Optional` createdAt

• **createdAt**? : *Date*

*Defined in [src/lib/models/Email.ts:70](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/Email.ts#L70)*

When was the email received by MailSlurp

**`type`** {Date}

**`memberof`** Email

___

### `Optional` from

• **from**? : *string*

*Defined in [src/lib/models/Email.ts:76](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/Email.ts#L76)*

Who the email was sent from

**`type`** {string}

**`memberof`** Email

___

### `Optional` headers

• **headers**? : *object*

*Defined in [src/lib/models/Email.ts:82](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/Email.ts#L82)*

**`type`** {{ [key: string]: string; }}

**`memberof`** Email

#### Type declaration:

* \[ **key**: *string*\]: string

___

### `Optional` id

• **id**? : *string*

*Defined in [src/lib/models/Email.ts:88](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/Email.ts#L88)*

ID of the email

**`type`** {string}

**`memberof`** Email

___

### `Optional` inboxId

• **inboxId**? : *string*

*Defined in [src/lib/models/Email.ts:94](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/Email.ts#L94)*

ID of the inbox that received the email

**`type`** {string}

**`memberof`** Email

___

### `Optional` isHTML

• **isHTML**? : *boolean*

*Defined in [src/lib/models/Email.ts:100](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/Email.ts#L100)*

Was HTML sent in the email body

**`type`** {boolean}

**`memberof`** Email

___

### `Optional` read

• **read**? : *boolean*

*Defined in [src/lib/models/Email.ts:106](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/Email.ts#L106)*

Has the email been viewed ever

**`type`** {boolean}

**`memberof`** Email

___

### `Optional` subject

• **subject**? : *string*

*Defined in [src/lib/models/Email.ts:112](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/Email.ts#L112)*

The subject line of the email message

**`type`** {string}

**`memberof`** Email

___

### `Optional` to

• **to**? : *Array‹string›*

*Defined in [src/lib/models/Email.ts:118](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/Email.ts#L118)*

List of `To` recipients email was addressed to

**`type`** {Array<string>}

**`memberof`** Email

___

### `Optional` updatedAt

• **updatedAt**? : *Date*

*Defined in [src/lib/models/Email.ts:124](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/Email.ts#L124)*

When was the email last updated

**`type`** {Date}

**`memberof`** Email

___

### `Optional` userId

• **userId**? : *string*

*Defined in [src/lib/models/Email.ts:130](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/Email.ts#L130)*

ID of user that email belongs

**`type`** {string}

**`memberof`** Email
