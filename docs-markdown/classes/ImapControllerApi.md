[MailSlurp JS](../README.md) / ImapControllerApi

# Class: ImapControllerApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`ImapControllerApi`**

## Table of contents

### Constructors

- [constructor](ImapControllerApi.md#constructor)

### Properties

- [configuration](ImapControllerApi.md#configuration)

### Methods

- [imapServerFetch](ImapControllerApi.md#imapserverfetch)
- [imapServerFetchRaw](ImapControllerApi.md#imapserverfetchraw)
- [imapServerGet](ImapControllerApi.md#imapserverget)
- [imapServerGetRaw](ImapControllerApi.md#imapservergetraw)
- [imapServerList](ImapControllerApi.md#imapserverlist)
- [imapServerListRaw](ImapControllerApi.md#imapserverlistraw)
- [imapServerSearch](ImapControllerApi.md#imapserversearch)
- [imapServerSearchRaw](ImapControllerApi.md#imapserversearchraw)
- [imapServerStatus](ImapControllerApi.md#imapserverstatus)
- [imapServerStatusRaw](ImapControllerApi.md#imapserverstatusraw)
- [imapServerUpdateFlags](ImapControllerApi.md#imapserverupdateflags)
- [imapServerUpdateFlagsRaw](ImapControllerApi.md#imapserverupdateflagsraw)
- [request](ImapControllerApi.md#request)
- [withMiddleware](ImapControllerApi.md#withmiddleware)
- [withPostMiddleware](ImapControllerApi.md#withpostmiddleware)
- [withPreMiddleware](ImapControllerApi.md#withpremiddleware)

## Constructors

### constructor

• **new ImapControllerApi**(`configuration?`)

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

### imapServerFetch

▸ **imapServerFetch**(`requestParameters`, `initOverrides?`): `Promise`<[`ImapServerFetchResult`](../interfaces/ImapServerFetchResult.md)\>

Fetch message in an inbox

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ImapServerFetchRequest`](../interfaces/ImapServerFetchRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ImapServerFetchResult`](../interfaces/ImapServerFetchResult.md)\>

___

### imapServerFetchRaw

▸ **imapServerFetchRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ImapServerFetchResult`](../interfaces/ImapServerFetchResult.md)\>\>

Fetch message in an inbox

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ImapServerFetchRequest`](../interfaces/ImapServerFetchRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ImapServerFetchResult`](../interfaces/ImapServerFetchResult.md)\>\>

___

### imapServerGet

▸ **imapServerGet**(`requestParameters`, `initOverrides?`): `Promise`<[`ImapServerGetResult`](../interfaces/ImapServerGetResult.md)\>

Get a message by email ID

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ImapServerGetRequest`](../interfaces/ImapServerGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ImapServerGetResult`](../interfaces/ImapServerGetResult.md)\>

___

### imapServerGetRaw

▸ **imapServerGetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ImapServerGetResult`](../interfaces/ImapServerGetResult.md)\>\>

Get a message by email ID

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ImapServerGetRequest`](../interfaces/ImapServerGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ImapServerGetResult`](../interfaces/ImapServerGetResult.md)\>\>

___

### imapServerList

▸ **imapServerList**(`requestParameters`, `initOverrides?`): `Promise`<[`ImapServerListResult`](../interfaces/ImapServerListResult.md)\>

List messages in an inbox

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ImapServerListRequest`](../interfaces/ImapServerListRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ImapServerListResult`](../interfaces/ImapServerListResult.md)\>

___

### imapServerListRaw

▸ **imapServerListRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ImapServerListResult`](../interfaces/ImapServerListResult.md)\>\>

List messages in an inbox

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ImapServerListRequest`](../interfaces/ImapServerListRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ImapServerListResult`](../interfaces/ImapServerListResult.md)\>\>

___

### imapServerSearch

▸ **imapServerSearch**(`requestParameters`, `initOverrides?`): `Promise`<[`ImapServerSearchResult`](../interfaces/ImapServerSearchResult.md)\>

Search messages in an inbox

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ImapServerSearchRequest`](../interfaces/ImapServerSearchRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ImapServerSearchResult`](../interfaces/ImapServerSearchResult.md)\>

___

### imapServerSearchRaw

▸ **imapServerSearchRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ImapServerSearchResult`](../interfaces/ImapServerSearchResult.md)\>\>

Search messages in an inbox

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ImapServerSearchRequest`](../interfaces/ImapServerSearchRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ImapServerSearchResult`](../interfaces/ImapServerSearchResult.md)\>\>

___

### imapServerStatus

▸ **imapServerStatus**(`requestParameters`, `initOverrides?`): `Promise`<[`ImapServerStatusResult`](../interfaces/ImapServerStatusResult.md)\>

Get status for mailbox

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ImapServerStatusRequest`](../interfaces/ImapServerStatusRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ImapServerStatusResult`](../interfaces/ImapServerStatusResult.md)\>

___

### imapServerStatusRaw

▸ **imapServerStatusRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ImapServerStatusResult`](../interfaces/ImapServerStatusResult.md)\>\>

Get status for mailbox

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ImapServerStatusRequest`](../interfaces/ImapServerStatusRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ImapServerStatusResult`](../interfaces/ImapServerStatusResult.md)\>\>

___

### imapServerUpdateFlags

▸ **imapServerUpdateFlags**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

Update message flags

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ImapServerUpdateFlagsRequest`](../interfaces/ImapServerUpdateFlagsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### imapServerUpdateFlagsRaw

▸ **imapServerUpdateFlagsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Update message flags

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ImapServerUpdateFlagsRequest`](../interfaces/ImapServerUpdateFlagsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

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
