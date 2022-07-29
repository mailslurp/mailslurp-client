# Class: SentEmailsControllerApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`SentEmailsControllerApi`**

## Table of contents

### Constructors

- [constructor](SentEmailsControllerApi.md#constructor)

### Properties

- [configuration](SentEmailsControllerApi.md#configuration)

### Methods

- [deleteAllSentEmails](SentEmailsControllerApi.md#deleteallsentemails)
- [deleteAllSentEmailsRaw](SentEmailsControllerApi.md#deleteallsentemailsraw)
- [deleteSentEmail](SentEmailsControllerApi.md#deletesentemail)
- [deleteSentEmailRaw](SentEmailsControllerApi.md#deletesentemailraw)
- [getAllSentTrackingPixels](SentEmailsControllerApi.md#getallsenttrackingpixels)
- [getAllSentTrackingPixelsRaw](SentEmailsControllerApi.md#getallsenttrackingpixelsraw)
- [getRawSentEmailContents](SentEmailsControllerApi.md#getrawsentemailcontents)
- [getRawSentEmailContentsRaw](SentEmailsControllerApi.md#getrawsentemailcontentsraw)
- [getRawSentEmailJson](SentEmailsControllerApi.md#getrawsentemailjson)
- [getRawSentEmailJsonRaw](SentEmailsControllerApi.md#getrawsentemailjsonraw)
- [getSentDeliveryStatus](SentEmailsControllerApi.md#getsentdeliverystatus)
- [getSentDeliveryStatusRaw](SentEmailsControllerApi.md#getsentdeliverystatusraw)
- [getSentDeliveryStatuses](SentEmailsControllerApi.md#getsentdeliverystatuses)
- [getSentDeliveryStatusesBySentId](SentEmailsControllerApi.md#getsentdeliverystatusesbysentid)
- [getSentDeliveryStatusesBySentIdRaw](SentEmailsControllerApi.md#getsentdeliverystatusesbysentidraw)
- [getSentDeliveryStatusesRaw](SentEmailsControllerApi.md#getsentdeliverystatusesraw)
- [getSentEmail](SentEmailsControllerApi.md#getsentemail)
- [getSentEmailHTMLContent](SentEmailsControllerApi.md#getsentemailhtmlcontent)
- [getSentEmailHTMLContentRaw](SentEmailsControllerApi.md#getsentemailhtmlcontentraw)
- [getSentEmailPreviewURLs](SentEmailsControllerApi.md#getsentemailpreviewurls)
- [getSentEmailPreviewURLsRaw](SentEmailsControllerApi.md#getsentemailpreviewurlsraw)
- [getSentEmailRaw](SentEmailsControllerApi.md#getsentemailraw)
- [getSentEmailTrackingPixels](SentEmailsControllerApi.md#getsentemailtrackingpixels)
- [getSentEmailTrackingPixelsRaw](SentEmailsControllerApi.md#getsentemailtrackingpixelsraw)
- [getSentEmails](SentEmailsControllerApi.md#getsentemails)
- [getSentEmailsRaw](SentEmailsControllerApi.md#getsentemailsraw)
- [getSentEmailsWithQueueResults](SentEmailsControllerApi.md#getsentemailswithqueueresults)
- [getSentEmailsWithQueueResultsRaw](SentEmailsControllerApi.md#getsentemailswithqueueresultsraw)
- [getSentOrganizationEmails](SentEmailsControllerApi.md#getsentorganizationemails)
- [getSentOrganizationEmailsRaw](SentEmailsControllerApi.md#getsentorganizationemailsraw)
- [request](SentEmailsControllerApi.md#request)
- [waitForDeliveryStatuses](SentEmailsControllerApi.md#waitfordeliverystatuses)
- [waitForDeliveryStatusesRaw](SentEmailsControllerApi.md#waitfordeliverystatusesraw)
- [withMiddleware](SentEmailsControllerApi.md#withmiddleware)
- [withPostMiddleware](SentEmailsControllerApi.md#withpostmiddleware)
- [withPreMiddleware](SentEmailsControllerApi.md#withpremiddleware)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new SentEmailsControllerApi**(`configuration?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration` | [`Configuration`](Configuration.md) |

#### Inherited from

[BaseAPI](BaseAPI.md).[constructor](BaseAPI.md#constructor)

## Properties

### <a id="configuration" name="configuration"></a> configuration

• `Protected` **configuration**: [`Configuration`](Configuration.md)

#### Inherited from

[BaseAPI](BaseAPI.md).[configuration](BaseAPI.md#configuration)

## Methods

### <a id="deleteallsentemails" name="deleteallsentemails"></a> deleteAllSentEmails

▸ **deleteAllSentEmails**(`initOverrides?`): `Promise`<`void`\>

Delete all sent email receipts

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### <a id="deleteallsentemailsraw" name="deleteallsentemailsraw"></a> deleteAllSentEmailsRaw

▸ **deleteAllSentEmailsRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Delete all sent email receipts

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### <a id="deletesentemail" name="deletesentemail"></a> deleteSentEmail

▸ **deleteSentEmail**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

Delete sent email receipt

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteSentEmailRequest`](../interfaces/DeleteSentEmailRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### <a id="deletesentemailraw" name="deletesentemailraw"></a> deleteSentEmailRaw

▸ **deleteSentEmailRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Delete sent email receipt

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteSentEmailRequest`](../interfaces/DeleteSentEmailRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### <a id="getallsenttrackingpixels" name="getallsenttrackingpixels"></a> getAllSentTrackingPixels

▸ **getAllSentTrackingPixels**(`requestParameters`, `initOverrides?`): `Promise`<[`PageTrackingPixelProjection`](../interfaces/PageTrackingPixelProjection.md)\>

Get all sent email tracking pixels in paginated form

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAllSentTrackingPixelsRequest`](../interfaces/GetAllSentTrackingPixelsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageTrackingPixelProjection`](../interfaces/PageTrackingPixelProjection.md)\>

___

### <a id="getallsenttrackingpixelsraw" name="getallsenttrackingpixelsraw"></a> getAllSentTrackingPixelsRaw

▸ **getAllSentTrackingPixelsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageTrackingPixelProjection`](../interfaces/PageTrackingPixelProjection.md)\>\>

Get all sent email tracking pixels in paginated form

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAllSentTrackingPixelsRequest`](../interfaces/GetAllSentTrackingPixelsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageTrackingPixelProjection`](../interfaces/PageTrackingPixelProjection.md)\>\>

___

### <a id="getrawsentemailcontents" name="getrawsentemailcontents"></a> getRawSentEmailContents

▸ **getRawSentEmailContents**(`requestParameters`, `initOverrides?`): `Promise`<`string`\>

Returns a raw, unparsed, and unprocessed sent email. If your client has issues processing the response it is likely due to the response content-type which is text/plain. If you need a JSON response content-type use the getRawSentEmailJson endpoint
Get raw sent email string. Returns unparsed raw SMTP message with headers and body.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetRawSentEmailContentsRequest`](../interfaces/GetRawSentEmailContentsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`string`\>

___

### <a id="getrawsentemailcontentsraw" name="getrawsentemailcontentsraw"></a> getRawSentEmailContentsRaw

▸ **getRawSentEmailContentsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`string`\>\>

Returns a raw, unparsed, and unprocessed sent email. If your client has issues processing the response it is likely due to the response content-type which is text/plain. If you need a JSON response content-type use the getRawSentEmailJson endpoint
Get raw sent email string. Returns unparsed raw SMTP message with headers and body.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetRawSentEmailContentsRequest`](../interfaces/GetRawSentEmailContentsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`string`\>\>

___

### <a id="getrawsentemailjson" name="getrawsentemailjson"></a> getRawSentEmailJson

▸ **getRawSentEmailJson**(`requestParameters`, `initOverrides?`): `Promise`<[`RawEmailJson`](../interfaces/RawEmailJson.md)\>

Returns a raw, unparsed, and unprocessed sent email wrapped in a JSON response object for easier handling when compared with the getRawSentEmail text/plain response
Get raw sent email in JSON. Unparsed SMTP message in JSON wrapper format.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetRawSentEmailJsonRequest`](../interfaces/GetRawSentEmailJsonRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`RawEmailJson`](../interfaces/RawEmailJson.md)\>

___

### <a id="getrawsentemailjsonraw" name="getrawsentemailjsonraw"></a> getRawSentEmailJsonRaw

▸ **getRawSentEmailJsonRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`RawEmailJson`](../interfaces/RawEmailJson.md)\>\>

Returns a raw, unparsed, and unprocessed sent email wrapped in a JSON response object for easier handling when compared with the getRawSentEmail text/plain response
Get raw sent email in JSON. Unparsed SMTP message in JSON wrapper format.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetRawSentEmailJsonRequest`](../interfaces/GetRawSentEmailJsonRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`RawEmailJson`](../interfaces/RawEmailJson.md)\>\>

___

### <a id="getsentdeliverystatus" name="getsentdeliverystatus"></a> getSentDeliveryStatus

▸ **getSentDeliveryStatus**(`requestParameters`, `initOverrides?`): `Promise`<[`DeliveryStatusDto`](../interfaces/DeliveryStatusDto.md)\>

Get a sent email delivery status

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetSentDeliveryStatusRequest`](../interfaces/GetSentDeliveryStatusRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`DeliveryStatusDto`](../interfaces/DeliveryStatusDto.md)\>

___

### <a id="getsentdeliverystatusraw" name="getsentdeliverystatusraw"></a> getSentDeliveryStatusRaw

▸ **getSentDeliveryStatusRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DeliveryStatusDto`](../interfaces/DeliveryStatusDto.md)\>\>

Get a sent email delivery status

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetSentDeliveryStatusRequest`](../interfaces/GetSentDeliveryStatusRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DeliveryStatusDto`](../interfaces/DeliveryStatusDto.md)\>\>

___

### <a id="getsentdeliverystatuses" name="getsentdeliverystatuses"></a> getSentDeliveryStatuses

▸ **getSentDeliveryStatuses**(`requestParameters`, `initOverrides?`): `Promise`<[`PageDeliveryStatus`](../interfaces/PageDeliveryStatus.md)\>

Get all sent email delivery statuses

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetSentDeliveryStatusesRequest`](../interfaces/GetSentDeliveryStatusesRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageDeliveryStatus`](../interfaces/PageDeliveryStatus.md)\>

___

### <a id="getsentdeliverystatusesbysentid" name="getsentdeliverystatusesbysentid"></a> getSentDeliveryStatusesBySentId

▸ **getSentDeliveryStatusesBySentId**(`requestParameters`, `initOverrides?`): `Promise`<[`PageDeliveryStatus`](../interfaces/PageDeliveryStatus.md)\>

Get all sent email delivery statuses

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetSentDeliveryStatusesBySentIdRequest`](../interfaces/GetSentDeliveryStatusesBySentIdRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageDeliveryStatus`](../interfaces/PageDeliveryStatus.md)\>

___

### <a id="getsentdeliverystatusesbysentidraw" name="getsentdeliverystatusesbysentidraw"></a> getSentDeliveryStatusesBySentIdRaw

▸ **getSentDeliveryStatusesBySentIdRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageDeliveryStatus`](../interfaces/PageDeliveryStatus.md)\>\>

Get all sent email delivery statuses

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetSentDeliveryStatusesBySentIdRequest`](../interfaces/GetSentDeliveryStatusesBySentIdRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageDeliveryStatus`](../interfaces/PageDeliveryStatus.md)\>\>

___

### <a id="getsentdeliverystatusesraw" name="getsentdeliverystatusesraw"></a> getSentDeliveryStatusesRaw

▸ **getSentDeliveryStatusesRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageDeliveryStatus`](../interfaces/PageDeliveryStatus.md)\>\>

Get all sent email delivery statuses

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetSentDeliveryStatusesRequest`](../interfaces/GetSentDeliveryStatusesRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageDeliveryStatus`](../interfaces/PageDeliveryStatus.md)\>\>

___

### <a id="getsentemail" name="getsentemail"></a> getSentEmail

▸ **getSentEmail**(`requestParameters`, `initOverrides?`): `Promise`<[`SentEmailDto`](../interfaces/SentEmailDto.md)\>

Get sent email receipt

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetSentEmailRequest`](../interfaces/GetSentEmailRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`SentEmailDto`](../interfaces/SentEmailDto.md)\>

___

### <a id="getsentemailhtmlcontent" name="getsentemailhtmlcontent"></a> getSentEmailHTMLContent

▸ **getSentEmailHTMLContent**(`requestParameters`, `initOverrides?`): `Promise`<`string`\>

Get sent email HTML content

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetSentEmailHTMLContentRequest`](../interfaces/GetSentEmailHTMLContentRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`string`\>

___

### <a id="getsentemailhtmlcontentraw" name="getsentemailhtmlcontentraw"></a> getSentEmailHTMLContentRaw

▸ **getSentEmailHTMLContentRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`string`\>\>

Get sent email HTML content

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetSentEmailHTMLContentRequest`](../interfaces/GetSentEmailHTMLContentRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`string`\>\>

___

### <a id="getsentemailpreviewurls" name="getsentemailpreviewurls"></a> getSentEmailPreviewURLs

▸ **getSentEmailPreviewURLs**(`requestParameters`, `initOverrides?`): `Promise`<[`EmailPreviewUrls`](../interfaces/EmailPreviewUrls.md)\>

Get a list of URLs for sent email content as text/html or raw SMTP message for viewing the message in a browser.
Get sent email URL for viewing in browser or downloading

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetSentEmailPreviewURLsRequest`](../interfaces/GetSentEmailPreviewURLsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`EmailPreviewUrls`](../interfaces/EmailPreviewUrls.md)\>

___

### <a id="getsentemailpreviewurlsraw" name="getsentemailpreviewurlsraw"></a> getSentEmailPreviewURLsRaw

▸ **getSentEmailPreviewURLsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailPreviewUrls`](../interfaces/EmailPreviewUrls.md)\>\>

Get a list of URLs for sent email content as text/html or raw SMTP message for viewing the message in a browser.
Get sent email URL for viewing in browser or downloading

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetSentEmailPreviewURLsRequest`](../interfaces/GetSentEmailPreviewURLsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailPreviewUrls`](../interfaces/EmailPreviewUrls.md)\>\>

___

### <a id="getsentemailraw" name="getsentemailraw"></a> getSentEmailRaw

▸ **getSentEmailRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SentEmailDto`](../interfaces/SentEmailDto.md)\>\>

Get sent email receipt

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetSentEmailRequest`](../interfaces/GetSentEmailRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SentEmailDto`](../interfaces/SentEmailDto.md)\>\>

___

### <a id="getsentemailtrackingpixels" name="getsentemailtrackingpixels"></a> getSentEmailTrackingPixels

▸ **getSentEmailTrackingPixels**(`requestParameters`, `initOverrides?`): `Promise`<[`PageTrackingPixelProjection`](../interfaces/PageTrackingPixelProjection.md)\>

Get all tracking pixels for a sent email in paginated form

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetSentEmailTrackingPixelsRequest`](../interfaces/GetSentEmailTrackingPixelsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageTrackingPixelProjection`](../interfaces/PageTrackingPixelProjection.md)\>

___

### <a id="getsentemailtrackingpixelsraw" name="getsentemailtrackingpixelsraw"></a> getSentEmailTrackingPixelsRaw

▸ **getSentEmailTrackingPixelsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageTrackingPixelProjection`](../interfaces/PageTrackingPixelProjection.md)\>\>

Get all tracking pixels for a sent email in paginated form

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetSentEmailTrackingPixelsRequest`](../interfaces/GetSentEmailTrackingPixelsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageTrackingPixelProjection`](../interfaces/PageTrackingPixelProjection.md)\>\>

___

### <a id="getsentemails" name="getsentemails"></a> getSentEmails

▸ **getSentEmails**(`requestParameters`, `initOverrides?`): `Promise`<[`PageSentEmailProjection`](../interfaces/PageSentEmailProjection.md)\>

Get all sent emails in paginated form

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetSentEmailsRequest`](../interfaces/GetSentEmailsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageSentEmailProjection`](../interfaces/PageSentEmailProjection.md)\>

___

### <a id="getsentemailsraw" name="getsentemailsraw"></a> getSentEmailsRaw

▸ **getSentEmailsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageSentEmailProjection`](../interfaces/PageSentEmailProjection.md)\>\>

Get all sent emails in paginated form

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetSentEmailsRequest`](../interfaces/GetSentEmailsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageSentEmailProjection`](../interfaces/PageSentEmailProjection.md)\>\>

___

### <a id="getsentemailswithqueueresults" name="getsentemailswithqueueresults"></a> getSentEmailsWithQueueResults

▸ **getSentEmailsWithQueueResults**(`requestParameters`, `initOverrides?`): `Promise`<[`PageSentEmailWithQueueProjection`](../interfaces/PageSentEmailWithQueueProjection.md)\>

Get results of email sent with queues in paginated form

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetSentEmailsWithQueueResultsRequest`](../interfaces/GetSentEmailsWithQueueResultsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageSentEmailWithQueueProjection`](../interfaces/PageSentEmailWithQueueProjection.md)\>

___

### <a id="getsentemailswithqueueresultsraw" name="getsentemailswithqueueresultsraw"></a> getSentEmailsWithQueueResultsRaw

▸ **getSentEmailsWithQueueResultsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageSentEmailWithQueueProjection`](../interfaces/PageSentEmailWithQueueProjection.md)\>\>

Get results of email sent with queues in paginated form

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetSentEmailsWithQueueResultsRequest`](../interfaces/GetSentEmailsWithQueueResultsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageSentEmailWithQueueProjection`](../interfaces/PageSentEmailWithQueueProjection.md)\>\>

___

### <a id="getsentorganizationemails" name="getsentorganizationemails"></a> getSentOrganizationEmails

▸ **getSentOrganizationEmails**(`requestParameters`, `initOverrides?`): `Promise`<[`PageSentEmailProjection`](../interfaces/PageSentEmailProjection.md)\>

Get all sent organization emails in paginated form

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetSentOrganizationEmailsRequest`](../interfaces/GetSentOrganizationEmailsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageSentEmailProjection`](../interfaces/PageSentEmailProjection.md)\>

___

### <a id="getsentorganizationemailsraw" name="getsentorganizationemailsraw"></a> getSentOrganizationEmailsRaw

▸ **getSentOrganizationEmailsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageSentEmailProjection`](../interfaces/PageSentEmailProjection.md)\>\>

Get all sent organization emails in paginated form

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetSentOrganizationEmailsRequest`](../interfaces/GetSentOrganizationEmailsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageSentEmailProjection`](../interfaces/PageSentEmailProjection.md)\>\>

___

### <a id="request" name="request"></a> request

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

### <a id="waitfordeliverystatuses" name="waitfordeliverystatuses"></a> waitForDeliveryStatuses

▸ **waitForDeliveryStatuses**(`requestParameters`, `initOverrides?`): `Promise`<[`DeliveryStatusDto`](../interfaces/DeliveryStatusDto.md)\>

Wait for delivery statuses

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`WaitForDeliveryStatusesRequest`](../interfaces/WaitForDeliveryStatusesRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`DeliveryStatusDto`](../interfaces/DeliveryStatusDto.md)\>

___

### <a id="waitfordeliverystatusesraw" name="waitfordeliverystatusesraw"></a> waitForDeliveryStatusesRaw

▸ **waitForDeliveryStatusesRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DeliveryStatusDto`](../interfaces/DeliveryStatusDto.md)\>\>

Wait for delivery statuses

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`WaitForDeliveryStatusesRequest`](../interfaces/WaitForDeliveryStatusesRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DeliveryStatusDto`](../interfaces/DeliveryStatusDto.md)\>\>

___

### <a id="withmiddleware" name="withmiddleware"></a> withMiddleware

▸ **withMiddleware**<`T`\>(`this`, ...`middlewares`): `T`

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

### <a id="withpostmiddleware" name="withpostmiddleware"></a> withPostMiddleware

▸ **withPostMiddleware**<`T`\>(`this`, ...`postMiddlewares`): `T`

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

### <a id="withpremiddleware" name="withpremiddleware"></a> withPreMiddleware

▸ **withPreMiddleware**<`T`\>(`this`, ...`preMiddlewares`): `T`

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
