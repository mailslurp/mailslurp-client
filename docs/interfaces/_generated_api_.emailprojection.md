# Interface: EmailProjection

A compact representation of a full email. Used in list endpoints to keep response sizes low. Body and attachments are not included. To get all fields of the email use the `getEmail` method with the email projection's ID. See `EmailDto` for documentation on projection properties.

**`export`** 

**`interface`** EmailProjection

## Hierarchy

* **EmailProjection**

## Properties

### `Optional` attachments

• **attachments**? : *Array‹string›*

*Defined in [src/generated/api.ts:785](https://github.com/mailslurp/mailslurp-client-ts-js/blob/507ad2d/src/generated/api.ts#L785)*

**`type`** {Array<string>}

**`memberof`** EmailProjection

___

### `Optional` bcc

• **bcc**? : *Array‹string›*

*Defined in [src/generated/api.ts:791](https://github.com/mailslurp/mailslurp-client-ts-js/blob/507ad2d/src/generated/api.ts#L791)*

**`type`** {Array<string>}

**`memberof`** EmailProjection

___

### `Optional` cc

• **cc**? : *Array‹string›*

*Defined in [src/generated/api.ts:797](https://github.com/mailslurp/mailslurp-client-ts-js/blob/507ad2d/src/generated/api.ts#L797)*

**`type`** {Array<string>}

**`memberof`** EmailProjection

___

###  createdAt

• **createdAt**: *Date*

*Defined in [src/generated/api.ts:803](https://github.com/mailslurp/mailslurp-client-ts-js/blob/507ad2d/src/generated/api.ts#L803)*

**`type`** {Date}

**`memberof`** EmailProjection

___

###  id

• **id**: *string*

*Defined in [src/generated/api.ts:809](https://github.com/mailslurp/mailslurp-client-ts-js/blob/507ad2d/src/generated/api.ts#L809)*

**`type`** {string}

**`memberof`** EmailProjection

___

###  inboxId

• **inboxId**: *string*

*Defined in [src/generated/api.ts:815](https://github.com/mailslurp/mailslurp-client-ts-js/blob/507ad2d/src/generated/api.ts#L815)*

**`type`** {string}

**`memberof`** EmailProjection

___

### `Optional` read

• **read**? : *boolean*

*Defined in [src/generated/api.ts:821](https://github.com/mailslurp/mailslurp-client-ts-js/blob/507ad2d/src/generated/api.ts#L821)*

**`type`** {boolean}

**`memberof`** EmailProjection

___

### `Optional` subject

• **subject**? : *string*

*Defined in [src/generated/api.ts:827](https://github.com/mailslurp/mailslurp-client-ts-js/blob/507ad2d/src/generated/api.ts#L827)*

**`type`** {string}

**`memberof`** EmailProjection

___

###  to

• **to**: *Array‹string›*

*Defined in [src/generated/api.ts:833](https://github.com/mailslurp/mailslurp-client-ts-js/blob/507ad2d/src/generated/api.ts#L833)*

**`type`** {Array<string>}

**`memberof`** EmailProjection
