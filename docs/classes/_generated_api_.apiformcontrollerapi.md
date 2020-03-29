[MailSlurp JS](../README.md) › [Globals](../globals.md) › ["generated/api"](../modules/_generated_api_.md) › [ApiFormControllerApi](_generated_api_.apiformcontrollerapi.md)

# Class: ApiFormControllerApi

ApiFormControllerApi - object-oriented interface

**`export`** 

**`class`** ApiFormControllerApi

**`extends`** {BaseAPI}

## Hierarchy

* [BaseAPI](_generated_api_.baseapi.md)

  ↳ **ApiFormControllerApi**

## Index

### Constructors

* [constructor](_generated_api_.apiformcontrollerapi.md#constructor)

### Properties

* [basePath](_generated_api_.apiformcontrollerapi.md#protected-basepath)
* [configuration](_generated_api_.apiformcontrollerapi.md#protected-configuration)
* [fetch](_generated_api_.apiformcontrollerapi.md#protected-fetch)

### Methods

* [submitForm](_generated_api_.apiformcontrollerapi.md#submitform)

## Constructors

###  constructor

\+ **new ApiFormControllerApi**(`configuration?`: [Configuration](_generated_configuration_.configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md)): *[ApiFormControllerApi](_generated_api_.apiformcontrollerapi.md)*

*Inherited from [BaseAPI](_generated_api_.baseapi.md).[constructor](_generated_api_.baseapi.md#constructor)*

Defined in src/generated/api.ts:57

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](_generated_configuration_.configuration.md) | - |
`basePath` | string |  BASE_PATH |
`fetch` | [FetchAPI](../interfaces/_generated_api_.fetchapi.md) |  portableFetch |

**Returns:** *[ApiFormControllerApi](_generated_api_.apiformcontrollerapi.md)*

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

###  submitForm

▸ **submitForm**(`to`: string, `bcc?`: string, `body?`: string, `cc?`: string, `confirmationMessage?`: string, `files?`: Array‹any›, `from?`: string, `redirectTo?`: string, `replyTo?`: string, `spamCheck?`: string, `subject?`: string, `options?`: any): *Promise‹string›*

Defined in src/generated/api.ts:2781

Submit a URL encoded form to be used to send an email

**`summary`** Send email from form inputs

**`throws`** {RequiredError}

**`memberof`** ApiFormControllerApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`to` | string | Email recipient email address |
`bcc?` | string | - |
`body?` | string | - |
`cc?` | string | - |
`confirmationMessage?` | string | - |
`files?` | Array‹any› | - |
`from?` | string | - |
`redirectTo?` | string | - |
`replyTo?` | string | - |
`spamCheck?` | string | - |
`subject?` | string | - |
`options?` | any | - |

**Returns:** *Promise‹string›*
