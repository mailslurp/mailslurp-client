[MailSlurp JS](../README.md) / AIMappingMatchOptions

# Interface: AIMappingMatchOptions

Optional filter for matching emails based on fields. For instance filter results to only include emails whose `SUBJECT` value does `CONTAIN` given match value. An example payload would be `{ matches: [{ field: 'SUBJECT', should: 'CONTAIN', value: 'Welcome' }] }`. You can also pass conditions such as `HAS_ATTACHMENT`. If you wish to extract regex matches inside the email content see the `getEmailContentMatch` method in the EmailController.

**`Export`**

**`Interface`**

AIMappingMatchOptions

## Table of contents

### Properties

- [matches](AIMappingMatchOptions.md#matches)

## Properties

### matches

• `Optional` **matches**: [`AIMappingMatchOption`](AIMappingMatchOption.md)[]

Zero or more match options such as `{ field: 'SUBJECT', should: 'CONTAIN', value: 'Welcome' }`. Options are additive so if one does not match the email is excluded from results

**`Memberof`**

AIMappingMatchOptions
