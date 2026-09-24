[MailSlurp JS](../README.md) / ExtractAIMessageOptions

# Interface: ExtractAIMessageOptions

Extract structured data from an existing email or SMS. Supply exactly one of extractionPreset, outputSchema or transformId. Required strings must be grounded in source evidence; missing or ambiguous fields are reported as INCONCLUSIVE.

**`Export`**

**`Interface`**

ExtractAIMessageOptions

## Table of contents

### Properties

- [aiOptions](ExtractAIMessageOptions.md#aioptions)
- [extractionPreset](ExtractAIMessageOptions.md#extractionpreset)
- [instructions](ExtractAIMessageOptions.md#instructions)
- [message](ExtractAIMessageOptions.md#message)
- [outputSchema](ExtractAIMessageOptions.md#outputschema)
- [timeout](ExtractAIMessageOptions.md#timeout)
- [transformId](ExtractAIMessageOptions.md#transformid)

## Properties

### aiOptions

• **aiOptions**: [`AIMessageAIOptions`](AIMessageAIOptions.md)

**`Memberof`**

ExtractAIMessageOptions

___

### extractionPreset

• `Optional` **extractionPreset**: [`OTP_CODE`](../enums/ExtractAIMessageOptionsExtractionPresetEnum.md#otp_code)

Built-in extraction schema. OTP_CODE returns data.code as a verbatim string, preserving leading zeros and letter case. Missing or equally eligible codes are INCONCLUSIVE.

**`Memberof`**

ExtractAIMessageOptions

___

### instructions

• `Optional` **instructions**: `string`

**`Memberof`**

ExtractAIMessageOptions

___

### message

• **message**: [`AIMessageReference`](AIMessageReference.md)

**`Memberof`**

ExtractAIMessageOptions

___

### outputSchema

• `Optional` **outputSchema**: [`StructuredOutputSchema`](StructuredOutputSchema.md)

**`Memberof`**

ExtractAIMessageOptions

___

### timeout

• **timeout**: `number`

**`Memberof`**

ExtractAIMessageOptions

___

### transformId

• `Optional` **transformId**: `string`

**`Memberof`**

ExtractAIMessageOptions
