[MailSlurp JS](../README.md) / InboxForwarderDto

# Interface: InboxForwarderDto

Inbox forwarder. Describes how an inbox will forward matching emails to designated recipients.

**`Export`**

**`Interface`**

InboxForwarderDto

## Table of contents

### Properties

- [createdAt](InboxForwarderDto.md#createdat)
- [field](InboxForwarderDto.md#field)
- [forwardToRecipients](InboxForwarderDto.md#forwardtorecipients)
- [id](InboxForwarderDto.md#id)
- [inboxId](InboxForwarderDto.md#inboxid)
- [match](InboxForwarderDto.md#match)
- [name](InboxForwarderDto.md#name)

## Properties

### createdAt

• **createdAt**: `Date`

**`Memberof`**

InboxForwarderDto

___

### field

• **field**: [`InboxForwarderDtoFieldEnum`](../enums/InboxForwarderDtoFieldEnum.md)

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

• **match**: `string`

Wild-card type pattern to apply to field

**`Memberof`**

InboxForwarderDto

___

### name

• `Optional` **name**: `string`

Name of inbox forwarder

**`Memberof`**

InboxForwarderDto
