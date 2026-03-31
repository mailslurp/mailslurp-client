[MailSlurp JS](../README.md) / CreateInboxForwarderOptions

# Interface: CreateInboxForwarderOptions

Options for creating an inbox forwarder

**`Export`**

**`Interface`**

CreateInboxForwarderOptions

## Table of contents

### Properties

- [attachmentTextExtractionMethod](CreateInboxForwarderOptions.md#attachmenttextextractionmethod)
- [field](CreateInboxForwarderOptions.md#field)
- [forwardToRecipients](CreateInboxForwarderOptions.md#forwardtorecipients)
- [match](CreateInboxForwarderOptions.md#match)
- [matchOptions](CreateInboxForwarderOptions.md#matchoptions)
- [should](CreateInboxForwarderOptions.md#should)

## Properties

### attachmentTextExtractionMethod

• `Optional` **attachmentTextExtractionMethod**: [`CreateInboxForwarderOptionsAttachmentTextExtractionMethodEnum`](../enums/CreateInboxForwarderOptionsAttachmentTextExtractionMethodEnum.md)

Method for extracting text from attachments.

**`Memberof`**

CreateInboxForwarderOptions

___

### field

• `Optional` **field**: [`CreateInboxForwarderOptionsFieldEnum`](../enums/CreateInboxForwarderOptionsFieldEnum.md)

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

• `Optional` **match**: `string`

String or wildcard style match for field specified when evaluating forwarding rules

**`Memberof`**

CreateInboxForwarderOptions

___

### matchOptions

• `Optional` **matchOptions**: [`InboxAutomationMatchOptions`](InboxAutomationMatchOptions.md)

**`Memberof`**

CreateInboxForwarderOptions

___

### should

• `Optional` **should**: [`CreateInboxForwarderOptionsShouldEnum`](../enums/CreateInboxForwarderOptionsShouldEnum.md)

Comparison mode for inbox automation matching.

**`Memberof`**

CreateInboxForwarderOptions
