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
* [bodyMD5Hash](emailprojection.md#bodymd5hash)
* [cc](emailprojection.md#cc)
* [createdAt](emailprojection.md#createdat)
* [from](emailprojection.md#from)
* [id](emailprojection.md#id)
* [inboxId](emailprojection.md#inboxid)
* [read](emailprojection.md#read)
* [subject](emailprojection.md#subject)
* [to](emailprojection.md#to)

## Properties

### attachments

• `Optional` **attachments**: Array\<string>

*Defined in [src/generated/api.ts:1515](https://github.com/mailslurp/mailslurp-client/blob/65d1444/src/generated/api.ts#L1515)*

**`memberof`** EmailProjection

___

### bcc

• `Optional` **bcc**: Array\<string>

*Defined in [src/generated/api.ts:1521](https://github.com/mailslurp/mailslurp-client/blob/65d1444/src/generated/api.ts#L1521)*

**`memberof`** EmailProjection

___

### bodyMD5Hash

• `Optional` **bodyMD5Hash**: string

*Defined in [src/generated/api.ts:1527](https://github.com/mailslurp/mailslurp-client/blob/65d1444/src/generated/api.ts#L1527)*

**`memberof`** EmailProjection

___

### cc

• `Optional` **cc**: Array\<string>

*Defined in [src/generated/api.ts:1533](https://github.com/mailslurp/mailslurp-client/blob/65d1444/src/generated/api.ts#L1533)*

**`memberof`** EmailProjection

___

### createdAt

•  **createdAt**: Date

*Defined in [src/generated/api.ts:1539](https://github.com/mailslurp/mailslurp-client/blob/65d1444/src/generated/api.ts#L1539)*

**`memberof`** EmailProjection

___

### from

• `Optional` **from**: string

*Defined in [src/generated/api.ts:1545](https://github.com/mailslurp/mailslurp-client/blob/65d1444/src/generated/api.ts#L1545)*

**`memberof`** EmailProjection

___

### id

•  **id**: string

*Defined in [src/generated/api.ts:1551](https://github.com/mailslurp/mailslurp-client/blob/65d1444/src/generated/api.ts#L1551)*

**`memberof`** EmailProjection

___

### inboxId

•  **inboxId**: string

*Defined in [src/generated/api.ts:1557](https://github.com/mailslurp/mailslurp-client/blob/65d1444/src/generated/api.ts#L1557)*

**`memberof`** EmailProjection

___

### read

• `Optional` **read**: boolean

*Defined in [src/generated/api.ts:1563](https://github.com/mailslurp/mailslurp-client/blob/65d1444/src/generated/api.ts#L1563)*

**`memberof`** EmailProjection

___

### subject

• `Optional` **subject**: string

*Defined in [src/generated/api.ts:1569](https://github.com/mailslurp/mailslurp-client/blob/65d1444/src/generated/api.ts#L1569)*

**`memberof`** EmailProjection

___

### to

•  **to**: Array\<string>

*Defined in [src/generated/api.ts:1575](https://github.com/mailslurp/mailslurp-client/blob/65d1444/src/generated/api.ts#L1575)*

**`memberof`** EmailProjection
