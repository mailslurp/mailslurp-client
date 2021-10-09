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

• `Optional` **condition**: [`HAS_ATTACHMENTS`](../enums/ConditionOptionConditionEnum.md#has_attachments)

The condition to evaluate against the email

**`memberof`** ConditionOption

___

### value

• `Optional` **value**: [`ConditionOptionValueEnum`](../enums/ConditionOptionValueEnum.md)

What the condition should evaluate to. A string 'TRUE|FALSE' not a boolean.

**`memberof`** ConditionOption
