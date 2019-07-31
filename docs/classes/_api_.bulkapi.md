[mailslurp-swagger-sdk-ts](../README.md) > ["api"](../modules/_api_.md) > [BulkApi](../classes/_api_.bulkapi.md)

# Class: BulkApi

BulkApi - object-oriented interface

*__export__*: 

*__class__*: BulkApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](_api_.baseapi.md)

**↳ BulkApi**

## Index

### Constructors

* [constructor](_api_.bulkapi.md#constructor)

### Properties

* [basePath](_api_.bulkapi.md#basepath)
* [configuration](_api_.bulkapi.md#configuration)
* [fetch](_api_.bulkapi.md#fetch)

### Methods

* [bulkCreateInboxesUsingPOST](_api_.bulkapi.md#bulkcreateinboxesusingpost)
* [bulkDeleteInboxesUsingDELETE](_api_.bulkapi.md#bulkdeleteinboxesusingdelete)
* [bulkSendEmailsUsingPOST](_api_.bulkapi.md#bulksendemailsusingpost)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new BulkApi**(configuration?: *`Configuration`*, basePath?: *`string`*, fetch?: *[FetchAPI](../interfaces/_api_.fetchapi.md)*): [BulkApi](_api_.bulkapi.md)

*Inherited from [BaseAPI](_api_.baseapi.md).[constructor](_api_.baseapi.md#constructor)*

*Defined in api.ts:58*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | `Configuration` | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` fetch | [FetchAPI](../interfaces/_api_.fetchapi.md) |  portableFetch |

**Returns:** [BulkApi](_api_.bulkapi.md)

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

<a id="bulkcreateinboxesusingpost"></a>

###  bulkCreateInboxesUsingPOST

▸ **bulkCreateInboxesUsingPOST**(count: *`number`*, options?: *`any`*): `Promise`<[Inbox](../interfaces/_api_.inbox.md)[]>

*Defined in api.ts:559*

Enterprise Account Required

*__summary__*: Bulk create Inboxes (email addresses)

*__throws__*: {RequiredError}

*__memberof__*: BulkApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| count | `number` |  Number of inboxes to be created in bulk |
| `Optional` options | `any` |

**Returns:** `Promise`<[Inbox](../interfaces/_api_.inbox.md)[]>

___
<a id="bulkdeleteinboxesusingdelete"></a>

###  bulkDeleteInboxesUsingDELETE

▸ **bulkDeleteInboxesUsingDELETE**(ids: *`Array`<`string`>*, options?: *`any`*): `Promise`<`Response`>

*Defined in api.ts:571*

Enterprise Account Required

*__summary__*: Bulk Delete Inboxes

*__throws__*: {RequiredError}

*__memberof__*: BulkApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| ids | `Array`<`string`> |  ids |
| `Optional` options | `any` |

**Returns:** `Promise`<`Response`>

___
<a id="bulksendemailsusingpost"></a>

###  bulkSendEmailsUsingPOST

▸ **bulkSendEmailsUsingPOST**(bulkSendEmailOptions: *[BulkSendEmailOptions](../interfaces/_api_.bulksendemailoptions.md)*, options?: *`any`*): `Promise`<`Response`>

*Defined in api.ts:583*

Enterprise Account Required

*__summary__*: Bulk Send Emails

*__throws__*: {RequiredError}

*__memberof__*: BulkApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| bulkSendEmailOptions | [BulkSendEmailOptions](../interfaces/_api_.bulksendemailoptions.md) |  bulkSendEmailOptions |
| `Optional` options | `any` |

**Returns:** `Promise`<`Response`>

___

