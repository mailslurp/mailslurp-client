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
* [bodyExcerpt](email.md#bodyexcerpt)
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

*Defined in [src/generated/api.ts:1905](https://github.com/mailslurp/mailslurp-client/blob/cce5bf2/src/generated/api.ts#L1905)*

Smart analysis of email content including spam ratings

**`memberof`** Email

___

### attachments

• `Optional` **attachments**: Array\<string>

*Defined in [src/generated/api.ts:1911](https://github.com/mailslurp/mailslurp-client/blob/cce5bf2/src/generated/api.ts#L1911)*

List of IDs of attachments found in the email. Use these IDs with the Inbox and Email Controllers to download attachments and attachment meta data such as filesize, name, extension.

**`memberof`** Email

___

### bcc

• `Optional` **bcc**: Array\<string>

*Defined in [src/generated/api.ts:1917](https://github.com/mailslurp/mailslurp-client/blob/cce5bf2/src/generated/api.ts#L1917)*

List of `BCC` recipients email was addressed to

**`memberof`** Email

___

### body

• `Optional` **body**: string

*Defined in [src/generated/api.ts:1923](https://github.com/mailslurp/mailslurp-client/blob/cce5bf2/src/generated/api.ts#L1923)*

The body of the email message

**`memberof`** Email

___

### bodyExcerpt

• `Optional` **bodyExcerpt**: string

*Defined in [src/generated/api.ts:1929](https://github.com/mailslurp/mailslurp-client/blob/cce5bf2/src/generated/api.ts#L1929)*

An excerpt of the body of the email message

**`memberof`** Email

___

### bodyMD5Hash

• `Optional` **bodyMD5Hash**: string

*Defined in [src/generated/api.ts:1935](https://github.com/mailslurp/mailslurp-client/blob/cce5bf2/src/generated/api.ts#L1935)*

A hash signature of the email message

**`memberof`** Email

___

### cc

• `Optional` **cc**: Array\<string>

*Defined in [src/generated/api.ts:1941](https://github.com/mailslurp/mailslurp-client/blob/cce5bf2/src/generated/api.ts#L1941)*

List of `CC` recipients email was addressed to

**`memberof`** Email

___

### charset

• `Optional` **charset**: string

*Defined in [src/generated/api.ts:1947](https://github.com/mailslurp/mailslurp-client/blob/cce5bf2/src/generated/api.ts#L1947)*

Detected character set of the email body such as UTF-8

**`memberof`** Email

___

### createdAt

• `Optional` **createdAt**: Date

*Defined in [src/generated/api.ts:1953](https://github.com/mailslurp/mailslurp-client/blob/cce5bf2/src/generated/api.ts#L1953)*

When was the email received by MailSlurp

**`memberof`** Email

___

### from

• `Optional` **from**: string

*Defined in [src/generated/api.ts:1959](https://github.com/mailslurp/mailslurp-client/blob/cce5bf2/src/generated/api.ts#L1959)*

Who the email was sent from

**`memberof`** Email

___

### headers

• `Optional` **headers**: { [key:string]: string;  }

*Defined in [src/generated/api.ts:1965](https://github.com/mailslurp/mailslurp-client/blob/cce5bf2/src/generated/api.ts#L1965)*

Collection of SMTP headers attached to email

**`memberof`** Email

___

### id

• `Optional` **id**: string

*Defined in [src/generated/api.ts:1971](https://github.com/mailslurp/mailslurp-client/blob/cce5bf2/src/generated/api.ts#L1971)*

ID of the email entity

**`memberof`** Email

___

### inboxId

• `Optional` **inboxId**: string

*Defined in [src/generated/api.ts:1977](https://github.com/mailslurp/mailslurp-client/blob/cce5bf2/src/generated/api.ts#L1977)*

ID of the inbox that received the email

**`memberof`** Email

___

### isHTML

• `Optional` **isHTML**: boolean

*Defined in [src/generated/api.ts:1983](https://github.com/mailslurp/mailslurp-client/blob/cce5bf2/src/generated/api.ts#L1983)*

Is the email body HTML

**`memberof`** Email

___

### read

• `Optional` **read**: boolean

*Defined in [src/generated/api.ts:1989](https://github.com/mailslurp/mailslurp-client/blob/cce5bf2/src/generated/api.ts#L1989)*

Read flag. Has the email ever been viewed in the dashboard or fetched via the API? If so the email is marked as read.

**`memberof`** Email

___

### replyTo

• `Optional` **replyTo**: string

*Defined in [src/generated/api.ts:1995](https://github.com/mailslurp/mailslurp-client/blob/cce5bf2/src/generated/api.ts#L1995)*

The `replyTo` field on the received email message

**`memberof`** Email

___

### subject

• `Optional` **subject**: string

*Defined in [src/generated/api.ts:2001](https://github.com/mailslurp/mailslurp-client/blob/cce5bf2/src/generated/api.ts#L2001)*

The subject line of the email message

**`memberof`** Email

___

### teamAccess

• `Optional` **teamAccess**: boolean

*Defined in [src/generated/api.ts:2007](https://github.com/mailslurp/mailslurp-client/blob/cce5bf2/src/generated/api.ts#L2007)*

Can the email be accessed by organization team members

**`memberof`** Email

___

### to

• `Optional` **to**: Array\<string>

*Defined in [src/generated/api.ts:2013](https://github.com/mailslurp/mailslurp-client/blob/cce5bf2/src/generated/api.ts#L2013)*

List of `To` recipients that email was addressed to

**`memberof`** Email

___

### updatedAt

• `Optional` **updatedAt**: Date

*Defined in [src/generated/api.ts:2019](https://github.com/mailslurp/mailslurp-client/blob/cce5bf2/src/generated/api.ts#L2019)*

When was the email last updated

**`memberof`** Email

___

### userId

• `Optional` **userId**: string

*Defined in [src/generated/api.ts:2025](https://github.com/mailslurp/mailslurp-client/blob/cce5bf2/src/generated/api.ts#L2025)*

ID of user that email belongs to

**`memberof`** Email
