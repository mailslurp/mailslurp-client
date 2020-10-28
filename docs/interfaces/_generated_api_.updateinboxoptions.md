# Interface: UpdateInboxOptions

Options for updating inbox properties

**`export`** 

**`interface`** UpdateInboxOptions

## Hierarchy

* **UpdateInboxOptions**

## Properties

### `Optional` description

• **description**? : *string*

*Defined in [src/generated/api.ts:2394](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L2394)*

Optional description of an inbox for labelling purposes

**`type`** {string}

**`memberof`** UpdateInboxOptions

___

### `Optional` expiresAt

• **expiresAt**? : *Date*

*Defined in [src/generated/api.ts:2400](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L2400)*

When, if ever, will the inbox expire and be deleted. If null then this inbox is permanent and the emails in it won't be deleted. Timestamp passed as string.

**`type`** {Date}

**`memberof`** UpdateInboxOptions

___

### `Optional` favourite

• **favourite**? : *boolean*

*Defined in [src/generated/api.ts:2406](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L2406)*

Is the inbox favourited

**`type`** {boolean}

**`memberof`** UpdateInboxOptions

___

### `Optional` name

• **name**? : *string*

*Defined in [src/generated/api.ts:2412](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L2412)*

Optional name of the inbox. Displayed in the dashboard for easier search

**`type`** {string}

**`memberof`** UpdateInboxOptions

___

### `Optional` tags

• **tags**? : *Array‹string›*

*Defined in [src/generated/api.ts:2418](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L2418)*

Tags that inbox has been tagged with

**`type`** {Array<string>}

**`memberof`** UpdateInboxOptions
