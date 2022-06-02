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

### <a id="constructor" name="constructor"></a> constructor

• **new AliasControllerApi**(`configuration?`)

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

### <a id="createalias" name="createalias"></a> createAlias

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

### <a id="createaliasraw" name="createaliasraw"></a> createAliasRaw

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

### <a id="deletealias" name="deletealias"></a> deleteAlias

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

### <a id="deletealiasraw" name="deletealiasraw"></a> deleteAliasRaw

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

### <a id="getalias" name="getalias"></a> getAlias

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

### <a id="getaliasemails" name="getaliasemails"></a> getAliasEmails

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

### <a id="getaliasemailsraw" name="getaliasemailsraw"></a> getAliasEmailsRaw

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

### <a id="getaliasraw" name="getaliasraw"></a> getAliasRaw

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

### <a id="getaliasthreads" name="getaliasthreads"></a> getAliasThreads

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

### <a id="getaliasthreadsraw" name="getaliasthreadsraw"></a> getAliasThreadsRaw

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

### <a id="getaliases" name="getaliases"></a> getAliases

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

### <a id="getaliasesraw" name="getaliasesraw"></a> getAliasesRaw

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

### <a id="replytoaliasemail" name="replytoaliasemail"></a> replyToAliasEmail

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

### <a id="replytoaliasemailraw" name="replytoaliasemailraw"></a> replyToAliasEmailRaw

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

### <a id="sendaliasemail" name="sendaliasemail"></a> sendAliasEmail

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

### <a id="sendaliasemailraw" name="sendaliasemailraw"></a> sendAliasEmailRaw

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

### <a id="updatealias" name="updatealias"></a> updateAlias

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

### <a id="updatealiasraw" name="updatealiasraw"></a> updateAliasRaw

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
