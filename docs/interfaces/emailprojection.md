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

*Defined in [src/generated/api.ts:1784](https://github.com/mailslurp/mailslurp-client/blob/6b679b8/src/generated/api.ts#L1784)*

**`memberof`** EmailProjection

___

### bcc

• `Optional` **bcc**: Array\<string>

*Defined in [src/generated/api.ts:1790](https://github.com/mailslurp/mailslurp-client/blob/6b679b8/src/generated/api.ts#L1790)*

**`memberof`** EmailProjection

___

### bodyMD5Hash

• `Optional` **bodyMD5Hash**: string

*Defined in [src/generated/api.ts:1796](https://github.com/mailslurp/mailslurp-client/blob/6b679b8/src/generated/api.ts#L1796)*

**`memberof`** EmailProjection

___

### cc

• `Optional` **cc**: Array\<string>

*Defined in [src/generated/api.ts:1802](https://github.com/mailslurp/mailslurp-client/blob/6b679b8/src/generated/api.ts#L1802)*

**`memberof`** EmailProjection

___

### createdAt

•  **createdAt**: Date

*Defined in [src/generated/api.ts:1808](https://github.com/mailslurp/mailslurp-client/blob/6b679b8/src/generated/api.ts#L1808)*

**`memberof`** EmailProjection

___

### from

• `Optional` **from**: string

*Defined in [src/generated/api.ts:1814](https://github.com/mailslurp/mailslurp-client/blob/6b679b8/src/generated/api.ts#L1814)*

**`memberof`** EmailProjection

___

### id

•  **id**: string

*Defined in [src/generated/api.ts:1820](https://github.com/mailslurp/mailslurp-client/blob/6b679b8/src/generated/api.ts#L1820)*

**`memberof`** EmailProjection

___

### inboxId

•  **inboxId**: string

*Defined in [src/generated/api.ts:1826](https://github.com/mailslurp/mailslurp-client/blob/6b679b8/src/generated/api.ts#L1826)*

**`memberof`** EmailProjection

___

### read

• `Optional` **read**: boolean

*Defined in [src/generated/api.ts:1832](https://github.com/mailslurp/mailslurp-client/blob/6b679b8/src/generated/api.ts#L1832)*

**`memberof`** EmailProjection

___

### subject

• `Optional` **subject**: string

*Defined in [src/generated/api.ts:1838](https://github.com/mailslurp/mailslurp-client/blob/6b679b8/src/generated/api.ts#L1838)*

**`memberof`** EmailProjection

___

### teamAccess

• `Optional` **teamAccess**: boolean

*Defined in [src/generated/api.ts:1844](https://github.com/mailslurp/mailslurp-client/blob/6b679b8/src/generated/api.ts#L1844)*

**`memberof`** EmailProjection

___

### to

•  **to**: Array\<string>

*Defined in [src/generated/api.ts:1850](https://github.com/mailslurp/mailslurp-client/blob/6b679b8/src/generated/api.ts#L1850)*

**`memberof`** EmailProjection
