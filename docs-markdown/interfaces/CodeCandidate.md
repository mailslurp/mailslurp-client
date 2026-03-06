[MailSlurp JS](../README.md) / CodeCandidate

# Interface: CodeCandidate

Candidate verification code extracted from content

**`Export`**

**`Interface`**

CodeCandidate

## Table of contents

### Properties

- [code](CodeCandidate.md#code)
- [confidence](CodeCandidate.md#confidence)
- [context](CodeCandidate.md#context)
- [method](CodeCandidate.md#method)
- [source](CodeCandidate.md#source)

## Properties

### code

• **code**: `string`

Extracted code value

**`Memberof`**

CodeCandidate

___

### confidence

• **confidence**: `number`

Relative confidence score from 0 to 1

**`Memberof`**

CodeCandidate

___

### context

• `Optional` **context**: `string`

Nearby text context useful for debugging extraction decisions

**`Memberof`**

CodeCandidate

___

### method

• **method**: [`CodeCandidateMethodEnum`](../enums/CodeCandidateMethodEnum.md)

Extraction strategy for verification codes. Unsupported strategies may fall back when allowFallback is true.

**`Memberof`**

CodeCandidate

___

### source

• **source**: `string`

Source fragment used for extraction, for example RAW_TEXT_PART or SMS_BODY

**`Memberof`**

CodeCandidate
