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

*Defined in [src/generated/api.ts:2179](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L2179)*

**`memberof`** EmailProjection

___

### bcc

• `Optional` **bcc**: Array\<string>

*Defined in [src/generated/api.ts:2185](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L2185)*

**`memberof`** EmailProjection

___

### bodyExcerpt

• `Optional` **bodyExcerpt**: string

*Defined in [src/generated/api.ts:2191](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L2191)*

**`memberof`** EmailProjection

___

### bodyMD5Hash

• `Optional` **bodyMD5Hash**: string

*Defined in [src/generated/api.ts:2197](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L2197)*

**`memberof`** EmailProjection

___

### cc

• `Optional` **cc**: Array\<string>

*Defined in [src/generated/api.ts:2203](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L2203)*

**`memberof`** EmailProjection

___

### createdAt

•  **createdAt**: Date

*Defined in [src/generated/api.ts:2209](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L2209)*

**`memberof`** EmailProjection

___

### from

• `Optional` **from**: string

*Defined in [src/generated/api.ts:2215](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L2215)*

**`memberof`** EmailProjection

___

### id

•  **id**: string

*Defined in [src/generated/api.ts:2221](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L2221)*

**`memberof`** EmailProjection

___

### inboxId

•  **inboxId**: string

*Defined in [src/generated/api.ts:2227](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L2227)*

**`memberof`** EmailProjection

___

### read

• `Optional` **read**: boolean

*Defined in [src/generated/api.ts:2233](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L2233)*

**`memberof`** EmailProjection

___

### subject

• `Optional` **subject**: string

*Defined in [src/generated/api.ts:2239](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L2239)*

**`memberof`** EmailProjection

___

### teamAccess

• `Optional` **teamAccess**: boolean

*Defined in [src/generated/api.ts:2245](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L2245)*

**`memberof`** EmailProjection

___

### to

•  **to**: Array\<string>

*Defined in [src/generated/api.ts:2251](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L2251)*

**`memberof`** EmailProjection
