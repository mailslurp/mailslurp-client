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

[src/generated/api.ts:4984](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/generated/api.ts#L4984)

___

### body

• `Optional` **body**: `string`

Body of the reply email you want to send

**`memberof`** ReplyToAliasEmailOptions

#### Defined in

[src/generated/api.ts:4990](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/generated/api.ts#L4990)

___

### charset

• `Optional` **charset**: `string`

The charset that your message should be sent with. Optional. Default is UTF-8

**`memberof`** ReplyToAliasEmailOptions

#### Defined in

[src/generated/api.ts:4996](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/generated/api.ts#L4996)

___

### isHTML

• `Optional` **isHTML**: `boolean`

Is the reply HTML

**`memberof`** ReplyToAliasEmailOptions

#### Defined in

[src/generated/api.ts:5002](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/generated/api.ts#L5002)

___

### sendStrategy

• `Optional` **sendStrategy**: [`SendStrategyEnum`](../enums/ReplyToAliasEmailOptions.SendStrategyEnum.md)

When to send the email. Typically immediately

**`memberof`** ReplyToAliasEmailOptions

#### Defined in

[src/generated/api.ts:5008](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/generated/api.ts#L5008)

___

### template

• `Optional` **template**: `string`

Template ID to use instead of body. Will use template variable map to fill defined variable slots.

**`memberof`** ReplyToAliasEmailOptions

#### Defined in

[src/generated/api.ts:5014](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/generated/api.ts#L5014)

___

### templateVariables

• `Optional` **templateVariables**: `any`

Template variables if using a template

**`memberof`** ReplyToAliasEmailOptions

#### Defined in

[src/generated/api.ts:5020](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/generated/api.ts#L5020)

___

### useInboxName

• `Optional` **useInboxName**: `boolean`

Optionally use inbox name as display name for sender email address

**`memberof`** ReplyToAliasEmailOptions

#### Defined in

[src/generated/api.ts:5026](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/generated/api.ts#L5026)
