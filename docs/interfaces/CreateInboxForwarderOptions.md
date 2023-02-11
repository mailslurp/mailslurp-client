[MailSlurp JS](../README.md) / CreateInboxForwarderOptions

# Interface: CreateInboxForwarderOptions

Options for creating an inbox forwarder

**`Export`**

**`Interface`**

CreateInboxForwarderOptions

## Table of contents

### Properties

- [field](CreateInboxForwarderOptions.md#field)
- [forwardToRecipients](CreateInboxForwarderOptions.md#forwardtorecipients)
- [match](CreateInboxForwarderOptions.md#match)

## Properties

### field

• **field**: [`CreateInboxForwarderOptionsFieldEnum`](../enums/CreateInboxForwarderOptionsFieldEnum.md)

Field to match against to trigger inbox forwarding for inbound email

**`Memberof`**

CreateInboxForwarderOptions

___

### forwardToRecipients

• **forwardToRecipients**: `string`[]

Email addresses to forward an email to if it matches the field and match criteria of the forwarder

**`Memberof`**

CreateInboxForwarderOptions

___

### match

• **match**: `string`

String or wildcard style match for field specified when evaluating forwarding rules

**`Memberof`**

CreateInboxForwarderOptions
