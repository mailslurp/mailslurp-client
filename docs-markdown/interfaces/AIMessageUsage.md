[MailSlurp JS](../README.md) / AIMessageUsage

# Interface: AIMessageUsage

**`Export`**

**`Interface`**

AIMessageUsage

## Table of contents

### Properties

- [candidatesEvaluated](AIMessageUsage.md#candidatesevaluated)
- [complete](AIMessageUsage.md#complete)
- [reservedTokens](AIMessageUsage.md#reservedtokens)
- [tokens](AIMessageUsage.md#tokens)

## Properties

### candidatesEvaluated

• **candidatesEvaluated**: `number`

**`Memberof`**

AIMessageUsage

___

### complete

• **complete**: `boolean`

False when a timed-out provider invocation is still settling. The reservation remains held and actual usage is settled when it finishes.

**`Memberof`**

AIMessageUsage

___

### reservedTokens

• **reservedTokens**: `number`

AI tokens held for provider attempts with unknown usage. Excluded from tokens; complete remains false until reconciliation.

**`Memberof`**

AIMessageUsage

___

### tokens

• **tokens**: `number`

Consumed MailSlurp AI tokens after applying the model multiplier. These are not raw provider tokens.

**`Memberof`**

AIMessageUsage
