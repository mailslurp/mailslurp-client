
#  MailSlurp Client

## Index

### Modules

* [MatchOption](modules/matchoption.md)

### Classes

* [BaseAPI](classes/baseapi.md)
* [CommonOperationsApi](classes/commonoperationsapi.md)
* [Configuration](classes/configuration.md)
* [ExtraOperationsApi](classes/extraoperationsapi.md)
* [MailSlurp](classes/mailslurp.md)
* [RequiredError](classes/requirederror.md)

### Interfaces

* [BasicAuthOptions](interfaces/basicauthoptions.md)
* [BulkSendEmailOptions](interfaces/bulksendemailoptions.md)
* [ConfigurationParameters](interfaces/configurationparameters.md)
* [CreateWebhookOptions](interfaces/createwebhookoptions.md)
* [Email](interfaces/email.md)
* [EmailAnalysis](interfaces/emailanalysis.md)
* [EmailPreview](interfaces/emailpreview.md)
* [FetchAPI](interfaces/fetchapi.md)
* [FetchArgs](interfaces/fetchargs.md)
* [Inbox](interfaces/inbox.md)
* [MatchOptions](interfaces/matchoptions.md)
* [SendEmailOptions](interfaces/sendemailoptions.md)
* [UploadAttachmentOptions](interfaces/uploadattachmentoptions.md)
* [Webhook](interfaces/webhook.md)

### Type aliases

* [Config](#config)
* [DiffOptions](#diffoptions)
* [GetMessagesOptions](#getmessagesoptions)

### Functions

* [CommonOperationsApiFactory](#commonoperationsapifactory)
* [CommonOperationsApiFetchParamCreator](#commonoperationsapifetchparamcreator)
* [CommonOperationsApiFp](#commonoperationsapifp)
* [ExtraOperationsApiFactory](#extraoperationsapifactory)
* [ExtraOperationsApiFetchParamCreator](#extraoperationsapifetchparamcreator)
* [ExtraOperationsApiFp](#extraoperationsapifp)

### Object literals

* [COLLECTION_FORMATS](#collection_formats)

---

## Type aliases

<a id="config"></a>

###  Config

**Ƭ Config**: *`object`*

*Defined in [index.ts:29](https://github.com/mailslurp/mailslurp-client-ts-js/blob/982b5f6/index.ts#L29)*

MailSlurp config

*__remarks__*: [Obtain your API Key](https://app.mailslurp.com) in your dashboard.

#### Type declaration

___
<a id="diffoptions"></a>

###  DiffOptions

**Ƭ DiffOptions**: *`object`*

*Defined in node_modules/jest-diff/build/types.d.ts:7*

Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.

This source code is licensed under the MIT license found in the LICENSE file in the root directory of this source tree.

#### Type declaration

___
<a id="getmessagesoptions"></a>

###  GetMessagesOptions

**Ƭ GetMessagesOptions**: *`object`*

*Defined in [index.ts:40](https://github.com/mailslurp/mailslurp-client-ts-js/blob/982b5f6/index.ts#L40)*

Options for advanced message fetching

*__remarks__*: For more control over fetching. See also Webhook endpoints

#### Type declaration

___

## Functions

<a id="commonoperationsapifactory"></a>

### `<Const>` CommonOperationsApiFactory

▸ **CommonOperationsApiFactory**(configuration?: *`Configuration`*, fetch?: *`FetchAPI`*, basePath?: *`string`*): `object`

*Defined in node_modules/mailslurp-swagger-sdk-ts/api.ts:1179*

CommonOperationsApi - factory interface CommonOperationsApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | `Configuration` |
| `Optional` fetch | `FetchAPI` |
| `Optional` basePath | `string` |

**Returns:** `object`

___
<a id="commonoperationsapifetchparamcreator"></a>

### `<Const>` CommonOperationsApiFetchParamCreator

▸ **CommonOperationsApiFetchParamCreator**(configuration?: *`Configuration`*): `object`

*Defined in node_modules/mailslurp-swagger-sdk-ts/api.ts:568*

CommonOperationsApi - fetch parameter creator CommonOperationsApi - fetch parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | `Configuration` |

**Returns:** `object`

___
<a id="commonoperationsapifp"></a>

### `<Const>` CommonOperationsApiFp

▸ **CommonOperationsApiFp**(configuration?: *`Configuration`*): `object`

*Defined in node_modules/mailslurp-swagger-sdk-ts/api.ts:992*

CommonOperationsApi - functional programming interface CommonOperationsApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | `Configuration` |

**Returns:** `object`

___
<a id="extraoperationsapifactory"></a>

### `<Const>` ExtraOperationsApiFactory

▸ **ExtraOperationsApiFactory**(configuration?: *`Configuration`*, fetch?: *`FetchAPI`*, basePath?: *`string`*): `object`

*Defined in node_modules/mailslurp-swagger-sdk-ts/api.ts:2582*

ExtraOperationsApi - factory interface ExtraOperationsApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | `Configuration` |
| `Optional` fetch | `FetchAPI` |
| `Optional` basePath | `string` |

**Returns:** `object`

___
<a id="extraoperationsapifetchparamcreator"></a>

### `<Const>` ExtraOperationsApiFetchParamCreator

▸ **ExtraOperationsApiFetchParamCreator**(configuration?: *`Configuration`*): `object`

*Defined in node_modules/mailslurp-swagger-sdk-ts/api.ts:1409*

ExtraOperationsApi - fetch parameter creator ExtraOperationsApi - fetch parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | `Configuration` |

**Returns:** `object`

___
<a id="extraoperationsapifp"></a>

### `<Const>` ExtraOperationsApiFp

▸ **ExtraOperationsApiFp**(configuration?: *`Configuration`*): `object`

*Defined in node_modules/mailslurp-swagger-sdk-ts/api.ts:2223*

ExtraOperationsApi - functional programming interface ExtraOperationsApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | `Configuration` |

**Returns:** `object`

___

## Object literals

<a id="collection_formats"></a>

### `<Const>` COLLECTION_FORMATS

**COLLECTION_FORMATS**: *`object`*

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:18*
*Defined in node_modules/mailslurp-swagger-sdk-ts/api.ts:26*

*__export__*: 

*__export__*: 

<a id="collection_formats.csv"></a>

####  csv

**● csv**: *`string`* = ","

*Defined in node_modules/mailslurp-swagger-sdk-ts/api.ts:27*

___
<a id="collection_formats.pipes"></a>

####  pipes

**● pipes**: *`string`* = "|"

*Defined in node_modules/mailslurp-swagger-sdk-ts/api.ts:30*

___
<a id="collection_formats.ssv"></a>

####  ssv

**● ssv**: *`string`* = " "

*Defined in node_modules/mailslurp-swagger-sdk-ts/api.ts:28*

___
<a id="collection_formats.tsv"></a>

####  tsv

**● tsv**: *`string`* = "	"

*Defined in node_modules/mailslurp-swagger-sdk-ts/api.ts:29*

___

___

