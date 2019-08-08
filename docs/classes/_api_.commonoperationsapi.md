[mailslurp-swagger-sdk-ts](../README.md) > ["api"](../modules/_api_.md) > [CommonOperationsApi](../classes/_api_.commonoperationsapi.md)

# Class: CommonOperationsApi

CommonOperationsApi - object-oriented interface

*__export__*: 

*__class__*: CommonOperationsApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](_api_.baseapi.md)

**↳ CommonOperationsApi**

## Index

### Constructors

* [constructor](_api_.commonoperationsapi.md#constructor)

### Properties

* [basePath](_api_.commonoperationsapi.md#basepath)
* [configuration](_api_.commonoperationsapi.md#configuration)
* [fetch](_api_.commonoperationsapi.md#fetch)

### Methods

* [createNewEmailAddressUsingPOST](_api_.commonoperationsapi.md#createnewemailaddressusingpost)
* [fetchLatestEmailUsingGET](_api_.commonoperationsapi.md#fetchlatestemailusingget)
* [sendEmailSimpleUsingPOST](_api_.commonoperationsapi.md#sendemailsimpleusingpost)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new CommonOperationsApi**(configuration?: *`Configuration`*, basePath?: *`string`*, fetch?: *[FetchAPI](../interfaces/_api_.fetchapi.md)*): [CommonOperationsApi](_api_.commonoperationsapi.md)

*Inherited from [BaseAPI](_api_.baseapi.md).[constructor](_api_.baseapi.md#constructor)*

*Defined in api.ts:58*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | `Configuration` | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` fetch | [FetchAPI](../interfaces/_api_.fetchapi.md) |  portableFetch |

**Returns:** [CommonOperationsApi](_api_.commonoperationsapi.md)

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

<a id="createnewemailaddressusingpost"></a>

###  createNewEmailAddressUsingPOST

▸ **createNewEmailAddressUsingPOST**(options?: *`any`*): `Promise`<[Inbox](../interfaces/_api_.inbox.md)>

*Defined in api.ts:580*

Returns an Inbox with an `id` and an `emailAddress`

*__summary__*: Create new email address

*__throws__*: {RequiredError}

*__memberof__*: CommonOperationsApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | `any` |

**Returns:** `Promise`<[Inbox](../interfaces/_api_.inbox.md)>

___
<a id="fetchlatestemailusingget"></a>

###  fetchLatestEmailUsingGET

▸ **fetchLatestEmailUsingGET**(inboxEmailAddress?: *`string`*, inboxId?: *`string`*, options?: *`any`*): `Promise`<[Email](../interfaces/_api_.email.md)>

*Defined in api.ts:593*

Will return either the last received email or wait for an email to arrive and return that. If you need to wait for an email for a non-empty inbox see the other receive methods.

*__summary__*: Fetch inbox's latest email or if empty wait for email to arrive

*__throws__*: {RequiredError}

*__memberof__*: CommonOperationsApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` inboxEmailAddress | `string` |
| `Optional` inboxId | `string` |
| `Optional` options | `any` |

**Returns:** `Promise`<[Email](../interfaces/_api_.email.md)>

___
<a id="sendemailsimpleusingpost"></a>

###  sendEmailSimpleUsingPOST

▸ **sendEmailSimpleUsingPOST**(sendEmailOptions: *[SendEmailOptions](../interfaces/_api_.sendemailoptions.md)*, options?: *`any`*): `Promise`<`Response`>

*Defined in api.ts:605*

To specify an email address first create an inbox and use that with the other send email methods

*__summary__*: Send an email from a random email address

*__throws__*: {RequiredError}

*__memberof__*: CommonOperationsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| sendEmailOptions | [SendEmailOptions](../interfaces/_api_.sendemailoptions.md) |  sendEmailOptions |
| `Optional` options | `any` |

**Returns:** `Promise`<`Response`>

___

