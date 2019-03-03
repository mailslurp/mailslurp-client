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

* [createInboxUsingPOST](_api_.sendemailsapi.md#createinboxusingpost)
* [sendMessageUsingPOST](_api_.sendemailsapi.md#sendmessageusingpost)

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

<a id="createinboxusingpost"></a>

###  createInboxUsingPOST

▸ **createInboxUsingPOST**(options?: *`any`*): `Promise`<[Inbox](../interfaces/_api_.inbox.md)>

*Defined in api.ts:1982*

Create a new ephemeral email address to send and receive from

*__summary__*: Create Inbox

*__throws__*: {RequiredError}

*__memberof__*: SendEmailsApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | `any` |

**Returns:** `Promise`<[Inbox](../interfaces/_api_.inbox.md)>

___
<a id="sendmessageusingpost"></a>

###  sendMessageUsingPOST

▸ **sendMessageUsingPOST**(id: *`string`*, sendEmailOptions: *[SendEmailOptions](../interfaces/_api_.sendemailoptions.md)*, options?: *`any`*): `Promise`<`Response`>

*Defined in api.ts:1995*

Send an email from the inbox's email address

*__summary__*: Send Email

*__throws__*: {RequiredError}

*__memberof__*: SendEmailsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  id |
| sendEmailOptions | [SendEmailOptions](../interfaces/_api_.sendemailoptions.md) |  sendEmailOptions |
| `Optional` options | `any` |

**Returns:** `Promise`<`Response`>

___

