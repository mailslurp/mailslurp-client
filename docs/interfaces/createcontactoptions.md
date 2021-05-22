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

*Defined in [src/generated/api.ts:664](https://github.com/mailslurp/mailslurp-client/blob/8d5c17f/src/generated/api.ts#L664)*

**`memberof`** CreateContactOptions

___

### emailAddresses

• `Optional` **emailAddresses**: Array\<string>

*Defined in [src/generated/api.ts:622](https://github.com/mailslurp/mailslurp-client/blob/8d5c17f/src/generated/api.ts#L622)*

Set of email addresses belonging to the contact

**`memberof`** CreateContactOptions

___

### firstName

• `Optional` **firstName**: string

*Defined in [src/generated/api.ts:628](https://github.com/mailslurp/mailslurp-client/blob/8d5c17f/src/generated/api.ts#L628)*

**`memberof`** CreateContactOptions

___

### groupId

• `Optional` **groupId**: string

*Defined in [src/generated/api.ts:634](https://github.com/mailslurp/mailslurp-client/blob/8d5c17f/src/generated/api.ts#L634)*

Group IDs that contact belongs to

**`memberof`** CreateContactOptions

___

### lastName

• `Optional` **lastName**: string

*Defined in [src/generated/api.ts:658](https://github.com/mailslurp/mailslurp-client/blob/8d5c17f/src/generated/api.ts#L658)*

**`memberof`** CreateContactOptions

___

### metaData

• `Optional` **metaData**: [JsonNode](jsonnode.md)

*Defined in [src/generated/api.ts:640](https://github.com/mailslurp/mailslurp-client/blob/8d5c17f/src/generated/api.ts#L640)*

User metadata key value pairs to save for this contact. Can be any values you like.

**`memberof`** CreateContactOptions

___

### optOut

• `Optional` **optOut**: boolean

*Defined in [src/generated/api.ts:646](https://github.com/mailslurp/mailslurp-client/blob/8d5c17f/src/generated/api.ts#L646)*

Has the user explicitly or implicitly opted out of being contacted? If so MailSlurp will ignore them in all actions.

**`memberof`** CreateContactOptions

___

### tags

• `Optional` **tags**: Array\<string>

*Defined in [src/generated/api.ts:652](https://github.com/mailslurp/mailslurp-client/blob/8d5c17f/src/generated/api.ts#L652)*

Tags that can be used to search and group contacts

**`memberof`** CreateContactOptions
