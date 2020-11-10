# Class: MailServerControllerApi

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **MailServerControllerApi**

## Constructors

###  constructor

\+ **new MailServerControllerApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/fetchapi.md)): *[MailServerControllerApi](mailservercontrollerapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [src/generated/api.ts:58](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L58)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`fetch` | [FetchAPI](../interfaces/fetchapi.md) |  portableFetch |

**Returns:** *[MailServerControllerApi](mailservercontrollerapi.md)*

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

###  describeMailServerDomain

▸ **describeMailServerDomain**(`describeOptions`: [DescribeDomainOptions](../interfaces/describedomainoptions.md), `options?`: any): *Promise‹[DescribeMailServerDomainResult](../interfaces/describemailserverdomainresult.md)›*

*Defined in [src/generated/api.ts:8604](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L8604)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`describeOptions` | [DescribeDomainOptions](../interfaces/describedomainoptions.md) | describeOptions |
`options?` | any | - |

**Returns:** *Promise‹[DescribeMailServerDomainResult](../interfaces/describemailserverdomainresult.md)›*

___

###  verifyEmailAddress

▸ **verifyEmailAddress**(`verifyOptions`: [VerifyEmailAddressOptions](../interfaces/verifyemailaddressoptions.md), `options?`: any): *Promise‹[EmailVerificationResult](../interfaces/emailverificationresult.md)›*

*Defined in [src/generated/api.ts:8616](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L8616)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`verifyOptions` | [VerifyEmailAddressOptions](../interfaces/verifyemailaddressoptions.md) | verifyOptions |
`options?` | any | - |

**Returns:** *Promise‹[EmailVerificationResult](../interfaces/emailverificationresult.md)›*
