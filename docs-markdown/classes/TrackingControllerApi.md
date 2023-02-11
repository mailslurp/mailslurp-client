[MailSlurp JS](../README.md) / TrackingControllerApi

# Class: TrackingControllerApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`TrackingControllerApi`**

## Table of contents

### Constructors

- [constructor](TrackingControllerApi.md#constructor)

### Properties

- [configuration](TrackingControllerApi.md#configuration)

### Methods

- [createTrackingPixel](TrackingControllerApi.md#createtrackingpixel)
- [createTrackingPixelRaw](TrackingControllerApi.md#createtrackingpixelraw)
- [getAllTrackingPixels](TrackingControllerApi.md#getalltrackingpixels)
- [getAllTrackingPixelsRaw](TrackingControllerApi.md#getalltrackingpixelsraw)
- [getTrackingPixel](TrackingControllerApi.md#gettrackingpixel)
- [getTrackingPixelRaw](TrackingControllerApi.md#gettrackingpixelraw)
- [request](TrackingControllerApi.md#request)
- [withMiddleware](TrackingControllerApi.md#withmiddleware)
- [withPostMiddleware](TrackingControllerApi.md#withpostmiddleware)
- [withPreMiddleware](TrackingControllerApi.md#withpremiddleware)

## Constructors

### constructor

• **new TrackingControllerApi**(`configuration?`)

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

### createTrackingPixel

▸ **createTrackingPixel**(`requestParameters`, `initOverrides?`): `Promise`<[`TrackingPixelDto`](../interfaces/TrackingPixelDto.md)\>

Create a tracking pixel. A tracking pixel is an image that can be embedded in an email. When the email is viewed and the image is seen MailSlurp will mark the pixel as seen. Use tracking pixels to monitor email open events. You can receive open notifications via webhook or by fetching the pixel.
Create tracking pixel

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateTrackingPixelRequest`](../interfaces/CreateTrackingPixelRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`TrackingPixelDto`](../interfaces/TrackingPixelDto.md)\>

___

### createTrackingPixelRaw

▸ **createTrackingPixelRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`TrackingPixelDto`](../interfaces/TrackingPixelDto.md)\>\>

Create a tracking pixel. A tracking pixel is an image that can be embedded in an email. When the email is viewed and the image is seen MailSlurp will mark the pixel as seen. Use tracking pixels to monitor email open events. You can receive open notifications via webhook or by fetching the pixel.
Create tracking pixel

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateTrackingPixelRequest`](../interfaces/CreateTrackingPixelRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`TrackingPixelDto`](../interfaces/TrackingPixelDto.md)\>\>

___

### getAllTrackingPixels

▸ **getAllTrackingPixels**(`requestParameters`, `initOverrides?`): `Promise`<[`PageTrackingPixelProjection`](../interfaces/PageTrackingPixelProjection.md)\>

List tracking pixels in paginated form
Get tracking pixels

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAllTrackingPixelsRequest`](../interfaces/GetAllTrackingPixelsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageTrackingPixelProjection`](../interfaces/PageTrackingPixelProjection.md)\>

___

### getAllTrackingPixelsRaw

▸ **getAllTrackingPixelsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageTrackingPixelProjection`](../interfaces/PageTrackingPixelProjection.md)\>\>

List tracking pixels in paginated form
Get tracking pixels

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAllTrackingPixelsRequest`](../interfaces/GetAllTrackingPixelsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageTrackingPixelProjection`](../interfaces/PageTrackingPixelProjection.md)\>\>

___

### getTrackingPixel

▸ **getTrackingPixel**(`requestParameters`, `initOverrides?`): `Promise`<[`TrackingPixelDto`](../interfaces/TrackingPixelDto.md)\>

Get pixel

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetTrackingPixelRequest`](../interfaces/GetTrackingPixelRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`TrackingPixelDto`](../interfaces/TrackingPixelDto.md)\>

___

### getTrackingPixelRaw

▸ **getTrackingPixelRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`TrackingPixelDto`](../interfaces/TrackingPixelDto.md)\>\>

Get pixel

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetTrackingPixelRequest`](../interfaces/GetTrackingPixelRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`TrackingPixelDto`](../interfaces/TrackingPixelDto.md)\>\>

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
