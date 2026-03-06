[MailSlurp JS](../README.md) / AIMappingMatchOption

# Interface: AIMappingMatchOption

Options for matching when an AI transform mapping should trigger. Each match option object contains a `field`, `should` and `value` property. Together they form logical conditions such as `SUBJECT` should `CONTAIN` value.

**`Export`**

**`Interface`**

AIMappingMatchOption

## Table of contents

### Properties

- [field](AIMappingMatchOption.md#field)
- [should](AIMappingMatchOption.md#should)
- [value](AIMappingMatchOption.md#value)

## Properties

### field

• **field**: [`AIMappingMatchOptionFieldEnum`](../enums/AIMappingMatchOptionFieldEnum.md)

Fields of an email, sms, or attachment object that can be used to filter results

**`Memberof`**

AIMappingMatchOption

___

### should

• **should**: [`AIMappingMatchOptionShouldEnum`](../enums/AIMappingMatchOptionShouldEnum.md)

How the value of the field specified should be compared to the value given in the match options.

**`Memberof`**

AIMappingMatchOption

___

### value

• **value**: `string`

The value you wish to compare with the value of the field specified using the `should` value passed. For example `BODY` should `CONTAIN` a value passed. When should value is `MATCH` pass a regex

**`Memberof`**

AIMappingMatchOption
