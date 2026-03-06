[MailSlurp JS](../README.md) / ExtractCodesOptions

# Interface: ExtractCodesOptions

Options for extracting verification codes from email or SMS content. Use method to control extraction strategy and allowFallback to control strictness.

**`Export`**

**`Interface`**

ExtractCodesOptions

## Table of contents

### Properties

- [allowFallback](ExtractCodesOptions.md#allowfallback)
- [customPatterns](ExtractCodesOptions.md#custompatterns)
- [maxCandidates](ExtractCodesOptions.md#maxcandidates)
- [maxLength](ExtractCodesOptions.md#maxlength)
- [method](ExtractCodesOptions.md#method)
- [minLength](ExtractCodesOptions.md#minlength)

## Properties

### allowFallback

• `Optional` **allowFallback**: `boolean`

Allow fallback to deterministic pattern extraction when the selected method is unavailable.

**`Memberof`**

ExtractCodesOptions

___

### customPatterns

• `Optional` **customPatterns**: `string`[]

Optional custom regex patterns for code extraction. Each pattern should have either one capture group for the code or match the full code directly.

**`Memberof`**

ExtractCodesOptions

___

### maxCandidates

• `Optional` **maxCandidates**: `number`

Maximum number of code candidates to return. Best candidate is also returned separately.

**`Memberof`**

ExtractCodesOptions

___

### maxLength

• `Optional` **maxLength**: `number`

Maximum code length to consider.

**`Memberof`**

ExtractCodesOptions

___

### method

• `Optional` **method**: [`ExtractCodesOptionsMethodEnum`](../enums/ExtractCodesOptionsMethodEnum.md)

Extraction strategy for verification codes. Unsupported strategies may fall back when allowFallback is true.

**`Memberof`**

ExtractCodesOptions

___

### minLength

• `Optional` **minLength**: `number`

Minimum code length to consider. Typical OTP values are between 4 and 8 characters.

**`Memberof`**

ExtractCodesOptions
