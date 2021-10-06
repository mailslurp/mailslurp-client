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

[src/generated/api.ts:5100](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L5100)

___

### body

• `Optional` **body**: `string`

Body of the reply email you want to send

**`memberof`** ReplyToEmailOptions

#### Defined in

[src/generated/api.ts:5106](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L5106)

___

### charset

• `Optional` **charset**: `string`

The charset that your message should be sent with. Optional. Default is UTF-8

**`memberof`** ReplyToEmailOptions

#### Defined in

[src/generated/api.ts:5112](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L5112)

___

### from

• `Optional` **from**: `string`

The from header that should be used. Optional

**`memberof`** ReplyToEmailOptions

#### Defined in

[src/generated/api.ts:5118](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L5118)

___

### isHTML

• `Optional` **isHTML**: `boolean`

Is the reply HTML

**`memberof`** ReplyToEmailOptions

#### Defined in

[src/generated/api.ts:5124](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L5124)

___

### replyTo

• `Optional` **replyTo**: `string`

The replyTo header that should be used. Optional

**`memberof`** ReplyToEmailOptions

#### Defined in

[src/generated/api.ts:5130](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L5130)

___

### sendStrategy

• `Optional` **sendStrategy**: [`SendStrategyEnum`](../enums/ReplyToEmailOptions.SendStrategyEnum.md)

When to send the email. Typically immediately

**`memberof`** ReplyToEmailOptions

#### Defined in

[src/generated/api.ts:5136](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L5136)

___

### template

• `Optional` **template**: `string`

Template ID to use instead of body. Will use template variable map to fill defined variable slots.

**`memberof`** ReplyToEmailOptions

#### Defined in

[src/generated/api.ts:5142](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L5142)

___

### templateVariables

• `Optional` **templateVariables**: `any`

Template variables if using a template

**`memberof`** ReplyToEmailOptions

#### Defined in

[src/generated/api.ts:5148](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L5148)

___

### useInboxName

• `Optional` **useInboxName**: `boolean`

Optionally use inbox name as display name for sender email address

**`memberof`** ReplyToEmailOptions

#### Defined in

[src/generated/api.ts:5154](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L5154)
