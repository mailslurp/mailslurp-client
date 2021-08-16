[MailSlurp JS](../README.md) / EmailProjection

# Interface: EmailProjection

A compact representation of a full email. Used in list endpoints to keep response sizes low. Body and attachments are not included. To get all fields of the email use the `getEmail` method with the email projection's ID. See `EmailDto` for documentation on projection properties.

**`export`**

**`interface`** EmailProjection

## Table of contents

### Properties

- [attachments](EmailProjection.md#attachments)
- [bcc](EmailProjection.md#bcc)
- [bodyExcerpt](EmailProjection.md#bodyexcerpt)
- [bodyMD5Hash](EmailProjection.md#bodymd5hash)
- [cc](EmailProjection.md#cc)
- [createdAt](EmailProjection.md#createdat)
- [from](EmailProjection.md#from)
- [id](EmailProjection.md#id)
- [inboxId](EmailProjection.md#inboxid)
- [read](EmailProjection.md#read)
- [subject](EmailProjection.md#subject)
- [teamAccess](EmailProjection.md#teamaccess)
- [to](EmailProjection.md#to)

## Properties

### attachments

• `Optional` **attachments**: `string`[]

**`memberof`** EmailProjection

#### Defined in

[src/generated/api.ts:2181](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L2181)

___

### bcc

• `Optional` **bcc**: `string`[]

**`memberof`** EmailProjection

#### Defined in

[src/generated/api.ts:2187](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L2187)

___

### bodyExcerpt

• `Optional` **bodyExcerpt**: `string`

**`memberof`** EmailProjection

#### Defined in

[src/generated/api.ts:2193](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L2193)

___

### bodyMD5Hash

• `Optional` **bodyMD5Hash**: `string`

**`memberof`** EmailProjection

#### Defined in

[src/generated/api.ts:2199](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L2199)

___

### cc

• `Optional` **cc**: `string`[]

**`memberof`** EmailProjection

#### Defined in

[src/generated/api.ts:2205](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L2205)

___

### createdAt

• **createdAt**: `Date`

**`memberof`** EmailProjection

#### Defined in

[src/generated/api.ts:2211](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L2211)

___

### from

• `Optional` **from**: `string`

**`memberof`** EmailProjection

#### Defined in

[src/generated/api.ts:2217](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L2217)

___

### id

• **id**: `string`

**`memberof`** EmailProjection

#### Defined in

[src/generated/api.ts:2223](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L2223)

___

### inboxId

• **inboxId**: `string`

**`memberof`** EmailProjection

#### Defined in

[src/generated/api.ts:2229](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L2229)

___

### read

• `Optional` **read**: `boolean`

**`memberof`** EmailProjection

#### Defined in

[src/generated/api.ts:2235](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L2235)

___

### subject

• `Optional` **subject**: `string`

**`memberof`** EmailProjection

#### Defined in

[src/generated/api.ts:2241](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L2241)

___

### teamAccess

• `Optional` **teamAccess**: `boolean`

**`memberof`** EmailProjection

#### Defined in

[src/generated/api.ts:2247](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L2247)

___

### to

• **to**: `string`[]

**`memberof`** EmailProjection

#### Defined in

[src/generated/api.ts:2253](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L2253)
