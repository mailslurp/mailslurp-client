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

*Defined in [src/generated/api.ts:1939](https://github.com/mailslurp/mailslurp-client/blob/eace919/src/generated/api.ts#L1939)*

**`memberof`** EmailProjection

___

### bcc

• `Optional` **bcc**: Array\<string>

*Defined in [src/generated/api.ts:1945](https://github.com/mailslurp/mailslurp-client/blob/eace919/src/generated/api.ts#L1945)*

**`memberof`** EmailProjection

___

### bodyExcerpt

• `Optional` **bodyExcerpt**: string

*Defined in [src/generated/api.ts:1951](https://github.com/mailslurp/mailslurp-client/blob/eace919/src/generated/api.ts#L1951)*

**`memberof`** EmailProjection

___

### bodyMD5Hash

• `Optional` **bodyMD5Hash**: string

*Defined in [src/generated/api.ts:1957](https://github.com/mailslurp/mailslurp-client/blob/eace919/src/generated/api.ts#L1957)*

**`memberof`** EmailProjection

___

### cc

• `Optional` **cc**: Array\<string>

*Defined in [src/generated/api.ts:1963](https://github.com/mailslurp/mailslurp-client/blob/eace919/src/generated/api.ts#L1963)*

**`memberof`** EmailProjection

___

### createdAt

•  **createdAt**: Date

*Defined in [src/generated/api.ts:1969](https://github.com/mailslurp/mailslurp-client/blob/eace919/src/generated/api.ts#L1969)*

**`memberof`** EmailProjection

___

### from

• `Optional` **from**: string

*Defined in [src/generated/api.ts:1975](https://github.com/mailslurp/mailslurp-client/blob/eace919/src/generated/api.ts#L1975)*

**`memberof`** EmailProjection

___

### id

•  **id**: string

*Defined in [src/generated/api.ts:1981](https://github.com/mailslurp/mailslurp-client/blob/eace919/src/generated/api.ts#L1981)*

**`memberof`** EmailProjection

___

### inboxId

•  **inboxId**: string

*Defined in [src/generated/api.ts:1987](https://github.com/mailslurp/mailslurp-client/blob/eace919/src/generated/api.ts#L1987)*

**`memberof`** EmailProjection

___

### read

• `Optional` **read**: boolean

*Defined in [src/generated/api.ts:1993](https://github.com/mailslurp/mailslurp-client/blob/eace919/src/generated/api.ts#L1993)*

**`memberof`** EmailProjection

___

### subject

• `Optional` **subject**: string

*Defined in [src/generated/api.ts:1999](https://github.com/mailslurp/mailslurp-client/blob/eace919/src/generated/api.ts#L1999)*

**`memberof`** EmailProjection

___

### teamAccess

• `Optional` **teamAccess**: boolean

*Defined in [src/generated/api.ts:2005](https://github.com/mailslurp/mailslurp-client/blob/eace919/src/generated/api.ts#L2005)*

**`memberof`** EmailProjection

___

### to

•  **to**: Array\<string>

*Defined in [src/generated/api.ts:2011](https://github.com/mailslurp/mailslurp-client/blob/eace919/src/generated/api.ts#L2011)*

**`memberof`** EmailProjection
