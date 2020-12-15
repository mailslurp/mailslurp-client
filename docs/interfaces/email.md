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

*Defined in [src/generated/api.ts:1115](https://github.com/mailslurp/mailslurp-client/blob/36fa2ad/src/generated/api.ts#L1115)*

Smart analysis of email content including spam ratings\"

**`memberof`** Email

___

### attachments

• `Optional` **attachments**: Array\<string>

*Defined in [src/generated/api.ts:1121](https://github.com/mailslurp/mailslurp-client/blob/36fa2ad/src/generated/api.ts#L1121)*

List of IDs of attachments found in the email. Use these IDs with the Inbox and Email Controllers to download attachments and attachment meta data such as filesize, name, extension.

**`memberof`** Email

___

### bcc

• `Optional` **bcc**: Array\<string>

*Defined in [src/generated/api.ts:1127](https://github.com/mailslurp/mailslurp-client/blob/36fa2ad/src/generated/api.ts#L1127)*

List of `BCC` recipients email was addressed to

**`memberof`** Email

___

### body

• `Optional` **body**: string

*Defined in [src/generated/api.ts:1133](https://github.com/mailslurp/mailslurp-client/blob/36fa2ad/src/generated/api.ts#L1133)*

The body of the email message

**`memberof`** Email

___

### bodyMD5Hash

• `Optional` **bodyMD5Hash**: string

*Defined in [src/generated/api.ts:1139](https://github.com/mailslurp/mailslurp-client/blob/36fa2ad/src/generated/api.ts#L1139)*

A hash signature of the email message

**`memberof`** Email

___

### cc

• `Optional` **cc**: Array\<string>

*Defined in [src/generated/api.ts:1145](https://github.com/mailslurp/mailslurp-client/blob/36fa2ad/src/generated/api.ts#L1145)*

List of `CC` recipients email was addressed to

**`memberof`** Email

___

### charset

• `Optional` **charset**: string

*Defined in [src/generated/api.ts:1151](https://github.com/mailslurp/mailslurp-client/blob/36fa2ad/src/generated/api.ts#L1151)*

Detected character set of the email body such as UTF-8

**`memberof`** Email

___

### createdAt

• `Optional` **createdAt**: Date

*Defined in [src/generated/api.ts:1157](https://github.com/mailslurp/mailslurp-client/blob/36fa2ad/src/generated/api.ts#L1157)*

When was the email received by MailSlurp

**`memberof`** Email

___

### from

• `Optional` **from**: string

*Defined in [src/generated/api.ts:1163](https://github.com/mailslurp/mailslurp-client/blob/36fa2ad/src/generated/api.ts#L1163)*

Who the email was sent from

**`memberof`** Email

___

### headers

• `Optional` **headers**: { [key:string]: string;  }

*Defined in [src/generated/api.ts:1169](https://github.com/mailslurp/mailslurp-client/blob/36fa2ad/src/generated/api.ts#L1169)*

**`memberof`** Email

___

### id

• `Optional` **id**: string

*Defined in [src/generated/api.ts:1175](https://github.com/mailslurp/mailslurp-client/blob/36fa2ad/src/generated/api.ts#L1175)*

ID of the email

**`memberof`** Email

___

### inboxId

• `Optional` **inboxId**: string

*Defined in [src/generated/api.ts:1181](https://github.com/mailslurp/mailslurp-client/blob/36fa2ad/src/generated/api.ts#L1181)*

ID of the inbox that received the email

**`memberof`** Email

___

### isHTML

• `Optional` **isHTML**: boolean

*Defined in [src/generated/api.ts:1187](https://github.com/mailslurp/mailslurp-client/blob/36fa2ad/src/generated/api.ts#L1187)*

Was HTML sent in the email body

**`memberof`** Email

___

### read

• `Optional` **read**: boolean

*Defined in [src/generated/api.ts:1193](https://github.com/mailslurp/mailslurp-client/blob/36fa2ad/src/generated/api.ts#L1193)*

Has the email been viewed ever

**`memberof`** Email

___

### replyTo

• `Optional` **replyTo**: string

*Defined in [src/generated/api.ts:1199](https://github.com/mailslurp/mailslurp-client/blob/36fa2ad/src/generated/api.ts#L1199)*

The replyTo field on the received email

**`memberof`** Email

___

### subject

• `Optional` **subject**: string

*Defined in [src/generated/api.ts:1205](https://github.com/mailslurp/mailslurp-client/blob/36fa2ad/src/generated/api.ts#L1205)*

The subject line of the email message

**`memberof`** Email

___

### to

• `Optional` **to**: Array\<string>

*Defined in [src/generated/api.ts:1211](https://github.com/mailslurp/mailslurp-client/blob/36fa2ad/src/generated/api.ts#L1211)*

List of `To` recipients email was addressed to

**`memberof`** Email

___

### updatedAt

• `Optional` **updatedAt**: Date

*Defined in [src/generated/api.ts:1217](https://github.com/mailslurp/mailslurp-client/blob/36fa2ad/src/generated/api.ts#L1217)*

When was the email last updated

**`memberof`** Email

___

### userId

• `Optional` **userId**: string

*Defined in [src/generated/api.ts:1223](https://github.com/mailslurp/mailslurp-client/blob/36fa2ad/src/generated/api.ts#L1223)*

ID of user that email belongs

**`memberof`** Email
