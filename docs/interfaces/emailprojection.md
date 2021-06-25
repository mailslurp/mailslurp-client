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

*Defined in [src/generated/api.ts:1842](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L1842)*

**`memberof`** EmailProjection

___

### bcc

• `Optional` **bcc**: Array\<string>

*Defined in [src/generated/api.ts:1848](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L1848)*

**`memberof`** EmailProjection

___

### bodyMD5Hash

• `Optional` **bodyMD5Hash**: string

*Defined in [src/generated/api.ts:1854](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L1854)*

**`memberof`** EmailProjection

___

### cc

• `Optional` **cc**: Array\<string>

*Defined in [src/generated/api.ts:1860](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L1860)*

**`memberof`** EmailProjection

___

### createdAt

•  **createdAt**: Date

*Defined in [src/generated/api.ts:1866](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L1866)*

**`memberof`** EmailProjection

___

### from

• `Optional` **from**: string

*Defined in [src/generated/api.ts:1872](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L1872)*

**`memberof`** EmailProjection

___

### id

•  **id**: string

*Defined in [src/generated/api.ts:1878](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L1878)*

**`memberof`** EmailProjection

___

### inboxId

•  **inboxId**: string

*Defined in [src/generated/api.ts:1884](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L1884)*

**`memberof`** EmailProjection

___

### read

• `Optional` **read**: boolean

*Defined in [src/generated/api.ts:1890](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L1890)*

**`memberof`** EmailProjection

___

### subject

• `Optional` **subject**: string

*Defined in [src/generated/api.ts:1896](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L1896)*

**`memberof`** EmailProjection

___

### teamAccess

• `Optional` **teamAccess**: boolean

*Defined in [src/generated/api.ts:1902](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L1902)*

**`memberof`** EmailProjection

___

### to

•  **to**: Array\<string>

*Defined in [src/generated/api.ts:1908](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L1908)*

**`memberof`** EmailProjection
