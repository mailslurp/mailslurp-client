[MailSlurp JS](../README.md) › [Globals](../globals.md) › ["lib/apis/AttachmentControllerApi"](../modules/_lib_apis_attachmentcontrollerapi_.md) › [AttachmentControllerApi](_lib_apis_attachmentcontrollerapi_.attachmentcontrollerapi.md)

# Class: AttachmentControllerApi

no description

## Hierarchy

* [BaseAPI](_lib_runtime_.baseapi.md)

  ↳ **AttachmentControllerApi**

## Index

### Constructors

* [constructor](_lib_apis_attachmentcontrollerapi_.attachmentcontrollerapi.md#constructor)

### Properties

* [configuration](_lib_apis_attachmentcontrollerapi_.attachmentcontrollerapi.md#protected-configuration)

### Methods

* [request](_lib_apis_attachmentcontrollerapi_.attachmentcontrollerapi.md#protected-request)
* [uploadAttachment](_lib_apis_attachmentcontrollerapi_.attachmentcontrollerapi.md#uploadattachment)
* [uploadAttachmentRaw](_lib_apis_attachmentcontrollerapi_.attachmentcontrollerapi.md#uploadattachmentraw)
* [uploadMultipartForm](_lib_apis_attachmentcontrollerapi_.attachmentcontrollerapi.md#uploadmultipartform)
* [uploadMultipartFormRaw](_lib_apis_attachmentcontrollerapi_.attachmentcontrollerapi.md#uploadmultipartformraw)
* [withMiddleware](_lib_apis_attachmentcontrollerapi_.attachmentcontrollerapi.md#withmiddleware)
* [withPostMiddleware](_lib_apis_attachmentcontrollerapi_.attachmentcontrollerapi.md#withpostmiddleware)
* [withPreMiddleware](_lib_apis_attachmentcontrollerapi_.attachmentcontrollerapi.md#withpremiddleware)

## Constructors

###  constructor

\+ **new AttachmentControllerApi**(`configuration`: [Configuration](_lib_runtime_.configuration.md)‹›): *[AttachmentControllerApi](_lib_apis_attachmentcontrollerapi_.attachmentcontrollerapi.md)*

*Inherited from [BaseAPI](_lib_runtime_.baseapi.md).[constructor](_lib_runtime_.baseapi.md#constructor)*

*Defined in [src/lib/runtime.ts:24](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/runtime.ts#L24)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration` | [Configuration](_lib_runtime_.configuration.md)‹› |  new Configuration() |

**Returns:** *[AttachmentControllerApi](_lib_apis_attachmentcontrollerapi_.attachmentcontrollerapi.md)*

## Properties

### `Protected` configuration

• **configuration**: *[Configuration](_lib_runtime_.configuration.md)‹›*

*Inherited from [BaseAPI](_lib_runtime_.baseapi.md).[configuration](_lib_runtime_.baseapi.md#protected-configuration)*

*Defined in [src/lib/runtime.ts:26](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/runtime.ts#L26)*

## Methods

### `Protected` request

▸ **request**(`context`: [RequestOpts](../interfaces/_lib_runtime_.requestopts.md)): *Promise‹Response›*

*Inherited from [BaseAPI](_lib_runtime_.baseapi.md).[request](_lib_runtime_.baseapi.md#protected-request)*

*Defined in [src/lib/runtime.ts:52](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/runtime.ts#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`context` | [RequestOpts](../interfaces/_lib_runtime_.requestopts.md) |

**Returns:** *Promise‹Response›*

___

###  uploadAttachment

▸ **uploadAttachment**(`requestParameters`: [UploadAttachmentRequest](../interfaces/_lib_apis_attachmentcontrollerapi_.uploadattachmentrequest.md)): *Promise‹Array‹string››*

*Defined in [src/lib/apis/AttachmentControllerApi.ts:82](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/AttachmentControllerApi.ts#L82)*

When sending emails with attachments first upload each attachment with this endpoint. Record the returned attachment IDs. Then use these attachment IDs in the SendEmailOptions when sending an email. This means that attachments can easily be reused.
Upload an attachment for sending

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [UploadAttachmentRequest](../interfaces/_lib_apis_attachmentcontrollerapi_.uploadattachmentrequest.md) |

**Returns:** *Promise‹Array‹string››*

___

###  uploadAttachmentRaw

▸ **uploadAttachmentRaw**(`requestParameters`: [UploadAttachmentRequest](../interfaces/_lib_apis_attachmentcontrollerapi_.uploadattachmentrequest.md)): *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹Array‹string›››*

*Defined in [src/lib/apis/AttachmentControllerApi.ts:40](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/AttachmentControllerApi.ts#L40)*

When sending emails with attachments first upload each attachment with this endpoint. Record the returned attachment IDs. Then use these attachment IDs in the SendEmailOptions when sending an email. This means that attachments can easily be reused.
Upload an attachment for sending

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [UploadAttachmentRequest](../interfaces/_lib_apis_attachmentcontrollerapi_.uploadattachmentrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹Array‹string›››*

___

###  uploadMultipartForm

▸ **uploadMultipartForm**(`requestParameters`: [UploadMultipartFormRequest](../interfaces/_lib_apis_attachmentcontrollerapi_.uploadmultipartformrequest.md)): *Promise‹Array‹string››*

*Defined in [src/lib/apis/AttachmentControllerApi.ts:159](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/AttachmentControllerApi.ts#L159)*

When sending emails with attachments first upload each attachment with this endpoint. Record the returned attachment IDs. Then use these attachment IDs in the SendEmailOptions when sending an email. This means that attachments can easily be reused.
Upload an attachment for sending using Multipart Form

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [UploadMultipartFormRequest](../interfaces/_lib_apis_attachmentcontrollerapi_.uploadmultipartformrequest.md) |

**Returns:** *Promise‹Array‹string››*

___

###  uploadMultipartFormRaw

▸ **uploadMultipartFormRaw**(`requestParameters`: [UploadMultipartFormRequest](../interfaces/_lib_apis_attachmentcontrollerapi_.uploadmultipartformrequest.md)): *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹Array‹string›››*

*Defined in [src/lib/apis/AttachmentControllerApi.ts:93](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/AttachmentControllerApi.ts#L93)*

When sending emails with attachments first upload each attachment with this endpoint. Record the returned attachment IDs. Then use these attachment IDs in the SendEmailOptions when sending an email. This means that attachments can easily be reused.
Upload an attachment for sending using Multipart Form

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [UploadMultipartFormRequest](../interfaces/_lib_apis_attachmentcontrollerapi_.uploadmultipartformrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹Array‹string›››*

___

###  withMiddleware

▸ **withMiddleware**<**T**>(`this`: T, ...`middlewares`: [Middleware](../interfaces/_lib_runtime_.middleware.md)[]): *T*

*Inherited from [BaseAPI](_lib_runtime_.baseapi.md).[withMiddleware](_lib_runtime_.baseapi.md#withmiddleware)*

*Defined in [src/lib/runtime.ts:30](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/runtime.ts#L30)*

**Type parameters:**

▪ **T**: *[BaseAPI](_lib_runtime_.baseapi.md)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |
`...middlewares` | [Middleware](../interfaces/_lib_runtime_.middleware.md)[] |

**Returns:** *T*

___

###  withPostMiddleware

▸ **withPostMiddleware**<**T**>(`this`: T, ...`postMiddlewares`: Array‹[post](../interfaces/_lib_runtime_.middleware.md#optional-post)›): *T*

*Inherited from [BaseAPI](_lib_runtime_.baseapi.md).[withPostMiddleware](_lib_runtime_.baseapi.md#withpostmiddleware)*

*Defined in [src/lib/runtime.ts:44](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/runtime.ts#L44)*

**Type parameters:**

▪ **T**: *[BaseAPI](_lib_runtime_.baseapi.md)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |
`...postMiddlewares` | Array‹[post](../interfaces/_lib_runtime_.middleware.md#optional-post)› |

**Returns:** *T*

___

###  withPreMiddleware

▸ **withPreMiddleware**<**T**>(`this`: T, ...`preMiddlewares`: Array‹[pre](../interfaces/_lib_runtime_.middleware.md#optional-pre)›): *T*

*Inherited from [BaseAPI](_lib_runtime_.baseapi.md).[withPreMiddleware](_lib_runtime_.baseapi.md#withpremiddleware)*

*Defined in [src/lib/runtime.ts:36](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/runtime.ts#L36)*

**Type parameters:**

▪ **T**: *[BaseAPI](_lib_runtime_.baseapi.md)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |
`...preMiddlewares` | Array‹[pre](../interfaces/_lib_runtime_.middleware.md#optional-pre)› |

**Returns:** *T*
