[MailSlurp JS](../README.md) / CreateContactOptions

# Interface: CreateContactOptions

**`export`**

**`interface`** CreateContactOptions

## Table of contents

### Properties

- [company](CreateContactOptions.md#company)
- [emailAddresses](CreateContactOptions.md#emailaddresses)
- [firstName](CreateContactOptions.md#firstname)
- [groupId](CreateContactOptions.md#groupid)
- [lastName](CreateContactOptions.md#lastname)
- [metaData](CreateContactOptions.md#metadata)
- [optOut](CreateContactOptions.md#optout)
- [tags](CreateContactOptions.md#tags)

## Properties

### company

• `Optional` **company**: `string`

**`memberof`** CreateContactOptions

#### Defined in

[src/generated/api.ts:935](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L935)

___

### emailAddresses

• `Optional` **emailAddresses**: `string`[]

Set of email addresses belonging to the contact

**`memberof`** CreateContactOptions

#### Defined in

[src/generated/api.ts:893](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L893)

___

### firstName

• `Optional` **firstName**: `string`

**`memberof`** CreateContactOptions

#### Defined in

[src/generated/api.ts:899](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L899)

___

### groupId

• `Optional` **groupId**: `string`

Group IDs that contact belongs to

**`memberof`** CreateContactOptions

#### Defined in

[src/generated/api.ts:905](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L905)

___

### lastName

• `Optional` **lastName**: `string`

**`memberof`** CreateContactOptions

#### Defined in

[src/generated/api.ts:929](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L929)

___

### metaData

• `Optional` **metaData**: [`JsonNode`](JsonNode.md)

User metadata key value pairs to save for this contact. Can be any values you like.

**`memberof`** CreateContactOptions

#### Defined in

[src/generated/api.ts:911](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L911)

___

### optOut

• `Optional` **optOut**: `boolean`

Has the user explicitly or implicitly opted out of being contacted? If so MailSlurp will ignore them in all actions.

**`memberof`** CreateContactOptions

#### Defined in

[src/generated/api.ts:917](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L917)

___

### tags

• `Optional` **tags**: `string`[]

Tags that can be used to search and group contacts

**`memberof`** CreateContactOptions

#### Defined in

[src/generated/api.ts:923](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L923)
