[MailSlurp JS](../README.md) / AliasDto

# Interface: AliasDto

Email alias representation

**`export`**

**`interface`** AliasDto

## Table of contents

### Properties

- [createdAt](AliasDto.md#createdat)
- [emailAddress](AliasDto.md#emailaddress)
- [id](AliasDto.md#id)
- [inboxId](AliasDto.md#inboxid)
- [isVerified](AliasDto.md#isverified)
- [maskedEmailAddress](AliasDto.md#maskedemailaddress)
- [name](AliasDto.md#name)
- [updatedAt](AliasDto.md#updatedat)
- [useThreads](AliasDto.md#usethreads)
- [userId](AliasDto.md#userid)

## Properties

### createdAt

• `Optional` **createdAt**: `Date`

**`memberof`** AliasDto

#### Defined in

[src/generated/api.ts:202](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L202)

___

### emailAddress

• `Optional` **emailAddress**: `string`

The alias's email address for receiving email

**`memberof`** AliasDto

#### Defined in

[src/generated/api.ts:208](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L208)

___

### id

• **id**: `string`

**`memberof`** AliasDto

#### Defined in

[src/generated/api.ts:214](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L214)

___

### inboxId

• `Optional` **inboxId**: `string`

Inbox that is associated with the alias

**`memberof`** AliasDto

#### Defined in

[src/generated/api.ts:220](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L220)

___

### isVerified

• `Optional` **isVerified**: `boolean`

Has the alias been verified. You must verify an alias if the masked email address has not yet been verified by your account

**`memberof`** AliasDto

#### Defined in

[src/generated/api.ts:226](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L226)

___

### maskedEmailAddress

• `Optional` **maskedEmailAddress**: `string`

The underlying email address that is hidden and will received forwarded email

**`memberof`** AliasDto

#### Defined in

[src/generated/api.ts:232](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L232)

___

### name

• `Optional` **name**: `string`

**`memberof`** AliasDto

#### Defined in

[src/generated/api.ts:238](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L238)

___

### updatedAt

• `Optional` **updatedAt**: `Date`

**`memberof`** AliasDto

#### Defined in

[src/generated/api.ts:244](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L244)

___

### useThreads

• `Optional` **useThreads**: `boolean`

If alias will generate response threads or not when email are received by it

**`memberof`** AliasDto

#### Defined in

[src/generated/api.ts:250](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L250)

___

### userId

• **userId**: `string`

**`memberof`** AliasDto

#### Defined in

[src/generated/api.ts:256](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L256)
