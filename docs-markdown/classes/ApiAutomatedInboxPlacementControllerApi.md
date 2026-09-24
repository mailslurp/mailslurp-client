[MailSlurp JS](../README.md) / ApiAutomatedInboxPlacementControllerApi

# Class: ApiAutomatedInboxPlacementControllerApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`ApiAutomatedInboxPlacementControllerApi`**

## Table of contents

### Constructors

- [constructor](ApiAutomatedInboxPlacementControllerApi.md#constructor)

### Properties

- [configuration](ApiAutomatedInboxPlacementControllerApi.md#configuration)

### Methods

- [createAutomatedInboxPlacementConnection](ApiAutomatedInboxPlacementControllerApi.md#createautomatedinboxplacementconnection)
- [createAutomatedInboxPlacementConnectionRaw](ApiAutomatedInboxPlacementControllerApi.md#createautomatedinboxplacementconnectionraw)
- [createAutomatedInboxPlacementSchedule](ApiAutomatedInboxPlacementControllerApi.md#createautomatedinboxplacementschedule)
- [createAutomatedInboxPlacementScheduleRaw](ApiAutomatedInboxPlacementControllerApi.md#createautomatedinboxplacementscheduleraw)
- [deleteAutomatedInboxPlacementConnection](ApiAutomatedInboxPlacementControllerApi.md#deleteautomatedinboxplacementconnection)
- [deleteAutomatedInboxPlacementConnectionRaw](ApiAutomatedInboxPlacementControllerApi.md#deleteautomatedinboxplacementconnectionraw)
- [deleteAutomatedInboxPlacementSchedule](ApiAutomatedInboxPlacementControllerApi.md#deleteautomatedinboxplacementschedule)
- [deleteAutomatedInboxPlacementScheduleRaw](ApiAutomatedInboxPlacementControllerApi.md#deleteautomatedinboxplacementscheduleraw)
- [getAutomatedInboxPlacementConnection](ApiAutomatedInboxPlacementControllerApi.md#getautomatedinboxplacementconnection)
- [getAutomatedInboxPlacementConnectionRaw](ApiAutomatedInboxPlacementControllerApi.md#getautomatedinboxplacementconnectionraw)
- [getAutomatedInboxPlacementConnections](ApiAutomatedInboxPlacementControllerApi.md#getautomatedinboxplacementconnections)
- [getAutomatedInboxPlacementConnectionsRaw](ApiAutomatedInboxPlacementControllerApi.md#getautomatedinboxplacementconnectionsraw)
- [getAutomatedInboxPlacementExecutionEvents](ApiAutomatedInboxPlacementControllerApi.md#getautomatedinboxplacementexecutionevents)
- [getAutomatedInboxPlacementExecutionEventsRaw](ApiAutomatedInboxPlacementControllerApi.md#getautomatedinboxplacementexecutioneventsraw)
- [getAutomatedInboxPlacementExecutions](ApiAutomatedInboxPlacementControllerApi.md#getautomatedinboxplacementexecutions)
- [getAutomatedInboxPlacementExecutionsRaw](ApiAutomatedInboxPlacementControllerApi.md#getautomatedinboxplacementexecutionsraw)
- [getAutomatedInboxPlacementProviders](ApiAutomatedInboxPlacementControllerApi.md#getautomatedinboxplacementproviders)
- [getAutomatedInboxPlacementProvidersRaw](ApiAutomatedInboxPlacementControllerApi.md#getautomatedinboxplacementprovidersraw)
- [getAutomatedInboxPlacementSchedule](ApiAutomatedInboxPlacementControllerApi.md#getautomatedinboxplacementschedule)
- [getAutomatedInboxPlacementScheduleAnalyticsSeries](ApiAutomatedInboxPlacementControllerApi.md#getautomatedinboxplacementscheduleanalyticsseries)
- [getAutomatedInboxPlacementScheduleAnalyticsSeriesRaw](ApiAutomatedInboxPlacementControllerApi.md#getautomatedinboxplacementscheduleanalyticsseriesraw)
- [getAutomatedInboxPlacementScheduleRaw](ApiAutomatedInboxPlacementControllerApi.md#getautomatedinboxplacementscheduleraw)
- [getAutomatedInboxPlacementSchedules](ApiAutomatedInboxPlacementControllerApi.md#getautomatedinboxplacementschedules)
- [getAutomatedInboxPlacementSchedulesRaw](ApiAutomatedInboxPlacementControllerApi.md#getautomatedinboxplacementschedulesraw)
- [request](ApiAutomatedInboxPlacementControllerApi.md#request)
- [rotateAutomatedInboxPlacementConnectionCredentials](ApiAutomatedInboxPlacementControllerApi.md#rotateautomatedinboxplacementconnectioncredentials)
- [rotateAutomatedInboxPlacementConnectionCredentialsRaw](ApiAutomatedInboxPlacementControllerApi.md#rotateautomatedinboxplacementconnectioncredentialsraw)
- [runAutomatedInboxPlacementSchedule](ApiAutomatedInboxPlacementControllerApi.md#runautomatedinboxplacementschedule)
- [runAutomatedInboxPlacementScheduleRaw](ApiAutomatedInboxPlacementControllerApi.md#runautomatedinboxplacementscheduleraw)
- [updateAutomatedInboxPlacementConnection](ApiAutomatedInboxPlacementControllerApi.md#updateautomatedinboxplacementconnection)
- [updateAutomatedInboxPlacementConnectionRaw](ApiAutomatedInboxPlacementControllerApi.md#updateautomatedinboxplacementconnectionraw)
- [updateAutomatedInboxPlacementSchedule](ApiAutomatedInboxPlacementControllerApi.md#updateautomatedinboxplacementschedule)
- [updateAutomatedInboxPlacementScheduleRaw](ApiAutomatedInboxPlacementControllerApi.md#updateautomatedinboxplacementscheduleraw)
- [verifyAutomatedInboxPlacementConnection](ApiAutomatedInboxPlacementControllerApi.md#verifyautomatedinboxplacementconnection)
- [verifyAutomatedInboxPlacementConnectionRaw](ApiAutomatedInboxPlacementControllerApi.md#verifyautomatedinboxplacementconnectionraw)
- [withMiddleware](ApiAutomatedInboxPlacementControllerApi.md#withmiddleware)
- [withPostMiddleware](ApiAutomatedInboxPlacementControllerApi.md#withpostmiddleware)
- [withPreMiddleware](ApiAutomatedInboxPlacementControllerApi.md#withpremiddleware)

## Constructors

### constructor

• **new ApiAutomatedInboxPlacementControllerApi**(`configuration?`)

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

### createAutomatedInboxPlacementConnection

▸ **createAutomatedInboxPlacementConnection**(`requestParameters`, `initOverrides?`): `Promise`<[`AutomatedInboxPlacementConnectionDto`](../interfaces/AutomatedInboxPlacementConnectionDto.md)\>

Create an encrypted sender connection

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateAutomatedInboxPlacementConnectionRequest`](../interfaces/CreateAutomatedInboxPlacementConnectionRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`AutomatedInboxPlacementConnectionDto`](../interfaces/AutomatedInboxPlacementConnectionDto.md)\>

___

### createAutomatedInboxPlacementConnectionRaw

▸ **createAutomatedInboxPlacementConnectionRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AutomatedInboxPlacementConnectionDto`](../interfaces/AutomatedInboxPlacementConnectionDto.md)\>\>

Create an encrypted sender connection

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateAutomatedInboxPlacementConnectionRequest`](../interfaces/CreateAutomatedInboxPlacementConnectionRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AutomatedInboxPlacementConnectionDto`](../interfaces/AutomatedInboxPlacementConnectionDto.md)\>\>

___

### createAutomatedInboxPlacementSchedule

▸ **createAutomatedInboxPlacementSchedule**(`requestParameters`, `initOverrides?`): `Promise`<[`AutomatedInboxPlacementScheduleDto`](../interfaces/AutomatedInboxPlacementScheduleDto.md)\>

Create an automated inbox placement schedule

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateAutomatedInboxPlacementScheduleRequest`](../interfaces/CreateAutomatedInboxPlacementScheduleRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`AutomatedInboxPlacementScheduleDto`](../interfaces/AutomatedInboxPlacementScheduleDto.md)\>

___

### createAutomatedInboxPlacementScheduleRaw

▸ **createAutomatedInboxPlacementScheduleRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AutomatedInboxPlacementScheduleDto`](../interfaces/AutomatedInboxPlacementScheduleDto.md)\>\>

Create an automated inbox placement schedule

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateAutomatedInboxPlacementScheduleRequest`](../interfaces/CreateAutomatedInboxPlacementScheduleRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AutomatedInboxPlacementScheduleDto`](../interfaces/AutomatedInboxPlacementScheduleDto.md)\>\>

___

### deleteAutomatedInboxPlacementConnection

▸ **deleteAutomatedInboxPlacementConnection**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

Disconnect a sender connection

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteAutomatedInboxPlacementConnectionRequest`](../interfaces/DeleteAutomatedInboxPlacementConnectionRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### deleteAutomatedInboxPlacementConnectionRaw

▸ **deleteAutomatedInboxPlacementConnectionRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Disconnect a sender connection

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteAutomatedInboxPlacementConnectionRequest`](../interfaces/DeleteAutomatedInboxPlacementConnectionRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### deleteAutomatedInboxPlacementSchedule

▸ **deleteAutomatedInboxPlacementSchedule**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

Delete an automated inbox placement schedule

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteAutomatedInboxPlacementScheduleRequest`](../interfaces/DeleteAutomatedInboxPlacementScheduleRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### deleteAutomatedInboxPlacementScheduleRaw

▸ **deleteAutomatedInboxPlacementScheduleRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Delete an automated inbox placement schedule

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteAutomatedInboxPlacementScheduleRequest`](../interfaces/DeleteAutomatedInboxPlacementScheduleRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### getAutomatedInboxPlacementConnection

▸ **getAutomatedInboxPlacementConnection**(`requestParameters`, `initOverrides?`): `Promise`<[`AutomatedInboxPlacementConnectionDto`](../interfaces/AutomatedInboxPlacementConnectionDto.md)\>

Get a sender connection

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAutomatedInboxPlacementConnectionRequest`](../interfaces/GetAutomatedInboxPlacementConnectionRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`AutomatedInboxPlacementConnectionDto`](../interfaces/AutomatedInboxPlacementConnectionDto.md)\>

___

### getAutomatedInboxPlacementConnectionRaw

▸ **getAutomatedInboxPlacementConnectionRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AutomatedInboxPlacementConnectionDto`](../interfaces/AutomatedInboxPlacementConnectionDto.md)\>\>

Get a sender connection

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAutomatedInboxPlacementConnectionRequest`](../interfaces/GetAutomatedInboxPlacementConnectionRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AutomatedInboxPlacementConnectionDto`](../interfaces/AutomatedInboxPlacementConnectionDto.md)\>\>

___

### getAutomatedInboxPlacementConnections

▸ **getAutomatedInboxPlacementConnections**(`initOverrides?`): `Promise`<[`AutomatedInboxPlacementConnectionDto`](../interfaces/AutomatedInboxPlacementConnectionDto.md)[]\>

List sender connections

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`AutomatedInboxPlacementConnectionDto`](../interfaces/AutomatedInboxPlacementConnectionDto.md)[]\>

___

### getAutomatedInboxPlacementConnectionsRaw

▸ **getAutomatedInboxPlacementConnectionsRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AutomatedInboxPlacementConnectionDto`](../interfaces/AutomatedInboxPlacementConnectionDto.md)[]\>\>

List sender connections

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AutomatedInboxPlacementConnectionDto`](../interfaces/AutomatedInboxPlacementConnectionDto.md)[]\>\>

___

### getAutomatedInboxPlacementExecutionEvents

▸ **getAutomatedInboxPlacementExecutionEvents**(`requestParameters`, `initOverrides?`): `Promise`<[`AutomatedInboxPlacementEventDto`](../interfaces/AutomatedInboxPlacementEventDto.md)[]\>

List non-secret execution events

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAutomatedInboxPlacementExecutionEventsRequest`](../interfaces/GetAutomatedInboxPlacementExecutionEventsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`AutomatedInboxPlacementEventDto`](../interfaces/AutomatedInboxPlacementEventDto.md)[]\>

___

### getAutomatedInboxPlacementExecutionEventsRaw

▸ **getAutomatedInboxPlacementExecutionEventsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AutomatedInboxPlacementEventDto`](../interfaces/AutomatedInboxPlacementEventDto.md)[]\>\>

List non-secret execution events

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAutomatedInboxPlacementExecutionEventsRequest`](../interfaces/GetAutomatedInboxPlacementExecutionEventsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AutomatedInboxPlacementEventDto`](../interfaces/AutomatedInboxPlacementEventDto.md)[]\>\>

___

### getAutomatedInboxPlacementExecutions

▸ **getAutomatedInboxPlacementExecutions**(`requestParameters`, `initOverrides?`): `Promise`<[`AutomatedInboxPlacementExecutionDto`](../interfaces/AutomatedInboxPlacementExecutionDto.md)[]\>

List schedule executions

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAutomatedInboxPlacementExecutionsRequest`](../interfaces/GetAutomatedInboxPlacementExecutionsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`AutomatedInboxPlacementExecutionDto`](../interfaces/AutomatedInboxPlacementExecutionDto.md)[]\>

___

### getAutomatedInboxPlacementExecutionsRaw

▸ **getAutomatedInboxPlacementExecutionsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AutomatedInboxPlacementExecutionDto`](../interfaces/AutomatedInboxPlacementExecutionDto.md)[]\>\>

List schedule executions

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAutomatedInboxPlacementExecutionsRequest`](../interfaces/GetAutomatedInboxPlacementExecutionsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AutomatedInboxPlacementExecutionDto`](../interfaces/AutomatedInboxPlacementExecutionDto.md)[]\>\>

___

### getAutomatedInboxPlacementProviders

▸ **getAutomatedInboxPlacementProviders**(`initOverrides?`): `Promise`<[`AutomatedInboxPlacementProviderDto`](../interfaces/AutomatedInboxPlacementProviderDto.md)[]\>

List automated inbox placement sender providers

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`AutomatedInboxPlacementProviderDto`](../interfaces/AutomatedInboxPlacementProviderDto.md)[]\>

___

### getAutomatedInboxPlacementProvidersRaw

▸ **getAutomatedInboxPlacementProvidersRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AutomatedInboxPlacementProviderDto`](../interfaces/AutomatedInboxPlacementProviderDto.md)[]\>\>

List automated inbox placement sender providers

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AutomatedInboxPlacementProviderDto`](../interfaces/AutomatedInboxPlacementProviderDto.md)[]\>\>

___

### getAutomatedInboxPlacementSchedule

▸ **getAutomatedInboxPlacementSchedule**(`requestParameters`, `initOverrides?`): `Promise`<[`AutomatedInboxPlacementScheduleDto`](../interfaces/AutomatedInboxPlacementScheduleDto.md)\>

Get an automated inbox placement schedule

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAutomatedInboxPlacementScheduleRequest`](../interfaces/GetAutomatedInboxPlacementScheduleRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`AutomatedInboxPlacementScheduleDto`](../interfaces/AutomatedInboxPlacementScheduleDto.md)\>

___

### getAutomatedInboxPlacementScheduleAnalyticsSeries

▸ **getAutomatedInboxPlacementScheduleAnalyticsSeries**(`requestParameters`, `initOverrides?`): `Promise`<[`InboxPlacementAnalyticsSeriesDto`](../interfaces/InboxPlacementAnalyticsSeriesDto.md)\>

Returns chart-ready metrics for billed placement runs created by this schedule only.
Get automation inbox placement analytics over time

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAutomatedInboxPlacementScheduleAnalyticsSeriesRequest`](../interfaces/GetAutomatedInboxPlacementScheduleAnalyticsSeriesRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`InboxPlacementAnalyticsSeriesDto`](../interfaces/InboxPlacementAnalyticsSeriesDto.md)\>

___

### getAutomatedInboxPlacementScheduleAnalyticsSeriesRaw

▸ **getAutomatedInboxPlacementScheduleAnalyticsSeriesRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxPlacementAnalyticsSeriesDto`](../interfaces/InboxPlacementAnalyticsSeriesDto.md)\>\>

Returns chart-ready metrics for billed placement runs created by this schedule only.
Get automation inbox placement analytics over time

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAutomatedInboxPlacementScheduleAnalyticsSeriesRequest`](../interfaces/GetAutomatedInboxPlacementScheduleAnalyticsSeriesRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxPlacementAnalyticsSeriesDto`](../interfaces/InboxPlacementAnalyticsSeriesDto.md)\>\>

___

### getAutomatedInboxPlacementScheduleRaw

▸ **getAutomatedInboxPlacementScheduleRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AutomatedInboxPlacementScheduleDto`](../interfaces/AutomatedInboxPlacementScheduleDto.md)\>\>

Get an automated inbox placement schedule

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAutomatedInboxPlacementScheduleRequest`](../interfaces/GetAutomatedInboxPlacementScheduleRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AutomatedInboxPlacementScheduleDto`](../interfaces/AutomatedInboxPlacementScheduleDto.md)\>\>

___

### getAutomatedInboxPlacementSchedules

▸ **getAutomatedInboxPlacementSchedules**(`initOverrides?`): `Promise`<[`AutomatedInboxPlacementScheduleDto`](../interfaces/AutomatedInboxPlacementScheduleDto.md)[]\>

List automated inbox placement schedules

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`AutomatedInboxPlacementScheduleDto`](../interfaces/AutomatedInboxPlacementScheduleDto.md)[]\>

___

### getAutomatedInboxPlacementSchedulesRaw

▸ **getAutomatedInboxPlacementSchedulesRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AutomatedInboxPlacementScheduleDto`](../interfaces/AutomatedInboxPlacementScheduleDto.md)[]\>\>

List automated inbox placement schedules

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AutomatedInboxPlacementScheduleDto`](../interfaces/AutomatedInboxPlacementScheduleDto.md)[]\>\>

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

### rotateAutomatedInboxPlacementConnectionCredentials

▸ **rotateAutomatedInboxPlacementConnectionCredentials**(`requestParameters`, `initOverrides?`): `Promise`<[`AutomatedInboxPlacementConnectionDto`](../interfaces/AutomatedInboxPlacementConnectionDto.md)\>

Verifies the replacement SMTP settings before atomically replacing the encrypted credential envelope. A failed verification leaves the existing connection unchanged.
Rotate sender connection credentials

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`RotateAutomatedInboxPlacementConnectionCredentialsRequest`](../interfaces/RotateAutomatedInboxPlacementConnectionCredentialsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`AutomatedInboxPlacementConnectionDto`](../interfaces/AutomatedInboxPlacementConnectionDto.md)\>

___

### rotateAutomatedInboxPlacementConnectionCredentialsRaw

▸ **rotateAutomatedInboxPlacementConnectionCredentialsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AutomatedInboxPlacementConnectionDto`](../interfaces/AutomatedInboxPlacementConnectionDto.md)\>\>

Verifies the replacement SMTP settings before atomically replacing the encrypted credential envelope. A failed verification leaves the existing connection unchanged.
Rotate sender connection credentials

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`RotateAutomatedInboxPlacementConnectionCredentialsRequest`](../interfaces/RotateAutomatedInboxPlacementConnectionCredentialsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AutomatedInboxPlacementConnectionDto`](../interfaces/AutomatedInboxPlacementConnectionDto.md)\>\>

___

### runAutomatedInboxPlacementSchedule

▸ **runAutomatedInboxPlacementSchedule**(`requestParameters`, `initOverrides?`): `Promise`<[`AutomatedInboxPlacementExecutionDto`](../interfaces/AutomatedInboxPlacementExecutionDto.md)\>

Run an automated inbox placement schedule now

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`RunAutomatedInboxPlacementScheduleRequest`](../interfaces/RunAutomatedInboxPlacementScheduleRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`AutomatedInboxPlacementExecutionDto`](../interfaces/AutomatedInboxPlacementExecutionDto.md)\>

___

### runAutomatedInboxPlacementScheduleRaw

▸ **runAutomatedInboxPlacementScheduleRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AutomatedInboxPlacementExecutionDto`](../interfaces/AutomatedInboxPlacementExecutionDto.md)\>\>

Run an automated inbox placement schedule now

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`RunAutomatedInboxPlacementScheduleRequest`](../interfaces/RunAutomatedInboxPlacementScheduleRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AutomatedInboxPlacementExecutionDto`](../interfaces/AutomatedInboxPlacementExecutionDto.md)\>\>

___

### updateAutomatedInboxPlacementConnection

▸ **updateAutomatedInboxPlacementConnection**(`requestParameters`, `initOverrides?`): `Promise`<[`AutomatedInboxPlacementConnectionDto`](../interfaces/AutomatedInboxPlacementConnectionDto.md)\>

Updates non-secret connection metadata. Use the credentials endpoint to replace SMTP credentials or transport settings.
Update a sender connection

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateAutomatedInboxPlacementConnectionRequest`](../interfaces/UpdateAutomatedInboxPlacementConnectionRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`AutomatedInboxPlacementConnectionDto`](../interfaces/AutomatedInboxPlacementConnectionDto.md)\>

___

### updateAutomatedInboxPlacementConnectionRaw

▸ **updateAutomatedInboxPlacementConnectionRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AutomatedInboxPlacementConnectionDto`](../interfaces/AutomatedInboxPlacementConnectionDto.md)\>\>

Updates non-secret connection metadata. Use the credentials endpoint to replace SMTP credentials or transport settings.
Update a sender connection

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateAutomatedInboxPlacementConnectionRequest`](../interfaces/UpdateAutomatedInboxPlacementConnectionRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AutomatedInboxPlacementConnectionDto`](../interfaces/AutomatedInboxPlacementConnectionDto.md)\>\>

___

### updateAutomatedInboxPlacementSchedule

▸ **updateAutomatedInboxPlacementSchedule**(`requestParameters`, `initOverrides?`): `Promise`<[`AutomatedInboxPlacementScheduleDto`](../interfaces/AutomatedInboxPlacementScheduleDto.md)\>

Update an automated inbox placement schedule

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateAutomatedInboxPlacementScheduleRequest`](../interfaces/UpdateAutomatedInboxPlacementScheduleRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`AutomatedInboxPlacementScheduleDto`](../interfaces/AutomatedInboxPlacementScheduleDto.md)\>

___

### updateAutomatedInboxPlacementScheduleRaw

▸ **updateAutomatedInboxPlacementScheduleRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AutomatedInboxPlacementScheduleDto`](../interfaces/AutomatedInboxPlacementScheduleDto.md)\>\>

Update an automated inbox placement schedule

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateAutomatedInboxPlacementScheduleRequest`](../interfaces/UpdateAutomatedInboxPlacementScheduleRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AutomatedInboxPlacementScheduleDto`](../interfaces/AutomatedInboxPlacementScheduleDto.md)\>\>

___

### verifyAutomatedInboxPlacementConnection

▸ **verifyAutomatedInboxPlacementConnection**(`requestParameters`, `initOverrides?`): `Promise`<[`AutomatedInboxPlacementConnectionDto`](../interfaces/AutomatedInboxPlacementConnectionDto.md)\>

Verify a sender connection

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`VerifyAutomatedInboxPlacementConnectionRequest`](../interfaces/VerifyAutomatedInboxPlacementConnectionRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`AutomatedInboxPlacementConnectionDto`](../interfaces/AutomatedInboxPlacementConnectionDto.md)\>

___

### verifyAutomatedInboxPlacementConnectionRaw

▸ **verifyAutomatedInboxPlacementConnectionRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AutomatedInboxPlacementConnectionDto`](../interfaces/AutomatedInboxPlacementConnectionDto.md)\>\>

Verify a sender connection

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`VerifyAutomatedInboxPlacementConnectionRequest`](../interfaces/VerifyAutomatedInboxPlacementConnectionRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AutomatedInboxPlacementConnectionDto`](../interfaces/AutomatedInboxPlacementConnectionDto.md)\>\>

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
