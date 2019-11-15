[MailSlurp Client](../README.md) > [AttachmentControllerApi](../classes/attachmentcontrollerapi.md)

# Class: AttachmentControllerApi

AttachmentControllerApi - object-oriented interface

*__export__*: 

*__class__*: AttachmentControllerApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ AttachmentControllerApi**

## Index

### Constructors

* [constructor](attachmentcontrollerapi.md#constructor)

### Properties

* [basePath](attachmentcontrollerapi.md#basepath)
* [configuration](attachmentcontrollerapi.md#configuration)
* [fetch](attachmentcontrollerapi.md#fetch)

### Methods

* [uploadAttachment](attachmentcontrollerapi.md#uploadattachment)
* [uploadMultipartForm](attachmentcontrollerapi.md#uploadmultipartform)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new AttachmentControllerApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, fetch?: *[FetchAPI](../interfaces/fetchapi.md)*): [AttachmentControllerApi](attachmentcontrollerapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:49*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) |
| `Optional` basePath | `string` |
| `Optional` fetch | [FetchAPI](../interfaces/fetchapi.md) |

**Returns:** [AttachmentControllerApi](attachmentcontrollerapi.md)

___

## Properties

<a id="basepath"></a>

### `<Protected>` basePath

**● basePath**: *`string`*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#basepath)*

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:47*

___
<a id="configuration"></a>

### `<Protected>` configuration

**● configuration**: *[Configuration](configuration.md) \| `undefined`*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#configuration)*

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:49*

___
<a id="fetch"></a>

### `<Protected>` fetch

**● fetch**: *[FetchAPI](../interfaces/fetchapi.md)*

*Inherited from [BaseAPI](baseapi.md).[fetch](baseapi.md#fetch)*

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:48*

___

## Methods

<a id="uploadattachment"></a>

###  uploadAttachment

▸ **uploadAttachment**(uploadAttachmentOptions: *[UploadAttachmentOptions](../interfaces/uploadattachmentoptions.md)*, options?: *`any`*): `Promise`<`string`[]>

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:1058*

When sending emails with attachments first upload each attachment with this endpoint. Record the returned attachment IDs. Then use these attachment IDs in the SendEmailOptions when sending an email. This means that attachments can easily be reused.

*__summary__*: Upload an attachment for sending

*__throws__*: {RequiredError}

*__memberof__*: AttachmentControllerApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| uploadAttachmentOptions | [UploadAttachmentOptions](../interfaces/uploadattachmentoptions.md) |  uploadOptions |
| `Optional` options | `any` |

**Returns:** `Promise`<`string`[]>

___
<a id="uploadmultipartform"></a>

###  uploadMultipartForm

▸ **uploadMultipartForm**(file: *`any`*, contentType?: *`string`*, filename?: *`string`*, options?: *`any`*): `Promise`<`string`[]>

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:1069*

When sending emails with attachments first upload each attachment with this endpoint. Record the returned attachment IDs. Then use these attachment IDs in the SendEmailOptions when sending an email. This means that attachments can easily be reused.

*__summary__*: Upload an attachment for sending using Multipart Form

*__throws__*: {RequiredError}

*__memberof__*: AttachmentControllerApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| file | `any` |  file |
| `Optional` contentType | `string` |
| `Optional` filename | `string` |
| `Optional` options | `any` |

**Returns:** `Promise`<`string`[]>

___

