# Class: BulkActionsControllerApi

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **BulkActionsControllerApi**

## Constructors

###  constructor

\+ **new BulkActionsControllerApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/fetchapi.md)): *[BulkActionsControllerApi](bulkactionscontrollerapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [src/generated/api.ts:58](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L58)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`fetch` | [FetchAPI](../interfaces/fetchapi.md) |  portableFetch |

**Returns:** *[BulkActionsControllerApi](bulkactionscontrollerapi.md)*

## Properties

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

*Defined in [src/generated/api.ts:60](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L60)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md)*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [src/generated/api.ts:58](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L58)*

___

### `Protected` fetch

• **fetch**: *[FetchAPI](../interfaces/fetchapi.md)*

*Inherited from [BaseAPI](baseapi.md).[fetch](baseapi.md#protected-fetch)*

*Defined in [src/generated/api.ts:60](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L60)*

## Methods

###  bulkCreateInboxes

▸ **bulkCreateInboxes**(`count`: number, `options?`: any): *Promise‹[Inbox](../interfaces/inbox.md)[]›*

*Defined in [src/generated/api.ts:3975](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L3975)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`count` | number | Number of inboxes to be created in bulk |
`options?` | any | - |

**Returns:** *Promise‹[Inbox](../interfaces/inbox.md)[]›*

___

###  bulkDeleteInboxes

▸ **bulkDeleteInboxes**(`ids`: Array‹string›, `options?`: any): *Promise‹Response›*

*Defined in [src/generated/api.ts:3987](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L3987)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`ids` | Array‹string› | ids |
`options?` | any | - |

**Returns:** *Promise‹Response›*

___

###  bulkSendEmails

▸ **bulkSendEmails**(`bulkSendEmailOptions`: [BulkSendEmailOptions](../interfaces/bulksendemailoptions.md), `options?`: any): *Promise‹Response›*

*Defined in [src/generated/api.ts:3999](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L3999)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`bulkSendEmailOptions` | [BulkSendEmailOptions](../interfaces/bulksendemailoptions.md) | bulkSendEmailOptions |
`options?` | any | - |

**Returns:** *Promise‹Response›*
