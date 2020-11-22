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

*Defined in [src/generated/api.ts:881](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L881)*

**`memberof`** EmailProjection

___

### bcc

• `Optional` **bcc**: Array\<string>

*Defined in [src/generated/api.ts:887](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L887)*

**`memberof`** EmailProjection

___

### bodyMD5Hash

• `Optional` **bodyMD5Hash**: string

*Defined in [src/generated/api.ts:893](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L893)*

**`memberof`** EmailProjection

___

### cc

• `Optional` **cc**: Array\<string>

*Defined in [src/generated/api.ts:899](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L899)*

**`memberof`** EmailProjection

___

### createdAt

•  **createdAt**: Date

*Defined in [src/generated/api.ts:905](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L905)*

**`memberof`** EmailProjection

___

### from

• `Optional` **from**: string

*Defined in [src/generated/api.ts:911](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L911)*

**`memberof`** EmailProjection

___

### id

•  **id**: string

*Defined in [src/generated/api.ts:917](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L917)*

**`memberof`** EmailProjection

___

### inboxId

•  **inboxId**: string

*Defined in [src/generated/api.ts:923](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L923)*

**`memberof`** EmailProjection

___

### read

• `Optional` **read**: boolean

*Defined in [src/generated/api.ts:929](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L929)*

**`memberof`** EmailProjection

___

### subject

• `Optional` **subject**: string

*Defined in [src/generated/api.ts:935](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L935)*

**`memberof`** EmailProjection

___

### to

•  **to**: Array\<string>

*Defined in [src/generated/api.ts:941](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L941)*

**`memberof`** EmailProjection
