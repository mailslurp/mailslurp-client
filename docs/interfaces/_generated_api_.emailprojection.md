# Interface: EmailProjection

A compact representation of a full email. Used in list endpoints to keep response sizes low. Body and attachments are not included. To get all fields of the email use the `getEmail` method with the email projection's ID. See `EmailDto` for documentation on projection properties.

**`export`** 

**`interface`** EmailProjection

## Hierarchy

* **EmailProjection**

## Properties

### `Optional` attachments

• **attachments**? : *Array‹string›*

*Defined in [src/generated/api.ts:805](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L805)*

**`type`** {Array<string>}

**`memberof`** EmailProjection

___

### `Optional` bcc

• **bcc**? : *Array‹string›*

*Defined in [src/generated/api.ts:811](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L811)*

**`type`** {Array<string>}

**`memberof`** EmailProjection

___

### `Optional` cc

• **cc**? : *Array‹string›*

*Defined in [src/generated/api.ts:817](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L817)*

**`type`** {Array<string>}

**`memberof`** EmailProjection

___

###  createdAt

• **createdAt**: *Date*

*Defined in [src/generated/api.ts:823](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L823)*

**`type`** {Date}

**`memberof`** EmailProjection

___

### `Optional` from

• **from**? : *string*

*Defined in [src/generated/api.ts:829](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L829)*

**`type`** {string}

**`memberof`** EmailProjection

___

###  id

• **id**: *string*

*Defined in [src/generated/api.ts:835](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L835)*

**`type`** {string}

**`memberof`** EmailProjection

___

###  inboxId

• **inboxId**: *string*

*Defined in [src/generated/api.ts:841](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L841)*

**`type`** {string}

**`memberof`** EmailProjection

___

### `Optional` read

• **read**? : *boolean*

*Defined in [src/generated/api.ts:847](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L847)*

**`type`** {boolean}

**`memberof`** EmailProjection

___

### `Optional` subject

• **subject**? : *string*

*Defined in [src/generated/api.ts:853](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L853)*

**`type`** {string}

**`memberof`** EmailProjection

___

###  to

• **to**: *Array‹string›*

*Defined in [src/generated/api.ts:859](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L859)*

**`type`** {Array<string>}

**`memberof`** EmailProjection
