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

### <a id="attachments" name="attachments"></a> attachments

• `Optional` **attachments**: `string`[]

List of uploaded attachments to send with the reply. Optional.

**`memberof`** ReplyToEmailOptions

___

### <a id="body" name="body"></a> body

• **body**: `string`

Body of the reply email you want to send

**`memberof`** ReplyToEmailOptions

___

### <a id="charset" name="charset"></a> charset

• `Optional` **charset**: `string`

The charset that your message should be sent with. Optional. Default is UTF-8

**`memberof`** ReplyToEmailOptions

___

### <a id="from" name="from"></a> from

• `Optional` **from**: `string`

The from header that should be used. Optional

**`memberof`** ReplyToEmailOptions

___

### <a id="html" name="html"></a> html

• `Optional` **html**: `boolean`

**`memberof`** ReplyToEmailOptions

___

### <a id="ishtml" name="ishtml"></a> isHTML

• **isHTML**: `boolean`

Is the reply HTML

**`memberof`** ReplyToEmailOptions

___

### <a id="replyto" name="replyto"></a> replyTo

• `Optional` **replyTo**: `string`

The replyTo header that should be used. Optional

**`memberof`** ReplyToEmailOptions

___

### <a id="sendstrategy" name="sendstrategy"></a> sendStrategy

• `Optional` **sendStrategy**: [`SINGLE_MESSAGE`](../enums/ReplyToEmailOptionsSendStrategyEnum.md#single_message)

How an email should be sent based on its recipients

**`memberof`** ReplyToEmailOptions

___

### <a id="template" name="template"></a> template

• `Optional` **template**: `string`

Template ID to use instead of body. Will use template variable map to fill defined variable slots.

**`memberof`** ReplyToEmailOptions

___

### <a id="templatevariables" name="templatevariables"></a> templateVariables

• `Optional` **templateVariables**: `Object`

Template variables if using a template

**`memberof`** ReplyToEmailOptions

#### Index signature

▪ [key: `string`]: `object`

___

### <a id="useinboxname" name="useinboxname"></a> useInboxName

• `Optional` **useInboxName**: `boolean`

Optionally use inbox name as display name for sender email address

**`memberof`** ReplyToEmailOptions
