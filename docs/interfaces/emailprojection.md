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

*Defined in [src/generated/api.ts:1742](https://github.com/mailslurp/mailslurp-client/blob/8d5c17f/src/generated/api.ts#L1742)*

**`memberof`** EmailProjection

___

### bcc

• `Optional` **bcc**: Array\<string>

*Defined in [src/generated/api.ts:1748](https://github.com/mailslurp/mailslurp-client/blob/8d5c17f/src/generated/api.ts#L1748)*

**`memberof`** EmailProjection

___

### bodyMD5Hash

• `Optional` **bodyMD5Hash**: string

*Defined in [src/generated/api.ts:1754](https://github.com/mailslurp/mailslurp-client/blob/8d5c17f/src/generated/api.ts#L1754)*

**`memberof`** EmailProjection

___

### cc

• `Optional` **cc**: Array\<string>

*Defined in [src/generated/api.ts:1760](https://github.com/mailslurp/mailslurp-client/blob/8d5c17f/src/generated/api.ts#L1760)*

**`memberof`** EmailProjection

___

### createdAt

•  **createdAt**: Date

*Defined in [src/generated/api.ts:1766](https://github.com/mailslurp/mailslurp-client/blob/8d5c17f/src/generated/api.ts#L1766)*

**`memberof`** EmailProjection

___

### from

• `Optional` **from**: string

*Defined in [src/generated/api.ts:1772](https://github.com/mailslurp/mailslurp-client/blob/8d5c17f/src/generated/api.ts#L1772)*

**`memberof`** EmailProjection

___

### id

•  **id**: string

*Defined in [src/generated/api.ts:1778](https://github.com/mailslurp/mailslurp-client/blob/8d5c17f/src/generated/api.ts#L1778)*

**`memberof`** EmailProjection

___

### inboxId

•  **inboxId**: string

*Defined in [src/generated/api.ts:1784](https://github.com/mailslurp/mailslurp-client/blob/8d5c17f/src/generated/api.ts#L1784)*

**`memberof`** EmailProjection

___

### read

• `Optional` **read**: boolean

*Defined in [src/generated/api.ts:1790](https://github.com/mailslurp/mailslurp-client/blob/8d5c17f/src/generated/api.ts#L1790)*

**`memberof`** EmailProjection

___

### subject

• `Optional` **subject**: string

*Defined in [src/generated/api.ts:1796](https://github.com/mailslurp/mailslurp-client/blob/8d5c17f/src/generated/api.ts#L1796)*

**`memberof`** EmailProjection

___

### teamAccess

• `Optional` **teamAccess**: boolean

*Defined in [src/generated/api.ts:1802](https://github.com/mailslurp/mailslurp-client/blob/8d5c17f/src/generated/api.ts#L1802)*

**`memberof`** EmailProjection

___

### to

•  **to**: Array\<string>

*Defined in [src/generated/api.ts:1808](https://github.com/mailslurp/mailslurp-client/blob/8d5c17f/src/generated/api.ts#L1808)*

**`memberof`** EmailProjection
