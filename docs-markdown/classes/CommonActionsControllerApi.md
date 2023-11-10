[MailSlurp JS](../README.md) / CommonActionsControllerApi

# Class: CommonActionsControllerApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`CommonActionsControllerApi`**

## Table of contents

### Constructors

- [constructor](CommonActionsControllerApi.md#constructor)

### Properties

- [configuration](CommonActionsControllerApi.md#configuration)

### Methods

- [createNewEmailAddress](CommonActionsControllerApi.md#createnewemailaddress)
- [createNewEmailAddressRaw](CommonActionsControllerApi.md#createnewemailaddressraw)
- [createRandomInbox](CommonActionsControllerApi.md#createrandominbox)
- [createRandomInboxRaw](CommonActionsControllerApi.md#createrandominboxraw)
- [deleteEmailAddress](CommonActionsControllerApi.md#deleteemailaddress)
- [deleteEmailAddressRaw](CommonActionsControllerApi.md#deleteemailaddressraw)
- [emptyInbox](CommonActionsControllerApi.md#emptyinbox)
- [emptyInboxRaw](CommonActionsControllerApi.md#emptyinboxraw)
- [request](CommonActionsControllerApi.md#request)
- [sendEmailQuery](CommonActionsControllerApi.md#sendemailquery)
- [sendEmailQueryRaw](CommonActionsControllerApi.md#sendemailqueryraw)
- [sendEmailSimple](CommonActionsControllerApi.md#sendemailsimple)
- [sendEmailSimpleRaw](CommonActionsControllerApi.md#sendemailsimpleraw)
- [withMiddleware](CommonActionsControllerApi.md#withmiddleware)
- [withPostMiddleware](CommonActionsControllerApi.md#withpostmiddleware)
- [withPreMiddleware](CommonActionsControllerApi.md#withpremiddleware)

## Constructors

### constructor

• **new CommonActionsControllerApi**(`configuration?`)

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

### createNewEmailAddress

▸ **createNewEmailAddress**(`requestParameters`, `initOverrides?`): `Promise`<[`InboxDto`](../interfaces/InboxDto.md)\>

Returns an Inbox with an `id` and an `emailAddress`
Create new random inbox

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateNewEmailAddressRequest`](../interfaces/CreateNewEmailAddressRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`InboxDto`](../interfaces/InboxDto.md)\>

___

### createNewEmailAddressRaw

▸ **createNewEmailAddressRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxDto`](../interfaces/InboxDto.md)\>\>

Returns an Inbox with an `id` and an `emailAddress`
Create new random inbox

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateNewEmailAddressRequest`](../interfaces/CreateNewEmailAddressRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxDto`](../interfaces/InboxDto.md)\>\>

___

### createRandomInbox

▸ **createRandomInbox**(`requestParameters`, `initOverrides?`): `Promise`<[`InboxDto`](../interfaces/InboxDto.md)\>

Returns an Inbox with an `id` and an `emailAddress`
Create new random inbox

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateRandomInboxRequest`](../interfaces/CreateRandomInboxRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`InboxDto`](../interfaces/InboxDto.md)\>

___

### createRandomInboxRaw

▸ **createRandomInboxRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxDto`](../interfaces/InboxDto.md)\>\>

Returns an Inbox with an `id` and an `emailAddress`
Create new random inbox

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateRandomInboxRequest`](../interfaces/CreateRandomInboxRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxDto`](../interfaces/InboxDto.md)\>\>

___

### deleteEmailAddress

▸ **deleteEmailAddress**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

Deletes inbox email address
Delete inbox email address by inbox id

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteEmailAddressRequest`](../interfaces/DeleteEmailAddressRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### deleteEmailAddressRaw

▸ **deleteEmailAddressRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Deletes inbox email address
Delete inbox email address by inbox id

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteEmailAddressRequest`](../interfaces/DeleteEmailAddressRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### emptyInbox

▸ **emptyInbox**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

Deletes all emails
Delete all emails in an inbox

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`EmptyInboxRequest`](../interfaces/EmptyInboxRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### emptyInboxRaw

▸ **emptyInboxRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Deletes all emails
Delete all emails in an inbox

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`EmptyInboxRequest`](../interfaces/EmptyInboxRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

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

### sendEmailQuery

▸ **sendEmailQuery**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

If no senderId or inboxId provided a random email address will be used to send from. Ensure your parameters are URL encoded.
Send an email using query parameters

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`SendEmailQueryRequest`](../interfaces/SendEmailQueryRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### sendEmailQueryRaw

▸ **sendEmailQueryRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

If no senderId or inboxId provided a random email address will be used to send from. Ensure your parameters are URL encoded.
Send an email using query parameters

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`SendEmailQueryRequest`](../interfaces/SendEmailQueryRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### sendEmailSimple

▸ **sendEmailSimple**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

If no senderId or inboxId provided a random email address will be used to send from.
Send an email

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`SendEmailSimpleRequest`](../interfaces/SendEmailSimpleRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### sendEmailSimpleRaw

▸ **sendEmailSimpleRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

If no senderId or inboxId provided a random email address will be used to send from.
Send an email

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`SendEmailSimpleRequest`](../interfaces/SendEmailSimpleRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

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
