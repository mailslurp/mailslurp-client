**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / MatchOptions

# Interface: MatchOptions

Optional filter for matching emails based on fields. For instance filter results to only include emails whose `SUBJECT` value does `CONTAIN` given match value. An example payload would be `{ matches: [{ field: 'SUBJECT', should: 'CONTAIN', value: 'Welcome' }] }`. You can also pass conditions such as `HAS_ATTACHMENT`. If you wish to extract regex matches inside the email content see the `getEmailContentMatch` method in the EmailController.

**`export`** 

**`interface`** MatchOptions

## Hierarchy

* **MatchOptions**

## Index

### Properties

* [conditions](matchoptions.md#conditions)
* [matches](matchoptions.md#matches)

## Properties

### conditions

• `Optional` **conditions**: Array\<[ConditionOption](../modules/conditionoption.md)>

*Defined in [src/generated/api.ts:2491](https://github.com/mailslurp/mailslurp-client/blob/a8663d0/src/generated/api.ts#L2491)*

Zero or more conditions such as `{ condition: 'HAS_ATTACHMENTS', value: 'TRUE' }`. Note the values are the strings `TRUE|FALSE` not booleans.

**`memberof`** MatchOptions

___

### matches

• `Optional` **matches**: Array\<[MatchOption](../modules/matchoption.md)>

*Defined in [src/generated/api.ts:2497](https://github.com/mailslurp/mailslurp-client/blob/a8663d0/src/generated/api.ts#L2497)*

Zero or more match options such as `{ field: 'SUBJECT', should: 'CONTAIN', value: 'Welcome' }`. Options are additive so if one does not match the email is excluded from results

**`memberof`** MatchOptions
