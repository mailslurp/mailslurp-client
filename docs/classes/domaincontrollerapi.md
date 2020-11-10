# Class: DomainControllerApi

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **DomainControllerApi**

## Constructors

###  constructor

\+ **new DomainControllerApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/fetchapi.md)): *[DomainControllerApi](domaincontrollerapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L57)*

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

*Defined in [src/generated/api.ts:61](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L61)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md)*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L57)*

___

### `Protected` fetch

• **fetch**: *[FetchAPI](../interfaces/fetchapi.md)*

*Inherited from [BaseAPI](baseapi.md).[fetch](baseapi.md#protected-fetch)*

*Defined in [src/generated/api.ts:62](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L62)*

## Methods

###  createDomain

▸ **createDomain**(`domainOptions`: [CreateDomainOptions](../interfaces/createdomainoptions.md), `options?`: any): *Promise‹[DomainDto](../interfaces/domaindto.md)›*

*Defined in [src/generated/api.ts:6114](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L6114)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`domainOptions` | [CreateDomainOptions](../interfaces/createdomainoptions.md) | domainOptions |
`options?` | any | - |

**Returns:** *Promise‹[DomainDto](../interfaces/domaindto.md)›*

___

###  deleteDomain

▸ **deleteDomain**(`id`: string, `options?`: any): *Promise‹Response›*

*Defined in [src/generated/api.ts:6129](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L6129)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | id |
`options?` | any | - |

**Returns:** *Promise‹Response›*

___

###  getDomain

▸ **getDomain**(`id`: string, `options?`: any): *Promise‹[DomainDto](../interfaces/domaindto.md)›*

*Defined in [src/generated/api.ts:6144](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L6144)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | id |
`options?` | any | - |

**Returns:** *Promise‹[DomainDto](../interfaces/domaindto.md)›*

___

###  getDomains

▸ **getDomains**(`options?`: any): *Promise‹[DomainPreview](../interfaces/domainpreview.md)[]›*

*Defined in [src/generated/api.ts:6158](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L6158)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *Promise‹[DomainPreview](../interfaces/domainpreview.md)[]›*
