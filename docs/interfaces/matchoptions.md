**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / MatchOptions

# Interface: MatchOptions

Optional filter for matching emails based on fields. For instance filter results to only include emails whose `SUBJECT` value does `CONTAIN` given match value.

**`export`** 

**`interface`** MatchOptions

## Hierarchy

* **MatchOptions**

## Index

### Properties

* [matches](matchoptions.md#matches)

## Properties

### matches

• `Optional` **matches**: Array\<[MatchOption](../modules/matchoption.md)>

*Defined in [src/generated/api.ts:1300](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L1300)*

1 or more match options. Options are additive so if one does not match the email is excluded from results

**`memberof`** MatchOptions
