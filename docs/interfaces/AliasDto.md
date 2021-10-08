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

___

### emailAddress

• `Optional` **emailAddress**: `string`

The alias's email address for receiving email

**`memberof`** AliasDto

___

### id

• **id**: `string`

**`memberof`** AliasDto

___

### inboxId

• `Optional` **inboxId**: `string`

Inbox that is associated with the alias

**`memberof`** AliasDto

___

### isVerified

• `Optional` **isVerified**: `boolean`

Has the alias been verified. You must verify an alias if the masked email address has not yet been verified by your account

**`memberof`** AliasDto

___

### maskedEmailAddress

• `Optional` **maskedEmailAddress**: `string`

The underlying email address that is hidden and will received forwarded email

**`memberof`** AliasDto

___

### name

• `Optional` **name**: `string`

**`memberof`** AliasDto

___

### updatedAt

• `Optional` **updatedAt**: `Date`

**`memberof`** AliasDto

___

### useThreads

• `Optional` **useThreads**: `boolean`

If alias will generate response threads or not when email are received by it

**`memberof`** AliasDto

___

### userId

• **userId**: `string`

**`memberof`** AliasDto
