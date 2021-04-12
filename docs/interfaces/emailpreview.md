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

*Defined in [src/generated/api.ts:1489](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L1489)*

List of IDs of attachments found in the email. Use these IDs with the Inbox and Email Controllers to download attachments and attachment meta data such as filesize, name, extension.

**`memberof`** EmailPreview

___

### bcc

• `Optional` **bcc**: Array\<string>

*Defined in [src/generated/api.ts:1495](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L1495)*

List of `BCC` recipients email was addressed to

**`memberof`** EmailPreview

___

### cc

• `Optional` **cc**: Array\<string>

*Defined in [src/generated/api.ts:1501](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L1501)*

List of `CC` recipients email was addressed to

**`memberof`** EmailPreview

___

### createdAt

• `Optional` **createdAt**: Date

*Defined in [src/generated/api.ts:1507](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L1507)*

When was the email received by MailSlurp

**`memberof`** EmailPreview

___

### from

• `Optional` **from**: string

*Defined in [src/generated/api.ts:1513](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L1513)*

Who the email was sent from

**`memberof`** EmailPreview

___

### id

• `Optional` **id**: string

*Defined in [src/generated/api.ts:1519](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L1519)*

ID of the email

**`memberof`** EmailPreview

___

### read

• `Optional` **read**: boolean

*Defined in [src/generated/api.ts:1525](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L1525)*

Has the email been viewed ever. This means viewed in the dashboard or requested via the full email entity endpoints

**`memberof`** EmailPreview

___

### subject

• `Optional` **subject**: string

*Defined in [src/generated/api.ts:1531](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L1531)*

The subject line of the email message

**`memberof`** EmailPreview

___

### to

• `Optional` **to**: Array\<string>

*Defined in [src/generated/api.ts:1537](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L1537)*

List of `To` recipients email was addressed to

**`memberof`** EmailPreview
