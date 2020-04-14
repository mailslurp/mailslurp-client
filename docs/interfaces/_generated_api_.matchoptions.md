[MailSlurp JS](../README.md) › [Globals](../globals.md) › ["generated/api"](../modules/_generated_api_.md) › [MatchOptions](_generated_api_.matchoptions.md)

# Interface: MatchOptions

Optional filter for matching emails based on fields

**`export`** 

**`interface`** MatchOptions

## Hierarchy

* **MatchOptions**

## Index

### Properties

* [matches](_generated_api_.matchoptions.md#optional-matches)

## Properties

### `Optional` matches

• **matches**? : *Array‹[MatchOption](../modules/_generated_api_.matchoption.md)›*

*Defined in [src/generated/api.ts:1303](https://github.com/mailslurp/mailslurp-client-ts-js/blob/26ccbd6/src/generated/api.ts#L1303)*

1 or more match options. Options are additive so if one does not match the email is excluded from results

**`type`** {Array<MatchOption>}

**`memberof`** MatchOptions
