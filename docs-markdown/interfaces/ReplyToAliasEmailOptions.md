[MailSlurp JS](../README.md) / ReplyToAliasEmailOptions

# Interface: ReplyToAliasEmailOptions

Options for replying to an alias email using the alias inbox

**`Export`**

**`Interface`**

ReplyToAliasEmailOptions

## Table of contents

### Properties

- [attachments](ReplyToAliasEmailOptions.md#attachments)
- [body](ReplyToAliasEmailOptions.md#body)
- [charset](ReplyToAliasEmailOptions.md#charset)
- [customHeaders](ReplyToAliasEmailOptions.md#customheaders)
- [html](ReplyToAliasEmailOptions.md#html)
- [isHTML](ReplyToAliasEmailOptions.md#ishtml)
- [sendStrategy](ReplyToAliasEmailOptions.md#sendstrategy)
- [template](ReplyToAliasEmailOptions.md#template)
- [templateVariables](ReplyToAliasEmailOptions.md#templatevariables)
- [useInboxName](ReplyToAliasEmailOptions.md#useinboxname)

## Properties

### attachments

• `Optional` **attachments**: `string`[]

List of uploaded attachments to send with the reply. Optional.

**`Memberof`**

ReplyToAliasEmailOptions

___

### body

• **body**: `string`

Body of the reply email you want to send

**`Memberof`**

ReplyToAliasEmailOptions

___

### charset

• `Optional` **charset**: `string`

The charset that your message should be sent with. Optional. Default is UTF-8

**`Memberof`**

ReplyToAliasEmailOptions

___

### customHeaders

• `Optional` **customHeaders**: `Object`

Optional custom headers

**`Memberof`**

ReplyToAliasEmailOptions

#### Index signature

▪ [key: `string`]: `string`

___

### html

• `Optional` **html**: `boolean`

**`Memberof`**

ReplyToAliasEmailOptions

___

### isHTML

• **isHTML**: `boolean`

Is the reply HTML

**`Memberof`**

ReplyToAliasEmailOptions

___

### sendStrategy

• `Optional` **sendStrategy**: [`SINGLE_MESSAGE`](../enums/ReplyToAliasEmailOptionsSendStrategyEnum.md#single_message)

How an email should be sent based on its recipients

**`Memberof`**

ReplyToAliasEmailOptions

___

### template

• `Optional` **template**: `string`

Template ID to use instead of body. Will use template variable map to fill defined variable slots.

**`Memberof`**

ReplyToAliasEmailOptions

___

### templateVariables

• `Optional` **templateVariables**: `Object`

Template variables if using a template

**`Memberof`**

ReplyToAliasEmailOptions

#### Index signature

▪ [key: `string`]: `object`

___

### useInboxName

• `Optional` **useInboxName**: `boolean`

Optionally use inbox name as display name for sender email address

**`Memberof`**

ReplyToAliasEmailOptions
