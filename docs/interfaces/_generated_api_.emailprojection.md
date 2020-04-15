# Interface: EmailProjection

A compact representation of a full email. Used in list endpoints to keep response sizes low. Body and attachments are not included. To get all fields of the email use the `getEmail` method with the email projection's ID. See `EmailDto` for documentation on projection properties.

**`export`** 

**`interface`** EmailProjection

## Hierarchy

* **EmailProjection**

## Properties

### `Optional` attachments

• **attachments**? : *Array‹string›*

*Defined in [src/generated/api.ts:782](https://github.com/mailslurp/mailslurp-client-ts-js/blob/45dbdd8/src/generated/api.ts#L782)*

**`type`** {Array<string>}

**`memberof`** EmailProjection

___

### `Optional` bcc

• **bcc**? : *Array‹string›*

*Defined in [src/generated/api.ts:788](https://github.com/mailslurp/mailslurp-client-ts-js/blob/45dbdd8/src/generated/api.ts#L788)*

**`type`** {Array<string>}

**`memberof`** EmailProjection

___

### `Optional` cc

• **cc**? : *Array‹string›*

*Defined in [src/generated/api.ts:794](https://github.com/mailslurp/mailslurp-client-ts-js/blob/45dbdd8/src/generated/api.ts#L794)*

**`type`** {Array<string>}

**`memberof`** EmailProjection

___

###  createdAt

• **createdAt**: *Date*

*Defined in [src/generated/api.ts:800](https://github.com/mailslurp/mailslurp-client-ts-js/blob/45dbdd8/src/generated/api.ts#L800)*

**`type`** {Date}

**`memberof`** EmailProjection

___

###  id

• **id**: *string*

*Defined in [src/generated/api.ts:806](https://github.com/mailslurp/mailslurp-client-ts-js/blob/45dbdd8/src/generated/api.ts#L806)*

**`type`** {string}

**`memberof`** EmailProjection

___

###  inboxId

• **inboxId**: *string*

*Defined in [src/generated/api.ts:812](https://github.com/mailslurp/mailslurp-client-ts-js/blob/45dbdd8/src/generated/api.ts#L812)*

**`type`** {string}

**`memberof`** EmailProjection

___

### `Optional` read

• **read**? : *boolean*

*Defined in [src/generated/api.ts:818](https://github.com/mailslurp/mailslurp-client-ts-js/blob/45dbdd8/src/generated/api.ts#L818)*

**`type`** {boolean}

**`memberof`** EmailProjection

___

### `Optional` subject

• **subject**? : *string*

*Defined in [src/generated/api.ts:824](https://github.com/mailslurp/mailslurp-client-ts-js/blob/45dbdd8/src/generated/api.ts#L824)*

**`type`** {string}

**`memberof`** EmailProjection

___

###  to

• **to**: *Array‹string›*

*Defined in [src/generated/api.ts:830](https://github.com/mailslurp/mailslurp-client-ts-js/blob/45dbdd8/src/generated/api.ts#L830)*

**`type`** {Array<string>}

**`memberof`** EmailProjection
