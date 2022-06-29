# Interface: SmsMatchOption

Options for matching SMS messages in a phone number. Each match option object contains a `field`, `should` and `value` property. Together they form logical conditions such as `BODY` should `CONTAIN` value.

**`export`**

**`interface`** SmsMatchOption

## Table of contents

### Properties

- [field](SmsMatchOption.md#field)
- [should](SmsMatchOption.md#should)
- [value](SmsMatchOption.md#value)

## Properties

### <a id="field" name="field"></a> field

• **field**: [`SmsMatchOptionFieldEnum`](../enums/SmsMatchOptionFieldEnum.md)

Fields of an SMS object that can be used to filter results

**`memberof`** SmsMatchOption

___

### <a id="should" name="should"></a> should

• **should**: [`SmsMatchOptionShouldEnum`](../enums/SmsMatchOptionShouldEnum.md)

How the value of the email field specified should be compared to the value given in the match options.

**`memberof`** SmsMatchOption

___

### <a id="value" name="value"></a> value

• **value**: `string`

The value you wish to compare with the value of the field specified using the `should` value passed. For example `BODY` should `CONTAIN` a value passed.

**`memberof`** SmsMatchOption
