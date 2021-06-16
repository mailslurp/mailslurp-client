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

*Defined in [src/generated/api.ts:1791](https://github.com/mailslurp/mailslurp-client/blob/24bff2e/src/generated/api.ts#L1791)*

**`memberof`** EmailProjection

___

### bcc

• `Optional` **bcc**: Array\<string>

*Defined in [src/generated/api.ts:1797](https://github.com/mailslurp/mailslurp-client/blob/24bff2e/src/generated/api.ts#L1797)*

**`memberof`** EmailProjection

___

### bodyMD5Hash

• `Optional` **bodyMD5Hash**: string

*Defined in [src/generated/api.ts:1803](https://github.com/mailslurp/mailslurp-client/blob/24bff2e/src/generated/api.ts#L1803)*

**`memberof`** EmailProjection

___

### cc

• `Optional` **cc**: Array\<string>

*Defined in [src/generated/api.ts:1809](https://github.com/mailslurp/mailslurp-client/blob/24bff2e/src/generated/api.ts#L1809)*

**`memberof`** EmailProjection

___

### createdAt

•  **createdAt**: Date

*Defined in [src/generated/api.ts:1815](https://github.com/mailslurp/mailslurp-client/blob/24bff2e/src/generated/api.ts#L1815)*

**`memberof`** EmailProjection

___

### from

• `Optional` **from**: string

*Defined in [src/generated/api.ts:1821](https://github.com/mailslurp/mailslurp-client/blob/24bff2e/src/generated/api.ts#L1821)*

**`memberof`** EmailProjection

___

### id

•  **id**: string

*Defined in [src/generated/api.ts:1827](https://github.com/mailslurp/mailslurp-client/blob/24bff2e/src/generated/api.ts#L1827)*

**`memberof`** EmailProjection

___

### inboxId

•  **inboxId**: string

*Defined in [src/generated/api.ts:1833](https://github.com/mailslurp/mailslurp-client/blob/24bff2e/src/generated/api.ts#L1833)*

**`memberof`** EmailProjection

___

### read

• `Optional` **read**: boolean

*Defined in [src/generated/api.ts:1839](https://github.com/mailslurp/mailslurp-client/blob/24bff2e/src/generated/api.ts#L1839)*

**`memberof`** EmailProjection

___

### subject

• `Optional` **subject**: string

*Defined in [src/generated/api.ts:1845](https://github.com/mailslurp/mailslurp-client/blob/24bff2e/src/generated/api.ts#L1845)*

**`memberof`** EmailProjection

___

### teamAccess

• `Optional` **teamAccess**: boolean

*Defined in [src/generated/api.ts:1851](https://github.com/mailslurp/mailslurp-client/blob/24bff2e/src/generated/api.ts#L1851)*

**`memberof`** EmailProjection

___

### to

•  **to**: Array\<string>

*Defined in [src/generated/api.ts:1857](https://github.com/mailslurp/mailslurp-client/blob/24bff2e/src/generated/api.ts#L1857)*

**`memberof`** EmailProjection
