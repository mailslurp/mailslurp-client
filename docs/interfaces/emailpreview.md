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

*Defined in [src/generated/api.ts:1801](https://github.com/mailslurp/mailslurp-client/blob/e4d4355/src/generated/api.ts#L1801)*

List of IDs of attachments found in the email. Use these IDs with the Inbox and Email Controllers to download attachments and attachment meta data such as filesize, name, extension.

**`memberof`** EmailPreview

___

### bcc

• `Optional` **bcc**: Array\<string>

*Defined in [src/generated/api.ts:1807](https://github.com/mailslurp/mailslurp-client/blob/e4d4355/src/generated/api.ts#L1807)*

List of `BCC` recipients email was addressed to

**`memberof`** EmailPreview

___

### cc

• `Optional` **cc**: Array\<string>

*Defined in [src/generated/api.ts:1813](https://github.com/mailslurp/mailslurp-client/blob/e4d4355/src/generated/api.ts#L1813)*

List of `CC` recipients email was addressed to

**`memberof`** EmailPreview

___

### createdAt

• `Optional` **createdAt**: Date

*Defined in [src/generated/api.ts:1819](https://github.com/mailslurp/mailslurp-client/blob/e4d4355/src/generated/api.ts#L1819)*

When was the email received by MailSlurp

**`memberof`** EmailPreview

___

### from

• `Optional` **from**: string

*Defined in [src/generated/api.ts:1825](https://github.com/mailslurp/mailslurp-client/blob/e4d4355/src/generated/api.ts#L1825)*

Who the email was sent from

**`memberof`** EmailPreview

___

### id

• `Optional` **id**: string

*Defined in [src/generated/api.ts:1831](https://github.com/mailslurp/mailslurp-client/blob/e4d4355/src/generated/api.ts#L1831)*

ID of the email entity

**`memberof`** EmailPreview

___

### read

• `Optional` **read**: boolean

*Defined in [src/generated/api.ts:1837](https://github.com/mailslurp/mailslurp-client/blob/e4d4355/src/generated/api.ts#L1837)*

Read flag. Has the email ever been viewed in the dashboard or fetched via the API? If so the email is marked as read.

**`memberof`** EmailPreview

___

### subject

• `Optional` **subject**: string

*Defined in [src/generated/api.ts:1843](https://github.com/mailslurp/mailslurp-client/blob/e4d4355/src/generated/api.ts#L1843)*

The subject line of the email message

**`memberof`** EmailPreview

___

### to

• `Optional` **to**: Array\<string>

*Defined in [src/generated/api.ts:1849](https://github.com/mailslurp/mailslurp-client/blob/e4d4355/src/generated/api.ts#L1849)*

List of `To` recipients that email was addressed to

**`memberof`** EmailPreview
