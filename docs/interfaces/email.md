**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / Email

# Interface: Email

Email entity (also known as EmailDto). When an SMTP email message is received by MailSlurp it is parsed. The body and attachments are written to disk and the fields such as to, from, subject etc are stored in a database. The `body` contains the email content. If you want the original SMTP message see the `getRawEmail` endpoints. The attachments can be fetched using the AttachmentController

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
* [teamAccess](email.md#teamaccess)
* [to](email.md#to)
* [updatedAt](email.md#updatedat)
* [userId](email.md#userid)

## Properties

### analysis

• `Optional` **analysis**: [EmailAnalysis](emailanalysis.md)

*Defined in [src/generated/api.ts:1494](https://github.com/mailslurp/mailslurp-client/blob/a36d929/src/generated/api.ts#L1494)*

Smart analysis of email content including spam ratings

**`memberof`** Email

___

### attachments

• `Optional` **attachments**: Array\<string>

*Defined in [src/generated/api.ts:1500](https://github.com/mailslurp/mailslurp-client/blob/a36d929/src/generated/api.ts#L1500)*

List of IDs of attachments found in the email. Use these IDs with the Inbox and Email Controllers to download attachments and attachment meta data such as filesize, name, extension.

**`memberof`** Email

___

### bcc

• `Optional` **bcc**: Array\<string>

*Defined in [src/generated/api.ts:1506](https://github.com/mailslurp/mailslurp-client/blob/a36d929/src/generated/api.ts#L1506)*

List of `BCC` recipients email was addressed to

**`memberof`** Email

___

### body

• `Optional` **body**: string

*Defined in [src/generated/api.ts:1512](https://github.com/mailslurp/mailslurp-client/blob/a36d929/src/generated/api.ts#L1512)*

The body of the email message

**`memberof`** Email

___

### bodyMD5Hash

• `Optional` **bodyMD5Hash**: string

*Defined in [src/generated/api.ts:1518](https://github.com/mailslurp/mailslurp-client/blob/a36d929/src/generated/api.ts#L1518)*

A hash signature of the email message

**`memberof`** Email

___

### cc

• `Optional` **cc**: Array\<string>

*Defined in [src/generated/api.ts:1524](https://github.com/mailslurp/mailslurp-client/blob/a36d929/src/generated/api.ts#L1524)*

List of `CC` recipients email was addressed to

**`memberof`** Email

___

### charset

• `Optional` **charset**: string

*Defined in [src/generated/api.ts:1530](https://github.com/mailslurp/mailslurp-client/blob/a36d929/src/generated/api.ts#L1530)*

Detected character set of the email body such as UTF-8

**`memberof`** Email

___

### createdAt

• `Optional` **createdAt**: Date

*Defined in [src/generated/api.ts:1536](https://github.com/mailslurp/mailslurp-client/blob/a36d929/src/generated/api.ts#L1536)*

When was the email received by MailSlurp

**`memberof`** Email

___

### from

• `Optional` **from**: string

*Defined in [src/generated/api.ts:1542](https://github.com/mailslurp/mailslurp-client/blob/a36d929/src/generated/api.ts#L1542)*

Who the email was sent from

**`memberof`** Email

___

### headers

• `Optional` **headers**: { [key:string]: string;  }

*Defined in [src/generated/api.ts:1548](https://github.com/mailslurp/mailslurp-client/blob/a36d929/src/generated/api.ts#L1548)*

Collection of SMTP headers attached to email

**`memberof`** Email

___

### id

• `Optional` **id**: string

*Defined in [src/generated/api.ts:1554](https://github.com/mailslurp/mailslurp-client/blob/a36d929/src/generated/api.ts#L1554)*

ID of the email entity

**`memberof`** Email

___

### inboxId

• `Optional` **inboxId**: string

*Defined in [src/generated/api.ts:1560](https://github.com/mailslurp/mailslurp-client/blob/a36d929/src/generated/api.ts#L1560)*

ID of the inbox that received the email

**`memberof`** Email

___

### isHTML

• `Optional` **isHTML**: boolean

*Defined in [src/generated/api.ts:1566](https://github.com/mailslurp/mailslurp-client/blob/a36d929/src/generated/api.ts#L1566)*

Is the email body HTML

**`memberof`** Email

___

### read

• `Optional` **read**: boolean

*Defined in [src/generated/api.ts:1572](https://github.com/mailslurp/mailslurp-client/blob/a36d929/src/generated/api.ts#L1572)*

Read flag. Has the email ever been viewed in the dashboard or fetched via the API? If so the email is marked as read.

**`memberof`** Email

___

### replyTo

• `Optional` **replyTo**: string

*Defined in [src/generated/api.ts:1578](https://github.com/mailslurp/mailslurp-client/blob/a36d929/src/generated/api.ts#L1578)*

The `replyTo` field on the received email message

**`memberof`** Email

___

### subject

• `Optional` **subject**: string

*Defined in [src/generated/api.ts:1584](https://github.com/mailslurp/mailslurp-client/blob/a36d929/src/generated/api.ts#L1584)*

The subject line of the email message

**`memberof`** Email

___

### teamAccess

• `Optional` **teamAccess**: boolean

*Defined in [src/generated/api.ts:1590](https://github.com/mailslurp/mailslurp-client/blob/a36d929/src/generated/api.ts#L1590)*

Can the email be accessed by organization team members

**`memberof`** Email

___

### to

• `Optional` **to**: Array\<string>

*Defined in [src/generated/api.ts:1596](https://github.com/mailslurp/mailslurp-client/blob/a36d929/src/generated/api.ts#L1596)*

List of `To` recipients that email was addressed to

**`memberof`** Email

___

### updatedAt

• `Optional` **updatedAt**: Date

*Defined in [src/generated/api.ts:1602](https://github.com/mailslurp/mailslurp-client/blob/a36d929/src/generated/api.ts#L1602)*

When was the email last updated

**`memberof`** Email

___

### userId

• `Optional` **userId**: string

*Defined in [src/generated/api.ts:1608](https://github.com/mailslurp/mailslurp-client/blob/a36d929/src/generated/api.ts#L1608)*

ID of user that email belongs to

**`memberof`** Email
