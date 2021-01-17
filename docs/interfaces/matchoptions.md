**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / MatchOptions

# Interface: MatchOptions

Optional filter for matching emails based on fields. For instance filter results to only include emails whose `SUBJECT` value does `CONTAIN` given match value. An example payload would be `{ matches: [{ field: 'SUBJECT', should: 'CONTAIN', value: 'Welcome' }] }`. If you wish to extract regex matches inside the email content see the `getEmailContentMatch` method in the EmailController.

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

*Defined in [src/generated/api.ts:2032](https://github.com/mailslurp/mailslurp-client/blob/65d1444/src/generated/api.ts#L2032)*

1 or more match options. Options are additive so if one does not match the email is excluded from results

**`memberof`** MatchOptions
