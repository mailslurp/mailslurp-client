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

*Defined in [src/generated/api.ts:1273](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L1273)*

Smart analysis of email content including spam ratings\"

**`memberof`** Email

___

### attachments

• `Optional` **attachments**: Array\<string>

*Defined in [src/generated/api.ts:1279](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L1279)*

List of IDs of attachments found in the email. Use these IDs with the Inbox and Email Controllers to download attachments and attachment meta data such as filesize, name, extension.

**`memberof`** Email

___

### bcc

• `Optional` **bcc**: Array\<string>

*Defined in [src/generated/api.ts:1285](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L1285)*

List of `BCC` recipients email was addressed to

**`memberof`** Email

___

### body

• `Optional` **body**: string

*Defined in [src/generated/api.ts:1291](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L1291)*

The body of the email message

**`memberof`** Email

___

### bodyMD5Hash

• `Optional` **bodyMD5Hash**: string

*Defined in [src/generated/api.ts:1297](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L1297)*

A hash signature of the email message

**`memberof`** Email

___

### cc

• `Optional` **cc**: Array\<string>

*Defined in [src/generated/api.ts:1303](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L1303)*

List of `CC` recipients email was addressed to

**`memberof`** Email

___

### charset

• `Optional` **charset**: string

*Defined in [src/generated/api.ts:1309](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L1309)*

Detected character set of the email body such as UTF-8

**`memberof`** Email

___

### createdAt

• `Optional` **createdAt**: Date

*Defined in [src/generated/api.ts:1315](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L1315)*

When was the email received by MailSlurp

**`memberof`** Email

___

### from

• `Optional` **from**: string

*Defined in [src/generated/api.ts:1321](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L1321)*

Who the email was sent from

**`memberof`** Email

___

### headers

• `Optional` **headers**: { [key:string]: string;  }

*Defined in [src/generated/api.ts:1327](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L1327)*

**`memberof`** Email

___

### id

• `Optional` **id**: string

*Defined in [src/generated/api.ts:1333](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L1333)*

ID of the email

**`memberof`** Email

___

### inboxId

• `Optional` **inboxId**: string

*Defined in [src/generated/api.ts:1339](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L1339)*

ID of the inbox that received the email

**`memberof`** Email

___

### isHTML

• `Optional` **isHTML**: boolean

*Defined in [src/generated/api.ts:1345](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L1345)*

Was HTML sent in the email body

**`memberof`** Email

___

### read

• `Optional` **read**: boolean

*Defined in [src/generated/api.ts:1351](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L1351)*

Has the email been viewed ever

**`memberof`** Email

___

### replyTo

• `Optional` **replyTo**: string

*Defined in [src/generated/api.ts:1357](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L1357)*

The replyTo field on the received email

**`memberof`** Email

___

### subject

• `Optional` **subject**: string

*Defined in [src/generated/api.ts:1363](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L1363)*

The subject line of the email message

**`memberof`** Email

___

### to

• `Optional` **to**: Array\<string>

*Defined in [src/generated/api.ts:1369](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L1369)*

List of `To` recipients email was addressed to

**`memberof`** Email

___

### updatedAt

• `Optional` **updatedAt**: Date

*Defined in [src/generated/api.ts:1375](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L1375)*

When was the email last updated

**`memberof`** Email

___

### userId

• `Optional` **userId**: string

*Defined in [src/generated/api.ts:1381](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L1381)*

ID of user that email belongs

**`memberof`** Email
