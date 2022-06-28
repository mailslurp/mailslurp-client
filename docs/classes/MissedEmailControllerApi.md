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
- [restoreMissedEmails](MissedEmailControllerApi.md#restoremissedemails)
- [restoreMissedEmailsRaw](MissedEmailControllerApi.md#restoremissedemailsraw)
- [waitForNthMissedEmail](MissedEmailControllerApi.md#waitfornthmissedemail)
- [waitForNthMissedEmailRaw](MissedEmailControllerApi.md#waitfornthmissedemailraw)
- [withMiddleware](MissedEmailControllerApi.md#withmiddleware)
- [withPostMiddleware](MissedEmailControllerApi.md#withpostmiddleware)
- [withPreMiddleware](MissedEmailControllerApi.md#withpremiddleware)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new MissedEmailControllerApi**(`configuration?`)

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

### <a id="getallmissedemails" name="getallmissedemails"></a> getAllMissedEmails

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

### <a id="getallmissedemailsraw" name="getallmissedemailsraw"></a> getAllMissedEmailsRaw

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

### <a id="getallunknownmissedemails" name="getallunknownmissedemails"></a> getAllUnknownMissedEmails

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

### <a id="getallunknownmissedemailsraw" name="getallunknownmissedemailsraw"></a> getAllUnknownMissedEmailsRaw

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

### <a id="getmissedemail" name="getmissedemail"></a> getMissedEmail

▸ **getMissedEmail**(`requestParameters`, `initOverrides?`): `Promise`<[`MissedEmail`](../interfaces/MissedEmail.md)\>

List emails that were missed due to plan limits.
Get MissedEmail

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetMissedEmailRequest`](../interfaces/GetMissedEmailRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`MissedEmail`](../interfaces/MissedEmail.md)\>

___

### <a id="getmissedemailraw" name="getmissedemailraw"></a> getMissedEmailRaw

▸ **getMissedEmailRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`MissedEmail`](../interfaces/MissedEmail.md)\>\>

List emails that were missed due to plan limits.
Get MissedEmail

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetMissedEmailRequest`](../interfaces/GetMissedEmailRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`MissedEmail`](../interfaces/MissedEmail.md)\>\>

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

### <a id="restoremissedemails" name="restoremissedemails"></a> restoreMissedEmails

▸ **restoreMissedEmails**(`initOverrides?`): `Promise`<`void`\>

If emails were missed due to a plan limit they are saved as missed emails. If support team enables the canRestore flag these emails can be reload into your account using this method.
Restore missed emails

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### <a id="restoremissedemailsraw" name="restoremissedemailsraw"></a> restoreMissedEmailsRaw

▸ **restoreMissedEmailsRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

If emails were missed due to a plan limit they are saved as missed emails. If support team enables the canRestore flag these emails can be reload into your account using this method.
Restore missed emails

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### <a id="waitfornthmissedemail" name="waitfornthmissedemail"></a> waitForNthMissedEmail

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

### <a id="waitfornthmissedemailraw" name="waitfornthmissedemailraw"></a> waitForNthMissedEmailRaw

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
