[MailSlurp JS](../README.md) › [Globals](../globals.md) › ["generated/api"](../modules/_generated_api_.md) › [CreateContactOptions](_generated_api_.createcontactoptions.md)

# Interface: CreateContactOptions

**`export`** 

**`interface`** CreateContactOptions

## Hierarchy

* **CreateContactOptions**

## Index

### Properties

* [company](_generated_api_.createcontactoptions.md#optional-company)
* [emailAddresses](_generated_api_.createcontactoptions.md#optional-emailaddresses)
* [firstName](_generated_api_.createcontactoptions.md#optional-firstname)
* [groupId](_generated_api_.createcontactoptions.md#optional-groupid)
* [lastName](_generated_api_.createcontactoptions.md#optional-lastname)
* [metaData](_generated_api_.createcontactoptions.md#optional-metadata)
* [optOut](_generated_api_.createcontactoptions.md#optional-optout)
* [tags](_generated_api_.createcontactoptions.md#optional-tags)

## Properties

### `Optional` company

• **company**? : *string*

Defined in src/generated/api.ts:309

**`type`** {string}

**`memberof`** CreateContactOptions

___

### `Optional` emailAddresses

• **emailAddresses**? : *Array‹string›*

Defined in src/generated/api.ts:267

Set of email addresses belonging to the contact

**`type`** {Array<string>}

**`memberof`** CreateContactOptions

___

### `Optional` firstName

• **firstName**? : *string*

Defined in src/generated/api.ts:273

**`type`** {string}

**`memberof`** CreateContactOptions

___

### `Optional` groupId

• **groupId**? : *string*

Defined in src/generated/api.ts:279

Group IDs that contact belongs to

**`type`** {string}

**`memberof`** CreateContactOptions

___

### `Optional` lastName

• **lastName**? : *string*

Defined in src/generated/api.ts:303

**`type`** {string}

**`memberof`** CreateContactOptions

___

### `Optional` metaData

• **metaData**? : *[JsonNode](../modules/_generated_api_.jsonnode.md)*

Defined in src/generated/api.ts:285

User metadata key value pairs to save for this contact. Can be any values you like.

**`type`** {JsonNode}

**`memberof`** CreateContactOptions

___

### `Optional` optOut

• **optOut**? : *boolean*

Defined in src/generated/api.ts:291

Has the user explicitly or implicitly opted out of being contacted? If so MailSlurp will ignore them in all actions.

**`type`** {boolean}

**`memberof`** CreateContactOptions

___

### `Optional` tags

• **tags**? : *Array‹string›*

Defined in src/generated/api.ts:297

Tags that can be used to search and group contacts

**`type`** {Array<string>}

**`memberof`** CreateContactOptions
