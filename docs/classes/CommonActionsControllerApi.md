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
- [sendEmailSimple](CommonActionsControllerApi.md#sendemailsimple)
- [sendEmailSimpleRaw](CommonActionsControllerApi.md#sendemailsimpleraw)
- [withMiddleware](CommonActionsControllerApi.md#withmiddleware)
- [withPostMiddleware](CommonActionsControllerApi.md#withpostmiddleware)
- [withPreMiddleware](CommonActionsControllerApi.md#withpremiddleware)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new CommonActionsControllerApi**(`configuration?`)

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

### <a id="createnewemailaddress" name="createnewemailaddress"></a> createNewEmailAddress

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

### <a id="createnewemailaddressraw" name="createnewemailaddressraw"></a> createNewEmailAddressRaw

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

### <a id="createrandominbox" name="createrandominbox"></a> createRandomInbox

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

### <a id="createrandominboxraw" name="createrandominboxraw"></a> createRandomInboxRaw

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

### <a id="deleteemailaddress" name="deleteemailaddress"></a> deleteEmailAddress

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

### <a id="deleteemailaddressraw" name="deleteemailaddressraw"></a> deleteEmailAddressRaw

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

### <a id="emptyinbox" name="emptyinbox"></a> emptyInbox

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

### <a id="emptyinboxraw" name="emptyinboxraw"></a> emptyInboxRaw

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

### <a id="sendemailsimple" name="sendemailsimple"></a> sendEmailSimple

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

### <a id="sendemailsimpleraw" name="sendemailsimpleraw"></a> sendEmailSimpleRaw

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
