# Interface: MatchOption

Options for matching emails in an inbox. Each match option object contains a `field`, `should` and `value` property. Together they form logical conditions such as `SUBJECT` should `CONTAIN` value.

**`export`**

**`interface`** MatchOption

## Table of contents

### Properties

- [field](MatchOption.md#field)
- [should](MatchOption.md#should)
- [value](MatchOption.md#value)

## Properties

### <a id="field" name="field"></a> field

• **field**: [`MatchOptionFieldEnum`](../enums/MatchOptionFieldEnum.md)

Fields of an email object that can be used to filter results

**`memberof`** MatchOption

___

### <a id="should" name="should"></a> should

• **should**: [`MatchOptionShouldEnum`](../enums/MatchOptionShouldEnum.md)

How the value of the email field specified should be compared to the value given in the match options.

**`memberof`** MatchOption

___

### <a id="value" name="value"></a> value

• **value**: `string`

The value you wish to compare with the value of the field specified using the `should` value passed. For example `BODY` should `CONTAIN` a value passed.

**`memberof`** MatchOption
