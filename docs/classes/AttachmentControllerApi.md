[MailSlurp JS](../README.md) / AttachmentControllerApi

# Class: AttachmentControllerApi

AttachmentControllerApi - object-oriented interface

**`export`**

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`AttachmentControllerApi`**

## Table of contents

### Constructors

- [constructor](AttachmentControllerApi.md#constructor)

### Properties

- [basePath](AttachmentControllerApi.md#basepath)
- [configuration](AttachmentControllerApi.md#configuration)
- [fetch](AttachmentControllerApi.md#fetch)

### Methods

- [deleteAllAttachments](AttachmentControllerApi.md#deleteallattachments)
- [deleteAttachment](AttachmentControllerApi.md#deleteattachment)
- [downloadAttachmentAsBase64Encoded](AttachmentControllerApi.md#downloadattachmentasbase64encoded)
- [downloadAttachmentAsBytes](AttachmentControllerApi.md#downloadattachmentasbytes)
- [getAttachment](AttachmentControllerApi.md#getattachment)
- [getAttachmentInfo](AttachmentControllerApi.md#getattachmentinfo)
- [getAttachments](AttachmentControllerApi.md#getattachments)
- [uploadAttachment](AttachmentControllerApi.md#uploadattachment)
- [uploadAttachmentBytes](AttachmentControllerApi.md#uploadattachmentbytes)
- [uploadMultipartForm](AttachmentControllerApi.md#uploadmultipartform)

## Constructors

### constructor

• **new AttachmentControllerApi**(`configuration?`, `basePath?`, `fetch?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) |
| `basePath` | `string` |
| `fetch` | [`FetchAPI`](../interfaces/FetchAPI.md) |

#### Inherited from

[BaseAPI](BaseAPI.md).[constructor](BaseAPI.md#constructor)

#### Defined in

[src/generated/api.ts:59](https://github.com/mailslurp/mailslurp-client/blob/20b4039/src/generated/api.ts#L59)

## Properties

### basePath

• `Protected` **basePath**: `string`

#### Inherited from

[BaseAPI](BaseAPI.md).[basePath](BaseAPI.md#basepath)

___

### configuration

• `Protected` **configuration**: [`Configuration`](Configuration.md)

#### Inherited from

[BaseAPI](BaseAPI.md).[configuration](BaseAPI.md#configuration)

#### Defined in

[src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/20b4039/src/generated/api.ts#L57)

___

### fetch

• `Protected` **fetch**: [`FetchAPI`](../interfaces/FetchAPI.md)

#### Inherited from

[BaseAPI](BaseAPI.md).[fetch](BaseAPI.md#fetch)

## Methods

### deleteAllAttachments

▸ **deleteAllAttachments**(`options?`): `Promise`<`Response`\>

**`summary`** Delete all attachments

**`throws`** {RequiredError}

**`memberof`** AttachmentControllerApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`Response`\>

#### Defined in

[src/generated/api.ts:9745](https://github.com/mailslurp/mailslurp-client/blob/20b4039/src/generated/api.ts#L9745)

___

### deleteAttachment

▸ **deleteAttachment**(`attachmentId`, `options?`): `Promise`<`Response`\>

Email attachments are essentially files with meta data. Files are byte arrays and the meta data is a content type and a filename. These properties allow email clients to display the filename and icon etc. When sending emails with attachments first upload each attachment with an upload endpoint. Record the returned attachment ID and use it with subsequent email sending. For legacy reasons the ID is returned as the first element in an array. Only a single ID is ever returned. To send the attachments pass a list of attachment IDs with `SendEmailOptions` when sending an email. Using the upload endpoints prior to sending mean attachments can easily be reused.

**`summary`** Delete an attachment

**`throws`** {RequiredError}

**`memberof`** AttachmentControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `attachmentId` | `string` | ID of attachment |
| `options?` | `any` | - |

#### Returns

`Promise`<`Response`\>

#### Defined in

[src/generated/api.ts:9759](https://github.com/mailslurp/mailslurp-client/blob/20b4039/src/generated/api.ts#L9759)

___

### downloadAttachmentAsBase64Encoded

▸ **downloadAttachmentAsBase64Encoded**(`attachmentId`, `options?`): `Promise`<[`DownloadAttachmentDto`](../interfaces/DownloadAttachmentDto.md)\>

Returns the specified attachment for a given email as a base 64 encoded string. The response type is application/json. This method is similar to the `downloadAttachment` method but allows some clients to get around issues with binary responses.

**`summary`** Get email attachment as base64 encoded string as alternative to binary responses. To read the content decode the Base64 encoded contents.

**`throws`** {RequiredError}

**`memberof`** AttachmentControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `attachmentId` | `string` | ID of attachment |
| `options?` | `any` | - |

#### Returns

`Promise`<[`DownloadAttachmentDto`](../interfaces/DownloadAttachmentDto.md)\>

#### Defined in

[src/generated/api.ts:9774](https://github.com/mailslurp/mailslurp-client/blob/20b4039/src/generated/api.ts#L9774)

___

### downloadAttachmentAsBytes

▸ **downloadAttachmentAsBytes**(`attachmentId`, `options?`): `Promise`<`string`\>

Returns the specified attachment for a given email as a stream / array of bytes. You can find attachment ids in email responses endpoint responses. The response type is application/octet-stream.

**`summary`** Download attachments. Get email attachment bytes. If you have trouble with byte responses try the `downloadAttachmentBase64` response endpoints.

**`throws`** {RequiredError}

**`memberof`** AttachmentControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `attachmentId` | `string` | ID of attachment |
| `options?` | `any` | - |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/generated/api.ts:9794](https://github.com/mailslurp/mailslurp-client/blob/20b4039/src/generated/api.ts#L9794)

___

### getAttachment

▸ **getAttachment**(`attachmentId`, `options?`): `Promise`<[`AttachmentEntity`](../interfaces/AttachmentEntity.md)\>

Email attachments are essentially files with meta data. Files are byte arrays and the meta data is a content type and a filename. These properties allow email clients to display the filename and icon etc. When sending emails with attachments first upload each attachment with an upload endpoint. Record the returned attachment ID and use it with subsequent email sending. For legacy reasons the ID is returned as the first element in an array. Only a single ID is ever returned. To send the attachments pass a list of attachment IDs with `SendEmailOptions` when sending an email. Using the upload endpoints prior to sending mean attachments can easily be reused.

**`summary`** Get an attachment entity

**`throws`** {RequiredError}

**`memberof`** AttachmentControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `attachmentId` | `string` | ID of attachment |
| `options?` | `any` | - |

#### Returns

`Promise`<[`AttachmentEntity`](../interfaces/AttachmentEntity.md)\>

#### Defined in

[src/generated/api.ts:9811](https://github.com/mailslurp/mailslurp-client/blob/20b4039/src/generated/api.ts#L9811)

___

### getAttachmentInfo

▸ **getAttachmentInfo**(`attachmentId`, `options?`): `Promise`<[`AttachmentMetaData`](../interfaces/AttachmentMetaData.md)\>

Returns the metadata for an attachment. It is saved separately to the content of the attachment. Contains properties `name` and `content-type` and `content-length` in bytes for a given attachment.

**`summary`** Get email attachment metadata information

**`throws`** {RequiredError}

**`memberof`** AttachmentControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `attachmentId` | `string` | ID of attachment |
| `options?` | `any` | - |

#### Returns

`Promise`<[`AttachmentMetaData`](../interfaces/AttachmentMetaData.md)\>

#### Defined in

[src/generated/api.ts:9826](https://github.com/mailslurp/mailslurp-client/blob/20b4039/src/generated/api.ts#L9826)

___

### getAttachments

▸ **getAttachments**(`before?`, `fileNameFilter?`, `page?`, `since?`, `size?`, `sort?`, `options?`): `Promise`<[`PageAttachmentEntity`](../interfaces/PageAttachmentEntity.md)\>

Get all attachments in paginated response. Each entity contains meta data for the attachment such as `name` and `content-type`. Use the `attachmentId` and the download endpoints to get the file contents.

**`summary`** Get email attachments

**`throws`** {RequiredError}

**`memberof`** AttachmentControllerApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `before?` | `Date` |
| `fileNameFilter?` | `string` |
| `page?` | `number` |
| `since?` | `Date` |
| `size?` | `number` |
| `sort?` | ``"ASC"`` \| ``"DESC"`` |
| `options?` | `any` |

#### Returns

`Promise`<[`PageAttachmentEntity`](../interfaces/PageAttachmentEntity.md)\>

#### Defined in

[src/generated/api.ts:9846](https://github.com/mailslurp/mailslurp-client/blob/20b4039/src/generated/api.ts#L9846)

___

### uploadAttachment

▸ **uploadAttachment**(`uploadOptions`, `options?`): `Promise`<`string`[]\>

Email attachments are essentially files with meta data. Files are byte arrays and the meta data is a content type and a filename. These properties allow email clients to display the filename and icon etc. When sending emails with attachments first upload each attachment with an upload endpoint. Record the returned attachment ID and use it with subsequent email sending. For legacy reasons the ID is returned as the first element in an array. Only a single ID is ever returned. To send the attachments pass a list of attachment IDs with `SendEmailOptions` when sending an email. Using the upload endpoints prior to sending mean attachments can easily be reused.

**`summary`** Upload an attachment for sending using base64 file encoding. Returns an array whose first element is the ID of the uploaded attachment.

**`throws`** {RequiredError}

**`memberof`** AttachmentControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `uploadOptions` | [`UploadAttachmentOptions`](../interfaces/UploadAttachmentOptions.md) | uploadOptions |
| `options?` | `any` | - |

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/generated/api.ts:9874](https://github.com/mailslurp/mailslurp-client/blob/20b4039/src/generated/api.ts#L9874)

___

### uploadAttachmentBytes

▸ **uploadAttachmentBytes**(`byteArray?`, `contentType?`, `filename?`, `options?`): `Promise`<`string`[]\>

Email attachments are essentially files with meta data. Files are byte arrays and the meta data is a content type and a filename. These properties allow email clients to display the filename and icon etc. When sending emails with attachments first upload each attachment with an upload endpoint. Record the returned attachment ID and use it with subsequent email sending. For legacy reasons the ID is returned as the first element in an array. Only a single ID is ever returned. To send the attachments pass a list of attachment IDs with `SendEmailOptions` when sending an email. Using the upload endpoints prior to sending mean attachments can easily be reused.

**`summary`** Upload an attachment for sending using file byte stream input octet stream. Returns an array whose first element is the ID of the uploaded attachment.

**`throws`** {RequiredError}

**`memberof`** AttachmentControllerApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `byteArray?` | `string` |
| `contentType?` | `string` |
| `filename?` | `string` |
| `options?` | `any` |

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/generated/api.ts:9894](https://github.com/mailslurp/mailslurp-client/blob/20b4039/src/generated/api.ts#L9894)

___

### uploadMultipartForm

▸ **uploadMultipartForm**(`file`, `contentType?`, `contentTypeHeader?`, `filename?`, `xFilename?`, `options?`): `Promise`<`string`[]\>

Email attachments are essentially files with meta data. Files are byte arrays and the meta data is a content type and a filename. These properties allow email clients to display the filename and icon etc. When sending emails with attachments first upload each attachment with an upload endpoint. Record the returned attachment ID and use it with subsequent email sending. For legacy reasons the ID is returned as the first element in an array. Only a single ID is ever returned. To send the attachments pass a list of attachment IDs with `SendEmailOptions` when sending an email. Using the upload endpoints prior to sending mean attachments can easily be reused.

**`summary`** Upload an attachment for sending using a Multipart Form request. Returns an array whose first element is the ID of the uploaded attachment.

**`throws`** {RequiredError}

**`memberof`** AttachmentControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | `any` | file |
| `contentType?` | `string` | - |
| `contentTypeHeader?` | `string` | - |
| `filename?` | `string` | - |
| `xFilename?` | `string` | - |
| `options?` | `any` | - |

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/generated/api.ts:9922](https://github.com/mailslurp/mailslurp-client/blob/20b4039/src/generated/api.ts#L9922)
