# Interface: CreateInboxForwarderOptions

Options for creating an inbox forwarder

**`export`**

**`interface`** CreateInboxForwarderOptions

## Table of contents

### Properties

- [field](CreateInboxForwarderOptions.md#field)
- [forwardToRecipients](CreateInboxForwarderOptions.md#forwardtorecipients)
- [match](CreateInboxForwarderOptions.md#match)

## Properties

### field

• `Optional` **field**: [`CreateInboxForwarderOptionsFieldEnum`](../enums/CreateInboxForwarderOptionsFieldEnum.md)

Field to match against to trigger inbox forwarding for inbound email

**`memberof`** CreateInboxForwarderOptions

___

### forwardToRecipients

• `Optional` **forwardToRecipients**: `string`[]

Email addresses to forward an email to if it matches the field and match criteria of the forwarder

**`memberof`** CreateInboxForwarderOptions

___

### match

• `Optional` **match**: `string`

String or wildcard style match for field specified when evaluating forwarding rules

**`memberof`** CreateInboxForwarderOptions
