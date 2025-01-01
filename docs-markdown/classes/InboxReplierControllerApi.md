[MailSlurp JS](../README.md) / InboxReplierControllerApi

# Class: InboxReplierControllerApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`InboxReplierControllerApi`**

## Table of contents

### Constructors

- [constructor](InboxReplierControllerApi.md#constructor)

### Properties

- [configuration](InboxReplierControllerApi.md#configuration)

### Methods

- [createNewInboxReplier](InboxReplierControllerApi.md#createnewinboxreplier)
- [createNewInboxReplierRaw](InboxReplierControllerApi.md#createnewinboxreplierraw)
- [deleteInboxReplier](InboxReplierControllerApi.md#deleteinboxreplier)
- [deleteInboxReplierRaw](InboxReplierControllerApi.md#deleteinboxreplierraw)
- [deleteInboxRepliers](InboxReplierControllerApi.md#deleteinboxrepliers)
- [deleteInboxRepliersRaw](InboxReplierControllerApi.md#deleteinboxrepliersraw)
- [getAllInboxReplierEvents](InboxReplierControllerApi.md#getallinboxreplierevents)
- [getAllInboxReplierEventsRaw](InboxReplierControllerApi.md#getallinboxrepliereventsraw)
- [getInboxReplier](InboxReplierControllerApi.md#getinboxreplier)
- [getInboxReplierEvents](InboxReplierControllerApi.md#getinboxreplierevents)
- [getInboxReplierEventsRaw](InboxReplierControllerApi.md#getinboxrepliereventsraw)
- [getInboxReplierRaw](InboxReplierControllerApi.md#getinboxreplierraw)
- [getInboxRepliers](InboxReplierControllerApi.md#getinboxrepliers)
- [getInboxRepliersRaw](InboxReplierControllerApi.md#getinboxrepliersraw)
- [request](InboxReplierControllerApi.md#request)
- [updateInboxReplier](InboxReplierControllerApi.md#updateinboxreplier)
- [updateInboxReplierRaw](InboxReplierControllerApi.md#updateinboxreplierraw)
- [withMiddleware](InboxReplierControllerApi.md#withmiddleware)
- [withPostMiddleware](InboxReplierControllerApi.md#withpostmiddleware)
- [withPreMiddleware](InboxReplierControllerApi.md#withpremiddleware)

## Constructors

### constructor

• **new InboxReplierControllerApi**(`configuration?`)

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

### createNewInboxReplier

▸ **createNewInboxReplier**(`requestParameters`, `initOverrides?`): `Promise`<[`InboxReplierDto`](../interfaces/InboxReplierDto.md)\>

Create a new inbox rule for reply toing, blocking, and allowing emails when sending and receiving
Create an inbox replier

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateNewInboxReplierRequest`](../interfaces/CreateNewInboxReplierRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`InboxReplierDto`](../interfaces/InboxReplierDto.md)\>

___

### createNewInboxReplierRaw

▸ **createNewInboxReplierRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxReplierDto`](../interfaces/InboxReplierDto.md)\>\>

Create a new inbox rule for reply toing, blocking, and allowing emails when sending and receiving
Create an inbox replier

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateNewInboxReplierRequest`](../interfaces/CreateNewInboxReplierRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxReplierDto`](../interfaces/InboxReplierDto.md)\>\>

___

### deleteInboxReplier

▸ **deleteInboxReplier**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

Delete inbox replier
Delete an inbox replier

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteInboxReplierRequest`](../interfaces/DeleteInboxReplierRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### deleteInboxReplierRaw

▸ **deleteInboxReplierRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Delete inbox replier
Delete an inbox replier

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteInboxReplierRequest`](../interfaces/DeleteInboxReplierRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### deleteInboxRepliers

▸ **deleteInboxRepliers**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

Delete inbox repliers. Accepts optional inboxId filter.
Delete inbox repliers

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteInboxRepliersRequest`](../interfaces/DeleteInboxRepliersRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### deleteInboxRepliersRaw

▸ **deleteInboxRepliersRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Delete inbox repliers. Accepts optional inboxId filter.
Delete inbox repliers

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteInboxRepliersRequest`](../interfaces/DeleteInboxRepliersRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### getAllInboxReplierEvents

▸ **getAllInboxReplierEvents**(`requestParameters`, `initOverrides?`): `Promise`<[`PageInboxReplierEvents`](../interfaces/PageInboxReplierEvents.md)\>

Get all inbox ruleset events
Get inbox replier event list

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAllInboxReplierEventsRequest`](../interfaces/GetAllInboxReplierEventsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageInboxReplierEvents`](../interfaces/PageInboxReplierEvents.md)\>

___

### getAllInboxReplierEventsRaw

▸ **getAllInboxReplierEventsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageInboxReplierEvents`](../interfaces/PageInboxReplierEvents.md)\>\>

Get all inbox ruleset events
Get inbox replier event list

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAllInboxReplierEventsRequest`](../interfaces/GetAllInboxReplierEventsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageInboxReplierEvents`](../interfaces/PageInboxReplierEvents.md)\>\>

___

### getInboxReplier

▸ **getInboxReplier**(`requestParameters`, `initOverrides?`): `Promise`<[`InboxReplierDto`](../interfaces/InboxReplierDto.md)\>

Get inbox ruleset
Get an inbox replier

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetInboxReplierRequest`](../interfaces/GetInboxReplierRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`InboxReplierDto`](../interfaces/InboxReplierDto.md)\>

___

### getInboxReplierEvents

▸ **getInboxReplierEvents**(`requestParameters`, `initOverrides?`): `Promise`<[`PageInboxReplierEvents`](../interfaces/PageInboxReplierEvents.md)\>

Get inbox ruleset events
Get an inbox replier event list

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetInboxReplierEventsRequest`](../interfaces/GetInboxReplierEventsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageInboxReplierEvents`](../interfaces/PageInboxReplierEvents.md)\>

___

### getInboxReplierEventsRaw

▸ **getInboxReplierEventsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageInboxReplierEvents`](../interfaces/PageInboxReplierEvents.md)\>\>

Get inbox ruleset events
Get an inbox replier event list

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetInboxReplierEventsRequest`](../interfaces/GetInboxReplierEventsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageInboxReplierEvents`](../interfaces/PageInboxReplierEvents.md)\>\>

___

### getInboxReplierRaw

▸ **getInboxReplierRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxReplierDto`](../interfaces/InboxReplierDto.md)\>\>

Get inbox ruleset
Get an inbox replier

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetInboxReplierRequest`](../interfaces/GetInboxReplierRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxReplierDto`](../interfaces/InboxReplierDto.md)\>\>

___

### getInboxRepliers

▸ **getInboxRepliers**(`requestParameters`, `initOverrides?`): `Promise`<[`PageInboxReplierDto`](../interfaces/PageInboxReplierDto.md)\>

List all repliers attached to an inbox
List inbox repliers

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetInboxRepliersRequest`](../interfaces/GetInboxRepliersRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageInboxReplierDto`](../interfaces/PageInboxReplierDto.md)\>

___

### getInboxRepliersRaw

▸ **getInboxRepliersRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageInboxReplierDto`](../interfaces/PageInboxReplierDto.md)\>\>

List all repliers attached to an inbox
List inbox repliers

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetInboxRepliersRequest`](../interfaces/GetInboxRepliersRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageInboxReplierDto`](../interfaces/PageInboxReplierDto.md)\>\>

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

### updateInboxReplier

▸ **updateInboxReplier**(`requestParameters`, `initOverrides?`): `Promise`<[`InboxReplierDto`](../interfaces/InboxReplierDto.md)\>

Update inbox ruleset
Update an inbox replier

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateInboxReplierRequest`](../interfaces/UpdateInboxReplierRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`InboxReplierDto`](../interfaces/InboxReplierDto.md)\>

___

### updateInboxReplierRaw

▸ **updateInboxReplierRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxReplierDto`](../interfaces/InboxReplierDto.md)\>\>

Update inbox ruleset
Update an inbox replier

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateInboxReplierRequest`](../interfaces/UpdateInboxReplierRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxReplierDto`](../interfaces/InboxReplierDto.md)\>\>

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
