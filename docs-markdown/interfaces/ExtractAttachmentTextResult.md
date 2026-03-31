[MailSlurp JS](../README.md) / ExtractAttachmentTextResult

# Interface: ExtractAttachmentTextResult

Extracted text result for an attachment

**`Export`**

**`Interface`**

ExtractAttachmentTextResult

## Table of contents

### Properties

- [contentType](ExtractAttachmentTextResult.md#contenttype)
- [methodUsed](ExtractAttachmentTextResult.md#methodused)
- [present](ExtractAttachmentTextResult.md#present)
- [text](ExtractAttachmentTextResult.md#text)
- [warnings](ExtractAttachmentTextResult.md#warnings)

## Properties

### contentType

• `Optional` **contentType**: `string`

Detected attachment content type

**`Memberof`**

ExtractAttachmentTextResult

___

### methodUsed

• `Optional` **methodUsed**: [`ExtractAttachmentTextResultMethodUsedEnum`](../enums/ExtractAttachmentTextResultMethodUsedEnum.md)

Method for extracting text from attachments.

**`Memberof`**

ExtractAttachmentTextResult

___

### present

• **present**: `boolean`

True if extracted text is present

**`Memberof`**

ExtractAttachmentTextResult

___

### text

• `Optional` **text**: `string`

Extracted text when present

**`Memberof`**

ExtractAttachmentTextResult

___

### warnings

• **warnings**: `string`[]

Warnings or fallback notes

**`Memberof`**

ExtractAttachmentTextResult
