**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / CreateContactOptions

# Interface: CreateContactOptions

**`export`** 

**`interface`** CreateContactOptions

## Hierarchy

* **CreateContactOptions**

## Index

### Properties

* [company](createcontactoptions.md#company)
* [emailAddresses](createcontactoptions.md#emailaddresses)
* [firstName](createcontactoptions.md#firstname)
* [groupId](createcontactoptions.md#groupid)
* [lastName](createcontactoptions.md#lastname)
* [metaData](createcontactoptions.md#metadata)
* [optOut](createcontactoptions.md#optout)
* [tags](createcontactoptions.md#tags)

## Properties

### company

• `Optional` **company**: string

*Defined in [src/generated/api.ts:561](https://github.com/mailslurp/mailslurp-client/blob/cdc62f8/src/generated/api.ts#L561)*

**`memberof`** CreateContactOptions

___

### emailAddresses

• `Optional` **emailAddresses**: Array\<string>

*Defined in [src/generated/api.ts:519](https://github.com/mailslurp/mailslurp-client/blob/cdc62f8/src/generated/api.ts#L519)*

Set of email addresses belonging to the contact

**`memberof`** CreateContactOptions

___

### firstName

• `Optional` **firstName**: string

*Defined in [src/generated/api.ts:525](https://github.com/mailslurp/mailslurp-client/blob/cdc62f8/src/generated/api.ts#L525)*

**`memberof`** CreateContactOptions

___

### groupId

• `Optional` **groupId**: string

*Defined in [src/generated/api.ts:531](https://github.com/mailslurp/mailslurp-client/blob/cdc62f8/src/generated/api.ts#L531)*

Group IDs that contact belongs to

**`memberof`** CreateContactOptions

___

### lastName

• `Optional` **lastName**: string

*Defined in [src/generated/api.ts:555](https://github.com/mailslurp/mailslurp-client/blob/cdc62f8/src/generated/api.ts#L555)*

**`memberof`** CreateContactOptions

___

### metaData

• `Optional` **metaData**: [JsonNode](jsonnode.md)

*Defined in [src/generated/api.ts:537](https://github.com/mailslurp/mailslurp-client/blob/cdc62f8/src/generated/api.ts#L537)*

User metadata key value pairs to save for this contact. Can be any values you like.

**`memberof`** CreateContactOptions

___

### optOut

• `Optional` **optOut**: boolean

*Defined in [src/generated/api.ts:543](https://github.com/mailslurp/mailslurp-client/blob/cdc62f8/src/generated/api.ts#L543)*

Has the user explicitly or implicitly opted out of being contacted? If so MailSlurp will ignore them in all actions.

**`memberof`** CreateContactOptions

___

### tags

• `Optional` **tags**: Array\<string>

*Defined in [src/generated/api.ts:549](https://github.com/mailslurp/mailslurp-client/blob/cdc62f8/src/generated/api.ts#L549)*

Tags that can be used to search and group contacts

**`memberof`** CreateContactOptions
