[MailSlurp JS](../README.md) / ForwardEmailOptions

# Interface: ForwardEmailOptions

Options for forwarding an email

**`Export`**

**`Interface`**

ForwardEmailOptions

## Table of contents

### Properties

- [bcc](ForwardEmailOptions.md#bcc)
- [cc](ForwardEmailOptions.md#cc)
- [filterBouncedRecipients](ForwardEmailOptions.md#filterbouncedrecipients)
- [from](ForwardEmailOptions.md#from)
- [subject](ForwardEmailOptions.md#subject)
- [to](ForwardEmailOptions.md#to)
- [useInboxName](ForwardEmailOptions.md#useinboxname)

## Properties

### bcc

• `Optional` **bcc**: `string`[]

Optional bcc recipients

**`Memberof`**

ForwardEmailOptions

___

### cc

• `Optional` **cc**: `string`[]

Optional cc recipients

**`Memberof`**

ForwardEmailOptions

___

### filterBouncedRecipients

• `Optional` **filterBouncedRecipients**: `boolean`

Filter recipients to remove any bounced recipients from to, bcc, and cc before sending

**`Memberof`**

ForwardEmailOptions

___

### from

• `Optional` **from**: `string`

Optional from override

**`Memberof`**

ForwardEmailOptions

___

### subject

• `Optional` **subject**: `string`

Subject for forwarded email

**`Memberof`**

ForwardEmailOptions

___

### to

• **to**: `string`[]

To recipients for forwarded email

**`Memberof`**

ForwardEmailOptions

___

### useInboxName

• `Optional` **useInboxName**: `boolean`

Optionally use inbox name as display name for sender email address

**`Memberof`**

ForwardEmailOptions
