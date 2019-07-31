[mailslurp-swagger-sdk-ts](../README.md) > ["api"](../modules/_api_.md)

# External module: "api"

## Index

### Classes

* [BaseAPI](../classes/_api_.baseapi.md)
* [BulkActionsApi](../classes/_api_.bulkactionsapi.md)
* [BulkApi](../classes/_api_.bulkapi.md)
* [EmailControllerApi](../classes/_api_.emailcontrollerapi.md)
* [EnterpriseApi](../classes/_api_.enterpriseapi.md)
* [InboxControllerApi](../classes/_api_.inboxcontrollerapi.md)
* [ManageEntitiesApi](../classes/_api_.manageentitiesapi.md)
* [ReceiveEmailsApi](../classes/_api_.receiveemailsapi.md)
* [RequiredError](../classes/_api_.requirederror.md)
* [SendEmailsApi](../classes/_api_.sendemailsapi.md)

### Interfaces

* [BulkSendEmailOptions](../interfaces/_api_.bulksendemailoptions.md)
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

* [BulkActionsApiFactory](_api_.md#bulkactionsapifactory)
* [BulkActionsApiFetchParamCreator](_api_.md#bulkactionsapifetchparamcreator)
* [BulkActionsApiFp](_api_.md#bulkactionsapifp)
* [BulkApiFactory](_api_.md#bulkapifactory)
* [BulkApiFetchParamCreator](_api_.md#bulkapifetchparamcreator)
* [BulkApiFp](_api_.md#bulkapifp)
* [EmailControllerApiFactory](_api_.md#emailcontrollerapifactory)
* [EmailControllerApiFetchParamCreator](_api_.md#emailcontrollerapifetchparamcreator)
* [EmailControllerApiFp](_api_.md#emailcontrollerapifp)
* [EnterpriseApiFactory](_api_.md#enterpriseapifactory)
* [EnterpriseApiFetchParamCreator](_api_.md#enterpriseapifetchparamcreator)
* [EnterpriseApiFp](_api_.md#enterpriseapifp)
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

<a id="bulkactionsapifactory"></a>

### `<Const>` BulkActionsApiFactory

▸ **BulkActionsApiFactory**(configuration?: *`Configuration`*, fetch?: *[FetchAPI](../interfaces/_api_.fetchapi.md)*, basePath?: *`string`*): `object`

*Defined in api.ts:788*

BulkActionsApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | `Configuration` |
| `Optional` fetch | [FetchAPI](../interfaces/_api_.fetchapi.md) |
| `Optional` basePath | `string` |

**Returns:** `object`

___
<a id="bulkactionsapifetchparamcreator"></a>

### `<Const>` BulkActionsApiFetchParamCreator

▸ **BulkActionsApiFetchParamCreator**(configuration?: *`Configuration`*): `object`

*Defined in api.ts:593*

BulkActionsApi - fetch parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | `Configuration` |

**Returns:** `object`

___
<a id="bulkactionsapifp"></a>

### `<Const>` BulkActionsApiFp

▸ **BulkActionsApiFp**(configuration?: *`Configuration`*): `object`

*Defined in api.ts:722*

BulkActionsApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | `Configuration` |

**Returns:** `object`

___
<a id="bulkapifactory"></a>

### `<Const>` BulkApiFactory

▸ **BulkApiFactory**(configuration?: *`Configuration`*, fetch?: *[FetchAPI](../interfaces/_api_.fetchapi.md)*, basePath?: *`string`*): `object`

*Defined in api.ts:509*

BulkApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | `Configuration` |
| `Optional` fetch | [FetchAPI](../interfaces/_api_.fetchapi.md) |
| `Optional` basePath | `string` |

**Returns:** `object`

___
<a id="bulkapifetchparamcreator"></a>

### `<Const>` BulkApiFetchParamCreator

▸ **BulkApiFetchParamCreator**(configuration?: *`Configuration`*): `object`

*Defined in api.ts:314*

BulkApi - fetch parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | `Configuration` |

**Returns:** `object`

___
<a id="bulkapifp"></a>

### `<Const>` BulkApiFp

▸ **BulkApiFp**(configuration?: *`Configuration`*): `object`

*Defined in api.ts:443*

BulkApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | `Configuration` |

**Returns:** `object`

___
<a id="emailcontrollerapifactory"></a>

### `<Const>` EmailControllerApiFactory

▸ **EmailControllerApiFactory**(configuration?: *`Configuration`*, fetch?: *[FetchAPI](../interfaces/_api_.fetchapi.md)*, basePath?: *`string`*): `object`

*Defined in api.ts:1114*

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

*Defined in api.ts:872*

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

*Defined in api.ts:1029*

EmailControllerApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | `Configuration` |

**Returns:** `object`

___
<a id="enterpriseapifactory"></a>

### `<Const>` EnterpriseApiFactory

▸ **EnterpriseApiFactory**(configuration?: *`Configuration`*, fetch?: *[FetchAPI](../interfaces/_api_.fetchapi.md)*, basePath?: *`string`*): `object`

*Defined in api.ts:1415*

EnterpriseApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | `Configuration` |
| `Optional` fetch | [FetchAPI](../interfaces/_api_.fetchapi.md) |
| `Optional` basePath | `string` |

**Returns:** `object`

___
<a id="enterpriseapifetchparamcreator"></a>

### `<Const>` EnterpriseApiFetchParamCreator

▸ **EnterpriseApiFetchParamCreator**(configuration?: *`Configuration`*): `object`

*Defined in api.ts:1220*

EnterpriseApi - fetch parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | `Configuration` |

**Returns:** `object`

___
<a id="enterpriseapifp"></a>

### `<Const>` EnterpriseApiFp

▸ **EnterpriseApiFp**(configuration?: *`Configuration`*): `object`

*Defined in api.ts:1349*

EnterpriseApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | `Configuration` |

**Returns:** `object`

___
<a id="inboxcontrollerapifactory"></a>

### `<Const>` InboxControllerApiFactory

▸ **InboxControllerApiFactory**(configuration?: *`Configuration`*, fetch?: *[FetchAPI](../interfaces/_api_.fetchapi.md)*, basePath?: *`string`*): `object`

*Defined in api.ts:1873*

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

*Defined in api.ts:1499*

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

*Defined in api.ts:1747*

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

*Defined in api.ts:2323*

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

*Defined in api.ts:2029*

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

*Defined in api.ts:2220*

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

*Defined in api.ts:2823*

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

*Defined in api.ts:2449*

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

*Defined in api.ts:2697*

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

*Defined in api.ts:3230*

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

*Defined in api.ts:2979*

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

*Defined in api.ts:3145*

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

