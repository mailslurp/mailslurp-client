# Class: AttachmentControllerApi

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **AttachmentControllerApi**

## Constructors

###  constructor

\+ **new AttachmentControllerApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/fetchapi.md)): *[AttachmentControllerApi](attachmentcontrollerapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [src/generated/api.ts:58](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L58)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`fetch` | [FetchAPI](../interfaces/fetchapi.md) |  portableFetch |

**Returns:** *[AttachmentControllerApi](attachmentcontrollerapi.md)*

## Properties

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

*Defined in [src/generated/api.ts:60](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L60)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md)*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [src/generated/api.ts:58](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L58)*

___

### `Protected` fetch

• **fetch**: *[FetchAPI](../interfaces/fetchapi.md)*

*Inherited from [BaseAPI](baseapi.md).[fetch](baseapi.md#protected-fetch)*

*Defined in [src/generated/api.ts:60](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L60)*

## Methods

###  uploadAttachment

▸ **uploadAttachment**(`uploadOptions`: [UploadAttachmentOptions](../interfaces/uploadattachmentoptions.md), `options?`: any): *Promise‹string[]›*

*Defined in [src/generated/api.ts:3704](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L3704)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`uploadOptions` | [UploadAttachmentOptions](../interfaces/uploadattachmentoptions.md) | uploadOptions |
`options?` | any | - |

**Returns:** *Promise‹string[]›*

___

###  uploadMultipartForm

▸ **uploadMultipartForm**(`file`: any, `contentType?`: string, `contentTypeHeader?`: string, `filename?`: string, `xFilename?`: string, `options?`: any): *Promise‹string[]›*

*Defined in [src/generated/api.ts:3720](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L3720)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`file` | any | file |
`contentType?` | string | - |
`contentTypeHeader?` | string | - |
`filename?` | string | - |
`xFilename?` | string | - |
`options?` | any | - |

**Returns:** *Promise‹string[]›*
