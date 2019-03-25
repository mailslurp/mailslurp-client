[mailslurp-swagger-sdk-ts](../README.md) > ["api"](../modules/_api_.md) > [ReceiveEmailsApi](../classes/_api_.receiveemailsapi.md)

# Class: ReceiveEmailsApi

ReceiveEmailsApi - object-oriented interface

*__export__*: 

*__class__*: ReceiveEmailsApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](_api_.baseapi.md)

**↳ ReceiveEmailsApi**

## Index

### Constructors

* [constructor](_api_.receiveemailsapi.md#constructor)

### Properties

* [basePath](_api_.receiveemailsapi.md#basepath)
* [configuration](_api_.receiveemailsapi.md#configuration)
* [fetch](_api_.receiveemailsapi.md#fetch)

### Methods

* [createInboxUsingPOST](_api_.receiveemailsapi.md#createinboxusingpost)
* [getEmailAnalyticsUsingGET](_api_.receiveemailsapi.md#getemailanalyticsusingget)
* [getEmailUsingGET](_api_.receiveemailsapi.md#getemailusingget)
* [getEmailsUsingGET](_api_.receiveemailsapi.md#getemailsusingget)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ReceiveEmailsApi**(configuration?: *`Configuration`*, basePath?: *`string`*, fetch?: *[FetchAPI](../interfaces/_api_.fetchapi.md)*): [ReceiveEmailsApi](_api_.receiveemailsapi.md)

*Inherited from [BaseAPI](_api_.baseapi.md).[constructor](_api_.baseapi.md#constructor)*

*Defined in api.ts:58*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | `Configuration` | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` fetch | [FetchAPI](../interfaces/_api_.fetchapi.md) |  portableFetch |

**Returns:** [ReceiveEmailsApi](_api_.receiveemailsapi.md)

___

## Properties

<a id="basepath"></a>

### `<Protected>` basePath

**● basePath**: *`string`*

*Inherited from [BaseAPI](_api_.baseapi.md).[basePath](_api_.baseapi.md#basepath)*

*Defined in api.ts:60*

___
<a id="configuration"></a>

### `<Protected>` configuration

**● configuration**: *`Configuration`*

*Inherited from [BaseAPI](_api_.baseapi.md).[configuration](_api_.baseapi.md#configuration)*

*Defined in api.ts:58*

___
<a id="fetch"></a>

### `<Protected>` fetch

**● fetch**: *[FetchAPI](../interfaces/_api_.fetchapi.md)*

*Inherited from [BaseAPI](_api_.baseapi.md).[fetch](_api_.baseapi.md#fetch)*

*Defined in api.ts:60*

___

## Methods

<a id="createinboxusingpost"></a>

###  createInboxUsingPOST

▸ **createInboxUsingPOST**(options?: *`any`*): `Promise`<[Inbox](../interfaces/_api_.inbox.md)>

*Defined in api.ts:1760*

Create a new ephemeral email address to send and receive from

*__summary__*: Create Inbox

*__throws__*: {RequiredError}

*__memberof__*: ReceiveEmailsApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | `any` |

**Returns:** `Promise`<[Inbox](../interfaces/_api_.inbox.md)>

___
<a id="getemailanalyticsusingget"></a>

###  getEmailAnalyticsUsingGET

▸ **getEmailAnalyticsUsingGET**(id: *`string`*, options?: *`any`*): `Promise`<[EmailAnalytics](../interfaces/_api_.emailanalytics.md)>

*Defined in api.ts:1772*

Returns a spam analysis on a given email

*__summary__*: Get Email Analytics

*__throws__*: {RequiredError}

*__memberof__*: ReceiveEmailsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  id |
| `Optional` options | `any` |

**Returns:** `Promise`<[EmailAnalytics](../interfaces/_api_.emailanalytics.md)>

___
<a id="getemailusingget"></a>

###  getEmailUsingGET

▸ **getEmailUsingGET**(id: *`string`*, options?: *`any`*): `Promise`<[Email](../interfaces/_api_.email.md)>

*Defined in api.ts:1784*

Returns a email summary object with headers and content. To retrieve the raw email download it from the `raw` url.

*__summary__*: Get Email Content

*__throws__*: {RequiredError}

*__memberof__*: ReceiveEmailsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  id |
| `Optional` options | `any` |

**Returns:** `Promise`<[Email](../interfaces/_api_.email.md)>

___
<a id="getemailsusingget"></a>

###  getEmailsUsingGET

▸ **getEmailsUsingGET**(id: *`string`*, limit?: *`number`*, minCount?: *`number`*, retryTimeout?: *`number`*, since?: *`Date`*, options?: *`any`*): `Promise`<[EmailPreview](../interfaces/_api_.emailpreview.md)[]>

*Defined in api.ts:1800*

List emails that inbox has received. To make this endpoint wait for a minimum number of emails use the minCount parameter. The server will retry the inbox database until the minCount is satisfied or the retryTimeout is reached.

*__summary__*: List Inbox's Emails

*__throws__*: {RequiredError}

*__memberof__*: ReceiveEmailsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  Id of inbox that emails belongs to |
| `Optional` limit | `number` |
| `Optional` minCount | `number` |
| `Optional` retryTimeout | `number` |
| `Optional` since | `Date` |
| `Optional` options | `any` |

**Returns:** `Promise`<[EmailPreview](../interfaces/_api_.emailpreview.md)[]>

___

