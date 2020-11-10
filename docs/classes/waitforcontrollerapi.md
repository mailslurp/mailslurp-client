# Class: WaitForControllerApi

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **WaitForControllerApi**

## Constructors

###  constructor

\+ **new WaitForControllerApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/fetchapi.md)): *[WaitForControllerApi](waitforcontrollerapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [src/generated/api.ts:58](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L58)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`fetch` | [FetchAPI](../interfaces/fetchapi.md) |  portableFetch |

**Returns:** *[WaitForControllerApi](waitforcontrollerapi.md)*

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

###  waitFor

▸ **waitFor**(`waitForConditions?`: [WaitForConditions](../modules/waitforconditions.md), `options?`: any): *Promise‹[EmailPreview](../interfaces/emailpreview.md)[]›*

*Defined in [src/generated/api.ts:9727](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L9727)*

**Parameters:**

Name | Type |
------ | ------ |
`waitForConditions?` | [WaitForConditions](../modules/waitforconditions.md) |
`options?` | any |

**Returns:** *Promise‹[EmailPreview](../interfaces/emailpreview.md)[]›*

___

###  waitForEmailCount

▸ **waitForEmailCount**(`count?`: number, `inboxId?`: string, `timeout?`: number, `unreadOnly?`: boolean, `options?`: any): *Promise‹[EmailPreview](../interfaces/emailpreview.md)[]›*

*Defined in [src/generated/api.ts:9742](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L9742)*

**Parameters:**

Name | Type |
------ | ------ |
`count?` | number |
`inboxId?` | string |
`timeout?` | number |
`unreadOnly?` | boolean |
`options?` | any |

**Returns:** *Promise‹[EmailPreview](../interfaces/emailpreview.md)[]›*

___

###  waitForLatestEmail

▸ **waitForLatestEmail**(`inboxId?`: string, `timeout?`: number, `unreadOnly?`: boolean, `options?`: any): *Promise‹[Email](../interfaces/email.md)›*

*Defined in [src/generated/api.ts:9756](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L9756)*

**Parameters:**

Name | Type |
------ | ------ |
`inboxId?` | string |
`timeout?` | number |
`unreadOnly?` | boolean |
`options?` | any |

**Returns:** *Promise‹[Email](../interfaces/email.md)›*

___

###  waitForMatchingEmail

▸ **waitForMatchingEmail**(`matchOptions`: [MatchOptions](../interfaces/matchoptions.md), `count?`: number, `inboxId?`: string, `timeout?`: number, `unreadOnly?`: boolean, `options?`: any): *Promise‹[EmailPreview](../interfaces/emailpreview.md)[]›*

*Defined in [src/generated/api.ts:9772](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L9772)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`matchOptions` | [MatchOptions](../interfaces/matchoptions.md) | matchOptions |
`count?` | number | - |
`inboxId?` | string | - |
`timeout?` | number | - |
`unreadOnly?` | boolean | - |
`options?` | any | - |

**Returns:** *Promise‹[EmailPreview](../interfaces/emailpreview.md)[]›*

___

###  waitForNthEmail

▸ **waitForNthEmail**(`inboxId?`: string, `index?`: number, `timeout?`: number, `unreadOnly?`: boolean, `options?`: any): *Promise‹[Email](../interfaces/email.md)›*

*Defined in [src/generated/api.ts:9787](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L9787)*

**Parameters:**

Name | Type |
------ | ------ |
`inboxId?` | string |
`index?` | number |
`timeout?` | number |
`unreadOnly?` | boolean |
`options?` | any |

**Returns:** *Promise‹[Email](../interfaces/email.md)›*
