[MailSlurp JS](../README.md) / EmailVerificationControllerApi

# Class: EmailVerificationControllerApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`EmailVerificationControllerApi`**

## Table of contents

### Constructors

- [constructor](EmailVerificationControllerApi.md#constructor)

### Properties

- [configuration](EmailVerificationControllerApi.md#configuration)

### Methods

- [deleteAllValidationRequests](EmailVerificationControllerApi.md#deleteallvalidationrequests)
- [deleteAllValidationRequestsRaw](EmailVerificationControllerApi.md#deleteallvalidationrequestsraw)
- [deleteValidationRequest](EmailVerificationControllerApi.md#deletevalidationrequest)
- [deleteValidationRequestRaw](EmailVerificationControllerApi.md#deletevalidationrequestraw)
- [getValidationRequests](EmailVerificationControllerApi.md#getvalidationrequests)
- [getValidationRequestsRaw](EmailVerificationControllerApi.md#getvalidationrequestsraw)
- [request](EmailVerificationControllerApi.md#request)
- [validateEmailAddressList](EmailVerificationControllerApi.md#validateemailaddresslist)
- [validateEmailAddressListRaw](EmailVerificationControllerApi.md#validateemailaddresslistraw)
- [withMiddleware](EmailVerificationControllerApi.md#withmiddleware)
- [withPostMiddleware](EmailVerificationControllerApi.md#withpostmiddleware)
- [withPreMiddleware](EmailVerificationControllerApi.md#withpremiddleware)

## Constructors

### constructor

• **new EmailVerificationControllerApi**(`configuration?`)

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

### deleteAllValidationRequests

▸ **deleteAllValidationRequests**(`initOverrides?`): `Promise`<`void`\>

Remove validation requests
Delete all validation requests

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### deleteAllValidationRequestsRaw

▸ **deleteAllValidationRequestsRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Remove validation requests
Delete all validation requests

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### deleteValidationRequest

▸ **deleteValidationRequest**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

Delete a validation record
Delete a validation record

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteValidationRequestRequest`](../interfaces/DeleteValidationRequestRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### deleteValidationRequestRaw

▸ **deleteValidationRequestRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Delete a validation record
Delete a validation record

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteValidationRequestRequest`](../interfaces/DeleteValidationRequestRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### getValidationRequests

▸ **getValidationRequests**(`requestParameters`, `initOverrides?`): `Promise`<[`PageEmailValidationRequest`](../interfaces/PageEmailValidationRequest.md)\>

List email verification requests
Validate a list of email addresses. Per unit billing. See your plan for pricing.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetValidationRequestsRequest`](../interfaces/GetValidationRequestsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageEmailValidationRequest`](../interfaces/PageEmailValidationRequest.md)\>

___

### getValidationRequestsRaw

▸ **getValidationRequestsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageEmailValidationRequest`](../interfaces/PageEmailValidationRequest.md)\>\>

List email verification requests
Validate a list of email addresses. Per unit billing. See your plan for pricing.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetValidationRequestsRequest`](../interfaces/GetValidationRequestsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageEmailValidationRequest`](../interfaces/PageEmailValidationRequest.md)\>\>

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

### validateEmailAddressList

▸ **validateEmailAddressList**(`requestParameters`, `initOverrides?`): `Promise`<[`ValidateEmailAddressListResult`](../interfaces/ValidateEmailAddressListResult.md)\>

Verify a list of email addresses is valid and can be contacted.
Validate a list of email addresses. Per unit billing. See your plan for pricing.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ValidateEmailAddressListRequest`](../interfaces/ValidateEmailAddressListRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ValidateEmailAddressListResult`](../interfaces/ValidateEmailAddressListResult.md)\>

___

### validateEmailAddressListRaw

▸ **validateEmailAddressListRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ValidateEmailAddressListResult`](../interfaces/ValidateEmailAddressListResult.md)\>\>

Verify a list of email addresses is valid and can be contacted.
Validate a list of email addresses. Per unit billing. See your plan for pricing.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ValidateEmailAddressListRequest`](../interfaces/ValidateEmailAddressListRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ValidateEmailAddressListResult`](../interfaces/ValidateEmailAddressListResult.md)\>\>

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
