**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / DomainControllerApi

# Class: DomainControllerApi

DomainControllerApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **DomainControllerApi**

## Index

### Constructors

* [constructor](domaincontrollerapi.md#constructor)

### Properties

* [basePath](domaincontrollerapi.md#basepath)
* [configuration](domaincontrollerapi.md#configuration)
* [fetch](domaincontrollerapi.md#fetch)

### Methods

* [createDomain](domaincontrollerapi.md#createdomain)
* [deleteDomain](domaincontrollerapi.md#deletedomain)
* [getDomain](domaincontrollerapi.md#getdomain)
* [getDomains](domaincontrollerapi.md#getdomains)

## Constructors

### constructor

\+ **new DomainControllerApi**(`configuration?`: [Configuration](configuration.md), `basePath?`: string, `fetch?`: [FetchAPI](../interfaces/fetchapi.md)): [DomainControllerApi](domaincontrollerapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L57)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE\_PATH |
`fetch` | [FetchAPI](../interfaces/fetchapi.md) | portableFetch |

**Returns:** [DomainControllerApi](domaincontrollerapi.md)

## Properties

### basePath

• `Protected` **basePath**: string

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#basepath)*

*Defined in [src/generated/api.ts:61](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L61)*

___

### configuration

• `Protected` **configuration**: [Configuration](configuration.md)

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#configuration)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L57)*

___

### fetch

• `Protected` **fetch**: [FetchAPI](../interfaces/fetchapi.md)

*Inherited from [BaseAPI](baseapi.md).[fetch](baseapi.md#fetch)*

*Defined in [src/generated/api.ts:62](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L62)*

## Methods

### createDomain

▸ **createDomain**(`domainOptions`: [CreateDomainOptions](../interfaces/createdomainoptions.md), `options?`: any): Promise\<[DomainDto](../interfaces/domaindto.md)>

*Defined in [src/generated/api.ts:8028](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L8028)*

Link a domain that you own with MailSlurp so you can create email addresses using it. Endpoint returns DNS records used for validation. You must add these verification records to your host provider's DNS setup to verify the domain.

**`summary`** Create Domain

**`throws`** {RequiredError}

**`memberof`** DomainControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`domainOptions` | [CreateDomainOptions](../interfaces/createdomainoptions.md) | domainOptions |
`options?` | any | - |

**Returns:** Promise\<[DomainDto](../interfaces/domaindto.md)>

___

### deleteDomain

▸ **deleteDomain**(`id`: string, `options?`: any): Promise\<string[]>

*Defined in [src/generated/api.ts:8043](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L8043)*

Delete a domain. This will disable any existing inboxes that use this domain.

**`summary`** Delete a domain

**`throws`** {RequiredError}

**`memberof`** DomainControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | string | id |
`options?` | any | - |

**Returns:** Promise\<string[]>

___

### getDomain

▸ **getDomain**(`id`: string, `options?`: any): Promise\<[DomainDto](../interfaces/domaindto.md)>

*Defined in [src/generated/api.ts:8058](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L8058)*

Returns domain verification status and tokens for a given domain

**`summary`** Get a domain

**`throws`** {RequiredError}

**`memberof`** DomainControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | string | id |
`options?` | any | - |

**Returns:** Promise\<[DomainDto](../interfaces/domaindto.md)>

___

### getDomains

▸ **getDomains**(`options?`: any): Promise\<[DomainPreview](../interfaces/domainpreview.md)[]>

*Defined in [src/generated/api.ts:8072](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L8072)*

List all custom domains you have created

**`summary`** Get domains

**`throws`** {RequiredError}

**`memberof`** DomainControllerApi

#### Parameters:

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** Promise\<[DomainPreview](../interfaces/domainpreview.md)[]>
