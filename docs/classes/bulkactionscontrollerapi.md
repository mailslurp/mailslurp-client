**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / BulkActionsControllerApi

# Class: BulkActionsControllerApi

BulkActionsControllerApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **BulkActionsControllerApi**

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

## Constructors

### constructor

\+ **new BulkActionsControllerApi**(`configuration?`: [Configuration](configuration.md), `basePath?`: string, `fetch?`: [FetchAPI](../interfaces/fetchapi.md)): [BulkActionsControllerApi](bulkactionscontrollerapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/cce5bf2/src/generated/api.ts#L57)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE\_PATH |
`fetch` | [FetchAPI](../interfaces/fetchapi.md) | portableFetch |

**Returns:** [BulkActionsControllerApi](bulkactionscontrollerapi.md)

## Properties

### basePath

• `Protected` **basePath**: string

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#basepath)*

*Defined in [src/generated/api.ts:61](https://github.com/mailslurp/mailslurp-client/blob/cce5bf2/src/generated/api.ts#L61)*

___

### configuration

• `Protected` **configuration**: [Configuration](configuration.md)

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#configuration)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/cce5bf2/src/generated/api.ts#L57)*

___

### fetch

• `Protected` **fetch**: [FetchAPI](../interfaces/fetchapi.md)

*Inherited from [BaseAPI](baseapi.md).[fetch](baseapi.md#fetch)*

*Defined in [src/generated/api.ts:62](https://github.com/mailslurp/mailslurp-client/blob/cce5bf2/src/generated/api.ts#L62)*

## Methods

### bulkCreateInboxes

▸ **bulkCreateInboxes**(`count`: number, `options?`: any): Promise\<[Inbox](../modules/inbox.md)[]>

*Defined in [src/generated/api.ts:10436](https://github.com/mailslurp/mailslurp-client/blob/cce5bf2/src/generated/api.ts#L10436)*

**`summary`** Bulk create Inboxes (email addresses)

**`throws`** {RequiredError}

**`memberof`** BulkActionsControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`count` | number | Number of inboxes to be created in bulk |
`options?` | any | - |

**Returns:** Promise\<[Inbox](../modules/inbox.md)[]>

___

### bulkDeleteInboxes

▸ **bulkDeleteInboxes**(`ids`: Array\<string>, `options?`: any): Promise\<Response>

*Defined in [src/generated/api.ts:10451](https://github.com/mailslurp/mailslurp-client/blob/cce5bf2/src/generated/api.ts#L10451)*

**`summary`** Bulk Delete Inboxes

**`throws`** {RequiredError}

**`memberof`** BulkActionsControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`ids` | Array\<string> | ids |
`options?` | any | - |

**Returns:** Promise\<Response>

___

### bulkSendEmails

▸ **bulkSendEmails**(`bulkSendEmailOptions`: [BulkSendEmailOptions](../interfaces/bulksendemailoptions.md), `options?`: any): Promise\<Response>

*Defined in [src/generated/api.ts:10466](https://github.com/mailslurp/mailslurp-client/blob/cce5bf2/src/generated/api.ts#L10466)*

**`summary`** Bulk Send Emails

**`throws`** {RequiredError}

**`memberof`** BulkActionsControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`bulkSendEmailOptions` | [BulkSendEmailOptions](../interfaces/bulksendemailoptions.md) | bulkSendEmailOptions |
`options?` | any | - |

**Returns:** Promise\<Response>
