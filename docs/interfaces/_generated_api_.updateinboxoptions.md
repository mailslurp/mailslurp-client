# Interface: UpdateInboxOptions

Options for updating inbox properties

**`export`** 

**`interface`** UpdateInboxOptions

## Hierarchy

* **UpdateInboxOptions**

## Properties

### `Optional` description

• **description**? : *string*

*Defined in [src/generated/api.ts:2254](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L2254)*

Optional description of an inbox for labelling purposes

**`type`** {string}

**`memberof`** UpdateInboxOptions

___

### `Optional` expiresAt

• **expiresAt**? : *Date*

*Defined in [src/generated/api.ts:2260](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L2260)*

When, if ever, will the inbox expire and be deleted. If null then this inbox is permanent and the emails in it won't be deleted.

**`type`** {Date}

**`memberof`** UpdateInboxOptions

___

### `Optional` favourite

• **favourite**? : *boolean*

*Defined in [src/generated/api.ts:2266](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L2266)*

Is the inbox favourited

**`type`** {boolean}

**`memberof`** UpdateInboxOptions

___

### `Optional` name

• **name**? : *string*

*Defined in [src/generated/api.ts:2272](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L2272)*

Optional name of the inbox. Displayed in the dashboard for easier search

**`type`** {string}

**`memberof`** UpdateInboxOptions

___

### `Optional` tags

• **tags**? : *Array‹string›*

*Defined in [src/generated/api.ts:2278](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L2278)*

Tags that inbox has been tagged with

**`type`** {Array<string>}

**`memberof`** UpdateInboxOptions
