[MailSlurp JS](../README.md) / DevicePreviewsControllerApi

# Class: DevicePreviewsControllerApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`DevicePreviewsControllerApi`**

## Table of contents

### Constructors

- [constructor](DevicePreviewsControllerApi.md#constructor)

### Properties

- [configuration](DevicePreviewsControllerApi.md#configuration)

### Methods

- [cancelDevicePreviewRun](DevicePreviewsControllerApi.md#canceldevicepreviewrun)
- [cancelDevicePreviewRunRaw](DevicePreviewsControllerApi.md#canceldevicepreviewrunraw)
- [createDevicePreviewFeedback](DevicePreviewsControllerApi.md#createdevicepreviewfeedback)
- [createDevicePreviewFeedbackRaw](DevicePreviewsControllerApi.md#createdevicepreviewfeedbackraw)
- [createDevicePreviewRun](DevicePreviewsControllerApi.md#createdevicepreviewrun)
- [createDevicePreviewRunRaw](DevicePreviewsControllerApi.md#createdevicepreviewrunraw)
- [deleteDevicePreviewRun](DevicePreviewsControllerApi.md#deletedevicepreviewrun)
- [deleteDevicePreviewRunRaw](DevicePreviewsControllerApi.md#deletedevicepreviewrunraw)
- [ensureDevicePreviewRun](DevicePreviewsControllerApi.md#ensuredevicepreviewrun)
- [ensureDevicePreviewRunRaw](DevicePreviewsControllerApi.md#ensuredevicepreviewrunraw)
- [getDevicePreviewFeedback](DevicePreviewsControllerApi.md#getdevicepreviewfeedback)
- [getDevicePreviewFeedbackItems](DevicePreviewsControllerApi.md#getdevicepreviewfeedbackitems)
- [getDevicePreviewFeedbackItemsRaw](DevicePreviewsControllerApi.md#getdevicepreviewfeedbackitemsraw)
- [getDevicePreviewFeedbackRaw](DevicePreviewsControllerApi.md#getdevicepreviewfeedbackraw)
- [getDevicePreviewRun](DevicePreviewsControllerApi.md#getdevicepreviewrun)
- [getDevicePreviewRunProviderProgress](DevicePreviewsControllerApi.md#getdevicepreviewrunproviderprogress)
- [getDevicePreviewRunProviderProgressRaw](DevicePreviewsControllerApi.md#getdevicepreviewrunproviderprogressraw)
- [getDevicePreviewRunRaw](DevicePreviewsControllerApi.md#getdevicepreviewrunraw)
- [getDevicePreviewRunResults](DevicePreviewsControllerApi.md#getdevicepreviewrunresults)
- [getDevicePreviewRunResultsRaw](DevicePreviewsControllerApi.md#getdevicepreviewrunresultsraw)
- [getDevicePreviewRunScreenshot](DevicePreviewsControllerApi.md#getdevicepreviewrunscreenshot)
- [getDevicePreviewRunScreenshotRaw](DevicePreviewsControllerApi.md#getdevicepreviewrunscreenshotraw)
- [getDevicePreviewRuns](DevicePreviewsControllerApi.md#getdevicepreviewruns)
- [getDevicePreviewRunsForAccount](DevicePreviewsControllerApi.md#getdevicepreviewrunsforaccount)
- [getDevicePreviewRunsForAccountRaw](DevicePreviewsControllerApi.md#getdevicepreviewrunsforaccountraw)
- [getDevicePreviewRunsOffsetPaginated](DevicePreviewsControllerApi.md#getdevicepreviewrunsoffsetpaginated)
- [getDevicePreviewRunsOffsetPaginatedRaw](DevicePreviewsControllerApi.md#getdevicepreviewrunsoffsetpaginatedraw)
- [getDevicePreviewRunsRaw](DevicePreviewsControllerApi.md#getdevicepreviewrunsraw)
- [request](DevicePreviewsControllerApi.md#request)
- [updateDevicePreviewFeedback](DevicePreviewsControllerApi.md#updatedevicepreviewfeedback)
- [updateDevicePreviewFeedbackRaw](DevicePreviewsControllerApi.md#updatedevicepreviewfeedbackraw)
- [withMiddleware](DevicePreviewsControllerApi.md#withmiddleware)
- [withPostMiddleware](DevicePreviewsControllerApi.md#withpostmiddleware)
- [withPreMiddleware](DevicePreviewsControllerApi.md#withpremiddleware)

## Constructors

### constructor

• **new DevicePreviewsControllerApi**(`configuration?`)

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

### cancelDevicePreviewRun

▸ **cancelDevicePreviewRun**(`requestParameters`, `initOverrides?`): `Promise`<[`CancelDevicePreviewRunResult`](../interfaces/CancelDevicePreviewRunResult.md)\>

Cancel a running device preview run

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CancelDevicePreviewRunRequest`](../interfaces/CancelDevicePreviewRunRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`CancelDevicePreviewRunResult`](../interfaces/CancelDevicePreviewRunResult.md)\>

___

### cancelDevicePreviewRunRaw

▸ **cancelDevicePreviewRunRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CancelDevicePreviewRunResult`](../interfaces/CancelDevicePreviewRunResult.md)\>\>

Cancel a running device preview run

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CancelDevicePreviewRunRequest`](../interfaces/CancelDevicePreviewRunRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CancelDevicePreviewRunResult`](../interfaces/CancelDevicePreviewRunResult.md)\>\>

___

### createDevicePreviewFeedback

▸ **createDevicePreviewFeedback**(`requestParameters`, `initOverrides?`): `Promise`<[`DevicePreviewFeedbackDto`](../interfaces/DevicePreviewFeedbackDto.md)\>

Create device preview feedback

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateDevicePreviewFeedbackRequest`](../interfaces/CreateDevicePreviewFeedbackRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`DevicePreviewFeedbackDto`](../interfaces/DevicePreviewFeedbackDto.md)\>

___

### createDevicePreviewFeedbackRaw

▸ **createDevicePreviewFeedbackRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DevicePreviewFeedbackDto`](../interfaces/DevicePreviewFeedbackDto.md)\>\>

Create device preview feedback

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateDevicePreviewFeedbackRequest`](../interfaces/CreateDevicePreviewFeedbackRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DevicePreviewFeedbackDto`](../interfaces/DevicePreviewFeedbackDto.md)\>\>

___

### createDevicePreviewRun

▸ **createDevicePreviewRun**(`requestParameters`, `initOverrides?`): `Promise`<[`CreateDevicePreviewRunResult`](../interfaces/CreateDevicePreviewRunResult.md)\>

Create a new device preview run for an email

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateDevicePreviewRunRequest`](../interfaces/CreateDevicePreviewRunRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`CreateDevicePreviewRunResult`](../interfaces/CreateDevicePreviewRunResult.md)\>

___

### createDevicePreviewRunRaw

▸ **createDevicePreviewRunRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CreateDevicePreviewRunResult`](../interfaces/CreateDevicePreviewRunResult.md)\>\>

Create a new device preview run for an email

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateDevicePreviewRunRequest`](../interfaces/CreateDevicePreviewRunRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CreateDevicePreviewRunResult`](../interfaces/CreateDevicePreviewRunResult.md)\>\>

___

### deleteDevicePreviewRun

▸ **deleteDevicePreviewRun**(`requestParameters`, `initOverrides?`): `Promise`<[`DeleteDevicePreviewRunResult`](../interfaces/DeleteDevicePreviewRunResult.md)\>

Delete local device preview run data

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteDevicePreviewRunRequest`](../interfaces/DeleteDevicePreviewRunRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`DeleteDevicePreviewRunResult`](../interfaces/DeleteDevicePreviewRunResult.md)\>

___

### deleteDevicePreviewRunRaw

▸ **deleteDevicePreviewRunRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DeleteDevicePreviewRunResult`](../interfaces/DeleteDevicePreviewRunResult.md)\>\>

Delete local device preview run data

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteDevicePreviewRunRequest`](../interfaces/DeleteDevicePreviewRunRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DeleteDevicePreviewRunResult`](../interfaces/DeleteDevicePreviewRunResult.md)\>\>

___

### ensureDevicePreviewRun

▸ **ensureDevicePreviewRun**(`requestParameters`, `initOverrides?`): `Promise`<[`CreateDevicePreviewRunResult`](../interfaces/CreateDevicePreviewRunResult.md)\>

Return active run for email or create one when none exists

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`EnsureDevicePreviewRunRequest`](../interfaces/EnsureDevicePreviewRunRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`CreateDevicePreviewRunResult`](../interfaces/CreateDevicePreviewRunResult.md)\>

___

### ensureDevicePreviewRunRaw

▸ **ensureDevicePreviewRunRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CreateDevicePreviewRunResult`](../interfaces/CreateDevicePreviewRunResult.md)\>\>

Return active run for email or create one when none exists

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`EnsureDevicePreviewRunRequest`](../interfaces/EnsureDevicePreviewRunRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CreateDevicePreviewRunResult`](../interfaces/CreateDevicePreviewRunResult.md)\>\>

___

### getDevicePreviewFeedback

▸ **getDevicePreviewFeedback**(`requestParameters`, `initOverrides?`): `Promise`<[`DevicePreviewFeedbackDto`](../interfaces/DevicePreviewFeedbackDto.md)\>

Get a single device preview feedback item

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDevicePreviewFeedbackRequest`](../interfaces/GetDevicePreviewFeedbackRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`DevicePreviewFeedbackDto`](../interfaces/DevicePreviewFeedbackDto.md)\>

___

### getDevicePreviewFeedbackItems

▸ **getDevicePreviewFeedbackItems**(`requestParameters`, `initOverrides?`): `Promise`<[`DevicePreviewFeedbackListDto`](../interfaces/DevicePreviewFeedbackListDto.md)\>

List device preview feedback

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDevicePreviewFeedbackItemsRequest`](../interfaces/GetDevicePreviewFeedbackItemsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`DevicePreviewFeedbackListDto`](../interfaces/DevicePreviewFeedbackListDto.md)\>

___

### getDevicePreviewFeedbackItemsRaw

▸ **getDevicePreviewFeedbackItemsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DevicePreviewFeedbackListDto`](../interfaces/DevicePreviewFeedbackListDto.md)\>\>

List device preview feedback

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDevicePreviewFeedbackItemsRequest`](../interfaces/GetDevicePreviewFeedbackItemsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DevicePreviewFeedbackListDto`](../interfaces/DevicePreviewFeedbackListDto.md)\>\>

___

### getDevicePreviewFeedbackRaw

▸ **getDevicePreviewFeedbackRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DevicePreviewFeedbackDto`](../interfaces/DevicePreviewFeedbackDto.md)\>\>

Get a single device preview feedback item

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDevicePreviewFeedbackRequest`](../interfaces/GetDevicePreviewFeedbackRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DevicePreviewFeedbackDto`](../interfaces/DevicePreviewFeedbackDto.md)\>\>

___

### getDevicePreviewRun

▸ **getDevicePreviewRun**(`requestParameters`, `initOverrides?`): `Promise`<[`DevicePreviewRunDto`](../interfaces/DevicePreviewRunDto.md)\>

Get device preview run status

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDevicePreviewRunRequest`](../interfaces/GetDevicePreviewRunRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`DevicePreviewRunDto`](../interfaces/DevicePreviewRunDto.md)\>

___

### getDevicePreviewRunProviderProgress

▸ **getDevicePreviewRunProviderProgress**(`requestParameters`, `initOverrides?`): `Promise`<[`DevicePreviewProviderProgressDto`](../interfaces/DevicePreviewProviderProgressDto.md)\>

Get provider-level progress for a device preview run

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDevicePreviewRunProviderProgressRequest`](../interfaces/GetDevicePreviewRunProviderProgressRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`DevicePreviewProviderProgressDto`](../interfaces/DevicePreviewProviderProgressDto.md)\>

___

### getDevicePreviewRunProviderProgressRaw

▸ **getDevicePreviewRunProviderProgressRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DevicePreviewProviderProgressDto`](../interfaces/DevicePreviewProviderProgressDto.md)\>\>

Get provider-level progress for a device preview run

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDevicePreviewRunProviderProgressRequest`](../interfaces/GetDevicePreviewRunProviderProgressRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DevicePreviewProviderProgressDto`](../interfaces/DevicePreviewProviderProgressDto.md)\>\>

___

### getDevicePreviewRunRaw

▸ **getDevicePreviewRunRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DevicePreviewRunDto`](../interfaces/DevicePreviewRunDto.md)\>\>

Get device preview run status

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDevicePreviewRunRequest`](../interfaces/GetDevicePreviewRunRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DevicePreviewRunDto`](../interfaces/DevicePreviewRunDto.md)\>\>

___

### getDevicePreviewRunResults

▸ **getDevicePreviewRunResults**(`requestParameters`, `initOverrides?`): `Promise`<[`DevicePreviewRunResultsDto`](../interfaces/DevicePreviewRunResultsDto.md)\>

Get device preview run results

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDevicePreviewRunResultsRequest`](../interfaces/GetDevicePreviewRunResultsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`DevicePreviewRunResultsDto`](../interfaces/DevicePreviewRunResultsDto.md)\>

___

### getDevicePreviewRunResultsRaw

▸ **getDevicePreviewRunResultsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DevicePreviewRunResultsDto`](../interfaces/DevicePreviewRunResultsDto.md)\>\>

Get device preview run results

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDevicePreviewRunResultsRequest`](../interfaces/GetDevicePreviewRunResultsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DevicePreviewRunResultsDto`](../interfaces/DevicePreviewRunResultsDto.md)\>\>

___

### getDevicePreviewRunScreenshot

▸ **getDevicePreviewRunScreenshot**(`requestParameters`, `initOverrides?`): `Promise`<`string`\>

Get a seeded device preview screenshot image

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDevicePreviewRunScreenshotRequest`](../interfaces/GetDevicePreviewRunScreenshotRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`string`\>

___

### getDevicePreviewRunScreenshotRaw

▸ **getDevicePreviewRunScreenshotRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`string`\>\>

Get a seeded device preview screenshot image

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDevicePreviewRunScreenshotRequest`](../interfaces/GetDevicePreviewRunScreenshotRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`string`\>\>

___

### getDevicePreviewRuns

▸ **getDevicePreviewRuns**(`requestParameters`, `initOverrides?`): `Promise`<[`DevicePreviewRunDto`](../interfaces/DevicePreviewRunDto.md)[]\>

List previous device preview runs for an email

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDevicePreviewRunsRequest`](../interfaces/GetDevicePreviewRunsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`DevicePreviewRunDto`](../interfaces/DevicePreviewRunDto.md)[]\>

___

### getDevicePreviewRunsForAccount

▸ **getDevicePreviewRunsForAccount**(`requestParameters`, `initOverrides?`): `Promise`<[`DevicePreviewRunDto`](../interfaces/DevicePreviewRunDto.md)[]\>

List previous device preview runs for account

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDevicePreviewRunsForAccountRequest`](../interfaces/GetDevicePreviewRunsForAccountRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`DevicePreviewRunDto`](../interfaces/DevicePreviewRunDto.md)[]\>

___

### getDevicePreviewRunsForAccountRaw

▸ **getDevicePreviewRunsForAccountRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DevicePreviewRunDto`](../interfaces/DevicePreviewRunDto.md)[]\>\>

List previous device preview runs for account

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDevicePreviewRunsForAccountRequest`](../interfaces/GetDevicePreviewRunsForAccountRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DevicePreviewRunDto`](../interfaces/DevicePreviewRunDto.md)[]\>\>

___

### getDevicePreviewRunsOffsetPaginated

▸ **getDevicePreviewRunsOffsetPaginated**(`requestParameters`, `initOverrides?`): `Promise`<[`PageDevicePreviewRunProjection`](../interfaces/PageDevicePreviewRunProjection.md)\>

List previous device preview runs for an email in paginated form

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDevicePreviewRunsOffsetPaginatedRequest`](../interfaces/GetDevicePreviewRunsOffsetPaginatedRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageDevicePreviewRunProjection`](../interfaces/PageDevicePreviewRunProjection.md)\>

___

### getDevicePreviewRunsOffsetPaginatedRaw

▸ **getDevicePreviewRunsOffsetPaginatedRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageDevicePreviewRunProjection`](../interfaces/PageDevicePreviewRunProjection.md)\>\>

List previous device preview runs for an email in paginated form

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDevicePreviewRunsOffsetPaginatedRequest`](../interfaces/GetDevicePreviewRunsOffsetPaginatedRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageDevicePreviewRunProjection`](../interfaces/PageDevicePreviewRunProjection.md)\>\>

___

### getDevicePreviewRunsRaw

▸ **getDevicePreviewRunsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DevicePreviewRunDto`](../interfaces/DevicePreviewRunDto.md)[]\>\>

List previous device preview runs for an email

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDevicePreviewRunsRequest`](../interfaces/GetDevicePreviewRunsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DevicePreviewRunDto`](../interfaces/DevicePreviewRunDto.md)[]\>\>

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

### updateDevicePreviewFeedback

▸ **updateDevicePreviewFeedback**(`requestParameters`, `initOverrides?`): `Promise`<[`DevicePreviewFeedbackDto`](../interfaces/DevicePreviewFeedbackDto.md)\>

Update device preview feedback

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateDevicePreviewFeedbackRequest`](../interfaces/UpdateDevicePreviewFeedbackRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`DevicePreviewFeedbackDto`](../interfaces/DevicePreviewFeedbackDto.md)\>

___

### updateDevicePreviewFeedbackRaw

▸ **updateDevicePreviewFeedbackRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DevicePreviewFeedbackDto`](../interfaces/DevicePreviewFeedbackDto.md)\>\>

Update device preview feedback

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateDevicePreviewFeedbackRequest`](../interfaces/UpdateDevicePreviewFeedbackRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DevicePreviewFeedbackDto`](../interfaces/DevicePreviewFeedbackDto.md)\>\>

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
