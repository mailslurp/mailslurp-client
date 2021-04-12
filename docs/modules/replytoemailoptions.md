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

## Properties

### attachments

• `Optional` **attachments**: Array\<string>

*Defined in [src/generated/api.ts:3236](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L3236)*

List of uploaded attachments to send with the reply. Optional.

**`memberof`** ReplyToEmailOptions

___

### body

• `Optional` **body**: string

*Defined in [src/generated/api.ts:3242](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L3242)*

Body of the reply email you want to send

**`memberof`** ReplyToEmailOptions

___

### charset

• `Optional` **charset**: string

*Defined in [src/generated/api.ts:3248](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L3248)*

The charset that your message should be sent with. Optional. Default is UTF-8

**`memberof`** ReplyToEmailOptions

___

### from

• `Optional` **from**: string

*Defined in [src/generated/api.ts:3254](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L3254)*

The from header that should be used. Optional

**`memberof`** ReplyToEmailOptions

___

### isHTML

• `Optional` **isHTML**: boolean

*Defined in [src/generated/api.ts:3260](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L3260)*

Is the reply HTML

**`memberof`** ReplyToEmailOptions

___

### replyTo

• `Optional` **replyTo**: string

*Defined in [src/generated/api.ts:3266](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L3266)*

The replyTo header that should be used. Optional

**`memberof`** ReplyToEmailOptions

___

### sendStrategy

• `Optional` **sendStrategy**: [SendStrategyEnum](../enums/replytoemailoptions.sendstrategyenum.md)

*Defined in [src/generated/api.ts:3272](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L3272)*

When to send the email. Typically immediately

**`memberof`** ReplyToEmailOptions

___

### template

• `Optional` **template**: string

*Defined in [src/generated/api.ts:3278](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L3278)*

Template ID to use instead of body. Will use template variable map to fill defined variable slots.

**`memberof`** ReplyToEmailOptions

___

### templateVariables

• `Optional` **templateVariables**: any

*Defined in [src/generated/api.ts:3284](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L3284)*

Template variables if using a template

**`memberof`** ReplyToEmailOptions
