[MailSlurp JS](../README.md) / AIMessageExpectation

# Interface: AIMessageExpectation

One independently tracked delivery expectation. By default, each expectation must select a distinct message.

**`Export`**

**`Interface`**

AIMessageExpectation

## Table of contents

### Properties

- [assertions](AIMessageExpectation.md#assertions)
- [emailMatchOptions](AIMessageExpectation.md#emailmatchoptions)
- [extractionPreset](AIMessageExpectation.md#extractionpreset)
- [id](AIMessageExpectation.md#id)
- [instructions](AIMessageExpectation.md#instructions)
- [match](AIMessageExpectation.md#match)
- [outputSchema](AIMessageExpectation.md#outputschema)
- [scope](AIMessageExpectation.md#scope)
- [smsMatchOptions](AIMessageExpectation.md#smsmatchoptions)
- [transformId](AIMessageExpectation.md#transformid)

## Properties

### assertions

• **assertions**: [`AIMessageAssertion`](AIMessageAssertion.md)[]

**`Memberof`**

AIMessageExpectation

___

### emailMatchOptions

• `Optional` **emailMatchOptions**: [`MatchOptions`](MatchOptions.md)

**`Memberof`**

AIMessageExpectation

___

### extractionPreset

• `Optional` **extractionPreset**: [`OTP_CODE`](../enums/AIMessageExpectationExtractionPresetEnum.md#otp_code)

Built-in extraction schema. OTP_CODE returns data.code as a verbatim string, preserving leading zeros and letter case. Missing or equally eligible codes are INCONCLUSIVE.

**`Memberof`**

AIMessageExpectation

___

### id

• **id**: `string`

**`Memberof`**

AIMessageExpectation

___

### instructions

• `Optional` **instructions**: `string`

**`Memberof`**

AIMessageExpectation

___

### match

• `Optional` **match**: [`AIMessageMatchOptions`](AIMessageMatchOptions.md)

**`Memberof`**

AIMessageExpectation

___

### outputSchema

• `Optional` **outputSchema**: [`StructuredOutputSchema`](StructuredOutputSchema.md)

**`Memberof`**

AIMessageExpectation

___

### scope

• **scope**: [`AIMessageScope`](AIMessageScope.md)

**`Memberof`**

AIMessageExpectation

___

### smsMatchOptions

• `Optional` **smsMatchOptions**: [`SmsMatchOptions`](SmsMatchOptions.md)

**`Memberof`**

AIMessageExpectation

___

### transformId

• `Optional` **transformId**: `string`

**`Memberof`**

AIMessageExpectation
