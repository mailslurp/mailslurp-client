[MailSlurp JS](../README.md) / MFAControllerApi

# Class: MFAControllerApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`MFAControllerApi`**

## Table of contents

### Constructors

- [constructor](MFAControllerApi.md#constructor)

### Properties

- [configuration](MFAControllerApi.md#configuration)

### Methods

- [createTotpDeviceForBase32SecretKey](MFAControllerApi.md#createtotpdeviceforbase32secretkey)
- [createTotpDeviceForBase32SecretKeyRaw](MFAControllerApi.md#createtotpdeviceforbase32secretkeyraw)
- [createTotpDeviceForCustom](MFAControllerApi.md#createtotpdeviceforcustom)
- [createTotpDeviceForCustomRaw](MFAControllerApi.md#createtotpdeviceforcustomraw)
- [createTotpDeviceForOtpAuthUrl](MFAControllerApi.md#createtotpdeviceforotpauthurl)
- [createTotpDeviceForOtpAuthUrlRaw](MFAControllerApi.md#createtotpdeviceforotpauthurlraw)
- [getTotpDevice](MFAControllerApi.md#gettotpdevice)
- [getTotpDeviceBy](MFAControllerApi.md#gettotpdeviceby)
- [getTotpDeviceByRaw](MFAControllerApi.md#gettotpdevicebyraw)
- [getTotpDeviceCode](MFAControllerApi.md#gettotpdevicecode)
- [getTotpDeviceCodeRaw](MFAControllerApi.md#gettotpdevicecoderaw)
- [getTotpDeviceRaw](MFAControllerApi.md#gettotpdeviceraw)
- [request](MFAControllerApi.md#request)
- [withMiddleware](MFAControllerApi.md#withmiddleware)
- [withPostMiddleware](MFAControllerApi.md#withpostmiddleware)
- [withPreMiddleware](MFAControllerApi.md#withpremiddleware)

## Constructors

### constructor

• **new MFAControllerApi**(`configuration?`)

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

### createTotpDeviceForBase32SecretKey

▸ **createTotpDeviceForBase32SecretKey**(`requestParameters`, `initOverrides?`): `Promise`<[`TotpDeviceDto`](../interfaces/TotpDeviceDto.md)\>

Create a virtual TOTP device for a given secret key. This is usually present as an alternative login option when pairing OTP devices.
Create a TOTP device from an base32 secret key

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateTotpDeviceForBase32SecretKeyRequest`](../interfaces/CreateTotpDeviceForBase32SecretKeyRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`TotpDeviceDto`](../interfaces/TotpDeviceDto.md)\>

___

### createTotpDeviceForBase32SecretKeyRaw

▸ **createTotpDeviceForBase32SecretKeyRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`TotpDeviceDto`](../interfaces/TotpDeviceDto.md)\>\>

Create a virtual TOTP device for a given secret key. This is usually present as an alternative login option when pairing OTP devices.
Create a TOTP device from an base32 secret key

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateTotpDeviceForBase32SecretKeyRequest`](../interfaces/CreateTotpDeviceForBase32SecretKeyRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`TotpDeviceDto`](../interfaces/TotpDeviceDto.md)\>\>

___

### createTotpDeviceForCustom

▸ **createTotpDeviceForCustom**(`requestParameters`, `initOverrides?`): `Promise`<[`TotpDeviceDto`](../interfaces/TotpDeviceDto.md)\>

Create a virtual TOTP device for custom options specifying all parameters of the TOTP device.
Create a TOTP device from custom options

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateTotpDeviceForCustomRequest`](../interfaces/CreateTotpDeviceForCustomRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`TotpDeviceDto`](../interfaces/TotpDeviceDto.md)\>

___

### createTotpDeviceForCustomRaw

▸ **createTotpDeviceForCustomRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`TotpDeviceDto`](../interfaces/TotpDeviceDto.md)\>\>

Create a virtual TOTP device for custom options specifying all parameters of the TOTP device.
Create a TOTP device from custom options

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateTotpDeviceForCustomRequest`](../interfaces/CreateTotpDeviceForCustomRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`TotpDeviceDto`](../interfaces/TotpDeviceDto.md)\>\>

___

### createTotpDeviceForOtpAuthUrl

▸ **createTotpDeviceForOtpAuthUrl**(`requestParameters`, `initOverrides?`): `Promise`<[`TotpDeviceDto`](../interfaces/TotpDeviceDto.md)\>

Create a virtual TOTP device for a given OTP Auth URL such as otpauth://totp/MyApp:alice@example.com?secret=ABC123&issuer=MyApp&period=30&digits=6&algorithm=SHA1. You can provider overrides in the options for each component of the URL.
Create a TOTP device from an OTP Auth URL

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateTotpDeviceForOtpAuthUrlRequest`](../interfaces/CreateTotpDeviceForOtpAuthUrlRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`TotpDeviceDto`](../interfaces/TotpDeviceDto.md)\>

___

### createTotpDeviceForOtpAuthUrlRaw

▸ **createTotpDeviceForOtpAuthUrlRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`TotpDeviceDto`](../interfaces/TotpDeviceDto.md)\>\>

Create a virtual TOTP device for a given OTP Auth URL such as otpauth://totp/MyApp:alice@example.com?secret=ABC123&issuer=MyApp&period=30&digits=6&algorithm=SHA1. You can provider overrides in the options for each component of the URL.
Create a TOTP device from an OTP Auth URL

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateTotpDeviceForOtpAuthUrlRequest`](../interfaces/CreateTotpDeviceForOtpAuthUrlRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`TotpDeviceDto`](../interfaces/TotpDeviceDto.md)\>\>

___

### getTotpDevice

▸ **getTotpDevice**(`requestParameters`, `initOverrides?`): `Promise`<[`TotpDeviceDto`](../interfaces/TotpDeviceDto.md)\>

Get Time-Based One-Time Password (TOTP) device by its ID.
Get a TOTP device by ID

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetTotpDeviceRequest`](../interfaces/GetTotpDeviceRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`TotpDeviceDto`](../interfaces/TotpDeviceDto.md)\>

___

### getTotpDeviceBy

▸ **getTotpDeviceBy**(`requestParameters`, `initOverrides?`): `Promise`<[`TotpDeviceOptionalDto`](../interfaces/TotpDeviceOptionalDto.md)\>

Get Time-Based One-Time Password (TOTP) device by its username and issuer mapping.
Get a TOTP device by username, issuer, or name. Returns empty if not found.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetTotpDeviceByRequest`](../interfaces/GetTotpDeviceByRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`TotpDeviceOptionalDto`](../interfaces/TotpDeviceOptionalDto.md)\>

___

### getTotpDeviceByRaw

▸ **getTotpDeviceByRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`TotpDeviceOptionalDto`](../interfaces/TotpDeviceOptionalDto.md)\>\>

Get Time-Based One-Time Password (TOTP) device by its username and issuer mapping.
Get a TOTP device by username, issuer, or name. Returns empty if not found.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetTotpDeviceByRequest`](../interfaces/GetTotpDeviceByRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`TotpDeviceOptionalDto`](../interfaces/TotpDeviceOptionalDto.md)\>\>

___

### getTotpDeviceCode

▸ **getTotpDeviceCode**(`requestParameters`, `initOverrides?`): `Promise`<[`TotpDeviceCodeDto`](../interfaces/TotpDeviceCodeDto.md)\>

Get Time-Based One-Time Password for a device by its ID.
Get a TOTP device code by device ID

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetTotpDeviceCodeRequest`](../interfaces/GetTotpDeviceCodeRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`TotpDeviceCodeDto`](../interfaces/TotpDeviceCodeDto.md)\>

___

### getTotpDeviceCodeRaw

▸ **getTotpDeviceCodeRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`TotpDeviceCodeDto`](../interfaces/TotpDeviceCodeDto.md)\>\>

Get Time-Based One-Time Password for a device by its ID.
Get a TOTP device code by device ID

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetTotpDeviceCodeRequest`](../interfaces/GetTotpDeviceCodeRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`TotpDeviceCodeDto`](../interfaces/TotpDeviceCodeDto.md)\>\>

___

### getTotpDeviceRaw

▸ **getTotpDeviceRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`TotpDeviceDto`](../interfaces/TotpDeviceDto.md)\>\>

Get Time-Based One-Time Password (TOTP) device by its ID.
Get a TOTP device by ID

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetTotpDeviceRequest`](../interfaces/GetTotpDeviceRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`TotpDeviceDto`](../interfaces/TotpDeviceDto.md)\>\>

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
