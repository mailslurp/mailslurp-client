[MailSlurp JS](../README.md) › [Globals](../globals.md) › ["generated/api"](../modules/_generated_api_.md) › [CommonActionsControllerApi](_generated_api_.commonactionscontrollerapi.md)

# Class: CommonActionsControllerApi

CommonActionsControllerApi - object-oriented interface

**`export`** 

**`class`** CommonActionsControllerApi

**`extends`** {BaseAPI}

## Hierarchy

* [BaseAPI](_generated_api_.baseapi.md)

  ↳ **CommonActionsControllerApi**

## Index

### Constructors

* [constructor](_generated_api_.commonactionscontrollerapi.md#constructor)

### Properties

* [basePath](_generated_api_.commonactionscontrollerapi.md#protected-basepath)
* [configuration](_generated_api_.commonactionscontrollerapi.md#protected-configuration)
* [fetch](_generated_api_.commonactionscontrollerapi.md#protected-fetch)

### Methods

* [createNewEmailAddress](_generated_api_.commonactionscontrollerapi.md#createnewemailaddress)
* [emptyInbox](_generated_api_.commonactionscontrollerapi.md#emptyinbox)
* [sendEmailSimple](_generated_api_.commonactionscontrollerapi.md#sendemailsimple)

## Constructors

###  constructor

\+ **new CommonActionsControllerApi**(`configuration?`: [Configuration](_generated_configuration_.configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md)): *[CommonActionsControllerApi](_generated_api_.commonactionscontrollerapi.md)*

*Inherited from [BaseAPI](_generated_api_.baseapi.md).[constructor](_generated_api_.baseapi.md#constructor)*

Defined in src/generated/api.ts:57

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

Defined in src/generated/api.ts:61

___

### `Protected` configuration

• **configuration**: *[Configuration](_generated_configuration_.configuration.md)*

*Inherited from [BaseAPI](_generated_api_.baseapi.md).[configuration](_generated_api_.baseapi.md#protected-configuration)*

Defined in src/generated/api.ts:57

___

### `Protected` fetch

• **fetch**: *[FetchAPI](../interfaces/_generated_api_.fetchapi.md)*

*Inherited from [BaseAPI](_generated_api_.baseapi.md).[fetch](_generated_api_.baseapi.md#protected-fetch)*

Defined in src/generated/api.ts:62

## Methods

###  createNewEmailAddress

▸ **createNewEmailAddress**(`options?`: any): *Promise‹[Inbox](../interfaces/_generated_api_.inbox.md)›*

Defined in src/generated/api.ts:3884

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

Defined in src/generated/api.ts:3898

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

▸ **sendEmailSimple**(`sendEmailOptions`: [SendEmailOptions](../modules/_generated_api_.sendemailoptions.md), `options?`: any): *Promise‹Response›*

Defined in src/generated/api.ts:3913

To specify an email address first create an inbox and use that with the other send email methods

**`summary`** Send an email from a random email address

**`throws`** {RequiredError}

**`memberof`** CommonActionsControllerApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`sendEmailOptions` | [SendEmailOptions](../modules/_generated_api_.sendemailoptions.md) | sendEmailOptions |
`options?` | any | - |

**Returns:** *Promise‹Response›*
