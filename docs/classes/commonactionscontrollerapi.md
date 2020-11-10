# Class: CommonActionsControllerApi

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **CommonActionsControllerApi**

## Constructors

###  constructor

\+ **new CommonActionsControllerApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/fetchapi.md)): *[CommonActionsControllerApi](commonactionscontrollerapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L57)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`fetch` | [FetchAPI](../interfaces/fetchapi.md) |  portableFetch |

**Returns:** *[CommonActionsControllerApi](commonactionscontrollerapi.md)*

## Properties

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

*Defined in [src/generated/api.ts:61](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L61)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md)*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L57)*

___

### `Protected` fetch

• **fetch**: *[FetchAPI](../interfaces/fetchapi.md)*

*Inherited from [BaseAPI](baseapi.md).[fetch](baseapi.md#protected-fetch)*

*Defined in [src/generated/api.ts:62](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L62)*

## Methods

###  createNewEmailAddress

▸ **createNewEmailAddress**(`options?`: any): *Promise‹[Inbox](../interfaces/inbox.md)›*

*Defined in [src/generated/api.ts:4977](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L4977)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *Promise‹[Inbox](../interfaces/inbox.md)›*

___

###  createNewEmailAddress1

▸ **createNewEmailAddress1**(`options?`: any): *Promise‹[Inbox](../interfaces/inbox.md)›*

*Defined in [src/generated/api.ts:4990](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L4990)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *Promise‹[Inbox](../interfaces/inbox.md)›*

___

###  emptyInbox

▸ **emptyInbox**(`inboxId`: string, `options?`: any): *Promise‹Response›*

*Defined in [src/generated/api.ts:5004](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L5004)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`inboxId` | string | inboxId |
`options?` | any | - |

**Returns:** *Promise‹Response›*

___

###  sendEmailSimple

▸ **sendEmailSimple**(`emailOptions`: [SimpleSendEmailOptions](../interfaces/simplesendemailoptions.md), `options?`: any): *Promise‹Response›*

*Defined in [src/generated/api.ts:5019](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L5019)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`emailOptions` | [SimpleSendEmailOptions](../interfaces/simplesendemailoptions.md) | emailOptions |
`options?` | any | - |

**Returns:** *Promise‹Response›*
