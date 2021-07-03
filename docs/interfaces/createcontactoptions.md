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

*Defined in [src/generated/api.ts:714](https://github.com/mailslurp/mailslurp-client/blob/e4d4355/src/generated/api.ts#L714)*

**`memberof`** CreateContactOptions

___

### emailAddresses

• `Optional` **emailAddresses**: Array\<string>

*Defined in [src/generated/api.ts:672](https://github.com/mailslurp/mailslurp-client/blob/e4d4355/src/generated/api.ts#L672)*

Set of email addresses belonging to the contact

**`memberof`** CreateContactOptions

___

### firstName

• `Optional` **firstName**: string

*Defined in [src/generated/api.ts:678](https://github.com/mailslurp/mailslurp-client/blob/e4d4355/src/generated/api.ts#L678)*

**`memberof`** CreateContactOptions

___

### groupId

• `Optional` **groupId**: string

*Defined in [src/generated/api.ts:684](https://github.com/mailslurp/mailslurp-client/blob/e4d4355/src/generated/api.ts#L684)*

Group IDs that contact belongs to

**`memberof`** CreateContactOptions

___

### lastName

• `Optional` **lastName**: string

*Defined in [src/generated/api.ts:708](https://github.com/mailslurp/mailslurp-client/blob/e4d4355/src/generated/api.ts#L708)*

**`memberof`** CreateContactOptions

___

### metaData

• `Optional` **metaData**: [JsonNode](jsonnode.md)

*Defined in [src/generated/api.ts:690](https://github.com/mailslurp/mailslurp-client/blob/e4d4355/src/generated/api.ts#L690)*

User metadata key value pairs to save for this contact. Can be any values you like.

**`memberof`** CreateContactOptions

___

### optOut

• `Optional` **optOut**: boolean

*Defined in [src/generated/api.ts:696](https://github.com/mailslurp/mailslurp-client/blob/e4d4355/src/generated/api.ts#L696)*

Has the user explicitly or implicitly opted out of being contacted? If so MailSlurp will ignore them in all actions.

**`memberof`** CreateContactOptions

___

### tags

• `Optional` **tags**: Array\<string>

*Defined in [src/generated/api.ts:702](https://github.com/mailslurp/mailslurp-client/blob/e4d4355/src/generated/api.ts#L702)*

Tags that can be used to search and group contacts

**`memberof`** CreateContactOptions
