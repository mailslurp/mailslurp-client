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

*Defined in [src/generated/api.ts:713](https://github.com/mailslurp/mailslurp-client/blob/24bff2e/src/generated/api.ts#L713)*

**`memberof`** CreateContactOptions

___

### emailAddresses

• `Optional` **emailAddresses**: Array\<string>

*Defined in [src/generated/api.ts:671](https://github.com/mailslurp/mailslurp-client/blob/24bff2e/src/generated/api.ts#L671)*

Set of email addresses belonging to the contact

**`memberof`** CreateContactOptions

___

### firstName

• `Optional` **firstName**: string

*Defined in [src/generated/api.ts:677](https://github.com/mailslurp/mailslurp-client/blob/24bff2e/src/generated/api.ts#L677)*

**`memberof`** CreateContactOptions

___

### groupId

• `Optional` **groupId**: string

*Defined in [src/generated/api.ts:683](https://github.com/mailslurp/mailslurp-client/blob/24bff2e/src/generated/api.ts#L683)*

Group IDs that contact belongs to

**`memberof`** CreateContactOptions

___

### lastName

• `Optional` **lastName**: string

*Defined in [src/generated/api.ts:707](https://github.com/mailslurp/mailslurp-client/blob/24bff2e/src/generated/api.ts#L707)*

**`memberof`** CreateContactOptions

___

### metaData

• `Optional` **metaData**: [JsonNode](jsonnode.md)

*Defined in [src/generated/api.ts:689](https://github.com/mailslurp/mailslurp-client/blob/24bff2e/src/generated/api.ts#L689)*

User metadata key value pairs to save for this contact. Can be any values you like.

**`memberof`** CreateContactOptions

___

### optOut

• `Optional` **optOut**: boolean

*Defined in [src/generated/api.ts:695](https://github.com/mailslurp/mailslurp-client/blob/24bff2e/src/generated/api.ts#L695)*

Has the user explicitly or implicitly opted out of being contacted? If so MailSlurp will ignore them in all actions.

**`memberof`** CreateContactOptions

___

### tags

• `Optional` **tags**: Array\<string>

*Defined in [src/generated/api.ts:701](https://github.com/mailslurp/mailslurp-client/blob/24bff2e/src/generated/api.ts#L701)*

Tags that can be used to search and group contacts

**`memberof`** CreateContactOptions
