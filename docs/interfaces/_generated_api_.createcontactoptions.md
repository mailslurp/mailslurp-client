# Interface: CreateContactOptions

**`export`** 

**`interface`** CreateContactOptions

## Hierarchy

* **CreateContactOptions**

## Properties

### `Optional` company

• **company**? : *string*

*Defined in [src/generated/api.ts:373](https://github.com/mailslurp/mailslurp-client-ts-js/blob/6b83217/src/generated/api.ts#L373)*

**`type`** {string}

**`memberof`** CreateContactOptions

___

### `Optional` emailAddresses

• **emailAddresses**? : *Array‹string›*

*Defined in [src/generated/api.ts:331](https://github.com/mailslurp/mailslurp-client-ts-js/blob/6b83217/src/generated/api.ts#L331)*

Set of email addresses belonging to the contact

**`type`** {Array<string>}

**`memberof`** CreateContactOptions

___

### `Optional` firstName

• **firstName**? : *string*

*Defined in [src/generated/api.ts:337](https://github.com/mailslurp/mailslurp-client-ts-js/blob/6b83217/src/generated/api.ts#L337)*

**`type`** {string}

**`memberof`** CreateContactOptions

___

### `Optional` groupId

• **groupId**? : *string*

*Defined in [src/generated/api.ts:343](https://github.com/mailslurp/mailslurp-client-ts-js/blob/6b83217/src/generated/api.ts#L343)*

Group IDs that contact belongs to

**`type`** {string}

**`memberof`** CreateContactOptions

___

### `Optional` lastName

• **lastName**? : *string*

*Defined in [src/generated/api.ts:367](https://github.com/mailslurp/mailslurp-client-ts-js/blob/6b83217/src/generated/api.ts#L367)*

**`type`** {string}

**`memberof`** CreateContactOptions

___

### `Optional` metaData

• **metaData**? : *[JsonNode](../modules/_generated_api_.jsonnode.md)*

*Defined in [src/generated/api.ts:349](https://github.com/mailslurp/mailslurp-client-ts-js/blob/6b83217/src/generated/api.ts#L349)*

User metadata key value pairs to save for this contact. Can be any values you like.

**`type`** {JsonNode}

**`memberof`** CreateContactOptions

___

### `Optional` optOut

• **optOut**? : *boolean*

*Defined in [src/generated/api.ts:355](https://github.com/mailslurp/mailslurp-client-ts-js/blob/6b83217/src/generated/api.ts#L355)*

Has the user explicitly or implicitly opted out of being contacted? If so MailSlurp will ignore them in all actions.

**`type`** {boolean}

**`memberof`** CreateContactOptions

___

### `Optional` tags

• **tags**? : *Array‹string›*

*Defined in [src/generated/api.ts:361](https://github.com/mailslurp/mailslurp-client-ts-js/blob/6b83217/src/generated/api.ts#L361)*

Tags that can be used to search and group contacts

**`type`** {Array<string>}

**`memberof`** CreateContactOptions
