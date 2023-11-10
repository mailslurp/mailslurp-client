[MailSlurp JS](../README.md) / AliasDto

# Interface: AliasDto

Email alias representation

**`Export`**

**`Interface`**

AliasDto

## Table of contents

### Properties

- [createdAt](AliasDto.md#createdat)
- [domainId](AliasDto.md#domainid)
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

**`Memberof`**

AliasDto

___

### domainId

• `Optional` **domainId**: `string`

Domain ID associated with the alias

**`Memberof`**

AliasDto

___

### emailAddress

• **emailAddress**: `string`

The alias's email address for receiving email

**`Memberof`**

AliasDto

___

### id

• **id**: `string`

**`Memberof`**

AliasDto

___

### inboxId

• **inboxId**: `string`

Inbox that is associated with the alias

**`Memberof`**

AliasDto

___

### isVerified

• **isVerified**: `boolean`

Has the alias been verified. You must verify an alias if the masked email address has not yet been verified by your account

**`Memberof`**

AliasDto

___

### maskedEmailAddress

• `Optional` **maskedEmailAddress**: `string`

The underlying email address that is hidden and will received forwarded email

**`Memberof`**

AliasDto

___

### name

• `Optional` **name**: `string`

**`Memberof`**

AliasDto

___

### updatedAt

• `Optional` **updatedAt**: `Date`

**`Memberof`**

AliasDto

___

### useThreads

• `Optional` **useThreads**: `boolean`

If alias will generate response threads or not when email are received by it

**`Memberof`**

AliasDto

___

### userId

• **userId**: `string`

**`Memberof`**

AliasDto
