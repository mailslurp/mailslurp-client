[MailSlurp JS](../README.md) / MissedSmsControllerApi

# Class: MissedSmsControllerApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`MissedSmsControllerApi`**

## Table of contents

### Constructors

- [constructor](MissedSmsControllerApi.md#constructor)

### Properties

- [configuration](MissedSmsControllerApi.md#configuration)

### Methods

- [getAllMissedSmsMessages](MissedSmsControllerApi.md#getallmissedsmsmessages)
- [getAllMissedSmsMessagesRaw](MissedSmsControllerApi.md#getallmissedsmsmessagesraw)
- [getMissedSmsCount](MissedSmsControllerApi.md#getmissedsmscount)
- [getMissedSmsCountRaw](MissedSmsControllerApi.md#getmissedsmscountraw)
- [getMissedSmsMessage](MissedSmsControllerApi.md#getmissedsmsmessage)
- [getMissedSmsMessageRaw](MissedSmsControllerApi.md#getmissedsmsmessageraw)
- [request](MissedSmsControllerApi.md#request)
- [withMiddleware](MissedSmsControllerApi.md#withmiddleware)
- [withPostMiddleware](MissedSmsControllerApi.md#withpostmiddleware)
- [withPreMiddleware](MissedSmsControllerApi.md#withpremiddleware)

## Constructors

### constructor

• **new MissedSmsControllerApi**(`configuration?`)

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

### getAllMissedSmsMessages

▸ **getAllMissedSmsMessages**(`requestParameters`, `initOverrides?`): `Promise`<[`PageMissedSmsProjection`](../interfaces/PageMissedSmsProjection.md)\>

Get all missed SMS messages in paginated format

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAllMissedSmsMessagesRequest`](../interfaces/GetAllMissedSmsMessagesRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageMissedSmsProjection`](../interfaces/PageMissedSmsProjection.md)\>

___

### getAllMissedSmsMessagesRaw

▸ **getAllMissedSmsMessagesRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageMissedSmsProjection`](../interfaces/PageMissedSmsProjection.md)\>\>

Get all missed SMS messages in paginated format

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAllMissedSmsMessagesRequest`](../interfaces/GetAllMissedSmsMessagesRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageMissedSmsProjection`](../interfaces/PageMissedSmsProjection.md)\>\>

___

### getMissedSmsCount

▸ **getMissedSmsCount**(`initOverrides?`): `Promise`<[`CountDto`](../interfaces/CountDto.md)\>

Get missed SMS count

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`CountDto`](../interfaces/CountDto.md)\>

___

### getMissedSmsCountRaw

▸ **getMissedSmsCountRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CountDto`](../interfaces/CountDto.md)\>\>

Get missed SMS count

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CountDto`](../interfaces/CountDto.md)\>\>

___

### getMissedSmsMessage

▸ **getMissedSmsMessage**(`requestParameters`, `initOverrides?`): `Promise`<[`MissedSmsDto`](../interfaces/MissedSmsDto.md)\>

Returns a missed SMS with full content.
Get missed SMS content

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetMissedSmsMessageRequest`](../interfaces/GetMissedSmsMessageRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`MissedSmsDto`](../interfaces/MissedSmsDto.md)\>

___

### getMissedSmsMessageRaw

▸ **getMissedSmsMessageRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`MissedSmsDto`](../interfaces/MissedSmsDto.md)\>\>

Returns a missed SMS with full content.
Get missed SMS content

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetMissedSmsMessageRequest`](../interfaces/GetMissedSmsMessageRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`MissedSmsDto`](../interfaces/MissedSmsDto.md)\>\>

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
