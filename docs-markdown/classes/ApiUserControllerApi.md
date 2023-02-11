[MailSlurp JS](../README.md) / ApiUserControllerApi

# Class: ApiUserControllerApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`ApiUserControllerApi`**

## Table of contents

### Constructors

- [constructor](ApiUserControllerApi.md#constructor)

### Properties

- [configuration](ApiUserControllerApi.md#configuration)

### Methods

- [getJsonPropertyAsString](ApiUserControllerApi.md#getjsonpropertyasstring)
- [getJsonPropertyAsStringRaw](ApiUserControllerApi.md#getjsonpropertyasstringraw)
- [getUserInfo](ApiUserControllerApi.md#getuserinfo)
- [getUserInfoRaw](ApiUserControllerApi.md#getuserinforaw)
- [request](ApiUserControllerApi.md#request)
- [withMiddleware](ApiUserControllerApi.md#withmiddleware)
- [withPostMiddleware](ApiUserControllerApi.md#withpostmiddleware)
- [withPreMiddleware](ApiUserControllerApi.md#withpremiddleware)

## Constructors

### constructor

• **new ApiUserControllerApi**(`configuration?`)

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

### getJsonPropertyAsString

▸ **getJsonPropertyAsString**(`requestParameters`, `initOverrides?`): `Promise`<`string`\>

Utility function to extract properties from JSON objects in language where this is cumbersome.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetJsonPropertyAsStringRequest`](../interfaces/GetJsonPropertyAsStringRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`string`\>

___

### getJsonPropertyAsStringRaw

▸ **getJsonPropertyAsStringRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`string`\>\>

Utility function to extract properties from JSON objects in language where this is cumbersome.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetJsonPropertyAsStringRequest`](../interfaces/GetJsonPropertyAsStringRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`string`\>\>

___

### getUserInfo

▸ **getUserInfo**(`initOverrides?`): `Promise`<[`UserInfoDto`](../interfaces/UserInfoDto.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`UserInfoDto`](../interfaces/UserInfoDto.md)\>

___

### getUserInfoRaw

▸ **getUserInfoRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`UserInfoDto`](../interfaces/UserInfoDto.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`UserInfoDto`](../interfaces/UserInfoDto.md)\>\>

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
