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

*Defined in [src/generated/api.ts:2159](https://github.com/mailslurp/mailslurp-client/blob/c5e5f20/src/generated/api.ts#L2159)*

**`memberof`** EmailProjection

___

### bcc

• `Optional` **bcc**: Array\<string>

*Defined in [src/generated/api.ts:2165](https://github.com/mailslurp/mailslurp-client/blob/c5e5f20/src/generated/api.ts#L2165)*

**`memberof`** EmailProjection

___

### bodyExcerpt

• `Optional` **bodyExcerpt**: string

*Defined in [src/generated/api.ts:2171](https://github.com/mailslurp/mailslurp-client/blob/c5e5f20/src/generated/api.ts#L2171)*

**`memberof`** EmailProjection

___

### bodyMD5Hash

• `Optional` **bodyMD5Hash**: string

*Defined in [src/generated/api.ts:2177](https://github.com/mailslurp/mailslurp-client/blob/c5e5f20/src/generated/api.ts#L2177)*

**`memberof`** EmailProjection

___

### cc

• `Optional` **cc**: Array\<string>

*Defined in [src/generated/api.ts:2183](https://github.com/mailslurp/mailslurp-client/blob/c5e5f20/src/generated/api.ts#L2183)*

**`memberof`** EmailProjection

___

### createdAt

•  **createdAt**: Date

*Defined in [src/generated/api.ts:2189](https://github.com/mailslurp/mailslurp-client/blob/c5e5f20/src/generated/api.ts#L2189)*

**`memberof`** EmailProjection

___

### from

• `Optional` **from**: string

*Defined in [src/generated/api.ts:2195](https://github.com/mailslurp/mailslurp-client/blob/c5e5f20/src/generated/api.ts#L2195)*

**`memberof`** EmailProjection

___

### id

•  **id**: string

*Defined in [src/generated/api.ts:2201](https://github.com/mailslurp/mailslurp-client/blob/c5e5f20/src/generated/api.ts#L2201)*

**`memberof`** EmailProjection

___

### inboxId

•  **inboxId**: string

*Defined in [src/generated/api.ts:2207](https://github.com/mailslurp/mailslurp-client/blob/c5e5f20/src/generated/api.ts#L2207)*

**`memberof`** EmailProjection

___

### read

• `Optional` **read**: boolean

*Defined in [src/generated/api.ts:2213](https://github.com/mailslurp/mailslurp-client/blob/c5e5f20/src/generated/api.ts#L2213)*

**`memberof`** EmailProjection

___

### subject

• `Optional` **subject**: string

*Defined in [src/generated/api.ts:2219](https://github.com/mailslurp/mailslurp-client/blob/c5e5f20/src/generated/api.ts#L2219)*

**`memberof`** EmailProjection

___

### teamAccess

• `Optional` **teamAccess**: boolean

*Defined in [src/generated/api.ts:2225](https://github.com/mailslurp/mailslurp-client/blob/c5e5f20/src/generated/api.ts#L2225)*

**`memberof`** EmailProjection

___

### to

•  **to**: Array\<string>

*Defined in [src/generated/api.ts:2231](https://github.com/mailslurp/mailslurp-client/blob/c5e5f20/src/generated/api.ts#L2231)*

**`memberof`** EmailProjection
