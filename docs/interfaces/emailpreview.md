**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / EmailPreview

# Interface: EmailPreview

Preview of an email message. For full message (including body and attachments) call the `getEmail` or other email endpoints with the provided email ID.

**`export`** 

**`interface`** EmailPreview

## Hierarchy

* **EmailPreview**

## Index

### Properties

* [attachments](emailpreview.md#attachments)
* [bcc](emailpreview.md#bcc)
* [cc](emailpreview.md#cc)
* [createdAt](emailpreview.md#createdat)
* [from](emailpreview.md#from)
* [id](emailpreview.md#id)
* [read](emailpreview.md#read)
* [subject](emailpreview.md#subject)
* [to](emailpreview.md#to)

## Properties

### attachments

• `Optional` **attachments**: Array\<string>

*Defined in [src/generated/api.ts:819](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L819)*

List of IDs of attachments found in the email. Use these IDs with the Inbox and Email Controllers to download attachments and attachment meta data such as filesize, name, extension.

**`memberof`** EmailPreview

___

### bcc

• `Optional` **bcc**: Array\<string>

*Defined in [src/generated/api.ts:825](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L825)*

List of `BCC` recipients email was addressed to

**`memberof`** EmailPreview

___

### cc

• `Optional` **cc**: Array\<string>

*Defined in [src/generated/api.ts:831](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L831)*

List of `CC` recipients email was addressed to

**`memberof`** EmailPreview

___

### createdAt

• `Optional` **createdAt**: Date

*Defined in [src/generated/api.ts:837](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L837)*

When was the email received by MailSlurp

**`memberof`** EmailPreview

___

### from

• `Optional` **from**: string

*Defined in [src/generated/api.ts:843](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L843)*

Who the email was sent from

**`memberof`** EmailPreview

___

### id

• `Optional` **id**: string

*Defined in [src/generated/api.ts:849](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L849)*

ID of the email

**`memberof`** EmailPreview

___

### read

• `Optional` **read**: boolean

*Defined in [src/generated/api.ts:855](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L855)*

Has the email been viewed ever

**`memberof`** EmailPreview

___

### subject

• `Optional` **subject**: string

*Defined in [src/generated/api.ts:861](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L861)*

The subject line of the email message

**`memberof`** EmailPreview

___

### to

• `Optional` **to**: Array\<string>

*Defined in [src/generated/api.ts:867](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L867)*

List of `To` recipients email was addressed to

**`memberof`** EmailPreview
