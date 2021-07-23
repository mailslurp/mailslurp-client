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

*Defined in [src/generated/api.ts:3023](https://github.com/mailslurp/mailslurp-client/blob/c5e5f20/src/generated/api.ts#L3023)*

The email property to match on. One of SUBJECT, TO, BCC, CC or FROM

**`memberof`** MatchOption

___

### should

• `Optional` **should**: [ShouldEnum](../enums/matchoption.shouldenum.md)

*Defined in [src/generated/api.ts:3029](https://github.com/mailslurp/mailslurp-client/blob/c5e5f20/src/generated/api.ts#L3029)*

What criteria to apply. CONTAIN or EQUAL. Note CONTAIN is recommended due to some SMTP servers adding new lines to fields and body content.

**`memberof`** MatchOption

___

### value

• `Optional` **value**: string

*Defined in [src/generated/api.ts:3035](https://github.com/mailslurp/mailslurp-client/blob/c5e5f20/src/generated/api.ts#L3035)*

The value you wish to compare with the value of the field specified using the `should` value passed. For example `BODY` should `CONTAIN` a value passed.

**`memberof`** MatchOption
