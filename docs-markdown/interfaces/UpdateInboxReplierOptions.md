[MailSlurp JS](../README.md) / UpdateInboxReplierOptions

# Interface: UpdateInboxReplierOptions

Options for updating an inbox replier

**`Export`**

**`Interface`**

UpdateInboxReplierOptions

## Table of contents

### Properties

- [body](UpdateInboxReplierOptions.md#body)
- [charset](UpdateInboxReplierOptions.md#charset)
- [field](UpdateInboxReplierOptions.md#field)
- [from](UpdateInboxReplierOptions.md#from)
- [ignoreReplyTo](UpdateInboxReplierOptions.md#ignorereplyto)
- [inboxId](UpdateInboxReplierOptions.md#inboxid)
- [isHTML](UpdateInboxReplierOptions.md#ishtml)
- [match](UpdateInboxReplierOptions.md#match)
- [name](UpdateInboxReplierOptions.md#name)
- [replyTo](UpdateInboxReplierOptions.md#replyto)
- [subject](UpdateInboxReplierOptions.md#subject)
- [templateId](UpdateInboxReplierOptions.md#templateid)
- [templateVariables](UpdateInboxReplierOptions.md#templatevariables)

## Properties

### body

• `Optional` **body**: `string`

Email body for reply

**`Memberof`**

UpdateInboxReplierOptions

___

### charset

• `Optional` **charset**: `string`

Email reply charset

**`Memberof`**

UpdateInboxReplierOptions

___

### field

• **field**: [`UpdateInboxReplierOptionsFieldEnum`](../enums/UpdateInboxReplierOptionsFieldEnum.md)

Field to match against to trigger inbox replier for inbound email

**`Memberof`**

UpdateInboxReplierOptions

___

### from

• `Optional` **from**: `string`

Send email from address

**`Memberof`**

UpdateInboxReplierOptions

___

### ignoreReplyTo

• `Optional` **ignoreReplyTo**: `boolean`

Ignore sender replyTo when responding. Send directly to the sender if enabled.

**`Memberof`**

UpdateInboxReplierOptions

___

### inboxId

• **inboxId**: `string`

Inbox ID to attach replier to

**`Memberof`**

UpdateInboxReplierOptions

___

### isHTML

• `Optional` **isHTML**: `boolean`

Send HTML email

**`Memberof`**

UpdateInboxReplierOptions

___

### match

• **match**: `string`

String or wildcard style match for field specified when evaluating reply rules

**`Memberof`**

UpdateInboxReplierOptions

___

### name

• `Optional` **name**: `string`

Name for replier

**`Memberof`**

UpdateInboxReplierOptions

___

### replyTo

• `Optional` **replyTo**: `string`

Reply-to email address when sending replying

**`Memberof`**

UpdateInboxReplierOptions

___

### subject

• `Optional` **subject**: `string`

Subject override when replying to email

**`Memberof`**

UpdateInboxReplierOptions

___

### templateId

• `Optional` **templateId**: `string`

ID of template to use when sending a reply

**`Memberof`**

UpdateInboxReplierOptions

___

### templateVariables

• `Optional` **templateVariables**: `Object`

Template variable values

**`Memberof`**

UpdateInboxReplierOptions

#### Index signature

▪ [key: `string`]: `object`
