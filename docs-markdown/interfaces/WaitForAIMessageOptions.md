[MailSlurp JS](../README.md) / WaitForAIMessageOptions

# Interface: WaitForAIMessageOptions

Wait for the first qualifying email or SMS in chronological order, then assert and extract from that same message. since is required to avoid selecting messages from previous test runs. Rejected candidates and selected messages remain unread unless a legacy endpoint normally marks the returned message read.

**`Export`**

**`Interface`**

WaitForAIMessageOptions

## Table of contents

### Properties

- [aiOptions](WaitForAIMessageOptions.md#aioptions)
- [assertions](WaitForAIMessageOptions.md#assertions)
- [before](WaitForAIMessageOptions.md#before)
- [emailMatchOptions](WaitForAIMessageOptions.md#emailmatchoptions)
- [extractionPreset](WaitForAIMessageOptions.md#extractionpreset)
- [instructions](WaitForAIMessageOptions.md#instructions)
- [match](WaitForAIMessageOptions.md#match)
- [outputSchema](WaitForAIMessageOptions.md#outputschema)
- [scope](WaitForAIMessageOptions.md#scope)
- [since](WaitForAIMessageOptions.md#since)
- [smsMatchOptions](WaitForAIMessageOptions.md#smsmatchoptions)
- [sortDirection](WaitForAIMessageOptions.md#sortdirection)
- [timeout](WaitForAIMessageOptions.md#timeout)
- [transformId](WaitForAIMessageOptions.md#transformid)
- [unreadOnly](WaitForAIMessageOptions.md#unreadonly)

## Properties

### aiOptions

• **aiOptions**: [`AIMessageAIOptions`](AIMessageAIOptions.md)

**`Memberof`**

WaitForAIMessageOptions

___

### assertions

• **assertions**: [`AIMessageAssertion`](AIMessageAssertion.md)[]

**`Memberof`**

WaitForAIMessageOptions

___

### before

• `Optional` **before**: `Date`

**`Memberof`**

WaitForAIMessageOptions

___

### emailMatchOptions

• `Optional` **emailMatchOptions**: [`MatchOptions`](MatchOptions.md)

**`Memberof`**

WaitForAIMessageOptions

___

### extractionPreset

• `Optional` **extractionPreset**: [`OTP_CODE`](../enums/WaitForAIMessageOptionsExtractionPresetEnum.md#otp_code)

Built-in extraction schema. OTP_CODE returns data.code as a verbatim string, preserving leading zeros and letter case. Missing or equally eligible codes are INCONCLUSIVE.

**`Memberof`**

WaitForAIMessageOptions

___

### instructions

• `Optional` **instructions**: `string`

**`Memberof`**

WaitForAIMessageOptions

___

### match

• `Optional` **match**: [`AIMessageMatchOptions`](AIMessageMatchOptions.md)

**`Memberof`**

WaitForAIMessageOptions

___

### outputSchema

• `Optional` **outputSchema**: [`StructuredOutputSchema`](StructuredOutputSchema.md)

**`Memberof`**

WaitForAIMessageOptions

___

### scope

• **scope**: [`AIMessageScope`](AIMessageScope.md)

**`Memberof`**

WaitForAIMessageOptions

___

### since

• **since**: `Date`

**`Memberof`**

WaitForAIMessageOptions

___

### smsMatchOptions

• `Optional` **smsMatchOptions**: [`SmsMatchOptions`](SmsMatchOptions.md)

**`Memberof`**

WaitForAIMessageOptions

___

### sortDirection

• **sortDirection**: [`WaitForAIMessageOptionsSortDirectionEnum`](../enums/WaitForAIMessageOptionsSortDirectionEnum.md)

**`Memberof`**

WaitForAIMessageOptions

___

### timeout

• **timeout**: `number`

**`Memberof`**

WaitForAIMessageOptions

___

### transformId

• `Optional` **transformId**: `string`

**`Memberof`**

WaitForAIMessageOptions

___

### unreadOnly

• **unreadOnly**: `boolean`

**`Memberof`**

WaitForAIMessageOptions
