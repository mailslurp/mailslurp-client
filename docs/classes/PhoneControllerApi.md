[MailSlurp JS](../README.md) / PhoneControllerApi

# Class: PhoneControllerApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`PhoneControllerApi`**

## Table of contents

### Constructors

- [constructor](PhoneControllerApi.md#constructor)

### Properties

- [configuration](PhoneControllerApi.md#configuration)

### Methods

- [createEmergencyAddress](PhoneControllerApi.md#createemergencyaddress)
- [createEmergencyAddressRaw](PhoneControllerApi.md#createemergencyaddressraw)
- [deleteEmergencyAddress](PhoneControllerApi.md#deleteemergencyaddress)
- [deleteEmergencyAddressRaw](PhoneControllerApi.md#deleteemergencyaddressraw)
- [deletePhoneNumber](PhoneControllerApi.md#deletephonenumber)
- [deletePhoneNumberRaw](PhoneControllerApi.md#deletephonenumberraw)
- [getEmergencyAddress](PhoneControllerApi.md#getemergencyaddress)
- [getEmergencyAddressRaw](PhoneControllerApi.md#getemergencyaddressraw)
- [getEmergencyAddresses](PhoneControllerApi.md#getemergencyaddresses)
- [getEmergencyAddressesRaw](PhoneControllerApi.md#getemergencyaddressesraw)
- [getPhoneNumber](PhoneControllerApi.md#getphonenumber)
- [getPhoneNumberRaw](PhoneControllerApi.md#getphonenumberraw)
- [getPhoneNumbers](PhoneControllerApi.md#getphonenumbers)
- [getPhoneNumbersRaw](PhoneControllerApi.md#getphonenumbersraw)
- [getPhonePlans](PhoneControllerApi.md#getphoneplans)
- [getPhonePlansRaw](PhoneControllerApi.md#getphoneplansraw)
- [request](PhoneControllerApi.md#request)
- [testPhoneNumberSendSms](PhoneControllerApi.md#testphonenumbersendsms)
- [testPhoneNumberSendSmsRaw](PhoneControllerApi.md#testphonenumbersendsmsraw)
- [withMiddleware](PhoneControllerApi.md#withmiddleware)
- [withPostMiddleware](PhoneControllerApi.md#withpostmiddleware)
- [withPreMiddleware](PhoneControllerApi.md#withpremiddleware)

## Constructors

### constructor

• **new PhoneControllerApi**(`configuration?`)

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

### createEmergencyAddress

▸ **createEmergencyAddress**(`requestParameters`, `initOverrides?`): `Promise`<[`EmergencyAddress`](../interfaces/EmergencyAddress.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateEmergencyAddressRequest`](../interfaces/CreateEmergencyAddressRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`EmergencyAddress`](../interfaces/EmergencyAddress.md)\>

___

### createEmergencyAddressRaw

▸ **createEmergencyAddressRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmergencyAddress`](../interfaces/EmergencyAddress.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateEmergencyAddressRequest`](../interfaces/CreateEmergencyAddressRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmergencyAddress`](../interfaces/EmergencyAddress.md)\>\>

___

### deleteEmergencyAddress

▸ **deleteEmergencyAddress**(`requestParameters`, `initOverrides?`): `Promise`<[`EmptyResponseDto`](../interfaces/EmptyResponseDto.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteEmergencyAddressRequest`](../interfaces/DeleteEmergencyAddressRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`EmptyResponseDto`](../interfaces/EmptyResponseDto.md)\>

___

### deleteEmergencyAddressRaw

▸ **deleteEmergencyAddressRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmptyResponseDto`](../interfaces/EmptyResponseDto.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteEmergencyAddressRequest`](../interfaces/DeleteEmergencyAddressRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmptyResponseDto`](../interfaces/EmptyResponseDto.md)\>\>

___

### deletePhoneNumber

▸ **deletePhoneNumber**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeletePhoneNumberRequest`](../interfaces/DeletePhoneNumberRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### deletePhoneNumberRaw

▸ **deletePhoneNumberRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeletePhoneNumberRequest`](../interfaces/DeletePhoneNumberRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### getEmergencyAddress

▸ **getEmergencyAddress**(`requestParameters`, `initOverrides?`): `Promise`<[`EmergencyAddress`](../interfaces/EmergencyAddress.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetEmergencyAddressRequest`](../interfaces/GetEmergencyAddressRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`EmergencyAddress`](../interfaces/EmergencyAddress.md)\>

___

### getEmergencyAddressRaw

▸ **getEmergencyAddressRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmergencyAddress`](../interfaces/EmergencyAddress.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetEmergencyAddressRequest`](../interfaces/GetEmergencyAddressRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmergencyAddress`](../interfaces/EmergencyAddress.md)\>\>

___

### getEmergencyAddresses

▸ **getEmergencyAddresses**(`initOverrides?`): `Promise`<[`EmergencyAddressDto`](../interfaces/EmergencyAddressDto.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`EmergencyAddressDto`](../interfaces/EmergencyAddressDto.md)[]\>

___

### getEmergencyAddressesRaw

▸ **getEmergencyAddressesRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmergencyAddressDto`](../interfaces/EmergencyAddressDto.md)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmergencyAddressDto`](../interfaces/EmergencyAddressDto.md)[]\>\>

___

### getPhoneNumber

▸ **getPhoneNumber**(`requestParameters`, `initOverrides?`): `Promise`<[`PhoneNumberDto`](../interfaces/PhoneNumberDto.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetPhoneNumberRequest`](../interfaces/GetPhoneNumberRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PhoneNumberDto`](../interfaces/PhoneNumberDto.md)\>

___

### getPhoneNumberRaw

▸ **getPhoneNumberRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PhoneNumberDto`](../interfaces/PhoneNumberDto.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetPhoneNumberRequest`](../interfaces/GetPhoneNumberRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PhoneNumberDto`](../interfaces/PhoneNumberDto.md)\>\>

___

### getPhoneNumbers

▸ **getPhoneNumbers**(`requestParameters`, `initOverrides?`): `Promise`<[`PagePhoneNumberProjection`](../interfaces/PagePhoneNumberProjection.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetPhoneNumbersRequest`](../interfaces/GetPhoneNumbersRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PagePhoneNumberProjection`](../interfaces/PagePhoneNumberProjection.md)\>

___

### getPhoneNumbersRaw

▸ **getPhoneNumbersRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PagePhoneNumberProjection`](../interfaces/PagePhoneNumberProjection.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetPhoneNumbersRequest`](../interfaces/GetPhoneNumbersRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PagePhoneNumberProjection`](../interfaces/PagePhoneNumberProjection.md)\>\>

___

### getPhonePlans

▸ **getPhonePlans**(`initOverrides?`): `Promise`<[`PhonePlanDto`](../interfaces/PhonePlanDto.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PhonePlanDto`](../interfaces/PhonePlanDto.md)[]\>

___

### getPhonePlansRaw

▸ **getPhonePlansRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PhonePlanDto`](../interfaces/PhonePlanDto.md)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PhonePlanDto`](../interfaces/PhonePlanDto.md)[]\>\>

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

### testPhoneNumberSendSms

▸ **testPhoneNumberSendSms**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`TestPhoneNumberSendSmsRequest`](../interfaces/TestPhoneNumberSendSmsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### testPhoneNumberSendSmsRaw

▸ **testPhoneNumberSendSmsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`TestPhoneNumberSendSmsRequest`](../interfaces/TestPhoneNumberSendSmsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

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
