
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

### Variables

* [COLLECTION_FORMATS](#collection_formats)
* [CommonOperationsApiFactory](#commonoperationsapifactory)
* [CommonOperationsApiFetchParamCreator](#commonoperationsapifetchparamcreator)
* [CommonOperationsApiFp](#commonoperationsapifp)
* [ExtraOperationsApiFactory](#extraoperationsapifactory)
* [ExtraOperationsApiFetchParamCreator](#extraoperationsapifetchparamcreator)
* [ExtraOperationsApiFp](#extraoperationsapifp)

---

## Type aliases

<a id="config"></a>

###  Config

**Ƭ Config**: *`object`*

*Defined in [index.ts:30](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4c3ccf1/index.ts#L30)*

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

*Defined in [index.ts:41](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4c3ccf1/index.ts#L41)*

Options for advanced message fetching

*__remarks__*: For more control over fetching. See also Webhook endpoints

#### Type declaration

___

## Variables

<a id="collection_formats"></a>

### `<Const>` COLLECTION_FORMATS

**● COLLECTION_FORMATS**: *`object`*

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:18*

*__export__*: 

#### Type declaration

___
<a id="commonoperationsapifactory"></a>

### `<Const>` CommonOperationsApiFactory

**● CommonOperationsApiFactory**: *`function`*

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:708*

CommonOperationsApi - factory interface

*__export__*: 

#### Type declaration
▸(configuration?: *[Configuration](classes/configuration.md)*, fetch?: *[FetchAPI](interfaces/fetchapi.md)*, basePath?: *`string`*): `object`

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |
| `Optional` fetch | [FetchAPI](interfaces/fetchapi.md) |
| `Optional` basePath | `string` |

**Returns:** `object`

___
<a id="commonoperationsapifetchparamcreator"></a>

### `<Const>` CommonOperationsApiFetchParamCreator

**● CommonOperationsApiFetchParamCreator**: *`function`*

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:538*

CommonOperationsApi - fetch parameter creator

*__export__*: 

#### Type declaration
▸(configuration?: *[Configuration](classes/configuration.md)*): `object`

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="commonoperationsapifp"></a>

### `<Const>` CommonOperationsApiFp

**● CommonOperationsApiFp**: *`function`*

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:623*

CommonOperationsApi - functional programming interface

*__export__*: 

#### Type declaration
▸(configuration?: *[Configuration](classes/configuration.md)*): `object`

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="extraoperationsapifactory"></a>

### `<Const>` ExtraOperationsApiFactory

**● ExtraOperationsApiFactory**: *`function`*

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:1205*

ExtraOperationsApi - factory interface

*__export__*: 

#### Type declaration
▸(configuration?: *[Configuration](classes/configuration.md)*, fetch?: *[FetchAPI](interfaces/fetchapi.md)*, basePath?: *`string`*): `object`

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |
| `Optional` fetch | [FetchAPI](interfaces/fetchapi.md) |
| `Optional` basePath | `string` |

**Returns:** `object`

___
<a id="extraoperationsapifetchparamcreator"></a>

### `<Const>` ExtraOperationsApiFetchParamCreator

**● ExtraOperationsApiFetchParamCreator**: *`function`*

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:889*

ExtraOperationsApi - fetch parameter creator

*__export__*: 

#### Type declaration
▸(configuration?: *[Configuration](classes/configuration.md)*): `object`

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="extraoperationsapifp"></a>

### `<Const>` ExtraOperationsApiFp

**● ExtraOperationsApiFp**: *`function`*

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:1047*

ExtraOperationsApi - functional programming interface

*__export__*: 

#### Type declaration
▸(configuration?: *[Configuration](classes/configuration.md)*): `object`

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___

