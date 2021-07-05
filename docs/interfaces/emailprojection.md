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

*Defined in [src/generated/api.ts:1869](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L1869)*

**`memberof`** EmailProjection

___

### bcc

• `Optional` **bcc**: Array\<string>

*Defined in [src/generated/api.ts:1875](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L1875)*

**`memberof`** EmailProjection

___

### bodyExcerpt

• `Optional` **bodyExcerpt**: string

*Defined in [src/generated/api.ts:1881](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L1881)*

**`memberof`** EmailProjection

___

### bodyMD5Hash

• `Optional` **bodyMD5Hash**: string

*Defined in [src/generated/api.ts:1887](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L1887)*

**`memberof`** EmailProjection

___

### cc

• `Optional` **cc**: Array\<string>

*Defined in [src/generated/api.ts:1893](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L1893)*

**`memberof`** EmailProjection

___

### createdAt

•  **createdAt**: Date

*Defined in [src/generated/api.ts:1899](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L1899)*

**`memberof`** EmailProjection

___

### from

• `Optional` **from**: string

*Defined in [src/generated/api.ts:1905](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L1905)*

**`memberof`** EmailProjection

___

### id

•  **id**: string

*Defined in [src/generated/api.ts:1911](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L1911)*

**`memberof`** EmailProjection

___

### inboxId

•  **inboxId**: string

*Defined in [src/generated/api.ts:1917](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L1917)*

**`memberof`** EmailProjection

___

### read

• `Optional` **read**: boolean

*Defined in [src/generated/api.ts:1923](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L1923)*

**`memberof`** EmailProjection

___

### subject

• `Optional` **subject**: string

*Defined in [src/generated/api.ts:1929](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L1929)*

**`memberof`** EmailProjection

___

### teamAccess

• `Optional` **teamAccess**: boolean

*Defined in [src/generated/api.ts:1935](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L1935)*

**`memberof`** EmailProjection

___

### to

•  **to**: Array\<string>

*Defined in [src/generated/api.ts:1941](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L1941)*

**`memberof`** EmailProjection
