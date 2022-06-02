# Interface: MatchOptions

Optional filter for matching emails based on fields. For instance filter results to only include emails whose `SUBJECT` value does `CONTAIN` given match value. An example payload would be `{ matches: [{ field: 'SUBJECT', should: 'CONTAIN', value: 'Welcome' }] }`. You can also pass conditions such as `HAS_ATTACHMENT`. If you wish to extract regex matches inside the email content see the `getEmailContentMatch` method in the EmailController.

**`export`**

**`interface`** MatchOptions

## Table of contents

### Properties

- [conditions](MatchOptions.md#conditions)
- [matches](MatchOptions.md#matches)

## Properties

### <a id="conditions" name="conditions"></a> conditions

• `Optional` **conditions**: [`ConditionOption`](ConditionOption.md)[]

Zero or more conditions such as `{ condition: 'HAS_ATTACHMENTS', value: 'TRUE' }`. Note the values are the strings `TRUE|FALSE` not booleans.

**`memberof`** MatchOptions

___

### <a id="matches" name="matches"></a> matches

• `Optional` **matches**: [`MatchOption`](MatchOption.md)[]

Zero or more match options such as `{ field: 'SUBJECT', should: 'CONTAIN', value: 'Welcome' }`. Options are additive so if one does not match the email is excluded from results

**`memberof`** MatchOptions
