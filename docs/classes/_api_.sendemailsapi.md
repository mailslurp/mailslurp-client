[mailslurp-swagger-sdk-ts](../README.md) > ["api"](../modules/_api_.md) > [SendEmailsApi](../classes/_api_.sendemailsapi.md)

# Class: SendEmailsApi

SendEmailsApi - object-oriented interface

*__export__*: 

*__class__*: SendEmailsApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](_api_.baseapi.md)

**↳ SendEmailsApi**

## Index

### Constructors

* [constructor](_api_.sendemailsapi.md#constructor)

### Properties

* [basePath](_api_.sendemailsapi.md#basepath)
* [configuration](_api_.sendemailsapi.md#configuration)
* [fetch](_api_.sendemailsapi.md#fetch)

### Methods

* [bulkCreateInboxesUsingPOST](_api_.sendemailsapi.md#bulkcreateinboxesusingpost)
* [bulkSendEmailsUsingPOST](_api_.sendemailsapi.md#bulksendemailsusingpost)
* [createInboxUsingPOST](_api_.sendemailsapi.md#createinboxusingpost)
* [sendEmailUsingPOST](_api_.sendemailsapi.md#sendemailusingpost)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new SendEmailsApi**(configuration?: *`Configuration`*, basePath?: *`string`*, fetch?: *[FetchAPI](../interfaces/_api_.fetchapi.md)*): [SendEmailsApi](_api_.sendemailsapi.md)

*Inherited from [BaseAPI](_api_.baseapi.md).[constructor](_api_.baseapi.md#constructor)*

*Defined in api.ts:58*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | `Configuration` | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` fetch | [FetchAPI](../interfaces/_api_.fetchapi.md) |  portableFetch |

**Returns:** [SendEmailsApi](_api_.sendemailsapi.md)

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

*Defined in api.ts:3290*

Enterprise Account Required

*__summary__*: Bulk create Inboxes (email addresses)

*__throws__*: {RequiredError}

*__memberof__*: SendEmailsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| count | `number` |  Number of inboxes to be created in bulk |
| `Optional` options | `any` |

**Returns:** `Promise`<[Inbox](../interfaces/_api_.inbox.md)[]>

___
<a id="bulksendemailsusingpost"></a>

###  bulkSendEmailsUsingPOST

▸ **bulkSendEmailsUsingPOST**(bulkSendEmailOptions: *[BulkSendEmailOptions](../interfaces/_api_.bulksendemailoptions.md)*, options?: *`any`*): `Promise`<`Response`>

*Defined in api.ts:3302*

Enterprise Account Required

*__summary__*: Bulk Send Emails

*__throws__*: {RequiredError}

*__memberof__*: SendEmailsApi

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

*Defined in api.ts:3313*

Create a new inbox and ephemeral email address to send and receive from. This is a necessary step before sending or receiving emails. The response contains the inbox's ID and its associated email address. It is recommended that you create a new inbox during each test method so that it is unique and empty

*__summary__*: Create an Inbox (email address)

*__throws__*: {RequiredError}

*__memberof__*: SendEmailsApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | `any` |

**Returns:** `Promise`<[Inbox](../interfaces/_api_.inbox.md)>

___
<a id="sendemailusingpost"></a>

###  sendEmailUsingPOST

▸ **sendEmailUsingPOST**(inboxId: *`string`*, sendEmailOptions: *[SendEmailOptions](../interfaces/_api_.sendemailoptions.md)*, options?: *`any`*): `Promise`<`Response`>

*Defined in api.ts:3326*

Send an email from the inbox's email address. Specify the email recipients and contents in the request body. See the `SendEmailOptions` for more information. Note the `inboxId` refers to the inbox's id NOT its email address

*__summary__*: Send Email

*__throws__*: {RequiredError}

*__memberof__*: SendEmailsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| inboxId | `string` |  inboxId |
| sendEmailOptions | [SendEmailOptions](../interfaces/_api_.sendemailoptions.md) |  sendEmailOptions |
| `Optional` options | `any` |

**Returns:** `Promise`<`Response`>

___

