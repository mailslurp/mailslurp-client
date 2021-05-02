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

*Defined in [src/generated/api.ts:559](https://github.com/mailslurp/mailslurp-client/blob/aab6cee/src/generated/api.ts#L559)*

**`memberof`** CreateContactOptions

___

### emailAddresses

• `Optional` **emailAddresses**: Array\<string>

*Defined in [src/generated/api.ts:517](https://github.com/mailslurp/mailslurp-client/blob/aab6cee/src/generated/api.ts#L517)*

Set of email addresses belonging to the contact

**`memberof`** CreateContactOptions

___

### firstName

• `Optional` **firstName**: string

*Defined in [src/generated/api.ts:523](https://github.com/mailslurp/mailslurp-client/blob/aab6cee/src/generated/api.ts#L523)*

**`memberof`** CreateContactOptions

___

### groupId

• `Optional` **groupId**: string

*Defined in [src/generated/api.ts:529](https://github.com/mailslurp/mailslurp-client/blob/aab6cee/src/generated/api.ts#L529)*

Group IDs that contact belongs to

**`memberof`** CreateContactOptions

___

### lastName

• `Optional` **lastName**: string

*Defined in [src/generated/api.ts:553](https://github.com/mailslurp/mailslurp-client/blob/aab6cee/src/generated/api.ts#L553)*

**`memberof`** CreateContactOptions

___

### metaData

• `Optional` **metaData**: [JsonNode](jsonnode.md)

*Defined in [src/generated/api.ts:535](https://github.com/mailslurp/mailslurp-client/blob/aab6cee/src/generated/api.ts#L535)*

User metadata key value pairs to save for this contact. Can be any values you like.

**`memberof`** CreateContactOptions

___

### optOut

• `Optional` **optOut**: boolean

*Defined in [src/generated/api.ts:541](https://github.com/mailslurp/mailslurp-client/blob/aab6cee/src/generated/api.ts#L541)*

Has the user explicitly or implicitly opted out of being contacted? If so MailSlurp will ignore them in all actions.

**`memberof`** CreateContactOptions

___

### tags

• `Optional` **tags**: Array\<string>

*Defined in [src/generated/api.ts:547](https://github.com/mailslurp/mailslurp-client/blob/aab6cee/src/generated/api.ts#L547)*

Tags that can be used to search and group contacts

**`memberof`** CreateContactOptions
