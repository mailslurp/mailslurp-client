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

*Defined in [src/generated/api.ts:1861](https://github.com/mailslurp/mailslurp-client/blob/b27590b/src/generated/api.ts#L1861)*

**`memberof`** EmailProjection

___

### bcc

• `Optional` **bcc**: Array\<string>

*Defined in [src/generated/api.ts:1867](https://github.com/mailslurp/mailslurp-client/blob/b27590b/src/generated/api.ts#L1867)*

**`memberof`** EmailProjection

___

### bodyMD5Hash

• `Optional` **bodyMD5Hash**: string

*Defined in [src/generated/api.ts:1873](https://github.com/mailslurp/mailslurp-client/blob/b27590b/src/generated/api.ts#L1873)*

**`memberof`** EmailProjection

___

### cc

• `Optional` **cc**: Array\<string>

*Defined in [src/generated/api.ts:1879](https://github.com/mailslurp/mailslurp-client/blob/b27590b/src/generated/api.ts#L1879)*

**`memberof`** EmailProjection

___

### createdAt

•  **createdAt**: Date

*Defined in [src/generated/api.ts:1885](https://github.com/mailslurp/mailslurp-client/blob/b27590b/src/generated/api.ts#L1885)*

**`memberof`** EmailProjection

___

### from

• `Optional` **from**: string

*Defined in [src/generated/api.ts:1891](https://github.com/mailslurp/mailslurp-client/blob/b27590b/src/generated/api.ts#L1891)*

**`memberof`** EmailProjection

___

### id

•  **id**: string

*Defined in [src/generated/api.ts:1897](https://github.com/mailslurp/mailslurp-client/blob/b27590b/src/generated/api.ts#L1897)*

**`memberof`** EmailProjection

___

### inboxId

•  **inboxId**: string

*Defined in [src/generated/api.ts:1903](https://github.com/mailslurp/mailslurp-client/blob/b27590b/src/generated/api.ts#L1903)*

**`memberof`** EmailProjection

___

### read

• `Optional` **read**: boolean

*Defined in [src/generated/api.ts:1909](https://github.com/mailslurp/mailslurp-client/blob/b27590b/src/generated/api.ts#L1909)*

**`memberof`** EmailProjection

___

### subject

• `Optional` **subject**: string

*Defined in [src/generated/api.ts:1915](https://github.com/mailslurp/mailslurp-client/blob/b27590b/src/generated/api.ts#L1915)*

**`memberof`** EmailProjection

___

### teamAccess

• `Optional` **teamAccess**: boolean

*Defined in [src/generated/api.ts:1921](https://github.com/mailslurp/mailslurp-client/blob/b27590b/src/generated/api.ts#L1921)*

**`memberof`** EmailProjection

___

### to

•  **to**: Array\<string>

*Defined in [src/generated/api.ts:1927](https://github.com/mailslurp/mailslurp-client/blob/b27590b/src/generated/api.ts#L1927)*

**`memberof`** EmailProjection
