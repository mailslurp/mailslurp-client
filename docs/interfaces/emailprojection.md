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

*Defined in [src/generated/api.ts:1365](https://github.com/mailslurp/mailslurp-client/blob/cdc62f8/src/generated/api.ts#L1365)*

**`memberof`** EmailProjection

___

### bcc

• `Optional` **bcc**: Array\<string>

*Defined in [src/generated/api.ts:1371](https://github.com/mailslurp/mailslurp-client/blob/cdc62f8/src/generated/api.ts#L1371)*

**`memberof`** EmailProjection

___

### bodyMD5Hash

• `Optional` **bodyMD5Hash**: string

*Defined in [src/generated/api.ts:1377](https://github.com/mailslurp/mailslurp-client/blob/cdc62f8/src/generated/api.ts#L1377)*

**`memberof`** EmailProjection

___

### cc

• `Optional` **cc**: Array\<string>

*Defined in [src/generated/api.ts:1383](https://github.com/mailslurp/mailslurp-client/blob/cdc62f8/src/generated/api.ts#L1383)*

**`memberof`** EmailProjection

___

### createdAt

•  **createdAt**: Date

*Defined in [src/generated/api.ts:1389](https://github.com/mailslurp/mailslurp-client/blob/cdc62f8/src/generated/api.ts#L1389)*

**`memberof`** EmailProjection

___

### from

• `Optional` **from**: string

*Defined in [src/generated/api.ts:1395](https://github.com/mailslurp/mailslurp-client/blob/cdc62f8/src/generated/api.ts#L1395)*

**`memberof`** EmailProjection

___

### id

•  **id**: string

*Defined in [src/generated/api.ts:1401](https://github.com/mailslurp/mailslurp-client/blob/cdc62f8/src/generated/api.ts#L1401)*

**`memberof`** EmailProjection

___

### inboxId

•  **inboxId**: string

*Defined in [src/generated/api.ts:1407](https://github.com/mailslurp/mailslurp-client/blob/cdc62f8/src/generated/api.ts#L1407)*

**`memberof`** EmailProjection

___

### read

• `Optional` **read**: boolean

*Defined in [src/generated/api.ts:1413](https://github.com/mailslurp/mailslurp-client/blob/cdc62f8/src/generated/api.ts#L1413)*

**`memberof`** EmailProjection

___

### subject

• `Optional` **subject**: string

*Defined in [src/generated/api.ts:1419](https://github.com/mailslurp/mailslurp-client/blob/cdc62f8/src/generated/api.ts#L1419)*

**`memberof`** EmailProjection

___

### to

•  **to**: Array\<string>

*Defined in [src/generated/api.ts:1425](https://github.com/mailslurp/mailslurp-client/blob/cdc62f8/src/generated/api.ts#L1425)*

**`memberof`** EmailProjection
