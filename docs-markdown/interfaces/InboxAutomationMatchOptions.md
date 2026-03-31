[MailSlurp JS](../README.md) / InboxAutomationMatchOptions

# Interface: InboxAutomationMatchOptions

Nested AND/OR match tree for inbox forwarders and repliers.

**`Export`**

**`Interface`**

InboxAutomationMatchOptions

## Table of contents

### Properties

- [groups](InboxAutomationMatchOptions.md#groups)
- [matches](InboxAutomationMatchOptions.md#matches)
- [operator](InboxAutomationMatchOptions.md#operator)

## Properties

### groups

• `Optional` **groups**: [`InboxAutomationMatchOptions`](InboxAutomationMatchOptions.md)[]

Nested child groups.

**`Memberof`**

InboxAutomationMatchOptions

___

### matches

• `Optional` **matches**: [`InboxAutomationMatchOption`](InboxAutomationMatchOption.md)[]

Leaf match rules in this group.

**`Memberof`**

InboxAutomationMatchOptions

___

### operator

• **operator**: [`InboxAutomationMatchOptionsOperatorEnum`](../enums/InboxAutomationMatchOptionsOperatorEnum.md)

Boolean operator used to combine inbox automation match rules.

**`Memberof`**

InboxAutomationMatchOptions
