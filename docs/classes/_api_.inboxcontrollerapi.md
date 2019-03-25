[mailslurp-swagger-sdk-ts](../README.md) > ["api"](../modules/_api_.md) > [InboxControllerApi](../classes/_api_.inboxcontrollerapi.md)

# Class: InboxControllerApi

InboxControllerApi - object-oriented interface

*__export__*: 

*__class__*: InboxControllerApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](_api_.baseapi.md)

**↳ InboxControllerApi**

## Index

### Constructors

* [constructor](_api_.inboxcontrollerapi.md#constructor)

### Properties

* [basePath](_api_.inboxcontrollerapi.md#basepath)
* [configuration](_api_.inboxcontrollerapi.md#configuration)
* [fetch](_api_.inboxcontrollerapi.md#fetch)

### Methods

* [createInboxUsingPOST](_api_.inboxcontrollerapi.md#createinboxusingpost)
* [deleteInboxUsingDELETE](_api_.inboxcontrollerapi.md#deleteinboxusingdelete)
* [getEmailsUsingGET](_api_.inboxcontrollerapi.md#getemailsusingget)
* [getInboxUsingGET](_api_.inboxcontrollerapi.md#getinboxusingget)
* [getInboxesUsingGET](_api_.inboxcontrollerapi.md#getinboxesusingget)
* [sendEmailUsingPOST](_api_.inboxcontrollerapi.md#sendemailusingpost)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new InboxControllerApi**(configuration?: *`Configuration`*, basePath?: *`string`*, fetch?: *[FetchAPI](../interfaces/_api_.fetchapi.md)*): [InboxControllerApi](_api_.inboxcontrollerapi.md)

*Inherited from [BaseAPI](_api_.baseapi.md).[constructor](_api_.baseapi.md#constructor)*

*Defined in api.ts:58*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | `Configuration` | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` fetch | [FetchAPI](../interfaces/_api_.fetchapi.md) |  portableFetch |

**Returns:** [InboxControllerApi](_api_.inboxcontrollerapi.md)

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

*Defined in api.ts:1026*

Create a new ephemeral email address to send and receive from

*__summary__*: Create Inbox

*__throws__*: {RequiredError}

*__memberof__*: InboxControllerApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | `any` |

**Returns:** `Promise`<[Inbox](../interfaces/_api_.inbox.md)>

___
<a id="deleteinboxusingdelete"></a>

###  deleteInboxUsingDELETE

▸ **deleteInboxUsingDELETE**(id: *`string`*, options?: *`any`*): `Promise`<`Response`>

*Defined in api.ts:1038*

Permanently delete an inbox and associated email address

*__summary__*: Delete Inbox

*__throws__*: {RequiredError}

*__memberof__*: InboxControllerApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  id |
| `Optional` options | `any` |

**Returns:** `Promise`<`Response`>

___
<a id="getemailsusingget"></a>

###  getEmailsUsingGET

▸ **getEmailsUsingGET**(id: *`string`*, limit?: *`number`*, minCount?: *`number`*, retryTimeout?: *`number`*, since?: *`Date`*, options?: *`any`*): `Promise`<[EmailPreview](../interfaces/_api_.emailpreview.md)[]>

*Defined in api.ts:1054*

List emails that inbox has received. To make this endpoint wait for a minimum number of emails use the minCount parameter. The server will retry the inbox database until the minCount is satisfied or the retryTimeout is reached.

*__summary__*: List Inbox's Emails

*__throws__*: {RequiredError}

*__memberof__*: InboxControllerApi

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
<a id="getinboxusingget"></a>

###  getInboxUsingGET

▸ **getInboxUsingGET**(id: *`string`*, options?: *`any`*): `Promise`<[Inbox](../interfaces/_api_.inbox.md)>

*Defined in api.ts:1066*

Returns an inbox's properties, including its email address

*__summary__*: Get Inbox

*__throws__*: {RequiredError}

*__memberof__*: InboxControllerApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  id |
| `Optional` options | `any` |

**Returns:** `Promise`<[Inbox](../interfaces/_api_.inbox.md)>

___
<a id="getinboxesusingget"></a>

###  getInboxesUsingGET

▸ **getInboxesUsingGET**(options?: *`any`*): `Promise`<[Inbox](../interfaces/_api_.inbox.md)[]>

*Defined in api.ts:1077*

List your inboxes

*__summary__*: List Inboxes

*__throws__*: {RequiredError}

*__memberof__*: InboxControllerApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | `any` |

**Returns:** `Promise`<[Inbox](../interfaces/_api_.inbox.md)[]>

___
<a id="sendemailusingpost"></a>

###  sendEmailUsingPOST

▸ **sendEmailUsingPOST**(id: *`string`*, sendEmailOptions: *[SendEmailOptions](../interfaces/_api_.sendemailoptions.md)*, options?: *`any`*): `Promise`<`Response`>

*Defined in api.ts:1090*

Send an email from the inbox's email address

*__summary__*: Send Email

*__throws__*: {RequiredError}

*__memberof__*: InboxControllerApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  id |
| sendEmailOptions | [SendEmailOptions](../interfaces/_api_.sendemailoptions.md) |  sendEmailOptions |
| `Optional` options | `any` |

**Returns:** `Promise`<`Response`>

___

