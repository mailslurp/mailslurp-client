[MailSlurp JS](../README.md) / ReplyToEmailOptions

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

#### Defined in

[src/generated/api.ts:5054](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/generated/api.ts#L5054)

___

### body

• `Optional` **body**: `string`

Body of the reply email you want to send

**`memberof`** ReplyToEmailOptions

#### Defined in

[src/generated/api.ts:5060](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/generated/api.ts#L5060)

___

### charset

• `Optional` **charset**: `string`

The charset that your message should be sent with. Optional. Default is UTF-8

**`memberof`** ReplyToEmailOptions

#### Defined in

[src/generated/api.ts:5066](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/generated/api.ts#L5066)

___

### from

• `Optional` **from**: `string`

The from header that should be used. Optional

**`memberof`** ReplyToEmailOptions

#### Defined in

[src/generated/api.ts:5072](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/generated/api.ts#L5072)

___

### isHTML

• `Optional` **isHTML**: `boolean`

Is the reply HTML

**`memberof`** ReplyToEmailOptions

#### Defined in

[src/generated/api.ts:5078](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/generated/api.ts#L5078)

___

### replyTo

• `Optional` **replyTo**: `string`

The replyTo header that should be used. Optional

**`memberof`** ReplyToEmailOptions

#### Defined in

[src/generated/api.ts:5084](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/generated/api.ts#L5084)

___

### sendStrategy

• `Optional` **sendStrategy**: [`SendStrategyEnum`](../enums/ReplyToEmailOptions.SendStrategyEnum.md)

When to send the email. Typically immediately

**`memberof`** ReplyToEmailOptions

#### Defined in

[src/generated/api.ts:5090](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/generated/api.ts#L5090)

___

### template

• `Optional` **template**: `string`

Template ID to use instead of body. Will use template variable map to fill defined variable slots.

**`memberof`** ReplyToEmailOptions

#### Defined in

[src/generated/api.ts:5096](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/generated/api.ts#L5096)

___

### templateVariables

• `Optional` **templateVariables**: `any`

Template variables if using a template

**`memberof`** ReplyToEmailOptions

#### Defined in

[src/generated/api.ts:5102](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/generated/api.ts#L5102)

___

### useInboxName

• `Optional` **useInboxName**: `boolean`

Optionally use inbox name as display name for sender email address

**`memberof`** ReplyToEmailOptions

#### Defined in

[src/generated/api.ts:5108](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/generated/api.ts#L5108)
