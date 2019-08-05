[mailslurp-swagger-sdk-ts](../README.md) > ["api"](../modules/_api_.md)

# External module: "api"

## Index

### Classes

* [BaseAPI](../classes/_api_.baseapi.md)
* [CommonOperationsApi](../classes/_api_.commonoperationsapi.md)
* [ExtraOperationsApi](../classes/_api_.extraoperationsapi.md)
* [RequiredError](../classes/_api_.requirederror.md)

### Interfaces

* [BulkSendEmailOptions](../interfaces/_api_.bulksendemailoptions.md)
* [Email](../interfaces/_api_.email.md)
* [EmailAnalysis](../interfaces/_api_.emailanalysis.md)
* [EmailPreview](../interfaces/_api_.emailpreview.md)
* [FetchAPI](../interfaces/_api_.fetchapi.md)
* [FetchArgs](../interfaces/_api_.fetchargs.md)
* [Inbox](../interfaces/_api_.inbox.md)
* [SendEmailOptions](../interfaces/_api_.sendemailoptions.md)

### Variables

* [BASE_PATH](_api_.md#base_path)

### Functions

* [CommonOperationsApiFactory](_api_.md#commonoperationsapifactory)
* [CommonOperationsApiFetchParamCreator](_api_.md#commonoperationsapifetchparamcreator)
* [CommonOperationsApiFp](_api_.md#commonoperationsapifp)
* [ExtraOperationsApiFactory](_api_.md#extraoperationsapifactory)
* [ExtraOperationsApiFetchParamCreator](_api_.md#extraoperationsapifetchparamcreator)
* [ExtraOperationsApiFp](_api_.md#extraoperationsapifp)

### Object literals

* [COLLECTION_FORMATS](_api_.md#collection_formats)

---

## Variables

<a id="base_path"></a>

### `<Const>` BASE_PATH

**● BASE_PATH**: *`string`* =  "https://api.mailslurp.com".replace(/\/+$/, "")

*Defined in api.ts:20*

___

## Functions

<a id="commonoperationsapifactory"></a>

### `<Const>` CommonOperationsApiFactory

▸ **CommonOperationsApiFactory**(configuration?: *`Configuration`*, fetch?: *[FetchAPI](../interfaces/_api_.fetchapi.md)*, basePath?: *`string`*): `object`

*Defined in api.ts:531*

CommonOperationsApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | `Configuration` |
| `Optional` fetch | [FetchAPI](../interfaces/_api_.fetchapi.md) |
| `Optional` basePath | `string` |

**Returns:** `object`

___
<a id="commonoperationsapifetchparamcreator"></a>

### `<Const>` CommonOperationsApiFetchParamCreator

▸ **CommonOperationsApiFetchParamCreator**(configuration?: *`Configuration`*): `object`

*Defined in api.ts:344*

CommonOperationsApi - fetch parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | `Configuration` |

**Returns:** `object`

___
<a id="commonoperationsapifp"></a>

### `<Const>` CommonOperationsApiFp

▸ **CommonOperationsApiFp**(configuration?: *`Configuration`*): `object`

*Defined in api.ts:465*

CommonOperationsApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | `Configuration` |

**Returns:** `object`

___
<a id="extraoperationsapifactory"></a>

### `<Const>` ExtraOperationsApiFactory

▸ **ExtraOperationsApiFactory**(configuration?: *`Configuration`*, fetch?: *[FetchAPI](../interfaces/_api_.fetchapi.md)*, basePath?: *`string`*): `object`

*Defined in api.ts:1334*

ExtraOperationsApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | `Configuration` |
| `Optional` fetch | [FetchAPI](../interfaces/_api_.fetchapi.md) |
| `Optional` basePath | `string` |

**Returns:** `object`

___
<a id="extraoperationsapifetchparamcreator"></a>

### `<Const>` ExtraOperationsApiFetchParamCreator

▸ **ExtraOperationsApiFetchParamCreator**(configuration?: *`Configuration`*): `object`

*Defined in api.ts:615*

ExtraOperationsApi - fetch parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | `Configuration` |

**Returns:** `object`

___
<a id="extraoperationsapifp"></a>

### `<Const>` ExtraOperationsApiFp

▸ **ExtraOperationsApiFp**(configuration?: *`Configuration`*): `object`

*Defined in api.ts:1094*

ExtraOperationsApi - functional programming interface

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

*Defined in api.ts:26*

*__export__*: 

<a id="collection_formats.csv"></a>

####  csv

**● csv**: *`string`* = ","

*Defined in api.ts:27*

___
<a id="collection_formats.pipes"></a>

####  pipes

**● pipes**: *`string`* = "|"

*Defined in api.ts:30*

___
<a id="collection_formats.ssv"></a>

####  ssv

**● ssv**: *`string`* = " "

*Defined in api.ts:28*

___
<a id="collection_formats.tsv"></a>

####  tsv

**● tsv**: *`string`* = "	"

*Defined in api.ts:29*

___

___

