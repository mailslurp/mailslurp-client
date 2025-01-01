[MailSlurp JS](../README.md) / CreateInboxReplierOptions

# Interface: CreateInboxReplierOptions

Options for creating an inbox replier. Repliers can be attached to inboxes and send automated responses when an inbound email matches given criteria.

**`Export`**

**`Interface`**

CreateInboxReplierOptions

## Table of contents

### Properties

- [body](CreateInboxReplierOptions.md#body)
- [charset](CreateInboxReplierOptions.md#charset)
- [field](CreateInboxReplierOptions.md#field)
- [from](CreateInboxReplierOptions.md#from)
- [ignoreReplyTo](CreateInboxReplierOptions.md#ignorereplyto)
- [inboxId](CreateInboxReplierOptions.md#inboxid)
- [isHTML](CreateInboxReplierOptions.md#ishtml)
- [match](CreateInboxReplierOptions.md#match)
- [name](CreateInboxReplierOptions.md#name)
- [replyTo](CreateInboxReplierOptions.md#replyto)
- [subject](CreateInboxReplierOptions.md#subject)
- [templateId](CreateInboxReplierOptions.md#templateid)
- [templateVariables](CreateInboxReplierOptions.md#templatevariables)

## Properties

### body

• `Optional` **body**: `string`

Email body for reply

**`Memberof`**

CreateInboxReplierOptions

___

### charset

• `Optional` **charset**: `string`

Email reply charset

**`Memberof`**

CreateInboxReplierOptions

___

### field

• **field**: [`CreateInboxReplierOptionsFieldEnum`](../enums/CreateInboxReplierOptionsFieldEnum.md)

Field to match against to trigger inbox replier for inbound email

**`Memberof`**

CreateInboxReplierOptions

___

### from

• `Optional` **from**: `string`

Send email from address

**`Memberof`**

CreateInboxReplierOptions

___

### ignoreReplyTo

• `Optional` **ignoreReplyTo**: `boolean`

Ignore sender replyTo when responding. Send directly to the sender if enabled.

**`Memberof`**

CreateInboxReplierOptions

___

### inboxId

• `Optional` **inboxId**: `string`

Inbox ID to attach replier to

**`Memberof`**

CreateInboxReplierOptions

___

### isHTML

• `Optional` **isHTML**: `boolean`

Send HTML email

**`Memberof`**

CreateInboxReplierOptions

___

### match

• **match**: `string`

String or wildcard style match for field specified when evaluating reply rules. Use `*` to match anything.

**`Memberof`**

CreateInboxReplierOptions

___

### name

• `Optional` **name**: `string`

Name for replier

**`Memberof`**

CreateInboxReplierOptions

___

### replyTo

• `Optional` **replyTo**: `string`

Reply-to email address when sending replying

**`Memberof`**

CreateInboxReplierOptions

___

### subject

• `Optional` **subject**: `string`

Subject override when replying to email

**`Memberof`**

CreateInboxReplierOptions

___

### templateId

• `Optional` **templateId**: `string`

ID of template to use when sending a reply

**`Memberof`**

CreateInboxReplierOptions

___

### templateVariables

• `Optional` **templateVariables**: `Object`

Template variable values

**`Memberof`**

CreateInboxReplierOptions

#### Index signature

▪ [key: `string`]: `object`
