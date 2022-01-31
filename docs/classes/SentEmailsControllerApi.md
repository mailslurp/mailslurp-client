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
- [getSentOrganizationEmails](SentEmailsControllerApi.md#getsentorganizationemails)
- [getSentOrganizationEmailsRaw](SentEmailsControllerApi.md#getsentorganizationemailsraw)
- [request](SentEmailsControllerApi.md#request)
- [withMiddleware](SentEmailsControllerApi.md#withmiddleware)
- [withPostMiddleware](SentEmailsControllerApi.md#withpostmiddleware)
- [withPreMiddleware](SentEmailsControllerApi.md#withpremiddleware)

## Constructors

### constructor

• **new SentEmailsControllerApi**(`configuration?`)

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

### deleteAllSentEmails

▸ **deleteAllSentEmails**(`initOverrides?`): `Promise`<`void`\>

Delete all sent email receipts

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### deleteAllSentEmailsRaw

▸ **deleteAllSentEmailsRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Delete all sent email receipts

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### deleteSentEmail

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

### deleteSentEmailRaw

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

### getAllSentTrackingPixels

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

### getAllSentTrackingPixelsRaw

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

### getRawSentEmailContents

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

### getRawSentEmailContentsRaw

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

### getRawSentEmailJson

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

### getRawSentEmailJsonRaw

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

### getSentEmail

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

### getSentEmailHTMLContent

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

### getSentEmailHTMLContentRaw

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

### getSentEmailPreviewURLs

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

### getSentEmailPreviewURLsRaw

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

### getSentEmailRaw

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

### getSentEmailTrackingPixels

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

### getSentEmailTrackingPixelsRaw

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

### getSentEmails

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

### getSentEmailsRaw

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

### getSentOrganizationEmails

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

### getSentOrganizationEmailsRaw

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

▸ **withMiddleware**<`T`\>(...`middlewares`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseAPI`](BaseAPI.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...middlewares` | [`Middleware`](../interfaces/Middleware.md)[] |

#### Returns

`T`

#### Inherited from

[BaseAPI](BaseAPI.md).[withMiddleware](BaseAPI.md#withmiddleware)

___

### withPostMiddleware

▸ **withPostMiddleware**<`T`\>(...`postMiddlewares`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseAPI`](BaseAPI.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...postMiddlewares` | (`context`: [`ResponseContext`](../interfaces/ResponseContext.md)) => `Promise`<`void` \| `Response`\>[] |

#### Returns

`T`

#### Inherited from

[BaseAPI](BaseAPI.md).[withPostMiddleware](BaseAPI.md#withpostmiddleware)

___

### withPreMiddleware

▸ **withPreMiddleware**<`T`\>(...`preMiddlewares`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseAPI`](BaseAPI.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...preMiddlewares` | (`context`: [`RequestContext`](../interfaces/RequestContext.md)) => `Promise`<`void` \| [`FetchParams`](../interfaces/FetchParams.md)\>[] |

#### Returns

`T`

#### Inherited from

[BaseAPI](BaseAPI.md).[withPreMiddleware](BaseAPI.md#withpremiddleware)
