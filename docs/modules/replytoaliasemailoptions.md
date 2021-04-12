**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / ReplyToAliasEmailOptions

# Namespace: ReplyToAliasEmailOptions

**`export`** 

**`namespace`** ReplyToAliasEmailOptions

## Index

### Enumerations

* [SendStrategyEnum](../enums/replytoaliasemailoptions.sendstrategyenum.md)

### Properties

* [attachments](replytoaliasemailoptions.md#attachments)
* [body](replytoaliasemailoptions.md#body)
* [charset](replytoaliasemailoptions.md#charset)
* [isHTML](replytoaliasemailoptions.md#ishtml)
* [sendStrategy](replytoaliasemailoptions.md#sendstrategy)
* [template](replytoaliasemailoptions.md#template)
* [templateVariables](replytoaliasemailoptions.md#templatevariables)

## Properties

### attachments

• `Optional` **attachments**: Array\<string>

*Defined in [src/generated/api.ts:3172](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L3172)*

List of uploaded attachments to send with the reply. Optional.

**`memberof`** ReplyToAliasEmailOptions

___

### body

• `Optional` **body**: string

*Defined in [src/generated/api.ts:3178](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L3178)*

Body of the reply email you want to send

**`memberof`** ReplyToAliasEmailOptions

___

### charset

• `Optional` **charset**: string

*Defined in [src/generated/api.ts:3184](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L3184)*

The charset that your message should be sent with. Optional. Default is UTF-8

**`memberof`** ReplyToAliasEmailOptions

___

### isHTML

• `Optional` **isHTML**: boolean

*Defined in [src/generated/api.ts:3190](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L3190)*

Is the reply HTML

**`memberof`** ReplyToAliasEmailOptions

___

### sendStrategy

• `Optional` **sendStrategy**: [SendStrategyEnum](../enums/replytoaliasemailoptions.sendstrategyenum.md)

*Defined in [src/generated/api.ts:3196](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L3196)*

When to send the email. Typically immediately

**`memberof`** ReplyToAliasEmailOptions

___

### template

• `Optional` **template**: string

*Defined in [src/generated/api.ts:3202](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L3202)*

Template ID to use instead of body. Will use template variable map to fill defined variable slots.

**`memberof`** ReplyToAliasEmailOptions

___

### templateVariables

• `Optional` **templateVariables**: any

*Defined in [src/generated/api.ts:3208](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L3208)*

Template variables if using a template

**`memberof`** ReplyToAliasEmailOptions
