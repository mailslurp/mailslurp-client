# Module: MatchOption

**`export`** 

**`namespace`** MatchOption

## Properties

### `Optional` field

• **field**? : *[FieldEnum](../enums/_generated_api_.matchoption.fieldenum.md)*

*Defined in [src/generated/api.ts:1248](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L1248)*

The email property to match on. One of SUBJECT, TO, BCC, CC or FROM

**`type`** {string}

**`memberof`** MatchOption

___

### `Optional` should

• **should**? : *[ShouldEnum](../enums/_generated_api_.matchoption.shouldenum.md)*

*Defined in [src/generated/api.ts:1254](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L1254)*

What criteria to apply. CONTAIN or EQUAL. Note CONTAIN is recommended due to some SMTP servers adding new lines to fields and body content.

**`type`** {string}

**`memberof`** MatchOption

___

### `Optional` value

• **value**? : *string*

*Defined in [src/generated/api.ts:1260](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L1260)*

The value you wish to compare with the value of the field specified using the `should` value passed. For example `BODY` should `CONTAIN` a value passed.

**`type`** {string}

**`memberof`** MatchOption
