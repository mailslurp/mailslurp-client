[MailSlurp JS](../README.md) / ApiAuditLogControllerApi

# Class: ApiAuditLogControllerApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`ApiAuditLogControllerApi`**

## Table of contents

### Constructors

- [constructor](ApiAuditLogControllerApi.md#constructor)

### Properties

- [configuration](ApiAuditLogControllerApi.md#configuration)

### Methods

- [getAuditLogByEventId](ApiAuditLogControllerApi.md#getauditlogbyeventid)
- [getAuditLogByEventIdRaw](ApiAuditLogControllerApi.md#getauditlogbyeventidraw)
- [getAuditLogs](ApiAuditLogControllerApi.md#getauditlogs)
- [getAuditLogsRaw](ApiAuditLogControllerApi.md#getauditlogsraw)
- [request](ApiAuditLogControllerApi.md#request)
- [searchAuditLogs](ApiAuditLogControllerApi.md#searchauditlogs)
- [searchAuditLogsRaw](ApiAuditLogControllerApi.md#searchauditlogsraw)
- [withMiddleware](ApiAuditLogControllerApi.md#withmiddleware)
- [withPostMiddleware](ApiAuditLogControllerApi.md#withpostmiddleware)
- [withPreMiddleware](ApiAuditLogControllerApi.md#withpremiddleware)

## Constructors

### constructor

• **new ApiAuditLogControllerApi**(`configuration?`)

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

### getAuditLogByEventId

▸ **getAuditLogByEventId**(`requestParameters`, `initOverrides?`): `Promise`<[`AuditLogEventDto`](../interfaces/AuditLogEventDto.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAuditLogByEventIdRequest`](../interfaces/GetAuditLogByEventIdRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`AuditLogEventDto`](../interfaces/AuditLogEventDto.md)\>

___

### getAuditLogByEventIdRaw

▸ **getAuditLogByEventIdRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AuditLogEventDto`](../interfaces/AuditLogEventDto.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAuditLogByEventIdRequest`](../interfaces/GetAuditLogByEventIdRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AuditLogEventDto`](../interfaces/AuditLogEventDto.md)\>\>

___

### getAuditLogs

▸ **getAuditLogs**(`requestParameters`, `initOverrides?`): `Promise`<[`AuditLogPageDto`](../interfaces/AuditLogPageDto.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAuditLogsRequest`](../interfaces/GetAuditLogsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`AuditLogPageDto`](../interfaces/AuditLogPageDto.md)\>

___

### getAuditLogsRaw

▸ **getAuditLogsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AuditLogPageDto`](../interfaces/AuditLogPageDto.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAuditLogsRequest`](../interfaces/GetAuditLogsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AuditLogPageDto`](../interfaces/AuditLogPageDto.md)\>\>

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

### searchAuditLogs

▸ **searchAuditLogs**(`requestParameters`, `initOverrides?`): `Promise`<[`AuditLogPageDto`](../interfaces/AuditLogPageDto.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`SearchAuditLogsRequest`](../interfaces/SearchAuditLogsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`AuditLogPageDto`](../interfaces/AuditLogPageDto.md)\>

___

### searchAuditLogsRaw

▸ **searchAuditLogsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AuditLogPageDto`](../interfaces/AuditLogPageDto.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`SearchAuditLogsRequest`](../interfaces/SearchAuditLogsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AuditLogPageDto`](../interfaces/AuditLogPageDto.md)\>\>

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
