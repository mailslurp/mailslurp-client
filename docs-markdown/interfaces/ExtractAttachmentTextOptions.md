[MailSlurp JS](../README.md) / ExtractAttachmentTextOptions

# Interface: ExtractAttachmentTextOptions

Options for extracting text from an attachment. Choose a method and whether fallback is allowed.

**`Export`**

**`Interface`**

ExtractAttachmentTextOptions

## Table of contents

### Properties

- [allowFallback](ExtractAttachmentTextOptions.md#allowfallback)
- [maxBytes](ExtractAttachmentTextOptions.md#maxbytes)
- [method](ExtractAttachmentTextOptions.md#method)

## Properties

### allowFallback

• `Optional` **allowFallback**: `boolean`

Allow fallback to native extraction when the selected method is unavailable.

**`Memberof`**

ExtractAttachmentTextOptions

___

### maxBytes

• `Optional` **maxBytes**: `number`

Maximum bytes to read from attachment for native text extraction.

**`Memberof`**

ExtractAttachmentTextOptions

___

### method

• `Optional` **method**: [`ExtractAttachmentTextOptionsMethodEnum`](../enums/ExtractAttachmentTextOptionsMethodEnum.md)

Method for extracting text from attachments. OCR/LLM methods are reserved for advanced extraction.

**`Memberof`**

ExtractAttachmentTextOptions
