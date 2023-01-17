# Interface: ForwardEmailOptions

Options for forwarding an email

**`export`**

**`interface`** ForwardEmailOptions

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

### <a id="bcc" name="bcc"></a> bcc

• `Optional` **bcc**: `string`[]

Optional bcc recipients

**`memberof`** ForwardEmailOptions

___

### <a id="cc" name="cc"></a> cc

• `Optional` **cc**: `string`[]

Optional cc recipients

**`memberof`** ForwardEmailOptions

___

### <a id="filterbouncedrecipients" name="filterbouncedrecipients"></a> filterBouncedRecipients

• `Optional` **filterBouncedRecipients**: `boolean`

Filter recipients to remove any bounced recipients from to, bcc, and cc before sending

**`memberof`** ForwardEmailOptions

___

### <a id="from" name="from"></a> from

• `Optional` **from**: `string`

Optional from override

**`memberof`** ForwardEmailOptions

___

### <a id="subject" name="subject"></a> subject

• `Optional` **subject**: `string`

Subject for forwarded email

**`memberof`** ForwardEmailOptions

___

### <a id="to" name="to"></a> to

• **to**: `string`[]

To recipients for forwarded email

**`memberof`** ForwardEmailOptions

___

### <a id="useinboxname" name="useinboxname"></a> useInboxName

• `Optional` **useInboxName**: `boolean`

Optionally use inbox name as display name for sender email address

**`memberof`** ForwardEmailOptions
