[MailSlurp JS](../README.md) / SpamEmailControllerApi

# Class: SpamEmailControllerApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`SpamEmailControllerApi`**

## Table of contents

### Constructors

- [constructor](SpamEmailControllerApi.md#constructor)

### Properties

- [configuration](SpamEmailControllerApi.md#configuration)

### Methods

- [getAllSpamEmails](SpamEmailControllerApi.md#getallspamemails)
- [getAllSpamEmailsRaw](SpamEmailControllerApi.md#getallspamemailsraw)
- [request](SpamEmailControllerApi.md#request)
- [withMiddleware](SpamEmailControllerApi.md#withmiddleware)
- [withPostMiddleware](SpamEmailControllerApi.md#withpostmiddleware)
- [withPreMiddleware](SpamEmailControllerApi.md#withpremiddleware)

## Constructors

### constructor

• **new SpamEmailControllerApi**(`configuration?`)

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

### getAllSpamEmails

▸ **getAllSpamEmails**(`requestParameters`, `initOverrides?`): `Promise`<[`PageSpamEmailProjection`](../interfaces/PageSpamEmailProjection.md)\>

Get blocked inbound spam email records in paginated format

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAllSpamEmailsRequest`](../interfaces/GetAllSpamEmailsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageSpamEmailProjection`](../interfaces/PageSpamEmailProjection.md)\>

___

### getAllSpamEmailsRaw

▸ **getAllSpamEmailsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageSpamEmailProjection`](../interfaces/PageSpamEmailProjection.md)\>\>

Get blocked inbound spam email records in paginated format

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAllSpamEmailsRequest`](../interfaces/GetAllSpamEmailsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageSpamEmailProjection`](../interfaces/PageSpamEmailProjection.md)\>\>

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
