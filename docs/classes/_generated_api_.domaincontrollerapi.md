# Class: DomainControllerApi

DomainControllerApi - object-oriented interface

**`export`** 

**`class`** DomainControllerApi

**`extends`** {BaseAPI}

## Hierarchy

* [BaseAPI](_generated_api_.baseapi.md)

  ↳ **DomainControllerApi**

## Constructors

###  constructor

\+ **new DomainControllerApi**(`configuration?`: [Configuration](_generated_configuration_.configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md)): *[DomainControllerApi](_generated_api_.domaincontrollerapi.md)*

*Inherited from [BaseAPI](_generated_api_.baseapi.md).[constructor](_generated_api_.baseapi.md#constructor)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L57)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](_generated_configuration_.configuration.md) | - |
`basePath` | string |  BASE_PATH |
`fetch` | [FetchAPI](../interfaces/_generated_api_.fetchapi.md) |  portableFetch |

**Returns:** *[DomainControllerApi](_generated_api_.domaincontrollerapi.md)*

## Properties

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](_generated_api_.baseapi.md).[basePath](_generated_api_.baseapi.md#protected-basepath)*

*Defined in [src/generated/api.ts:61](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L61)*

___

### `Protected` configuration

• **configuration**: *[Configuration](_generated_configuration_.configuration.md)*

*Inherited from [BaseAPI](_generated_api_.baseapi.md).[configuration](_generated_api_.baseapi.md#protected-configuration)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L57)*

___

### `Protected` fetch

• **fetch**: *[FetchAPI](../interfaces/_generated_api_.fetchapi.md)*

*Inherited from [BaseAPI](_generated_api_.baseapi.md).[fetch](_generated_api_.baseapi.md#protected-fetch)*

*Defined in [src/generated/api.ts:62](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L62)*

## Methods

###  createDomain

▸ **createDomain**(`domainOptions`: [CreateDomainOptions](../interfaces/_generated_api_.createdomainoptions.md), `options?`: any): *Promise‹[DomainDto](../interfaces/_generated_api_.domaindto.md)›*

*Defined in [src/generated/api.ts:5976](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L5976)*

Link a domain that you own with MailSlurp so you can create email addresses using it. Endpoint returns DNS records used for validation. You must add these verification records to your host provider's DNS setup to verify the domain.

**`summary`** Create Domain

**`throws`** {RequiredError}

**`memberof`** DomainControllerApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`domainOptions` | [CreateDomainOptions](../interfaces/_generated_api_.createdomainoptions.md) | domainOptions |
`options?` | any | - |

**Returns:** *Promise‹[DomainDto](../interfaces/_generated_api_.domaindto.md)›*

___

###  deleteDomain

▸ **deleteDomain**(`id`: string, `options?`: any): *Promise‹Response›*

*Defined in [src/generated/api.ts:5991](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L5991)*

Delete a domain. This will disable any existing inboxes that use this domain.

**`summary`** Delete a domain

**`throws`** {RequiredError}

**`memberof`** DomainControllerApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | id |
`options?` | any | - |

**Returns:** *Promise‹Response›*

___

###  getDomain

▸ **getDomain**(`id`: string, `options?`: any): *Promise‹[DomainDto](../interfaces/_generated_api_.domaindto.md)›*

*Defined in [src/generated/api.ts:6006](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L6006)*

Returns domain verification status and tokens for a given domain

**`summary`** Get a domain

**`throws`** {RequiredError}

**`memberof`** DomainControllerApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | id |
`options?` | any | - |

**Returns:** *Promise‹[DomainDto](../interfaces/_generated_api_.domaindto.md)›*

___

###  getDomains

▸ **getDomains**(`options?`: any): *Promise‹[DomainPreview](../interfaces/_generated_api_.domainpreview.md)[]›*

*Defined in [src/generated/api.ts:6020](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L6020)*

List all custom domains you have created

**`summary`** Get domains

**`throws`** {RequiredError}

**`memberof`** DomainControllerApi

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *Promise‹[DomainPreview](../interfaces/_generated_api_.domainpreview.md)[]›*
