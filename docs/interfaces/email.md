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

*Defined in [src/generated/api.ts:679](https://github.com/mailslurp/mailslurp-client/blob/c6aef6d/src/generated/api.ts#L679)*

Smart analysis of email content including spam ratings\"

**`memberof`** Email

___

### attachments

• `Optional` **attachments**: Array\<string>

*Defined in [src/generated/api.ts:685](https://github.com/mailslurp/mailslurp-client/blob/c6aef6d/src/generated/api.ts#L685)*

List of IDs of attachments found in the email. Use these IDs with the Inbox and Email Controllers to download attachments and attachment meta data such as filesize, name, extension.

**`memberof`** Email

___

### bcc

• `Optional` **bcc**: Array\<string>

*Defined in [src/generated/api.ts:691](https://github.com/mailslurp/mailslurp-client/blob/c6aef6d/src/generated/api.ts#L691)*

List of `BCC` recipients email was addressed to

**`memberof`** Email

___

### body

• `Optional` **body**: string

*Defined in [src/generated/api.ts:697](https://github.com/mailslurp/mailslurp-client/blob/c6aef6d/src/generated/api.ts#L697)*

The body of the email message

**`memberof`** Email

___

### bodyMD5Hash

• `Optional` **bodyMD5Hash**: string

*Defined in [src/generated/api.ts:703](https://github.com/mailslurp/mailslurp-client/blob/c6aef6d/src/generated/api.ts#L703)*

A hash signature of the email message

**`memberof`** Email

___

### cc

• `Optional` **cc**: Array\<string>

*Defined in [src/generated/api.ts:709](https://github.com/mailslurp/mailslurp-client/blob/c6aef6d/src/generated/api.ts#L709)*

List of `CC` recipients email was addressed to

**`memberof`** Email

___

### charset

• `Optional` **charset**: string

*Defined in [src/generated/api.ts:715](https://github.com/mailslurp/mailslurp-client/blob/c6aef6d/src/generated/api.ts#L715)*

Detected character set of the email body such as UTF-8

**`memberof`** Email

___

### createdAt

• `Optional` **createdAt**: Date

*Defined in [src/generated/api.ts:721](https://github.com/mailslurp/mailslurp-client/blob/c6aef6d/src/generated/api.ts#L721)*

When was the email received by MailSlurp

**`memberof`** Email

___

### from

• `Optional` **from**: string

*Defined in [src/generated/api.ts:727](https://github.com/mailslurp/mailslurp-client/blob/c6aef6d/src/generated/api.ts#L727)*

Who the email was sent from

**`memberof`** Email

___

### headers

• `Optional` **headers**: { [key:string]: string;  }

*Defined in [src/generated/api.ts:733](https://github.com/mailslurp/mailslurp-client/blob/c6aef6d/src/generated/api.ts#L733)*

**`memberof`** Email

___

### id

• `Optional` **id**: string

*Defined in [src/generated/api.ts:739](https://github.com/mailslurp/mailslurp-client/blob/c6aef6d/src/generated/api.ts#L739)*

ID of the email

**`memberof`** Email

___

### inboxId

• `Optional` **inboxId**: string

*Defined in [src/generated/api.ts:745](https://github.com/mailslurp/mailslurp-client/blob/c6aef6d/src/generated/api.ts#L745)*

ID of the inbox that received the email

**`memberof`** Email

___

### isHTML

• `Optional` **isHTML**: boolean

*Defined in [src/generated/api.ts:751](https://github.com/mailslurp/mailslurp-client/blob/c6aef6d/src/generated/api.ts#L751)*

Was HTML sent in the email body

**`memberof`** Email

___

### read

• `Optional` **read**: boolean

*Defined in [src/generated/api.ts:757](https://github.com/mailslurp/mailslurp-client/blob/c6aef6d/src/generated/api.ts#L757)*

Has the email been viewed ever

**`memberof`** Email

___

### subject

• `Optional` **subject**: string

*Defined in [src/generated/api.ts:763](https://github.com/mailslurp/mailslurp-client/blob/c6aef6d/src/generated/api.ts#L763)*

The subject line of the email message

**`memberof`** Email

___

### to

• `Optional` **to**: Array\<string>

*Defined in [src/generated/api.ts:769](https://github.com/mailslurp/mailslurp-client/blob/c6aef6d/src/generated/api.ts#L769)*

List of `To` recipients email was addressed to

**`memberof`** Email

___

### updatedAt

• `Optional` **updatedAt**: Date

*Defined in [src/generated/api.ts:775](https://github.com/mailslurp/mailslurp-client/blob/c6aef6d/src/generated/api.ts#L775)*

When was the email last updated

**`memberof`** Email

___

### userId

• `Optional` **userId**: string

*Defined in [src/generated/api.ts:781](https://github.com/mailslurp/mailslurp-client/blob/c6aef6d/src/generated/api.ts#L781)*

ID of user that email belongs

**`memberof`** Email
