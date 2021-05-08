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

*Defined in [src/generated/api.ts:615](https://github.com/mailslurp/mailslurp-client/blob/c83a162/src/generated/api.ts#L615)*

**`memberof`** CreateContactOptions

___

### emailAddresses

• `Optional` **emailAddresses**: Array\<string>

*Defined in [src/generated/api.ts:573](https://github.com/mailslurp/mailslurp-client/blob/c83a162/src/generated/api.ts#L573)*

Set of email addresses belonging to the contact

**`memberof`** CreateContactOptions

___

### firstName

• `Optional` **firstName**: string

*Defined in [src/generated/api.ts:579](https://github.com/mailslurp/mailslurp-client/blob/c83a162/src/generated/api.ts#L579)*

**`memberof`** CreateContactOptions

___

### groupId

• `Optional` **groupId**: string

*Defined in [src/generated/api.ts:585](https://github.com/mailslurp/mailslurp-client/blob/c83a162/src/generated/api.ts#L585)*

Group IDs that contact belongs to

**`memberof`** CreateContactOptions

___

### lastName

• `Optional` **lastName**: string

*Defined in [src/generated/api.ts:609](https://github.com/mailslurp/mailslurp-client/blob/c83a162/src/generated/api.ts#L609)*

**`memberof`** CreateContactOptions

___

### metaData

• `Optional` **metaData**: [JsonNode](jsonnode.md)

*Defined in [src/generated/api.ts:591](https://github.com/mailslurp/mailslurp-client/blob/c83a162/src/generated/api.ts#L591)*

User metadata key value pairs to save for this contact. Can be any values you like.

**`memberof`** CreateContactOptions

___

### optOut

• `Optional` **optOut**: boolean

*Defined in [src/generated/api.ts:597](https://github.com/mailslurp/mailslurp-client/blob/c83a162/src/generated/api.ts#L597)*

Has the user explicitly or implicitly opted out of being contacted? If so MailSlurp will ignore them in all actions.

**`memberof`** CreateContactOptions

___

### tags

• `Optional` **tags**: Array\<string>

*Defined in [src/generated/api.ts:603](https://github.com/mailslurp/mailslurp-client/blob/c83a162/src/generated/api.ts#L603)*

Tags that can be used to search and group contacts

**`memberof`** CreateContactOptions
