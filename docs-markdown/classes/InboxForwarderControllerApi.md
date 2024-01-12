[MailSlurp JS](../README.md) / InboxForwarderControllerApi

# Class: InboxForwarderControllerApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`InboxForwarderControllerApi`**

## Table of contents

### Constructors

- [constructor](InboxForwarderControllerApi.md#constructor)

### Properties

- [configuration](InboxForwarderControllerApi.md#configuration)

### Methods

- [createNewInboxForwarder](InboxForwarderControllerApi.md#createnewinboxforwarder)
- [createNewInboxForwarderRaw](InboxForwarderControllerApi.md#createnewinboxforwarderraw)
- [deleteInboxForwarder](InboxForwarderControllerApi.md#deleteinboxforwarder)
- [deleteInboxForwarderRaw](InboxForwarderControllerApi.md#deleteinboxforwarderraw)
- [deleteInboxForwarders](InboxForwarderControllerApi.md#deleteinboxforwarders)
- [deleteInboxForwardersRaw](InboxForwarderControllerApi.md#deleteinboxforwardersraw)
- [getAllInboxForwarderEvents](InboxForwarderControllerApi.md#getallinboxforwarderevents)
- [getAllInboxForwarderEventsRaw](InboxForwarderControllerApi.md#getallinboxforwardereventsraw)
- [getForwarderEvent](InboxForwarderControllerApi.md#getforwarderevent)
- [getForwarderEventRaw](InboxForwarderControllerApi.md#getforwardereventraw)
- [getInboxForwarder](InboxForwarderControllerApi.md#getinboxforwarder)
- [getInboxForwarderEvent](InboxForwarderControllerApi.md#getinboxforwarderevent)
- [getInboxForwarderEventRaw](InboxForwarderControllerApi.md#getinboxforwardereventraw)
- [getInboxForwarderEvents](InboxForwarderControllerApi.md#getinboxforwarderevents)
- [getInboxForwarderEventsRaw](InboxForwarderControllerApi.md#getinboxforwardereventsraw)
- [getInboxForwarderRaw](InboxForwarderControllerApi.md#getinboxforwarderraw)
- [getInboxForwarders](InboxForwarderControllerApi.md#getinboxforwarders)
- [getInboxForwardersRaw](InboxForwarderControllerApi.md#getinboxforwardersraw)
- [request](InboxForwarderControllerApi.md#request)
- [testInboxForwarder](InboxForwarderControllerApi.md#testinboxforwarder)
- [testInboxForwarderRaw](InboxForwarderControllerApi.md#testinboxforwarderraw)
- [testInboxForwardersForInbox](InboxForwarderControllerApi.md#testinboxforwardersforinbox)
- [testInboxForwardersForInboxRaw](InboxForwarderControllerApi.md#testinboxforwardersforinboxraw)
- [testNewInboxForwarder](InboxForwarderControllerApi.md#testnewinboxforwarder)
- [testNewInboxForwarderRaw](InboxForwarderControllerApi.md#testnewinboxforwarderraw)
- [updateInboxForwarder](InboxForwarderControllerApi.md#updateinboxforwarder)
- [updateInboxForwarderRaw](InboxForwarderControllerApi.md#updateinboxforwarderraw)
- [withMiddleware](InboxForwarderControllerApi.md#withmiddleware)
- [withPostMiddleware](InboxForwarderControllerApi.md#withpostmiddleware)
- [withPreMiddleware](InboxForwarderControllerApi.md#withpremiddleware)

## Constructors

### constructor

• **new InboxForwarderControllerApi**(`configuration?`)

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

### createNewInboxForwarder

▸ **createNewInboxForwarder**(`requestParameters`, `initOverrides?`): `Promise`<[`InboxForwarderDto`](../interfaces/InboxForwarderDto.md)\>

Create a new inbox rule for forwarding, blocking, and allowing emails when sending and receiving
Create an inbox forwarder

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateNewInboxForwarderRequest`](../interfaces/CreateNewInboxForwarderRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`InboxForwarderDto`](../interfaces/InboxForwarderDto.md)\>

___

### createNewInboxForwarderRaw

▸ **createNewInboxForwarderRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxForwarderDto`](../interfaces/InboxForwarderDto.md)\>\>

Create a new inbox rule for forwarding, blocking, and allowing emails when sending and receiving
Create an inbox forwarder

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateNewInboxForwarderRequest`](../interfaces/CreateNewInboxForwarderRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxForwarderDto`](../interfaces/InboxForwarderDto.md)\>\>

___

### deleteInboxForwarder

▸ **deleteInboxForwarder**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

Delete inbox forwarder
Delete an inbox forwarder

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteInboxForwarderRequest`](../interfaces/DeleteInboxForwarderRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### deleteInboxForwarderRaw

▸ **deleteInboxForwarderRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Delete inbox forwarder
Delete an inbox forwarder

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteInboxForwarderRequest`](../interfaces/DeleteInboxForwarderRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### deleteInboxForwarders

▸ **deleteInboxForwarders**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

Delete inbox forwarders. Accepts optional inboxId filter.
Delete inbox forwarders

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteInboxForwardersRequest`](../interfaces/DeleteInboxForwardersRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### deleteInboxForwardersRaw

▸ **deleteInboxForwardersRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Delete inbox forwarders. Accepts optional inboxId filter.
Delete inbox forwarders

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteInboxForwardersRequest`](../interfaces/DeleteInboxForwardersRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### getAllInboxForwarderEvents

▸ **getAllInboxForwarderEvents**(`requestParameters`, `initOverrides?`): `Promise`<[`PageInboxForwarderEvents`](../interfaces/PageInboxForwarderEvents.md)\>

Get all inbox forwarder events
Get all inbox forwarder events

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAllInboxForwarderEventsRequest`](../interfaces/GetAllInboxForwarderEventsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageInboxForwarderEvents`](../interfaces/PageInboxForwarderEvents.md)\>

___

### getAllInboxForwarderEventsRaw

▸ **getAllInboxForwarderEventsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageInboxForwarderEvents`](../interfaces/PageInboxForwarderEvents.md)\>\>

Get all inbox forwarder events
Get all inbox forwarder events

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAllInboxForwarderEventsRequest`](../interfaces/GetAllInboxForwarderEventsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageInboxForwarderEvents`](../interfaces/PageInboxForwarderEvents.md)\>\>

___

### getForwarderEvent

▸ **getForwarderEvent**(`requestParameters`, `initOverrides?`): `Promise`<[`InboxForwarderEventDto`](../interfaces/InboxForwarderEventDto.md)\>

Get forwarder event
Get a forwarder event

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetForwarderEventRequest`](../interfaces/GetForwarderEventRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`InboxForwarderEventDto`](../interfaces/InboxForwarderEventDto.md)\>

___

### getForwarderEventRaw

▸ **getForwarderEventRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxForwarderEventDto`](../interfaces/InboxForwarderEventDto.md)\>\>

Get forwarder event
Get a forwarder event

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetForwarderEventRequest`](../interfaces/GetForwarderEventRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxForwarderEventDto`](../interfaces/InboxForwarderEventDto.md)\>\>

___

### getInboxForwarder

▸ **getInboxForwarder**(`requestParameters`, `initOverrides?`): `Promise`<[`InboxForwarderDto`](../interfaces/InboxForwarderDto.md)\>

Get inbox forwarder
Get an inbox forwarder

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetInboxForwarderRequest`](../interfaces/GetInboxForwarderRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`InboxForwarderDto`](../interfaces/InboxForwarderDto.md)\>

___

### getInboxForwarderEvent

▸ **getInboxForwarderEvent**(`requestParameters`, `initOverrides?`): `Promise`<[`InboxForwarderEventDto`](../interfaces/InboxForwarderEventDto.md)\>

Get inbox forwarder event
Get an inbox forwarder event

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetInboxForwarderEventRequest`](../interfaces/GetInboxForwarderEventRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`InboxForwarderEventDto`](../interfaces/InboxForwarderEventDto.md)\>

___

### getInboxForwarderEventRaw

▸ **getInboxForwarderEventRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxForwarderEventDto`](../interfaces/InboxForwarderEventDto.md)\>\>

Get inbox forwarder event
Get an inbox forwarder event

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetInboxForwarderEventRequest`](../interfaces/GetInboxForwarderEventRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxForwarderEventDto`](../interfaces/InboxForwarderEventDto.md)\>\>

___

### getInboxForwarderEvents

▸ **getInboxForwarderEvents**(`requestParameters`, `initOverrides?`): `Promise`<[`PageInboxForwarderEvents`](../interfaces/PageInboxForwarderEvents.md)\>

Get inbox forwarder events
Get an inbox forwarder event list

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetInboxForwarderEventsRequest`](../interfaces/GetInboxForwarderEventsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageInboxForwarderEvents`](../interfaces/PageInboxForwarderEvents.md)\>

___

### getInboxForwarderEventsRaw

▸ **getInboxForwarderEventsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageInboxForwarderEvents`](../interfaces/PageInboxForwarderEvents.md)\>\>

Get inbox forwarder events
Get an inbox forwarder event list

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetInboxForwarderEventsRequest`](../interfaces/GetInboxForwarderEventsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageInboxForwarderEvents`](../interfaces/PageInboxForwarderEvents.md)\>\>

___

### getInboxForwarderRaw

▸ **getInboxForwarderRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxForwarderDto`](../interfaces/InboxForwarderDto.md)\>\>

Get inbox forwarder
Get an inbox forwarder

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetInboxForwarderRequest`](../interfaces/GetInboxForwarderRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxForwarderDto`](../interfaces/InboxForwarderDto.md)\>\>

___

### getInboxForwarders

▸ **getInboxForwarders**(`requestParameters`, `initOverrides?`): `Promise`<[`PageInboxForwarderDto`](../interfaces/PageInboxForwarderDto.md)\>

List all forwarders attached to an inbox
List inbox forwarders

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetInboxForwardersRequest`](../interfaces/GetInboxForwardersRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageInboxForwarderDto`](../interfaces/PageInboxForwarderDto.md)\>

___

### getInboxForwardersRaw

▸ **getInboxForwardersRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageInboxForwarderDto`](../interfaces/PageInboxForwarderDto.md)\>\>

List all forwarders attached to an inbox
List inbox forwarders

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetInboxForwardersRequest`](../interfaces/GetInboxForwardersRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageInboxForwarderDto`](../interfaces/PageInboxForwarderDto.md)\>\>

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

### testInboxForwarder

▸ **testInboxForwarder**(`requestParameters`, `initOverrides?`): `Promise`<[`InboxForwarderTestResult`](../interfaces/InboxForwarderTestResult.md)\>

Test an inbox forwarder
Test an inbox forwarder

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`TestInboxForwarderRequest`](../interfaces/TestInboxForwarderRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`InboxForwarderTestResult`](../interfaces/InboxForwarderTestResult.md)\>

___

### testInboxForwarderRaw

▸ **testInboxForwarderRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxForwarderTestResult`](../interfaces/InboxForwarderTestResult.md)\>\>

Test an inbox forwarder
Test an inbox forwarder

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`TestInboxForwarderRequest`](../interfaces/TestInboxForwarderRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxForwarderTestResult`](../interfaces/InboxForwarderTestResult.md)\>\>

___

### testInboxForwardersForInbox

▸ **testInboxForwardersForInbox**(`requestParameters`, `initOverrides?`): `Promise`<[`InboxForwarderTestResult`](../interfaces/InboxForwarderTestResult.md)\>

Test inbox forwarders for inbox
Test inbox forwarders for inbox

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`TestInboxForwardersForInboxRequest`](../interfaces/TestInboxForwardersForInboxRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`InboxForwarderTestResult`](../interfaces/InboxForwarderTestResult.md)\>

___

### testInboxForwardersForInboxRaw

▸ **testInboxForwardersForInboxRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxForwarderTestResult`](../interfaces/InboxForwarderTestResult.md)\>\>

Test inbox forwarders for inbox
Test inbox forwarders for inbox

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`TestInboxForwardersForInboxRequest`](../interfaces/TestInboxForwardersForInboxRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxForwarderTestResult`](../interfaces/InboxForwarderTestResult.md)\>\>

___

### testNewInboxForwarder

▸ **testNewInboxForwarder**(`requestParameters`, `initOverrides?`): `Promise`<[`InboxForwarderTestResult`](../interfaces/InboxForwarderTestResult.md)\>

Test new inbox forwarder
Test new inbox forwarder

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`TestNewInboxForwarderRequest`](../interfaces/TestNewInboxForwarderRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`InboxForwarderTestResult`](../interfaces/InboxForwarderTestResult.md)\>

___

### testNewInboxForwarderRaw

▸ **testNewInboxForwarderRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxForwarderTestResult`](../interfaces/InboxForwarderTestResult.md)\>\>

Test new inbox forwarder
Test new inbox forwarder

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`TestNewInboxForwarderRequest`](../interfaces/TestNewInboxForwarderRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxForwarderTestResult`](../interfaces/InboxForwarderTestResult.md)\>\>

___

### updateInboxForwarder

▸ **updateInboxForwarder**(`requestParameters`, `initOverrides?`): `Promise`<[`InboxForwarderDto`](../interfaces/InboxForwarderDto.md)\>

Update inbox forwarder
Update an inbox forwarder

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateInboxForwarderRequest`](../interfaces/UpdateInboxForwarderRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`InboxForwarderDto`](../interfaces/InboxForwarderDto.md)\>

___

### updateInboxForwarderRaw

▸ **updateInboxForwarderRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxForwarderDto`](../interfaces/InboxForwarderDto.md)\>\>

Update inbox forwarder
Update an inbox forwarder

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateInboxForwarderRequest`](../interfaces/UpdateInboxForwarderRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxForwarderDto`](../interfaces/InboxForwarderDto.md)\>\>

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
