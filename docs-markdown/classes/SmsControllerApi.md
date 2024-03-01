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
- [getReplyForSmsMessage](SmsControllerApi.md#getreplyforsmsmessage)
- [getReplyForSmsMessageRaw](SmsControllerApi.md#getreplyforsmsmessageraw)
- [getSmsCount](SmsControllerApi.md#getsmscount)
- [getSmsCountRaw](SmsControllerApi.md#getsmscountraw)
- [getSmsMessage](SmsControllerApi.md#getsmsmessage)
- [getSmsMessageRaw](SmsControllerApi.md#getsmsmessageraw)
- [getSmsMessagesPaginated](SmsControllerApi.md#getsmsmessagespaginated)
- [getSmsMessagesPaginatedRaw](SmsControllerApi.md#getsmsmessagespaginatedraw)
- [getUnreadSmsCount](SmsControllerApi.md#getunreadsmscount)
- [getUnreadSmsCountRaw](SmsControllerApi.md#getunreadsmscountraw)
- [replyToSmsMessage](SmsControllerApi.md#replytosmsmessage)
- [replyToSmsMessageRaw](SmsControllerApi.md#replytosmsmessageraw)
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

### getReplyForSmsMessage

▸ **getReplyForSmsMessage**(`requestParameters`, `initOverrides?`): `Promise`<[`ReplyForSms`](../interfaces/ReplyForSms.md)\>

Get reply for an SMS message.
Get reply for an SMS message

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetReplyForSmsMessageRequest`](../interfaces/GetReplyForSmsMessageRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ReplyForSms`](../interfaces/ReplyForSms.md)\>

___

### getReplyForSmsMessageRaw

▸ **getReplyForSmsMessageRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ReplyForSms`](../interfaces/ReplyForSms.md)\>\>

Get reply for an SMS message.
Get reply for an SMS message

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetReplyForSmsMessageRequest`](../interfaces/GetReplyForSmsMessageRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ReplyForSms`](../interfaces/ReplyForSms.md)\>\>

___

### getSmsCount

▸ **getSmsCount**(`initOverrides?`): `Promise`<[`CountDto`](../interfaces/CountDto.md)\>

Get number of SMS
Get SMS count

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`CountDto`](../interfaces/CountDto.md)\>

___

### getSmsCountRaw

▸ **getSmsCountRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CountDto`](../interfaces/CountDto.md)\>\>

Get number of SMS
Get SMS count

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CountDto`](../interfaces/CountDto.md)\>\>

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

### getUnreadSmsCount

▸ **getUnreadSmsCount**(`initOverrides?`): `Promise`<[`UnreadCount`](../interfaces/UnreadCount.md)\>

Get number of SMS unread. Unread means has not been viewed in dashboard or returned in an email API response
Get unread SMS count

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`UnreadCount`](../interfaces/UnreadCount.md)\>

___

### getUnreadSmsCountRaw

▸ **getUnreadSmsCountRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`UnreadCount`](../interfaces/UnreadCount.md)\>\>

Get number of SMS unread. Unread means has not been viewed in dashboard or returned in an email API response
Get unread SMS count

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`UnreadCount`](../interfaces/UnreadCount.md)\>\>

___

### replyToSmsMessage

▸ **replyToSmsMessage**(`requestParameters`, `initOverrides?`): `Promise`<[`SentSmsDto`](../interfaces/SentSmsDto.md)\>

Reply to an SMS message.
Send a reply to a received SMS message. Replies are sent from the receiving number.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ReplyToSmsMessageRequest`](../interfaces/ReplyToSmsMessageRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`SentSmsDto`](../interfaces/SentSmsDto.md)\>

___

### replyToSmsMessageRaw

▸ **replyToSmsMessageRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SentSmsDto`](../interfaces/SentSmsDto.md)\>\>

Reply to an SMS message.
Send a reply to a received SMS message. Replies are sent from the receiving number.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ReplyToSmsMessageRequest`](../interfaces/ReplyToSmsMessageRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SentSmsDto`](../interfaces/SentSmsDto.md)\>\>

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
