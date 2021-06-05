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

*Defined in [src/generated/api.ts:706](https://github.com/mailslurp/mailslurp-client/blob/6b679b8/src/generated/api.ts#L706)*

**`memberof`** CreateContactOptions

___

### emailAddresses

• `Optional` **emailAddresses**: Array\<string>

*Defined in [src/generated/api.ts:664](https://github.com/mailslurp/mailslurp-client/blob/6b679b8/src/generated/api.ts#L664)*

Set of email addresses belonging to the contact

**`memberof`** CreateContactOptions

___

### firstName

• `Optional` **firstName**: string

*Defined in [src/generated/api.ts:670](https://github.com/mailslurp/mailslurp-client/blob/6b679b8/src/generated/api.ts#L670)*

**`memberof`** CreateContactOptions

___

### groupId

• `Optional` **groupId**: string

*Defined in [src/generated/api.ts:676](https://github.com/mailslurp/mailslurp-client/blob/6b679b8/src/generated/api.ts#L676)*

Group IDs that contact belongs to

**`memberof`** CreateContactOptions

___

### lastName

• `Optional` **lastName**: string

*Defined in [src/generated/api.ts:700](https://github.com/mailslurp/mailslurp-client/blob/6b679b8/src/generated/api.ts#L700)*

**`memberof`** CreateContactOptions

___

### metaData

• `Optional` **metaData**: [JsonNode](jsonnode.md)

*Defined in [src/generated/api.ts:682](https://github.com/mailslurp/mailslurp-client/blob/6b679b8/src/generated/api.ts#L682)*

User metadata key value pairs to save for this contact. Can be any values you like.

**`memberof`** CreateContactOptions

___

### optOut

• `Optional` **optOut**: boolean

*Defined in [src/generated/api.ts:688](https://github.com/mailslurp/mailslurp-client/blob/6b679b8/src/generated/api.ts#L688)*

Has the user explicitly or implicitly opted out of being contacted? If so MailSlurp will ignore them in all actions.

**`memberof`** CreateContactOptions

___

### tags

• `Optional` **tags**: Array\<string>

*Defined in [src/generated/api.ts:694](https://github.com/mailslurp/mailslurp-client/blob/6b679b8/src/generated/api.ts#L694)*

Tags that can be used to search and group contacts

**`memberof`** CreateContactOptions
