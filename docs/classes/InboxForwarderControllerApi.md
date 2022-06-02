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
- [getInboxForwarder](InboxForwarderControllerApi.md#getinboxforwarder)
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
- [withMiddleware](InboxForwarderControllerApi.md#withmiddleware)
- [withPostMiddleware](InboxForwarderControllerApi.md#withpostmiddleware)
- [withPreMiddleware](InboxForwarderControllerApi.md#withpremiddleware)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new InboxForwarderControllerApi**(`configuration?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration` | [`Configuration`](Configuration.md) |

#### Inherited from

[BaseAPI](BaseAPI.md).[constructor](BaseAPI.md#constructor)

## Properties

### <a id="configuration" name="configuration"></a> configuration

• `Protected` **configuration**: [`Configuration`](Configuration.md)

#### Inherited from

[BaseAPI](BaseAPI.md).[configuration](BaseAPI.md#configuration)

## Methods

### <a id="createnewinboxforwarder" name="createnewinboxforwarder"></a> createNewInboxForwarder

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

### <a id="createnewinboxforwarderraw" name="createnewinboxforwarderraw"></a> createNewInboxForwarderRaw

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

### <a id="deleteinboxforwarder" name="deleteinboxforwarder"></a> deleteInboxForwarder

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

### <a id="deleteinboxforwarderraw" name="deleteinboxforwarderraw"></a> deleteInboxForwarderRaw

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

### <a id="deleteinboxforwarders" name="deleteinboxforwarders"></a> deleteInboxForwarders

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

### <a id="deleteinboxforwardersraw" name="deleteinboxforwardersraw"></a> deleteInboxForwardersRaw

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

### <a id="getinboxforwarder" name="getinboxforwarder"></a> getInboxForwarder

▸ **getInboxForwarder**(`requestParameters`, `initOverrides?`): `Promise`<[`InboxForwarderDto`](../interfaces/InboxForwarderDto.md)\>

Get inbox ruleset
Get an inbox forwarder

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetInboxForwarderRequest`](../interfaces/GetInboxForwarderRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`InboxForwarderDto`](../interfaces/InboxForwarderDto.md)\>

___

### <a id="getinboxforwarderraw" name="getinboxforwarderraw"></a> getInboxForwarderRaw

▸ **getInboxForwarderRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxForwarderDto`](../interfaces/InboxForwarderDto.md)\>\>

Get inbox ruleset
Get an inbox forwarder

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetInboxForwarderRequest`](../interfaces/GetInboxForwarderRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxForwarderDto`](../interfaces/InboxForwarderDto.md)\>\>

___

### <a id="getinboxforwarders" name="getinboxforwarders"></a> getInboxForwarders

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

### <a id="getinboxforwardersraw" name="getinboxforwardersraw"></a> getInboxForwardersRaw

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

### <a id="request" name="request"></a> request

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

### <a id="testinboxforwarder" name="testinboxforwarder"></a> testInboxForwarder

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

### <a id="testinboxforwarderraw" name="testinboxforwarderraw"></a> testInboxForwarderRaw

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

### <a id="testinboxforwardersforinbox" name="testinboxforwardersforinbox"></a> testInboxForwardersForInbox

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

### <a id="testinboxforwardersforinboxraw" name="testinboxforwardersforinboxraw"></a> testInboxForwardersForInboxRaw

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

### <a id="testnewinboxforwarder" name="testnewinboxforwarder"></a> testNewInboxForwarder

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

### <a id="testnewinboxforwarderraw" name="testnewinboxforwarderraw"></a> testNewInboxForwarderRaw

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

### <a id="withmiddleware" name="withmiddleware"></a> withMiddleware

▸ **withMiddleware**<`T`\>(`this`, ...`middlewares`): `T`

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

### <a id="withpostmiddleware" name="withpostmiddleware"></a> withPostMiddleware

▸ **withPostMiddleware**<`T`\>(`this`, ...`postMiddlewares`): `T`

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

### <a id="withpremiddleware" name="withpremiddleware"></a> withPreMiddleware

▸ **withPreMiddleware**<`T`\>(`this`, ...`preMiddlewares`): `T`

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
