[MailSlurp JS](../README.md) / ApiEmailWarmupControllerApi

# Class: ApiEmailWarmupControllerApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`ApiEmailWarmupControllerApi`**

## Table of contents

### Constructors

- [constructor](ApiEmailWarmupControllerApi.md#constructor)

### Properties

- [configuration](ApiEmailWarmupControllerApi.md#configuration)

### Methods

- [createEmailWarmupProgram](ApiEmailWarmupControllerApi.md#createemailwarmupprogram)
- [createEmailWarmupProgramRaw](ApiEmailWarmupControllerApi.md#createemailwarmupprogramraw)
- [deleteEmailWarmupProgram](ApiEmailWarmupControllerApi.md#deleteemailwarmupprogram)
- [deleteEmailWarmupProgramRaw](ApiEmailWarmupControllerApi.md#deleteemailwarmupprogramraw)
- [deleteEmailWarmupSenderSeats](ApiEmailWarmupControllerApi.md#deleteemailwarmupsenderseats)
- [deleteEmailWarmupSenderSeatsRaw](ApiEmailWarmupControllerApi.md#deleteemailwarmupsenderseatsraw)
- [getEmailWarmupOverview](ApiEmailWarmupControllerApi.md#getemailwarmupoverview)
- [getEmailWarmupOverviewRaw](ApiEmailWarmupControllerApi.md#getemailwarmupoverviewraw)
- [getEmailWarmupPlacementChecks](ApiEmailWarmupControllerApi.md#getemailwarmupplacementchecks)
- [getEmailWarmupPlacementChecksRaw](ApiEmailWarmupControllerApi.md#getemailwarmupplacementchecksraw)
- [getEmailWarmupProgram](ApiEmailWarmupControllerApi.md#getemailwarmupprogram)
- [getEmailWarmupProgramAnalytics](ApiEmailWarmupControllerApi.md#getemailwarmupprogramanalytics)
- [getEmailWarmupProgramAnalyticsRaw](ApiEmailWarmupControllerApi.md#getemailwarmupprogramanalyticsraw)
- [getEmailWarmupProgramRaw](ApiEmailWarmupControllerApi.md#getemailwarmupprogramraw)
- [getEmailWarmupPrograms](ApiEmailWarmupControllerApi.md#getemailwarmupprograms)
- [getEmailWarmupProgramsRaw](ApiEmailWarmupControllerApi.md#getemailwarmupprogramsraw)
- [getEmailWarmupReadiness](ApiEmailWarmupControllerApi.md#getemailwarmupreadiness)
- [getEmailWarmupReadinessRaw](ApiEmailWarmupControllerApi.md#getemailwarmupreadinessraw)
- [getEmailWarmupSlots](ApiEmailWarmupControllerApi.md#getemailwarmupslots)
- [getEmailWarmupSlotsRaw](ApiEmailWarmupControllerApi.md#getemailwarmupslotsraw)
- [getEmailWarmupUsage](ApiEmailWarmupControllerApi.md#getemailwarmupusage)
- [getEmailWarmupUsageRaw](ApiEmailWarmupControllerApi.md#getemailwarmupusageraw)
- [pauseEmailWarmupProgram](ApiEmailWarmupControllerApi.md#pauseemailwarmupprogram)
- [pauseEmailWarmupProgramRaw](ApiEmailWarmupControllerApi.md#pauseemailwarmupprogramraw)
- [request](ApiEmailWarmupControllerApi.md#request)
- [resumeEmailWarmupProgram](ApiEmailWarmupControllerApi.md#resumeemailwarmupprogram)
- [resumeEmailWarmupProgramRaw](ApiEmailWarmupControllerApi.md#resumeemailwarmupprogramraw)
- [retryEmailWarmupProgram](ApiEmailWarmupControllerApi.md#retryemailwarmupprogram)
- [retryEmailWarmupProgramRaw](ApiEmailWarmupControllerApi.md#retryemailwarmupprogramraw)
- [startEmailWarmupProgram](ApiEmailWarmupControllerApi.md#startemailwarmupprogram)
- [startEmailWarmupProgramRaw](ApiEmailWarmupControllerApi.md#startemailwarmupprogramraw)
- [stopEmailWarmupProgram](ApiEmailWarmupControllerApi.md#stopemailwarmupprogram)
- [stopEmailWarmupProgramRaw](ApiEmailWarmupControllerApi.md#stopemailwarmupprogramraw)
- [updateEmailWarmupProgram](ApiEmailWarmupControllerApi.md#updateemailwarmupprogram)
- [updateEmailWarmupProgramRaw](ApiEmailWarmupControllerApi.md#updateemailwarmupprogramraw)
- [updateEmailWarmupSenderSeats](ApiEmailWarmupControllerApi.md#updateemailwarmupsenderseats)
- [updateEmailWarmupSenderSeatsRaw](ApiEmailWarmupControllerApi.md#updateemailwarmupsenderseatsraw)
- [withMiddleware](ApiEmailWarmupControllerApi.md#withmiddleware)
- [withPostMiddleware](ApiEmailWarmupControllerApi.md#withpostmiddleware)
- [withPreMiddleware](ApiEmailWarmupControllerApi.md#withpremiddleware)

## Constructors

### constructor

• **new ApiEmailWarmupControllerApi**(`configuration?`)

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

### createEmailWarmupProgram

▸ **createEmailWarmupProgram**(`requestParameters`, `initOverrides?`): `Promise`<[`EmailWarmupProgramDto`](../interfaces/EmailWarmupProgramDto.md)\>

Create an email warmup program

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateEmailWarmupProgramRequest`](../interfaces/CreateEmailWarmupProgramRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`EmailWarmupProgramDto`](../interfaces/EmailWarmupProgramDto.md)\>

___

### createEmailWarmupProgramRaw

▸ **createEmailWarmupProgramRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailWarmupProgramDto`](../interfaces/EmailWarmupProgramDto.md)\>\>

Create an email warmup program

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateEmailWarmupProgramRequest`](../interfaces/CreateEmailWarmupProgramRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailWarmupProgramDto`](../interfaces/EmailWarmupProgramDto.md)\>\>

___

### deleteEmailWarmupProgram

▸ **deleteEmailWarmupProgram**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

Delete an email warmup program

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteEmailWarmupProgramRequest`](../interfaces/DeleteEmailWarmupProgramRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### deleteEmailWarmupProgramRaw

▸ **deleteEmailWarmupProgramRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Delete an email warmup program

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteEmailWarmupProgramRequest`](../interfaces/DeleteEmailWarmupProgramRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### deleteEmailWarmupSenderSeats

▸ **deleteEmailWarmupSenderSeats**(`initOverrides?`): `Promise`<[`EmailWarmupUsageSummaryDto`](../interfaces/EmailWarmupUsageSummaryDto.md)\>

Cancel purchased email warmup sender seats

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`EmailWarmupUsageSummaryDto`](../interfaces/EmailWarmupUsageSummaryDto.md)\>

___

### deleteEmailWarmupSenderSeatsRaw

▸ **deleteEmailWarmupSenderSeatsRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailWarmupUsageSummaryDto`](../interfaces/EmailWarmupUsageSummaryDto.md)\>\>

Cancel purchased email warmup sender seats

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailWarmupUsageSummaryDto`](../interfaces/EmailWarmupUsageSummaryDto.md)\>\>

___

### getEmailWarmupOverview

▸ **getEmailWarmupOverview**(`requestParameters`, `initOverrides?`): `Promise`<[`EmailWarmupOverviewDto`](../interfaces/EmailWarmupOverviewDto.md)\>

Get operational email warmup activity and program progress

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetEmailWarmupOverviewRequest`](../interfaces/GetEmailWarmupOverviewRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`EmailWarmupOverviewDto`](../interfaces/EmailWarmupOverviewDto.md)\>

___

### getEmailWarmupOverviewRaw

▸ **getEmailWarmupOverviewRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailWarmupOverviewDto`](../interfaces/EmailWarmupOverviewDto.md)\>\>

Get operational email warmup activity and program progress

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetEmailWarmupOverviewRequest`](../interfaces/GetEmailWarmupOverviewRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailWarmupOverviewDto`](../interfaces/EmailWarmupOverviewDto.md)\>\>

___

### getEmailWarmupPlacementChecks

▸ **getEmailWarmupPlacementChecks**(`requestParameters`, `initOverrides?`): `Promise`<[`EmailWarmupPlacementCheckDto`](../interfaces/EmailWarmupPlacementCheckDto.md)[]\>

List Gmail and Outlook placement checks for an email warmup program

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetEmailWarmupPlacementChecksRequest`](../interfaces/GetEmailWarmupPlacementChecksRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`EmailWarmupPlacementCheckDto`](../interfaces/EmailWarmupPlacementCheckDto.md)[]\>

___

### getEmailWarmupPlacementChecksRaw

▸ **getEmailWarmupPlacementChecksRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailWarmupPlacementCheckDto`](../interfaces/EmailWarmupPlacementCheckDto.md)[]\>\>

List Gmail and Outlook placement checks for an email warmup program

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetEmailWarmupPlacementChecksRequest`](../interfaces/GetEmailWarmupPlacementChecksRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailWarmupPlacementCheckDto`](../interfaces/EmailWarmupPlacementCheckDto.md)[]\>\>

___

### getEmailWarmupProgram

▸ **getEmailWarmupProgram**(`requestParameters`, `initOverrides?`): `Promise`<[`EmailWarmupProgramDto`](../interfaces/EmailWarmupProgramDto.md)\>

Get an email warmup program

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetEmailWarmupProgramRequest`](../interfaces/GetEmailWarmupProgramRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`EmailWarmupProgramDto`](../interfaces/EmailWarmupProgramDto.md)\>

___

### getEmailWarmupProgramAnalytics

▸ **getEmailWarmupProgramAnalytics**(`requestParameters`, `initOverrides?`): `Promise`<[`EmailWarmupProgramAnalyticsDto`](../interfaces/EmailWarmupProgramAnalyticsDto.md)\>

Get email warmup program progress and daily activity

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetEmailWarmupProgramAnalyticsRequest`](../interfaces/GetEmailWarmupProgramAnalyticsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`EmailWarmupProgramAnalyticsDto`](../interfaces/EmailWarmupProgramAnalyticsDto.md)\>

___

### getEmailWarmupProgramAnalyticsRaw

▸ **getEmailWarmupProgramAnalyticsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailWarmupProgramAnalyticsDto`](../interfaces/EmailWarmupProgramAnalyticsDto.md)\>\>

Get email warmup program progress and daily activity

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetEmailWarmupProgramAnalyticsRequest`](../interfaces/GetEmailWarmupProgramAnalyticsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailWarmupProgramAnalyticsDto`](../interfaces/EmailWarmupProgramAnalyticsDto.md)\>\>

___

### getEmailWarmupProgramRaw

▸ **getEmailWarmupProgramRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailWarmupProgramDto`](../interfaces/EmailWarmupProgramDto.md)\>\>

Get an email warmup program

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetEmailWarmupProgramRequest`](../interfaces/GetEmailWarmupProgramRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailWarmupProgramDto`](../interfaces/EmailWarmupProgramDto.md)\>\>

___

### getEmailWarmupPrograms

▸ **getEmailWarmupPrograms**(`requestParameters`, `initOverrides?`): `Promise`<[`EmailWarmupProgramPageDto`](../interfaces/EmailWarmupProgramPageDto.md)\>

List email warmup programs

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetEmailWarmupProgramsRequest`](../interfaces/GetEmailWarmupProgramsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`EmailWarmupProgramPageDto`](../interfaces/EmailWarmupProgramPageDto.md)\>

___

### getEmailWarmupProgramsRaw

▸ **getEmailWarmupProgramsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailWarmupProgramPageDto`](../interfaces/EmailWarmupProgramPageDto.md)\>\>

List email warmup programs

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetEmailWarmupProgramsRequest`](../interfaces/GetEmailWarmupProgramsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailWarmupProgramPageDto`](../interfaces/EmailWarmupProgramPageDto.md)\>\>

___

### getEmailWarmupReadiness

▸ **getEmailWarmupReadiness**(`requestParameters`, `initOverrides?`): `Promise`<[`EmailWarmupReadinessDto`](../interfaces/EmailWarmupReadinessDto.md)\>

Get warmup readiness, adaptive pacing, and sender-health signals

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetEmailWarmupReadinessRequest`](../interfaces/GetEmailWarmupReadinessRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`EmailWarmupReadinessDto`](../interfaces/EmailWarmupReadinessDto.md)\>

___

### getEmailWarmupReadinessRaw

▸ **getEmailWarmupReadinessRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailWarmupReadinessDto`](../interfaces/EmailWarmupReadinessDto.md)\>\>

Get warmup readiness, adaptive pacing, and sender-health signals

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetEmailWarmupReadinessRequest`](../interfaces/GetEmailWarmupReadinessRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailWarmupReadinessDto`](../interfaces/EmailWarmupReadinessDto.md)\>\>

___

### getEmailWarmupSlots

▸ **getEmailWarmupSlots**(`requestParameters`, `initOverrides?`): `Promise`<[`EmailWarmupSendSlotPageDto`](../interfaces/EmailWarmupSendSlotPageDto.md)\>

List scheduled email warmup slots

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetEmailWarmupSlotsRequest`](../interfaces/GetEmailWarmupSlotsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`EmailWarmupSendSlotPageDto`](../interfaces/EmailWarmupSendSlotPageDto.md)\>

___

### getEmailWarmupSlotsRaw

▸ **getEmailWarmupSlotsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailWarmupSendSlotPageDto`](../interfaces/EmailWarmupSendSlotPageDto.md)\>\>

List scheduled email warmup slots

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetEmailWarmupSlotsRequest`](../interfaces/GetEmailWarmupSlotsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailWarmupSendSlotPageDto`](../interfaces/EmailWarmupSendSlotPageDto.md)\>\>

___

### getEmailWarmupUsage

▸ **getEmailWarmupUsage**(`initOverrides?`): `Promise`<[`EmailWarmupUsageSummaryDto`](../interfaces/EmailWarmupUsageSummaryDto.md)\>

Get email warmup sender capacity, included credits, and billable usage

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`EmailWarmupUsageSummaryDto`](../interfaces/EmailWarmupUsageSummaryDto.md)\>

___

### getEmailWarmupUsageRaw

▸ **getEmailWarmupUsageRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailWarmupUsageSummaryDto`](../interfaces/EmailWarmupUsageSummaryDto.md)\>\>

Get email warmup sender capacity, included credits, and billable usage

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailWarmupUsageSummaryDto`](../interfaces/EmailWarmupUsageSummaryDto.md)\>\>

___

### pauseEmailWarmupProgram

▸ **pauseEmailWarmupProgram**(`requestParameters`, `initOverrides?`): `Promise`<[`EmailWarmupProgramDto`](../interfaces/EmailWarmupProgramDto.md)\>

Pause an email warmup program

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`PauseEmailWarmupProgramRequest`](../interfaces/PauseEmailWarmupProgramRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`EmailWarmupProgramDto`](../interfaces/EmailWarmupProgramDto.md)\>

___

### pauseEmailWarmupProgramRaw

▸ **pauseEmailWarmupProgramRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailWarmupProgramDto`](../interfaces/EmailWarmupProgramDto.md)\>\>

Pause an email warmup program

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`PauseEmailWarmupProgramRequest`](../interfaces/PauseEmailWarmupProgramRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailWarmupProgramDto`](../interfaces/EmailWarmupProgramDto.md)\>\>

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

### resumeEmailWarmupProgram

▸ **resumeEmailWarmupProgram**(`requestParameters`, `initOverrides?`): `Promise`<[`EmailWarmupProgramDto`](../interfaces/EmailWarmupProgramDto.md)\>

Resume an email warmup program

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ResumeEmailWarmupProgramRequest`](../interfaces/ResumeEmailWarmupProgramRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`EmailWarmupProgramDto`](../interfaces/EmailWarmupProgramDto.md)\>

___

### resumeEmailWarmupProgramRaw

▸ **resumeEmailWarmupProgramRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailWarmupProgramDto`](../interfaces/EmailWarmupProgramDto.md)\>\>

Resume an email warmup program

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ResumeEmailWarmupProgramRequest`](../interfaces/ResumeEmailWarmupProgramRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailWarmupProgramDto`](../interfaces/EmailWarmupProgramDto.md)\>\>

___

### retryEmailWarmupProgram

▸ **retryEmailWarmupProgram**(`requestParameters`, `initOverrides?`): `Promise`<[`EmailWarmupProgramDto`](../interfaces/EmailWarmupProgramDto.md)\>

Retry a system-paused email warmup program

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`RetryEmailWarmupProgramRequest`](../interfaces/RetryEmailWarmupProgramRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`EmailWarmupProgramDto`](../interfaces/EmailWarmupProgramDto.md)\>

___

### retryEmailWarmupProgramRaw

▸ **retryEmailWarmupProgramRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailWarmupProgramDto`](../interfaces/EmailWarmupProgramDto.md)\>\>

Retry a system-paused email warmup program

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`RetryEmailWarmupProgramRequest`](../interfaces/RetryEmailWarmupProgramRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailWarmupProgramDto`](../interfaces/EmailWarmupProgramDto.md)\>\>

___

### startEmailWarmupProgram

▸ **startEmailWarmupProgram**(`requestParameters`, `initOverrides?`): `Promise`<[`EmailWarmupProgramDto`](../interfaces/EmailWarmupProgramDto.md)\>

Start an email warmup program

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`StartEmailWarmupProgramRequest`](../interfaces/StartEmailWarmupProgramRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`EmailWarmupProgramDto`](../interfaces/EmailWarmupProgramDto.md)\>

___

### startEmailWarmupProgramRaw

▸ **startEmailWarmupProgramRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailWarmupProgramDto`](../interfaces/EmailWarmupProgramDto.md)\>\>

Start an email warmup program

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`StartEmailWarmupProgramRequest`](../interfaces/StartEmailWarmupProgramRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailWarmupProgramDto`](../interfaces/EmailWarmupProgramDto.md)\>\>

___

### stopEmailWarmupProgram

▸ **stopEmailWarmupProgram**(`requestParameters`, `initOverrides?`): `Promise`<[`EmailWarmupProgramDto`](../interfaces/EmailWarmupProgramDto.md)\>

Stop an email warmup program

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`StopEmailWarmupProgramRequest`](../interfaces/StopEmailWarmupProgramRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`EmailWarmupProgramDto`](../interfaces/EmailWarmupProgramDto.md)\>

___

### stopEmailWarmupProgramRaw

▸ **stopEmailWarmupProgramRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailWarmupProgramDto`](../interfaces/EmailWarmupProgramDto.md)\>\>

Stop an email warmup program

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`StopEmailWarmupProgramRequest`](../interfaces/StopEmailWarmupProgramRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailWarmupProgramDto`](../interfaces/EmailWarmupProgramDto.md)\>\>

___

### updateEmailWarmupProgram

▸ **updateEmailWarmupProgram**(`requestParameters`, `initOverrides?`): `Promise`<[`EmailWarmupProgramDto`](../interfaces/EmailWarmupProgramDto.md)\>

Update a draft email warmup program

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateEmailWarmupProgramRequest`](../interfaces/UpdateEmailWarmupProgramRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`EmailWarmupProgramDto`](../interfaces/EmailWarmupProgramDto.md)\>

___

### updateEmailWarmupProgramRaw

▸ **updateEmailWarmupProgramRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailWarmupProgramDto`](../interfaces/EmailWarmupProgramDto.md)\>\>

Update a draft email warmup program

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateEmailWarmupProgramRequest`](../interfaces/UpdateEmailWarmupProgramRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailWarmupProgramDto`](../interfaces/EmailWarmupProgramDto.md)\>\>

___

### updateEmailWarmupSenderSeats

▸ **updateEmailWarmupSenderSeats**(`requestParameters`, `initOverrides?`): `Promise`<[`EmailWarmupUsageSummaryDto`](../interfaces/EmailWarmupUsageSummaryDto.md)\>

Update purchased email warmup sender seats

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateEmailWarmupSenderSeatsRequest`](../interfaces/UpdateEmailWarmupSenderSeatsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`EmailWarmupUsageSummaryDto`](../interfaces/EmailWarmupUsageSummaryDto.md)\>

___

### updateEmailWarmupSenderSeatsRaw

▸ **updateEmailWarmupSenderSeatsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailWarmupUsageSummaryDto`](../interfaces/EmailWarmupUsageSummaryDto.md)\>\>

Update purchased email warmup sender seats

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateEmailWarmupSenderSeatsRequest`](../interfaces/UpdateEmailWarmupSenderSeatsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailWarmupUsageSummaryDto`](../interfaces/EmailWarmupUsageSummaryDto.md)\>\>

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
