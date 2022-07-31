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

### <a id="constructor" name="constructor"></a> constructor

• **new PhoneControllerApi**(`configuration?`)

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

### <a id="createemergencyaddress" name="createemergencyaddress"></a> createEmergencyAddress

▸ **createEmergencyAddress**(`requestParameters`, `initOverrides?`): `Promise`<[`EmergencyAddress`](../interfaces/EmergencyAddress.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateEmergencyAddressRequest`](../interfaces/CreateEmergencyAddressRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`EmergencyAddress`](../interfaces/EmergencyAddress.md)\>

___

### <a id="createemergencyaddressraw" name="createemergencyaddressraw"></a> createEmergencyAddressRaw

▸ **createEmergencyAddressRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmergencyAddress`](../interfaces/EmergencyAddress.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateEmergencyAddressRequest`](../interfaces/CreateEmergencyAddressRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmergencyAddress`](../interfaces/EmergencyAddress.md)\>\>

___

### <a id="deleteemergencyaddress" name="deleteemergencyaddress"></a> deleteEmergencyAddress

▸ **deleteEmergencyAddress**(`requestParameters`, `initOverrides?`): `Promise`<[`EmptyResponseDto`](../interfaces/EmptyResponseDto.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteEmergencyAddressRequest`](../interfaces/DeleteEmergencyAddressRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`EmptyResponseDto`](../interfaces/EmptyResponseDto.md)\>

___

### <a id="deleteemergencyaddressraw" name="deleteemergencyaddressraw"></a> deleteEmergencyAddressRaw

▸ **deleteEmergencyAddressRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmptyResponseDto`](../interfaces/EmptyResponseDto.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteEmergencyAddressRequest`](../interfaces/DeleteEmergencyAddressRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmptyResponseDto`](../interfaces/EmptyResponseDto.md)\>\>

___

### <a id="deletephonenumber" name="deletephonenumber"></a> deletePhoneNumber

▸ **deletePhoneNumber**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeletePhoneNumberRequest`](../interfaces/DeletePhoneNumberRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### <a id="deletephonenumberraw" name="deletephonenumberraw"></a> deletePhoneNumberRaw

▸ **deletePhoneNumberRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeletePhoneNumberRequest`](../interfaces/DeletePhoneNumberRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### <a id="getemergencyaddress" name="getemergencyaddress"></a> getEmergencyAddress

▸ **getEmergencyAddress**(`requestParameters`, `initOverrides?`): `Promise`<[`EmergencyAddress`](../interfaces/EmergencyAddress.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetEmergencyAddressRequest`](../interfaces/GetEmergencyAddressRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`EmergencyAddress`](../interfaces/EmergencyAddress.md)\>

___

### <a id="getemergencyaddressraw" name="getemergencyaddressraw"></a> getEmergencyAddressRaw

▸ **getEmergencyAddressRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmergencyAddress`](../interfaces/EmergencyAddress.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetEmergencyAddressRequest`](../interfaces/GetEmergencyAddressRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmergencyAddress`](../interfaces/EmergencyAddress.md)\>\>

___

### <a id="getemergencyaddresses" name="getemergencyaddresses"></a> getEmergencyAddresses

▸ **getEmergencyAddresses**(`initOverrides?`): `Promise`<[`EmergencyAddressDto`](../interfaces/EmergencyAddressDto.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`EmergencyAddressDto`](../interfaces/EmergencyAddressDto.md)[]\>

___

### <a id="getemergencyaddressesraw" name="getemergencyaddressesraw"></a> getEmergencyAddressesRaw

▸ **getEmergencyAddressesRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmergencyAddressDto`](../interfaces/EmergencyAddressDto.md)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmergencyAddressDto`](../interfaces/EmergencyAddressDto.md)[]\>\>

___

### <a id="getphonenumber" name="getphonenumber"></a> getPhoneNumber

▸ **getPhoneNumber**(`requestParameters`, `initOverrides?`): `Promise`<[`PhoneNumberDto`](../interfaces/PhoneNumberDto.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetPhoneNumberRequest`](../interfaces/GetPhoneNumberRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PhoneNumberDto`](../interfaces/PhoneNumberDto.md)\>

___

### <a id="getphonenumberraw" name="getphonenumberraw"></a> getPhoneNumberRaw

▸ **getPhoneNumberRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PhoneNumberDto`](../interfaces/PhoneNumberDto.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetPhoneNumberRequest`](../interfaces/GetPhoneNumberRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PhoneNumberDto`](../interfaces/PhoneNumberDto.md)\>\>

___

### <a id="getphonenumbers" name="getphonenumbers"></a> getPhoneNumbers

▸ **getPhoneNumbers**(`requestParameters`, `initOverrides?`): `Promise`<[`PagePhoneNumberProjection`](../interfaces/PagePhoneNumberProjection.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetPhoneNumbersRequest`](../interfaces/GetPhoneNumbersRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PagePhoneNumberProjection`](../interfaces/PagePhoneNumberProjection.md)\>

___

### <a id="getphonenumbersraw" name="getphonenumbersraw"></a> getPhoneNumbersRaw

▸ **getPhoneNumbersRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PagePhoneNumberProjection`](../interfaces/PagePhoneNumberProjection.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetPhoneNumbersRequest`](../interfaces/GetPhoneNumbersRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PagePhoneNumberProjection`](../interfaces/PagePhoneNumberProjection.md)\>\>

___

### <a id="getphoneplans" name="getphoneplans"></a> getPhonePlans

▸ **getPhonePlans**(`initOverrides?`): `Promise`<[`PhonePlanDto`](../interfaces/PhonePlanDto.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PhonePlanDto`](../interfaces/PhonePlanDto.md)[]\>

___

### <a id="getphoneplansraw" name="getphoneplansraw"></a> getPhonePlansRaw

▸ **getPhonePlansRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PhonePlanDto`](../interfaces/PhonePlanDto.md)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PhonePlanDto`](../interfaces/PhonePlanDto.md)[]\>\>

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

### <a id="testphonenumbersendsms" name="testphonenumbersendsms"></a> testPhoneNumberSendSms

▸ **testPhoneNumberSendSms**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`TestPhoneNumberSendSmsRequest`](../interfaces/TestPhoneNumberSendSmsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### <a id="testphonenumbersendsmsraw" name="testphonenumbersendsmsraw"></a> testPhoneNumberSendSmsRaw

▸ **testPhoneNumberSendSmsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`TestPhoneNumberSendSmsRequest`](../interfaces/TestPhoneNumberSendSmsRequest.md) |
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
