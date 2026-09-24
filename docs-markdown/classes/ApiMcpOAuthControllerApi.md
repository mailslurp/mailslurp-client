[MailSlurp JS](../README.md) / ApiMcpOAuthControllerApi

# Class: ApiMcpOAuthControllerApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`ApiMcpOAuthControllerApi`**

## Table of contents

### Constructors

- [constructor](ApiMcpOAuthControllerApi.md#constructor)

### Properties

- [configuration](ApiMcpOAuthControllerApi.md#configuration)

### Methods

- [authorizationServerMetadata](ApiMcpOAuthControllerApi.md#authorizationservermetadata)
- [authorizationServerMetadata1](ApiMcpOAuthControllerApi.md#authorizationservermetadata1)
- [authorizationServerMetadata1Raw](ApiMcpOAuthControllerApi.md#authorizationservermetadata1raw)
- [authorizationServerMetadataRaw](ApiMcpOAuthControllerApi.md#authorizationservermetadataraw)
- [authorize](ApiMcpOAuthControllerApi.md#authorize)
- [authorizeRaw](ApiMcpOAuthControllerApi.md#authorizeraw)
- [protectedResourceMetadata](ApiMcpOAuthControllerApi.md#protectedresourcemetadata)
- [protectedResourceMetadata1](ApiMcpOAuthControllerApi.md#protectedresourcemetadata1)
- [protectedResourceMetadata1Raw](ApiMcpOAuthControllerApi.md#protectedresourcemetadata1raw)
- [protectedResourceMetadataRaw](ApiMcpOAuthControllerApi.md#protectedresourcemetadataraw)
- [register](ApiMcpOAuthControllerApi.md#register)
- [registerRaw](ApiMcpOAuthControllerApi.md#registerraw)
- [request](ApiMcpOAuthControllerApi.md#request)
- [token](ApiMcpOAuthControllerApi.md#token)
- [tokenRaw](ApiMcpOAuthControllerApi.md#tokenraw)
- [withMiddleware](ApiMcpOAuthControllerApi.md#withmiddleware)
- [withPostMiddleware](ApiMcpOAuthControllerApi.md#withpostmiddleware)
- [withPreMiddleware](ApiMcpOAuthControllerApi.md#withpremiddleware)

## Constructors

### constructor

• **new ApiMcpOAuthControllerApi**(`configuration?`)

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

### authorizationServerMetadata

▸ **authorizationServerMetadata**(`initOverrides?`): `Promise`<{ `[key: string]`: `object`;  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<{ `[key: string]`: `object`;  }\>

___

### authorizationServerMetadata1

▸ **authorizationServerMetadata1**(`initOverrides?`): `Promise`<{ `[key: string]`: `object`;  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<{ `[key: string]`: `object`;  }\>

___

### authorizationServerMetadata1Raw

▸ **authorizationServerMetadata1Raw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<{ `[key: string]`: `object`;  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<{ `[key: string]`: `object`;  }\>\>

___

### authorizationServerMetadataRaw

▸ **authorizationServerMetadataRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<{ `[key: string]`: `object`;  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<{ `[key: string]`: `object`;  }\>\>

___

### authorize

▸ **authorize**(`requestParameters`, `initOverrides?`): `Promise`<`object`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AuthorizeRequest`](../interfaces/AuthorizeRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`object`\>

___

### authorizeRaw

▸ **authorizeRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AuthorizeRequest`](../interfaces/AuthorizeRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

___

### protectedResourceMetadata

▸ **protectedResourceMetadata**(`initOverrides?`): `Promise`<{ `[key: string]`: `object`;  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<{ `[key: string]`: `object`;  }\>

___

### protectedResourceMetadata1

▸ **protectedResourceMetadata1**(`initOverrides?`): `Promise`<{ `[key: string]`: `object`;  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<{ `[key: string]`: `object`;  }\>

___

### protectedResourceMetadata1Raw

▸ **protectedResourceMetadata1Raw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<{ `[key: string]`: `object`;  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<{ `[key: string]`: `object`;  }\>\>

___

### protectedResourceMetadataRaw

▸ **protectedResourceMetadataRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<{ `[key: string]`: `object`;  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<{ `[key: string]`: `object`;  }\>\>

___

### register

▸ **register**(`requestParameters`, `initOverrides?`): `Promise`<`object`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`RegisterRequest`](../interfaces/RegisterRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`object`\>

___

### registerRaw

▸ **registerRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`RegisterRequest`](../interfaces/RegisterRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

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

### token

▸ **token**(`requestParameters`, `initOverrides?`): `Promise`<`object`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`TokenRequest`](../interfaces/TokenRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`object`\>

___

### tokenRaw

▸ **tokenRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`TokenRequest`](../interfaces/TokenRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

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
