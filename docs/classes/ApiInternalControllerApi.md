# Class: ApiInternalControllerApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`ApiInternalControllerApi`**

## Table of contents

### Constructors

- [constructor](ApiInternalControllerApi.md#constructor)

### Properties

- [configuration](ApiInternalControllerApi.md#configuration)

### Methods

- [getSamlUserOrCreate](ApiInternalControllerApi.md#getsamluserorcreate)
- [getSamlUserOrCreateRaw](ApiInternalControllerApi.md#getsamluserorcreateraw)
- [request](ApiInternalControllerApi.md#request)
- [withMiddleware](ApiInternalControllerApi.md#withmiddleware)
- [withPostMiddleware](ApiInternalControllerApi.md#withpostmiddleware)
- [withPreMiddleware](ApiInternalControllerApi.md#withpremiddleware)

## Constructors

### constructor

• **new ApiInternalControllerApi**(`configuration?`)

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

### getSamlUserOrCreate

▸ **getSamlUserOrCreate**(`requestParameters`, `initOverrides?`): `Promise`<[`UserDto`](../interfaces/UserDto.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetSamlUserOrCreateRequest`](../interfaces/GetSamlUserOrCreateRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`UserDto`](../interfaces/UserDto.md)\>

___

### getSamlUserOrCreateRaw

▸ **getSamlUserOrCreateRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`UserDto`](../interfaces/UserDto.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetSamlUserOrCreateRequest`](../interfaces/GetSamlUserOrCreateRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`UserDto`](../interfaces/UserDto.md)\>\>

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
