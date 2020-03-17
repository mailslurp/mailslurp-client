[MailSlurp JS](../README.md) › [Globals](../globals.md) › ["lib/models/MatchOptions"](../modules/_lib_models_matchoptions_.md) › [MatchOptions](_lib_models_matchoptions_.matchoptions.md)

# Interface: MatchOptions

Optional filter for matching emails based on fields

**`export`** 

**`interface`** MatchOptions

## Hierarchy

* **MatchOptions**

## Index

### Properties

* [matches](_lib_models_matchoptions_.matchoptions.md#optional-matches)

## Properties

### `Optional` matches

• **matches**? : *Array‹[MatchOption](_lib_models_matchoption_.matchoption.md)›*

*Defined in [src/lib/models/MatchOptions.ts:34](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/MatchOptions.ts#L34)*

1 or more match options. Options are additive so if one does not match the email is excluded from results

**`type`** {Array<MatchOption>}

**`memberof`** MatchOptions
