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

* [uploadAttachment](attachmentcontrollerapi.md#uploadattachment)
* [uploadAttachmentBytes](attachmentcontrollerapi.md#uploadattachmentbytes)
* [uploadMultipartForm](attachmentcontrollerapi.md#uploadmultipartform)

## Constructors

### constructor

\+ **new AttachmentControllerApi**(`configuration?`: [Configuration](configuration.md), `basePath?`: string, `fetch?`: [FetchAPI](../interfaces/fetchapi.md)): [AttachmentControllerApi](attachmentcontrollerapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/36fa2ad/src/generated/api.ts#L57)*

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

*Defined in [src/generated/api.ts:61](https://github.com/mailslurp/mailslurp-client/blob/36fa2ad/src/generated/api.ts#L61)*

___

### configuration

• `Protected` **configuration**: [Configuration](configuration.md)

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#configuration)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/36fa2ad/src/generated/api.ts#L57)*

___

### fetch

• `Protected` **fetch**: [FetchAPI](../interfaces/fetchapi.md)

*Inherited from [BaseAPI](baseapi.md).[fetch](baseapi.md#fetch)*

*Defined in [src/generated/api.ts:62](https://github.com/mailslurp/mailslurp-client/blob/36fa2ad/src/generated/api.ts#L62)*

## Methods

### uploadAttachment

▸ **uploadAttachment**(`uploadOptions`: [UploadAttachmentOptions](../interfaces/uploadattachmentoptions.md), `options?`: any): Promise\<string[]>

*Defined in [src/generated/api.ts:4707](https://github.com/mailslurp/mailslurp-client/blob/36fa2ad/src/generated/api.ts#L4707)*

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

*Defined in [src/generated/api.ts:4727](https://github.com/mailslurp/mailslurp-client/blob/36fa2ad/src/generated/api.ts#L4727)*

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

*Defined in [src/generated/api.ts:4753](https://github.com/mailslurp/mailslurp-client/blob/36fa2ad/src/generated/api.ts#L4753)*

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
