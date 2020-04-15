# Interface: CreateContactOptions

**`export`** 

**`interface`** CreateContactOptions

## Hierarchy

* **CreateContactOptions**

## Properties

### `Optional` company

• **company**? : *string*

*Defined in [src/generated/api.ts:370](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L370)*

**`type`** {string}

**`memberof`** CreateContactOptions

___

### `Optional` emailAddresses

• **emailAddresses**? : *Array‹string›*

*Defined in [src/generated/api.ts:328](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L328)*

Set of email addresses belonging to the contact

**`type`** {Array<string>}

**`memberof`** CreateContactOptions

___

### `Optional` firstName

• **firstName**? : *string*

*Defined in [src/generated/api.ts:334](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L334)*

**`type`** {string}

**`memberof`** CreateContactOptions

___

### `Optional` groupId

• **groupId**? : *string*

*Defined in [src/generated/api.ts:340](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L340)*

Group IDs that contact belongs to

**`type`** {string}

**`memberof`** CreateContactOptions

___

### `Optional` lastName

• **lastName**? : *string*

*Defined in [src/generated/api.ts:364](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L364)*

**`type`** {string}

**`memberof`** CreateContactOptions

___

### `Optional` metaData

• **metaData**? : *[JsonNode](../modules/_generated_api_.jsonnode.md)*

*Defined in [src/generated/api.ts:346](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L346)*

User metadata key value pairs to save for this contact. Can be any values you like.

**`type`** {JsonNode}

**`memberof`** CreateContactOptions

___

### `Optional` optOut

• **optOut**? : *boolean*

*Defined in [src/generated/api.ts:352](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L352)*

Has the user explicitly or implicitly opted out of being contacted? If so MailSlurp will ignore them in all actions.

**`type`** {boolean}

**`memberof`** CreateContactOptions

___

### `Optional` tags

• **tags**? : *Array‹string›*

*Defined in [src/generated/api.ts:358](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L358)*

Tags that can be used to search and group contacts

**`type`** {Array<string>}

**`memberof`** CreateContactOptions
