# Class: FormControllerApi

## Hierarchy

* [BaseAPI](_generated_api_.baseapi.md)

  ↳ **FormControllerApi**

## Constructors

###  constructor

\+ **new FormControllerApi**(`configuration?`: [Configuration](_generated_configuration_.configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md)): *[FormControllerApi](_generated_api_.formcontrollerapi.md)*

*Inherited from [BaseAPI](_generated_api_.baseapi.md).[constructor](_generated_api_.baseapi.md#constructor)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L57)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](_generated_configuration_.configuration.md) | - |
`basePath` | string |  BASE_PATH |
`fetch` | [FetchAPI](../interfaces/_generated_api_.fetchapi.md) |  portableFetch |

**Returns:** *[FormControllerApi](_generated_api_.formcontrollerapi.md)*

## Properties

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](_generated_api_.baseapi.md).[basePath](_generated_api_.baseapi.md#protected-basepath)*

*Defined in [src/generated/api.ts:61](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L61)*

___

### `Protected` configuration

• **configuration**: *[Configuration](_generated_configuration_.configuration.md)*

*Inherited from [BaseAPI](_generated_api_.baseapi.md).[configuration](_generated_api_.baseapi.md#protected-configuration)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L57)*

___

### `Protected` fetch

• **fetch**: *[FetchAPI](../interfaces/_generated_api_.fetchapi.md)*

*Inherited from [BaseAPI](_generated_api_.baseapi.md).[fetch](_generated_api_.baseapi.md#protected-fetch)*

*Defined in [src/generated/api.ts:62](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L62)*

## Methods

###  submitForm

▸ **submitForm**(`emailAddress?`: string, `redirectTo?`: string, `spamCheck?`: string, `subject?`: string, `successMessage?`: string, `to?`: string, `toAlias?`: string, `otherParameters?`: string, `options?`: any): *Promise‹string›*

*Defined in [src/generated/api.ts:7969](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L7969)*

**Parameters:**

Name | Type |
------ | ------ |
`emailAddress?` | string |
`redirectTo?` | string |
`spamCheck?` | string |
`subject?` | string |
`successMessage?` | string |
`to?` | string |
`toAlias?` | string |
`otherParameters?` | string |
`options?` | any |

**Returns:** *Promise‹string›*
