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

*Defined in [src/generated/api.ts:934](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L934)*

**`memberof`** CreateContactOptions

___

### emailAddresses

• `Optional` **emailAddresses**: Array\<string>

*Defined in [src/generated/api.ts:892](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L892)*

Set of email addresses belonging to the contact

**`memberof`** CreateContactOptions

___

### firstName

• `Optional` **firstName**: string

*Defined in [src/generated/api.ts:898](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L898)*

**`memberof`** CreateContactOptions

___

### groupId

• `Optional` **groupId**: string

*Defined in [src/generated/api.ts:904](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L904)*

Group IDs that contact belongs to

**`memberof`** CreateContactOptions

___

### lastName

• `Optional` **lastName**: string

*Defined in [src/generated/api.ts:928](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L928)*

**`memberof`** CreateContactOptions

___

### metaData

• `Optional` **metaData**: [JsonNode](jsonnode.md)

*Defined in [src/generated/api.ts:910](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L910)*

User metadata key value pairs to save for this contact. Can be any values you like.

**`memberof`** CreateContactOptions

___

### optOut

• `Optional` **optOut**: boolean

*Defined in [src/generated/api.ts:916](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L916)*

Has the user explicitly or implicitly opted out of being contacted? If so MailSlurp will ignore them in all actions.

**`memberof`** CreateContactOptions

___

### tags

• `Optional` **tags**: Array\<string>

*Defined in [src/generated/api.ts:922](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L922)*

Tags that can be used to search and group contacts

**`memberof`** CreateContactOptions
