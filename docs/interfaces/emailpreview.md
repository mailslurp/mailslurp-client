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

*Defined in [src/generated/api.ts:1780](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L1780)*

List of IDs of attachments found in the email. Use these IDs with the Inbox and Email Controllers to download attachments and attachment meta data such as filesize, name, extension.

**`memberof`** EmailPreview

___

### bcc

• `Optional` **bcc**: Array\<string>

*Defined in [src/generated/api.ts:1786](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L1786)*

List of `BCC` recipients email was addressed to

**`memberof`** EmailPreview

___

### cc

• `Optional` **cc**: Array\<string>

*Defined in [src/generated/api.ts:1792](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L1792)*

List of `CC` recipients email was addressed to

**`memberof`** EmailPreview

___

### createdAt

• `Optional` **createdAt**: Date

*Defined in [src/generated/api.ts:1798](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L1798)*

When was the email received by MailSlurp

**`memberof`** EmailPreview

___

### from

• `Optional` **from**: string

*Defined in [src/generated/api.ts:1804](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L1804)*

Who the email was sent from

**`memberof`** EmailPreview

___

### id

• `Optional` **id**: string

*Defined in [src/generated/api.ts:1810](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L1810)*

ID of the email entity

**`memberof`** EmailPreview

___

### read

• `Optional` **read**: boolean

*Defined in [src/generated/api.ts:1816](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L1816)*

Read flag. Has the email ever been viewed in the dashboard or fetched via the API? If so the email is marked as read.

**`memberof`** EmailPreview

___

### subject

• `Optional` **subject**: string

*Defined in [src/generated/api.ts:1822](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L1822)*

The subject line of the email message

**`memberof`** EmailPreview

___

### to

• `Optional` **to**: Array\<string>

*Defined in [src/generated/api.ts:1828](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L1828)*

List of `To` recipients that email was addressed to

**`memberof`** EmailPreview
