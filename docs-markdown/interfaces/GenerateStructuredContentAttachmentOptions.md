[MailSlurp JS](../README.md) / GenerateStructuredContentAttachmentOptions

# Interface: GenerateStructuredContentAttachmentOptions

Options for generating structured content output from an attachment

**`Export`**

**`Interface`**

GenerateStructuredContentAttachmentOptions

## Table of contents

### Properties

- [attachmentId](GenerateStructuredContentAttachmentOptions.md#attachmentid)
- [emailId](GenerateStructuredContentAttachmentOptions.md#emailid)
- [instructions](GenerateStructuredContentAttachmentOptions.md#instructions)
- [outputSchema](GenerateStructuredContentAttachmentOptions.md#outputschema)
- [transformId](GenerateStructuredContentAttachmentOptions.md#transformid)

## Properties

### attachmentId

• **attachmentId**: `string`

Attachment ID to read and pass to AI

**`Memberof`**

GenerateStructuredContentAttachmentOptions

___

### emailId

• `Optional` **emailId**: `string`

Optional email ID for more context

**`Memberof`**

GenerateStructuredContentAttachmentOptions

___

### instructions

• `Optional` **instructions**: `string`

Optional instructions for the AI to follow. Try to be precise and clear. You can include examples and hints.

**`Memberof`**

GenerateStructuredContentAttachmentOptions

___

### outputSchema

• `Optional` **outputSchema**: [`StructuredOutputSchema`](StructuredOutputSchema.md)

**`Memberof`**

GenerateStructuredContentAttachmentOptions

___

### transformId

• `Optional` **transformId**: `string`

ID of transformer to apply

**`Memberof`**

GenerateStructuredContentAttachmentOptions
