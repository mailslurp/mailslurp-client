[MailSlurp JS](../README.md) / MatchOption

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

### field

• `Optional` **field**: [`MatchOptionFieldEnum`](../enums/MatchOptionFieldEnum.md)

The email property to match on. One of SUBJECT, TO, BCC, CC or FROM

**`memberof`** MatchOption

___

### should

• `Optional` **should**: [`MatchOptionShouldEnum`](../enums/MatchOptionShouldEnum.md)

What criteria to apply. CONTAIN or EQUAL. Note CONTAIN is recommended due to some SMTP servers adding new lines to fields and body content.

**`memberof`** MatchOption

___

### value

• `Optional` **value**: `string`

The value you wish to compare with the value of the field specified using the `should` value passed. For example `BODY` should `CONTAIN` a value passed.

**`memberof`** MatchOption
