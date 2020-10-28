# Class: AttachmentControllerApi

## Hierarchy

* [BaseAPI](_generated_api_.baseapi.md)

  ↳ **AttachmentControllerApi**

## Constructors

###  constructor

\+ **new AttachmentControllerApi**(`configuration?`: [Configuration](_generated_configuration_.configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md)): *[AttachmentControllerApi](_generated_api_.attachmentcontrollerapi.md)*

*Inherited from [BaseAPI](_generated_api_.baseapi.md).[constructor](_generated_api_.baseapi.md#constructor)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L57)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](_generated_configuration_.configuration.md) | - |
`basePath` | string |  BASE_PATH |
`fetch` | [FetchAPI](../interfaces/_generated_api_.fetchapi.md) |  portableFetch |

**Returns:** *[AttachmentControllerApi](_generated_api_.attachmentcontrollerapi.md)*

## Properties

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](_generated_api_.baseapi.md).[basePath](_generated_api_.baseapi.md#protected-basepath)*

*Defined in [src/generated/api.ts:61](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L61)*

___

### `Protected` configuration

• **configuration**: *[Configuration](_generated_configuration_.configuration.md)*

*Inherited from [BaseAPI](_generated_api_.baseapi.md).[configuration](_generated_api_.baseapi.md#protected-configuration)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L57)*

___

### `Protected` fetch

• **fetch**: *[FetchAPI](../interfaces/_generated_api_.fetchapi.md)*

*Inherited from [BaseAPI](_generated_api_.baseapi.md).[fetch](_generated_api_.baseapi.md#protected-fetch)*

*Defined in [src/generated/api.ts:62](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L62)*

## Methods

###  uploadAttachment

▸ **uploadAttachment**(`uploadOptions`: [UploadAttachmentOptions](../interfaces/_generated_api_.uploadattachmentoptions.md), `options?`: any): *Promise‹string[]›*

*Defined in [src/generated/api.ts:3968](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L3968)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`uploadOptions` | [UploadAttachmentOptions](../interfaces/_generated_api_.uploadattachmentoptions.md) | uploadOptions |
`options?` | any | - |

**Returns:** *Promise‹string[]›*

___

###  uploadMultipartForm

▸ **uploadMultipartForm**(`file`: any, `contentType?`: string, `contentTypeHeader?`: string, `filename?`: string, `xFilename?`: string, `options?`: any): *Promise‹string[]›*

*Defined in [src/generated/api.ts:3990](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L3990)*

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
