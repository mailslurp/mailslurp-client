# Class: DomainControllerApi

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **DomainControllerApi**

## Constructors

###  constructor

\+ **new DomainControllerApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/fetchapi.md)): *[DomainControllerApi](domaincontrollerapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [src/generated/api.ts:58](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L58)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`fetch` | [FetchAPI](../interfaces/fetchapi.md) |  portableFetch |

**Returns:** *[DomainControllerApi](domaincontrollerapi.md)*

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

###  createDomain

▸ **createDomain**(`domainOptions`: [CreateDomainOptions](../interfaces/createdomainoptions.md), `options?`: any): *Promise‹[DomainDto](../interfaces/domaindto.md)›*

*Defined in [src/generated/api.ts:5077](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L5077)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`domainOptions` | [CreateDomainOptions](../interfaces/createdomainoptions.md) | domainOptions |
`options?` | any | - |

**Returns:** *Promise‹[DomainDto](../interfaces/domaindto.md)›*

___

###  deleteDomain

▸ **deleteDomain**(`id`: string, `options?`: any): *Promise‹Response›*

*Defined in [src/generated/api.ts:5089](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L5089)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | id |
`options?` | any | - |

**Returns:** *Promise‹Response›*

___

###  getDomain

▸ **getDomain**(`id`: string, `options?`: any): *Promise‹[DomainDto](../interfaces/domaindto.md)›*

*Defined in [src/generated/api.ts:5101](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L5101)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | id |
`options?` | any | - |

**Returns:** *Promise‹[DomainDto](../interfaces/domaindto.md)›*

___

###  getDomains

▸ **getDomains**(`options?`: any): *Promise‹[DomainPreview](../interfaces/domainpreview.md)[]›*

*Defined in [src/generated/api.ts:5112](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L5112)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *Promise‹[DomainPreview](../interfaces/domainpreview.md)[]›*
