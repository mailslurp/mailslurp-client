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

#### Defined in

[src/generated/api.ts:5030](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L5030)

___

### body

• `Optional` **body**: `string`

Body of the reply email you want to send

**`memberof`** ReplyToAliasEmailOptions

#### Defined in

[src/generated/api.ts:5036](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L5036)

___

### charset

• `Optional` **charset**: `string`

The charset that your message should be sent with. Optional. Default is UTF-8

**`memberof`** ReplyToAliasEmailOptions

#### Defined in

[src/generated/api.ts:5042](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L5042)

___

### isHTML

• `Optional` **isHTML**: `boolean`

Is the reply HTML

**`memberof`** ReplyToAliasEmailOptions

#### Defined in

[src/generated/api.ts:5048](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L5048)

___

### sendStrategy

• `Optional` **sendStrategy**: [`SendStrategyEnum`](../enums/ReplyToAliasEmailOptions.SendStrategyEnum.md)

When to send the email. Typically immediately

**`memberof`** ReplyToAliasEmailOptions

#### Defined in

[src/generated/api.ts:5054](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L5054)

___

### template

• `Optional` **template**: `string`

Template ID to use instead of body. Will use template variable map to fill defined variable slots.

**`memberof`** ReplyToAliasEmailOptions

#### Defined in

[src/generated/api.ts:5060](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L5060)

___

### templateVariables

• `Optional` **templateVariables**: `any`

Template variables if using a template

**`memberof`** ReplyToAliasEmailOptions

#### Defined in

[src/generated/api.ts:5066](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L5066)

___

### useInboxName

• `Optional` **useInboxName**: `boolean`

Optionally use inbox name as display name for sender email address

**`memberof`** ReplyToAliasEmailOptions

#### Defined in

[src/generated/api.ts:5072](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L5072)
