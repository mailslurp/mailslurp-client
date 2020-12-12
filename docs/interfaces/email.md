**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / Email

# Interface: Email

Email model (also referred to as EmailDto). Represents an email that was received by an inbox. If you want the original SMTP message see the `getRawEmail` endpoint.

**`export`** 

**`interface`** Email

## Hierarchy

* **Email**

## Index

### Properties

* [analysis](email.md#analysis)
* [attachments](email.md#attachments)
* [bcc](email.md#bcc)
* [body](email.md#body)
* [bodyMD5Hash](email.md#bodymd5hash)
* [cc](email.md#cc)
* [charset](email.md#charset)
* [createdAt](email.md#createdat)
* [from](email.md#from)
* [headers](email.md#headers)
* [id](email.md#id)
* [inboxId](email.md#inboxid)
* [isHTML](email.md#ishtml)
* [read](email.md#read)
* [replyTo](email.md#replyto)
* [subject](email.md#subject)
* [to](email.md#to)
* [updatedAt](email.md#updatedat)
* [userId](email.md#userid)

## Properties

### analysis

• `Optional` **analysis**: [EmailAnalysis](emailanalysis.md)

*Defined in [src/generated/api.ts:1123](https://github.com/mailslurp/mailslurp-client/blob/cdc62f8/src/generated/api.ts#L1123)*

Smart analysis of email content including spam ratings\"

**`memberof`** Email

___

### attachments

• `Optional` **attachments**: Array\<string>

*Defined in [src/generated/api.ts:1129](https://github.com/mailslurp/mailslurp-client/blob/cdc62f8/src/generated/api.ts#L1129)*

List of IDs of attachments found in the email. Use these IDs with the Inbox and Email Controllers to download attachments and attachment meta data such as filesize, name, extension.

**`memberof`** Email

___

### bcc

• `Optional` **bcc**: Array\<string>

*Defined in [src/generated/api.ts:1135](https://github.com/mailslurp/mailslurp-client/blob/cdc62f8/src/generated/api.ts#L1135)*

List of `BCC` recipients email was addressed to

**`memberof`** Email

___

### body

• `Optional` **body**: string

*Defined in [src/generated/api.ts:1141](https://github.com/mailslurp/mailslurp-client/blob/cdc62f8/src/generated/api.ts#L1141)*

The body of the email message

**`memberof`** Email

___

### bodyMD5Hash

• `Optional` **bodyMD5Hash**: string

*Defined in [src/generated/api.ts:1147](https://github.com/mailslurp/mailslurp-client/blob/cdc62f8/src/generated/api.ts#L1147)*

A hash signature of the email message

**`memberof`** Email

___

### cc

• `Optional` **cc**: Array\<string>

*Defined in [src/generated/api.ts:1153](https://github.com/mailslurp/mailslurp-client/blob/cdc62f8/src/generated/api.ts#L1153)*

List of `CC` recipients email was addressed to

**`memberof`** Email

___

### charset

• `Optional` **charset**: string

*Defined in [src/generated/api.ts:1159](https://github.com/mailslurp/mailslurp-client/blob/cdc62f8/src/generated/api.ts#L1159)*

Detected character set of the email body such as UTF-8

**`memberof`** Email

___

### createdAt

• `Optional` **createdAt**: Date

*Defined in [src/generated/api.ts:1165](https://github.com/mailslurp/mailslurp-client/blob/cdc62f8/src/generated/api.ts#L1165)*

When was the email received by MailSlurp

**`memberof`** Email

___

### from

• `Optional` **from**: string

*Defined in [src/generated/api.ts:1171](https://github.com/mailslurp/mailslurp-client/blob/cdc62f8/src/generated/api.ts#L1171)*

Who the email was sent from

**`memberof`** Email

___

### headers

• `Optional` **headers**: { [key:string]: string;  }

*Defined in [src/generated/api.ts:1177](https://github.com/mailslurp/mailslurp-client/blob/cdc62f8/src/generated/api.ts#L1177)*

**`memberof`** Email

___

### id

• `Optional` **id**: string

*Defined in [src/generated/api.ts:1183](https://github.com/mailslurp/mailslurp-client/blob/cdc62f8/src/generated/api.ts#L1183)*

ID of the email

**`memberof`** Email

___

### inboxId

• `Optional` **inboxId**: string

*Defined in [src/generated/api.ts:1189](https://github.com/mailslurp/mailslurp-client/blob/cdc62f8/src/generated/api.ts#L1189)*

ID of the inbox that received the email

**`memberof`** Email

___

### isHTML

• `Optional` **isHTML**: boolean

*Defined in [src/generated/api.ts:1195](https://github.com/mailslurp/mailslurp-client/blob/cdc62f8/src/generated/api.ts#L1195)*

Was HTML sent in the email body

**`memberof`** Email

___

### read

• `Optional` **read**: boolean

*Defined in [src/generated/api.ts:1201](https://github.com/mailslurp/mailslurp-client/blob/cdc62f8/src/generated/api.ts#L1201)*

Has the email been viewed ever

**`memberof`** Email

___

### replyTo

• `Optional` **replyTo**: string

*Defined in [src/generated/api.ts:1207](https://github.com/mailslurp/mailslurp-client/blob/cdc62f8/src/generated/api.ts#L1207)*

The replyTo field on the received email

**`memberof`** Email

___

### subject

• `Optional` **subject**: string

*Defined in [src/generated/api.ts:1213](https://github.com/mailslurp/mailslurp-client/blob/cdc62f8/src/generated/api.ts#L1213)*

The subject line of the email message

**`memberof`** Email

___

### to

• `Optional` **to**: Array\<string>

*Defined in [src/generated/api.ts:1219](https://github.com/mailslurp/mailslurp-client/blob/cdc62f8/src/generated/api.ts#L1219)*

List of `To` recipients email was addressed to

**`memberof`** Email

___

### updatedAt

• `Optional` **updatedAt**: Date

*Defined in [src/generated/api.ts:1225](https://github.com/mailslurp/mailslurp-client/blob/cdc62f8/src/generated/api.ts#L1225)*

When was the email last updated

**`memberof`** Email

___

### userId

• `Optional` **userId**: string

*Defined in [src/generated/api.ts:1231](https://github.com/mailslurp/mailslurp-client/blob/cdc62f8/src/generated/api.ts#L1231)*

ID of user that email belongs

**`memberof`** Email
