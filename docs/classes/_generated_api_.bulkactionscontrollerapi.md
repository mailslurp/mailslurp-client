# Class: BulkActionsControllerApi

BulkActionsControllerApi - object-oriented interface

**`export`** 

**`class`** BulkActionsControllerApi

**`extends`** {BaseAPI}

## Hierarchy

* [BaseAPI](_generated_api_.baseapi.md)

  ↳ **BulkActionsControllerApi**

## Constructors

###  constructor

\+ **new BulkActionsControllerApi**(`configuration?`: [Configuration](_generated_configuration_.configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md)): *[BulkActionsControllerApi](_generated_api_.bulkactionscontrollerapi.md)*

*Inherited from [BaseAPI](_generated_api_.baseapi.md).[constructor](_generated_api_.baseapi.md#constructor)*

*Defined in [src/generated/api.ts:58](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L58)*

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

*Defined in [src/generated/api.ts:60](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L60)*

___

### `Protected` configuration

• **configuration**: *[Configuration](_generated_configuration_.configuration.md)*

*Inherited from [BaseAPI](_generated_api_.baseapi.md).[configuration](_generated_api_.baseapi.md#protected-configuration)*

*Defined in [src/generated/api.ts:58](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L58)*

___

### `Protected` fetch

• **fetch**: *[FetchAPI](../interfaces/_generated_api_.fetchapi.md)*

*Inherited from [BaseAPI](_generated_api_.baseapi.md).[fetch](_generated_api_.baseapi.md#protected-fetch)*

*Defined in [src/generated/api.ts:60](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L60)*

## Methods

###  bulkCreateInboxes

▸ **bulkCreateInboxes**(`count`: number, `options?`: any): *Promise‹[Inbox](../interfaces/_generated_api_.inbox.md)[]›*

*Defined in [src/generated/api.ts:3667](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L3667)*

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

*Defined in [src/generated/api.ts:3679](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L3679)*

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

*Defined in [src/generated/api.ts:3691](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L3691)*

**`summary`** Bulk Send Emails

**`throws`** {RequiredError}

**`memberof`** BulkActionsControllerApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`bulkSendEmailOptions` | [BulkSendEmailOptions](../interfaces/_generated_api_.bulksendemailoptions.md) | bulkSendEmailOptions |
`options?` | any | - |

**Returns:** *Promise‹Response›*
