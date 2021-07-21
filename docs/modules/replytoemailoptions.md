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

*Defined in [src/generated/api.ts:4874](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L4874)*

List of uploaded attachments to send with the reply. Optional.

**`memberof`** ReplyToEmailOptions

___

### body

• `Optional` **body**: string

*Defined in [src/generated/api.ts:4880](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L4880)*

Body of the reply email you want to send

**`memberof`** ReplyToEmailOptions

___

### charset

• `Optional` **charset**: string

*Defined in [src/generated/api.ts:4886](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L4886)*

The charset that your message should be sent with. Optional. Default is UTF-8

**`memberof`** ReplyToEmailOptions

___

### from

• `Optional` **from**: string

*Defined in [src/generated/api.ts:4892](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L4892)*

The from header that should be used. Optional

**`memberof`** ReplyToEmailOptions

___

### isHTML

• `Optional` **isHTML**: boolean

*Defined in [src/generated/api.ts:4898](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L4898)*

Is the reply HTML

**`memberof`** ReplyToEmailOptions

___

### replyTo

• `Optional` **replyTo**: string

*Defined in [src/generated/api.ts:4904](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L4904)*

The replyTo header that should be used. Optional

**`memberof`** ReplyToEmailOptions

___

### sendStrategy

• `Optional` **sendStrategy**: [SendStrategyEnum](../enums/replytoemailoptions.sendstrategyenum.md)

*Defined in [src/generated/api.ts:4910](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L4910)*

When to send the email. Typically immediately

**`memberof`** ReplyToEmailOptions

___

### template

• `Optional` **template**: string

*Defined in [src/generated/api.ts:4916](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L4916)*

Template ID to use instead of body. Will use template variable map to fill defined variable slots.

**`memberof`** ReplyToEmailOptions

___

### templateVariables

• `Optional` **templateVariables**: any

*Defined in [src/generated/api.ts:4922](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L4922)*

Template variables if using a template

**`memberof`** ReplyToEmailOptions

___

### useInboxName

• `Optional` **useInboxName**: boolean

*Defined in [src/generated/api.ts:4928](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L4928)*

Optionally use inbox name as display name for sender email address

**`memberof`** ReplyToEmailOptions
