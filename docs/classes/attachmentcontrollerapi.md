**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / AttachmentControllerApi

# Class: AttachmentControllerApi

AttachmentControllerApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **AttachmentControllerApi**

## Index

### Constructors

* [constructor](attachmentcontrollerapi.md#constructor)

### Properties

* [basePath](attachmentcontrollerapi.md#basepath)
* [configuration](attachmentcontrollerapi.md#configuration)
* [fetch](attachmentcontrollerapi.md#fetch)

### Methods

* [deleteAttachment](attachmentcontrollerapi.md#deleteattachment)
* [downloadAttachmentAsBase64Encoded](attachmentcontrollerapi.md#downloadattachmentasbase64encoded)
* [downloadAttachmentAsBytes](attachmentcontrollerapi.md#downloadattachmentasbytes)
* [getAttachmentInfo](attachmentcontrollerapi.md#getattachmentinfo)
* [getAttachments](attachmentcontrollerapi.md#getattachments)
* [uploadAttachment](attachmentcontrollerapi.md#uploadattachment)
* [uploadAttachmentBytes](attachmentcontrollerapi.md#uploadattachmentbytes)
* [uploadMultipartForm](attachmentcontrollerapi.md#uploadmultipartform)

## Constructors

### constructor

\+ **new AttachmentControllerApi**(`configuration?`: [Configuration](configuration.md), `basePath?`: string, `fetch?`: [FetchAPI](../interfaces/fetchapi.md)): [AttachmentControllerApi](attachmentcontrollerapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/e4d4355/src/generated/api.ts#L57)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE\_PATH |
`fetch` | [FetchAPI](../interfaces/fetchapi.md) | portableFetch |

**Returns:** [AttachmentControllerApi](attachmentcontrollerapi.md)

## Properties

### basePath

• `Protected` **basePath**: string

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#basepath)*

*Defined in [src/generated/api.ts:61](https://github.com/mailslurp/mailslurp-client/blob/e4d4355/src/generated/api.ts#L61)*

___

### configuration

• `Protected` **configuration**: [Configuration](configuration.md)

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#configuration)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/e4d4355/src/generated/api.ts#L57)*

___

### fetch

• `Protected` **fetch**: [FetchAPI](../interfaces/fetchapi.md)

*Inherited from [BaseAPI](baseapi.md).[fetch](baseapi.md#fetch)*

*Defined in [src/generated/api.ts:62](https://github.com/mailslurp/mailslurp-client/blob/e4d4355/src/generated/api.ts#L62)*

## Methods

### deleteAttachment

▸ **deleteAttachment**(`attachmentId`: string, `options?`: any): Promise\<Response>

*Defined in [src/generated/api.ts:8415](https://github.com/mailslurp/mailslurp-client/blob/e4d4355/src/generated/api.ts#L8415)*

Email attachments are essentially files with meta data. Files are byte arrays and the meta data is a content type and a filename. These properties allow email clients to display the filename and icon etc. When sending emails with attachments first upload each attachment with an upload endpoint. Record the returned attachment ID and use it with subsequent email sending. For legacy reasons the ID is returned as the first element in an array. Only a single ID is ever returned. To send the attachments pass a list of attachment IDs with `SendEmailOptions` when sending an email. Using the upload endpoints prior to sending mean attachments can easily be reused.

**`summary`** Delete an attachment

**`throws`** {RequiredError}

**`memberof`** AttachmentControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`attachmentId` | string | ID of attachment |
`options?` | any | - |

**Returns:** Promise\<Response>

___

### downloadAttachmentAsBase64Encoded

▸ **downloadAttachmentAsBase64Encoded**(`attachmentId`: string, `options?`: any): Promise\<[DownloadAttachmentDto](../interfaces/downloadattachmentdto.md)>

*Defined in [src/generated/api.ts:8430](https://github.com/mailslurp/mailslurp-client/blob/e4d4355/src/generated/api.ts#L8430)*

Returns the specified attachment for a given email as a base 64 encoded string. The response type is application/json. This method is similar to the `downloadAttachment` method but allows some clients to get around issues with binary responses.

**`summary`** Get email attachment as base64 encoded string as alternative to binary responses. To read the content decode the Base64 encoded contents.

**`throws`** {RequiredError}

**`memberof`** AttachmentControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`attachmentId` | string | ID of attachment |
`options?` | any | - |

**Returns:** Promise\<[DownloadAttachmentDto](../interfaces/downloadattachmentdto.md)>

___

### downloadAttachmentAsBytes

▸ **downloadAttachmentAsBytes**(`attachmentId`: string, `options?`: any): Promise\<string>

*Defined in [src/generated/api.ts:8450](https://github.com/mailslurp/mailslurp-client/blob/e4d4355/src/generated/api.ts#L8450)*

Returns the specified attachment for a given email as a stream / array of bytes. You can find attachment ids in email responses endpoint responses. The response type is application/octet-stream.

**`summary`** Download attachments. Get email attachment bytes. If you have trouble with byte responses try the `downloadAttachmentBase64` response endpoints.

**`throws`** {RequiredError}

**`memberof`** AttachmentControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`attachmentId` | string | ID of attachment |
`options?` | any | - |

**Returns:** Promise\<string>

___

### getAttachmentInfo

▸ **getAttachmentInfo**(`attachmentId`: string, `options?`: any): Promise\<[AttachmentMetaData](../interfaces/attachmentmetadata.md)>

*Defined in [src/generated/api.ts:8467](https://github.com/mailslurp/mailslurp-client/blob/e4d4355/src/generated/api.ts#L8467)*

Returns the metadata for an attachment. It is saved separately to the content of the attachment. Contains properties `name` and `content-type` and `content-length` in bytes for a given attachment.

**`summary`** Get email attachment metadata information

**`throws`** {RequiredError}

**`memberof`** AttachmentControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`attachmentId` | string | ID of attachment |
`options?` | any | - |

**Returns:** Promise\<[AttachmentMetaData](../interfaces/attachmentmetadata.md)>

___

### getAttachments

▸ **getAttachments**(`fileNameFilter?`: string, `page?`: number, `size?`: number, `sort?`: \"ASC\" \| \"DESC\", `options?`: any): Promise\<[PageAttachmentEntity](../interfaces/pageattachmententity.md)>

*Defined in [src/generated/api.ts:8485](https://github.com/mailslurp/mailslurp-client/blob/e4d4355/src/generated/api.ts#L8485)*

Get all attachments in paginated response. Each entity contains meta data for the attachment such as `name` and `content-type`. Use the `attachmentId` and the download endpoints to get the file contents.

**`summary`** Get email attachments

**`throws`** {RequiredError}

**`memberof`** AttachmentControllerApi

#### Parameters:

Name | Type |
------ | ------ |
`fileNameFilter?` | string |
`page?` | number |
`size?` | number |
`sort?` | \"ASC\" \| \"DESC\" |
`options?` | any |

**Returns:** Promise\<[PageAttachmentEntity](../interfaces/pageattachmententity.md)>

___

### uploadAttachment

▸ **uploadAttachment**(`uploadOptions`: [UploadAttachmentOptions](../interfaces/uploadattachmentoptions.md), `options?`: any): Promise\<string[]>

*Defined in [src/generated/api.ts:8509](https://github.com/mailslurp/mailslurp-client/blob/e4d4355/src/generated/api.ts#L8509)*

Email attachments are essentially files with meta data. Files are byte arrays and the meta data is a content type and a filename. These properties allow email clients to display the filename and icon etc. When sending emails with attachments first upload each attachment with an upload endpoint. Record the returned attachment ID and use it with subsequent email sending. For legacy reasons the ID is returned as the first element in an array. Only a single ID is ever returned. To send the attachments pass a list of attachment IDs with `SendEmailOptions` when sending an email. Using the upload endpoints prior to sending mean attachments can easily be reused.

**`summary`** Upload an attachment for sending using base64 file encoding. Returns an array whose first element is the ID of the uploaded attachment.

**`throws`** {RequiredError}

**`memberof`** AttachmentControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`uploadOptions` | [UploadAttachmentOptions](../interfaces/uploadattachmentoptions.md) | uploadOptions |
`options?` | any | - |

**Returns:** Promise\<string[]>

___

### uploadAttachmentBytes

▸ **uploadAttachmentBytes**(`string?`: string, `byteArray?`: string, `filename?`: string, `options?`: any): Promise\<string[]>

*Defined in [src/generated/api.ts:8529](https://github.com/mailslurp/mailslurp-client/blob/e4d4355/src/generated/api.ts#L8529)*

Email attachments are essentially files with meta data. Files are byte arrays and the meta data is a content type and a filename. These properties allow email clients to display the filename and icon etc. When sending emails with attachments first upload each attachment with an upload endpoint. Record the returned attachment ID and use it with subsequent email sending. For legacy reasons the ID is returned as the first element in an array. Only a single ID is ever returned. To send the attachments pass a list of attachment IDs with `SendEmailOptions` when sending an email. Using the upload endpoints prior to sending mean attachments can easily be reused.

**`summary`** Upload an attachment for sending using file byte stream input octet stream. Returns an array whose first element is the ID of the uploaded attachment.

**`throws`** {RequiredError}

**`memberof`** AttachmentControllerApi

#### Parameters:

Name | Type |
------ | ------ |
`string?` | string |
`byteArray?` | string |
`filename?` | string |
`options?` | any |

**Returns:** Promise\<string[]>

___

### uploadMultipartForm

▸ **uploadMultipartForm**(`file`: any, `contentType?`: string, `contentTypeHeader?`: string, `filename?`: string, `xFilename?`: string, `options?`: any): Promise\<string[]>

*Defined in [src/generated/api.ts:8555](https://github.com/mailslurp/mailslurp-client/blob/e4d4355/src/generated/api.ts#L8555)*

Email attachments are essentially files with meta data. Files are byte arrays and the meta data is a content type and a filename. These properties allow email clients to display the filename and icon etc. When sending emails with attachments first upload each attachment with an upload endpoint. Record the returned attachment ID and use it with subsequent email sending. For legacy reasons the ID is returned as the first element in an array. Only a single ID is ever returned. To send the attachments pass a list of attachment IDs with `SendEmailOptions` when sending an email. Using the upload endpoints prior to sending mean attachments can easily be reused.

**`summary`** Upload an attachment for sending using a Multipart Form request. Returns an array whose first element is the ID of the uploaded attachment.

**`throws`** {RequiredError}

**`memberof`** AttachmentControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`file` | any | file |
`contentType?` | string | - |
`contentTypeHeader?` | string | - |
`filename?` | string | - |
`xFilename?` | string | - |
`options?` | any | - |

**Returns:** Promise\<string[]>
