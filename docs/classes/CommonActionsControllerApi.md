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
- [createNewEmailAddress1](CommonActionsControllerApi.md#createnewemailaddress1)
- [createNewEmailAddress1Raw](CommonActionsControllerApi.md#createnewemailaddress1raw)
- [createNewEmailAddressRaw](CommonActionsControllerApi.md#createnewemailaddressraw)
- [deleteEmailAddress](CommonActionsControllerApi.md#deleteemailaddress)
- [deleteEmailAddressRaw](CommonActionsControllerApi.md#deleteemailaddressraw)
- [emptyInbox](CommonActionsControllerApi.md#emptyinbox)
- [emptyInboxRaw](CommonActionsControllerApi.md#emptyinboxraw)
- [request](CommonActionsControllerApi.md#request)
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

### createNewEmailAddress1

▸ **createNewEmailAddress1**(`requestParameters`, `initOverrides?`): `Promise`<[`InboxDto`](../interfaces/InboxDto.md)\>

Returns an Inbox with an `id` and an `emailAddress`
Create new random inbox

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateNewEmailAddress1Request`](../interfaces/CreateNewEmailAddress1Request.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`InboxDto`](../interfaces/InboxDto.md)\>

___

### createNewEmailAddress1Raw

▸ **createNewEmailAddress1Raw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxDto`](../interfaces/InboxDto.md)\>\>

Returns an Inbox with an `id` and an `emailAddress`
Create new random inbox

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateNewEmailAddress1Request`](../interfaces/CreateNewEmailAddress1Request.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxDto`](../interfaces/InboxDto.md)\>\>

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

▸ **withMiddleware**<`T`\>(...`middlewares`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseAPI`](BaseAPI.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...middlewares` | [`Middleware`](../interfaces/Middleware.md)[] |

#### Returns

`T`

#### Inherited from

[BaseAPI](BaseAPI.md).[withMiddleware](BaseAPI.md#withmiddleware)

___

### withPostMiddleware

▸ **withPostMiddleware**<`T`\>(...`postMiddlewares`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseAPI`](BaseAPI.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...postMiddlewares` | (`context`: [`ResponseContext`](../interfaces/ResponseContext.md)) => `Promise`<`void` \| `Response`\>[] |

#### Returns

`T`

#### Inherited from

[BaseAPI](BaseAPI.md).[withPostMiddleware](BaseAPI.md#withpostmiddleware)

___

### withPreMiddleware

▸ **withPreMiddleware**<`T`\>(...`preMiddlewares`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseAPI`](BaseAPI.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...preMiddlewares` | (`context`: [`RequestContext`](../interfaces/RequestContext.md)) => `Promise`<`void` \| [`FetchParams`](../interfaces/FetchParams.md)\>[] |

#### Returns

`T`

#### Inherited from

[BaseAPI](BaseAPI.md).[withPreMiddleware](BaseAPI.md#withpremiddleware)
