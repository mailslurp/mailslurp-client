[MailSlurp JS](../README.md) / ExpiredControllerApi

# Class: ExpiredControllerApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`ExpiredControllerApi`**

## Table of contents

### Constructors

- [constructor](ExpiredControllerApi.md#constructor)

### Properties

- [configuration](ExpiredControllerApi.md#configuration)

### Methods

- [getExpirationDefaults](ExpiredControllerApi.md#getexpirationdefaults)
- [getExpirationDefaultsRaw](ExpiredControllerApi.md#getexpirationdefaultsraw)
- [getExpiredInboxByInboxId](ExpiredControllerApi.md#getexpiredinboxbyinboxid)
- [getExpiredInboxByInboxIdRaw](ExpiredControllerApi.md#getexpiredinboxbyinboxidraw)
- [getExpiredInboxRecord](ExpiredControllerApi.md#getexpiredinboxrecord)
- [getExpiredInboxRecordRaw](ExpiredControllerApi.md#getexpiredinboxrecordraw)
- [getExpiredInboxes](ExpiredControllerApi.md#getexpiredinboxes)
- [getExpiredInboxesRaw](ExpiredControllerApi.md#getexpiredinboxesraw)
- [request](ExpiredControllerApi.md#request)
- [withMiddleware](ExpiredControllerApi.md#withmiddleware)
- [withPostMiddleware](ExpiredControllerApi.md#withpostmiddleware)
- [withPreMiddleware](ExpiredControllerApi.md#withpremiddleware)

## Constructors

### constructor

• **new ExpiredControllerApi**(`configuration?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration` | [`Configuration`](Configuration.md) |

#### Inherited from

[BaseAPI](BaseAPI.md).[constructor](BaseAPI.md#constructor)

## Properties

### configuration

• `Protected` **configuration**: [`Configuration`](Configuration.md)

#### Inherited from

[BaseAPI](BaseAPI.md).[configuration](BaseAPI.md#configuration)

## Methods

### getExpirationDefaults

▸ **getExpirationDefaults**(`initOverrides?`): `Promise`<[`ExpirationDefaults`](../interfaces/ExpirationDefaults.md)\>

Return default times used for inbox expiration
Get default expiration settings

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ExpirationDefaults`](../interfaces/ExpirationDefaults.md)\>

___

### getExpirationDefaultsRaw

▸ **getExpirationDefaultsRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ExpirationDefaults`](../interfaces/ExpirationDefaults.md)\>\>

Return default times used for inbox expiration
Get default expiration settings

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ExpirationDefaults`](../interfaces/ExpirationDefaults.md)\>\>

___

### getExpiredInboxByInboxId

▸ **getExpiredInboxByInboxId**(`requestParameters`, `initOverrides?`): `Promise`<[`ExpiredInboxDto`](../interfaces/ExpiredInboxDto.md)\>

Use the inboxId to return an ExpiredInboxRecord if an inbox has expired. Inboxes expire and are disabled if an expiration date is set or plan requires. Returns 404 if no expired inbox is found for the inboxId
Get expired inbox record for a previously existing inbox

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetExpiredInboxByInboxIdRequest`](../interfaces/GetExpiredInboxByInboxIdRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ExpiredInboxDto`](../interfaces/ExpiredInboxDto.md)\>

___

### getExpiredInboxByInboxIdRaw

▸ **getExpiredInboxByInboxIdRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ExpiredInboxDto`](../interfaces/ExpiredInboxDto.md)\>\>

Use the inboxId to return an ExpiredInboxRecord if an inbox has expired. Inboxes expire and are disabled if an expiration date is set or plan requires. Returns 404 if no expired inbox is found for the inboxId
Get expired inbox record for a previously existing inbox

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetExpiredInboxByInboxIdRequest`](../interfaces/GetExpiredInboxByInboxIdRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ExpiredInboxDto`](../interfaces/ExpiredInboxDto.md)\>\>

___

### getExpiredInboxRecord

▸ **getExpiredInboxRecord**(`requestParameters`, `initOverrides?`): `Promise`<[`ExpiredInboxDto`](../interfaces/ExpiredInboxDto.md)\>

Inboxes created with an expiration date will expire after the given date and be moved to an ExpiredInbox entity. You can still read emails in the inbox but it can no longer send or receive emails. Fetch the expired inboxes to view the old inboxes properties
Get an expired inbox record

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetExpiredInboxRecordRequest`](../interfaces/GetExpiredInboxRecordRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ExpiredInboxDto`](../interfaces/ExpiredInboxDto.md)\>

___

### getExpiredInboxRecordRaw

▸ **getExpiredInboxRecordRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ExpiredInboxDto`](../interfaces/ExpiredInboxDto.md)\>\>

Inboxes created with an expiration date will expire after the given date and be moved to an ExpiredInbox entity. You can still read emails in the inbox but it can no longer send or receive emails. Fetch the expired inboxes to view the old inboxes properties
Get an expired inbox record

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetExpiredInboxRecordRequest`](../interfaces/GetExpiredInboxRecordRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ExpiredInboxDto`](../interfaces/ExpiredInboxDto.md)\>\>

___

### getExpiredInboxes

▸ **getExpiredInboxes**(`requestParameters`, `initOverrides?`): `Promise`<[`PageExpiredInboxRecordProjection`](../interfaces/PageExpiredInboxRecordProjection.md)\>

Inboxes created with an expiration date will expire after the given date. An ExpiredInboxRecord is created that records the inboxes old ID and email address. You can still read emails in the inbox (using the inboxes old ID) but the email address associated with the inbox can no longer send or receive emails. Fetch expired inbox records to view the old inboxes properties
List records of expired inboxes

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetExpiredInboxesRequest`](../interfaces/GetExpiredInboxesRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageExpiredInboxRecordProjection`](../interfaces/PageExpiredInboxRecordProjection.md)\>

___

### getExpiredInboxesRaw

▸ **getExpiredInboxesRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageExpiredInboxRecordProjection`](../interfaces/PageExpiredInboxRecordProjection.md)\>\>

Inboxes created with an expiration date will expire after the given date. An ExpiredInboxRecord is created that records the inboxes old ID and email address. You can still read emails in the inbox (using the inboxes old ID) but the email address associated with the inbox can no longer send or receive emails. Fetch expired inbox records to view the old inboxes properties
List records of expired inboxes

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetExpiredInboxesRequest`](../interfaces/GetExpiredInboxesRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageExpiredInboxRecordProjection`](../interfaces/PageExpiredInboxRecordProjection.md)\>\>

___

### request

▸ `Protected` **request**(`context`, `initOverrides?`): `Promise`<`Response`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`RequestOpts`](../interfaces/RequestOpts.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`Response`\>

#### Inherited from

[BaseAPI](BaseAPI.md).[request](BaseAPI.md#request)

___

### withMiddleware

▸ **withMiddleware**<`T`\>(`this`, `...middlewares`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseAPI`](BaseAPI.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `...middlewares` | [`Middleware`](../interfaces/Middleware.md)[] |

#### Returns

`T`

#### Inherited from

[BaseAPI](BaseAPI.md).[withMiddleware](BaseAPI.md#withmiddleware)

___

### withPostMiddleware

▸ **withPostMiddleware**<`T`\>(`this`, `...postMiddlewares`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseAPI`](BaseAPI.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `...postMiddlewares` | (`context`: [`ResponseContext`](../interfaces/ResponseContext.md)) => `Promise`<`void` \| `Response`\>[] |

#### Returns

`T`

#### Inherited from

[BaseAPI](BaseAPI.md).[withPostMiddleware](BaseAPI.md#withpostmiddleware)

___

### withPreMiddleware

▸ **withPreMiddleware**<`T`\>(`this`, `...preMiddlewares`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseAPI`](BaseAPI.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `...preMiddlewares` | (`context`: [`RequestContext`](../interfaces/RequestContext.md)) => `Promise`<`void` \| [`FetchParams`](../interfaces/FetchParams.md)\>[] |

#### Returns

`T`

#### Inherited from

[BaseAPI](BaseAPI.md).[withPreMiddleware](BaseAPI.md#withpremiddleware)
