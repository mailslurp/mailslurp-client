[MailSlurp JS](../README.md) / TrackingControllerApi

# Class: TrackingControllerApi

TrackingControllerApi - object-oriented interface

**`export`**

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`TrackingControllerApi`**

## Table of contents

### Constructors

- [constructor](TrackingControllerApi.md#constructor)

### Properties

- [basePath](TrackingControllerApi.md#basepath)
- [configuration](TrackingControllerApi.md#configuration)
- [fetch](TrackingControllerApi.md#fetch)

### Methods

- [createTrackingPixel](TrackingControllerApi.md#createtrackingpixel)
- [getAllTrackingPixels](TrackingControllerApi.md#getalltrackingpixels)
- [getTrackingPixel](TrackingControllerApi.md#gettrackingpixel)

## Constructors

### constructor

• **new TrackingControllerApi**(`configuration?`, `basePath?`, `fetch?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) |
| `basePath` | `string` |
| `fetch` | [`FetchAPI`](../interfaces/FetchAPI.md) |

#### Inherited from

[BaseAPI](BaseAPI.md).[constructor](BaseAPI.md#constructor)

#### Defined in

[src/generated/api.ts:59](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L59)

## Properties

### basePath

• `Protected` **basePath**: `string`

#### Inherited from

[BaseAPI](BaseAPI.md).[basePath](BaseAPI.md#basepath)

___

### configuration

• `Protected` **configuration**: [`Configuration`](Configuration.md)

#### Inherited from

[BaseAPI](BaseAPI.md).[configuration](BaseAPI.md#configuration)

#### Defined in

[src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L57)

___

### fetch

• `Protected` **fetch**: [`FetchAPI`](../interfaces/FetchAPI.md)

#### Inherited from

[BaseAPI](BaseAPI.md).[fetch](BaseAPI.md#fetch)

## Methods

### createTrackingPixel

▸ **createTrackingPixel**(`createTrackingPixelOptions`, `options?`): `Promise`<[`TrackingPixelDto`](../interfaces/TrackingPixelDto.md)\>

Create a tracking pixel. A tracking pixel is an image that can be embedded in an email. When the email is viewed and the image is seen MailSlurp will mark the pixel as seen. Use tracking pixels to monitor email open events. You can receive open notifications via webhook or by fetching the pixel.

**`summary`** Create tracking pixel

**`throws`** {RequiredError}

**`memberof`** TrackingControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `createTrackingPixelOptions` | [`CreateTrackingPixelOptions`](../interfaces/CreateTrackingPixelOptions.md) | createTrackingPixelOptions |
| `options?` | `any` | - |

#### Returns

`Promise`<[`TrackingPixelDto`](../interfaces/TrackingPixelDto.md)\>

#### Defined in

[src/generated/api.ts:27620](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L27620)

___

### getAllTrackingPixels

▸ **getAllTrackingPixels**(`page?`, `searchFilter?`, `size?`, `sort?`, `options?`): `Promise`<[`PageTrackingPixelProjection`](../interfaces/PageTrackingPixelProjection.md)\>

List tracking pixels in paginated form

**`summary`** Get tracking pixels

**`throws`** {RequiredError}

**`memberof`** TrackingControllerApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `page?` | `number` |
| `searchFilter?` | `string` |
| `size?` | `number` |
| `sort?` | ``"ASC"`` \| ``"DESC"`` |
| `options?` | `any` |

#### Returns

`Promise`<[`PageTrackingPixelProjection`](../interfaces/PageTrackingPixelProjection.md)\>

#### Defined in

[src/generated/api.ts:27641](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L27641)

___

### getTrackingPixel

▸ **getTrackingPixel**(`id`, `options?`): `Promise`<[`TrackingPixelDto`](../interfaces/TrackingPixelDto.md)\>

**`summary`** Get pixel

**`throws`** {RequiredError}

**`memberof`** TrackingControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | id |
| `options?` | `any` | - |

#### Returns

`Promise`<[`TrackingPixelDto`](../interfaces/TrackingPixelDto.md)\>

#### Defined in

[src/generated/api.ts:27665](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L27665)
