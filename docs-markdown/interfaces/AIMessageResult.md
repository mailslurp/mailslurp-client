[MailSlurp JS](../README.md) / AIMessageResult

# Interface: AIMessageResult

AI message evaluation, message payload and bounded diagnostics. Check status before using data. An assertion failure returns the selected message and never resumes searching. Evidence is verified against the message source. No model is silently substituted.

**`Export`**

**`Interface`**

AIMessageResult

## Table of contents

### Properties

- [assertionStatus](AIMessageResult.md#assertionstatus)
- [assertions](AIMessageResult.md#assertions)
- [candidates](AIMessageResult.md#candidates)
- [data](AIMessageResult.md#data)
- [elapsedMs](AIMessageResult.md#elapsedms)
- [email](AIMessageResult.md#email)
- [evaluationId](AIMessageResult.md#evaluationid)
- [extractionEvidence](AIMessageResult.md#extractionevidence)
- [extractionReason](AIMessageResult.md#extractionreason)
- [failedAssertionIds](AIMessageResult.md#failedassertionids)
- [match](AIMessageResult.md#match)
- [message](AIMessageResult.md#message)
- [model](AIMessageResult.md#model)
- [sms](AIMessageResult.md#sms)
- [status](AIMessageResult.md#status)
- [successful](AIMessageResult.md#successful)
- [summary](AIMessageResult.md#summary)
- [usage](AIMessageResult.md#usage)

## Properties

### assertionStatus

• `Optional` **assertionStatus**: [`AIMessageResultAssertionStatusEnum`](../enums/AIMessageResultAssertionStatusEnum.md)

**`Memberof`**

AIMessageResult

___

### assertions

• **assertions**: [`AIMessageAssertionResult`](AIMessageAssertionResult.md)[]

**`Memberof`**

AIMessageResult

___

### candidates

• **candidates**: [`AIMessageCandidateResult`](AIMessageCandidateResult.md)[]

**`Memberof`**

AIMessageResult

___

### data

• `Optional` **data**: `object`

Extracted JSON value conforming to the requested schema or extraction preset. Null when extraction is inconclusive or unavailable.

**`Memberof`**

AIMessageResult

___

### elapsedMs

• **elapsedMs**: `number`

**`Memberof`**

AIMessageResult

___

### email

• `Optional` **email**: [`Email`](Email.md)

**`Memberof`**

AIMessageResult

___

### evaluationId

• **evaluationId**: `string`

**`Memberof`**

AIMessageResult

___

### extractionEvidence

• **extractionEvidence**: `Object`

**`Memberof`**

AIMessageResult

#### Index signature

▪ [key: `string`]: [`AIMessageEvidence`](AIMessageEvidence.md)[]

___

### extractionReason

• `Optional` **extractionReason**: `string`

Explanation when extraction is inconclusive. May contain a model-reported explanation of missing or ambiguous fields, or a server evidence-validation failure. Diagnostic text, not a stable machine-readable status.

**`Memberof`**

AIMessageResult

___

### failedAssertionIds

• `Readonly` **failedAssertionIds**: `string`[]

**`Memberof`**

AIMessageResult

___

### match

• `Optional` **match**: [`AIMessageMatchResult`](AIMessageMatchResult.md)

**`Memberof`**

AIMessageResult

___

### message

• `Optional` **message**: [`AIMessageReference`](AIMessageReference.md)

**`Memberof`**

AIMessageResult

___

### model

• **model**: [`AIMessageModelDto`](AIMessageModelDto.md)

**`Memberof`**

AIMessageResult

___

### sms

• `Optional` **sms**: [`SmsDto`](SmsDto.md)

**`Memberof`**

AIMessageResult

___

### status

• **status**: [`AIMessageResultStatusEnum`](../enums/AIMessageResultStatusEnum.md)

**`Memberof`**

AIMessageResult

___

### successful

• `Readonly` **successful**: `boolean`

True only when all requested work succeeded. Assert this in tests and use summary as the assertion failure message.

**`Memberof`**

AIMessageResult

___

### summary

• **summary**: `string`

**`Memberof`**

AIMessageResult

___

### usage

• **usage**: [`AIMessageUsage`](AIMessageUsage.md)

**`Memberof`**

AIMessageResult
