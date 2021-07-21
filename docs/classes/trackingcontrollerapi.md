**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / TrackingControllerApi

# Class: TrackingControllerApi

TrackingControllerApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **TrackingControllerApi**

## Index

### Constructors

* [constructor](trackingcontrollerapi.md#constructor)

### Properties

* [basePath](trackingcontrollerapi.md#basepath)
* [configuration](trackingcontrollerapi.md#configuration)
* [fetch](trackingcontrollerapi.md#fetch)

### Methods

* [createTrackingPixel](trackingcontrollerapi.md#createtrackingpixel)
* [getAllTrackingPixels](trackingcontrollerapi.md#getalltrackingpixels)
* [getTrackingPixel](trackingcontrollerapi.md#gettrackingpixel)

## Constructors

### constructor

\+ **new TrackingControllerApi**(`configuration?`: [Configuration](configuration.md), `basePath?`: string, `fetch?`: [FetchAPI](../interfaces/fetchapi.md)): [TrackingControllerApi](trackingcontrollerapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/3871a9e/src/generated/api.ts#L57)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE\_PATH |
`fetch` | [FetchAPI](../interfaces/fetchapi.md) | portableFetch |

**Returns:** [TrackingControllerApi](trackingcontrollerapi.md)

## Properties

### basePath

• `Protected` **basePath**: string

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#basepath)*

*Defined in [src/generated/api.ts:61](https://github.com/mailslurp/mailslurp-client/blob/3871a9e/src/generated/api.ts#L61)*

___

### configuration

• `Protected` **configuration**: [Configuration](configuration.md)

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#configuration)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/3871a9e/src/generated/api.ts#L57)*

___

### fetch

• `Protected` **fetch**: [FetchAPI](../interfaces/fetchapi.md)

*Inherited from [BaseAPI](baseapi.md).[fetch](baseapi.md#fetch)*

*Defined in [src/generated/api.ts:62](https://github.com/mailslurp/mailslurp-client/blob/3871a9e/src/generated/api.ts#L62)*

## Methods

### createTrackingPixel

▸ **createTrackingPixel**(`createTrackingPixelOptions`: [CreateTrackingPixelOptions](../interfaces/createtrackingpixeloptions.md), `options?`: any): Promise\<[TrackingPixelDto](../interfaces/trackingpixeldto.md)>

*Defined in [src/generated/api.ts:26569](https://github.com/mailslurp/mailslurp-client/blob/3871a9e/src/generated/api.ts#L26569)*

Create a tracking pixel. A tracking pixel is an image that can be embedded in an email. When the email is viewed and the image is seen MailSlurp will mark the pixel as seen. Use tracking pixels to monitor email open events. You can receive open notifications via webhook or by fetching the pixel.

**`summary`** Create tracking pixel

**`throws`** {RequiredError}

**`memberof`** TrackingControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`createTrackingPixelOptions` | [CreateTrackingPixelOptions](../interfaces/createtrackingpixeloptions.md) | createTrackingPixelOptions |
`options?` | any | - |

**Returns:** Promise\<[TrackingPixelDto](../interfaces/trackingpixeldto.md)>

___

### getAllTrackingPixels

▸ **getAllTrackingPixels**(`page?`: number, `searchFilter?`: string, `size?`: number, `sort?`: \"ASC\" \| \"DESC\", `options?`: any): Promise\<[PageTrackingPixelProjection](../interfaces/pagetrackingpixelprojection.md)>

*Defined in [src/generated/api.ts:26590](https://github.com/mailslurp/mailslurp-client/blob/3871a9e/src/generated/api.ts#L26590)*

List tracking pixels in paginated form

**`summary`** Get tracking pixels

**`throws`** {RequiredError}

**`memberof`** TrackingControllerApi

#### Parameters:

Name | Type |
------ | ------ |
`page?` | number |
`searchFilter?` | string |
`size?` | number |
`sort?` | \"ASC\" \| \"DESC\" |
`options?` | any |

**Returns:** Promise\<[PageTrackingPixelProjection](../interfaces/pagetrackingpixelprojection.md)>

___

### getTrackingPixel

▸ **getTrackingPixel**(`id`: string, `options?`: any): Promise\<[TrackingPixelDto](../interfaces/trackingpixeldto.md)>

*Defined in [src/generated/api.ts:26614](https://github.com/mailslurp/mailslurp-client/blob/3871a9e/src/generated/api.ts#L26614)*

**`summary`** Get pixel

**`throws`** {RequiredError}

**`memberof`** TrackingControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | string | id |
`options?` | any | - |

**Returns:** Promise\<[TrackingPixelDto](../interfaces/trackingpixeldto.md)>
