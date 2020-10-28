# Class: WaitForControllerApi

## Hierarchy

* [BaseAPI](_generated_api_.baseapi.md)

  ↳ **WaitForControllerApi**

## Constructors

###  constructor

\+ **new WaitForControllerApi**(`configuration?`: [Configuration](_generated_configuration_.configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md)): *[WaitForControllerApi](_generated_api_.waitforcontrollerapi.md)*

*Inherited from [BaseAPI](_generated_api_.baseapi.md).[constructor](_generated_api_.baseapi.md#constructor)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L57)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](_generated_configuration_.configuration.md) | - |
`basePath` | string |  BASE_PATH |
`fetch` | [FetchAPI](../interfaces/_generated_api_.fetchapi.md) |  portableFetch |

**Returns:** *[WaitForControllerApi](_generated_api_.waitforcontrollerapi.md)*

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

###  waitFor

▸ **waitFor**(`waitForConditions?`: [WaitForConditions](../modules/_generated_api_.waitforconditions.md), `options?`: any): *Promise‹[EmailPreview](../interfaces/_generated_api_.emailpreview.md)[]›*

*Defined in [src/generated/api.ts:12932](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L12932)*

**Parameters:**

Name | Type |
------ | ------ |
`waitForConditions?` | [WaitForConditions](../modules/_generated_api_.waitforconditions.md) |
`options?` | any |

**Returns:** *Promise‹[EmailPreview](../interfaces/_generated_api_.emailpreview.md)[]›*

___

###  waitForEmailCount

▸ **waitForEmailCount**(`count?`: number, `inboxId?`: string, `timeout?`: number, `unreadOnly?`: boolean, `options?`: any): *Promise‹[EmailPreview](../interfaces/_generated_api_.emailpreview.md)[]›*

*Defined in [src/generated/api.ts:12950](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L12950)*

**Parameters:**

Name | Type |
------ | ------ |
`count?` | number |
`inboxId?` | string |
`timeout?` | number |
`unreadOnly?` | boolean |
`options?` | any |

**Returns:** *Promise‹[EmailPreview](../interfaces/_generated_api_.emailpreview.md)[]›*

___

###  waitForLatestEmail

▸ **waitForLatestEmail**(`inboxId?`: string, `timeout?`: number, `unreadOnly?`: boolean, `options?`: any): *Promise‹[Email](../interfaces/_generated_api_.email.md)›*

*Defined in [src/generated/api.ts:12976](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L12976)*

**Parameters:**

Name | Type |
------ | ------ |
`inboxId?` | string |
`timeout?` | number |
`unreadOnly?` | boolean |
`options?` | any |

**Returns:** *Promise‹[Email](../interfaces/_generated_api_.email.md)›*

___

###  waitForMatchingEmail

▸ **waitForMatchingEmail**(`matchOptions`: [MatchOptions](../interfaces/_generated_api_.matchoptions.md), `count?`: number, `inboxId?`: string, `timeout?`: number, `unreadOnly?`: boolean, `options?`: any): *Promise‹[EmailPreview](../interfaces/_generated_api_.emailpreview.md)[]›*

*Defined in [src/generated/api.ts:13002](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L13002)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`matchOptions` | [MatchOptions](../interfaces/_generated_api_.matchoptions.md) | matchOptions |
`count?` | number | - |
`inboxId?` | string | - |
`timeout?` | number | - |
`unreadOnly?` | boolean | - |
`options?` | any | - |

**Returns:** *Promise‹[EmailPreview](../interfaces/_generated_api_.emailpreview.md)[]›*

___

###  waitForNthEmail

▸ **waitForNthEmail**(`inboxId?`: string, `index?`: number, `timeout?`: number, `unreadOnly?`: boolean, `options?`: any): *Promise‹[Email](../interfaces/_generated_api_.email.md)›*

*Defined in [src/generated/api.ts:13031](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L13031)*

**Parameters:**

Name | Type |
------ | ------ |
`inboxId?` | string |
`index?` | number |
`timeout?` | number |
`unreadOnly?` | boolean |
`options?` | any |

**Returns:** *Promise‹[Email](../interfaces/_generated_api_.email.md)›*
