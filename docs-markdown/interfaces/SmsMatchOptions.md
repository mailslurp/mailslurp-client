[MailSlurp JS](../README.md) / SmsMatchOptions

# Interface: SmsMatchOptions

Optional filter for matching SMS based on fields. For instance filter results to only include emails whose `BODY` value does `CONTAIN` given match value. An example payload would be `{ matches: [{ field: 'BODY', should: 'CONTAIN', value: 'Welcome' }] }`.

**`Export`**

**`Interface`**

SmsMatchOptions

## Table of contents

### Properties

- [ai](SmsMatchOptions.md#ai)
- [matches](SmsMatchOptions.md#matches)

## Properties

### ai

• `Optional` **ai**: [`AIMessageMatchOptions`](AIMessageMatchOptions.md)

**`Memberof`**

SmsMatchOptions

___

### matches

• `Optional` **matches**: [`SmsMatchOption`](SmsMatchOption.md)[]

Zero or more match options such as `{ field: 'BODY', should: 'CONTAIN', value: 'Welcome' }`. Options are additive so if one does not match the SMS is excluded from results

**`Memberof`**

SmsMatchOptions
