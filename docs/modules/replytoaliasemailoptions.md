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

*Defined in [src/generated/api.ts:4804](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L4804)*

List of uploaded attachments to send with the reply. Optional.

**`memberof`** ReplyToAliasEmailOptions

___

### body

• `Optional` **body**: string

*Defined in [src/generated/api.ts:4810](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L4810)*

Body of the reply email you want to send

**`memberof`** ReplyToAliasEmailOptions

___

### charset

• `Optional` **charset**: string

*Defined in [src/generated/api.ts:4816](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L4816)*

The charset that your message should be sent with. Optional. Default is UTF-8

**`memberof`** ReplyToAliasEmailOptions

___

### isHTML

• `Optional` **isHTML**: boolean

*Defined in [src/generated/api.ts:4822](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L4822)*

Is the reply HTML

**`memberof`** ReplyToAliasEmailOptions

___

### sendStrategy

• `Optional` **sendStrategy**: [SendStrategyEnum](../enums/replytoaliasemailoptions.sendstrategyenum.md)

*Defined in [src/generated/api.ts:4828](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L4828)*

When to send the email. Typically immediately

**`memberof`** ReplyToAliasEmailOptions

___

### template

• `Optional` **template**: string

*Defined in [src/generated/api.ts:4834](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L4834)*

Template ID to use instead of body. Will use template variable map to fill defined variable slots.

**`memberof`** ReplyToAliasEmailOptions

___

### templateVariables

• `Optional` **templateVariables**: any

*Defined in [src/generated/api.ts:4840](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L4840)*

Template variables if using a template

**`memberof`** ReplyToAliasEmailOptions

___

### useInboxName

• `Optional` **useInboxName**: boolean

*Defined in [src/generated/api.ts:4846](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L4846)*

Optionally use inbox name as display name for sender email address

**`memberof`** ReplyToAliasEmailOptions
