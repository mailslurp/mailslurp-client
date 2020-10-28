# Class: MailServerControllerApi

## Hierarchy

* [BaseAPI](_generated_api_.baseapi.md)

  ↳ **MailServerControllerApi**

## Constructors

###  constructor

\+ **new MailServerControllerApi**(`configuration?`: [Configuration](_generated_configuration_.configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md)): *[MailServerControllerApi](_generated_api_.mailservercontrollerapi.md)*

*Inherited from [BaseAPI](_generated_api_.baseapi.md).[constructor](_generated_api_.baseapi.md#constructor)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L57)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](_generated_configuration_.configuration.md) | - |
`basePath` | string |  BASE_PATH |
`fetch` | [FetchAPI](../interfaces/_generated_api_.fetchapi.md) |  portableFetch |

**Returns:** *[MailServerControllerApi](_generated_api_.mailservercontrollerapi.md)*

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

###  describeDomain

▸ **describeDomain**(`describeOptions`: [DescribeDomainOptions](../interfaces/_generated_api_.describedomainoptions.md), `options?`: any): *Promise‹Response›*

*Defined in [src/generated/api.ts:11241](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L11241)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`describeOptions` | [DescribeDomainOptions](../interfaces/_generated_api_.describedomainoptions.md) | describeOptions |
`options?` | any | - |

**Returns:** *Promise‹Response›*

___

###  verifyEmailAddress

▸ **verifyEmailAddress**(`verifyOptions`: [VerifyEmailAddressOptions](../interfaces/_generated_api_.verifyemailaddressoptions.md), `options?`: any): *Promise‹Response›*

*Defined in [src/generated/api.ts:11259](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L11259)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`verifyOptions` | [VerifyEmailAddressOptions](../interfaces/_generated_api_.verifyemailaddressoptions.md) | verifyOptions |
`options?` | any | - |

**Returns:** *Promise‹Response›*
