**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / MailServerControllerApi

# Class: MailServerControllerApi

MailServerControllerApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **MailServerControllerApi**

## Index

### Constructors

* [constructor](mailservercontrollerapi.md#constructor)

### Properties

* [basePath](mailservercontrollerapi.md#basepath)
* [configuration](mailservercontrollerapi.md#configuration)
* [fetch](mailservercontrollerapi.md#fetch)

### Methods

* [describeMailServerDomain](mailservercontrollerapi.md#describemailserverdomain)
* [getDnsLookup](mailservercontrollerapi.md#getdnslookup)
* [getIpAddress](mailservercontrollerapi.md#getipaddress)
* [verifyEmailAddress](mailservercontrollerapi.md#verifyemailaddress)

## Constructors

### constructor

\+ **new MailServerControllerApi**(`configuration?`: [Configuration](configuration.md), `basePath?`: string, `fetch?`: [FetchAPI](../interfaces/fetchapi.md)): [MailServerControllerApi](mailservercontrollerapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/3871a9e/src/generated/api.ts#L57)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE\_PATH |
`fetch` | [FetchAPI](../interfaces/fetchapi.md) | portableFetch |

**Returns:** [MailServerControllerApi](mailservercontrollerapi.md)

## Properties

### basePath

• `Protected` **basePath**: string

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#basepath)*

*Defined in [src/generated/api.ts:61](https://github.com/mailslurp/mailslurp-client/blob/3871a9e/src/generated/api.ts#L61)*

___

### configuration

• `Protected` **configuration**: [Configuration](configuration.md)

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#configuration)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/3871a9e/src/generated/api.ts#L57)*

___

### fetch

• `Protected` **fetch**: [FetchAPI](../interfaces/fetchapi.md)

*Inherited from [BaseAPI](baseapi.md).[fetch](baseapi.md#fetch)*

*Defined in [src/generated/api.ts:62](https://github.com/mailslurp/mailslurp-client/blob/3871a9e/src/generated/api.ts#L62)*

## Methods

### describeMailServerDomain

▸ **describeMailServerDomain**(`describeOptions`: [DescribeDomainOptions](../interfaces/describedomainoptions.md), `options?`: any): Promise\<[DescribeMailServerDomainResult](../interfaces/describemailserverdomainresult.md)>

*Defined in [src/generated/api.ts:24011](https://github.com/mailslurp/mailslurp-client/blob/3871a9e/src/generated/api.ts#L24011)*

**`summary`** Get DNS Mail Server records for a domain

**`throws`** {RequiredError}

**`memberof`** MailServerControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`describeOptions` | [DescribeDomainOptions](../interfaces/describedomainoptions.md) | describeOptions |
`options?` | any | - |

**Returns:** Promise\<[DescribeMailServerDomainResult](../interfaces/describemailserverdomainresult.md)>

___

### getDnsLookup

▸ **getDnsLookup**(`dnsLookupOptions`: [DNSLookupOptions](../modules/dnslookupoptions.md), `options?`: any): Promise\<[DNSLookupResults](../interfaces/dnslookupresults.md)>

*Defined in [src/generated/api.ts:24031](https://github.com/mailslurp/mailslurp-client/blob/3871a9e/src/generated/api.ts#L24031)*

**`summary`** Lookup DNS records for a domain

**`throws`** {RequiredError}

**`memberof`** MailServerControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`dnsLookupOptions` | [DNSLookupOptions](../modules/dnslookupoptions.md) | dnsLookupOptions |
`options?` | any | - |

**Returns:** Promise\<[DNSLookupResults](../interfaces/dnslookupresults.md)>

___

### getIpAddress

▸ **getIpAddress**(`name`: string, `options?`: any): Promise\<[IPAddressResult](../interfaces/ipaddressresult.md)>

*Defined in [src/generated/api.ts:24046](https://github.com/mailslurp/mailslurp-client/blob/3871a9e/src/generated/api.ts#L24046)*

**`summary`** Get IP address for a domain

**`throws`** {RequiredError}

**`memberof`** MailServerControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`name` | string | name |
`options?` | any | - |

**Returns:** Promise\<[IPAddressResult](../interfaces/ipaddressresult.md)>

___

### verifyEmailAddress

▸ **verifyEmailAddress**(`verifyOptions`: [VerifyEmailAddressOptions](../interfaces/verifyemailaddressoptions.md), `options?`: any): Promise\<[EmailVerificationResult](../interfaces/emailverificationresult.md)>

*Defined in [src/generated/api.ts:24061](https://github.com/mailslurp/mailslurp-client/blob/3871a9e/src/generated/api.ts#L24061)*

**`summary`** Verify the existence of an email address at a given mail server.

**`throws`** {RequiredError}

**`memberof`** MailServerControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`verifyOptions` | [VerifyEmailAddressOptions](../interfaces/verifyemailaddressoptions.md) | verifyOptions |
`options?` | any | - |

**Returns:** Promise\<[EmailVerificationResult](../interfaces/emailverificationresult.md)>
