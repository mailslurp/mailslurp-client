[MailSlurp JS](../README.md) / EmailPreview

# Interface: EmailPreview

Preview of an email message. For full message (including body and attachments) call the `getEmail` or other email endpoints with the provided email ID.

**`export`**

**`interface`** EmailPreview

## Table of contents

### Properties

- [attachments](EmailPreview.md#attachments)
- [bcc](EmailPreview.md#bcc)
- [cc](EmailPreview.md#cc)
- [createdAt](EmailPreview.md#createdat)
- [from](EmailPreview.md#from)
- [id](EmailPreview.md#id)
- [read](EmailPreview.md#read)
- [subject](EmailPreview.md#subject)
- [to](EmailPreview.md#to)

## Properties

### attachments

• `Optional` **attachments**: `string`[]

List of IDs of attachments found in the email. Use these IDs with the Inbox and Email Controllers to download attachments and attachment meta data such as filesize, name, extension.

**`memberof`** EmailPreview

#### Defined in

[src/generated/api.ts:2119](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L2119)

___

### bcc

• `Optional` **bcc**: `string`[]

List of `BCC` recipients email was addressed to

**`memberof`** EmailPreview

#### Defined in

[src/generated/api.ts:2125](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L2125)

___

### cc

• `Optional` **cc**: `string`[]

List of `CC` recipients email was addressed to

**`memberof`** EmailPreview

#### Defined in

[src/generated/api.ts:2131](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L2131)

___

### createdAt

• `Optional` **createdAt**: `Date`

When was the email received by MailSlurp

**`memberof`** EmailPreview

#### Defined in

[src/generated/api.ts:2137](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L2137)

___

### from

• `Optional` **from**: `string`

Who the email was sent from

**`memberof`** EmailPreview

#### Defined in

[src/generated/api.ts:2143](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L2143)

___

### id

• `Optional` **id**: `string`

ID of the email entity

**`memberof`** EmailPreview

#### Defined in

[src/generated/api.ts:2149](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L2149)

___

### read

• `Optional` **read**: `boolean`

Read flag. Has the email ever been viewed in the dashboard or fetched via the API? If so the email is marked as read.

**`memberof`** EmailPreview

#### Defined in

[src/generated/api.ts:2155](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L2155)

___

### subject

• `Optional` **subject**: `string`

The subject line of the email message

**`memberof`** EmailPreview

#### Defined in

[src/generated/api.ts:2161](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L2161)

___

### to

• `Optional` **to**: `string`[]

List of `To` recipients that email was addressed to

**`memberof`** EmailPreview

#### Defined in

[src/generated/api.ts:2167](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L2167)
