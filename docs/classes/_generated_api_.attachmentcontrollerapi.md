# Class: AttachmentControllerApi

AttachmentControllerApi - object-oriented interface

**`export`** 

**`class`** AttachmentControllerApi

**`extends`** {BaseAPI}

## Hierarchy

* [BaseAPI](_generated_api_.baseapi.md)

  ↳ **AttachmentControllerApi**

## Constructors

###  constructor

\+ **new AttachmentControllerApi**(`configuration?`: [Configuration](_generated_configuration_.configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md)): *[AttachmentControllerApi](_generated_api_.attachmentcontrollerapi.md)*

*Inherited from [BaseAPI](_generated_api_.baseapi.md).[constructor](_generated_api_.baseapi.md#constructor)*

*Defined in [src/generated/api.ts:58](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L58)*

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

*Defined in [src/generated/api.ts:60](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L60)*

___

### `Protected` configuration

• **configuration**: *[Configuration](_generated_configuration_.configuration.md)*

*Inherited from [BaseAPI](_generated_api_.baseapi.md).[configuration](_generated_api_.baseapi.md#protected-configuration)*

*Defined in [src/generated/api.ts:58](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L58)*

___

### `Protected` fetch

• **fetch**: *[FetchAPI](../interfaces/_generated_api_.fetchapi.md)*

*Inherited from [BaseAPI](_generated_api_.baseapi.md).[fetch](_generated_api_.baseapi.md#protected-fetch)*

*Defined in [src/generated/api.ts:60](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L60)*

## Methods

###  uploadAttachment

▸ **uploadAttachment**(`uploadOptions`: [UploadAttachmentOptions](../interfaces/_generated_api_.uploadattachmentoptions.md), `options?`: any): *Promise‹string[]›*

*Defined in [src/generated/api.ts:3396](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L3396)*

When sending emails with attachments first upload each attachment with this endpoint. Record the returned attachment IDs. Then use these attachment IDs in the SendEmailOptions when sending an email. This means that attachments can easily be reused.

**`summary`** Upload an attachment for sending

**`throws`** {RequiredError}

**`memberof`** AttachmentControllerApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`uploadOptions` | [UploadAttachmentOptions](../interfaces/_generated_api_.uploadattachmentoptions.md) | uploadOptions |
`options?` | any | - |

**Returns:** *Promise‹string[]›*

___

###  uploadMultipartForm

▸ **uploadMultipartForm**(`file`: any, `contentType?`: string, `contentTypeHeader?`: string, `filename?`: string, `xFilename?`: string, `options?`: any): *Promise‹string[]›*

*Defined in [src/generated/api.ts:3412](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L3412)*

When sending emails with attachments first upload each attachment with this endpoint. Record the returned attachment IDs. Then use these attachment IDs in the SendEmailOptions when sending an email. This means that attachments can easily be reused.

**`summary`** Upload an attachment for sending using Multipart Form

**`throws`** {RequiredError}

**`memberof`** AttachmentControllerApi

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
