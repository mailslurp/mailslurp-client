[MailSlurp JS](../README.md) / ReplyToAliasEmailOptions

# Interface: ReplyToAliasEmailOptions

Options for replying to an alias email using the alias inbox

**`export`**

**`interface`** ReplyToAliasEmailOptions

## Table of contents

### Properties

- [attachments](ReplyToAliasEmailOptions.md#attachments)
- [body](ReplyToAliasEmailOptions.md#body)
- [charset](ReplyToAliasEmailOptions.md#charset)
- [isHTML](ReplyToAliasEmailOptions.md#ishtml)
- [sendStrategy](ReplyToAliasEmailOptions.md#sendstrategy)
- [template](ReplyToAliasEmailOptions.md#template)
- [templateVariables](ReplyToAliasEmailOptions.md#templatevariables)
- [useInboxName](ReplyToAliasEmailOptions.md#useinboxname)

## Properties

### attachments

• `Optional` **attachments**: `string`[]

List of uploaded attachments to send with the reply. Optional.

**`memberof`** ReplyToAliasEmailOptions

___

### body

• `Optional` **body**: `string`

Body of the reply email you want to send

**`memberof`** ReplyToAliasEmailOptions

___

### charset

• `Optional` **charset**: `string`

The charset that your message should be sent with. Optional. Default is UTF-8

**`memberof`** ReplyToAliasEmailOptions

___

### isHTML

• `Optional` **isHTML**: `boolean`

Is the reply HTML

**`memberof`** ReplyToAliasEmailOptions

___

### sendStrategy

• `Optional` **sendStrategy**: [`SINGLE_MESSAGE`](../enums/ReplyToAliasEmailOptionsSendStrategyEnum.md#single_message)

When to send the email. Typically immediately

**`memberof`** ReplyToAliasEmailOptions

___

### template

• `Optional` **template**: `string`

Template ID to use instead of body. Will use template variable map to fill defined variable slots.

**`memberof`** ReplyToAliasEmailOptions

___

### templateVariables

• `Optional` **templateVariables**: `object`

Template variables if using a template

**`memberof`** ReplyToAliasEmailOptions

___

### useInboxName

• `Optional` **useInboxName**: `boolean`

Optionally use inbox name as display name for sender email address

**`memberof`** ReplyToAliasEmailOptions
