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

*Defined in [src/generated/api.ts:915](https://github.com/mailslurp/mailslurp-client/blob/ff09436/src/generated/api.ts#L915)*

**`memberof`** EmailProjection

___

### bcc

• `Optional` **bcc**: Array\<string>

*Defined in [src/generated/api.ts:921](https://github.com/mailslurp/mailslurp-client/blob/ff09436/src/generated/api.ts#L921)*

**`memberof`** EmailProjection

___

### bodyMD5Hash

• `Optional` **bodyMD5Hash**: string

*Defined in [src/generated/api.ts:927](https://github.com/mailslurp/mailslurp-client/blob/ff09436/src/generated/api.ts#L927)*

**`memberof`** EmailProjection

___

### cc

• `Optional` **cc**: Array\<string>

*Defined in [src/generated/api.ts:933](https://github.com/mailslurp/mailslurp-client/blob/ff09436/src/generated/api.ts#L933)*

**`memberof`** EmailProjection

___

### createdAt

•  **createdAt**: Date

*Defined in [src/generated/api.ts:939](https://github.com/mailslurp/mailslurp-client/blob/ff09436/src/generated/api.ts#L939)*

**`memberof`** EmailProjection

___

### from

• `Optional` **from**: string

*Defined in [src/generated/api.ts:945](https://github.com/mailslurp/mailslurp-client/blob/ff09436/src/generated/api.ts#L945)*

**`memberof`** EmailProjection

___

### id

•  **id**: string

*Defined in [src/generated/api.ts:951](https://github.com/mailslurp/mailslurp-client/blob/ff09436/src/generated/api.ts#L951)*

**`memberof`** EmailProjection

___

### inboxId

•  **inboxId**: string

*Defined in [src/generated/api.ts:957](https://github.com/mailslurp/mailslurp-client/blob/ff09436/src/generated/api.ts#L957)*

**`memberof`** EmailProjection

___

### read

• `Optional` **read**: boolean

*Defined in [src/generated/api.ts:963](https://github.com/mailslurp/mailslurp-client/blob/ff09436/src/generated/api.ts#L963)*

**`memberof`** EmailProjection

___

### subject

• `Optional` **subject**: string

*Defined in [src/generated/api.ts:969](https://github.com/mailslurp/mailslurp-client/blob/ff09436/src/generated/api.ts#L969)*

**`memberof`** EmailProjection

___

### to

•  **to**: Array\<string>

*Defined in [src/generated/api.ts:975](https://github.com/mailslurp/mailslurp-client/blob/ff09436/src/generated/api.ts#L975)*

**`memberof`** EmailProjection
