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

*Defined in [src/generated/api.ts:3822](https://github.com/mailslurp/mailslurp-client/blob/6b679b8/src/generated/api.ts#L3822)*

List of uploaded attachments to send with the reply. Optional.

**`memberof`** ReplyToEmailOptions

___

### body

• `Optional` **body**: string

*Defined in [src/generated/api.ts:3828](https://github.com/mailslurp/mailslurp-client/blob/6b679b8/src/generated/api.ts#L3828)*

Body of the reply email you want to send

**`memberof`** ReplyToEmailOptions

___

### charset

• `Optional` **charset**: string

*Defined in [src/generated/api.ts:3834](https://github.com/mailslurp/mailslurp-client/blob/6b679b8/src/generated/api.ts#L3834)*

The charset that your message should be sent with. Optional. Default is UTF-8

**`memberof`** ReplyToEmailOptions

___

### from

• `Optional` **from**: string

*Defined in [src/generated/api.ts:3840](https://github.com/mailslurp/mailslurp-client/blob/6b679b8/src/generated/api.ts#L3840)*

The from header that should be used. Optional

**`memberof`** ReplyToEmailOptions

___

### isHTML

• `Optional` **isHTML**: boolean

*Defined in [src/generated/api.ts:3846](https://github.com/mailslurp/mailslurp-client/blob/6b679b8/src/generated/api.ts#L3846)*

Is the reply HTML

**`memberof`** ReplyToEmailOptions

___

### replyTo

• `Optional` **replyTo**: string

*Defined in [src/generated/api.ts:3852](https://github.com/mailslurp/mailslurp-client/blob/6b679b8/src/generated/api.ts#L3852)*

The replyTo header that should be used. Optional

**`memberof`** ReplyToEmailOptions

___

### sendStrategy

• `Optional` **sendStrategy**: [SendStrategyEnum](../enums/replytoemailoptions.sendstrategyenum.md)

*Defined in [src/generated/api.ts:3858](https://github.com/mailslurp/mailslurp-client/blob/6b679b8/src/generated/api.ts#L3858)*

When to send the email. Typically immediately

**`memberof`** ReplyToEmailOptions

___

### template

• `Optional` **template**: string

*Defined in [src/generated/api.ts:3864](https://github.com/mailslurp/mailslurp-client/blob/6b679b8/src/generated/api.ts#L3864)*

Template ID to use instead of body. Will use template variable map to fill defined variable slots.

**`memberof`** ReplyToEmailOptions

___

### templateVariables

• `Optional` **templateVariables**: any

*Defined in [src/generated/api.ts:3870](https://github.com/mailslurp/mailslurp-client/blob/6b679b8/src/generated/api.ts#L3870)*

Template variables if using a template

**`memberof`** ReplyToEmailOptions

___

### useInboxName

• `Optional` **useInboxName**: boolean

*Defined in [src/generated/api.ts:3876](https://github.com/mailslurp/mailslurp-client/blob/6b679b8/src/generated/api.ts#L3876)*

Optionally use inbox name as display name for sender email address

**`memberof`** ReplyToEmailOptions
