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
* [useInboxName](replytoaliasemailoptions.md#useinboxname)

## Properties

### attachments

• `Optional` **attachments**: Array\<string>

*Defined in [src/generated/api.ts:4183](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L4183)*

List of uploaded attachments to send with the reply. Optional.

**`memberof`** ReplyToAliasEmailOptions

___

### body

• `Optional` **body**: string

*Defined in [src/generated/api.ts:4189](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L4189)*

Body of the reply email you want to send

**`memberof`** ReplyToAliasEmailOptions

___

### charset

• `Optional` **charset**: string

*Defined in [src/generated/api.ts:4195](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L4195)*

The charset that your message should be sent with. Optional. Default is UTF-8

**`memberof`** ReplyToAliasEmailOptions

___

### isHTML

• `Optional` **isHTML**: boolean

*Defined in [src/generated/api.ts:4201](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L4201)*

Is the reply HTML

**`memberof`** ReplyToAliasEmailOptions

___

### sendStrategy

• `Optional` **sendStrategy**: [SendStrategyEnum](../enums/replytoaliasemailoptions.sendstrategyenum.md)

*Defined in [src/generated/api.ts:4207](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L4207)*

When to send the email. Typically immediately

**`memberof`** ReplyToAliasEmailOptions

___

### template

• `Optional` **template**: string

*Defined in [src/generated/api.ts:4213](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L4213)*

Template ID to use instead of body. Will use template variable map to fill defined variable slots.

**`memberof`** ReplyToAliasEmailOptions

___

### templateVariables

• `Optional` **templateVariables**: any

*Defined in [src/generated/api.ts:4219](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L4219)*

Template variables if using a template

**`memberof`** ReplyToAliasEmailOptions

___

### useInboxName

• `Optional` **useInboxName**: boolean

*Defined in [src/generated/api.ts:4225](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L4225)*

Optionally use inbox name as display name for sender email address

**`memberof`** ReplyToAliasEmailOptions
