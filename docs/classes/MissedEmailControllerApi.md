[MailSlurp JS](../README.md) / MissedEmailControllerApi

# Class: MissedEmailControllerApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`MissedEmailControllerApi`**

## Table of contents

### Constructors

- [constructor](MissedEmailControllerApi.md#constructor)

### Properties

- [configuration](MissedEmailControllerApi.md#configuration)

### Methods

- [getAllMissedEmails](MissedEmailControllerApi.md#getallmissedemails)
- [getAllMissedEmailsRaw](MissedEmailControllerApi.md#getallmissedemailsraw)
- [getAllUnknownMissedEmails](MissedEmailControllerApi.md#getallunknownmissedemails)
- [getAllUnknownMissedEmailsRaw](MissedEmailControllerApi.md#getallunknownmissedemailsraw)
- [getMissedEmail](MissedEmailControllerApi.md#getmissedemail)
- [getMissedEmailRaw](MissedEmailControllerApi.md#getmissedemailraw)
- [request](MissedEmailControllerApi.md#request)
- [waitForNthMissedEmail](MissedEmailControllerApi.md#waitfornthmissedemail)
- [waitForNthMissedEmailRaw](MissedEmailControllerApi.md#waitfornthmissedemailraw)
- [withMiddleware](MissedEmailControllerApi.md#withmiddleware)
- [withPostMiddleware](MissedEmailControllerApi.md#withpostmiddleware)
- [withPreMiddleware](MissedEmailControllerApi.md#withpremiddleware)

## Constructors

### constructor

• **new MissedEmailControllerApi**(`configuration?`)

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

### getAllMissedEmails

▸ **getAllMissedEmails**(`requestParameters`, `initOverrides?`): `Promise`<[`PageMissedEmailProjection`](../interfaces/PageMissedEmailProjection.md)\>

Get all MissedEmails in paginated format

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAllMissedEmailsRequest`](../interfaces/GetAllMissedEmailsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageMissedEmailProjection`](../interfaces/PageMissedEmailProjection.md)\>

___

### getAllMissedEmailsRaw

▸ **getAllMissedEmailsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageMissedEmailProjection`](../interfaces/PageMissedEmailProjection.md)\>\>

Get all MissedEmails in paginated format

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAllMissedEmailsRequest`](../interfaces/GetAllMissedEmailsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageMissedEmailProjection`](../interfaces/PageMissedEmailProjection.md)\>\>

___

### getAllUnknownMissedEmails

▸ **getAllUnknownMissedEmails**(`requestParameters`, `initOverrides?`): `Promise`<[`PageUnknownMissedEmailProjection`](../interfaces/PageUnknownMissedEmailProjection.md)\>

Unknown missed emails are emails that were sent to MailSlurp but could not be assigned to an existing inbox.
Get all unknown missed emails in paginated format

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAllUnknownMissedEmailsRequest`](../interfaces/GetAllUnknownMissedEmailsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageUnknownMissedEmailProjection`](../interfaces/PageUnknownMissedEmailProjection.md)\>

___

### getAllUnknownMissedEmailsRaw

▸ **getAllUnknownMissedEmailsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageUnknownMissedEmailProjection`](../interfaces/PageUnknownMissedEmailProjection.md)\>\>

Unknown missed emails are emails that were sent to MailSlurp but could not be assigned to an existing inbox.
Get all unknown missed emails in paginated format

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAllUnknownMissedEmailsRequest`](../interfaces/GetAllUnknownMissedEmailsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageUnknownMissedEmailProjection`](../interfaces/PageUnknownMissedEmailProjection.md)\>\>

___

### getMissedEmail

▸ **getMissedEmail**(`requestParameters`, `initOverrides?`): `Promise`<[`MissedEmail`](../interfaces/MissedEmail.md)\>

Get MissedEmail

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetMissedEmailRequest`](../interfaces/GetMissedEmailRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`MissedEmail`](../interfaces/MissedEmail.md)\>

___

### getMissedEmailRaw

▸ **getMissedEmailRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`MissedEmail`](../interfaces/MissedEmail.md)\>\>

Get MissedEmail

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetMissedEmailRequest`](../interfaces/GetMissedEmailRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`MissedEmail`](../interfaces/MissedEmail.md)\>\>

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

### waitForNthMissedEmail

▸ **waitForNthMissedEmail**(`requestParameters`, `initOverrides?`): `Promise`<[`MissedEmail`](../interfaces/MissedEmail.md)\>

Wait for 0 based index missed email
Wait for Nth missed email

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`WaitForNthMissedEmailRequest`](../interfaces/WaitForNthMissedEmailRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`MissedEmail`](../interfaces/MissedEmail.md)\>

___

### waitForNthMissedEmailRaw

▸ **waitForNthMissedEmailRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`MissedEmail`](../interfaces/MissedEmail.md)\>\>

Wait for 0 based index missed email
Wait for Nth missed email

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`WaitForNthMissedEmailRequest`](../interfaces/WaitForNthMissedEmailRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`MissedEmail`](../interfaces/MissedEmail.md)\>\>

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
