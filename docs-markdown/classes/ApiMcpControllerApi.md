[MailSlurp JS](../README.md) / ApiMcpControllerApi

# Class: ApiMcpControllerApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`ApiMcpControllerApi`**

## Table of contents

### Constructors

- [constructor](ApiMcpControllerApi.md#constructor)

### Properties

- [configuration](ApiMcpControllerApi.md#configuration)

### Methods

- [post](ApiMcpControllerApi.md#post)
- [postRaw](ApiMcpControllerApi.md#postraw)
- [request](ApiMcpControllerApi.md#request)
- [withMiddleware](ApiMcpControllerApi.md#withmiddleware)
- [withPostMiddleware](ApiMcpControllerApi.md#withpostmiddleware)
- [withPreMiddleware](ApiMcpControllerApi.md#withpremiddleware)

## Constructors

### constructor

• **new ApiMcpControllerApi**(`configuration?`)

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

### post

▸ **post**(`requestParameters`, `initOverrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`PostRequest`](../interfaces/PostRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`string`\>

___

### postRaw

▸ **postRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`string`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`PostRequest`](../interfaces/PostRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`string`\>\>

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
