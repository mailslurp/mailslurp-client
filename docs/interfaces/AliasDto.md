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

### <a id="createdat" name="createdat"></a> createdAt

• `Optional` **createdAt**: `Date`

**`memberof`** AliasDto

___

### <a id="emailaddress" name="emailaddress"></a> emailAddress

• **emailAddress**: `string`

The alias's email address for receiving email

**`memberof`** AliasDto

___

### <a id="id" name="id"></a> id

• **id**: `string`

**`memberof`** AliasDto

___

### <a id="inboxid" name="inboxid"></a> inboxId

• **inboxId**: `string`

Inbox that is associated with the alias

**`memberof`** AliasDto

___

### <a id="isverified" name="isverified"></a> isVerified

• **isVerified**: `boolean`

Has the alias been verified. You must verify an alias if the masked email address has not yet been verified by your account

**`memberof`** AliasDto

___

### <a id="maskedemailaddress" name="maskedemailaddress"></a> maskedEmailAddress

• `Optional` **maskedEmailAddress**: `string`

The underlying email address that is hidden and will received forwarded email

**`memberof`** AliasDto

___

### <a id="name" name="name"></a> name

• `Optional` **name**: `string`

**`memberof`** AliasDto

___

### <a id="updatedat" name="updatedat"></a> updatedAt

• `Optional` **updatedAt**: `Date`

**`memberof`** AliasDto

___

### <a id="usethreads" name="usethreads"></a> useThreads

• `Optional` **useThreads**: `boolean`

If alias will generate response threads or not when email are received by it

**`memberof`** AliasDto

___

### <a id="userid" name="userid"></a> userId

• **userId**: `string`

**`memberof`** AliasDto
