[MailSlurp JS](../README.md) / ConditionOption

# Interface: ConditionOption

Options for matching emails in an inbox based on a condition such as `HAS_ATTACHMENTS=TRUE`

**`export`**

**`interface`** ConditionOption

## Table of contents

### Properties

- [condition](ConditionOption.md#condition)
- [value](ConditionOption.md#value)

## Properties

### condition

• `Optional` **condition**: [`ConditionEnum`](../enums/ConditionOption.ConditionEnum.md)

The condition to evaluate against the email

**`memberof`** ConditionOption

#### Defined in

[src/generated/api.ts:619](https://github.com/mailslurp/mailslurp-client/blob/8c02983/src/generated/api.ts#L619)

___

### value

• `Optional` **value**: [`ValueEnum`](../enums/ConditionOption.ValueEnum.md)

What the condition should evaluate to. A string 'TRUE|FALSE' not a boolean.

**`memberof`** ConditionOption

#### Defined in

[src/generated/api.ts:625](https://github.com/mailslurp/mailslurp-client/blob/8c02983/src/generated/api.ts#L625)
