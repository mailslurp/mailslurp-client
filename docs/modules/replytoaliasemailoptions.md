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

*Defined in [src/generated/api.ts:4180](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L4180)*

List of uploaded attachments to send with the reply. Optional.

**`memberof`** ReplyToAliasEmailOptions

___

### body

• `Optional` **body**: string

*Defined in [src/generated/api.ts:4186](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L4186)*

Body of the reply email you want to send

**`memberof`** ReplyToAliasEmailOptions

___

### charset

• `Optional` **charset**: string

*Defined in [src/generated/api.ts:4192](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L4192)*

The charset that your message should be sent with. Optional. Default is UTF-8

**`memberof`** ReplyToAliasEmailOptions

___

### isHTML

• `Optional` **isHTML**: boolean

*Defined in [src/generated/api.ts:4198](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L4198)*

Is the reply HTML

**`memberof`** ReplyToAliasEmailOptions

___

### sendStrategy

• `Optional` **sendStrategy**: [SendStrategyEnum](../enums/replytoaliasemailoptions.sendstrategyenum.md)

*Defined in [src/generated/api.ts:4204](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L4204)*

When to send the email. Typically immediately

**`memberof`** ReplyToAliasEmailOptions

___

### template

• `Optional` **template**: string

*Defined in [src/generated/api.ts:4210](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L4210)*

Template ID to use instead of body. Will use template variable map to fill defined variable slots.

**`memberof`** ReplyToAliasEmailOptions

___

### templateVariables

• `Optional` **templateVariables**: any

*Defined in [src/generated/api.ts:4216](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L4216)*

Template variables if using a template

**`memberof`** ReplyToAliasEmailOptions

___

### useInboxName

• `Optional` **useInboxName**: boolean

*Defined in [src/generated/api.ts:4222](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L4222)*

Optionally use inbox name as display name for sender email address

**`memberof`** ReplyToAliasEmailOptions
