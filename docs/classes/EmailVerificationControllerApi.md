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

### <a id="constructor" name="constructor"></a> constructor

• **new EmailVerificationControllerApi**(`configuration?`)

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

### <a id="getvalidationrequests" name="getvalidationrequests"></a> getValidationRequests

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

### <a id="getvalidationrequestsraw" name="getvalidationrequestsraw"></a> getValidationRequestsRaw

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

### <a id="validateemailaddresslist" name="validateemailaddresslist"></a> validateEmailAddressList

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

### <a id="validateemailaddresslistraw" name="validateemailaddresslistraw"></a> validateEmailAddressListRaw

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
