[MailSlurp JS](../README.md) / EmailDraftDto

# Interface: EmailDraftDto

Saved email draft that can be edited and sent later.

**`Export`**

**`Interface`**

EmailDraftDto

## Table of contents

### Properties

- [attachments](EmailDraftDto.md#attachments)
- [bcc](EmailDraftDto.md#bcc)
- [bodyExcerpt](EmailDraftDto.md#bodyexcerpt)
- [cc](EmailDraftDto.md#cc)
- [createdAt](EmailDraftDto.md#createdat)
- [from](EmailDraftDto.md#from)
- [id](EmailDraftDto.md#id)
- [inboxId](EmailDraftDto.md#inboxid)
- [recipients](EmailDraftDto.md#recipients)
- [sendOptions](EmailDraftDto.md#sendoptions)
- [sender](EmailDraftDto.md#sender)
- [subject](EmailDraftDto.md#subject)
- [textExcerpt](EmailDraftDto.md#textexcerpt)
- [to](EmailDraftDto.md#to)
- [updatedAt](EmailDraftDto.md#updatedat)
- [userId](EmailDraftDto.md#userid)

## Properties

### attachments

• `Optional` **attachments**: `string`[]

Attachment IDs selected for the draft

**`Memberof`**

EmailDraftDto

___

### bcc

• `Optional` **bcc**: `string`[]

Draft BCC recipients

**`Memberof`**

EmailDraftDto

___

### bodyExcerpt

• `Optional` **bodyExcerpt**: `string`

Draft body preview

**`Memberof`**

EmailDraftDto

___

### cc

• `Optional` **cc**: `string`[]

Draft CC recipients

**`Memberof`**

EmailDraftDto

___

### createdAt

• **createdAt**: `Date`

Draft creation time

**`Memberof`**

EmailDraftDto

___

### from

• `Optional` **from**: `string`

Draft sender

**`Memberof`**

EmailDraftDto

___

### id

• **id**: `string`

ID of the draft

**`Memberof`**

EmailDraftDto

___

### inboxId

• **inboxId**: `string`

Inbox ID the draft will send from

**`Memberof`**

EmailDraftDto

___

### recipients

• `Optional` **recipients**: [`EmailRecipients`](EmailRecipients.md)

**`Memberof`**

EmailDraftDto

___

### sendOptions

• **sendOptions**: [`SendEmailOptions`](SendEmailOptions.md)

**`Memberof`**

EmailDraftDto

___

### sender

• `Optional` **sender**: [`Sender`](Sender.md)

**`Memberof`**

EmailDraftDto

___

### subject

• `Optional` **subject**: `string`

Draft subject

**`Memberof`**

EmailDraftDto

___

### textExcerpt

• `Optional` **textExcerpt**: `string`

Draft text preview

**`Memberof`**

EmailDraftDto

___

### to

• `Optional` **to**: `string`[]

Draft recipients

**`Memberof`**

EmailDraftDto

___

### updatedAt

• **updatedAt**: `Date`

Draft last update time

**`Memberof`**

EmailDraftDto

___

### userId

• **userId**: `string`

User ID

**`Memberof`**

EmailDraftDto
