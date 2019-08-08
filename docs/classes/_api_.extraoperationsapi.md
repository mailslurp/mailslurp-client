[mailslurp-swagger-sdk-ts](../README.md) > ["api"](../modules/_api_.md) > [ExtraOperationsApi](../classes/_api_.extraoperationsapi.md)

# Class: ExtraOperationsApi

ExtraOperationsApi - object-oriented interface

*__export__*: 

*__class__*: ExtraOperationsApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](_api_.baseapi.md)

**↳ ExtraOperationsApi**

## Index

### Constructors

* [constructor](_api_.extraoperationsapi.md#constructor)

### Properties

* [basePath](_api_.extraoperationsapi.md#basepath)
* [configuration](_api_.extraoperationsapi.md#configuration)
* [fetch](_api_.extraoperationsapi.md#fetch)

### Methods

* [bulkCreateInboxesUsingPOST](_api_.extraoperationsapi.md#bulkcreateinboxesusingpost)
* [bulkDeleteInboxesUsingDELETE](_api_.extraoperationsapi.md#bulkdeleteinboxesusingdelete)
* [bulkSendEmailsUsingPOST](_api_.extraoperationsapi.md#bulksendemailsusingpost)
* [createInboxUsingPOST](_api_.extraoperationsapi.md#createinboxusingpost)
* [deleteEmailUsingDELETE](_api_.extraoperationsapi.md#deleteemailusingdelete)
* [deleteInboxUsingDELETE](_api_.extraoperationsapi.md#deleteinboxusingdelete)
* [getEmailUsingGET](_api_.extraoperationsapi.md#getemailusingget)
* [getEmailsUsingGET](_api_.extraoperationsapi.md#getemailsusingget)
* [getInboxUsingGET](_api_.extraoperationsapi.md#getinboxusingget)
* [getInboxesUsingGET](_api_.extraoperationsapi.md#getinboxesusingget)
* [getRawEmailUsingGET](_api_.extraoperationsapi.md#getrawemailusingget)
* [sendEmailUsingPOST](_api_.extraoperationsapi.md#sendemailusingpost)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ExtraOperationsApi**(configuration?: *`Configuration`*, basePath?: *`string`*, fetch?: *[FetchAPI](../interfaces/_api_.fetchapi.md)*): [ExtraOperationsApi](_api_.extraoperationsapi.md)

*Inherited from [BaseAPI](_api_.baseapi.md).[constructor](_api_.baseapi.md#constructor)*

*Defined in api.ts:58*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | `Configuration` | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` fetch | [FetchAPI](../interfaces/_api_.fetchapi.md) |  portableFetch |

**Returns:** [ExtraOperationsApi](_api_.extraoperationsapi.md)

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

*Defined in api.ts:1477*

Enterprise Plan Required

*__summary__*: Bulk create Inboxes (email addresses)

*__throws__*: {RequiredError}

*__memberof__*: ExtraOperationsApi

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

*Defined in api.ts:1489*

Enterprise Plan Required

*__summary__*: Bulk Delete Inboxes

*__throws__*: {RequiredError}

*__memberof__*: ExtraOperationsApi

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

*Defined in api.ts:1501*

Enterprise Plan Required

*__summary__*: Bulk Send Emails

*__throws__*: {RequiredError}

*__memberof__*: ExtraOperationsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| bulkSendEmailOptions | [BulkSendEmailOptions](../interfaces/_api_.bulksendemailoptions.md) |  bulkSendEmailOptions |
| `Optional` options | `any` |

**Returns:** `Promise`<`Response`>

___
<a id="createinboxusingpost"></a>

###  createInboxUsingPOST

▸ **createInboxUsingPOST**(options?: *`any`*): `Promise`<[Inbox](../interfaces/_api_.inbox.md)>

*Defined in api.ts:1512*

Create a new inbox and ephemeral email address to send and receive from. This is a necessary step before sending or receiving emails. The response contains the inbox's ID and its associated email address. It is recommended that you create a new inbox during each test method so that it is unique and empty

*__summary__*: Create an Inbox (email address)

*__throws__*: {RequiredError}

*__memberof__*: ExtraOperationsApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | `any` |

**Returns:** `Promise`<[Inbox](../interfaces/_api_.inbox.md)>

___
<a id="deleteemailusingdelete"></a>

###  deleteEmailUsingDELETE

▸ **deleteEmailUsingDELETE**(emailId: *`string`*, options?: *`any`*): `Promise`<`Response`>

*Defined in api.ts:1524*

Deletes an email and removes it from the inbox

*__summary__*: Delete Email

*__throws__*: {RequiredError}

*__memberof__*: ExtraOperationsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| emailId | `string` |  emailId |
| `Optional` options | `any` |

**Returns:** `Promise`<`Response`>

___
<a id="deleteinboxusingdelete"></a>

###  deleteInboxUsingDELETE

▸ **deleteInboxUsingDELETE**(inboxId: *`string`*, options?: *`any`*): `Promise`<`Response`>

*Defined in api.ts:1536*

Permanently delete an inbox and associated email address

*__summary__*: Delete Inbox

*__throws__*: {RequiredError}

*__memberof__*: ExtraOperationsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| inboxId | `string` |  inboxId |
| `Optional` options | `any` |

**Returns:** `Promise`<`Response`>

___
<a id="getemailusingget"></a>

###  getEmailUsingGET

▸ **getEmailUsingGET**(emailId: *`string`*, options?: *`any`*): `Promise`<[Email](../interfaces/_api_.email.md)>

*Defined in api.ts:1548*

Returns a email summary object with headers and content. To retrieve the raw unparsed email use the getRawMessage endpoint

*__summary__*: Get Email Content

*__throws__*: {RequiredError}

*__memberof__*: ExtraOperationsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| emailId | `string` |  emailId |
| `Optional` options | `any` |

**Returns:** `Promise`<[Email](../interfaces/_api_.email.md)>

___
<a id="getemailsusingget"></a>

###  getEmailsUsingGET

▸ **getEmailsUsingGET**(inboxId: *`string`*, limit?: *`number`*, minCount?: *`number`*, retryTimeout?: *`number`*, since?: *`Date`*, options?: *`any`*): `Promise`<[EmailPreview](../interfaces/_api_.emailpreview.md)[]>

*Defined in api.ts:1564*

List emails that an inbox has received. Only emails that are sent to the inbox's email address will appear in the inbox. It may take several seconds for any email you send to an inbox's email address to appear in the inbox. To make this endpoint wait for a minimum number of emails use the `minCount` parameter. The server will retry the inbox database until the `minCount` is satisfied or the `retryTimeout` is reached

*__summary__*: List an Inbox's Emails

*__throws__*: {RequiredError}

*__memberof__*: ExtraOperationsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| inboxId | `string` |  Id of inbox that emails belongs to |
| `Optional` limit | `number` |
| `Optional` minCount | `number` |
| `Optional` retryTimeout | `number` |
| `Optional` since | `Date` |
| `Optional` options | `any` |

**Returns:** `Promise`<[EmailPreview](../interfaces/_api_.emailpreview.md)[]>

___
<a id="getinboxusingget"></a>

###  getInboxUsingGET

▸ **getInboxUsingGET**(inboxId: *`string`*, options?: *`any`*): `Promise`<[Inbox](../interfaces/_api_.inbox.md)>

*Defined in api.ts:1576*

Returns an inbox's properties, including its email address and ID

*__summary__*: Get Inbox

*__throws__*: {RequiredError}

*__memberof__*: ExtraOperationsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| inboxId | `string` |  inboxId |
| `Optional` options | `any` |

**Returns:** `Promise`<[Inbox](../interfaces/_api_.inbox.md)>

___
<a id="getinboxesusingget"></a>

###  getInboxesUsingGET

▸ **getInboxesUsingGET**(options?: *`any`*): `Promise`<[Inbox](../interfaces/_api_.inbox.md)[]>

*Defined in api.ts:1587*

List the inboxes you have created

*__summary__*: List Inboxes

*__throws__*: {RequiredError}

*__memberof__*: ExtraOperationsApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | `any` |

**Returns:** `Promise`<[Inbox](../interfaces/_api_.inbox.md)[]>

___
<a id="getrawemailusingget"></a>

###  getRawEmailUsingGET

▸ **getRawEmailUsingGET**(emailId: *`string`*, options?: *`any`*): `Promise`<`string`>

*Defined in api.ts:1599*

Returns a raw, unparsed and unprocessed email

*__summary__*: Get Raw Email Content

*__throws__*: {RequiredError}

*__memberof__*: ExtraOperationsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| emailId | `string` |  emailId |
| `Optional` options | `any` |

**Returns:** `Promise`<`string`>

___
<a id="sendemailusingpost"></a>

###  sendEmailUsingPOST

▸ **sendEmailUsingPOST**(inboxId: *`string`*, sendEmailOptions: *[SendEmailOptions](../interfaces/_api_.sendemailoptions.md)*, options?: *`any`*): `Promise`<`Response`>

*Defined in api.ts:1612*

Send an email from the inbox's email address. Specify the email recipients and contents in the request body. See the `SendEmailOptions` for more information. Note the `inboxId` refers to the inbox's id NOT its email address

*__summary__*: Send Email

*__throws__*: {RequiredError}

*__memberof__*: ExtraOperationsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| inboxId | `string` |  inboxId |
| sendEmailOptions | [SendEmailOptions](../interfaces/_api_.sendemailoptions.md) |  sendEmailOptions |
| `Optional` options | `any` |

**Returns:** `Promise`<`Response`>

___

