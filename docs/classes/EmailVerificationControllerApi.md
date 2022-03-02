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

### getValidationRequests

▸ **getValidationRequests**(`requestParameters`, `initOverrides?`): `Promise`<[`PageEmailValidationRequest`](../interfaces/PageEmailValidationRequest.md)\>

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
