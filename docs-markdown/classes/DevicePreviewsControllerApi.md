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
- [createDevicePreviewImportAddress](DevicePreviewsControllerApi.md#createdevicepreviewimportaddress)
- [createDevicePreviewImportAddressRaw](DevicePreviewsControllerApi.md#createdevicepreviewimportaddressraw)
- [createDevicePreviewProfile](DevicePreviewsControllerApi.md#createdevicepreviewprofile)
- [createDevicePreviewProfileRaw](DevicePreviewsControllerApi.md#createdevicepreviewprofileraw)
- [createDevicePreviewRun](DevicePreviewsControllerApi.md#createdevicepreviewrun)
- [createDevicePreviewRunFromHtmlImport](DevicePreviewsControllerApi.md#createdevicepreviewrunfromhtmlimport)
- [createDevicePreviewRunFromHtmlImportRaw](DevicePreviewsControllerApi.md#createdevicepreviewrunfromhtmlimportraw)
- [createDevicePreviewRunFromImport](DevicePreviewsControllerApi.md#createdevicepreviewrunfromimport)
- [createDevicePreviewRunFromImportRaw](DevicePreviewsControllerApi.md#createdevicepreviewrunfromimportraw)
- [createDevicePreviewRunFromMultipartImport](DevicePreviewsControllerApi.md#createdevicepreviewrunfrommultipartimport)
- [createDevicePreviewRunFromMultipartImportRaw](DevicePreviewsControllerApi.md#createdevicepreviewrunfrommultipartimportraw)
- [createDevicePreviewRunFromRawImport](DevicePreviewsControllerApi.md#createdevicepreviewrunfromrawimport)
- [createDevicePreviewRunFromRawImportRaw](DevicePreviewsControllerApi.md#createdevicepreviewrunfromrawimportraw)
- [createDevicePreviewRunRaw](DevicePreviewsControllerApi.md#createdevicepreviewrunraw)
- [createDevicePreviewShareLink](DevicePreviewsControllerApi.md#createdevicepreviewsharelink)
- [createDevicePreviewShareLinkRaw](DevicePreviewsControllerApi.md#createdevicepreviewsharelinkraw)
- [deleteDevicePreviewProfile](DevicePreviewsControllerApi.md#deletedevicepreviewprofile)
- [deleteDevicePreviewProfileRaw](DevicePreviewsControllerApi.md#deletedevicepreviewprofileraw)
- [deleteDevicePreviewRun](DevicePreviewsControllerApi.md#deletedevicepreviewrun)
- [deleteDevicePreviewRunRaw](DevicePreviewsControllerApi.md#deletedevicepreviewrunraw)
- [deleteDevicePreviewShareLink](DevicePreviewsControllerApi.md#deletedevicepreviewsharelink)
- [deleteDevicePreviewShareLinkRaw](DevicePreviewsControllerApi.md#deletedevicepreviewsharelinkraw)
- [ensureDevicePreviewRun](DevicePreviewsControllerApi.md#ensuredevicepreviewrun)
- [ensureDevicePreviewRunRaw](DevicePreviewsControllerApi.md#ensuredevicepreviewrunraw)
- [getDevicePreviewEmailDomainOrCreate](DevicePreviewsControllerApi.md#getdevicepreviewemaildomainorcreate)
- [getDevicePreviewEmailDomainOrCreateRaw](DevicePreviewsControllerApi.md#getdevicepreviewemaildomainorcreateraw)
- [getDevicePreviewEmailRuns](DevicePreviewsControllerApi.md#getdevicepreviewemailruns)
- [getDevicePreviewEmailRunsRaw](DevicePreviewsControllerApi.md#getdevicepreviewemailrunsraw)
- [getDevicePreviewEmailSubmissions](DevicePreviewsControllerApi.md#getdevicepreviewemailsubmissions)
- [getDevicePreviewEmailSubmissionsRaw](DevicePreviewsControllerApi.md#getdevicepreviewemailsubmissionsraw)
- [getDevicePreviewFeedback](DevicePreviewsControllerApi.md#getdevicepreviewfeedback)
- [getDevicePreviewFeedbackItems](DevicePreviewsControllerApi.md#getdevicepreviewfeedbackitems)
- [getDevicePreviewFeedbackItemsRaw](DevicePreviewsControllerApi.md#getdevicepreviewfeedbackitemsraw)
- [getDevicePreviewFeedbackRaw](DevicePreviewsControllerApi.md#getdevicepreviewfeedbackraw)
- [getDevicePreviewImportAddress](DevicePreviewsControllerApi.md#getdevicepreviewimportaddress)
- [getDevicePreviewImportAddressRaw](DevicePreviewsControllerApi.md#getdevicepreviewimportaddressraw)
- [getDevicePreviewNativeTargetAvailability](DevicePreviewsControllerApi.md#getdevicepreviewnativetargetavailability)
- [getDevicePreviewNativeTargetAvailabilityRaw](DevicePreviewsControllerApi.md#getdevicepreviewnativetargetavailabilityraw)
- [getDevicePreviewProfile](DevicePreviewsControllerApi.md#getdevicepreviewprofile)
- [getDevicePreviewProfileRaw](DevicePreviewsControllerApi.md#getdevicepreviewprofileraw)
- [getDevicePreviewProfiles](DevicePreviewsControllerApi.md#getdevicepreviewprofiles)
- [getDevicePreviewProfilesRaw](DevicePreviewsControllerApi.md#getdevicepreviewprofilesraw)
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
- [getDevicePreviewRunsForAccountOffsetPaginated](DevicePreviewsControllerApi.md#getdevicepreviewrunsforaccountoffsetpaginated)
- [getDevicePreviewRunsForAccountOffsetPaginatedRaw](DevicePreviewsControllerApi.md#getdevicepreviewrunsforaccountoffsetpaginatedraw)
- [getDevicePreviewRunsForAccountRaw](DevicePreviewsControllerApi.md#getdevicepreviewrunsforaccountraw)
- [getDevicePreviewRunsOffsetPaginated](DevicePreviewsControllerApi.md#getdevicepreviewrunsoffsetpaginated)
- [getDevicePreviewRunsOffsetPaginatedRaw](DevicePreviewsControllerApi.md#getdevicepreviewrunsoffsetpaginatedraw)
- [getDevicePreviewRunsRaw](DevicePreviewsControllerApi.md#getdevicepreviewrunsraw)
- [getDevicePreviewShareLinks](DevicePreviewsControllerApi.md#getdevicepreviewsharelinks)
- [getDevicePreviewShareLinksRaw](DevicePreviewsControllerApi.md#getdevicepreviewsharelinksraw)
- [getDevicePreviewSharedResult](DevicePreviewsControllerApi.md#getdevicepreviewsharedresult)
- [getDevicePreviewSharedResultRaw](DevicePreviewsControllerApi.md#getdevicepreviewsharedresultraw)
- [getDevicePreviewSharedResultScreenshot](DevicePreviewsControllerApi.md#getdevicepreviewsharedresultscreenshot)
- [getDevicePreviewSharedResultScreenshotRaw](DevicePreviewsControllerApi.md#getdevicepreviewsharedresultscreenshotraw)
- [request](DevicePreviewsControllerApi.md#request)
- [rerunDevicePreviewTargets](DevicePreviewsControllerApi.md#rerundevicepreviewtargets)
- [rerunDevicePreviewTargetsRaw](DevicePreviewsControllerApi.md#rerundevicepreviewtargetsraw)
- [updateDevicePreviewEmailDomainSubdomain](DevicePreviewsControllerApi.md#updatedevicepreviewemaildomainsubdomain)
- [updateDevicePreviewEmailDomainSubdomainRaw](DevicePreviewsControllerApi.md#updatedevicepreviewemaildomainsubdomainraw)
- [updateDevicePreviewFeedback](DevicePreviewsControllerApi.md#updatedevicepreviewfeedback)
- [updateDevicePreviewFeedbackRaw](DevicePreviewsControllerApi.md#updatedevicepreviewfeedbackraw)
- [updateDevicePreviewProfile](DevicePreviewsControllerApi.md#updatedevicepreviewprofile)
- [updateDevicePreviewProfileRaw](DevicePreviewsControllerApi.md#updatedevicepreviewprofileraw)
- [waitForDevicePreviewEmailRuns](DevicePreviewsControllerApi.md#waitfordevicepreviewemailruns)
- [waitForDevicePreviewEmailRunsRaw](DevicePreviewsControllerApi.md#waitfordevicepreviewemailrunsraw)
- [waitForDevicePreviewEmailSubmissions](DevicePreviewsControllerApi.md#waitfordevicepreviewemailsubmissions)
- [waitForDevicePreviewEmailSubmissionsRaw](DevicePreviewsControllerApi.md#waitfordevicepreviewemailsubmissionsraw)
- [waitForDevicePreviewRun](DevicePreviewsControllerApi.md#waitfordevicepreviewrun)
- [waitForDevicePreviewRunRaw](DevicePreviewsControllerApi.md#waitfordevicepreviewrunraw)
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

### createDevicePreviewImportAddress

▸ **createDevicePreviewImportAddress**(`requestParameters`, `initOverrides?`): `Promise`<[`DevicePreviewIngestAddressDto`](../interfaces/DevicePreviewIngestAddressDto.md)\>

Create a temporary email address for device preview import

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateDevicePreviewImportAddressRequest`](../interfaces/CreateDevicePreviewImportAddressRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`DevicePreviewIngestAddressDto`](../interfaces/DevicePreviewIngestAddressDto.md)\>

___

### createDevicePreviewImportAddressRaw

▸ **createDevicePreviewImportAddressRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DevicePreviewIngestAddressDto`](../interfaces/DevicePreviewIngestAddressDto.md)\>\>

Create a temporary email address for device preview import

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateDevicePreviewImportAddressRequest`](../interfaces/CreateDevicePreviewImportAddressRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DevicePreviewIngestAddressDto`](../interfaces/DevicePreviewIngestAddressDto.md)\>\>

___

### createDevicePreviewProfile

▸ **createDevicePreviewProfile**(`requestParameters`, `initOverrides?`): `Promise`<[`DevicePreviewProfileDto`](../interfaces/DevicePreviewProfileDto.md)\>

Create a device preview profile

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateDevicePreviewProfileRequest`](../interfaces/CreateDevicePreviewProfileRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`DevicePreviewProfileDto`](../interfaces/DevicePreviewProfileDto.md)\>

___

### createDevicePreviewProfileRaw

▸ **createDevicePreviewProfileRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DevicePreviewProfileDto`](../interfaces/DevicePreviewProfileDto.md)\>\>

Create a device preview profile

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateDevicePreviewProfileRequest`](../interfaces/CreateDevicePreviewProfileRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DevicePreviewProfileDto`](../interfaces/DevicePreviewProfileDto.md)\>\>

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

### createDevicePreviewRunFromHtmlImport

▸ **createDevicePreviewRunFromHtmlImport**(`requestParameters`, `initOverrides?`): `Promise`<[`CreateDevicePreviewRunResult`](../interfaces/CreateDevicePreviewRunResult.md)\>

Create a device preview run from HTML

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateDevicePreviewRunFromHtmlImportRequest`](../interfaces/CreateDevicePreviewRunFromHtmlImportRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`CreateDevicePreviewRunResult`](../interfaces/CreateDevicePreviewRunResult.md)\>

___

### createDevicePreviewRunFromHtmlImportRaw

▸ **createDevicePreviewRunFromHtmlImportRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CreateDevicePreviewRunResult`](../interfaces/CreateDevicePreviewRunResult.md)\>\>

Create a device preview run from HTML

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateDevicePreviewRunFromHtmlImportRequest`](../interfaces/CreateDevicePreviewRunFromHtmlImportRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CreateDevicePreviewRunResult`](../interfaces/CreateDevicePreviewRunResult.md)\>\>

___

### createDevicePreviewRunFromImport

▸ **createDevicePreviewRunFromImport**(`requestParameters`, `initOverrides?`): `Promise`<[`CreateDevicePreviewRunResult`](../interfaces/CreateDevicePreviewRunResult.md)\>

Create a device preview run from imported raw MIME

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateDevicePreviewRunFromImportRequest`](../interfaces/CreateDevicePreviewRunFromImportRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`CreateDevicePreviewRunResult`](../interfaces/CreateDevicePreviewRunResult.md)\>

___

### createDevicePreviewRunFromImportRaw

▸ **createDevicePreviewRunFromImportRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CreateDevicePreviewRunResult`](../interfaces/CreateDevicePreviewRunResult.md)\>\>

Create a device preview run from imported raw MIME

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateDevicePreviewRunFromImportRequest`](../interfaces/CreateDevicePreviewRunFromImportRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CreateDevicePreviewRunResult`](../interfaces/CreateDevicePreviewRunResult.md)\>\>

___

### createDevicePreviewRunFromMultipartImport

▸ **createDevicePreviewRunFromMultipartImport**(`requestParameters`, `initOverrides?`): `Promise`<[`CreateDevicePreviewRunResult`](../interfaces/CreateDevicePreviewRunResult.md)\>

Create a device preview run from multipart EML upload

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateDevicePreviewRunFromMultipartImportRequest`](../interfaces/CreateDevicePreviewRunFromMultipartImportRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`CreateDevicePreviewRunResult`](../interfaces/CreateDevicePreviewRunResult.md)\>

___

### createDevicePreviewRunFromMultipartImportRaw

▸ **createDevicePreviewRunFromMultipartImportRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CreateDevicePreviewRunResult`](../interfaces/CreateDevicePreviewRunResult.md)\>\>

Create a device preview run from multipart EML upload

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateDevicePreviewRunFromMultipartImportRequest`](../interfaces/CreateDevicePreviewRunFromMultipartImportRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CreateDevicePreviewRunResult`](../interfaces/CreateDevicePreviewRunResult.md)\>\>

___

### createDevicePreviewRunFromRawImport

▸ **createDevicePreviewRunFromRawImport**(`requestParameters`, `initOverrides?`): `Promise`<[`CreateDevicePreviewRunResult`](../interfaces/CreateDevicePreviewRunResult.md)\>

Create a device preview run from raw MIME bytes

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateDevicePreviewRunFromRawImportRequest`](../interfaces/CreateDevicePreviewRunFromRawImportRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`CreateDevicePreviewRunResult`](../interfaces/CreateDevicePreviewRunResult.md)\>

___

### createDevicePreviewRunFromRawImportRaw

▸ **createDevicePreviewRunFromRawImportRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CreateDevicePreviewRunResult`](../interfaces/CreateDevicePreviewRunResult.md)\>\>

Create a device preview run from raw MIME bytes

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateDevicePreviewRunFromRawImportRequest`](../interfaces/CreateDevicePreviewRunFromRawImportRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CreateDevicePreviewRunResult`](../interfaces/CreateDevicePreviewRunResult.md)\>\>

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

### createDevicePreviewShareLink

▸ **createDevicePreviewShareLink**(`requestParameters`, `initOverrides?`): `Promise`<[`DevicePreviewShareLinkDto`](../interfaces/DevicePreviewShareLinkDto.md)\>

Create a share link for a device preview run

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateDevicePreviewShareLinkRequest`](../interfaces/CreateDevicePreviewShareLinkRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`DevicePreviewShareLinkDto`](../interfaces/DevicePreviewShareLinkDto.md)\>

___

### createDevicePreviewShareLinkRaw

▸ **createDevicePreviewShareLinkRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DevicePreviewShareLinkDto`](../interfaces/DevicePreviewShareLinkDto.md)\>\>

Create a share link for a device preview run

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateDevicePreviewShareLinkRequest`](../interfaces/CreateDevicePreviewShareLinkRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DevicePreviewShareLinkDto`](../interfaces/DevicePreviewShareLinkDto.md)\>\>

___

### deleteDevicePreviewProfile

▸ **deleteDevicePreviewProfile**(`requestParameters`, `initOverrides?`): `Promise`<[`DeleteDevicePreviewProfileResult`](../interfaces/DeleteDevicePreviewProfileResult.md)\>

Delete a device preview profile

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteDevicePreviewProfileRequest`](../interfaces/DeleteDevicePreviewProfileRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`DeleteDevicePreviewProfileResult`](../interfaces/DeleteDevicePreviewProfileResult.md)\>

___

### deleteDevicePreviewProfileRaw

▸ **deleteDevicePreviewProfileRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DeleteDevicePreviewProfileResult`](../interfaces/DeleteDevicePreviewProfileResult.md)\>\>

Delete a device preview profile

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteDevicePreviewProfileRequest`](../interfaces/DeleteDevicePreviewProfileRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DeleteDevicePreviewProfileResult`](../interfaces/DeleteDevicePreviewProfileResult.md)\>\>

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

### deleteDevicePreviewShareLink

▸ **deleteDevicePreviewShareLink**(`requestParameters`, `initOverrides?`): `Promise`<[`DeleteDevicePreviewShareLinkResult`](../interfaces/DeleteDevicePreviewShareLinkResult.md)\>

Revoke a device preview share link

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteDevicePreviewShareLinkRequest`](../interfaces/DeleteDevicePreviewShareLinkRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`DeleteDevicePreviewShareLinkResult`](../interfaces/DeleteDevicePreviewShareLinkResult.md)\>

___

### deleteDevicePreviewShareLinkRaw

▸ **deleteDevicePreviewShareLinkRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DeleteDevicePreviewShareLinkResult`](../interfaces/DeleteDevicePreviewShareLinkResult.md)\>\>

Revoke a device preview share link

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteDevicePreviewShareLinkRequest`](../interfaces/DeleteDevicePreviewShareLinkRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DeleteDevicePreviewShareLinkResult`](../interfaces/DeleteDevicePreviewShareLinkResult.md)\>\>

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

### getDevicePreviewEmailDomainOrCreate

▸ **getDevicePreviewEmailDomainOrCreate**(`initOverrides?`): `Promise`<[`DevicePreviewAccountSettingsDto`](../interfaces/DevicePreviewAccountSettingsDto.md)\>

Return account device preview email domain setup or create one

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`DevicePreviewAccountSettingsDto`](../interfaces/DevicePreviewAccountSettingsDto.md)\>

___

### getDevicePreviewEmailDomainOrCreateRaw

▸ **getDevicePreviewEmailDomainOrCreateRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DevicePreviewAccountSettingsDto`](../interfaces/DevicePreviewAccountSettingsDto.md)\>\>

Return account device preview email domain setup or create one

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DevicePreviewAccountSettingsDto`](../interfaces/DevicePreviewAccountSettingsDto.md)\>\>

___

### getDevicePreviewEmailRuns

▸ **getDevicePreviewEmailRuns**(`requestParameters`, `initOverrides?`): `Promise`<[`DevicePreviewRunDto`](../interfaces/DevicePreviewRunDto.md)[]\>

List device preview runs created from account email domains

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDevicePreviewEmailRunsRequest`](../interfaces/GetDevicePreviewEmailRunsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`DevicePreviewRunDto`](../interfaces/DevicePreviewRunDto.md)[]\>

___

### getDevicePreviewEmailRunsRaw

▸ **getDevicePreviewEmailRunsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DevicePreviewRunDto`](../interfaces/DevicePreviewRunDto.md)[]\>\>

List device preview runs created from account email domains

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDevicePreviewEmailRunsRequest`](../interfaces/GetDevicePreviewEmailRunsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DevicePreviewRunDto`](../interfaces/DevicePreviewRunDto.md)[]\>\>

___

### getDevicePreviewEmailSubmissions

▸ **getDevicePreviewEmailSubmissions**(`requestParameters`, `initOverrides?`): `Promise`<[`DevicePreviewEmailSubmissionDto`](../interfaces/DevicePreviewEmailSubmissionDto.md)[]\>

List received device preview email submissions

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDevicePreviewEmailSubmissionsRequest`](../interfaces/GetDevicePreviewEmailSubmissionsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`DevicePreviewEmailSubmissionDto`](../interfaces/DevicePreviewEmailSubmissionDto.md)[]\>

___

### getDevicePreviewEmailSubmissionsRaw

▸ **getDevicePreviewEmailSubmissionsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DevicePreviewEmailSubmissionDto`](../interfaces/DevicePreviewEmailSubmissionDto.md)[]\>\>

List received device preview email submissions

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDevicePreviewEmailSubmissionsRequest`](../interfaces/GetDevicePreviewEmailSubmissionsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DevicePreviewEmailSubmissionDto`](../interfaces/DevicePreviewEmailSubmissionDto.md)[]\>\>

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

### getDevicePreviewImportAddress

▸ **getDevicePreviewImportAddress**(`requestParameters`, `initOverrides?`): `Promise`<[`DevicePreviewIngestAddressDto`](../interfaces/DevicePreviewIngestAddressDto.md)\>

Get temporary device preview import address status

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDevicePreviewImportAddressRequest`](../interfaces/GetDevicePreviewImportAddressRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`DevicePreviewIngestAddressDto`](../interfaces/DevicePreviewIngestAddressDto.md)\>

___

### getDevicePreviewImportAddressRaw

▸ **getDevicePreviewImportAddressRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DevicePreviewIngestAddressDto`](../interfaces/DevicePreviewIngestAddressDto.md)\>\>

Get temporary device preview import address status

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDevicePreviewImportAddressRequest`](../interfaces/GetDevicePreviewImportAddressRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DevicePreviewIngestAddressDto`](../interfaces/DevicePreviewIngestAddressDto.md)\>\>

___

### getDevicePreviewNativeTargetAvailability

▸ **getDevicePreviewNativeTargetAvailability**(`initOverrides?`): `Promise`<[`DevicePreviewNativeTargetAvailabilityListDto`](../interfaces/DevicePreviewNativeTargetAvailabilityListDto.md)\>

Get native device preview target availability

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`DevicePreviewNativeTargetAvailabilityListDto`](../interfaces/DevicePreviewNativeTargetAvailabilityListDto.md)\>

___

### getDevicePreviewNativeTargetAvailabilityRaw

▸ **getDevicePreviewNativeTargetAvailabilityRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DevicePreviewNativeTargetAvailabilityListDto`](../interfaces/DevicePreviewNativeTargetAvailabilityListDto.md)\>\>

Get native device preview target availability

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DevicePreviewNativeTargetAvailabilityListDto`](../interfaces/DevicePreviewNativeTargetAvailabilityListDto.md)\>\>

___

### getDevicePreviewProfile

▸ **getDevicePreviewProfile**(`requestParameters`, `initOverrides?`): `Promise`<[`DevicePreviewProfileDto`](../interfaces/DevicePreviewProfileDto.md)\>

Get a device preview profile

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDevicePreviewProfileRequest`](../interfaces/GetDevicePreviewProfileRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`DevicePreviewProfileDto`](../interfaces/DevicePreviewProfileDto.md)\>

___

### getDevicePreviewProfileRaw

▸ **getDevicePreviewProfileRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DevicePreviewProfileDto`](../interfaces/DevicePreviewProfileDto.md)\>\>

Get a device preview profile

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDevicePreviewProfileRequest`](../interfaces/GetDevicePreviewProfileRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DevicePreviewProfileDto`](../interfaces/DevicePreviewProfileDto.md)\>\>

___

### getDevicePreviewProfiles

▸ **getDevicePreviewProfiles**(`initOverrides?`): `Promise`<[`DevicePreviewProfileDto`](../interfaces/DevicePreviewProfileDto.md)[]\>

List device preview profiles

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`DevicePreviewProfileDto`](../interfaces/DevicePreviewProfileDto.md)[]\>

___

### getDevicePreviewProfilesRaw

▸ **getDevicePreviewProfilesRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DevicePreviewProfileDto`](../interfaces/DevicePreviewProfileDto.md)[]\>\>

List device preview profiles

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DevicePreviewProfileDto`](../interfaces/DevicePreviewProfileDto.md)[]\>\>

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

Get a device preview screenshot image

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

Get a device preview screenshot image

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

### getDevicePreviewRunsForAccountOffsetPaginated

▸ **getDevicePreviewRunsForAccountOffsetPaginated**(`requestParameters`, `initOverrides?`): `Promise`<[`PageDevicePreviewRunProjection`](../interfaces/PageDevicePreviewRunProjection.md)\>

List previous device preview runs for account in paginated form

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDevicePreviewRunsForAccountOffsetPaginatedRequest`](../interfaces/GetDevicePreviewRunsForAccountOffsetPaginatedRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageDevicePreviewRunProjection`](../interfaces/PageDevicePreviewRunProjection.md)\>

___

### getDevicePreviewRunsForAccountOffsetPaginatedRaw

▸ **getDevicePreviewRunsForAccountOffsetPaginatedRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageDevicePreviewRunProjection`](../interfaces/PageDevicePreviewRunProjection.md)\>\>

List previous device preview runs for account in paginated form

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDevicePreviewRunsForAccountOffsetPaginatedRequest`](../interfaces/GetDevicePreviewRunsForAccountOffsetPaginatedRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageDevicePreviewRunProjection`](../interfaces/PageDevicePreviewRunProjection.md)\>\>

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

### getDevicePreviewShareLinks

▸ **getDevicePreviewShareLinks**(`requestParameters`, `initOverrides?`): `Promise`<[`DevicePreviewShareLinkDto`](../interfaces/DevicePreviewShareLinkDto.md)[]\>

List share links for a device preview run

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDevicePreviewShareLinksRequest`](../interfaces/GetDevicePreviewShareLinksRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`DevicePreviewShareLinkDto`](../interfaces/DevicePreviewShareLinkDto.md)[]\>

___

### getDevicePreviewShareLinksRaw

▸ **getDevicePreviewShareLinksRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DevicePreviewShareLinkDto`](../interfaces/DevicePreviewShareLinkDto.md)[]\>\>

List share links for a device preview run

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDevicePreviewShareLinksRequest`](../interfaces/GetDevicePreviewShareLinksRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DevicePreviewShareLinkDto`](../interfaces/DevicePreviewShareLinkDto.md)[]\>\>

___

### getDevicePreviewSharedResult

▸ **getDevicePreviewSharedResult**(`requestParameters`, `initOverrides?`): `Promise`<[`DevicePreviewSharedResultDto`](../interfaces/DevicePreviewSharedResultDto.md)\>

Get a public shared device preview result

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDevicePreviewSharedResultRequest`](../interfaces/GetDevicePreviewSharedResultRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`DevicePreviewSharedResultDto`](../interfaces/DevicePreviewSharedResultDto.md)\>

___

### getDevicePreviewSharedResultRaw

▸ **getDevicePreviewSharedResultRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DevicePreviewSharedResultDto`](../interfaces/DevicePreviewSharedResultDto.md)\>\>

Get a public shared device preview result

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDevicePreviewSharedResultRequest`](../interfaces/GetDevicePreviewSharedResultRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DevicePreviewSharedResultDto`](../interfaces/DevicePreviewSharedResultDto.md)\>\>

___

### getDevicePreviewSharedResultScreenshot

▸ **getDevicePreviewSharedResultScreenshot**(`requestParameters`, `initOverrides?`): `Promise`<`string`\>

Get a public shared device preview screenshot image

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDevicePreviewSharedResultScreenshotRequest`](../interfaces/GetDevicePreviewSharedResultScreenshotRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`string`\>

___

### getDevicePreviewSharedResultScreenshotRaw

▸ **getDevicePreviewSharedResultScreenshotRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`string`\>\>

Get a public shared device preview screenshot image

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDevicePreviewSharedResultScreenshotRequest`](../interfaces/GetDevicePreviewSharedResultScreenshotRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`string`\>\>

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

### rerunDevicePreviewTargets

▸ **rerunDevicePreviewTargets**(`requestParameters`, `initOverrides?`): `Promise`<[`RerunDevicePreviewTargetsResult`](../interfaces/RerunDevicePreviewTargetsResult.md)\>

Rerun selected failed device preview targets in the same run

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`RerunDevicePreviewTargetsRequest`](../interfaces/RerunDevicePreviewTargetsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`RerunDevicePreviewTargetsResult`](../interfaces/RerunDevicePreviewTargetsResult.md)\>

___

### rerunDevicePreviewTargetsRaw

▸ **rerunDevicePreviewTargetsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`RerunDevicePreviewTargetsResult`](../interfaces/RerunDevicePreviewTargetsResult.md)\>\>

Rerun selected failed device preview targets in the same run

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`RerunDevicePreviewTargetsRequest`](../interfaces/RerunDevicePreviewTargetsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`RerunDevicePreviewTargetsResult`](../interfaces/RerunDevicePreviewTargetsResult.md)\>\>

___

### updateDevicePreviewEmailDomainSubdomain

▸ **updateDevicePreviewEmailDomainSubdomain**(`requestParameters`, `initOverrides?`): `Promise`<[`DevicePreviewAccountSettingsDto`](../interfaces/DevicePreviewAccountSettingsDto.md)\>

Update account device preview email subdomain

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateDevicePreviewEmailDomainSubdomainRequest`](../interfaces/UpdateDevicePreviewEmailDomainSubdomainRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`DevicePreviewAccountSettingsDto`](../interfaces/DevicePreviewAccountSettingsDto.md)\>

___

### updateDevicePreviewEmailDomainSubdomainRaw

▸ **updateDevicePreviewEmailDomainSubdomainRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DevicePreviewAccountSettingsDto`](../interfaces/DevicePreviewAccountSettingsDto.md)\>\>

Update account device preview email subdomain

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateDevicePreviewEmailDomainSubdomainRequest`](../interfaces/UpdateDevicePreviewEmailDomainSubdomainRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DevicePreviewAccountSettingsDto`](../interfaces/DevicePreviewAccountSettingsDto.md)\>\>

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

### updateDevicePreviewProfile

▸ **updateDevicePreviewProfile**(`requestParameters`, `initOverrides?`): `Promise`<[`DevicePreviewProfileDto`](../interfaces/DevicePreviewProfileDto.md)\>

Update a device preview profile

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateDevicePreviewProfileRequest`](../interfaces/UpdateDevicePreviewProfileRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`DevicePreviewProfileDto`](../interfaces/DevicePreviewProfileDto.md)\>

___

### updateDevicePreviewProfileRaw

▸ **updateDevicePreviewProfileRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DevicePreviewProfileDto`](../interfaces/DevicePreviewProfileDto.md)\>\>

Update a device preview profile

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateDevicePreviewProfileRequest`](../interfaces/UpdateDevicePreviewProfileRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DevicePreviewProfileDto`](../interfaces/DevicePreviewProfileDto.md)\>\>

___

### waitForDevicePreviewEmailRuns

▸ **waitForDevicePreviewEmailRuns**(`requestParameters`, `initOverrides?`): `Promise`<[`DevicePreviewIngestRunWaitResult`](../interfaces/DevicePreviewIngestRunWaitResult.md)\>

Wait for device preview runs created from account email domains

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`WaitForDevicePreviewEmailRunsRequest`](../interfaces/WaitForDevicePreviewEmailRunsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`DevicePreviewIngestRunWaitResult`](../interfaces/DevicePreviewIngestRunWaitResult.md)\>

___

### waitForDevicePreviewEmailRunsRaw

▸ **waitForDevicePreviewEmailRunsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DevicePreviewIngestRunWaitResult`](../interfaces/DevicePreviewIngestRunWaitResult.md)\>\>

Wait for device preview runs created from account email domains

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`WaitForDevicePreviewEmailRunsRequest`](../interfaces/WaitForDevicePreviewEmailRunsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DevicePreviewIngestRunWaitResult`](../interfaces/DevicePreviewIngestRunWaitResult.md)\>\>

___

### waitForDevicePreviewEmailSubmissions

▸ **waitForDevicePreviewEmailSubmissions**(`requestParameters`, `initOverrides?`): `Promise`<[`DevicePreviewEmailSubmissionWaitResult`](../interfaces/DevicePreviewEmailSubmissionWaitResult.md)\>

Wait for received device preview email submissions

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`WaitForDevicePreviewEmailSubmissionsRequest`](../interfaces/WaitForDevicePreviewEmailSubmissionsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`DevicePreviewEmailSubmissionWaitResult`](../interfaces/DevicePreviewEmailSubmissionWaitResult.md)\>

___

### waitForDevicePreviewEmailSubmissionsRaw

▸ **waitForDevicePreviewEmailSubmissionsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DevicePreviewEmailSubmissionWaitResult`](../interfaces/DevicePreviewEmailSubmissionWaitResult.md)\>\>

Wait for received device preview email submissions

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`WaitForDevicePreviewEmailSubmissionsRequest`](../interfaces/WaitForDevicePreviewEmailSubmissionsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DevicePreviewEmailSubmissionWaitResult`](../interfaces/DevicePreviewEmailSubmissionWaitResult.md)\>\>

___

### waitForDevicePreviewRun

▸ **waitForDevicePreviewRun**(`requestParameters`, `initOverrides?`): `Promise`<[`DevicePreviewRunWaitResult`](../interfaces/DevicePreviewRunWaitResult.md)\>

Wait for device preview run to complete

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`WaitForDevicePreviewRunRequest`](../interfaces/WaitForDevicePreviewRunRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`DevicePreviewRunWaitResult`](../interfaces/DevicePreviewRunWaitResult.md)\>

___

### waitForDevicePreviewRunRaw

▸ **waitForDevicePreviewRunRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DevicePreviewRunWaitResult`](../interfaces/DevicePreviewRunWaitResult.md)\>\>

Wait for device preview run to complete

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`WaitForDevicePreviewRunRequest`](../interfaces/WaitForDevicePreviewRunRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DevicePreviewRunWaitResult`](../interfaces/DevicePreviewRunWaitResult.md)\>\>

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
