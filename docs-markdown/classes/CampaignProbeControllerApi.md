[MailSlurp JS](../README.md) / CampaignProbeControllerApi

# Class: CampaignProbeControllerApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`CampaignProbeControllerApi`**

## Table of contents

### Constructors

- [constructor](CampaignProbeControllerApi.md#constructor)

### Properties

- [configuration](CampaignProbeControllerApi.md#configuration)

### Methods

- [createCampaignProbe](CampaignProbeControllerApi.md#createcampaignprobe)
- [createCampaignProbeRaw](CampaignProbeControllerApi.md#createcampaignproberaw)
- [deleteCampaignProbe](CampaignProbeControllerApi.md#deletecampaignprobe)
- [deleteCampaignProbeRaw](CampaignProbeControllerApi.md#deletecampaignproberaw)
- [getCampaignProbe](CampaignProbeControllerApi.md#getcampaignprobe)
- [getCampaignProbeInsights](CampaignProbeControllerApi.md#getcampaignprobeinsights)
- [getCampaignProbeInsightsRaw](CampaignProbeControllerApi.md#getcampaignprobeinsightsraw)
- [getCampaignProbeRaw](CampaignProbeControllerApi.md#getcampaignproberaw)
- [getCampaignProbeRuns](CampaignProbeControllerApi.md#getcampaignproberuns)
- [getCampaignProbeRunsRaw](CampaignProbeControllerApi.md#getcampaignproberunsraw)
- [getCampaignProbeSeries](CampaignProbeControllerApi.md#getcampaignprobeseries)
- [getCampaignProbeSeriesRaw](CampaignProbeControllerApi.md#getcampaignprobeseriesraw)
- [getCampaignProbes](CampaignProbeControllerApi.md#getcampaignprobes)
- [getCampaignProbesRaw](CampaignProbeControllerApi.md#getcampaignprobesraw)
- [request](CampaignProbeControllerApi.md#request)
- [runCampaignProbeNow](CampaignProbeControllerApi.md#runcampaignprobenow)
- [runCampaignProbeNowRaw](CampaignProbeControllerApi.md#runcampaignprobenowraw)
- [runDueCampaignProbes](CampaignProbeControllerApi.md#runduecampaignprobes)
- [runDueCampaignProbesRaw](CampaignProbeControllerApi.md#runduecampaignprobesraw)
- [updateCampaignProbe](CampaignProbeControllerApi.md#updatecampaignprobe)
- [updateCampaignProbeRaw](CampaignProbeControllerApi.md#updatecampaignproberaw)
- [withMiddleware](CampaignProbeControllerApi.md#withmiddleware)
- [withPostMiddleware](CampaignProbeControllerApi.md#withpostmiddleware)
- [withPreMiddleware](CampaignProbeControllerApi.md#withpremiddleware)

## Constructors

### constructor

• **new CampaignProbeControllerApi**(`configuration?`)

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

### createCampaignProbe

▸ **createCampaignProbe**(`requestParameters`, `initOverrides?`): `Promise`<[`CampaignProbeDto`](../interfaces/CampaignProbeDto.md)\>

Create campaign probe

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateCampaignProbeRequest`](../interfaces/CreateCampaignProbeRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`CampaignProbeDto`](../interfaces/CampaignProbeDto.md)\>

___

### createCampaignProbeRaw

▸ **createCampaignProbeRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CampaignProbeDto`](../interfaces/CampaignProbeDto.md)\>\>

Create campaign probe

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateCampaignProbeRequest`](../interfaces/CreateCampaignProbeRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CampaignProbeDto`](../interfaces/CampaignProbeDto.md)\>\>

___

### deleteCampaignProbe

▸ **deleteCampaignProbe**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

Delete campaign probe

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteCampaignProbeRequest`](../interfaces/DeleteCampaignProbeRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### deleteCampaignProbeRaw

▸ **deleteCampaignProbeRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Delete campaign probe

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteCampaignProbeRequest`](../interfaces/DeleteCampaignProbeRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### getCampaignProbe

▸ **getCampaignProbe**(`requestParameters`, `initOverrides?`): `Promise`<[`CampaignProbeDto`](../interfaces/CampaignProbeDto.md)\>

Get campaign probe

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetCampaignProbeRequest`](../interfaces/GetCampaignProbeRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`CampaignProbeDto`](../interfaces/CampaignProbeDto.md)\>

___

### getCampaignProbeInsights

▸ **getCampaignProbeInsights**(`requestParameters`, `initOverrides?`): `Promise`<[`CampaignProbeInsightsDto`](../interfaces/CampaignProbeInsightsDto.md)\>

Get campaign probe insights

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetCampaignProbeInsightsRequest`](../interfaces/GetCampaignProbeInsightsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`CampaignProbeInsightsDto`](../interfaces/CampaignProbeInsightsDto.md)\>

___

### getCampaignProbeInsightsRaw

▸ **getCampaignProbeInsightsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CampaignProbeInsightsDto`](../interfaces/CampaignProbeInsightsDto.md)\>\>

Get campaign probe insights

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetCampaignProbeInsightsRequest`](../interfaces/GetCampaignProbeInsightsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CampaignProbeInsightsDto`](../interfaces/CampaignProbeInsightsDto.md)\>\>

___

### getCampaignProbeRaw

▸ **getCampaignProbeRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CampaignProbeDto`](../interfaces/CampaignProbeDto.md)\>\>

Get campaign probe

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetCampaignProbeRequest`](../interfaces/GetCampaignProbeRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CampaignProbeDto`](../interfaces/CampaignProbeDto.md)\>\>

___

### getCampaignProbeRuns

▸ **getCampaignProbeRuns**(`requestParameters`, `initOverrides?`): `Promise`<[`CampaignProbeRunDto`](../interfaces/CampaignProbeRunDto.md)[]\>

List campaign probe runs

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetCampaignProbeRunsRequest`](../interfaces/GetCampaignProbeRunsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`CampaignProbeRunDto`](../interfaces/CampaignProbeRunDto.md)[]\>

___

### getCampaignProbeRunsRaw

▸ **getCampaignProbeRunsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CampaignProbeRunDto`](../interfaces/CampaignProbeRunDto.md)[]\>\>

List campaign probe runs

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetCampaignProbeRunsRequest`](../interfaces/GetCampaignProbeRunsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CampaignProbeRunDto`](../interfaces/CampaignProbeRunDto.md)[]\>\>

___

### getCampaignProbeSeries

▸ **getCampaignProbeSeries**(`requestParameters`, `initOverrides?`): `Promise`<[`CampaignProbeSeriesDto`](../interfaces/CampaignProbeSeriesDto.md)\>

Get campaign probe trend series

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetCampaignProbeSeriesRequest`](../interfaces/GetCampaignProbeSeriesRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`CampaignProbeSeriesDto`](../interfaces/CampaignProbeSeriesDto.md)\>

___

### getCampaignProbeSeriesRaw

▸ **getCampaignProbeSeriesRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CampaignProbeSeriesDto`](../interfaces/CampaignProbeSeriesDto.md)\>\>

Get campaign probe trend series

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetCampaignProbeSeriesRequest`](../interfaces/GetCampaignProbeSeriesRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CampaignProbeSeriesDto`](../interfaces/CampaignProbeSeriesDto.md)\>\>

___

### getCampaignProbes

▸ **getCampaignProbes**(`initOverrides?`): `Promise`<[`CampaignProbeDto`](../interfaces/CampaignProbeDto.md)[]\>

List campaign probes

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`CampaignProbeDto`](../interfaces/CampaignProbeDto.md)[]\>

___

### getCampaignProbesRaw

▸ **getCampaignProbesRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CampaignProbeDto`](../interfaces/CampaignProbeDto.md)[]\>\>

List campaign probes

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CampaignProbeDto`](../interfaces/CampaignProbeDto.md)[]\>\>

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

### runCampaignProbeNow

▸ **runCampaignProbeNow**(`requestParameters`, `initOverrides?`): `Promise`<[`CampaignProbeRunNowResult`](../interfaces/CampaignProbeRunNowResult.md)\>

Run campaign probe now

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`RunCampaignProbeNowRequest`](../interfaces/RunCampaignProbeNowRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`CampaignProbeRunNowResult`](../interfaces/CampaignProbeRunNowResult.md)\>

___

### runCampaignProbeNowRaw

▸ **runCampaignProbeNowRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CampaignProbeRunNowResult`](../interfaces/CampaignProbeRunNowResult.md)\>\>

Run campaign probe now

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`RunCampaignProbeNowRequest`](../interfaces/RunCampaignProbeNowRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CampaignProbeRunNowResult`](../interfaces/CampaignProbeRunNowResult.md)\>\>

___

### runDueCampaignProbes

▸ **runDueCampaignProbes**(`requestParameters`, `initOverrides?`): `Promise`<[`CampaignProbeRunDueResult`](../interfaces/CampaignProbeRunDueResult.md)\>

Run due campaign probes for user

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`RunDueCampaignProbesRequest`](../interfaces/RunDueCampaignProbesRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`CampaignProbeRunDueResult`](../interfaces/CampaignProbeRunDueResult.md)\>

___

### runDueCampaignProbesRaw

▸ **runDueCampaignProbesRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CampaignProbeRunDueResult`](../interfaces/CampaignProbeRunDueResult.md)\>\>

Run due campaign probes for user

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`RunDueCampaignProbesRequest`](../interfaces/RunDueCampaignProbesRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CampaignProbeRunDueResult`](../interfaces/CampaignProbeRunDueResult.md)\>\>

___

### updateCampaignProbe

▸ **updateCampaignProbe**(`requestParameters`, `initOverrides?`): `Promise`<[`CampaignProbeDto`](../interfaces/CampaignProbeDto.md)\>

Update campaign probe

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateCampaignProbeRequest`](../interfaces/UpdateCampaignProbeRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`CampaignProbeDto`](../interfaces/CampaignProbeDto.md)\>

___

### updateCampaignProbeRaw

▸ **updateCampaignProbeRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CampaignProbeDto`](../interfaces/CampaignProbeDto.md)\>\>

Update campaign probe

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateCampaignProbeRequest`](../interfaces/UpdateCampaignProbeRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CampaignProbeDto`](../interfaces/CampaignProbeDto.md)\>\>

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
