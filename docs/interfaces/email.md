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
* [subject](email.md#subject)
* [to](email.md#to)
* [updatedAt](email.md#updatedat)
* [userId](email.md#userid)

## Properties

### analysis

• `Optional` **analysis**: [EmailAnalysis](emailanalysis.md)

*Defined in [src/generated/api.ts:665](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L665)*

Smart analysis of email content including spam ratings\"

**`memberof`** Email

___

### attachments

• `Optional` **attachments**: Array\<string>

*Defined in [src/generated/api.ts:671](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L671)*

List of IDs of attachments found in the email. Use these IDs with the Inbox and Email Controllers to download attachments and attachment meta data such as filesize, name, extension.

**`memberof`** Email

___

### bcc

• `Optional` **bcc**: Array\<string>

*Defined in [src/generated/api.ts:677](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L677)*

List of `BCC` recipients email was addressed to

**`memberof`** Email

___

### body

• `Optional` **body**: string

*Defined in [src/generated/api.ts:683](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L683)*

The body of the email message

**`memberof`** Email

___

### bodyMD5Hash

• `Optional` **bodyMD5Hash**: string

*Defined in [src/generated/api.ts:689](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L689)*

A hash signature of the email message

**`memberof`** Email

___

### cc

• `Optional` **cc**: Array\<string>

*Defined in [src/generated/api.ts:695](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L695)*

List of `CC` recipients email was addressed to

**`memberof`** Email

___

### charset

• `Optional` **charset**: string

*Defined in [src/generated/api.ts:701](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L701)*

Detected character set of the email body such as UTF-8

**`memberof`** Email

___

### createdAt

• `Optional` **createdAt**: Date

*Defined in [src/generated/api.ts:707](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L707)*

When was the email received by MailSlurp

**`memberof`** Email

___

### from

• `Optional` **from**: string

*Defined in [src/generated/api.ts:713](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L713)*

Who the email was sent from

**`memberof`** Email

___

### headers

• `Optional` **headers**: { [key:string]: string;  }

*Defined in [src/generated/api.ts:719](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L719)*

**`memberof`** Email

___

### id

• `Optional` **id**: string

*Defined in [src/generated/api.ts:725](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L725)*

ID of the email

**`memberof`** Email

___

### inboxId

• `Optional` **inboxId**: string

*Defined in [src/generated/api.ts:731](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L731)*

ID of the inbox that received the email

**`memberof`** Email

___

### isHTML

• `Optional` **isHTML**: boolean

*Defined in [src/generated/api.ts:737](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L737)*

Was HTML sent in the email body

**`memberof`** Email

___

### read

• `Optional` **read**: boolean

*Defined in [src/generated/api.ts:743](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L743)*

Has the email been viewed ever

**`memberof`** Email

___

### subject

• `Optional` **subject**: string

*Defined in [src/generated/api.ts:749](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L749)*

The subject line of the email message

**`memberof`** Email

___

### to

• `Optional` **to**: Array\<string>

*Defined in [src/generated/api.ts:755](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L755)*

List of `To` recipients email was addressed to

**`memberof`** Email

___

### updatedAt

• `Optional` **updatedAt**: Date

*Defined in [src/generated/api.ts:761](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L761)*

When was the email last updated

**`memberof`** Email

___

### userId

• `Optional` **userId**: string

*Defined in [src/generated/api.ts:767](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L767)*

ID of user that email belongs

**`memberof`** Email
