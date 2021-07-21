**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / EmailProjection

# Interface: EmailProjection

A compact representation of a full email. Used in list endpoints to keep response sizes low. Body and attachments are not included. To get all fields of the email use the `getEmail` method with the email projection's ID. See `EmailDto` for documentation on projection properties.

**`export`** 

**`interface`** EmailProjection

## Hierarchy

* **EmailProjection**

## Index

### Properties

* [attachments](emailprojection.md#attachments)
* [bcc](emailprojection.md#bcc)
* [bodyExcerpt](emailprojection.md#bodyexcerpt)
* [bodyMD5Hash](emailprojection.md#bodymd5hash)
* [cc](emailprojection.md#cc)
* [createdAt](emailprojection.md#createdat)
* [from](emailprojection.md#from)
* [id](emailprojection.md#id)
* [inboxId](emailprojection.md#inboxid)
* [read](emailprojection.md#read)
* [subject](emailprojection.md#subject)
* [teamAccess](emailprojection.md#teamaccess)
* [to](emailprojection.md#to)

## Properties

### attachments

• `Optional` **attachments**: Array\<string>

*Defined in [src/generated/api.ts:2077](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L2077)*

**`memberof`** EmailProjection

___

### bcc

• `Optional` **bcc**: Array\<string>

*Defined in [src/generated/api.ts:2083](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L2083)*

**`memberof`** EmailProjection

___

### bodyExcerpt

• `Optional` **bodyExcerpt**: string

*Defined in [src/generated/api.ts:2089](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L2089)*

**`memberof`** EmailProjection

___

### bodyMD5Hash

• `Optional` **bodyMD5Hash**: string

*Defined in [src/generated/api.ts:2095](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L2095)*

**`memberof`** EmailProjection

___

### cc

• `Optional` **cc**: Array\<string>

*Defined in [src/generated/api.ts:2101](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L2101)*

**`memberof`** EmailProjection

___

### createdAt

•  **createdAt**: Date

*Defined in [src/generated/api.ts:2107](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L2107)*

**`memberof`** EmailProjection

___

### from

• `Optional` **from**: string

*Defined in [src/generated/api.ts:2113](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L2113)*

**`memberof`** EmailProjection

___

### id

•  **id**: string

*Defined in [src/generated/api.ts:2119](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L2119)*

**`memberof`** EmailProjection

___

### inboxId

•  **inboxId**: string

*Defined in [src/generated/api.ts:2125](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L2125)*

**`memberof`** EmailProjection

___

### read

• `Optional` **read**: boolean

*Defined in [src/generated/api.ts:2131](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L2131)*

**`memberof`** EmailProjection

___

### subject

• `Optional` **subject**: string

*Defined in [src/generated/api.ts:2137](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L2137)*

**`memberof`** EmailProjection

___

### teamAccess

• `Optional` **teamAccess**: boolean

*Defined in [src/generated/api.ts:2143](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L2143)*

**`memberof`** EmailProjection

___

### to

•  **to**: Array\<string>

*Defined in [src/generated/api.ts:2149](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L2149)*

**`memberof`** EmailProjection
