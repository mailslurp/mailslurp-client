[MailSlurp JS](../README.md) / GenerateStructuredContentEmailOptions

# Interface: GenerateStructuredContentEmailOptions

Options for generating structured content output from an email

**`Export`**

**`Interface`**

GenerateStructuredContentEmailOptions

## Table of contents

### Properties

- [contentSelector](GenerateStructuredContentEmailOptions.md#contentselector)
- [emailId](GenerateStructuredContentEmailOptions.md#emailid)
- [instructions](GenerateStructuredContentEmailOptions.md#instructions)
- [outputSchema](GenerateStructuredContentEmailOptions.md#outputschema)
- [transformId](GenerateStructuredContentEmailOptions.md#transformid)

## Properties

### contentSelector

• `Optional` **contentSelector**: [`GenerateStructuredContentEmailOptionsContentSelectorEnum`](../enums/GenerateStructuredContentEmailOptionsContentSelectorEnum.md)

Content selector to select part of email to operate on

**`Memberof`**

GenerateStructuredContentEmailOptions

___

### emailId

• **emailId**: `string`

Email ID to read and pass to AI

**`Memberof`**

GenerateStructuredContentEmailOptions

___

### instructions

• `Optional` **instructions**: `string`

Optional instructions for the AI to follow. Try to be precise and clear. You can include examples and hints.

**`Memberof`**

GenerateStructuredContentEmailOptions

___

### outputSchema

• `Optional` **outputSchema**: [`StructuredOutputSchema`](StructuredOutputSchema.md)

**`Memberof`**

GenerateStructuredContentEmailOptions

___

### transformId

• `Optional` **transformId**: `string`

ID of transformer to apply

**`Memberof`**

GenerateStructuredContentEmailOptions
