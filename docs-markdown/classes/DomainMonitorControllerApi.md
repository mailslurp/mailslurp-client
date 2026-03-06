[MailSlurp JS](../README.md) / DomainMonitorControllerApi

# Class: DomainMonitorControllerApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`DomainMonitorControllerApi`**

## Table of contents

### Constructors

- [constructor](DomainMonitorControllerApi.md#constructor)

### Properties

- [configuration](DomainMonitorControllerApi.md#configuration)

### Methods

- [createDomainMonitor](DomainMonitorControllerApi.md#createdomainmonitor)
- [createDomainMonitorAlertSink](DomainMonitorControllerApi.md#createdomainmonitoralertsink)
- [createDomainMonitorAlertSinkRaw](DomainMonitorControllerApi.md#createdomainmonitoralertsinkraw)
- [createDomainMonitorRaw](DomainMonitorControllerApi.md#createdomainmonitorraw)
- [deleteDomainMonitor](DomainMonitorControllerApi.md#deletedomainmonitor)
- [deleteDomainMonitorAlertSink](DomainMonitorControllerApi.md#deletedomainmonitoralertsink)
- [deleteDomainMonitorAlertSinkRaw](DomainMonitorControllerApi.md#deletedomainmonitoralertsinkraw)
- [deleteDomainMonitorRaw](DomainMonitorControllerApi.md#deletedomainmonitorraw)
- [getDomainMonitor](DomainMonitorControllerApi.md#getdomainmonitor)
- [getDomainMonitorAlertSinks](DomainMonitorControllerApi.md#getdomainmonitoralertsinks)
- [getDomainMonitorAlertSinksRaw](DomainMonitorControllerApi.md#getdomainmonitoralertsinksraw)
- [getDomainMonitorInsights](DomainMonitorControllerApi.md#getdomainmonitorinsights)
- [getDomainMonitorInsightsRaw](DomainMonitorControllerApi.md#getdomainmonitorinsightsraw)
- [getDomainMonitorRaw](DomainMonitorControllerApi.md#getdomainmonitorraw)
- [getDomainMonitorRuns](DomainMonitorControllerApi.md#getdomainmonitorruns)
- [getDomainMonitorRunsRaw](DomainMonitorControllerApi.md#getdomainmonitorrunsraw)
- [getDomainMonitorSeries](DomainMonitorControllerApi.md#getdomainmonitorseries)
- [getDomainMonitorSeriesRaw](DomainMonitorControllerApi.md#getdomainmonitorseriesraw)
- [getDomainMonitors](DomainMonitorControllerApi.md#getdomainmonitors)
- [getDomainMonitorsRaw](DomainMonitorControllerApi.md#getdomainmonitorsraw)
- [request](DomainMonitorControllerApi.md#request)
- [runDomainMonitorNow](DomainMonitorControllerApi.md#rundomainmonitornow)
- [runDomainMonitorNowRaw](DomainMonitorControllerApi.md#rundomainmonitornowraw)
- [runDueDomainMonitors](DomainMonitorControllerApi.md#runduedomainmonitors)
- [runDueDomainMonitorsRaw](DomainMonitorControllerApi.md#runduedomainmonitorsraw)
- [updateDomainMonitor](DomainMonitorControllerApi.md#updatedomainmonitor)
- [updateDomainMonitorRaw](DomainMonitorControllerApi.md#updatedomainmonitorraw)
- [withMiddleware](DomainMonitorControllerApi.md#withmiddleware)
- [withPostMiddleware](DomainMonitorControllerApi.md#withpostmiddleware)
- [withPreMiddleware](DomainMonitorControllerApi.md#withpremiddleware)

## Constructors

### constructor

• **new DomainMonitorControllerApi**(`configuration?`)

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

### createDomainMonitor

▸ **createDomainMonitor**(`requestParameters`, `initOverrides?`): `Promise`<[`DomainMonitorDto`](../interfaces/DomainMonitorDto.md)\>

Create domain monitor

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateDomainMonitorRequest`](../interfaces/CreateDomainMonitorRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`DomainMonitorDto`](../interfaces/DomainMonitorDto.md)\>

___

### createDomainMonitorAlertSink

▸ **createDomainMonitorAlertSink**(`requestParameters`, `initOverrides?`): `Promise`<[`DomainMonitorAlertSinkDto`](../interfaces/DomainMonitorAlertSinkDto.md)\>

Create alert sink for monitor

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateDomainMonitorAlertSinkRequest`](../interfaces/CreateDomainMonitorAlertSinkRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`DomainMonitorAlertSinkDto`](../interfaces/DomainMonitorAlertSinkDto.md)\>

___

### createDomainMonitorAlertSinkRaw

▸ **createDomainMonitorAlertSinkRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DomainMonitorAlertSinkDto`](../interfaces/DomainMonitorAlertSinkDto.md)\>\>

Create alert sink for monitor

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateDomainMonitorAlertSinkRequest`](../interfaces/CreateDomainMonitorAlertSinkRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DomainMonitorAlertSinkDto`](../interfaces/DomainMonitorAlertSinkDto.md)\>\>

___

### createDomainMonitorRaw

▸ **createDomainMonitorRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DomainMonitorDto`](../interfaces/DomainMonitorDto.md)\>\>

Create domain monitor

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateDomainMonitorRequest`](../interfaces/CreateDomainMonitorRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DomainMonitorDto`](../interfaces/DomainMonitorDto.md)\>\>

___

### deleteDomainMonitor

▸ **deleteDomainMonitor**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

Delete domain monitor

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteDomainMonitorRequest`](../interfaces/DeleteDomainMonitorRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### deleteDomainMonitorAlertSink

▸ **deleteDomainMonitorAlertSink**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

Delete monitor alert sink

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteDomainMonitorAlertSinkRequest`](../interfaces/DeleteDomainMonitorAlertSinkRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### deleteDomainMonitorAlertSinkRaw

▸ **deleteDomainMonitorAlertSinkRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Delete monitor alert sink

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteDomainMonitorAlertSinkRequest`](../interfaces/DeleteDomainMonitorAlertSinkRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### deleteDomainMonitorRaw

▸ **deleteDomainMonitorRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Delete domain monitor

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteDomainMonitorRequest`](../interfaces/DeleteDomainMonitorRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### getDomainMonitor

▸ **getDomainMonitor**(`requestParameters`, `initOverrides?`): `Promise`<[`DomainMonitorDto`](../interfaces/DomainMonitorDto.md)\>

Get domain monitor

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDomainMonitorRequest`](../interfaces/GetDomainMonitorRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`DomainMonitorDto`](../interfaces/DomainMonitorDto.md)\>

___

### getDomainMonitorAlertSinks

▸ **getDomainMonitorAlertSinks**(`requestParameters`, `initOverrides?`): `Promise`<[`DomainMonitorAlertSinkDto`](../interfaces/DomainMonitorAlertSinkDto.md)[]\>

List alert sinks for monitor

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDomainMonitorAlertSinksRequest`](../interfaces/GetDomainMonitorAlertSinksRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`DomainMonitorAlertSinkDto`](../interfaces/DomainMonitorAlertSinkDto.md)[]\>

___

### getDomainMonitorAlertSinksRaw

▸ **getDomainMonitorAlertSinksRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DomainMonitorAlertSinkDto`](../interfaces/DomainMonitorAlertSinkDto.md)[]\>\>

List alert sinks for monitor

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDomainMonitorAlertSinksRequest`](../interfaces/GetDomainMonitorAlertSinksRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DomainMonitorAlertSinkDto`](../interfaces/DomainMonitorAlertSinkDto.md)[]\>\>

___

### getDomainMonitorInsights

▸ **getDomainMonitorInsights**(`requestParameters`, `initOverrides?`): `Promise`<[`DomainMonitorInsightsDto`](../interfaces/DomainMonitorInsightsDto.md)\>

Get monitor insights

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDomainMonitorInsightsRequest`](../interfaces/GetDomainMonitorInsightsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`DomainMonitorInsightsDto`](../interfaces/DomainMonitorInsightsDto.md)\>

___

### getDomainMonitorInsightsRaw

▸ **getDomainMonitorInsightsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DomainMonitorInsightsDto`](../interfaces/DomainMonitorInsightsDto.md)\>\>

Get monitor insights

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDomainMonitorInsightsRequest`](../interfaces/GetDomainMonitorInsightsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DomainMonitorInsightsDto`](../interfaces/DomainMonitorInsightsDto.md)\>\>

___

### getDomainMonitorRaw

▸ **getDomainMonitorRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DomainMonitorDto`](../interfaces/DomainMonitorDto.md)\>\>

Get domain monitor

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDomainMonitorRequest`](../interfaces/GetDomainMonitorRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DomainMonitorDto`](../interfaces/DomainMonitorDto.md)\>\>

___

### getDomainMonitorRuns

▸ **getDomainMonitorRuns**(`requestParameters`, `initOverrides?`): `Promise`<[`DomainMonitorRunDto`](../interfaces/DomainMonitorRunDto.md)[]\>

List monitor runs

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDomainMonitorRunsRequest`](../interfaces/GetDomainMonitorRunsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`DomainMonitorRunDto`](../interfaces/DomainMonitorRunDto.md)[]\>

___

### getDomainMonitorRunsRaw

▸ **getDomainMonitorRunsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DomainMonitorRunDto`](../interfaces/DomainMonitorRunDto.md)[]\>\>

List monitor runs

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDomainMonitorRunsRequest`](../interfaces/GetDomainMonitorRunsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DomainMonitorRunDto`](../interfaces/DomainMonitorRunDto.md)[]\>\>

___

### getDomainMonitorSeries

▸ **getDomainMonitorSeries**(`requestParameters`, `initOverrides?`): `Promise`<[`DomainMonitorSeriesDto`](../interfaces/DomainMonitorSeriesDto.md)\>

Get monitor trend series

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDomainMonitorSeriesRequest`](../interfaces/GetDomainMonitorSeriesRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`DomainMonitorSeriesDto`](../interfaces/DomainMonitorSeriesDto.md)\>

___

### getDomainMonitorSeriesRaw

▸ **getDomainMonitorSeriesRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DomainMonitorSeriesDto`](../interfaces/DomainMonitorSeriesDto.md)\>\>

Get monitor trend series

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDomainMonitorSeriesRequest`](../interfaces/GetDomainMonitorSeriesRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DomainMonitorSeriesDto`](../interfaces/DomainMonitorSeriesDto.md)\>\>

___

### getDomainMonitors

▸ **getDomainMonitors**(`initOverrides?`): `Promise`<[`DomainMonitorDto`](../interfaces/DomainMonitorDto.md)[]\>

List domain monitors

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`DomainMonitorDto`](../interfaces/DomainMonitorDto.md)[]\>

___

### getDomainMonitorsRaw

▸ **getDomainMonitorsRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DomainMonitorDto`](../interfaces/DomainMonitorDto.md)[]\>\>

List domain monitors

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DomainMonitorDto`](../interfaces/DomainMonitorDto.md)[]\>\>

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

### runDomainMonitorNow

▸ **runDomainMonitorNow**(`requestParameters`, `initOverrides?`): `Promise`<[`DomainMonitorRunNowResult`](../interfaces/DomainMonitorRunNowResult.md)\>

Run monitor now

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`RunDomainMonitorNowRequest`](../interfaces/RunDomainMonitorNowRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`DomainMonitorRunNowResult`](../interfaces/DomainMonitorRunNowResult.md)\>

___

### runDomainMonitorNowRaw

▸ **runDomainMonitorNowRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DomainMonitorRunNowResult`](../interfaces/DomainMonitorRunNowResult.md)\>\>

Run monitor now

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`RunDomainMonitorNowRequest`](../interfaces/RunDomainMonitorNowRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DomainMonitorRunNowResult`](../interfaces/DomainMonitorRunNowResult.md)\>\>

___

### runDueDomainMonitors

▸ **runDueDomainMonitors**(`requestParameters`, `initOverrides?`): `Promise`<[`DomainMonitorRunDueResult`](../interfaces/DomainMonitorRunDueResult.md)\>

Run due monitors for user

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`RunDueDomainMonitorsRequest`](../interfaces/RunDueDomainMonitorsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`DomainMonitorRunDueResult`](../interfaces/DomainMonitorRunDueResult.md)\>

___

### runDueDomainMonitorsRaw

▸ **runDueDomainMonitorsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DomainMonitorRunDueResult`](../interfaces/DomainMonitorRunDueResult.md)\>\>

Run due monitors for user

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`RunDueDomainMonitorsRequest`](../interfaces/RunDueDomainMonitorsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DomainMonitorRunDueResult`](../interfaces/DomainMonitorRunDueResult.md)\>\>

___

### updateDomainMonitor

▸ **updateDomainMonitor**(`requestParameters`, `initOverrides?`): `Promise`<[`DomainMonitorDto`](../interfaces/DomainMonitorDto.md)\>

Update domain monitor

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateDomainMonitorRequest`](../interfaces/UpdateDomainMonitorRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`DomainMonitorDto`](../interfaces/DomainMonitorDto.md)\>

___

### updateDomainMonitorRaw

▸ **updateDomainMonitorRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DomainMonitorDto`](../interfaces/DomainMonitorDto.md)\>\>

Update domain monitor

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateDomainMonitorRequest`](../interfaces/UpdateDomainMonitorRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DomainMonitorDto`](../interfaces/DomainMonitorDto.md)\>\>

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
