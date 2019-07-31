[mailslurp-swagger-sdk-ts](../README.md) > ["api"](../modules/_api_.md) > [EnterpriseApi](../classes/_api_.enterpriseapi.md)

# Class: EnterpriseApi

EnterpriseApi - object-oriented interface

*__export__*: 

*__class__*: EnterpriseApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](_api_.baseapi.md)

**↳ EnterpriseApi**

## Index

### Constructors

* [constructor](_api_.enterpriseapi.md#constructor)

### Properties

* [basePath](_api_.enterpriseapi.md#basepath)
* [configuration](_api_.enterpriseapi.md#configuration)
* [fetch](_api_.enterpriseapi.md#fetch)

### Methods

* [bulkCreateInboxesUsingPOST](_api_.enterpriseapi.md#bulkcreateinboxesusingpost)
* [bulkDeleteInboxesUsingDELETE](_api_.enterpriseapi.md#bulkdeleteinboxesusingdelete)
* [bulkSendEmailsUsingPOST](_api_.enterpriseapi.md#bulksendemailsusingpost)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new EnterpriseApi**(configuration?: *`Configuration`*, basePath?: *`string`*, fetch?: *[FetchAPI](../interfaces/_api_.fetchapi.md)*): [EnterpriseApi](_api_.enterpriseapi.md)

*Inherited from [BaseAPI](_api_.baseapi.md).[constructor](_api_.baseapi.md#constructor)*

*Defined in api.ts:58*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | `Configuration` | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` fetch | [FetchAPI](../interfaces/_api_.fetchapi.md) |  portableFetch |

**Returns:** [EnterpriseApi](_api_.enterpriseapi.md)

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

*Defined in api.ts:1465*

Enterprise Account Required

*__summary__*: Bulk create Inboxes (email addresses)

*__throws__*: {RequiredError}

*__memberof__*: EnterpriseApi

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

*Defined in api.ts:1477*

Enterprise Account Required

*__summary__*: Bulk Delete Inboxes

*__throws__*: {RequiredError}

*__memberof__*: EnterpriseApi

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

*Defined in api.ts:1489*

Enterprise Account Required

*__summary__*: Bulk Send Emails

*__throws__*: {RequiredError}

*__memberof__*: EnterpriseApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| bulkSendEmailOptions | [BulkSendEmailOptions](../interfaces/_api_.bulksendemailoptions.md) |  bulkSendEmailOptions |
| `Optional` options | `any` |

**Returns:** `Promise`<`Response`>

___

