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

[src/generated/api.ts:2137](https://github.com/mailslurp/mailslurp-client/blob/f0f645f/src/generated/api.ts#L2137)

___

### bcc

• `Optional` **bcc**: `string`[]

**`memberof`** EmailProjection

#### Defined in

[src/generated/api.ts:2143](https://github.com/mailslurp/mailslurp-client/blob/f0f645f/src/generated/api.ts#L2143)

___

### bodyExcerpt

• `Optional` **bodyExcerpt**: `string`

**`memberof`** EmailProjection

#### Defined in

[src/generated/api.ts:2149](https://github.com/mailslurp/mailslurp-client/blob/f0f645f/src/generated/api.ts#L2149)

___

### bodyMD5Hash

• `Optional` **bodyMD5Hash**: `string`

**`memberof`** EmailProjection

#### Defined in

[src/generated/api.ts:2155](https://github.com/mailslurp/mailslurp-client/blob/f0f645f/src/generated/api.ts#L2155)

___

### cc

• `Optional` **cc**: `string`[]

**`memberof`** EmailProjection

#### Defined in

[src/generated/api.ts:2161](https://github.com/mailslurp/mailslurp-client/blob/f0f645f/src/generated/api.ts#L2161)

___

### createdAt

• **createdAt**: `Date`

**`memberof`** EmailProjection

#### Defined in

[src/generated/api.ts:2167](https://github.com/mailslurp/mailslurp-client/blob/f0f645f/src/generated/api.ts#L2167)

___

### from

• `Optional` **from**: `string`

**`memberof`** EmailProjection

#### Defined in

[src/generated/api.ts:2173](https://github.com/mailslurp/mailslurp-client/blob/f0f645f/src/generated/api.ts#L2173)

___

### id

• **id**: `string`

**`memberof`** EmailProjection

#### Defined in

[src/generated/api.ts:2179](https://github.com/mailslurp/mailslurp-client/blob/f0f645f/src/generated/api.ts#L2179)

___

### inboxId

• **inboxId**: `string`

**`memberof`** EmailProjection

#### Defined in

[src/generated/api.ts:2185](https://github.com/mailslurp/mailslurp-client/blob/f0f645f/src/generated/api.ts#L2185)

___

### read

• `Optional` **read**: `boolean`

**`memberof`** EmailProjection

#### Defined in

[src/generated/api.ts:2191](https://github.com/mailslurp/mailslurp-client/blob/f0f645f/src/generated/api.ts#L2191)

___

### subject

• `Optional` **subject**: `string`

**`memberof`** EmailProjection

#### Defined in

[src/generated/api.ts:2197](https://github.com/mailslurp/mailslurp-client/blob/f0f645f/src/generated/api.ts#L2197)

___

### teamAccess

• `Optional` **teamAccess**: `boolean`

**`memberof`** EmailProjection

#### Defined in

[src/generated/api.ts:2203](https://github.com/mailslurp/mailslurp-client/blob/f0f645f/src/generated/api.ts#L2203)

___

### to

• **to**: `string`[]

**`memberof`** EmailProjection

#### Defined in

[src/generated/api.ts:2209](https://github.com/mailslurp/mailslurp-client/blob/f0f645f/src/generated/api.ts#L2209)
