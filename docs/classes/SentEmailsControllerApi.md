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

- [getAllSentTrackingPixels](SentEmailsControllerApi.md#getallsenttrackingpixels)
- [getAllSentTrackingPixelsRaw](SentEmailsControllerApi.md#getallsenttrackingpixelsraw)
- [getSentEmail](SentEmailsControllerApi.md#getsentemail)
- [getSentEmailHTMLContent](SentEmailsControllerApi.md#getsentemailhtmlcontent)
- [getSentEmailHTMLContentRaw](SentEmailsControllerApi.md#getsentemailhtmlcontentraw)
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
