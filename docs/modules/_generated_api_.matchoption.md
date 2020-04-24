# Module: MatchOption

**`export`** 

**`namespace`** MatchOption

## Properties

### `Optional` field

• **field**? : *[FieldEnum](../enums/_generated_api_.matchoption.fieldenum.md)*

*Defined in [src/generated/api.ts:1263](https://github.com/mailslurp/mailslurp-client-ts-js/blob/507ad2d/src/generated/api.ts#L1263)*

The email property to match on. One of SUBJECT, TO, BCC, CC or FROM

**`type`** {string}

**`memberof`** MatchOption

___

### `Optional` should

• **should**? : *[ShouldEnum](../enums/_generated_api_.matchoption.shouldenum.md)*

*Defined in [src/generated/api.ts:1269](https://github.com/mailslurp/mailslurp-client-ts-js/blob/507ad2d/src/generated/api.ts#L1269)*

What criteria to apply. CONTAIN or EQUAL. Note CONTAIN is recommended due to some SMTP servers adding new lines to fields and body content.

**`type`** {string}

**`memberof`** MatchOption

___

### `Optional` value

• **value**? : *string*

*Defined in [src/generated/api.ts:1275](https://github.com/mailslurp/mailslurp-client-ts-js/blob/507ad2d/src/generated/api.ts#L1275)*

The value you wish to compare with the value of the field specified using the `should` value passed. For example `BODY` should `CONTAIN` a value passed.

**`type`** {string}

**`memberof`** MatchOption
