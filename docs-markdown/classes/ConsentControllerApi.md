[MailSlurp JS](../README.md) / ConsentControllerApi

# Class: ConsentControllerApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`ConsentControllerApi`**

## Table of contents

### Constructors

- [constructor](ConsentControllerApi.md#constructor)

### Properties

- [configuration](ConsentControllerApi.md#configuration)

### Methods

- [checkSendingConsentForEmailAddress](ConsentControllerApi.md#checksendingconsentforemailaddress)
- [checkSendingConsentForEmailAddressRaw](ConsentControllerApi.md#checksendingconsentforemailaddressraw)
- [getOptInIdentities](ConsentControllerApi.md#getoptinidentities)
- [getOptInIdentitiesRaw](ConsentControllerApi.md#getoptinidentitiesraw)
- [request](ConsentControllerApi.md#request)
- [revokeOptInConsentForEmailAddress](ConsentControllerApi.md#revokeoptinconsentforemailaddress)
- [revokeOptInConsentForEmailAddressRaw](ConsentControllerApi.md#revokeoptinconsentforemailaddressraw)
- [sendOptInConsentForEmailAddress](ConsentControllerApi.md#sendoptinconsentforemailaddress)
- [sendOptInConsentForEmailAddressRaw](ConsentControllerApi.md#sendoptinconsentforemailaddressraw)
- [withMiddleware](ConsentControllerApi.md#withmiddleware)
- [withPostMiddleware](ConsentControllerApi.md#withpostmiddleware)
- [withPreMiddleware](ConsentControllerApi.md#withpremiddleware)

## Constructors

### constructor

• **new ConsentControllerApi**(`configuration?`)

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

### checkSendingConsentForEmailAddress

▸ **checkSendingConsentForEmailAddress**(`requestParameters`, `initOverrides?`): `Promise`<[`OptInSendingConsentDto`](../interfaces/OptInSendingConsentDto.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CheckSendingConsentForEmailAddressRequest`](../interfaces/CheckSendingConsentForEmailAddressRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`OptInSendingConsentDto`](../interfaces/OptInSendingConsentDto.md)\>

___

### checkSendingConsentForEmailAddressRaw

▸ **checkSendingConsentForEmailAddressRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`OptInSendingConsentDto`](../interfaces/OptInSendingConsentDto.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CheckSendingConsentForEmailAddressRequest`](../interfaces/CheckSendingConsentForEmailAddressRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`OptInSendingConsentDto`](../interfaces/OptInSendingConsentDto.md)\>\>

___

### getOptInIdentities

▸ **getOptInIdentities**(`requestParameters`, `initOverrides?`): `Promise`<[`PageOptInIdentityProjection`](../interfaces/PageOptInIdentityProjection.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetOptInIdentitiesRequest`](../interfaces/GetOptInIdentitiesRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageOptInIdentityProjection`](../interfaces/PageOptInIdentityProjection.md)\>

___

### getOptInIdentitiesRaw

▸ **getOptInIdentitiesRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageOptInIdentityProjection`](../interfaces/PageOptInIdentityProjection.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetOptInIdentitiesRequest`](../interfaces/GetOptInIdentitiesRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageOptInIdentityProjection`](../interfaces/PageOptInIdentityProjection.md)\>\>

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

### revokeOptInConsentForEmailAddress

▸ **revokeOptInConsentForEmailAddress**(`requestParameters`, `initOverrides?`): `Promise`<[`OptInSendingConsentDto`](../interfaces/OptInSendingConsentDto.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`RevokeOptInConsentForEmailAddressRequest`](../interfaces/RevokeOptInConsentForEmailAddressRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`OptInSendingConsentDto`](../interfaces/OptInSendingConsentDto.md)\>

___

### revokeOptInConsentForEmailAddressRaw

▸ **revokeOptInConsentForEmailAddressRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`OptInSendingConsentDto`](../interfaces/OptInSendingConsentDto.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`RevokeOptInConsentForEmailAddressRequest`](../interfaces/RevokeOptInConsentForEmailAddressRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`OptInSendingConsentDto`](../interfaces/OptInSendingConsentDto.md)\>\>

___

### sendOptInConsentForEmailAddress

▸ **sendOptInConsentForEmailAddress**(`requestParameters`, `initOverrides?`): `Promise`<[`OptInConsentSendResult`](../interfaces/OptInConsentSendResult.md)\>

Send double-opt in consent for an email address
Send a verification code to a user once they have explicitly submitted their email address

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`SendOptInConsentForEmailAddressRequest`](../interfaces/SendOptInConsentForEmailAddressRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`OptInConsentSendResult`](../interfaces/OptInConsentSendResult.md)\>

___

### sendOptInConsentForEmailAddressRaw

▸ **sendOptInConsentForEmailAddressRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`OptInConsentSendResult`](../interfaces/OptInConsentSendResult.md)\>\>

Send double-opt in consent for an email address
Send a verification code to a user once they have explicitly submitted their email address

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`SendOptInConsentForEmailAddressRequest`](../interfaces/SendOptInConsentForEmailAddressRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`OptInConsentSendResult`](../interfaces/OptInConsentSendResult.md)\>\>

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
