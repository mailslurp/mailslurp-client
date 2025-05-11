[MailSlurp JS](../README.md) / OAuthConnectionApi

# Class: OAuthConnectionApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`OAuthConnectionApi`**

## Table of contents

### Constructors

- [constructor](OAuthConnectionApi.md#constructor)

### Properties

- [configuration](OAuthConnectionApi.md#configuration)

### Methods

- [createOAuthConnection](OAuthConnectionApi.md#createoauthconnection)
- [createOAuthConnectionRaw](OAuthConnectionApi.md#createoauthconnectionraw)
- [exchangeAuthorizationTokenAndCreateOrUpdateInbox](OAuthConnectionApi.md#exchangeauthorizationtokenandcreateorupdateinbox)
- [exchangeAuthorizationTokenAndCreateOrUpdateInboxRaw](OAuthConnectionApi.md#exchangeauthorizationtokenandcreateorupdateinboxraw)
- [request](OAuthConnectionApi.md#request)
- [withMiddleware](OAuthConnectionApi.md#withmiddleware)
- [withPostMiddleware](OAuthConnectionApi.md#withpostmiddleware)
- [withPreMiddleware](OAuthConnectionApi.md#withpremiddleware)

## Constructors

### constructor

• **new OAuthConnectionApi**(`configuration?`)

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

### createOAuthConnection

▸ **createOAuthConnection**(`requestParameters`, `initOverrides?`): `Promise`<[`CreateOAuthConnectionResult`](../interfaces/CreateOAuthConnectionResult.md)\>

Configure an inbox for OAuth sync with MailSlurp
Create an OAuth connection

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateOAuthConnectionRequest`](../interfaces/CreateOAuthConnectionRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`CreateOAuthConnectionResult`](../interfaces/CreateOAuthConnectionResult.md)\>

___

### createOAuthConnectionRaw

▸ **createOAuthConnectionRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CreateOAuthConnectionResult`](../interfaces/CreateOAuthConnectionResult.md)\>\>

Configure an inbox for OAuth sync with MailSlurp
Create an OAuth connection

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateOAuthConnectionRequest`](../interfaces/CreateOAuthConnectionRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CreateOAuthConnectionResult`](../interfaces/CreateOAuthConnectionResult.md)\>\>

___

### exchangeAuthorizationTokenAndCreateOrUpdateInbox

▸ **exchangeAuthorizationTokenAndCreateOrUpdateInbox**(`requestParameters`, `initOverrides?`): `Promise`<[`CreateOAuthExchangeResult`](../interfaces/CreateOAuthExchangeResult.md)\>

Exchange an OAuth code for an access token and create an inbox connection in MailSlurp
Exchange authorization code for access token and create inbox

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ExchangeAuthorizationTokenAndCreateOrUpdateInboxRequest`](../interfaces/ExchangeAuthorizationTokenAndCreateOrUpdateInboxRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`CreateOAuthExchangeResult`](../interfaces/CreateOAuthExchangeResult.md)\>

___

### exchangeAuthorizationTokenAndCreateOrUpdateInboxRaw

▸ **exchangeAuthorizationTokenAndCreateOrUpdateInboxRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CreateOAuthExchangeResult`](../interfaces/CreateOAuthExchangeResult.md)\>\>

Exchange an OAuth code for an access token and create an inbox connection in MailSlurp
Exchange authorization code for access token and create inbox

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ExchangeAuthorizationTokenAndCreateOrUpdateInboxRequest`](../interfaces/ExchangeAuthorizationTokenAndCreateOrUpdateInboxRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CreateOAuthExchangeResult`](../interfaces/CreateOAuthExchangeResult.md)\>\>

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
