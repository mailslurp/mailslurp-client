[MailSlurp JS](../README.md) / ImapMailboxStatus

# Interface: ImapMailboxStatus

**`Export`**

**`Interface`**

ImapMailboxStatus

## Table of contents

### Properties

- [appendLimit](ImapMailboxStatus.md#appendlimit)
- [flags](ImapMailboxStatus.md#flags)
- [items](ImapMailboxStatus.md#items)
- [messages](ImapMailboxStatus.md#messages)
- [name](ImapMailboxStatus.md#name)
- [permanentFlags](ImapMailboxStatus.md#permanentflags)
- [readOnly](ImapMailboxStatus.md#readonly)
- [recent](ImapMailboxStatus.md#recent)
- [uidNext](ImapMailboxStatus.md#uidnext)
- [uidValidity](ImapMailboxStatus.md#uidvalidity)
- [unseen](ImapMailboxStatus.md#unseen)
- [unseenSeqNum](ImapMailboxStatus.md#unseenseqnum)

## Properties

### appendLimit

• `Optional` **appendLimit**: `number`

Per-mailbox limit of message size. Set only if server supports the APPENDLIMIT extension

**`Memberof`**

ImapMailboxStatus

___

### flags

• **flags**: `string`[]

The mailbox flags.

**`Memberof`**

ImapMailboxStatus

___

### items

• **items**: `object`

Results map

**`Memberof`**

ImapMailboxStatus

___

### messages

• **messages**: `number`

The number of messages in this mailbox.

**`Memberof`**

ImapMailboxStatus

___

### name

• **name**: `string`

The mailbox name.

**`Memberof`**

ImapMailboxStatus

___

### permanentFlags

• **permanentFlags**: `string`[]

The mailbox permanent flags.

**`Memberof`**

ImapMailboxStatus

___

### readOnly

• **readOnly**: `boolean`

True if the mailbox is open in read-only mode.

**`Memberof`**

ImapMailboxStatus

___

### recent

• **recent**: `number`

The number of messages not seen since the last time the mailbox was opened.

**`Memberof`**

ImapMailboxStatus

___

### uidNext

• **uidNext**: `number`

The next UID.

**`Memberof`**

ImapMailboxStatus

___

### uidValidity

• **uidValidity**: `number`

Together with a UID, it is a unique identifier for a message. Must be greater than or equal to 1.

**`Memberof`**

ImapMailboxStatus

___

### unseen

• **unseen**: `number`

The number of unread messages.

**`Memberof`**

ImapMailboxStatus

___

### unseenSeqNum

• **unseenSeqNum**: `number`

The sequence number of the first unseen message in the mailbox.

**`Memberof`**

ImapMailboxStatus
