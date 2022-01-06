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

### constructor

• **new ExportControllerApi**(`configuration?`)

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

### exportEntities

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

### exportEntitiesRaw

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

### getExportLink

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

### getExportLinkRaw

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

▸ **withMiddleware**<`T`\>(...`middlewares`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseAPI`](BaseAPI.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...middlewares` | [`Middleware`](../interfaces/Middleware.md)[] |

#### Returns

`T`

#### Inherited from

[BaseAPI](BaseAPI.md).[withMiddleware](BaseAPI.md#withmiddleware)

___

### withPostMiddleware

▸ **withPostMiddleware**<`T`\>(...`postMiddlewares`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseAPI`](BaseAPI.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...postMiddlewares` | (`context`: [`ResponseContext`](../interfaces/ResponseContext.md)) => `Promise`<`void` \| `Response`\>[] |

#### Returns

`T`

#### Inherited from

[BaseAPI](BaseAPI.md).[withPostMiddleware](BaseAPI.md#withpostmiddleware)

___

### withPreMiddleware

▸ **withPreMiddleware**<`T`\>(...`preMiddlewares`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseAPI`](BaseAPI.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...preMiddlewares` | (`context`: [`RequestContext`](../interfaces/RequestContext.md)) => `Promise`<`void` \| [`FetchParams`](../interfaces/FetchParams.md)\>[] |

#### Returns

`T`

#### Inherited from

[BaseAPI](BaseAPI.md).[withPreMiddleware](BaseAPI.md#withpremiddleware)
