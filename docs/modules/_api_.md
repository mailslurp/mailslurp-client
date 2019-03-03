[mailslurp-swagger-sdk-ts](../README.md) > ["api"](../modules/_api_.md)

# External module: "api"

## Index

### Classes

* [BaseAPI](../classes/_api_.baseapi.md)
* [EmailControllerApi](../classes/_api_.emailcontrollerapi.md)
* [InboxControllerApi](../classes/_api_.inboxcontrollerapi.md)
* [ManageEntitiesApi](../classes/_api_.manageentitiesapi.md)
* [ReceiveEmailsApi](../classes/_api_.receiveemailsapi.md)
* [RequiredError](../classes/_api_.requirederror.md)
* [SendEmailsApi](../classes/_api_.sendemailsapi.md)

### Interfaces

* [Email](../interfaces/_api_.email.md)
* [EmailAnalytics](../interfaces/_api_.emailanalytics.md)
* [EmailPreview](../interfaces/_api_.emailpreview.md)
* [FetchAPI](../interfaces/_api_.fetchapi.md)
* [FetchArgs](../interfaces/_api_.fetchargs.md)
* [Inbox](../interfaces/_api_.inbox.md)
* [SendEmailOptions](../interfaces/_api_.sendemailoptions.md)

### Variables

* [BASE_PATH](_api_.md#base_path)

### Functions

* [EmailControllerApiFactory](_api_.md#emailcontrollerapifactory)
* [EmailControllerApiFetchParamCreator](_api_.md#emailcontrollerapifetchparamcreator)
* [EmailControllerApiFp](_api_.md#emailcontrollerapifp)
* [InboxControllerApiFactory](_api_.md#inboxcontrollerapifactory)
* [InboxControllerApiFetchParamCreator](_api_.md#inboxcontrollerapifetchparamcreator)
* [InboxControllerApiFp](_api_.md#inboxcontrollerapifp)
* [ManageEntitiesApiFactory](_api_.md#manageentitiesapifactory)
* [ManageEntitiesApiFetchParamCreator](_api_.md#manageentitiesapifetchparamcreator)
* [ManageEntitiesApiFp](_api_.md#manageentitiesapifp)
* [ReceiveEmailsApiFactory](_api_.md#receiveemailsapifactory)
* [ReceiveEmailsApiFetchParamCreator](_api_.md#receiveemailsapifetchparamcreator)
* [ReceiveEmailsApiFp](_api_.md#receiveemailsapifp)
* [SendEmailsApiFactory](_api_.md#sendemailsapifactory)
* [SendEmailsApiFetchParamCreator](_api_.md#sendemailsapifetchparamcreator)
* [SendEmailsApiFp](_api_.md#sendemailsapifp)

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

<a id="emailcontrollerapifactory"></a>

### `<Const>` EmailControllerApiFactory

▸ **EmailControllerApiFactory**(configuration?: *`Configuration`*, fetch?: *[FetchAPI](../interfaces/_api_.fetchapi.md)*, basePath?: *`string`*): `object`

*Defined in api.ts:486*

EmailControllerApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | `Configuration` |
| `Optional` fetch | [FetchAPI](../interfaces/_api_.fetchapi.md) |
| `Optional` basePath | `string` |

**Returns:** `object`

___
<a id="emailcontrollerapifetchparamcreator"></a>

### `<Const>` EmailControllerApiFetchParamCreator

▸ **EmailControllerApiFetchParamCreator**(configuration?: *`Configuration`*): `object`

*Defined in api.ts:300*

EmailControllerApi - fetch parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | `Configuration` |

**Returns:** `object`

___
<a id="emailcontrollerapifp"></a>

### `<Const>` EmailControllerApiFp

▸ **EmailControllerApiFp**(configuration?: *`Configuration`*): `object`

*Defined in api.ts:420*

EmailControllerApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | `Configuration` |

**Returns:** `object`

___
<a id="inboxcontrollerapifactory"></a>

### `<Const>` InboxControllerApiFactory

▸ **InboxControllerApiFactory**(configuration?: *`Configuration`*, fetch?: *[FetchAPI](../interfaces/_api_.fetchapi.md)*, basePath?: *`string`*): `object`

*Defined in api.ts:944*

InboxControllerApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | `Configuration` |
| `Optional` fetch | [FetchAPI](../interfaces/_api_.fetchapi.md) |
| `Optional` basePath | `string` |

**Returns:** `object`

___
<a id="inboxcontrollerapifetchparamcreator"></a>

### `<Const>` InboxControllerApiFetchParamCreator

▸ **InboxControllerApiFetchParamCreator**(configuration?: *`Configuration`*): `object`

*Defined in api.ts:570*

InboxControllerApi - fetch parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | `Configuration` |

**Returns:** `object`

___
<a id="inboxcontrollerapifp"></a>

### `<Const>` InboxControllerApiFp

▸ **InboxControllerApiFp**(configuration?: *`Configuration`*): `object`

*Defined in api.ts:818*

InboxControllerApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | `Configuration` |

**Returns:** `object`

___
<a id="manageentitiesapifactory"></a>

### `<Const>` ManageEntitiesApiFactory

▸ **ManageEntitiesApiFactory**(configuration?: *`Configuration`*, fetch?: *[FetchAPI](../interfaces/_api_.fetchapi.md)*, basePath?: *`string`*): `object`

*Defined in api.ts:1335*

ManageEntitiesApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | `Configuration` |
| `Optional` fetch | [FetchAPI](../interfaces/_api_.fetchapi.md) |
| `Optional` basePath | `string` |

**Returns:** `object`

___
<a id="manageentitiesapifetchparamcreator"></a>

### `<Const>` ManageEntitiesApiFetchParamCreator

▸ **ManageEntitiesApiFetchParamCreator**(configuration?: *`Configuration`*): `object`

*Defined in api.ts:1100*

ManageEntitiesApi - fetch parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | `Configuration` |

**Returns:** `object`

___
<a id="manageentitiesapifp"></a>

### `<Const>` ManageEntitiesApiFp

▸ **ManageEntitiesApiFp**(configuration?: *`Configuration`*): `object`

*Defined in api.ts:1251*

ManageEntitiesApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | `Configuration` |

**Returns:** `object`

___
<a id="receiveemailsapifactory"></a>

### `<Const>` ReceiveEmailsApiFactory

▸ **ReceiveEmailsApiFactory**(configuration?: *`Configuration`*, fetch?: *[FetchAPI](../interfaces/_api_.fetchapi.md)*, basePath?: *`string`*): `object`

*Defined in api.ts:1698*

ReceiveEmailsApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | `Configuration` |
| `Optional` fetch | [FetchAPI](../interfaces/_api_.fetchapi.md) |
| `Optional` basePath | `string` |

**Returns:** `object`

___
<a id="receiveemailsapifetchparamcreator"></a>

### `<Const>` ReceiveEmailsApiFetchParamCreator

▸ **ReceiveEmailsApiFetchParamCreator**(configuration?: *`Configuration`*): `object`

*Defined in api.ts:1439*

ReceiveEmailsApi - fetch parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | `Configuration` |

**Returns:** `object`

___
<a id="receiveemailsapifp"></a>

### `<Const>` ReceiveEmailsApiFp

▸ **ReceiveEmailsApiFp**(configuration?: *`Configuration`*): `object`

*Defined in api.ts:1610*

ReceiveEmailsApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | `Configuration` |

**Returns:** `object`

___
<a id="sendemailsapifactory"></a>

### `<Const>` SendEmailsApiFactory

▸ **SendEmailsApiFactory**(configuration?: *`Configuration`*, fetch?: *[FetchAPI](../interfaces/_api_.fetchapi.md)*, basePath?: *`string`*): `object`

*Defined in api.ts:1943*

SendEmailsApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | `Configuration` |
| `Optional` fetch | [FetchAPI](../interfaces/_api_.fetchapi.md) |
| `Optional` basePath | `string` |

**Returns:** `object`

___
<a id="sendemailsapifetchparamcreator"></a>

### `<Const>` SendEmailsApiFetchParamCreator

▸ **SendEmailsApiFetchParamCreator**(configuration?: *`Configuration`*): `object`

*Defined in api.ts:1810*

SendEmailsApi - fetch parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | `Configuration` |

**Returns:** `object`

___
<a id="sendemailsapifp"></a>

### `<Const>` SendEmailsApiFp

▸ **SendEmailsApiFp**(configuration?: *`Configuration`*): `object`

*Defined in api.ts:1896*

SendEmailsApi - functional programming interface

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

