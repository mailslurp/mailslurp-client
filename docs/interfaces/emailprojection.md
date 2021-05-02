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

*Defined in [src/generated/api.ts:1593](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L1593)*

**`memberof`** EmailProjection

___

### bcc

• `Optional` **bcc**: Array\<string>

*Defined in [src/generated/api.ts:1599](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L1599)*

**`memberof`** EmailProjection

___

### bodyMD5Hash

• `Optional` **bodyMD5Hash**: string

*Defined in [src/generated/api.ts:1605](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L1605)*

**`memberof`** EmailProjection

___

### cc

• `Optional` **cc**: Array\<string>

*Defined in [src/generated/api.ts:1611](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L1611)*

**`memberof`** EmailProjection

___

### createdAt

•  **createdAt**: Date

*Defined in [src/generated/api.ts:1617](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L1617)*

**`memberof`** EmailProjection

___

### from

• `Optional` **from**: string

*Defined in [src/generated/api.ts:1623](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L1623)*

**`memberof`** EmailProjection

___

### id

•  **id**: string

*Defined in [src/generated/api.ts:1629](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L1629)*

**`memberof`** EmailProjection

___

### inboxId

•  **inboxId**: string

*Defined in [src/generated/api.ts:1635](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L1635)*

**`memberof`** EmailProjection

___

### read

• `Optional` **read**: boolean

*Defined in [src/generated/api.ts:1641](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L1641)*

**`memberof`** EmailProjection

___

### subject

• `Optional` **subject**: string

*Defined in [src/generated/api.ts:1647](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L1647)*

**`memberof`** EmailProjection

___

### teamAccess

• `Optional` **teamAccess**: boolean

*Defined in [src/generated/api.ts:1653](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L1653)*

**`memberof`** EmailProjection

___

### to

•  **to**: Array\<string>

*Defined in [src/generated/api.ts:1659](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L1659)*

**`memberof`** EmailProjection
