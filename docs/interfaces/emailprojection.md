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
* [teamAccess](emailprojection.md#teamaccess)
* [to](emailprojection.md#to)

## Properties

### attachments

• `Optional` **attachments**: Array\<string>

*Defined in [src/generated/api.ts:1649](https://github.com/mailslurp/mailslurp-client/blob/c83a162/src/generated/api.ts#L1649)*

**`memberof`** EmailProjection

___

### bcc

• `Optional` **bcc**: Array\<string>

*Defined in [src/generated/api.ts:1655](https://github.com/mailslurp/mailslurp-client/blob/c83a162/src/generated/api.ts#L1655)*

**`memberof`** EmailProjection

___

### bodyMD5Hash

• `Optional` **bodyMD5Hash**: string

*Defined in [src/generated/api.ts:1661](https://github.com/mailslurp/mailslurp-client/blob/c83a162/src/generated/api.ts#L1661)*

**`memberof`** EmailProjection

___

### cc

• `Optional` **cc**: Array\<string>

*Defined in [src/generated/api.ts:1667](https://github.com/mailslurp/mailslurp-client/blob/c83a162/src/generated/api.ts#L1667)*

**`memberof`** EmailProjection

___

### createdAt

•  **createdAt**: Date

*Defined in [src/generated/api.ts:1673](https://github.com/mailslurp/mailslurp-client/blob/c83a162/src/generated/api.ts#L1673)*

**`memberof`** EmailProjection

___

### from

• `Optional` **from**: string

*Defined in [src/generated/api.ts:1679](https://github.com/mailslurp/mailslurp-client/blob/c83a162/src/generated/api.ts#L1679)*

**`memberof`** EmailProjection

___

### id

•  **id**: string

*Defined in [src/generated/api.ts:1685](https://github.com/mailslurp/mailslurp-client/blob/c83a162/src/generated/api.ts#L1685)*

**`memberof`** EmailProjection

___

### inboxId

•  **inboxId**: string

*Defined in [src/generated/api.ts:1691](https://github.com/mailslurp/mailslurp-client/blob/c83a162/src/generated/api.ts#L1691)*

**`memberof`** EmailProjection

___

### read

• `Optional` **read**: boolean

*Defined in [src/generated/api.ts:1697](https://github.com/mailslurp/mailslurp-client/blob/c83a162/src/generated/api.ts#L1697)*

**`memberof`** EmailProjection

___

### subject

• `Optional` **subject**: string

*Defined in [src/generated/api.ts:1703](https://github.com/mailslurp/mailslurp-client/blob/c83a162/src/generated/api.ts#L1703)*

**`memberof`** EmailProjection

___

### teamAccess

• `Optional` **teamAccess**: boolean

*Defined in [src/generated/api.ts:1709](https://github.com/mailslurp/mailslurp-client/blob/c83a162/src/generated/api.ts#L1709)*

**`memberof`** EmailProjection

___

### to

•  **to**: Array\<string>

*Defined in [src/generated/api.ts:1715](https://github.com/mailslurp/mailslurp-client/blob/c83a162/src/generated/api.ts#L1715)*

**`memberof`** EmailProjection
