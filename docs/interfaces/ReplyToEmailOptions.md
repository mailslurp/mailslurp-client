# Interface: ReplyToEmailOptions

Options for replying to email with API

**`export`**

**`interface`** ReplyToEmailOptions

## Table of contents

### Properties

- [attachments](ReplyToEmailOptions.md#attachments)
- [body](ReplyToEmailOptions.md#body)
- [charset](ReplyToEmailOptions.md#charset)
- [from](ReplyToEmailOptions.md#from)
- [html](ReplyToEmailOptions.md#html)
- [isHTML](ReplyToEmailOptions.md#ishtml)
- [replyTo](ReplyToEmailOptions.md#replyto)
- [sendStrategy](ReplyToEmailOptions.md#sendstrategy)
- [template](ReplyToEmailOptions.md#template)
- [templateVariables](ReplyToEmailOptions.md#templatevariables)
- [useInboxName](ReplyToEmailOptions.md#useinboxname)

## Properties

### attachments

• `Optional` **attachments**: `string`[]

List of uploaded attachments to send with the reply. Optional.

**`memberof`** ReplyToEmailOptions

___

### body

• **body**: `string`

Body of the reply email you want to send

**`memberof`** ReplyToEmailOptions

___

### charset

• `Optional` **charset**: `string`

The charset that your message should be sent with. Optional. Default is UTF-8

**`memberof`** ReplyToEmailOptions

___

### from

• `Optional` **from**: `string`

The from header that should be used. Optional

**`memberof`** ReplyToEmailOptions

___

### html

• `Optional` **html**: `boolean`

**`memberof`** ReplyToEmailOptions

___

### isHTML

• **isHTML**: `boolean`

Is the reply HTML

**`memberof`** ReplyToEmailOptions

___

### replyTo

• `Optional` **replyTo**: `string`

The replyTo header that should be used. Optional

**`memberof`** ReplyToEmailOptions

___

### sendStrategy

• `Optional` **sendStrategy**: [`SINGLE_MESSAGE`](../enums/ReplyToEmailOptionsSendStrategyEnum.md#single-message)

How an email should be sent based on its recipients

**`memberof`** ReplyToEmailOptions

___

### template

• `Optional` **template**: `string`

Template ID to use instead of body. Will use template variable map to fill defined variable slots.

**`memberof`** ReplyToEmailOptions

___

### templateVariables

• `Optional` **templateVariables**: `Object`

Template variables if using a template

**`memberof`** ReplyToEmailOptions

#### Index signature

▪ [key: `string`]: %60object%60

___

### useInboxName

• `Optional` **useInboxName**: `boolean`

Optionally use inbox name as display name for sender email address

**`memberof`** ReplyToEmailOptions
