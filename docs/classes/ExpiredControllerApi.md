[MailSlurp JS](../README.md) / ExpiredControllerApi

# Class: ExpiredControllerApi

ExpiredControllerApi - object-oriented interface

**`export`**

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`ExpiredControllerApi`**

## Table of contents

### Constructors

- [constructor](ExpiredControllerApi.md#constructor)

### Properties

- [basePath](ExpiredControllerApi.md#basepath)
- [configuration](ExpiredControllerApi.md#configuration)
- [fetch](ExpiredControllerApi.md#fetch)

### Methods

- [getExpirationDefaults](ExpiredControllerApi.md#getexpirationdefaults)
- [getExpiredInboxByInboxId](ExpiredControllerApi.md#getexpiredinboxbyinboxid)
- [getExpiredInboxRecord](ExpiredControllerApi.md#getexpiredinboxrecord)
- [getExpiredInboxes](ExpiredControllerApi.md#getexpiredinboxes)

## Constructors

### constructor

• **new ExpiredControllerApi**(`configuration?`, `basePath?`, `fetch?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) |
| `basePath` | `string` |
| `fetch` | [`FetchAPI`](../interfaces/FetchAPI.md) |

#### Inherited from

[BaseAPI](BaseAPI.md).[constructor](BaseAPI.md#constructor)

#### Defined in

[src/generated/api.ts:59](https://github.com/mailslurp/mailslurp-client/blob/f0f645f/src/generated/api.ts#L59)

## Properties

### basePath

• `Protected` **basePath**: `string`

#### Inherited from

[BaseAPI](BaseAPI.md).[basePath](BaseAPI.md#basepath)

___

### configuration

• `Protected` **configuration**: [`Configuration`](Configuration.md)

#### Inherited from

[BaseAPI](BaseAPI.md).[configuration](BaseAPI.md#configuration)

#### Defined in

[src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/f0f645f/src/generated/api.ts#L57)

___

### fetch

• `Protected` **fetch**: [`FetchAPI`](../interfaces/FetchAPI.md)

#### Inherited from

[BaseAPI](BaseAPI.md).[fetch](BaseAPI.md#fetch)

## Methods

### getExpirationDefaults

▸ **getExpirationDefaults**(`options?`): `Promise`<[`ExpirationDefaults`](../interfaces/ExpirationDefaults.md)\>

Return default times used for inbox expiration

**`summary`** Get default expiration settings

**`throws`** {RequiredError}

**`memberof`** ExpiredControllerApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<[`ExpirationDefaults`](../interfaces/ExpirationDefaults.md)\>

#### Defined in

[src/generated/api.ts:17485](https://github.com/mailslurp/mailslurp-client/blob/f0f645f/src/generated/api.ts#L17485)

___

### getExpiredInboxByInboxId

▸ **getExpiredInboxByInboxId**(`inboxId`, `options?`): `Promise`<[`ExpiredInboxDto`](../interfaces/ExpiredInboxDto.md)\>

Use the inboxId to return an ExpiredInboxRecord if an inbox has expired. Inboxes expire and are disabled if an expiration date is set or plan requires. Returns 404 if no expired inbox is found for the inboxId

**`summary`** Get expired inbox record for a previously existing inbox

**`throws`** {RequiredError}

**`memberof`** ExpiredControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inboxId` | `string` | ID of inbox you want to retrieve (not the inbox ID) |
| `options?` | `any` | - |

#### Returns

`Promise`<[`ExpiredInboxDto`](../interfaces/ExpiredInboxDto.md)\>

#### Defined in

[src/generated/api.ts:17499](https://github.com/mailslurp/mailslurp-client/blob/f0f645f/src/generated/api.ts#L17499)

___

### getExpiredInboxRecord

▸ **getExpiredInboxRecord**(`expiredId`, `options?`): `Promise`<[`ExpiredInboxDto`](../interfaces/ExpiredInboxDto.md)\>

Inboxes created with an expiration date will expire after the given date and be moved to an ExpiredInbox entity. You can still read emails in the inbox but it can no longer send or receive emails. Fetch the expired inboxes to view the old inboxes properties

**`summary`** Get an expired inbox record

**`throws`** {RequiredError}

**`memberof`** ExpiredControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `expiredId` | `string` | ID of the ExpiredInboxRecord you want to retrieve. This is different from the ID of the inbox you are interested in. See other methods for getting ExpiredInboxRecord for an inbox inboxId) |
| `options?` | `any` | - |

#### Returns

`Promise`<[`ExpiredInboxDto`](../interfaces/ExpiredInboxDto.md)\>

#### Defined in

[src/generated/api.ts:17513](https://github.com/mailslurp/mailslurp-client/blob/f0f645f/src/generated/api.ts#L17513)

___

### getExpiredInboxes

▸ **getExpiredInboxes**(`before?`, `page?`, `since?`, `size?`, `sort?`, `options?`): `Promise`<[`PageExpiredInboxRecordProjection`](../interfaces/PageExpiredInboxRecordProjection.md)\>

Inboxes created with an expiration date will expire after the given date. An ExpiredInboxRecord is created that records the inboxes old ID and email address. You can still read emails in the inbox (using the inboxes old ID) but the email address associated with the inbox can no longer send or receive emails. Fetch expired inbox records to view the old inboxes properties

**`summary`** List records of expired inboxes

**`throws`** {RequiredError}

**`memberof`** ExpiredControllerApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `before?` | `Date` |
| `page?` | `number` |
| `since?` | `Date` |
| `size?` | `number` |
| `sort?` | ``"ASC"`` \| ``"DESC"`` |
| `options?` | `any` |

#### Returns

`Promise`<[`PageExpiredInboxRecordProjection`](../interfaces/PageExpiredInboxRecordProjection.md)\>

#### Defined in

[src/generated/api.ts:17532](https://github.com/mailslurp/mailslurp-client/blob/f0f645f/src/generated/api.ts#L17532)
