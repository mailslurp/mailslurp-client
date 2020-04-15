# Interface: MatchOptions

Optional filter for matching emails based on fields. For instance filter results to only include emails whose `SUBJECT` value does `CONTAIN` given match value.

**`export`** 

**`interface`** MatchOptions

## Hierarchy

* **MatchOptions**

## Properties

### `Optional` matches

• **matches**? : *Array‹[MatchOption](../modules/_generated_api_.matchoption.md)›*

*Defined in [src/generated/api.ts:1312](https://github.com/mailslurp/mailslurp-client-ts-js/blob/45dbdd8/src/generated/api.ts#L1312)*

1 or more match options. Options are additive so if one does not match the email is excluded from results

**`type`** {Array<MatchOption>}

**`memberof`** MatchOptions
