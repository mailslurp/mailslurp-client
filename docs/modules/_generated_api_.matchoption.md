[MailSlurp JS](../README.md) › [Globals](../globals.md) › ["generated/api"](_generated_api_.md) › [MatchOption](_generated_api_.matchoption.md)

# Module: MatchOption

**`export`** 

**`namespace`** MatchOption

## Index

### Enumerations

* [FieldEnum](../enums/_generated_api_.matchoption.fieldenum.md)
* [ShouldEnum](../enums/_generated_api_.matchoption.shouldenum.md)

### Properties

* [field](_generated_api_.matchoption.md#optional-field)
* [should](_generated_api_.matchoption.md#optional-should)
* [value](_generated_api_.matchoption.md#optional-value)

## Properties

### `Optional` field

• **field**? : *[FieldEnum](../enums/_generated_api_.matchoption.fieldenum.md)*

Defined in src/generated/api.ts:1161

The email property to match on. One of SUBJECT, TO, BCC, CC or FROM

**`type`** {string}

**`memberof`** MatchOption

___

### `Optional` should

• **should**? : *[ShouldEnum](../enums/_generated_api_.matchoption.shouldenum.md)*

Defined in src/generated/api.ts:1167

What criteria to apply. CONTAIN or EQUAL. Note CONTAIN is recommended due to some SMTP servers adding new lines to fields and body content.

**`type`** {string}

**`memberof`** MatchOption

___

### `Optional` value

• **value**? : *string*

Defined in src/generated/api.ts:1173

The value you wish to compare with the value of the field specified using the `should` value passed. For example `BODY` should `CONTAIN` a value passed.

**`type`** {string}

**`memberof`** MatchOption
