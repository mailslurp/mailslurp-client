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

*Defined in [src/generated/api.ts:201](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L201)*

**`memberof`** AliasDto

___

### emailAddress

• `Optional` **emailAddress**: string

*Defined in [src/generated/api.ts:207](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L207)*

The alias's email address for receiving email

**`memberof`** AliasDto

___

### id

•  **id**: string

*Defined in [src/generated/api.ts:213](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L213)*

**`memberof`** AliasDto

___

### inboxId

• `Optional` **inboxId**: string

*Defined in [src/generated/api.ts:219](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L219)*

Inbox that is associated with the alias

**`memberof`** AliasDto

___

### isVerified

• `Optional` **isVerified**: boolean

*Defined in [src/generated/api.ts:225](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L225)*

Has the alias been verified. You must verify an alias if the masked email address has not yet been verified by your account

**`memberof`** AliasDto

___

### maskedEmailAddress

• `Optional` **maskedEmailAddress**: string

*Defined in [src/generated/api.ts:231](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L231)*

The underlying email address that is hidden and will received forwarded email

**`memberof`** AliasDto

___

### name

• `Optional` **name**: string

*Defined in [src/generated/api.ts:237](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L237)*

**`memberof`** AliasDto

___

### updatedAt

• `Optional` **updatedAt**: Date

*Defined in [src/generated/api.ts:243](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L243)*

**`memberof`** AliasDto

___

### useThreads

• `Optional` **useThreads**: boolean

*Defined in [src/generated/api.ts:249](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L249)*

If alias will generate response threads or not when email are received by it

**`memberof`** AliasDto

___

### userId

•  **userId**: string

*Defined in [src/generated/api.ts:255](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L255)*

**`memberof`** AliasDto
