[MailSlurp JS](../README.md) / SmsControllerApi

# Class: SmsControllerApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`SmsControllerApi`**

## Table of contents

### Constructors

- [constructor](SmsControllerApi.md#constructor)

### Properties

- [configuration](SmsControllerApi.md#configuration)

### Methods

- [deleteSmsMessage](SmsControllerApi.md#deletesmsmessage)
- [deleteSmsMessageRaw](SmsControllerApi.md#deletesmsmessageraw)
- [deleteSmsMessages](SmsControllerApi.md#deletesmsmessages)
- [deleteSmsMessagesRaw](SmsControllerApi.md#deletesmsmessagesraw)
- [getSmsMessage](SmsControllerApi.md#getsmsmessage)
- [getSmsMessageRaw](SmsControllerApi.md#getsmsmessageraw)
- [getSmsMessagesPaginated](SmsControllerApi.md#getsmsmessagespaginated)
- [getSmsMessagesPaginatedRaw](SmsControllerApi.md#getsmsmessagespaginatedraw)
- [request](SmsControllerApi.md#request)
- [withMiddleware](SmsControllerApi.md#withmiddleware)
- [withPostMiddleware](SmsControllerApi.md#withpostmiddleware)
- [withPreMiddleware](SmsControllerApi.md#withpremiddleware)

## Constructors

### constructor

• **new SmsControllerApi**(`configuration?`)

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

### deleteSmsMessage

▸ **deleteSmsMessage**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

Delete an SMS message
Delete SMS message.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteSmsMessageRequest`](../interfaces/DeleteSmsMessageRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### deleteSmsMessageRaw

▸ **deleteSmsMessageRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Delete an SMS message
Delete SMS message.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteSmsMessageRequest`](../interfaces/DeleteSmsMessageRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### deleteSmsMessages

▸ **deleteSmsMessages**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

Delete all SMS messages or all messages for a given phone number
Delete all SMS messages

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteSmsMessagesRequest`](../interfaces/DeleteSmsMessagesRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### deleteSmsMessagesRaw

▸ **deleteSmsMessagesRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Delete all SMS messages or all messages for a given phone number
Delete all SMS messages

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteSmsMessagesRequest`](../interfaces/DeleteSmsMessagesRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### getSmsMessage

▸ **getSmsMessage**(`requestParameters`, `initOverrides?`): `Promise`<[`SmsDto`](../interfaces/SmsDto.md)\>

Returns a SMS summary object with content.
Get SMS content including body. Expects SMS to exist by ID. For SMS that may not have arrived yet use the WaitForController.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetSmsMessageRequest`](../interfaces/GetSmsMessageRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`SmsDto`](../interfaces/SmsDto.md)\>

___

### getSmsMessageRaw

▸ **getSmsMessageRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SmsDto`](../interfaces/SmsDto.md)\>\>

Returns a SMS summary object with content.
Get SMS content including body. Expects SMS to exist by ID. For SMS that may not have arrived yet use the WaitForController.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetSmsMessageRequest`](../interfaces/GetSmsMessageRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SmsDto`](../interfaces/SmsDto.md)\>\>

___

### getSmsMessagesPaginated

▸ **getSmsMessagesPaginated**(`requestParameters`, `initOverrides?`): `Promise`<[`PageSmsProjection`](../interfaces/PageSmsProjection.md)\>

By default returns all SMS messages across all phone numbers sorted by ascending created at date. Responses are paginated. You can restrict results to a list of phone number IDs. You can also filter out read messages
Get all SMS messages in all phone numbers in paginated form. .

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetSmsMessagesPaginatedRequest`](../interfaces/GetSmsMessagesPaginatedRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageSmsProjection`](../interfaces/PageSmsProjection.md)\>

___

### getSmsMessagesPaginatedRaw

▸ **getSmsMessagesPaginatedRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageSmsProjection`](../interfaces/PageSmsProjection.md)\>\>

By default returns all SMS messages across all phone numbers sorted by ascending created at date. Responses are paginated. You can restrict results to a list of phone number IDs. You can also filter out read messages
Get all SMS messages in all phone numbers in paginated form. .

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetSmsMessagesPaginatedRequest`](../interfaces/GetSmsMessagesPaginatedRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageSmsProjection`](../interfaces/PageSmsProjection.md)\>\>

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
