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

### <a id="field" name="field"></a> field

• **field**: [`CreateInboxForwarderOptionsFieldEnum`](../enums/CreateInboxForwarderOptionsFieldEnum.md)

Field to match against to trigger inbox forwarding for inbound email

**`memberof`** CreateInboxForwarderOptions

___

### <a id="forwardtorecipients" name="forwardtorecipients"></a> forwardToRecipients

• **forwardToRecipients**: `string`[]

Email addresses to forward an email to if it matches the field and match criteria of the forwarder

**`memberof`** CreateInboxForwarderOptions

___

### <a id="match" name="match"></a> match

• **match**: `string`

String or wildcard style match for field specified when evaluating forwarding rules

**`memberof`** CreateInboxForwarderOptions
