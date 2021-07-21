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

*Defined in [src/generated/api.ts:2103](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L2103)*

**`memberof`** EmailProjection

___

### bcc

• `Optional` **bcc**: Array\<string>

*Defined in [src/generated/api.ts:2109](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L2109)*

**`memberof`** EmailProjection

___

### bodyExcerpt

• `Optional` **bodyExcerpt**: string

*Defined in [src/generated/api.ts:2115](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L2115)*

**`memberof`** EmailProjection

___

### bodyMD5Hash

• `Optional` **bodyMD5Hash**: string

*Defined in [src/generated/api.ts:2121](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L2121)*

**`memberof`** EmailProjection

___

### cc

• `Optional` **cc**: Array\<string>

*Defined in [src/generated/api.ts:2127](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L2127)*

**`memberof`** EmailProjection

___

### createdAt

•  **createdAt**: Date

*Defined in [src/generated/api.ts:2133](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L2133)*

**`memberof`** EmailProjection

___

### from

• `Optional` **from**: string

*Defined in [src/generated/api.ts:2139](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L2139)*

**`memberof`** EmailProjection

___

### id

•  **id**: string

*Defined in [src/generated/api.ts:2145](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L2145)*

**`memberof`** EmailProjection

___

### inboxId

•  **inboxId**: string

*Defined in [src/generated/api.ts:2151](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L2151)*

**`memberof`** EmailProjection

___

### read

• `Optional` **read**: boolean

*Defined in [src/generated/api.ts:2157](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L2157)*

**`memberof`** EmailProjection

___

### subject

• `Optional` **subject**: string

*Defined in [src/generated/api.ts:2163](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L2163)*

**`memberof`** EmailProjection

___

### teamAccess

• `Optional` **teamAccess**: boolean

*Defined in [src/generated/api.ts:2169](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L2169)*

**`memberof`** EmailProjection

___

### to

•  **to**: Array\<string>

*Defined in [src/generated/api.ts:2175](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L2175)*

**`memberof`** EmailProjection
