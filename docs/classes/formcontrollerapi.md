# Class: FormControllerApi

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **FormControllerApi**

## Constructors

###  constructor

\+ **new FormControllerApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/fetchapi.md)): *[FormControllerApi](formcontrollerapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [src/generated/api.ts:58](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L58)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`fetch` | [FetchAPI](../interfaces/fetchapi.md) |  portableFetch |

**Returns:** *[FormControllerApi](formcontrollerapi.md)*

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

###  submitForm

▸ **submitForm**(`emailAddress?`: string, `redirectTo?`: string, `spamCheck?`: string, `subject?`: string, `successMessage?`: string, `to?`: string, `toAlias?`: string, `otherParameters?`: string, `options?`: any): *Promise‹string›*

*Defined in [src/generated/api.ts:6402](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L6402)*

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
