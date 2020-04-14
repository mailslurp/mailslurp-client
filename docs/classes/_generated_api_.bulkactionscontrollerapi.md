[MailSlurp JS](../README.md) › [Globals](../globals.md) › ["generated/api"](../modules/_generated_api_.md) › [BulkActionsControllerApi](_generated_api_.bulkactionscontrollerapi.md)

# Class: BulkActionsControllerApi

BulkActionsControllerApi - object-oriented interface

**`export`** 

**`class`** BulkActionsControllerApi

**`extends`** {BaseAPI}

## Hierarchy

* [BaseAPI](_generated_api_.baseapi.md)

  ↳ **BulkActionsControllerApi**

## Index

### Constructors

* [constructor](_generated_api_.bulkactionscontrollerapi.md#constructor)

### Properties

* [basePath](_generated_api_.bulkactionscontrollerapi.md#protected-basepath)
* [configuration](_generated_api_.bulkactionscontrollerapi.md#protected-configuration)
* [fetch](_generated_api_.bulkactionscontrollerapi.md#protected-fetch)

### Methods

* [bulkCreateInboxes](_generated_api_.bulkactionscontrollerapi.md#bulkcreateinboxes)
* [bulkDeleteInboxes](_generated_api_.bulkactionscontrollerapi.md#bulkdeleteinboxes)
* [bulkSendEmails](_generated_api_.bulkactionscontrollerapi.md#bulksendemails)

## Constructors

###  constructor

\+ **new BulkActionsControllerApi**(`configuration?`: [Configuration](_generated_configuration_.configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md)): *[BulkActionsControllerApi](_generated_api_.bulkactionscontrollerapi.md)*

*Inherited from [BaseAPI](_generated_api_.baseapi.md).[constructor](_generated_api_.baseapi.md#constructor)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client-ts-js/blob/26ccbd6/src/generated/api.ts#L57)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](_generated_configuration_.configuration.md) | - |
`basePath` | string |  BASE_PATH |
`fetch` | [FetchAPI](../interfaces/_generated_api_.fetchapi.md) |  portableFetch |

**Returns:** *[BulkActionsControllerApi](_generated_api_.bulkactionscontrollerapi.md)*

## Properties

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](_generated_api_.baseapi.md).[basePath](_generated_api_.baseapi.md#protected-basepath)*

*Defined in [src/generated/api.ts:61](https://github.com/mailslurp/mailslurp-client-ts-js/blob/26ccbd6/src/generated/api.ts#L61)*

___

### `Protected` configuration

• **configuration**: *[Configuration](_generated_configuration_.configuration.md)*

*Inherited from [BaseAPI](_generated_api_.baseapi.md).[configuration](_generated_api_.baseapi.md#protected-configuration)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client-ts-js/blob/26ccbd6/src/generated/api.ts#L57)*

___

### `Protected` fetch

• **fetch**: *[FetchAPI](../interfaces/_generated_api_.fetchapi.md)*

*Inherited from [BaseAPI](_generated_api_.baseapi.md).[fetch](_generated_api_.baseapi.md#protected-fetch)*

*Defined in [src/generated/api.ts:62](https://github.com/mailslurp/mailslurp-client-ts-js/blob/26ccbd6/src/generated/api.ts#L62)*

## Methods

###  bulkCreateInboxes

▸ **bulkCreateInboxes**(`count`: number, `options?`: any): *Promise‹[Inbox](../interfaces/_generated_api_.inbox.md)[]›*

*Defined in [src/generated/api.ts:4208](https://github.com/mailslurp/mailslurp-client-ts-js/blob/26ccbd6/src/generated/api.ts#L4208)*

**`summary`** Bulk create Inboxes (email addresses)

**`throws`** {RequiredError}

**`memberof`** BulkActionsControllerApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`count` | number | Number of inboxes to be created in bulk |
`options?` | any | - |

**Returns:** *Promise‹[Inbox](../interfaces/_generated_api_.inbox.md)[]›*

___

###  bulkDeleteInboxes

▸ **bulkDeleteInboxes**(`ids`: Array‹string›, `options?`: any): *Promise‹Response›*

*Defined in [src/generated/api.ts:4223](https://github.com/mailslurp/mailslurp-client-ts-js/blob/26ccbd6/src/generated/api.ts#L4223)*

**`summary`** Bulk Delete Inboxes

**`throws`** {RequiredError}

**`memberof`** BulkActionsControllerApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`ids` | Array‹string› | ids |
`options?` | any | - |

**Returns:** *Promise‹Response›*

___

###  bulkSendEmails

▸ **bulkSendEmails**(`bulkSendEmailOptions`: [BulkSendEmailOptions](../interfaces/_generated_api_.bulksendemailoptions.md), `options?`: any): *Promise‹Response›*

*Defined in [src/generated/api.ts:4238](https://github.com/mailslurp/mailslurp-client-ts-js/blob/26ccbd6/src/generated/api.ts#L4238)*

**`summary`** Bulk Send Emails

**`throws`** {RequiredError}

**`memberof`** BulkActionsControllerApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`bulkSendEmailOptions` | [BulkSendEmailOptions](../interfaces/_generated_api_.bulksendemailoptions.md) | bulkSendEmailOptions |
`options?` | any | - |

**Returns:** *Promise‹Response›*
