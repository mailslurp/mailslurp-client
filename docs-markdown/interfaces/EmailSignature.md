[MailSlurp JS](../README.md) / EmailSignature

# Interface: EmailSignature

Parsed signature block detected in an email

**`Export`**

**`Interface`**

EmailSignature

## Table of contents

### Properties

- [body](EmailSignature.md#body)
- [detectionType](EmailSignature.md#detectiontype)
- [marker](EmailSignature.md#marker)
- [source](EmailSignature.md#source)

## Properties

### body

• **body**: `string`

Extracted signature text

**`Memberof`**

EmailSignature

___

### detectionType

• **detectionType**: `string`

Detection strategy used. Examples: DELIMITER, MOBILE_FOOTER, VALEDICTION

**`Memberof`**

EmailSignature

___

### marker

• `Optional` **marker**: `string`

Matched marker or selector that identified the signature

**`Memberof`**

EmailSignature

___

### source

• **source**: `string`

Source used for extraction. Examples: RAW_TEXT_PART, RAW_HTML_SELECTOR

**`Memberof`**

EmailSignature
