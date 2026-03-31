[MailSlurp JS](../README.md) / EmailIntelligenceResultDto

# Interface: EmailIntelligenceResultDto

Email intelligence result for a single input.

**`Export`**

**`Interface`**

EmailIntelligenceResultDto

## Table of contents

### Properties

- [input](EmailIntelligenceResultDto.md#input)
- [scoreBreakdown](EmailIntelligenceResultDto.md#scorebreakdown)
- [signals](EmailIntelligenceResultDto.md#signals)
- [totalScore](EmailIntelligenceResultDto.md#totalscore)

## Properties

### input

• **input**: `string`

Original input value before normalization.

**`Memberof`**

EmailIntelligenceResultDto

___

### scoreBreakdown

• **scoreBreakdown**: [`EmailIntelligenceScoreBreakdownDto`](EmailIntelligenceScoreBreakdownDto.md)

**`Memberof`**

EmailIntelligenceResultDto

___

### signals

• **signals**: [`EmailIntelligenceSignalsDto`](EmailIntelligenceSignalsDto.md)

**`Memberof`**

EmailIntelligenceResultDto

___

### totalScore

• **totalScore**: `number`

Score from 0 to 100 where higher is better.

**`Memberof`**

EmailIntelligenceResultDto
