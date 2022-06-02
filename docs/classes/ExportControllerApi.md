# Class: ExportControllerApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`ExportControllerApi`**

## Table of contents

### Constructors

- [constructor](ExportControllerApi.md#constructor)

### Properties

- [configuration](ExportControllerApi.md#configuration)

### Methods

- [exportEntities](ExportControllerApi.md#exportentities)
- [exportEntitiesRaw](ExportControllerApi.md#exportentitiesraw)
- [getExportLink](ExportControllerApi.md#getexportlink)
- [getExportLinkRaw](ExportControllerApi.md#getexportlinkraw)
- [request](ExportControllerApi.md#request)
- [withMiddleware](ExportControllerApi.md#withmiddleware)
- [withPostMiddleware](ExportControllerApi.md#withpostmiddleware)
- [withPreMiddleware](ExportControllerApi.md#withpremiddleware)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new ExportControllerApi**(`configuration?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration` | [`Configuration`](Configuration.md) |

#### Inherited from

[BaseAPI](BaseAPI.md).[constructor](BaseAPI.md#constructor)

## Properties

### <a id="configuration" name="configuration"></a> configuration

• `Protected` **configuration**: [`Configuration`](Configuration.md)

#### Inherited from

[BaseAPI](BaseAPI.md).[configuration](BaseAPI.md#configuration)

## Methods

### <a id="exportentities" name="exportentities"></a> exportEntities

▸ **exportEntities**(`requestParameters`, `initOverrides?`): `Promise`<`string`[]\>

Export inboxes link callable via browser

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ExportEntitiesRequest`](../interfaces/ExportEntitiesRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`string`[]\>

___

### <a id="exportentitiesraw" name="exportentitiesraw"></a> exportEntitiesRaw

▸ **exportEntitiesRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`string`[]\>\>

Export inboxes link callable via browser

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ExportEntitiesRequest`](../interfaces/ExportEntitiesRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`string`[]\>\>

___

### <a id="getexportlink" name="getexportlink"></a> getExportLink

▸ **getExportLink**(`requestParameters`, `initOverrides?`): `Promise`<[`ExportLink`](../interfaces/ExportLink.md)\>

Get export link

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetExportLinkRequest`](../interfaces/GetExportLinkRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ExportLink`](../interfaces/ExportLink.md)\>

___

### <a id="getexportlinkraw" name="getexportlinkraw"></a> getExportLinkRaw

▸ **getExportLinkRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ExportLink`](../interfaces/ExportLink.md)\>\>

Get export link

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetExportLinkRequest`](../interfaces/GetExportLinkRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ExportLink`](../interfaces/ExportLink.md)\>\>

___

### <a id="request" name="request"></a> request

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

### <a id="withmiddleware" name="withmiddleware"></a> withMiddleware

▸ **withMiddleware**<`T`\>(`this`, ...`middlewares`): `T`

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

### <a id="withpostmiddleware" name="withpostmiddleware"></a> withPostMiddleware

▸ **withPostMiddleware**<`T`\>(`this`, ...`postMiddlewares`): `T`

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

### <a id="withpremiddleware" name="withpremiddleware"></a> withPreMiddleware

▸ **withPreMiddleware**<`T`\>(`this`, ...`preMiddlewares`): `T`

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
