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

*Defined in [src/generated/api.ts:4323](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L4323)*

List of uploaded attachments to send with the reply. Optional.

**`memberof`** ReplyToEmailOptions

___

### body

• `Optional` **body**: string

*Defined in [src/generated/api.ts:4329](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L4329)*

Body of the reply email you want to send

**`memberof`** ReplyToEmailOptions

___

### charset

• `Optional` **charset**: string

*Defined in [src/generated/api.ts:4335](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L4335)*

The charset that your message should be sent with. Optional. Default is UTF-8

**`memberof`** ReplyToEmailOptions

___

### from

• `Optional` **from**: string

*Defined in [src/generated/api.ts:4341](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L4341)*

The from header that should be used. Optional

**`memberof`** ReplyToEmailOptions

___

### isHTML

• `Optional` **isHTML**: boolean

*Defined in [src/generated/api.ts:4347](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L4347)*

Is the reply HTML

**`memberof`** ReplyToEmailOptions

___

### replyTo

• `Optional` **replyTo**: string

*Defined in [src/generated/api.ts:4353](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L4353)*

The replyTo header that should be used. Optional

**`memberof`** ReplyToEmailOptions

___

### sendStrategy

• `Optional` **sendStrategy**: [SendStrategyEnum](../enums/replytoemailoptions.sendstrategyenum.md)

*Defined in [src/generated/api.ts:4359](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L4359)*

When to send the email. Typically immediately

**`memberof`** ReplyToEmailOptions

___

### template

• `Optional` **template**: string

*Defined in [src/generated/api.ts:4365](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L4365)*

Template ID to use instead of body. Will use template variable map to fill defined variable slots.

**`memberof`** ReplyToEmailOptions

___

### templateVariables

• `Optional` **templateVariables**: any

*Defined in [src/generated/api.ts:4371](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L4371)*

Template variables if using a template

**`memberof`** ReplyToEmailOptions

___

### useInboxName

• `Optional` **useInboxName**: boolean

*Defined in [src/generated/api.ts:4377](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L4377)*

Optionally use inbox name as display name for sender email address

**`memberof`** ReplyToEmailOptions
