**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / AliasDto

# Interface: AliasDto

Email alias representation

**`export`** 

**`interface`** AliasDto

## Hierarchy

* **AliasDto**

## Index

### Properties

* [createdAt](aliasdto.md#createdat)
* [emailAddress](aliasdto.md#emailaddress)
* [id](aliasdto.md#id)
* [inboxId](aliasdto.md#inboxid)
* [isVerified](aliasdto.md#isverified)
* [maskedEmailAddress](aliasdto.md#maskedemailaddress)
* [name](aliasdto.md#name)
* [updatedAt](aliasdto.md#updatedat)
* [useThreads](aliasdto.md#usethreads)
* [userId](aliasdto.md#userid)

## Properties

### createdAt

• `Optional` **createdAt**: Date

*Defined in [src/generated/api.ts:200](https://github.com/mailslurp/mailslurp-client/blob/a36d929/src/generated/api.ts#L200)*

**`memberof`** AliasDto

___

### emailAddress

• `Optional` **emailAddress**: string

*Defined in [src/generated/api.ts:206](https://github.com/mailslurp/mailslurp-client/blob/a36d929/src/generated/api.ts#L206)*

The alias's email address for receiving email

**`memberof`** AliasDto

___

### id

•  **id**: string

*Defined in [src/generated/api.ts:212](https://github.com/mailslurp/mailslurp-client/blob/a36d929/src/generated/api.ts#L212)*

**`memberof`** AliasDto

___

### inboxId

• `Optional` **inboxId**: string

*Defined in [src/generated/api.ts:218](https://github.com/mailslurp/mailslurp-client/blob/a36d929/src/generated/api.ts#L218)*

Inbox that is associated with the alias

**`memberof`** AliasDto

___

### isVerified

• `Optional` **isVerified**: boolean

*Defined in [src/generated/api.ts:224](https://github.com/mailslurp/mailslurp-client/blob/a36d929/src/generated/api.ts#L224)*

Has the alias been verified. You must verify an alias if the masked email address has not yet been verified by your account

**`memberof`** AliasDto

___

### maskedEmailAddress

• `Optional` **maskedEmailAddress**: string

*Defined in [src/generated/api.ts:230](https://github.com/mailslurp/mailslurp-client/blob/a36d929/src/generated/api.ts#L230)*

The underlying email address that is hidden and will received forwarded email

**`memberof`** AliasDto

___

### name

• `Optional` **name**: string

*Defined in [src/generated/api.ts:236](https://github.com/mailslurp/mailslurp-client/blob/a36d929/src/generated/api.ts#L236)*

**`memberof`** AliasDto

___

### updatedAt

• `Optional` **updatedAt**: Date

*Defined in [src/generated/api.ts:242](https://github.com/mailslurp/mailslurp-client/blob/a36d929/src/generated/api.ts#L242)*

**`memberof`** AliasDto

___

### useThreads

• `Optional` **useThreads**: boolean

*Defined in [src/generated/api.ts:248](https://github.com/mailslurp/mailslurp-client/blob/a36d929/src/generated/api.ts#L248)*

If alias will generate response threads or not when email are received by it

**`memberof`** AliasDto

___

### userId

•  **userId**: string

*Defined in [src/generated/api.ts:254](https://github.com/mailslurp/mailslurp-client/blob/a36d929/src/generated/api.ts#L254)*

**`memberof`** AliasDto
