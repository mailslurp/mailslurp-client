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

*Defined in [src/generated/api.ts:852](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L852)*

**`memberof`** CreateContactOptions

___

### emailAddresses

• `Optional` **emailAddresses**: Array\<string>

*Defined in [src/generated/api.ts:810](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L810)*

Set of email addresses belonging to the contact

**`memberof`** CreateContactOptions

___

### firstName

• `Optional` **firstName**: string

*Defined in [src/generated/api.ts:816](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L816)*

**`memberof`** CreateContactOptions

___

### groupId

• `Optional` **groupId**: string

*Defined in [src/generated/api.ts:822](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L822)*

Group IDs that contact belongs to

**`memberof`** CreateContactOptions

___

### lastName

• `Optional` **lastName**: string

*Defined in [src/generated/api.ts:846](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L846)*

**`memberof`** CreateContactOptions

___

### metaData

• `Optional` **metaData**: [JsonNode](jsonnode.md)

*Defined in [src/generated/api.ts:828](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L828)*

User metadata key value pairs to save for this contact. Can be any values you like.

**`memberof`** CreateContactOptions

___

### optOut

• `Optional` **optOut**: boolean

*Defined in [src/generated/api.ts:834](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L834)*

Has the user explicitly or implicitly opted out of being contacted? If so MailSlurp will ignore them in all actions.

**`memberof`** CreateContactOptions

___

### tags

• `Optional` **tags**: Array\<string>

*Defined in [src/generated/api.ts:840](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L840)*

Tags that can be used to search and group contacts

**`memberof`** CreateContactOptions
