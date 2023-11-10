[MailSlurp JS](../README.md) / AliasControllerApi

# Class: AliasControllerApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`AliasControllerApi`**

## Table of contents

### Constructors

- [constructor](AliasControllerApi.md#constructor)

### Properties

- [configuration](AliasControllerApi.md#configuration)

### Methods

- [createAlias](AliasControllerApi.md#createalias)
- [createAliasRaw](AliasControllerApi.md#createaliasraw)
- [deleteAlias](AliasControllerApi.md#deletealias)
- [deleteAliasRaw](AliasControllerApi.md#deletealiasraw)
- [getAlias](AliasControllerApi.md#getalias)
- [getAliasEmails](AliasControllerApi.md#getaliasemails)
- [getAliasEmailsRaw](AliasControllerApi.md#getaliasemailsraw)
- [getAliasRaw](AliasControllerApi.md#getaliasraw)
- [getAliasThreads](AliasControllerApi.md#getaliasthreads)
- [getAliasThreadsRaw](AliasControllerApi.md#getaliasthreadsraw)
- [getAliases](AliasControllerApi.md#getaliases)
- [getAliasesRaw](AliasControllerApi.md#getaliasesraw)
- [getThread](AliasControllerApi.md#getthread)
- [getThreadRaw](AliasControllerApi.md#getthreadraw)
- [getThreadsPaginated](AliasControllerApi.md#getthreadspaginated)
- [getThreadsPaginatedRaw](AliasControllerApi.md#getthreadspaginatedraw)
- [replyToAliasEmail](AliasControllerApi.md#replytoaliasemail)
- [replyToAliasEmailRaw](AliasControllerApi.md#replytoaliasemailraw)
- [request](AliasControllerApi.md#request)
- [sendAliasEmail](AliasControllerApi.md#sendaliasemail)
- [sendAliasEmailRaw](AliasControllerApi.md#sendaliasemailraw)
- [updateAlias](AliasControllerApi.md#updatealias)
- [updateAliasRaw](AliasControllerApi.md#updatealiasraw)
- [withMiddleware](AliasControllerApi.md#withmiddleware)
- [withPostMiddleware](AliasControllerApi.md#withpostmiddleware)
- [withPreMiddleware](AliasControllerApi.md#withpremiddleware)

## Constructors

### constructor

• **new AliasControllerApi**(`configuration?`)

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

### createAlias

▸ **createAlias**(`requestParameters`, `initOverrides?`): `Promise`<[`AliasDto`](../interfaces/AliasDto.md)\>

Email aliases use a MailSlurp randomly generated email address (or a custom domain inbox that you provide) to mask or proxy a real email address. Emails sent to the alias address will be forwarded to the hidden email address it was created for. If you want to send a reply use the threadId attached
Create an email alias. Must be verified by clicking link inside verification email that will be sent to the address. Once verified the alias will be active.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateAliasRequest`](../interfaces/CreateAliasRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`AliasDto`](../interfaces/AliasDto.md)\>

___

### createAliasRaw

▸ **createAliasRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AliasDto`](../interfaces/AliasDto.md)\>\>

Email aliases use a MailSlurp randomly generated email address (or a custom domain inbox that you provide) to mask or proxy a real email address. Emails sent to the alias address will be forwarded to the hidden email address it was created for. If you want to send a reply use the threadId attached
Create an email alias. Must be verified by clicking link inside verification email that will be sent to the address. Once verified the alias will be active.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateAliasRequest`](../interfaces/CreateAliasRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AliasDto`](../interfaces/AliasDto.md)\>\>

___

### deleteAlias

▸ **deleteAlias**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

Delete an email alias

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteAliasRequest`](../interfaces/DeleteAliasRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### deleteAliasRaw

▸ **deleteAliasRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Delete an email alias

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteAliasRequest`](../interfaces/DeleteAliasRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### getAlias

▸ **getAlias**(`requestParameters`, `initOverrides?`): `Promise`<[`AliasDto`](../interfaces/AliasDto.md)\>

Get an email alias by ID
Get an email alias

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAliasRequest`](../interfaces/GetAliasRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`AliasDto`](../interfaces/AliasDto.md)\>

___

### getAliasEmails

▸ **getAliasEmails**(`requestParameters`, `initOverrides?`): `Promise`<[`PageEmailProjection`](../interfaces/PageEmailProjection.md)\>

Get paginated emails for an alias by ID
Get emails for an alias

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAliasEmailsRequest`](../interfaces/GetAliasEmailsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageEmailProjection`](../interfaces/PageEmailProjection.md)\>

___

### getAliasEmailsRaw

▸ **getAliasEmailsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageEmailProjection`](../interfaces/PageEmailProjection.md)\>\>

Get paginated emails for an alias by ID
Get emails for an alias

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAliasEmailsRequest`](../interfaces/GetAliasEmailsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageEmailProjection`](../interfaces/PageEmailProjection.md)\>\>

___

### getAliasRaw

▸ **getAliasRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AliasDto`](../interfaces/AliasDto.md)\>\>

Get an email alias by ID
Get an email alias

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAliasRequest`](../interfaces/GetAliasRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AliasDto`](../interfaces/AliasDto.md)\>\>

___

### getAliasThreads

▸ **getAliasThreads**(`requestParameters`, `initOverrides?`): `Promise`<[`PageThreadProjection`](../interfaces/PageThreadProjection.md)\>

Returns threads created for an email alias in paginated form
Get threads created for an alias

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAliasThreadsRequest`](../interfaces/GetAliasThreadsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageThreadProjection`](../interfaces/PageThreadProjection.md)\>

___

### getAliasThreadsRaw

▸ **getAliasThreadsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageThreadProjection`](../interfaces/PageThreadProjection.md)\>\>

Returns threads created for an email alias in paginated form
Get threads created for an alias

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAliasThreadsRequest`](../interfaces/GetAliasThreadsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageThreadProjection`](../interfaces/PageThreadProjection.md)\>\>

___

### getAliases

▸ **getAliases**(`requestParameters`, `initOverrides?`): `Promise`<[`PageAlias`](../interfaces/PageAlias.md)\>

Get all email aliases in paginated form
Get all email aliases you have created

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAliasesRequest`](../interfaces/GetAliasesRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageAlias`](../interfaces/PageAlias.md)\>

___

### getAliasesRaw

▸ **getAliasesRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageAlias`](../interfaces/PageAlias.md)\>\>

Get all email aliases in paginated form
Get all email aliases you have created

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAliasesRequest`](../interfaces/GetAliasesRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageAlias`](../interfaces/PageAlias.md)\>\>

___

### getThread

▸ **getThread**(`requestParameters`, `initOverrides?`): `Promise`<[`ThreadProjection`](../interfaces/ThreadProjection.md)\>

Return a thread associated with an alias
Get a thread

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetThreadRequest`](../interfaces/GetThreadRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ThreadProjection`](../interfaces/ThreadProjection.md)\>

___

### getThreadRaw

▸ **getThreadRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ThreadProjection`](../interfaces/ThreadProjection.md)\>\>

Return a thread associated with an alias
Get a thread

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetThreadRequest`](../interfaces/GetThreadRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ThreadProjection`](../interfaces/ThreadProjection.md)\>\>

___

### getThreadsPaginated

▸ **getThreadsPaginated**(`requestParameters`, `initOverrides?`): `Promise`<[`PageThreadProjection`](../interfaces/PageThreadProjection.md)\>

Returns threads created for all aliases in paginated form
Get all threads

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetThreadsPaginatedRequest`](../interfaces/GetThreadsPaginatedRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageThreadProjection`](../interfaces/PageThreadProjection.md)\>

___

### getThreadsPaginatedRaw

▸ **getThreadsPaginatedRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageThreadProjection`](../interfaces/PageThreadProjection.md)\>\>

Returns threads created for all aliases in paginated form
Get all threads

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetThreadsPaginatedRequest`](../interfaces/GetThreadsPaginatedRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageThreadProjection`](../interfaces/PageThreadProjection.md)\>\>

___

### replyToAliasEmail

▸ **replyToAliasEmail**(`requestParameters`, `initOverrides?`): `Promise`<[`SentEmailDto`](../interfaces/SentEmailDto.md)\>

Send the reply to the email sender or reply-to and include same subject cc bcc etc. Reply to an email and the contents will be sent with the existing subject to the emails `to`, `cc`, and `bcc`.
Reply to an email

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ReplyToAliasEmailRequest`](../interfaces/ReplyToAliasEmailRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`SentEmailDto`](../interfaces/SentEmailDto.md)\>

___

### replyToAliasEmailRaw

▸ **replyToAliasEmailRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SentEmailDto`](../interfaces/SentEmailDto.md)\>\>

Send the reply to the email sender or reply-to and include same subject cc bcc etc. Reply to an email and the contents will be sent with the existing subject to the emails `to`, `cc`, and `bcc`.
Reply to an email

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ReplyToAliasEmailRequest`](../interfaces/ReplyToAliasEmailRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SentEmailDto`](../interfaces/SentEmailDto.md)\>\>

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

### sendAliasEmail

▸ **sendAliasEmail**(`requestParameters`, `initOverrides?`): `Promise`<[`SentEmailDto`](../interfaces/SentEmailDto.md)\>

Send an email from an alias. Replies to the email will be forwarded to the alias masked email address
Send an email from an alias inbox

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`SendAliasEmailRequest`](../interfaces/SendAliasEmailRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`SentEmailDto`](../interfaces/SentEmailDto.md)\>

___

### sendAliasEmailRaw

▸ **sendAliasEmailRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SentEmailDto`](../interfaces/SentEmailDto.md)\>\>

Send an email from an alias. Replies to the email will be forwarded to the alias masked email address
Send an email from an alias inbox

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`SendAliasEmailRequest`](../interfaces/SendAliasEmailRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SentEmailDto`](../interfaces/SentEmailDto.md)\>\>

___

### updateAlias

▸ **updateAlias**(`requestParameters`, `initOverrides?`): `Promise`<[`AliasDto`](../interfaces/AliasDto.md)\>

Update an email alias

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateAliasRequest`](../interfaces/UpdateAliasRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`AliasDto`](../interfaces/AliasDto.md)\>

___

### updateAliasRaw

▸ **updateAliasRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AliasDto`](../interfaces/AliasDto.md)\>\>

Update an email alias

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateAliasRequest`](../interfaces/UpdateAliasRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AliasDto`](../interfaces/AliasDto.md)\>\>

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
