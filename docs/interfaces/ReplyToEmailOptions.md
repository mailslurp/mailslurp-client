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

[src/generated/api.ts:5068](https://github.com/mailslurp/mailslurp-client/blob/8c02983/src/generated/api.ts#L5068)

___

### body

• `Optional` **body**: `string`

Body of the reply email you want to send

**`memberof`** ReplyToEmailOptions

#### Defined in

[src/generated/api.ts:5074](https://github.com/mailslurp/mailslurp-client/blob/8c02983/src/generated/api.ts#L5074)

___

### charset

• `Optional` **charset**: `string`

The charset that your message should be sent with. Optional. Default is UTF-8

**`memberof`** ReplyToEmailOptions

#### Defined in

[src/generated/api.ts:5080](https://github.com/mailslurp/mailslurp-client/blob/8c02983/src/generated/api.ts#L5080)

___

### from

• `Optional` **from**: `string`

The from header that should be used. Optional

**`memberof`** ReplyToEmailOptions

#### Defined in

[src/generated/api.ts:5086](https://github.com/mailslurp/mailslurp-client/blob/8c02983/src/generated/api.ts#L5086)

___

### isHTML

• `Optional` **isHTML**: `boolean`

Is the reply HTML

**`memberof`** ReplyToEmailOptions

#### Defined in

[src/generated/api.ts:5092](https://github.com/mailslurp/mailslurp-client/blob/8c02983/src/generated/api.ts#L5092)

___

### replyTo

• `Optional` **replyTo**: `string`

The replyTo header that should be used. Optional

**`memberof`** ReplyToEmailOptions

#### Defined in

[src/generated/api.ts:5098](https://github.com/mailslurp/mailslurp-client/blob/8c02983/src/generated/api.ts#L5098)

___

### sendStrategy

• `Optional` **sendStrategy**: [`SendStrategyEnum`](../enums/ReplyToEmailOptions.SendStrategyEnum.md)

When to send the email. Typically immediately

**`memberof`** ReplyToEmailOptions

#### Defined in

[src/generated/api.ts:5104](https://github.com/mailslurp/mailslurp-client/blob/8c02983/src/generated/api.ts#L5104)

___

### template

• `Optional` **template**: `string`

Template ID to use instead of body. Will use template variable map to fill defined variable slots.

**`memberof`** ReplyToEmailOptions

#### Defined in

[src/generated/api.ts:5110](https://github.com/mailslurp/mailslurp-client/blob/8c02983/src/generated/api.ts#L5110)

___

### templateVariables

• `Optional` **templateVariables**: `any`

Template variables if using a template

**`memberof`** ReplyToEmailOptions

#### Defined in

[src/generated/api.ts:5116](https://github.com/mailslurp/mailslurp-client/blob/8c02983/src/generated/api.ts#L5116)

___

### useInboxName

• `Optional` **useInboxName**: `boolean`

Optionally use inbox name as display name for sender email address

**`memberof`** ReplyToEmailOptions

#### Defined in

[src/generated/api.ts:5122](https://github.com/mailslurp/mailslurp-client/blob/8c02983/src/generated/api.ts#L5122)
