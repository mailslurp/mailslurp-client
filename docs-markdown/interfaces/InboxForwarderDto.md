[MailSlurp JS](../README.md) / InboxForwarderDto

# Interface: InboxForwarderDto

Inbox forwarder. Describes how an inbox will forward matching emails to designated recipients.

**`Export`**

**`Interface`**

InboxForwarderDto

## Table of contents

### Properties

- [attachmentTextExtractionMethod](InboxForwarderDto.md#attachmenttextextractionmethod)
- [createdAt](InboxForwarderDto.md#createdat)
- [field](InboxForwarderDto.md#field)
- [forwardToRecipients](InboxForwarderDto.md#forwardtorecipients)
- [id](InboxForwarderDto.md#id)
- [inboxId](InboxForwarderDto.md#inboxid)
- [match](InboxForwarderDto.md#match)
- [matchOptions](InboxForwarderDto.md#matchoptions)
- [name](InboxForwarderDto.md#name)
- [should](InboxForwarderDto.md#should)

## Properties

### attachmentTextExtractionMethod

• `Optional` **attachmentTextExtractionMethod**: [`InboxForwarderDtoAttachmentTextExtractionMethodEnum`](../enums/InboxForwarderDtoAttachmentTextExtractionMethodEnum.md)

Method for extracting text from attachments.

**`Memberof`**

InboxForwarderDto

___

### createdAt

• **createdAt**: `Date`

**`Memberof`**

InboxForwarderDto

___

### field

• `Optional` **field**: [`InboxForwarderDtoFieldEnum`](../enums/InboxForwarderDtoFieldEnum.md)

Which field to match against

**`Memberof`**

InboxForwarderDto

___

### forwardToRecipients

• **forwardToRecipients**: `string`[]

Who to send forwarded email to

**`Memberof`**

InboxForwarderDto

___

### id

• **id**: `string`

**`Memberof`**

InboxForwarderDto

___

### inboxId

• `Optional` **inboxId**: `string`

**`Memberof`**

InboxForwarderDto

___

### match

• `Optional` **match**: `string`

Pattern to apply to field

**`Memberof`**

InboxForwarderDto

___

### matchOptions

• `Optional` **matchOptions**: [`InboxAutomationMatchOptions`](InboxAutomationMatchOptions.md)

**`Memberof`**

InboxForwarderDto

___

### name

• `Optional` **name**: `string`

Name of inbox forwarder

**`Memberof`**

InboxForwarderDto

___

### should

• `Optional` **should**: [`InboxForwarderDtoShouldEnum`](../enums/InboxForwarderDtoShouldEnum.md)

Comparison mode for inbox automation matching.

**`Memberof`**

InboxForwarderDto
