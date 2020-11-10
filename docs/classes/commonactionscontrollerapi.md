# Class: CommonActionsControllerApi

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **CommonActionsControllerApi**

## Constructors

###  constructor

\+ **new CommonActionsControllerApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/fetchapi.md)): *[CommonActionsControllerApi](commonactionscontrollerapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [src/generated/api.ts:58](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L58)*

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

###  createNewEmailAddress

▸ **createNewEmailAddress**(`options?`: any): *Promise‹[Inbox](../interfaces/inbox.md)›*

*Defined in [src/generated/api.ts:4300](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L4300)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *Promise‹[Inbox](../interfaces/inbox.md)›*

___

###  createNewEmailAddress1

▸ **createNewEmailAddress1**(`options?`: any): *Promise‹[Inbox](../interfaces/inbox.md)›*

*Defined in [src/generated/api.ts:4311](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L4311)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *Promise‹[Inbox](../interfaces/inbox.md)›*

___

###  emptyInbox

▸ **emptyInbox**(`inboxId`: string, `options?`: any): *Promise‹Response›*

*Defined in [src/generated/api.ts:4323](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L4323)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`inboxId` | string | inboxId |
`options?` | any | - |

**Returns:** *Promise‹Response›*

___

###  sendEmailSimple

▸ **sendEmailSimple**(`emailOptions`: [SimpleSendEmailOptions](../interfaces/simplesendemailoptions.md), `options?`: any): *Promise‹Response›*

*Defined in [src/generated/api.ts:4335](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L4335)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`emailOptions` | [SimpleSendEmailOptions](../interfaces/simplesendemailoptions.md) | emailOptions |
`options?` | any | - |

**Returns:** *Promise‹Response›*
