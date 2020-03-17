[MailSlurp JS](../README.md) › [Globals](../globals.md) › ["lib/models/MatchOption"](../modules/_lib_models_matchoption_.md) › [MatchOption](_lib_models_matchoption_.matchoption.md)

# Interface: MatchOption

Options for matching emails in an inbox. Each match option object contains a `field`, `should` and `value` property. Together they form logical conditions such as `SUBJECT` should `CONTAIN` value.

**`export`** 

**`interface`** MatchOption

## Hierarchy

* **MatchOption**

## Index

### Properties

* [field](_lib_models_matchoption_.matchoption.md#optional-field)
* [should](_lib_models_matchoption_.matchoption.md#optional-should)
* [value](_lib_models_matchoption_.matchoption.md#optional-value)

## Properties

### `Optional` field

• **field**? : *[MatchOptionFieldEnum](../enums/_lib_models_matchoption_.matchoptionfieldenum.md)*

*Defined in [src/lib/models/MatchOption.ts:27](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/MatchOption.ts#L27)*

The email property to match on. One of SUBJECT, TO, BCC, CC or FROM

**`type`** {string}

**`memberof`** MatchOption

___

### `Optional` should

• **should**? : *[MatchOptionShouldEnum](../enums/_lib_models_matchoption_.matchoptionshouldenum.md)*

*Defined in [src/lib/models/MatchOption.ts:33](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/MatchOption.ts#L33)*

What criteria to apply. CONTAIN or EQUAL. Note CONTAIN is recommended due to some SMTP servers adding new lines to fields and body content.

**`type`** {string}

**`memberof`** MatchOption

___

### `Optional` value

• **value**? : *string*

*Defined in [src/lib/models/MatchOption.ts:39](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/MatchOption.ts#L39)*

The value you wish to compare with the value of the field specified using the `should` value passed. For example `BODY` should `CONTAIN` a value passed.

**`type`** {string}

**`memberof`** MatchOption
