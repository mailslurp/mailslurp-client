[MailSlurp JS](../README.md) / AIMessageAIOptions

# Interface: AIMessageAIOptions

AI evaluator and execution limits. Tokens are weighted AI allowance units, shared across all candidates and expectations in a request. Confidence is model-reported, not a calibrated probability.

**`Export`**

**`Interface`**

AIMessageAIOptions

## Table of contents

### Properties

- [maxCandidates](AIMessageAIOptions.md#maxcandidates)
- [maxOutputTokens](AIMessageAIOptions.md#maxoutputtokens)
- [maxTokens](AIMessageAIOptions.md#maxtokens)
- [minimumConfidence](AIMessageAIOptions.md#minimumconfidence)
- [model](AIMessageAIOptions.md#model)

## Properties

### maxCandidates

• **maxCandidates**: `number`

**`Memberof`**

AIMessageAIOptions

___

### maxOutputTokens

• **maxOutputTokens**: `number`

**`Memberof`**

AIMessageAIOptions

___

### maxTokens

• **maxTokens**: `number`

**`Memberof`**

AIMessageAIOptions

___

### minimumConfidence

• `Optional` **minimumConfidence**: `number`

Optional advanced abstention threshold for model-reported confidence. Below it the decision is INCONCLUSIVE. It does not guarantee accuracy or cause reevaluation.

**`Memberof`**

AIMessageAIOptions

___

### model

• **model**: [`AIMessageAIOptionsModelEnum`](../enums/AIMessageAIOptionsModelEnum.md)

**`Memberof`**

AIMessageAIOptions
