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

*Defined in [src/generated/api.ts:151](https://github.com/mailslurp/mailslurp-client/blob/c889afa/src/generated/api.ts#L151)*

**`memberof`** AliasDto

___

### emailAddress

• `Optional` **emailAddress**: string

*Defined in [src/generated/api.ts:157](https://github.com/mailslurp/mailslurp-client/blob/c889afa/src/generated/api.ts#L157)*

The alias's email address for receiving email

**`memberof`** AliasDto

___

### id

•  **id**: string

*Defined in [src/generated/api.ts:163](https://github.com/mailslurp/mailslurp-client/blob/c889afa/src/generated/api.ts#L163)*

**`memberof`** AliasDto

___

### inboxId

• `Optional` **inboxId**: string

*Defined in [src/generated/api.ts:169](https://github.com/mailslurp/mailslurp-client/blob/c889afa/src/generated/api.ts#L169)*

Inbox that is associated with the alias

**`memberof`** AliasDto

___

### isVerified

• `Optional` **isVerified**: boolean

*Defined in [src/generated/api.ts:175](https://github.com/mailslurp/mailslurp-client/blob/c889afa/src/generated/api.ts#L175)*

Has the alias been verified. You must verify an alias if the masked email address has not yet been verified by your account

**`memberof`** AliasDto

___

### maskedEmailAddress

• `Optional` **maskedEmailAddress**: string

*Defined in [src/generated/api.ts:181](https://github.com/mailslurp/mailslurp-client/blob/c889afa/src/generated/api.ts#L181)*

The underlying email address that is hidden and will received forwarded email

**`memberof`** AliasDto

___

### name

• `Optional` **name**: string

*Defined in [src/generated/api.ts:187](https://github.com/mailslurp/mailslurp-client/blob/c889afa/src/generated/api.ts#L187)*

**`memberof`** AliasDto

___

### updatedAt

• `Optional` **updatedAt**: Date

*Defined in [src/generated/api.ts:193](https://github.com/mailslurp/mailslurp-client/blob/c889afa/src/generated/api.ts#L193)*

**`memberof`** AliasDto

___

### useThreads

• `Optional` **useThreads**: boolean

*Defined in [src/generated/api.ts:199](https://github.com/mailslurp/mailslurp-client/blob/c889afa/src/generated/api.ts#L199)*

If alias will generate response threads or not when email are received by it

**`memberof`** AliasDto

___

### userId

•  **userId**: string

*Defined in [src/generated/api.ts:205](https://github.com/mailslurp/mailslurp-client/blob/c889afa/src/generated/api.ts#L205)*

**`memberof`** AliasDto
