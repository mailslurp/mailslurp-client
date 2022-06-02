# Interface: ReplyToAliasEmailOptions

Options for replying to an alias email using the alias inbox

**`export`**

**`interface`** ReplyToAliasEmailOptions

## Table of contents

### Properties

- [attachments](ReplyToAliasEmailOptions.md#attachments)
- [body](ReplyToAliasEmailOptions.md#body)
- [charset](ReplyToAliasEmailOptions.md#charset)
- [html](ReplyToAliasEmailOptions.md#html)
- [isHTML](ReplyToAliasEmailOptions.md#ishtml)
- [sendStrategy](ReplyToAliasEmailOptions.md#sendstrategy)
- [template](ReplyToAliasEmailOptions.md#template)
- [templateVariables](ReplyToAliasEmailOptions.md#templatevariables)
- [useInboxName](ReplyToAliasEmailOptions.md#useinboxname)

## Properties

### <a id="attachments" name="attachments"></a> attachments

• `Optional` **attachments**: `string`[]

List of uploaded attachments to send with the reply. Optional.

**`memberof`** ReplyToAliasEmailOptions

___

### <a id="body" name="body"></a> body

• **body**: `string`

Body of the reply email you want to send

**`memberof`** ReplyToAliasEmailOptions

___

### <a id="charset" name="charset"></a> charset

• `Optional` **charset**: `string`

The charset that your message should be sent with. Optional. Default is UTF-8

**`memberof`** ReplyToAliasEmailOptions

___

### <a id="html" name="html"></a> html

• `Optional` **html**: `boolean`

**`memberof`** ReplyToAliasEmailOptions

___

### <a id="ishtml" name="ishtml"></a> isHTML

• **isHTML**: `boolean`

Is the reply HTML

**`memberof`** ReplyToAliasEmailOptions

___

### <a id="sendstrategy" name="sendstrategy"></a> sendStrategy

• `Optional` **sendStrategy**: [`SINGLE_MESSAGE`](../enums/ReplyToAliasEmailOptionsSendStrategyEnum.md#single_message)

How an email should be sent based on its recipients

**`memberof`** ReplyToAliasEmailOptions

___

### <a id="template" name="template"></a> template

• `Optional` **template**: `string`

Template ID to use instead of body. Will use template variable map to fill defined variable slots.

**`memberof`** ReplyToAliasEmailOptions

___

### <a id="templatevariables" name="templatevariables"></a> templateVariables

• `Optional` **templateVariables**: `Object`

Template variables if using a template

**`memberof`** ReplyToAliasEmailOptions

#### Index signature

▪ [key: `string`]: `object`

___

### <a id="useinboxname" name="useinboxname"></a> useInboxName

• `Optional` **useInboxName**: `boolean`

Optionally use inbox name as display name for sender email address

**`memberof`** ReplyToAliasEmailOptions
