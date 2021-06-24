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

*Defined in [src/generated/api.ts:1841](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L1841)*

**`memberof`** EmailProjection

___

### bcc

• `Optional` **bcc**: Array\<string>

*Defined in [src/generated/api.ts:1847](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L1847)*

**`memberof`** EmailProjection

___

### bodyMD5Hash

• `Optional` **bodyMD5Hash**: string

*Defined in [src/generated/api.ts:1853](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L1853)*

**`memberof`** EmailProjection

___

### cc

• `Optional` **cc**: Array\<string>

*Defined in [src/generated/api.ts:1859](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L1859)*

**`memberof`** EmailProjection

___

### createdAt

•  **createdAt**: Date

*Defined in [src/generated/api.ts:1865](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L1865)*

**`memberof`** EmailProjection

___

### from

• `Optional` **from**: string

*Defined in [src/generated/api.ts:1871](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L1871)*

**`memberof`** EmailProjection

___

### id

•  **id**: string

*Defined in [src/generated/api.ts:1877](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L1877)*

**`memberof`** EmailProjection

___

### inboxId

•  **inboxId**: string

*Defined in [src/generated/api.ts:1883](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L1883)*

**`memberof`** EmailProjection

___

### read

• `Optional` **read**: boolean

*Defined in [src/generated/api.ts:1889](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L1889)*

**`memberof`** EmailProjection

___

### subject

• `Optional` **subject**: string

*Defined in [src/generated/api.ts:1895](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L1895)*

**`memberof`** EmailProjection

___

### teamAccess

• `Optional` **teamAccess**: boolean

*Defined in [src/generated/api.ts:1901](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L1901)*

**`memberof`** EmailProjection

___

### to

•  **to**: Array\<string>

*Defined in [src/generated/api.ts:1907](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L1907)*

**`memberof`** EmailProjection
