[MailSlurp JS](../README.md) / ApiInboxPlacementTestControllerApi

# Class: ApiInboxPlacementTestControllerApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`ApiInboxPlacementTestControllerApi`**

## Table of contents

### Constructors

- [constructor](ApiInboxPlacementTestControllerApi.md#constructor)

### Properties

- [configuration](ApiInboxPlacementTestControllerApi.md#configuration)

### Methods

- [createInboxPlacementTest](ApiInboxPlacementTestControllerApi.md#createinboxplacementtest)
- [createInboxPlacementTestRaw](ApiInboxPlacementTestControllerApi.md#createinboxplacementtestraw)
- [exportInboxPlacementTestResults](ApiInboxPlacementTestControllerApi.md#exportinboxplacementtestresults)
- [exportInboxPlacementTestResultsRaw](ApiInboxPlacementTestControllerApi.md#exportinboxplacementtestresultsraw)
- [getInboxPlacementAnalyticsBreakdown](ApiInboxPlacementTestControllerApi.md#getinboxplacementanalyticsbreakdown)
- [getInboxPlacementAnalyticsBreakdownRaw](ApiInboxPlacementTestControllerApi.md#getinboxplacementanalyticsbreakdownraw)
- [getInboxPlacementAnalyticsSeries](ApiInboxPlacementTestControllerApi.md#getinboxplacementanalyticsseries)
- [getInboxPlacementAnalyticsSeriesRaw](ApiInboxPlacementTestControllerApi.md#getinboxplacementanalyticsseriesraw)
- [getInboxPlacementPublicShare](ApiInboxPlacementTestControllerApi.md#getinboxplacementpublicshare)
- [getInboxPlacementPublicShareAnalysis](ApiInboxPlacementTestControllerApi.md#getinboxplacementpublicshareanalysis)
- [getInboxPlacementPublicShareAnalysisRaw](ApiInboxPlacementTestControllerApi.md#getinboxplacementpublicshareanalysisraw)
- [getInboxPlacementPublicShareRaw](ApiInboxPlacementTestControllerApi.md#getinboxplacementpublicshareraw)
- [getInboxPlacementTest](ApiInboxPlacementTestControllerApi.md#getinboxplacementtest)
- [getInboxPlacementTestAnalysis](ApiInboxPlacementTestControllerApi.md#getinboxplacementtestanalysis)
- [getInboxPlacementTestAnalysisRaw](ApiInboxPlacementTestControllerApi.md#getinboxplacementtestanalysisraw)
- [getInboxPlacementTestRaw](ApiInboxPlacementTestControllerApi.md#getinboxplacementtestraw)
- [getInboxPlacementTestResults](ApiInboxPlacementTestControllerApi.md#getinboxplacementtestresults)
- [getInboxPlacementTestResultsRaw](ApiInboxPlacementTestControllerApi.md#getinboxplacementtestresultsraw)
- [getInboxPlacementTests](ApiInboxPlacementTestControllerApi.md#getinboxplacementtests)
- [getInboxPlacementTestsRaw](ApiInboxPlacementTestControllerApi.md#getinboxplacementtestsraw)
- [request](ApiInboxPlacementTestControllerApi.md#request)
- [withMiddleware](ApiInboxPlacementTestControllerApi.md#withmiddleware)
- [withPostMiddleware](ApiInboxPlacementTestControllerApi.md#withpostmiddleware)
- [withPreMiddleware](ApiInboxPlacementTestControllerApi.md#withpremiddleware)

## Constructors

### constructor

• **new ApiInboxPlacementTestControllerApi**(`configuration?`)

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

### createInboxPlacementTest

▸ **createInboxPlacementTest**(`requestParameters`, `initOverrides?`): `Promise`<[`InboxPlacementTestRunDto`](../interfaces/InboxPlacementTestRunDto.md)\>

Create a new direct-send inbox placement test

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateInboxPlacementTestRequest`](../interfaces/CreateInboxPlacementTestRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`InboxPlacementTestRunDto`](../interfaces/InboxPlacementTestRunDto.md)\>

___

### createInboxPlacementTestRaw

▸ **createInboxPlacementTestRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxPlacementTestRunDto`](../interfaces/InboxPlacementTestRunDto.md)\>\>

Create a new direct-send inbox placement test

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateInboxPlacementTestRequest`](../interfaces/CreateInboxPlacementTestRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxPlacementTestRunDto`](../interfaces/InboxPlacementTestRunDto.md)\>\>

___

### exportInboxPlacementTestResults

▸ **exportInboxPlacementTestResults**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

Export one row per placement target, including run-level delivery totals, 0-10 placement scores, and target placement outcome fields.
Export inbox placement test results as CSV

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ExportInboxPlacementTestResultsRequest`](../interfaces/ExportInboxPlacementTestResultsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### exportInboxPlacementTestResultsRaw

▸ **exportInboxPlacementTestResultsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Export one row per placement target, including run-level delivery totals, 0-10 placement scores, and target placement outcome fields.
Export inbox placement test results as CSV

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ExportInboxPlacementTestResultsRequest`](../interfaces/ExportInboxPlacementTestResultsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### getInboxPlacementAnalyticsBreakdown

▸ **getInboxPlacementAnalyticsBreakdown**(`requestParameters`, `initOverrides?`): `Promise`<[`InboxPlacementAnalyticsBreakdownDto`](../interfaces/InboxPlacementAnalyticsBreakdownDto.md)\>

Return aggregated folder, provider, sender-domain, and from-email breakdowns for inbox placement runs in a time range.
Get inbox placement analytics breakdowns

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetInboxPlacementAnalyticsBreakdownRequest`](../interfaces/GetInboxPlacementAnalyticsBreakdownRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`InboxPlacementAnalyticsBreakdownDto`](../interfaces/InboxPlacementAnalyticsBreakdownDto.md)\>

___

### getInboxPlacementAnalyticsBreakdownRaw

▸ **getInboxPlacementAnalyticsBreakdownRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxPlacementAnalyticsBreakdownDto`](../interfaces/InboxPlacementAnalyticsBreakdownDto.md)\>\>

Return aggregated folder, provider, sender-domain, and from-email breakdowns for inbox placement runs in a time range.
Get inbox placement analytics breakdowns

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetInboxPlacementAnalyticsBreakdownRequest`](../interfaces/GetInboxPlacementAnalyticsBreakdownRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxPlacementAnalyticsBreakdownDto`](../interfaces/InboxPlacementAnalyticsBreakdownDto.md)\>\>

___

### getInboxPlacementAnalyticsSeries

▸ **getInboxPlacementAnalyticsSeries**(`requestParameters`, `initOverrides?`): `Promise`<[`InboxPlacementAnalyticsSeriesDto`](../interfaces/InboxPlacementAnalyticsSeriesDto.md)\>

Return chart-ready inbox placement metrics over time, with optional sender/domain filters and grouped comparisons for sender domains or from-email addresses.
Get inbox placement analytics time series

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetInboxPlacementAnalyticsSeriesRequest`](../interfaces/GetInboxPlacementAnalyticsSeriesRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`InboxPlacementAnalyticsSeriesDto`](../interfaces/InboxPlacementAnalyticsSeriesDto.md)\>

___

### getInboxPlacementAnalyticsSeriesRaw

▸ **getInboxPlacementAnalyticsSeriesRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxPlacementAnalyticsSeriesDto`](../interfaces/InboxPlacementAnalyticsSeriesDto.md)\>\>

Return chart-ready inbox placement metrics over time, with optional sender/domain filters and grouped comparisons for sender domains or from-email addresses.
Get inbox placement analytics time series

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetInboxPlacementAnalyticsSeriesRequest`](../interfaces/GetInboxPlacementAnalyticsSeriesRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxPlacementAnalyticsSeriesDto`](../interfaces/InboxPlacementAnalyticsSeriesDto.md)\>\>

___

### getInboxPlacementPublicShare

▸ **getInboxPlacementPublicShare**(`requestParameters`, `initOverrides?`): `Promise`<[`InboxPlacementPublicShareDto`](../interfaces/InboxPlacementPublicShareDto.md)\>

Get a public inbox placement share

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetInboxPlacementPublicShareRequest`](../interfaces/GetInboxPlacementPublicShareRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`InboxPlacementPublicShareDto`](../interfaces/InboxPlacementPublicShareDto.md)\>

___

### getInboxPlacementPublicShareAnalysis

▸ **getInboxPlacementPublicShareAnalysis**(`requestParameters`, `initOverrides?`): `Promise`<[`InboxPlacementAnalysisBundleDto`](../interfaces/InboxPlacementAnalysisBundleDto.md)\>

Get public inbox placement share analysis

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetInboxPlacementPublicShareAnalysisRequest`](../interfaces/GetInboxPlacementPublicShareAnalysisRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`InboxPlacementAnalysisBundleDto`](../interfaces/InboxPlacementAnalysisBundleDto.md)\>

___

### getInboxPlacementPublicShareAnalysisRaw

▸ **getInboxPlacementPublicShareAnalysisRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxPlacementAnalysisBundleDto`](../interfaces/InboxPlacementAnalysisBundleDto.md)\>\>

Get public inbox placement share analysis

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetInboxPlacementPublicShareAnalysisRequest`](../interfaces/GetInboxPlacementPublicShareAnalysisRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxPlacementAnalysisBundleDto`](../interfaces/InboxPlacementAnalysisBundleDto.md)\>\>

___

### getInboxPlacementPublicShareRaw

▸ **getInboxPlacementPublicShareRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxPlacementPublicShareDto`](../interfaces/InboxPlacementPublicShareDto.md)\>\>

Get a public inbox placement share

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetInboxPlacementPublicShareRequest`](../interfaces/GetInboxPlacementPublicShareRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxPlacementPublicShareDto`](../interfaces/InboxPlacementPublicShareDto.md)\>\>

___

### getInboxPlacementTest

▸ **getInboxPlacementTest**(`requestParameters`, `initOverrides?`): `Promise`<[`InboxPlacementTestRunDto`](../interfaces/InboxPlacementTestRunDto.md)\>

Get inbox placement test run

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetInboxPlacementTestRequest`](../interfaces/GetInboxPlacementTestRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`InboxPlacementTestRunDto`](../interfaces/InboxPlacementTestRunDto.md)\>

___

### getInboxPlacementTestAnalysis

▸ **getInboxPlacementTestAnalysis**(`requestParameters`, `initOverrides?`): `Promise`<[`InboxPlacementAnalysisBundleDto`](../interfaces/InboxPlacementAnalysisBundleDto.md)\>

Get inbox placement run analysis

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetInboxPlacementTestAnalysisRequest`](../interfaces/GetInboxPlacementTestAnalysisRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`InboxPlacementAnalysisBundleDto`](../interfaces/InboxPlacementAnalysisBundleDto.md)\>

___

### getInboxPlacementTestAnalysisRaw

▸ **getInboxPlacementTestAnalysisRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxPlacementAnalysisBundleDto`](../interfaces/InboxPlacementAnalysisBundleDto.md)\>\>

Get inbox placement run analysis

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetInboxPlacementTestAnalysisRequest`](../interfaces/GetInboxPlacementTestAnalysisRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxPlacementAnalysisBundleDto`](../interfaces/InboxPlacementAnalysisBundleDto.md)\>\>

___

### getInboxPlacementTestRaw

▸ **getInboxPlacementTestRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxPlacementTestRunDto`](../interfaces/InboxPlacementTestRunDto.md)\>\>

Get inbox placement test run

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetInboxPlacementTestRequest`](../interfaces/GetInboxPlacementTestRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxPlacementTestRunDto`](../interfaces/InboxPlacementTestRunDto.md)\>\>

___

### getInboxPlacementTestResults

▸ **getInboxPlacementTestResults**(`requestParameters`, `initOverrides?`): `Promise`<[`InboxPlacementTestResultsDto`](../interfaces/InboxPlacementTestResultsDto.md)\>

Get inbox placement test results

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetInboxPlacementTestResultsRequest`](../interfaces/GetInboxPlacementTestResultsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`InboxPlacementTestResultsDto`](../interfaces/InboxPlacementTestResultsDto.md)\>

___

### getInboxPlacementTestResultsRaw

▸ **getInboxPlacementTestResultsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxPlacementTestResultsDto`](../interfaces/InboxPlacementTestResultsDto.md)\>\>

Get inbox placement test results

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetInboxPlacementTestResultsRequest`](../interfaces/GetInboxPlacementTestResultsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxPlacementTestResultsDto`](../interfaces/InboxPlacementTestResultsDto.md)\>\>

___

### getInboxPlacementTests

▸ **getInboxPlacementTests**(`requestParameters`, `initOverrides?`): `Promise`<[`InboxPlacementTestRunDto`](../interfaces/InboxPlacementTestRunDto.md)[]\>

List inbox placement test runs

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetInboxPlacementTestsRequest`](../interfaces/GetInboxPlacementTestsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`InboxPlacementTestRunDto`](../interfaces/InboxPlacementTestRunDto.md)[]\>

___

### getInboxPlacementTestsRaw

▸ **getInboxPlacementTestsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxPlacementTestRunDto`](../interfaces/InboxPlacementTestRunDto.md)[]\>\>

List inbox placement test runs

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetInboxPlacementTestsRequest`](../interfaces/GetInboxPlacementTestsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxPlacementTestRunDto`](../interfaces/InboxPlacementTestRunDto.md)[]\>\>

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
