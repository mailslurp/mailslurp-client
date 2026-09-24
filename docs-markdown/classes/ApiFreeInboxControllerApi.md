[MailSlurp JS](../README.md) / ApiFreeInboxControllerApi

# Class: ApiFreeInboxControllerApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`ApiFreeInboxControllerApi`**

## Table of contents

### Constructors

- [constructor](ApiFreeInboxControllerApi.md#constructor)

### Properties

- [configuration](ApiFreeInboxControllerApi.md#configuration)

### Methods

- [\_delete](ApiFreeInboxControllerApi.md#_delete)
- [\_deleteRaw](ApiFreeInboxControllerApi.md#_deleteraw)
- [create](ApiFreeInboxControllerApi.md#create)
- [createRaw](ApiFreeInboxControllerApi.md#createraw)
- [read](ApiFreeInboxControllerApi.md#read)
- [readRaw](ApiFreeInboxControllerApi.md#readraw)
- [request](ApiFreeInboxControllerApi.md#request)
- [withMiddleware](ApiFreeInboxControllerApi.md#withmiddleware)
- [withPostMiddleware](ApiFreeInboxControllerApi.md#withpostmiddleware)
- [withPreMiddleware](ApiFreeInboxControllerApi.md#withpremiddleware)

## Constructors

### constructor

• **new ApiFreeInboxControllerApi**(`configuration?`)

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

### \_delete

▸ **_delete**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteRequest`](../interfaces/DeleteRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### \_deleteRaw

▸ **_deleteRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteRequest`](../interfaces/DeleteRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### create

▸ **create**(`requestParameters`, `initOverrides?`): `Promise`<[`CreatedFreeInboxDto`](../interfaces/CreatedFreeInboxDto.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateRequest`](../interfaces/CreateRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`CreatedFreeInboxDto`](../interfaces/CreatedFreeInboxDto.md)\>

___

### createRaw

▸ **createRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CreatedFreeInboxDto`](../interfaces/CreatedFreeInboxDto.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateRequest`](../interfaces/CreateRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CreatedFreeInboxDto`](../interfaces/CreatedFreeInboxDto.md)\>\>

___

### read

▸ **read**(`requestParameters`, `initOverrides?`): `Promise`<[`FreeInboxDto`](../interfaces/FreeInboxDto.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ReadRequest`](../interfaces/ReadRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`FreeInboxDto`](../interfaces/FreeInboxDto.md)\>

___

### readRaw

▸ **readRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`FreeInboxDto`](../interfaces/FreeInboxDto.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ReadRequest`](../interfaces/ReadRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`FreeInboxDto`](../interfaces/FreeInboxDto.md)\>\>

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
