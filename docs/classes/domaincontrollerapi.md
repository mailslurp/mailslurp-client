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

* [addDomainWildcardCatchAll](domaincontrollerapi.md#adddomainwildcardcatchall)
* [createDomain](domaincontrollerapi.md#createdomain)
* [deleteDomain](domaincontrollerapi.md#deletedomain)
* [getDomain](domaincontrollerapi.md#getdomain)
* [getDomains](domaincontrollerapi.md#getdomains)
* [updateDomain](domaincontrollerapi.md#updatedomain)

## Constructors

### constructor

\+ **new DomainControllerApi**(`configuration?`: [Configuration](configuration.md), `basePath?`: string, `fetch?`: [FetchAPI](../interfaces/fetchapi.md)): [DomainControllerApi](domaincontrollerapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L57)*

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

*Defined in [src/generated/api.ts:61](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L61)*

___

### configuration

• `Protected` **configuration**: [Configuration](configuration.md)

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#configuration)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L57)*

___

### fetch

• `Protected` **fetch**: [FetchAPI](../interfaces/fetchapi.md)

*Inherited from [BaseAPI](baseapi.md).[fetch](baseapi.md#fetch)*

*Defined in [src/generated/api.ts:62](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L62)*

## Methods

### addDomainWildcardCatchAll

▸ **addDomainWildcardCatchAll**(`id`: string, `options?`: any): Promise\<[DomainDto](../modules/domaindto.md)>

*Defined in [src/generated/api.ts:10733](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L10733)*

Add a catch all inbox to a domain so that any emails sent to it that cannot be matched will be sent to the catch all inbox generated

**`summary`** Add catch all wild card inbox to domain

**`throws`** {RequiredError}

**`memberof`** DomainControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | string | id |
`options?` | any | - |

**Returns:** Promise\<[DomainDto](../modules/domaindto.md)>

___

### createDomain

▸ **createDomain**(`domainOptions`: [CreateDomainOptions](../modules/createdomainoptions.md), `options?`: any): Promise\<[DomainDto](../modules/domaindto.md)>

*Defined in [src/generated/api.ts:10747](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L10747)*

Link a domain that you own with MailSlurp so you can create email addresses using it. Endpoint returns DNS records used for validation. You must add these verification records to your host provider's DNS setup to verify the domain.

**`summary`** Create Domain

**`throws`** {RequiredError}

**`memberof`** DomainControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`domainOptions` | [CreateDomainOptions](../modules/createdomainoptions.md) | domainOptions |
`options?` | any | - |

**Returns:** Promise\<[DomainDto](../modules/domaindto.md)>

___

### deleteDomain

▸ **deleteDomain**(`id`: string, `options?`: any): Promise\<string[]>

*Defined in [src/generated/api.ts:10762](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L10762)*

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

▸ **getDomain**(`id`: string, `options?`: any): Promise\<[DomainDto](../modules/domaindto.md)>

*Defined in [src/generated/api.ts:10777](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L10777)*

Returns domain verification status and tokens for a given domain

**`summary`** Get a domain

**`throws`** {RequiredError}

**`memberof`** DomainControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | string | id |
`options?` | any | - |

**Returns:** Promise\<[DomainDto](../modules/domaindto.md)>

___

### getDomains

▸ **getDomains**(`options?`: any): Promise\<[DomainPreview](../interfaces/domainpreview.md)[]>

*Defined in [src/generated/api.ts:10791](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L10791)*

List all custom domains you have created

**`summary`** Get domains

**`throws`** {RequiredError}

**`memberof`** DomainControllerApi

#### Parameters:

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** Promise\<[DomainPreview](../interfaces/domainpreview.md)[]>

___

### updateDomain

▸ **updateDomain**(`id`: string, `updateDomainDto`: [UpdateDomainOptions](../interfaces/updatedomainoptions.md), `options?`: any): Promise\<[DomainDto](../modules/domaindto.md)>

*Defined in [src/generated/api.ts:10807](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L10807)*

Update values on a domain. Note you cannot change the domain name as it is immutable. Recreate the domain if you need to alter this.

**`summary`** Update a domain

**`throws`** {RequiredError}

**`memberof`** DomainControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | string | id |
`updateDomainDto` | [UpdateDomainOptions](../interfaces/updatedomainoptions.md) | updateDomainDto |
`options?` | any | - |

**Returns:** Promise\<[DomainDto](../modules/domaindto.md)>
