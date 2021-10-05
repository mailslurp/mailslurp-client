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

[src/generated/api.ts:879](https://github.com/mailslurp/mailslurp-client/blob/004c609/src/generated/api.ts#L879)

___

### emailAddresses

• `Optional` **emailAddresses**: `string`[]

Set of email addresses belonging to the contact

**`memberof`** CreateContactOptions

#### Defined in

[src/generated/api.ts:837](https://github.com/mailslurp/mailslurp-client/blob/004c609/src/generated/api.ts#L837)

___

### firstName

• `Optional` **firstName**: `string`

**`memberof`** CreateContactOptions

#### Defined in

[src/generated/api.ts:843](https://github.com/mailslurp/mailslurp-client/blob/004c609/src/generated/api.ts#L843)

___

### groupId

• `Optional` **groupId**: `string`

Group IDs that contact belongs to

**`memberof`** CreateContactOptions

#### Defined in

[src/generated/api.ts:849](https://github.com/mailslurp/mailslurp-client/blob/004c609/src/generated/api.ts#L849)

___

### lastName

• `Optional` **lastName**: `string`

**`memberof`** CreateContactOptions

#### Defined in

[src/generated/api.ts:873](https://github.com/mailslurp/mailslurp-client/blob/004c609/src/generated/api.ts#L873)

___

### metaData

• `Optional` **metaData**: [`JsonNode`](JsonNode.md)

User metadata key value pairs to save for this contact. Can be any values you like.

**`memberof`** CreateContactOptions

#### Defined in

[src/generated/api.ts:855](https://github.com/mailslurp/mailslurp-client/blob/004c609/src/generated/api.ts#L855)

___

### optOut

• `Optional` **optOut**: `boolean`

Has the user explicitly or implicitly opted out of being contacted? If so MailSlurp will ignore them in all actions.

**`memberof`** CreateContactOptions

#### Defined in

[src/generated/api.ts:861](https://github.com/mailslurp/mailslurp-client/blob/004c609/src/generated/api.ts#L861)

___

### tags

• `Optional` **tags**: `string`[]

Tags that can be used to search and group contacts

**`memberof`** CreateContactOptions

#### Defined in

[src/generated/api.ts:867](https://github.com/mailslurp/mailslurp-client/blob/004c609/src/generated/api.ts#L867)
