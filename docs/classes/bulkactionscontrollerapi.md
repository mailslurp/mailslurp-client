[MailSlurp Client](../README.md) > [BulkActionsControllerApi](../classes/bulkactionscontrollerapi.md)

# Class: BulkActionsControllerApi

BulkActionsControllerApi - object-oriented interface

*__export__*: 

*__class__*: BulkActionsControllerApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ BulkActionsControllerApi**

## Index

### Constructors

* [constructor](bulkactionscontrollerapi.md#constructor)

### Properties

* [basePath](bulkactionscontrollerapi.md#basepath)
* [configuration](bulkactionscontrollerapi.md#configuration)
* [fetch](bulkactionscontrollerapi.md#fetch)

### Methods

* [bulkCreateInboxes](bulkactionscontrollerapi.md#bulkcreateinboxes)
* [bulkDeleteInboxes](bulkactionscontrollerapi.md#bulkdeleteinboxes)
* [bulkSendEmails](bulkactionscontrollerapi.md#bulksendemails)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new BulkActionsControllerApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, fetch?: *[FetchAPI](../interfaces/fetchapi.md)*): [BulkActionsControllerApi](bulkactionscontrollerapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:49*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) |
| `Optional` basePath | `string` |
| `Optional` fetch | [FetchAPI](../interfaces/fetchapi.md) |

**Returns:** [BulkActionsControllerApi](bulkactionscontrollerapi.md)

___

## Properties

<a id="basepath"></a>

### `<Protected>` basePath

**● basePath**: *`string`*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#basepath)*

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:47*

___
<a id="configuration"></a>

### `<Protected>` configuration

**● configuration**: *[Configuration](configuration.md) \| `undefined`*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#configuration)*

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:49*

___
<a id="fetch"></a>

### `<Protected>` fetch

**● fetch**: *[FetchAPI](../interfaces/fetchapi.md)*

*Inherited from [BaseAPI](baseapi.md).[fetch](baseapi.md#fetch)*

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:48*

___

## Methods

<a id="bulkcreateinboxes"></a>

###  bulkCreateInboxes

▸ **bulkCreateInboxes**(count: *`number`*, options?: *`any`*): `Promise`<[Inbox](../interfaces/inbox.md)[]>

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:1176*

Enterprise Plan Required

*__summary__*: Bulk create Inboxes (email addresses)

*__throws__*: {RequiredError}

*__memberof__*: BulkActionsControllerApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| count | `number` |  Number of inboxes to be created in bulk |
| `Optional` options | `any` |

**Returns:** `Promise`<[Inbox](../interfaces/inbox.md)[]>

___
<a id="bulkdeleteinboxes"></a>

###  bulkDeleteInboxes

▸ **bulkDeleteInboxes**(requestBody: *`Array`<`string`>*, options?: *`any`*): `Promise`<`Response`>

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:1185*

Enterprise Plan Required

*__summary__*: Bulk Delete Inboxes

*__throws__*: {RequiredError}

*__memberof__*: BulkActionsControllerApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| requestBody | `Array`<`string`> |  ids |
| `Optional` options | `any` |

**Returns:** `Promise`<`Response`>

___
<a id="bulksendemails"></a>

###  bulkSendEmails

▸ **bulkSendEmails**(bulkSendEmailOptions: *[BulkSendEmailOptions](../interfaces/bulksendemailoptions.md)*, options?: *`any`*): `Promise`<`Response`>

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:1194*

Enterprise Plan Required

*__summary__*: Bulk Send Emails

*__throws__*: {RequiredError}

*__memberof__*: BulkActionsControllerApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| bulkSendEmailOptions | [BulkSendEmailOptions](../interfaces/bulksendemailoptions.md) |  bulkSendEmailOptions |
| `Optional` options | `any` |

**Returns:** `Promise`<`Response`>

___

