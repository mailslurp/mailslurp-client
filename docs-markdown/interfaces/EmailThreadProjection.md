[MailSlurp JS](../README.md) / EmailThreadProjection

# Interface: EmailThreadProjection

An email thread is a message thread created for a email based on Message-ID, In-Reply-To, and References headers

**`Export`**

**`Interface`**

EmailThreadProjection

## Table of contents

### Properties

- [bcc](EmailThreadProjection.md#bcc)
- [cc](EmailThreadProjection.md#cc)
- [createdAt](EmailThreadProjection.md#createdat)
- [from](EmailThreadProjection.md#from)
- [hasAttachments](EmailThreadProjection.md#hasattachments)
- [id](EmailThreadProjection.md#id)
- [inboxId](EmailThreadProjection.md#inboxid)
- [lastBodyExcerpt](EmailThreadProjection.md#lastbodyexcerpt)
- [lastCreatedAt](EmailThreadProjection.md#lastcreatedat)
- [lastFrom](EmailThreadProjection.md#lastfrom)
- [lastSender](EmailThreadProjection.md#lastsender)
- [lastTextExcerpt](EmailThreadProjection.md#lasttextexcerpt)
- [messageCount](EmailThreadProjection.md#messagecount)
- [recipients](EmailThreadProjection.md#recipients)
- [sender](EmailThreadProjection.md#sender)
- [subject](EmailThreadProjection.md#subject)
- [to](EmailThreadProjection.md#to)
- [unread](EmailThreadProjection.md#unread)
- [updatedAt](EmailThreadProjection.md#updatedat)
- [userId](EmailThreadProjection.md#userid)

## Properties

### bcc

• `Optional` **bcc**: `string`[]

BCC recipients

**`Memberof`**

EmailThreadProjection

___

### cc

• `Optional` **cc**: `string`[]

CC recipients

**`Memberof`**

EmailThreadProjection

___

### createdAt

• **createdAt**: `Date`

Created at DateTime

**`Memberof`**

EmailThreadProjection

___

### from

• `Optional` **from**: `string`

From sender

**`Memberof`**

EmailThreadProjection

___

### hasAttachments

• **hasAttachments**: `boolean`

Has attachments

**`Memberof`**

EmailThreadProjection

___

### id

• **id**: `string`

ID of email thread

**`Memberof`**

EmailThreadProjection

___

### inboxId

• `Optional` **inboxId**: `string`

Inbox ID

**`Memberof`**

EmailThreadProjection

___

### lastBodyExcerpt

• `Optional` **lastBodyExcerpt**: `string`

Last body excerpt

**`Memberof`**

EmailThreadProjection

___

### lastCreatedAt

• `Optional` **lastCreatedAt**: `Date`

Last email created time

**`Memberof`**

EmailThreadProjection

___

### lastFrom

• `Optional` **lastFrom**: `string`

Last sender

**`Memberof`**

EmailThreadProjection

___

### lastSender

• `Optional` **lastSender**: [`SenderProjection`](SenderProjection.md)

**`Memberof`**

EmailThreadProjection

___

### lastTextExcerpt

• `Optional` **lastTextExcerpt**: `string`

Last text excerpt

**`Memberof`**

EmailThreadProjection

___

### messageCount

• **messageCount**: `number`

Number of messages in the thread

**`Memberof`**

EmailThreadProjection

___

### recipients

• `Optional` **recipients**: [`EmailRecipientsProjection`](EmailRecipientsProjection.md)

**`Memberof`**

EmailThreadProjection

___

### sender

• `Optional` **sender**: [`SenderProjection`](SenderProjection.md)

**`Memberof`**

EmailThreadProjection

___

### subject

• `Optional` **subject**: `string`

Thread topic subject

**`Memberof`**

EmailThreadProjection

___

### to

• **to**: `string`[]

To recipients

**`Memberof`**

EmailThreadProjection

___

### unread

• **unread**: `boolean`

Has unread

**`Memberof`**

EmailThreadProjection

___

### updatedAt

• **updatedAt**: `Date`

Updated at DateTime

**`Memberof`**

EmailThreadProjection

___

### userId

• **userId**: `string`

User ID

**`Memberof`**

EmailThreadProjection
