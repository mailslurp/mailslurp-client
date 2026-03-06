[MailSlurp JS](../README.md) / ExtractCodesResult

# Interface: ExtractCodesResult

Result of extracting verification codes from message content

**`Export`**

**`Interface`**

ExtractCodesResult

## Table of contents

### Properties

- [candidates](ExtractCodesResult.md#candidates)
- [code](ExtractCodesResult.md#code)
- [found](ExtractCodesResult.md#found)
- [methodUsed](ExtractCodesResult.md#methodused)
- [warnings](ExtractCodesResult.md#warnings)

## Properties

### candidates

• **candidates**: [`CodeCandidate`](CodeCandidate.md)[]

Ranked code candidates

**`Memberof`**

ExtractCodesResult

___

### code

• `Optional` **code**: `string`

Best candidate code when found

**`Memberof`**

ExtractCodesResult

___

### found

• **found**: `boolean`

True if at least one code candidate was found

**`Memberof`**

ExtractCodesResult

___

### methodUsed

• `Optional` **methodUsed**: [`ExtractCodesResultMethodUsedEnum`](../enums/ExtractCodesResultMethodUsedEnum.md)

Extraction strategy for verification codes. Unsupported strategies may fall back when allowFallback is true.

**`Memberof`**

ExtractCodesResult

___

### warnings

• **warnings**: `string`[]

Warnings or fallback notes explaining extraction behavior for debugging and QA.

**`Memberof`**

ExtractCodesResult
