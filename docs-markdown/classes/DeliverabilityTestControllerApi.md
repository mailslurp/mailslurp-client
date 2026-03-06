[MailSlurp JS](../README.md) / DeliverabilityTestControllerApi

# Class: DeliverabilityTestControllerApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`DeliverabilityTestControllerApi`**

## Table of contents

### Constructors

- [constructor](DeliverabilityTestControllerApi.md#constructor)

### Properties

- [configuration](DeliverabilityTestControllerApi.md#configuration)

### Methods

- [cancelDeliverabilitySimulationJob](DeliverabilityTestControllerApi.md#canceldeliverabilitysimulationjob)
- [cancelDeliverabilitySimulationJobRaw](DeliverabilityTestControllerApi.md#canceldeliverabilitysimulationjobraw)
- [createDeliverabilitySimulationJob](DeliverabilityTestControllerApi.md#createdeliverabilitysimulationjob)
- [createDeliverabilitySimulationJobRaw](DeliverabilityTestControllerApi.md#createdeliverabilitysimulationjobraw)
- [createDeliverabilityTest](DeliverabilityTestControllerApi.md#createdeliverabilitytest)
- [createDeliverabilityTestRaw](DeliverabilityTestControllerApi.md#createdeliverabilitytestraw)
- [deleteDeliverabilityTest](DeliverabilityTestControllerApi.md#deletedeliverabilitytest)
- [deleteDeliverabilityTestRaw](DeliverabilityTestControllerApi.md#deletedeliverabilitytestraw)
- [duplicateDeliverabilityTest](DeliverabilityTestControllerApi.md#duplicatedeliverabilitytest)
- [duplicateDeliverabilityTestRaw](DeliverabilityTestControllerApi.md#duplicatedeliverabilitytestraw)
- [exportDeliverabilityTestReport](DeliverabilityTestControllerApi.md#exportdeliverabilitytestreport)
- [exportDeliverabilityTestReportRaw](DeliverabilityTestControllerApi.md#exportdeliverabilitytestreportraw)
- [exportDeliverabilityTestResults](DeliverabilityTestControllerApi.md#exportdeliverabilitytestresults)
- [exportDeliverabilityTestResultsRaw](DeliverabilityTestControllerApi.md#exportdeliverabilitytestresultsraw)
- [getDeliverabilityAnalyticsSeries](DeliverabilityTestControllerApi.md#getdeliverabilityanalyticsseries)
- [getDeliverabilityAnalyticsSeriesRaw](DeliverabilityTestControllerApi.md#getdeliverabilityanalyticsseriesraw)
- [getDeliverabilityFailureHotspots](DeliverabilityTestControllerApi.md#getdeliverabilityfailurehotspots)
- [getDeliverabilityFailureHotspotsRaw](DeliverabilityTestControllerApi.md#getdeliverabilityfailurehotspotsraw)
- [getDeliverabilitySimulationJob](DeliverabilityTestControllerApi.md#getdeliverabilitysimulationjob)
- [getDeliverabilitySimulationJobEvents](DeliverabilityTestControllerApi.md#getdeliverabilitysimulationjobevents)
- [getDeliverabilitySimulationJobEventsRaw](DeliverabilityTestControllerApi.md#getdeliverabilitysimulationjobeventsraw)
- [getDeliverabilitySimulationJobRaw](DeliverabilityTestControllerApi.md#getdeliverabilitysimulationjobraw)
- [getDeliverabilityTest](DeliverabilityTestControllerApi.md#getdeliverabilitytest)
- [getDeliverabilityTestRaw](DeliverabilityTestControllerApi.md#getdeliverabilitytestraw)
- [getDeliverabilityTestResults](DeliverabilityTestControllerApi.md#getdeliverabilitytestresults)
- [getDeliverabilityTestResultsRaw](DeliverabilityTestControllerApi.md#getdeliverabilitytestresultsraw)
- [getDeliverabilityTests](DeliverabilityTestControllerApi.md#getdeliverabilitytests)
- [getDeliverabilityTestsRaw](DeliverabilityTestControllerApi.md#getdeliverabilitytestsraw)
- [getLatestDeliverabilitySimulationJob](DeliverabilityTestControllerApi.md#getlatestdeliverabilitysimulationjob)
- [getLatestDeliverabilitySimulationJobRaw](DeliverabilityTestControllerApi.md#getlatestdeliverabilitysimulationjobraw)
- [pauseDeliverabilitySimulationJob](DeliverabilityTestControllerApi.md#pausedeliverabilitysimulationjob)
- [pauseDeliverabilitySimulationJobRaw](DeliverabilityTestControllerApi.md#pausedeliverabilitysimulationjobraw)
- [pauseDeliverabilityTest](DeliverabilityTestControllerApi.md#pausedeliverabilitytest)
- [pauseDeliverabilityTestRaw](DeliverabilityTestControllerApi.md#pausedeliverabilitytestraw)
- [pollDeliverabilityTestStatus](DeliverabilityTestControllerApi.md#polldeliverabilityteststatus)
- [pollDeliverabilityTestStatusRaw](DeliverabilityTestControllerApi.md#polldeliverabilityteststatusraw)
- [request](DeliverabilityTestControllerApi.md#request)
- [resumeDeliverabilitySimulationJob](DeliverabilityTestControllerApi.md#resumedeliverabilitysimulationjob)
- [resumeDeliverabilitySimulationJobRaw](DeliverabilityTestControllerApi.md#resumedeliverabilitysimulationjobraw)
- [startDeliverabilityTest](DeliverabilityTestControllerApi.md#startdeliverabilitytest)
- [startDeliverabilityTestRaw](DeliverabilityTestControllerApi.md#startdeliverabilitytestraw)
- [stopDeliverabilityTest](DeliverabilityTestControllerApi.md#stopdeliverabilitytest)
- [stopDeliverabilityTestRaw](DeliverabilityTestControllerApi.md#stopdeliverabilitytestraw)
- [updateDeliverabilityTest](DeliverabilityTestControllerApi.md#updatedeliverabilitytest)
- [updateDeliverabilityTestRaw](DeliverabilityTestControllerApi.md#updatedeliverabilitytestraw)
- [withMiddleware](DeliverabilityTestControllerApi.md#withmiddleware)
- [withPostMiddleware](DeliverabilityTestControllerApi.md#withpostmiddleware)
- [withPreMiddleware](DeliverabilityTestControllerApi.md#withpremiddleware)

## Constructors

### constructor

• **new DeliverabilityTestControllerApi**(`configuration?`)

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

### cancelDeliverabilitySimulationJob

▸ **cancelDeliverabilitySimulationJob**(`requestParameters`, `initOverrides?`): `Promise`<[`DeliverabilitySimulationJobDto`](../interfaces/DeliverabilitySimulationJobDto.md)\>

Cancel a running or paused simulation job.
Cancel deliverability simulation job

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CancelDeliverabilitySimulationJobRequest`](../interfaces/CancelDeliverabilitySimulationJobRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`DeliverabilitySimulationJobDto`](../interfaces/DeliverabilitySimulationJobDto.md)\>

___

### cancelDeliverabilitySimulationJobRaw

▸ **cancelDeliverabilitySimulationJobRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DeliverabilitySimulationJobDto`](../interfaces/DeliverabilitySimulationJobDto.md)\>\>

Cancel a running or paused simulation job.
Cancel deliverability simulation job

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CancelDeliverabilitySimulationJobRequest`](../interfaces/CancelDeliverabilitySimulationJobRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DeliverabilitySimulationJobDto`](../interfaces/DeliverabilitySimulationJobDto.md)\>\>

___

### createDeliverabilitySimulationJob

▸ **createDeliverabilitySimulationJob**(`requestParameters`, `initOverrides?`): `Promise`<[`DeliverabilitySimulationJobDto`](../interfaces/DeliverabilitySimulationJobDto.md)\>

Create and start a simulation job for a running deliverability test. Only one active simulation job is allowed per user.
Create deliverability simulation job

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateDeliverabilitySimulationJobRequest`](../interfaces/CreateDeliverabilitySimulationJobRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`DeliverabilitySimulationJobDto`](../interfaces/DeliverabilitySimulationJobDto.md)\>

___

### createDeliverabilitySimulationJobRaw

▸ **createDeliverabilitySimulationJobRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DeliverabilitySimulationJobDto`](../interfaces/DeliverabilitySimulationJobDto.md)\>\>

Create and start a simulation job for a running deliverability test. Only one active simulation job is allowed per user.
Create deliverability simulation job

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateDeliverabilitySimulationJobRequest`](../interfaces/CreateDeliverabilitySimulationJobRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DeliverabilitySimulationJobDto`](../interfaces/DeliverabilitySimulationJobDto.md)\>\>

___

### createDeliverabilityTest

▸ **createDeliverabilityTest**(`requestParameters`, `initOverrides?`): `Promise`<[`DeliverabilityTestDto`](../interfaces/DeliverabilityTestDto.md)\>

Create a deliverability test for inboxes or phone numbers using ALL, PATTERN, or EXPLICIT selector scope.
Create deliverability/load test

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateDeliverabilityTestRequest`](../interfaces/CreateDeliverabilityTestRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`DeliverabilityTestDto`](../interfaces/DeliverabilityTestDto.md)\>

___

### createDeliverabilityTestRaw

▸ **createDeliverabilityTestRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DeliverabilityTestDto`](../interfaces/DeliverabilityTestDto.md)\>\>

Create a deliverability test for inboxes or phone numbers using ALL, PATTERN, or EXPLICIT selector scope.
Create deliverability/load test

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateDeliverabilityTestRequest`](../interfaces/CreateDeliverabilityTestRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DeliverabilityTestDto`](../interfaces/DeliverabilityTestDto.md)\>\>

___

### deleteDeliverabilityTest

▸ **deleteDeliverabilityTest**(`requestParameters`, `initOverrides?`): `Promise`<[`DeleteResult`](../interfaces/DeleteResult.md)\>

Delete test and all persisted entity-level results.
Delete deliverability/load test

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteDeliverabilityTestRequest`](../interfaces/DeleteDeliverabilityTestRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`DeleteResult`](../interfaces/DeleteResult.md)\>

___

### deleteDeliverabilityTestRaw

▸ **deleteDeliverabilityTestRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DeleteResult`](../interfaces/DeleteResult.md)\>\>

Delete test and all persisted entity-level results.
Delete deliverability/load test

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteDeliverabilityTestRequest`](../interfaces/DeleteDeliverabilityTestRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DeleteResult`](../interfaces/DeleteResult.md)\>\>

___

### duplicateDeliverabilityTest

▸ **duplicateDeliverabilityTest**(`requestParameters`, `initOverrides?`): `Promise`<[`DeliverabilityTestDto`](../interfaces/DeliverabilityTestDto.md)\>

Create a fresh deliverability test using an existing test configuration, including selector scope, exclusions, and expectations.
Duplicate deliverability/load test

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DuplicateDeliverabilityTestRequest`](../interfaces/DuplicateDeliverabilityTestRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`DeliverabilityTestDto`](../interfaces/DeliverabilityTestDto.md)\>

___

### duplicateDeliverabilityTestRaw

▸ **duplicateDeliverabilityTestRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DeliverabilityTestDto`](../interfaces/DeliverabilityTestDto.md)\>\>

Create a fresh deliverability test using an existing test configuration, including selector scope, exclusions, and expectations.
Duplicate deliverability/load test

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DuplicateDeliverabilityTestRequest`](../interfaces/DuplicateDeliverabilityTestRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DeliverabilityTestDto`](../interfaces/DeliverabilityTestDto.md)\>\>

___

### exportDeliverabilityTestReport

▸ **exportDeliverabilityTestReport**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

Export a PDF report for a terminal deliverability test (COMPLETE, FAILED, or STOPPED), including configuration, summary outcomes, and detailed entity-level results.
Export deliverability/load test report as PDF

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ExportDeliverabilityTestReportRequest`](../interfaces/ExportDeliverabilityTestReportRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### exportDeliverabilityTestReportRaw

▸ **exportDeliverabilityTestReportRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Export a PDF report for a terminal deliverability test (COMPLETE, FAILED, or STOPPED), including configuration, summary outcomes, and detailed entity-level results.
Export deliverability/load test report as PDF

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ExportDeliverabilityTestReportRequest`](../interfaces/ExportDeliverabilityTestReportRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### exportDeliverabilityTestResults

▸ **exportDeliverabilityTestResults**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

Export per-entity deliverability results including expectation-level pass/fail counts. The latest status is evaluated with the same polling safeguards before export.
Export deliverability/load test entity results as CSV

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ExportDeliverabilityTestResultsRequest`](../interfaces/ExportDeliverabilityTestResultsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### exportDeliverabilityTestResultsRaw

▸ **exportDeliverabilityTestResultsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Export per-entity deliverability results including expectation-level pass/fail counts. The latest status is evaluated with the same polling safeguards before export.
Export deliverability/load test entity results as CSV

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ExportDeliverabilityTestResultsRequest`](../interfaces/ExportDeliverabilityTestResultsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### getDeliverabilityAnalyticsSeries

▸ **getDeliverabilityAnalyticsSeries**(`requestParameters`, `initOverrides?`): `Promise`<[`DeliverabilityAnalyticsSeriesDto`](../interfaces/DeliverabilityAnalyticsSeriesDto.md)\>

Compare deliverability runs over a time range with bucketed chart metrics and run-level rows for table views.
Get deliverability analytics time series

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDeliverabilityAnalyticsSeriesRequest`](../interfaces/GetDeliverabilityAnalyticsSeriesRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`DeliverabilityAnalyticsSeriesDto`](../interfaces/DeliverabilityAnalyticsSeriesDto.md)\>

___

### getDeliverabilityAnalyticsSeriesRaw

▸ **getDeliverabilityAnalyticsSeriesRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DeliverabilityAnalyticsSeriesDto`](../interfaces/DeliverabilityAnalyticsSeriesDto.md)\>\>

Compare deliverability runs over a time range with bucketed chart metrics and run-level rows for table views.
Get deliverability analytics time series

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDeliverabilityAnalyticsSeriesRequest`](../interfaces/GetDeliverabilityAnalyticsSeriesRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DeliverabilityAnalyticsSeriesDto`](../interfaces/DeliverabilityAnalyticsSeriesDto.md)\>\>

___

### getDeliverabilityFailureHotspots

▸ **getDeliverabilityFailureHotspots**(`requestParameters`, `initOverrides?`): `Promise`<[`DeliverabilityFailureHotspotsDto`](../interfaces/DeliverabilityFailureHotspotsDto.md)\>

Find commonly failing entities and phone country/variant dimensions across deliverability runs in a time range.
Get deliverability failure hotspots

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDeliverabilityFailureHotspotsRequest`](../interfaces/GetDeliverabilityFailureHotspotsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`DeliverabilityFailureHotspotsDto`](../interfaces/DeliverabilityFailureHotspotsDto.md)\>

___

### getDeliverabilityFailureHotspotsRaw

▸ **getDeliverabilityFailureHotspotsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DeliverabilityFailureHotspotsDto`](../interfaces/DeliverabilityFailureHotspotsDto.md)\>\>

Find commonly failing entities and phone country/variant dimensions across deliverability runs in a time range.
Get deliverability failure hotspots

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDeliverabilityFailureHotspotsRequest`](../interfaces/GetDeliverabilityFailureHotspotsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DeliverabilityFailureHotspotsDto`](../interfaces/DeliverabilityFailureHotspotsDto.md)\>\>

___

### getDeliverabilitySimulationJob

▸ **getDeliverabilitySimulationJob**(`requestParameters`, `initOverrides?`): `Promise`<[`DeliverabilitySimulationJobDto`](../interfaces/DeliverabilitySimulationJobDto.md)\>

Get simulation job status and progress counters.
Get deliverability simulation job

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDeliverabilitySimulationJobRequest`](../interfaces/GetDeliverabilitySimulationJobRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`DeliverabilitySimulationJobDto`](../interfaces/DeliverabilitySimulationJobDto.md)\>

___

### getDeliverabilitySimulationJobEvents

▸ **getDeliverabilitySimulationJobEvents**(`requestParameters`, `initOverrides?`): `Promise`<[`DeliverabilitySimulationJobEventPageDto`](../interfaces/DeliverabilitySimulationJobEventPageDto.md)\>

Get paged simulation events including send successes and failures.
Get deliverability simulation job events

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDeliverabilitySimulationJobEventsRequest`](../interfaces/GetDeliverabilitySimulationJobEventsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`DeliverabilitySimulationJobEventPageDto`](../interfaces/DeliverabilitySimulationJobEventPageDto.md)\>

___

### getDeliverabilitySimulationJobEventsRaw

▸ **getDeliverabilitySimulationJobEventsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DeliverabilitySimulationJobEventPageDto`](../interfaces/DeliverabilitySimulationJobEventPageDto.md)\>\>

Get paged simulation events including send successes and failures.
Get deliverability simulation job events

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDeliverabilitySimulationJobEventsRequest`](../interfaces/GetDeliverabilitySimulationJobEventsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DeliverabilitySimulationJobEventPageDto`](../interfaces/DeliverabilitySimulationJobEventPageDto.md)\>\>

___

### getDeliverabilitySimulationJobRaw

▸ **getDeliverabilitySimulationJobRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DeliverabilitySimulationJobDto`](../interfaces/DeliverabilitySimulationJobDto.md)\>\>

Get simulation job status and progress counters.
Get deliverability simulation job

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDeliverabilitySimulationJobRequest`](../interfaces/GetDeliverabilitySimulationJobRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DeliverabilitySimulationJobDto`](../interfaces/DeliverabilitySimulationJobDto.md)\>\>

___

### getDeliverabilityTest

▸ **getDeliverabilityTest**(`requestParameters`, `initOverrides?`): `Promise`<[`DeliverabilityTestDto`](../interfaces/DeliverabilityTestDto.md)\>

Get deliverability test configuration and latest progress counters.
Get deliverability/load test

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDeliverabilityTestRequest`](../interfaces/GetDeliverabilityTestRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`DeliverabilityTestDto`](../interfaces/DeliverabilityTestDto.md)\>

___

### getDeliverabilityTestRaw

▸ **getDeliverabilityTestRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DeliverabilityTestDto`](../interfaces/DeliverabilityTestDto.md)\>\>

Get deliverability test configuration and latest progress counters.
Get deliverability/load test

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDeliverabilityTestRequest`](../interfaces/GetDeliverabilityTestRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DeliverabilityTestDto`](../interfaces/DeliverabilityTestDto.md)\>\>

___

### getDeliverabilityTestResults

▸ **getDeliverabilityTestResults**(`requestParameters`, `initOverrides?`): `Promise`<[`DeliverabilityEntityResultPageDto`](../interfaces/DeliverabilityEntityResultPageDto.md)\>

Get paged per-entity expectation results with optional matched/unmatched filtering.
Get deliverability/load test entity results

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDeliverabilityTestResultsRequest`](../interfaces/GetDeliverabilityTestResultsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`DeliverabilityEntityResultPageDto`](../interfaces/DeliverabilityEntityResultPageDto.md)\>

___

### getDeliverabilityTestResultsRaw

▸ **getDeliverabilityTestResultsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DeliverabilityEntityResultPageDto`](../interfaces/DeliverabilityEntityResultPageDto.md)\>\>

Get paged per-entity expectation results with optional matched/unmatched filtering.
Get deliverability/load test entity results

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDeliverabilityTestResultsRequest`](../interfaces/GetDeliverabilityTestResultsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DeliverabilityEntityResultPageDto`](../interfaces/DeliverabilityEntityResultPageDto.md)\>\>

___

### getDeliverabilityTests

▸ **getDeliverabilityTests**(`requestParameters`, `initOverrides?`): `Promise`<[`DeliverabilityTestPageDto`](../interfaces/DeliverabilityTestPageDto.md)\>

List deliverability tests for the authenticated account.
List deliverability/load tests

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDeliverabilityTestsRequest`](../interfaces/GetDeliverabilityTestsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`DeliverabilityTestPageDto`](../interfaces/DeliverabilityTestPageDto.md)\>

___

### getDeliverabilityTestsRaw

▸ **getDeliverabilityTestsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DeliverabilityTestPageDto`](../interfaces/DeliverabilityTestPageDto.md)\>\>

List deliverability tests for the authenticated account.
List deliverability/load tests

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDeliverabilityTestsRequest`](../interfaces/GetDeliverabilityTestsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DeliverabilityTestPageDto`](../interfaces/DeliverabilityTestPageDto.md)\>\>

___

### getLatestDeliverabilitySimulationJob

▸ **getLatestDeliverabilitySimulationJob**(`requestParameters`, `initOverrides?`): `Promise`<[`DeliverabilitySimulationJobDto`](../interfaces/DeliverabilitySimulationJobDto.md)\>

Get the most recent simulation job for a deliverability test.
Get latest deliverability simulation job

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetLatestDeliverabilitySimulationJobRequest`](../interfaces/GetLatestDeliverabilitySimulationJobRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`DeliverabilitySimulationJobDto`](../interfaces/DeliverabilitySimulationJobDto.md)\>

___

### getLatestDeliverabilitySimulationJobRaw

▸ **getLatestDeliverabilitySimulationJobRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DeliverabilitySimulationJobDto`](../interfaces/DeliverabilitySimulationJobDto.md)\>\>

Get the most recent simulation job for a deliverability test.
Get latest deliverability simulation job

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetLatestDeliverabilitySimulationJobRequest`](../interfaces/GetLatestDeliverabilitySimulationJobRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DeliverabilitySimulationJobDto`](../interfaces/DeliverabilitySimulationJobDto.md)\>\>

___

### pauseDeliverabilitySimulationJob

▸ **pauseDeliverabilitySimulationJob**(`requestParameters`, `initOverrides?`): `Promise`<[`DeliverabilitySimulationJobDto`](../interfaces/DeliverabilitySimulationJobDto.md)\>

Pause a running simulation job.
Pause deliverability simulation job

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`PauseDeliverabilitySimulationJobRequest`](../interfaces/PauseDeliverabilitySimulationJobRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`DeliverabilitySimulationJobDto`](../interfaces/DeliverabilitySimulationJobDto.md)\>

___

### pauseDeliverabilitySimulationJobRaw

▸ **pauseDeliverabilitySimulationJobRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DeliverabilitySimulationJobDto`](../interfaces/DeliverabilitySimulationJobDto.md)\>\>

Pause a running simulation job.
Pause deliverability simulation job

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`PauseDeliverabilitySimulationJobRequest`](../interfaces/PauseDeliverabilitySimulationJobRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DeliverabilitySimulationJobDto`](../interfaces/DeliverabilitySimulationJobDto.md)\>\>

___

### pauseDeliverabilityTest

▸ **pauseDeliverabilityTest**(`requestParameters`, `initOverrides?`): `Promise`<[`DeliverabilityTestDto`](../interfaces/DeliverabilityTestDto.md)\>

Pause a RUNNING or SCHEDULED deliverability test.
Pause deliverability/load test

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`PauseDeliverabilityTestRequest`](../interfaces/PauseDeliverabilityTestRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`DeliverabilityTestDto`](../interfaces/DeliverabilityTestDto.md)\>

___

### pauseDeliverabilityTestRaw

▸ **pauseDeliverabilityTestRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DeliverabilityTestDto`](../interfaces/DeliverabilityTestDto.md)\>\>

Pause a RUNNING or SCHEDULED deliverability test.
Pause deliverability/load test

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`PauseDeliverabilityTestRequest`](../interfaces/PauseDeliverabilityTestRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DeliverabilityTestDto`](../interfaces/DeliverabilityTestDto.md)\>\>

___

### pollDeliverabilityTestStatus

▸ **pollDeliverabilityTestStatus**(`requestParameters`, `initOverrides?`): `Promise`<[`DeliverabilityPollStatusResultDto`](../interfaces/DeliverabilityPollStatusResultDto.md)\>

Poll test progress. Evaluation is throttled with a 5-second cache window to protect backing data stores.
Poll deliverability/load test status

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`PollDeliverabilityTestStatusRequest`](../interfaces/PollDeliverabilityTestStatusRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`DeliverabilityPollStatusResultDto`](../interfaces/DeliverabilityPollStatusResultDto.md)\>

___

### pollDeliverabilityTestStatusRaw

▸ **pollDeliverabilityTestStatusRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DeliverabilityPollStatusResultDto`](../interfaces/DeliverabilityPollStatusResultDto.md)\>\>

Poll test progress. Evaluation is throttled with a 5-second cache window to protect backing data stores.
Poll deliverability/load test status

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`PollDeliverabilityTestStatusRequest`](../interfaces/PollDeliverabilityTestStatusRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DeliverabilityPollStatusResultDto`](../interfaces/DeliverabilityPollStatusResultDto.md)\>\>

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

### resumeDeliverabilitySimulationJob

▸ **resumeDeliverabilitySimulationJob**(`requestParameters`, `initOverrides?`): `Promise`<[`DeliverabilitySimulationJobDto`](../interfaces/DeliverabilitySimulationJobDto.md)\>

Resume a paused simulation job.
Resume deliverability simulation job

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ResumeDeliverabilitySimulationJobRequest`](../interfaces/ResumeDeliverabilitySimulationJobRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`DeliverabilitySimulationJobDto`](../interfaces/DeliverabilitySimulationJobDto.md)\>

___

### resumeDeliverabilitySimulationJobRaw

▸ **resumeDeliverabilitySimulationJobRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DeliverabilitySimulationJobDto`](../interfaces/DeliverabilitySimulationJobDto.md)\>\>

Resume a paused simulation job.
Resume deliverability simulation job

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ResumeDeliverabilitySimulationJobRequest`](../interfaces/ResumeDeliverabilitySimulationJobRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DeliverabilitySimulationJobDto`](../interfaces/DeliverabilitySimulationJobDto.md)\>\>

___

### startDeliverabilityTest

▸ **startDeliverabilityTest**(`requestParameters`, `initOverrides?`): `Promise`<[`DeliverabilityTestDto`](../interfaces/DeliverabilityTestDto.md)\>

Start a CREATED test or resume a PAUSED/SCHEDULED test.
Start or resume deliverability/load test

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`StartDeliverabilityTestRequest`](../interfaces/StartDeliverabilityTestRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`DeliverabilityTestDto`](../interfaces/DeliverabilityTestDto.md)\>

___

### startDeliverabilityTestRaw

▸ **startDeliverabilityTestRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DeliverabilityTestDto`](../interfaces/DeliverabilityTestDto.md)\>\>

Start a CREATED test or resume a PAUSED/SCHEDULED test.
Start or resume deliverability/load test

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`StartDeliverabilityTestRequest`](../interfaces/StartDeliverabilityTestRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DeliverabilityTestDto`](../interfaces/DeliverabilityTestDto.md)\>\>

___

### stopDeliverabilityTest

▸ **stopDeliverabilityTest**(`requestParameters`, `initOverrides?`): `Promise`<[`DeliverabilityTestDto`](../interfaces/DeliverabilityTestDto.md)\>

Stop a deliverability test and mark it terminal.
Stop deliverability/load test

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`StopDeliverabilityTestRequest`](../interfaces/StopDeliverabilityTestRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`DeliverabilityTestDto`](../interfaces/DeliverabilityTestDto.md)\>

___

### stopDeliverabilityTestRaw

▸ **stopDeliverabilityTestRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DeliverabilityTestDto`](../interfaces/DeliverabilityTestDto.md)\>\>

Stop a deliverability test and mark it terminal.
Stop deliverability/load test

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`StopDeliverabilityTestRequest`](../interfaces/StopDeliverabilityTestRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DeliverabilityTestDto`](../interfaces/DeliverabilityTestDto.md)\>\>

___

### updateDeliverabilityTest

▸ **updateDeliverabilityTest**(`requestParameters`, `initOverrides?`): `Promise`<[`DeliverabilityTestDto`](../interfaces/DeliverabilityTestDto.md)\>

Update metadata, timeout, and expectations for a non-running non-terminal test.
Update deliverability/load test

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateDeliverabilityTestRequest`](../interfaces/UpdateDeliverabilityTestRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`DeliverabilityTestDto`](../interfaces/DeliverabilityTestDto.md)\>

___

### updateDeliverabilityTestRaw

▸ **updateDeliverabilityTestRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DeliverabilityTestDto`](../interfaces/DeliverabilityTestDto.md)\>\>

Update metadata, timeout, and expectations for a non-running non-terminal test.
Update deliverability/load test

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateDeliverabilityTestRequest`](../interfaces/UpdateDeliverabilityTestRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DeliverabilityTestDto`](../interfaces/DeliverabilityTestDto.md)\>\>

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
