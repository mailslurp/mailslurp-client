[MailSlurp JS](../README.md) / AttachmentControllerApi

# Class: AttachmentControllerApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`AttachmentControllerApi`**

## Table of contents

### Constructors

- [constructor](AttachmentControllerApi.md#constructor)

### Properties

- [configuration](AttachmentControllerApi.md#configuration)

### Methods

- [deleteAllAttachments](AttachmentControllerApi.md#deleteallattachments)
- [deleteAllAttachmentsRaw](AttachmentControllerApi.md#deleteallattachmentsraw)
- [deleteAttachment](AttachmentControllerApi.md#deleteattachment)
- [deleteAttachmentRaw](AttachmentControllerApi.md#deleteattachmentraw)
- [downloadAttachmentAsBase64Encoded](AttachmentControllerApi.md#downloadattachmentasbase64encoded)
- [downloadAttachmentAsBase64EncodedRaw](AttachmentControllerApi.md#downloadattachmentasbase64encodedraw)
- [downloadAttachmentAsBytes](AttachmentControllerApi.md#downloadattachmentasbytes)
- [downloadAttachmentAsBytesRaw](AttachmentControllerApi.md#downloadattachmentasbytesraw)
- [getAttachment](AttachmentControllerApi.md#getattachment)
- [getAttachmentInfo](AttachmentControllerApi.md#getattachmentinfo)
- [getAttachmentInfoRaw](AttachmentControllerApi.md#getattachmentinforaw)
- [getAttachmentRaw](AttachmentControllerApi.md#getattachmentraw)
- [getAttachments](AttachmentControllerApi.md#getattachments)
- [getAttachmentsRaw](AttachmentControllerApi.md#getattachmentsraw)
- [request](AttachmentControllerApi.md#request)
- [uploadAttachment](AttachmentControllerApi.md#uploadattachment)
- [uploadAttachmentBytes](AttachmentControllerApi.md#uploadattachmentbytes)
- [uploadAttachmentBytesRaw](AttachmentControllerApi.md#uploadattachmentbytesraw)
- [uploadAttachmentRaw](AttachmentControllerApi.md#uploadattachmentraw)
- [uploadMultipartForm](AttachmentControllerApi.md#uploadmultipartform)
- [uploadMultipartFormRaw](AttachmentControllerApi.md#uploadmultipartformraw)
- [withMiddleware](AttachmentControllerApi.md#withmiddleware)
- [withPostMiddleware](AttachmentControllerApi.md#withpostmiddleware)
- [withPreMiddleware](AttachmentControllerApi.md#withpremiddleware)

## Constructors

### constructor

• **new AttachmentControllerApi**(`configuration?`)

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

### deleteAllAttachments

▸ **deleteAllAttachments**(`initOverrides?`): `Promise`<`void`\>

Delete all attachments

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### deleteAllAttachmentsRaw

▸ **deleteAllAttachmentsRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Delete all attachments

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### deleteAttachment

▸ **deleteAttachment**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

Delete an attachment

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteAttachmentRequest`](../interfaces/DeleteAttachmentRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### deleteAttachmentRaw

▸ **deleteAttachmentRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Delete an attachment

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteAttachmentRequest`](../interfaces/DeleteAttachmentRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### downloadAttachmentAsBase64Encoded

▸ **downloadAttachmentAsBase64Encoded**(`requestParameters`, `initOverrides?`): `Promise`<[`DownloadAttachmentDto`](../interfaces/DownloadAttachmentDto.md)\>

Returns the specified attachment for a given email as a base 64 encoded string. The response type is application/json. This method is similar to the `downloadAttachment` method but allows some clients to get around issues with binary responses.
Get email attachment as base64 encoded string as alternative to binary responses. To read the content decode the Base64 encoded contents.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DownloadAttachmentAsBase64EncodedRequest`](../interfaces/DownloadAttachmentAsBase64EncodedRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`DownloadAttachmentDto`](../interfaces/DownloadAttachmentDto.md)\>

___

### downloadAttachmentAsBase64EncodedRaw

▸ **downloadAttachmentAsBase64EncodedRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DownloadAttachmentDto`](../interfaces/DownloadAttachmentDto.md)\>\>

Returns the specified attachment for a given email as a base 64 encoded string. The response type is application/json. This method is similar to the `downloadAttachment` method but allows some clients to get around issues with binary responses.
Get email attachment as base64 encoded string as alternative to binary responses. To read the content decode the Base64 encoded contents.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DownloadAttachmentAsBase64EncodedRequest`](../interfaces/DownloadAttachmentAsBase64EncodedRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DownloadAttachmentDto`](../interfaces/DownloadAttachmentDto.md)\>\>

___

### downloadAttachmentAsBytes

▸ **downloadAttachmentAsBytes**(`requestParameters`, `initOverrides?`): `Promise`<`string`\>

Returns the specified attachment for a given email as a stream / array of bytes. You can find attachment ids in email responses endpoint responses. The response type is application/octet-stream.
Download attachments. Get email attachment bytes. If you have trouble with byte responses try the `downloadAttachmentBase64` response endpoints.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DownloadAttachmentAsBytesRequest`](../interfaces/DownloadAttachmentAsBytesRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`string`\>

___

### downloadAttachmentAsBytesRaw

▸ **downloadAttachmentAsBytesRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`string`\>\>

Returns the specified attachment for a given email as a stream / array of bytes. You can find attachment ids in email responses endpoint responses. The response type is application/octet-stream.
Download attachments. Get email attachment bytes. If you have trouble with byte responses try the `downloadAttachmentBase64` response endpoints.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DownloadAttachmentAsBytesRequest`](../interfaces/DownloadAttachmentAsBytesRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`string`\>\>

___

### getAttachment

▸ **getAttachment**(`requestParameters`, `initOverrides?`): `Promise`<[`AttachmentEntity`](../interfaces/AttachmentEntity.md)\>

Get an attachment entity

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAttachmentRequest`](../interfaces/GetAttachmentRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`AttachmentEntity`](../interfaces/AttachmentEntity.md)\>

___

### getAttachmentInfo

▸ **getAttachmentInfo**(`requestParameters`, `initOverrides?`): `Promise`<[`AttachmentMetaData`](../interfaces/AttachmentMetaData.md)\>

Returns the metadata for an attachment. It is saved separately to the content of the attachment. Contains properties `name` and `content-type` and `content-length` in bytes for a given attachment.
Get email attachment metadata information

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAttachmentInfoRequest`](../interfaces/GetAttachmentInfoRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`AttachmentMetaData`](../interfaces/AttachmentMetaData.md)\>

___

### getAttachmentInfoRaw

▸ **getAttachmentInfoRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AttachmentMetaData`](../interfaces/AttachmentMetaData.md)\>\>

Returns the metadata for an attachment. It is saved separately to the content of the attachment. Contains properties `name` and `content-type` and `content-length` in bytes for a given attachment.
Get email attachment metadata information

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAttachmentInfoRequest`](../interfaces/GetAttachmentInfoRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AttachmentMetaData`](../interfaces/AttachmentMetaData.md)\>\>

___

### getAttachmentRaw

▸ **getAttachmentRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AttachmentEntity`](../interfaces/AttachmentEntity.md)\>\>

Get an attachment entity

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAttachmentRequest`](../interfaces/GetAttachmentRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AttachmentEntity`](../interfaces/AttachmentEntity.md)\>\>

___

### getAttachments

▸ **getAttachments**(`requestParameters`, `initOverrides?`): `Promise`<[`PageAttachmentEntity`](../interfaces/PageAttachmentEntity.md)\>

Get all attachments in paginated response. Each entity contains meta data for the attachment such as `name` and `content-type`. Use the `attachmentId` and the download endpoints to get the file contents.
Get email attachments

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAttachmentsRequest`](../interfaces/GetAttachmentsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageAttachmentEntity`](../interfaces/PageAttachmentEntity.md)\>

___

### getAttachmentsRaw

▸ **getAttachmentsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageAttachmentEntity`](../interfaces/PageAttachmentEntity.md)\>\>

Get all attachments in paginated response. Each entity contains meta data for the attachment such as `name` and `content-type`. Use the `attachmentId` and the download endpoints to get the file contents.
Get email attachments

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAttachmentsRequest`](../interfaces/GetAttachmentsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageAttachmentEntity`](../interfaces/PageAttachmentEntity.md)\>\>

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

### uploadAttachment

▸ **uploadAttachment**(`requestParameters`, `initOverrides?`): `Promise`<`string`[]\>

Upload an attachment for sending using base64 file encoding. Returns an array whose first element is the ID of the uploaded attachment.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UploadAttachmentRequest`](../interfaces/UploadAttachmentRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`string`[]\>

___

### uploadAttachmentBytes

▸ **uploadAttachmentBytes**(`requestParameters`, `initOverrides?`): `Promise`<`string`[]\>

Upload an attachment for sending using file byte stream input octet stream. Returns an array whose first element is the ID of the uploaded attachment.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UploadAttachmentBytesRequest`](../interfaces/UploadAttachmentBytesRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`string`[]\>

___

### uploadAttachmentBytesRaw

▸ **uploadAttachmentBytesRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`string`[]\>\>

Upload an attachment for sending using file byte stream input octet stream. Returns an array whose first element is the ID of the uploaded attachment.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UploadAttachmentBytesRequest`](../interfaces/UploadAttachmentBytesRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`string`[]\>\>

___

### uploadAttachmentRaw

▸ **uploadAttachmentRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`string`[]\>\>

Upload an attachment for sending using base64 file encoding. Returns an array whose first element is the ID of the uploaded attachment.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UploadAttachmentRequest`](../interfaces/UploadAttachmentRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`string`[]\>\>

___

### uploadMultipartForm

▸ **uploadMultipartForm**(`requestParameters`, `initOverrides?`): `Promise`<`string`[]\>

Upload an attachment for sending using a Multipart Form request. Returns an array whose first element is the ID of the uploaded attachment.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UploadMultipartFormRequest`](../interfaces/UploadMultipartFormRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`string`[]\>

___

### uploadMultipartFormRaw

▸ **uploadMultipartFormRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`string`[]\>\>

Upload an attachment for sending using a Multipart Form request. Returns an array whose first element is the ID of the uploaded attachment.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UploadMultipartFormRequest`](../interfaces/UploadMultipartFormRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`string`[]\>\>

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
