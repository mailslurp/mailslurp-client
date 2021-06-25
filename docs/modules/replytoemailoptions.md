**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / ReplyToEmailOptions

# Namespace: ReplyToEmailOptions

**`export`** 

**`namespace`** ReplyToEmailOptions

## Index

### Enumerations

* [SendStrategyEnum](../enums/replytoemailoptions.sendstrategyenum.md)

### Properties

* [attachments](replytoemailoptions.md#attachments)
* [body](replytoemailoptions.md#body)
* [charset](replytoemailoptions.md#charset)
* [from](replytoemailoptions.md#from)
* [isHTML](replytoemailoptions.md#ishtml)
* [replyTo](replytoemailoptions.md#replyto)
* [sendStrategy](replytoemailoptions.md#sendstrategy)
* [template](replytoemailoptions.md#template)
* [templateVariables](replytoemailoptions.md#templatevariables)
* [useInboxName](replytoemailoptions.md#useinboxname)

## Properties

### attachments

• `Optional` **attachments**: Array\<string>

*Defined in [src/generated/api.ts:4253](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L4253)*

List of uploaded attachments to send with the reply. Optional.

**`memberof`** ReplyToEmailOptions

___

### body

• `Optional` **body**: string

*Defined in [src/generated/api.ts:4259](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L4259)*

Body of the reply email you want to send

**`memberof`** ReplyToEmailOptions

___

### charset

• `Optional` **charset**: string

*Defined in [src/generated/api.ts:4265](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L4265)*

The charset that your message should be sent with. Optional. Default is UTF-8

**`memberof`** ReplyToEmailOptions

___

### from

• `Optional` **from**: string

*Defined in [src/generated/api.ts:4271](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L4271)*

The from header that should be used. Optional

**`memberof`** ReplyToEmailOptions

___

### isHTML

• `Optional` **isHTML**: boolean

*Defined in [src/generated/api.ts:4277](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L4277)*

Is the reply HTML

**`memberof`** ReplyToEmailOptions

___

### replyTo

• `Optional` **replyTo**: string

*Defined in [src/generated/api.ts:4283](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L4283)*

The replyTo header that should be used. Optional

**`memberof`** ReplyToEmailOptions

___

### sendStrategy

• `Optional` **sendStrategy**: [SendStrategyEnum](../enums/replytoemailoptions.sendstrategyenum.md)

*Defined in [src/generated/api.ts:4289](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L4289)*

When to send the email. Typically immediately

**`memberof`** ReplyToEmailOptions

___

### template

• `Optional` **template**: string

*Defined in [src/generated/api.ts:4295](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L4295)*

Template ID to use instead of body. Will use template variable map to fill defined variable slots.

**`memberof`** ReplyToEmailOptions

___

### templateVariables

• `Optional` **templateVariables**: any

*Defined in [src/generated/api.ts:4301](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L4301)*

Template variables if using a template

**`memberof`** ReplyToEmailOptions

___

### useInboxName

• `Optional` **useInboxName**: boolean

*Defined in [src/generated/api.ts:4307](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L4307)*

Optionally use inbox name as display name for sender email address

**`memberof`** ReplyToEmailOptions
