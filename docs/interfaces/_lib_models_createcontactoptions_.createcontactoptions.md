[MailSlurp JS](../README.md) › [Globals](../globals.md) › ["lib/models/CreateContactOptions"](../modules/_lib_models_createcontactoptions_.md) › [CreateContactOptions](_lib_models_createcontactoptions_.createcontactoptions.md)

# Interface: CreateContactOptions

**`export`** 

**`interface`** CreateContactOptions

## Hierarchy

* **CreateContactOptions**

## Index

### Properties

* [company](_lib_models_createcontactoptions_.createcontactoptions.md#optional-company)
* [emailAddresses](_lib_models_createcontactoptions_.createcontactoptions.md#optional-emailaddresses)
* [firstName](_lib_models_createcontactoptions_.createcontactoptions.md#optional-firstname)
* [groupId](_lib_models_createcontactoptions_.createcontactoptions.md#optional-groupid)
* [lastName](_lib_models_createcontactoptions_.createcontactoptions.md#optional-lastname)
* [metaData](_lib_models_createcontactoptions_.createcontactoptions.md#optional-metadata)
* [optOut](_lib_models_createcontactoptions_.createcontactoptions.md#optional-optout)
* [tags](_lib_models_createcontactoptions_.createcontactoptions.md#optional-tags)

## Properties

### `Optional` company

• **company**? : *string*

*Defined in [src/lib/models/CreateContactOptions.ts:76](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/CreateContactOptions.ts#L76)*

**`type`** {string}

**`memberof`** CreateContactOptions

___

### `Optional` emailAddresses

• **emailAddresses**? : *Array‹string›*

*Defined in [src/lib/models/CreateContactOptions.ts:34](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/CreateContactOptions.ts#L34)*

Set of email addresses belonging to the contact

**`type`** {Array<string>}

**`memberof`** CreateContactOptions

___

### `Optional` firstName

• **firstName**? : *string*

*Defined in [src/lib/models/CreateContactOptions.ts:40](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/CreateContactOptions.ts#L40)*

**`type`** {string}

**`memberof`** CreateContactOptions

___

### `Optional` groupId

• **groupId**? : *string*

*Defined in [src/lib/models/CreateContactOptions.ts:46](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/CreateContactOptions.ts#L46)*

Group IDs that contact belongs to

**`type`** {string}

**`memberof`** CreateContactOptions

___

### `Optional` lastName

• **lastName**? : *string*

*Defined in [src/lib/models/CreateContactOptions.ts:70](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/CreateContactOptions.ts#L70)*

**`type`** {string}

**`memberof`** CreateContactOptions

___

### `Optional` metaData

• **metaData**? : *[JsonNode](_lib_models_jsonnode_.jsonnode.md)*

*Defined in [src/lib/models/CreateContactOptions.ts:52](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/CreateContactOptions.ts#L52)*

**`type`** {JsonNode}

**`memberof`** CreateContactOptions

___

### `Optional` optOut

• **optOut**? : *boolean*

*Defined in [src/lib/models/CreateContactOptions.ts:58](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/CreateContactOptions.ts#L58)*

Has the user explicitly or implicitly opted out of being contacted? If so MailSlurp will ignore them in all actions.

**`type`** {boolean}

**`memberof`** CreateContactOptions

___

### `Optional` tags

• **tags**? : *Array‹string›*

*Defined in [src/lib/models/CreateContactOptions.ts:64](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/CreateContactOptions.ts#L64)*

Tags that can be used to search and group contacts

**`type`** {Array<string>}

**`memberof`** CreateContactOptions
