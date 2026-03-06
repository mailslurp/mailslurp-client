[MailSlurp JS](../README.md) / DeliverabilitySelectorOptions

# Interface: DeliverabilitySelectorOptions

How entities are selected for a deliverability test

**`Export`**

**`Interface`**

DeliverabilitySelectorOptions

## Table of contents

### Properties

- [entityIds](DeliverabilitySelectorOptions.md#entityids)
- [excludeEntityIds](DeliverabilitySelectorOptions.md#excludeentityids)
- [pattern](DeliverabilitySelectorOptions.md#pattern)
- [phoneCountry](DeliverabilitySelectorOptions.md#phonecountry)
- [type](DeliverabilitySelectorOptions.md#type)

## Properties

### entityIds

• `Optional` **entityIds**: `string`[]

Explicit entity IDs for EXPLICIT selection

**`Memberof`**

DeliverabilitySelectorOptions

___

### excludeEntityIds

• `Optional` **excludeEntityIds**: `string`[]

Optional entity IDs to exclude from the resolved selection (applies after ALL/PATTERN/EXPLICIT selection).

**`Memberof`**

DeliverabilitySelectorOptions

___

### pattern

• `Optional` **pattern**: `string`

Wildcard pattern for PATTERN selection. Supports '*' and '?' wildcards. If no wildcard is present the value is treated as a case-insensitive contains match.

**`Memberof`**

DeliverabilitySelectorOptions

___

### phoneCountry

• `Optional` **phoneCountry**: [`DeliverabilitySelectorOptionsPhoneCountryEnum`](../enums/DeliverabilitySelectorOptionsPhoneCountryEnum.md)

Optional phone-country filter for PHONE scope selection (e.g. ALL phones in US). Must be null for INBOX scope.

**`Memberof`**

DeliverabilitySelectorOptions

___

### type

• **type**: [`DeliverabilitySelectorOptionsTypeEnum`](../enums/DeliverabilitySelectorOptionsTypeEnum.md)

Selection mode

**`Memberof`**

DeliverabilitySelectorOptions
