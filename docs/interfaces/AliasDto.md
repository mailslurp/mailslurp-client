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

[src/generated/api.ts:146](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L146)

___

### emailAddress

• `Optional` **emailAddress**: `string`

The alias's email address for receiving email

**`memberof`** AliasDto

#### Defined in

[src/generated/api.ts:152](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L152)

___

### id

• **id**: `string`

**`memberof`** AliasDto

#### Defined in

[src/generated/api.ts:158](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L158)

___

### inboxId

• `Optional` **inboxId**: `string`

Inbox that is associated with the alias

**`memberof`** AliasDto

#### Defined in

[src/generated/api.ts:164](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L164)

___

### isVerified

• `Optional` **isVerified**: `boolean`

Has the alias been verified. You must verify an alias if the masked email address has not yet been verified by your account

**`memberof`** AliasDto

#### Defined in

[src/generated/api.ts:170](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L170)

___

### maskedEmailAddress

• `Optional` **maskedEmailAddress**: `string`

The underlying email address that is hidden and will received forwarded email

**`memberof`** AliasDto

#### Defined in

[src/generated/api.ts:176](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L176)

___

### name

• `Optional` **name**: `string`

**`memberof`** AliasDto

#### Defined in

[src/generated/api.ts:182](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L182)

___

### updatedAt

• `Optional` **updatedAt**: `Date`

**`memberof`** AliasDto

#### Defined in

[src/generated/api.ts:188](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L188)

___

### useThreads

• `Optional` **useThreads**: `boolean`

If alias will generate response threads or not when email are received by it

**`memberof`** AliasDto

#### Defined in

[src/generated/api.ts:194](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L194)

___

### userId

• **userId**: `string`

**`memberof`** AliasDto

#### Defined in

[src/generated/api.ts:200](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L200)
