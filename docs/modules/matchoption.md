**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / MatchOption

# Namespace: MatchOption

**`export`** 

**`namespace`** MatchOption

## Index

### Enumerations

* [FieldEnum](../enums/matchoption.fieldenum.md)
* [ShouldEnum](../enums/matchoption.shouldenum.md)

### Properties

* [field](matchoption.md#field)
* [should](matchoption.md#should)
* [value](matchoption.md#value)

## Properties

### field

• `Optional` **field**: [FieldEnum](../enums/matchoption.fieldenum.md)

*Defined in [src/generated/api.ts:2803](https://github.com/mailslurp/mailslurp-client/blob/730b817/src/generated/api.ts#L2803)*

The email property to match on. One of SUBJECT, TO, BCC, CC or FROM

**`memberof`** MatchOption

___

### should

• `Optional` **should**: [ShouldEnum](../enums/matchoption.shouldenum.md)

*Defined in [src/generated/api.ts:2809](https://github.com/mailslurp/mailslurp-client/blob/730b817/src/generated/api.ts#L2809)*

What criteria to apply. CONTAIN or EQUAL. Note CONTAIN is recommended due to some SMTP servers adding new lines to fields and body content.

**`memberof`** MatchOption

___

### value

• `Optional` **value**: string

*Defined in [src/generated/api.ts:2815](https://github.com/mailslurp/mailslurp-client/blob/730b817/src/generated/api.ts#L2815)*

The value you wish to compare with the value of the field specified using the `should` value passed. For example `BODY` should `CONTAIN` a value passed.

**`memberof`** MatchOption
