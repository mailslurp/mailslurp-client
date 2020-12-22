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

*Defined in [src/generated/api.ts:1363](https://github.com/mailslurp/mailslurp-client/blob/c889afa/src/generated/api.ts#L1363)*

**`memberof`** EmailProjection

___

### bcc

• `Optional` **bcc**: Array\<string>

*Defined in [src/generated/api.ts:1369](https://github.com/mailslurp/mailslurp-client/blob/c889afa/src/generated/api.ts#L1369)*

**`memberof`** EmailProjection

___

### bodyMD5Hash

• `Optional` **bodyMD5Hash**: string

*Defined in [src/generated/api.ts:1375](https://github.com/mailslurp/mailslurp-client/blob/c889afa/src/generated/api.ts#L1375)*

**`memberof`** EmailProjection

___

### cc

• `Optional` **cc**: Array\<string>

*Defined in [src/generated/api.ts:1381](https://github.com/mailslurp/mailslurp-client/blob/c889afa/src/generated/api.ts#L1381)*

**`memberof`** EmailProjection

___

### createdAt

•  **createdAt**: Date

*Defined in [src/generated/api.ts:1387](https://github.com/mailslurp/mailslurp-client/blob/c889afa/src/generated/api.ts#L1387)*

**`memberof`** EmailProjection

___

### from

• `Optional` **from**: string

*Defined in [src/generated/api.ts:1393](https://github.com/mailslurp/mailslurp-client/blob/c889afa/src/generated/api.ts#L1393)*

**`memberof`** EmailProjection

___

### id

•  **id**: string

*Defined in [src/generated/api.ts:1399](https://github.com/mailslurp/mailslurp-client/blob/c889afa/src/generated/api.ts#L1399)*

**`memberof`** EmailProjection

___

### inboxId

•  **inboxId**: string

*Defined in [src/generated/api.ts:1405](https://github.com/mailslurp/mailslurp-client/blob/c889afa/src/generated/api.ts#L1405)*

**`memberof`** EmailProjection

___

### read

• `Optional` **read**: boolean

*Defined in [src/generated/api.ts:1411](https://github.com/mailslurp/mailslurp-client/blob/c889afa/src/generated/api.ts#L1411)*

**`memberof`** EmailProjection

___

### subject

• `Optional` **subject**: string

*Defined in [src/generated/api.ts:1417](https://github.com/mailslurp/mailslurp-client/blob/c889afa/src/generated/api.ts#L1417)*

**`memberof`** EmailProjection

___

### to

•  **to**: Array\<string>

*Defined in [src/generated/api.ts:1423](https://github.com/mailslurp/mailslurp-client/blob/c889afa/src/generated/api.ts#L1423)*

**`memberof`** EmailProjection
