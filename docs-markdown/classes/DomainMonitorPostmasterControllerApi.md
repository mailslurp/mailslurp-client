[MailSlurp JS](../README.md) / DomainMonitorPostmasterControllerApi

# Class: DomainMonitorPostmasterControllerApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`DomainMonitorPostmasterControllerApi`**

## Table of contents

### Constructors

- [constructor](DomainMonitorPostmasterControllerApi.md#constructor)

### Properties

- [configuration](DomainMonitorPostmasterControllerApi.md#configuration)

### Methods

- [createDomainMonitorPostmasterConnection](DomainMonitorPostmasterControllerApi.md#createdomainmonitorpostmasterconnection)
- [createDomainMonitorPostmasterConnectionRaw](DomainMonitorPostmasterControllerApi.md#createdomainmonitorpostmasterconnectionraw)
- [deleteDomainMonitorPostmasterConnection](DomainMonitorPostmasterControllerApi.md#deletedomainmonitorpostmasterconnection)
- [deleteDomainMonitorPostmasterConnectionRaw](DomainMonitorPostmasterControllerApi.md#deletedomainmonitorpostmasterconnectionraw)
- [exchangeDomainMonitorPostmasterCode](DomainMonitorPostmasterControllerApi.md#exchangedomainmonitorpostmastercode)
- [exchangeDomainMonitorPostmasterCodeRaw](DomainMonitorPostmasterControllerApi.md#exchangedomainmonitorpostmastercoderaw)
- [getDomainMonitorPostmasterConnection](DomainMonitorPostmasterControllerApi.md#getdomainmonitorpostmasterconnection)
- [getDomainMonitorPostmasterConnectionRaw](DomainMonitorPostmasterControllerApi.md#getdomainmonitorpostmasterconnectionraw)
- [getDomainMonitorPostmasterDomains](DomainMonitorPostmasterControllerApi.md#getdomainmonitorpostmasterdomains)
- [getDomainMonitorPostmasterDomainsRaw](DomainMonitorPostmasterControllerApi.md#getdomainmonitorpostmasterdomainsraw)
- [getDomainMonitorPostmasterTrafficStats](DomainMonitorPostmasterControllerApi.md#getdomainmonitorpostmastertrafficstats)
- [getDomainMonitorPostmasterTrafficStatsRaw](DomainMonitorPostmasterControllerApi.md#getdomainmonitorpostmastertrafficstatsraw)
- [request](DomainMonitorPostmasterControllerApi.md#request)
- [syncDomainMonitorPostmasterDomains](DomainMonitorPostmasterControllerApi.md#syncdomainmonitorpostmasterdomains)
- [syncDomainMonitorPostmasterDomainsRaw](DomainMonitorPostmasterControllerApi.md#syncdomainmonitorpostmasterdomainsraw)
- [syncDomainMonitorPostmasterTrafficStats](DomainMonitorPostmasterControllerApi.md#syncdomainmonitorpostmastertrafficstats)
- [syncDomainMonitorPostmasterTrafficStatsRaw](DomainMonitorPostmasterControllerApi.md#syncdomainmonitorpostmastertrafficstatsraw)
- [withMiddleware](DomainMonitorPostmasterControllerApi.md#withmiddleware)
- [withPostMiddleware](DomainMonitorPostmasterControllerApi.md#withpostmiddleware)
- [withPreMiddleware](DomainMonitorPostmasterControllerApi.md#withpremiddleware)

## Constructors

### constructor

• **new DomainMonitorPostmasterControllerApi**(`configuration?`)

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

### createDomainMonitorPostmasterConnection

▸ **createDomainMonitorPostmasterConnection**(`requestParameters`, `initOverrides?`): `Promise`<[`CreatePostmasterConnectionResult`](../interfaces/CreatePostmasterConnectionResult.md)\>

Create Postmaster OAuth connection URL

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateDomainMonitorPostmasterConnectionRequest`](../interfaces/CreateDomainMonitorPostmasterConnectionRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`CreatePostmasterConnectionResult`](../interfaces/CreatePostmasterConnectionResult.md)\>

___

### createDomainMonitorPostmasterConnectionRaw

▸ **createDomainMonitorPostmasterConnectionRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CreatePostmasterConnectionResult`](../interfaces/CreatePostmasterConnectionResult.md)\>\>

Create Postmaster OAuth connection URL

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateDomainMonitorPostmasterConnectionRequest`](../interfaces/CreateDomainMonitorPostmasterConnectionRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CreatePostmasterConnectionResult`](../interfaces/CreatePostmasterConnectionResult.md)\>\>

___

### deleteDomainMonitorPostmasterConnection

▸ **deleteDomainMonitorPostmasterConnection**(`initOverrides?`): `Promise`<`void`\>

Disconnect Postmaster OAuth

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### deleteDomainMonitorPostmasterConnectionRaw

▸ **deleteDomainMonitorPostmasterConnectionRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Disconnect Postmaster OAuth

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### exchangeDomainMonitorPostmasterCode

▸ **exchangeDomainMonitorPostmasterCode**(`requestParameters`, `initOverrides?`): `Promise`<[`PostmasterConnectionDto`](../interfaces/PostmasterConnectionDto.md)\>

Exchange Postmaster OAuth authorization code

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ExchangeDomainMonitorPostmasterCodeRequest`](../interfaces/ExchangeDomainMonitorPostmasterCodeRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PostmasterConnectionDto`](../interfaces/PostmasterConnectionDto.md)\>

___

### exchangeDomainMonitorPostmasterCodeRaw

▸ **exchangeDomainMonitorPostmasterCodeRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PostmasterConnectionDto`](../interfaces/PostmasterConnectionDto.md)\>\>

Exchange Postmaster OAuth authorization code

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ExchangeDomainMonitorPostmasterCodeRequest`](../interfaces/ExchangeDomainMonitorPostmasterCodeRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PostmasterConnectionDto`](../interfaces/PostmasterConnectionDto.md)\>\>

___

### getDomainMonitorPostmasterConnection

▸ **getDomainMonitorPostmasterConnection**(`initOverrides?`): `Promise`<[`PostmasterConnectionStatusDto`](../interfaces/PostmasterConnectionStatusDto.md)\>

Get Postmaster connection status

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PostmasterConnectionStatusDto`](../interfaces/PostmasterConnectionStatusDto.md)\>

___

### getDomainMonitorPostmasterConnectionRaw

▸ **getDomainMonitorPostmasterConnectionRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PostmasterConnectionStatusDto`](../interfaces/PostmasterConnectionStatusDto.md)\>\>

Get Postmaster connection status

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PostmasterConnectionStatusDto`](../interfaces/PostmasterConnectionStatusDto.md)\>\>

___

### getDomainMonitorPostmasterDomains

▸ **getDomainMonitorPostmasterDomains**(`initOverrides?`): `Promise`<[`PostmasterDomainDto`](../interfaces/PostmasterDomainDto.md)[]\>

List local Postmaster domain snapshots

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PostmasterDomainDto`](../interfaces/PostmasterDomainDto.md)[]\>

___

### getDomainMonitorPostmasterDomainsRaw

▸ **getDomainMonitorPostmasterDomainsRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PostmasterDomainDto`](../interfaces/PostmasterDomainDto.md)[]\>\>

List local Postmaster domain snapshots

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PostmasterDomainDto`](../interfaces/PostmasterDomainDto.md)[]\>\>

___

### getDomainMonitorPostmasterTrafficStats

▸ **getDomainMonitorPostmasterTrafficStats**(`requestParameters`, `initOverrides?`): `Promise`<[`PostmasterTrafficStatsListDto`](../interfaces/PostmasterTrafficStatsListDto.md)\>

Get local Postmaster traffic stats

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDomainMonitorPostmasterTrafficStatsRequest`](../interfaces/GetDomainMonitorPostmasterTrafficStatsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PostmasterTrafficStatsListDto`](../interfaces/PostmasterTrafficStatsListDto.md)\>

___

### getDomainMonitorPostmasterTrafficStatsRaw

▸ **getDomainMonitorPostmasterTrafficStatsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PostmasterTrafficStatsListDto`](../interfaces/PostmasterTrafficStatsListDto.md)\>\>

Get local Postmaster traffic stats

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDomainMonitorPostmasterTrafficStatsRequest`](../interfaces/GetDomainMonitorPostmasterTrafficStatsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PostmasterTrafficStatsListDto`](../interfaces/PostmasterTrafficStatsListDto.md)\>\>

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

### syncDomainMonitorPostmasterDomains

▸ **syncDomainMonitorPostmasterDomains**(`initOverrides?`): `Promise`<[`PostmasterDomainDto`](../interfaces/PostmasterDomainDto.md)[]\>

Sync Postmaster domains

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PostmasterDomainDto`](../interfaces/PostmasterDomainDto.md)[]\>

___

### syncDomainMonitorPostmasterDomainsRaw

▸ **syncDomainMonitorPostmasterDomainsRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PostmasterDomainDto`](../interfaces/PostmasterDomainDto.md)[]\>\>

Sync Postmaster domains

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PostmasterDomainDto`](../interfaces/PostmasterDomainDto.md)[]\>\>

___

### syncDomainMonitorPostmasterTrafficStats

▸ **syncDomainMonitorPostmasterTrafficStats**(`requestParameters`, `initOverrides?`): `Promise`<[`PostmasterTrafficStatsListDto`](../interfaces/PostmasterTrafficStatsListDto.md)\>

Sync Postmaster traffic stats

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`SyncDomainMonitorPostmasterTrafficStatsRequest`](../interfaces/SyncDomainMonitorPostmasterTrafficStatsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PostmasterTrafficStatsListDto`](../interfaces/PostmasterTrafficStatsListDto.md)\>

___

### syncDomainMonitorPostmasterTrafficStatsRaw

▸ **syncDomainMonitorPostmasterTrafficStatsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PostmasterTrafficStatsListDto`](../interfaces/PostmasterTrafficStatsListDto.md)\>\>

Sync Postmaster traffic stats

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`SyncDomainMonitorPostmasterTrafficStatsRequest`](../interfaces/SyncDomainMonitorPostmasterTrafficStatsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PostmasterTrafficStatsListDto`](../interfaces/PostmasterTrafficStatsListDto.md)\>\>

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
