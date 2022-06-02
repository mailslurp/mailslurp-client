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

### <a id="constructor" name="constructor"></a> constructor

• **new AttachmentControllerApi**(`configuration?`)

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

### <a id="deleteallattachments" name="deleteallattachments"></a> deleteAllAttachments

▸ **deleteAllAttachments**(`initOverrides?`): `Promise`<`void`\>

Delete all attachments

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### <a id="deleteallattachmentsraw" name="deleteallattachmentsraw"></a> deleteAllAttachmentsRaw

▸ **deleteAllAttachmentsRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Delete all attachments

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### <a id="deleteattachment" name="deleteattachment"></a> deleteAttachment

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

### <a id="deleteattachmentraw" name="deleteattachmentraw"></a> deleteAttachmentRaw

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

### <a id="downloadattachmentasbase64encoded" name="downloadattachmentasbase64encoded"></a> downloadAttachmentAsBase64Encoded

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

### <a id="downloadattachmentasbase64encodedraw" name="downloadattachmentasbase64encodedraw"></a> downloadAttachmentAsBase64EncodedRaw

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

### <a id="downloadattachmentasbytes" name="downloadattachmentasbytes"></a> downloadAttachmentAsBytes

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

### <a id="downloadattachmentasbytesraw" name="downloadattachmentasbytesraw"></a> downloadAttachmentAsBytesRaw

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

### <a id="getattachment" name="getattachment"></a> getAttachment

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

### <a id="getattachmentinfo" name="getattachmentinfo"></a> getAttachmentInfo

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

### <a id="getattachmentinforaw" name="getattachmentinforaw"></a> getAttachmentInfoRaw

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

### <a id="getattachmentraw" name="getattachmentraw"></a> getAttachmentRaw

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

### <a id="getattachments" name="getattachments"></a> getAttachments

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

### <a id="getattachmentsraw" name="getattachmentsraw"></a> getAttachmentsRaw

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

### <a id="uploadattachment" name="uploadattachment"></a> uploadAttachment

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

### <a id="uploadattachmentbytes" name="uploadattachmentbytes"></a> uploadAttachmentBytes

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

### <a id="uploadattachmentbytesraw" name="uploadattachmentbytesraw"></a> uploadAttachmentBytesRaw

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

### <a id="uploadattachmentraw" name="uploadattachmentraw"></a> uploadAttachmentRaw

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

### <a id="uploadmultipartform" name="uploadmultipartform"></a> uploadMultipartForm

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

### <a id="uploadmultipartformraw" name="uploadmultipartformraw"></a> uploadMultipartFormRaw

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
