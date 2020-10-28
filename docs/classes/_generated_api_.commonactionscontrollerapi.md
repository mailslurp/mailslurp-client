# Class: CommonActionsControllerApi

CommonActionsControllerApi - object-oriented interface

**`export`** 

**`class`** CommonActionsControllerApi

**`extends`** {BaseAPI}

## Hierarchy

* [BaseAPI](_generated_api_.baseapi.md)

  ↳ **CommonActionsControllerApi**

## Constructors

###  constructor

\+ **new CommonActionsControllerApi**(`configuration?`: [Configuration](_generated_configuration_.configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md)): *[CommonActionsControllerApi](_generated_api_.commonactionscontrollerapi.md)*

*Inherited from [BaseAPI](_generated_api_.baseapi.md).[constructor](_generated_api_.baseapi.md#constructor)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L57)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](_generated_configuration_.configuration.md) | - |
`basePath` | string |  BASE_PATH |
`fetch` | [FetchAPI](../interfaces/_generated_api_.fetchapi.md) |  portableFetch |

**Returns:** *[CommonActionsControllerApi](_generated_api_.commonactionscontrollerapi.md)*

## Properties

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](_generated_api_.baseapi.md).[basePath](_generated_api_.baseapi.md#protected-basepath)*

*Defined in [src/generated/api.ts:61](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L61)*

___

### `Protected` configuration

• **configuration**: *[Configuration](_generated_configuration_.configuration.md)*

*Inherited from [BaseAPI](_generated_api_.baseapi.md).[configuration](_generated_api_.baseapi.md#protected-configuration)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L57)*

___

### `Protected` fetch

• **fetch**: *[FetchAPI](../interfaces/_generated_api_.fetchapi.md)*

*Inherited from [BaseAPI](_generated_api_.baseapi.md).[fetch](_generated_api_.baseapi.md#protected-fetch)*

*Defined in [src/generated/api.ts:62](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L62)*

## Methods

###  createNewEmailAddress

▸ **createNewEmailAddress**(`options?`: any): *Promise‹[Inbox](../interfaces/_generated_api_.inbox.md)›*

*Defined in [src/generated/api.ts:4839](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L4839)*

Returns an Inbox with an `id` and an `emailAddress`

**`summary`** Create new random inbox

**`throws`** {RequiredError}

**`memberof`** CommonActionsControllerApi

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *Promise‹[Inbox](../interfaces/_generated_api_.inbox.md)›*

___

###  createNewEmailAddress1

▸ **createNewEmailAddress1**(`options?`: any): *Promise‹[Inbox](../interfaces/_generated_api_.inbox.md)›*

*Defined in [src/generated/api.ts:4852](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L4852)*

Returns an Inbox with an `id` and an `emailAddress`

**`summary`** Create new random inbox

**`throws`** {RequiredError}

**`memberof`** CommonActionsControllerApi

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *Promise‹[Inbox](../interfaces/_generated_api_.inbox.md)›*

___

###  emptyInbox

▸ **emptyInbox**(`inboxId`: string, `options?`: any): *Promise‹Response›*

*Defined in [src/generated/api.ts:4866](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L4866)*

Deletes all emails

**`summary`** Delete all emails in an inbox

**`throws`** {RequiredError}

**`memberof`** CommonActionsControllerApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`inboxId` | string | inboxId |
`options?` | any | - |

**Returns:** *Promise‹Response›*

___

###  sendEmailSimple

▸ **sendEmailSimple**(`emailOptions`: [SimpleSendEmailOptions](../interfaces/_generated_api_.simplesendemailoptions.md), `options?`: any): *Promise‹Response›*

*Defined in [src/generated/api.ts:4881](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L4881)*

If no senderId or inboxId provided a random email address will be used to send from.

**`summary`** Send an email

**`throws`** {RequiredError}

**`memberof`** CommonActionsControllerApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`emailOptions` | [SimpleSendEmailOptions](../interfaces/_generated_api_.simplesendemailoptions.md) | emailOptions |
`options?` | any | - |

**Returns:** *Promise‹Response›*
