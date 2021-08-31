[MailSlurp JS](../README.md) / MailServerControllerApi

# Class: MailServerControllerApi

MailServerControllerApi - object-oriented interface

**`export`**

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`MailServerControllerApi`**

## Table of contents

### Constructors

- [constructor](MailServerControllerApi.md#constructor)

### Properties

- [basePath](MailServerControllerApi.md#basepath)
- [configuration](MailServerControllerApi.md#configuration)
- [fetch](MailServerControllerApi.md#fetch)

### Methods

- [describeMailServerDomain](MailServerControllerApi.md#describemailserverdomain)
- [getDnsLookup](MailServerControllerApi.md#getdnslookup)
- [getIpAddress](MailServerControllerApi.md#getipaddress)
- [verifyEmailAddress](MailServerControllerApi.md#verifyemailaddress)

## Constructors

### constructor

• **new MailServerControllerApi**(`configuration?`, `basePath?`, `fetch?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) |
| `basePath` | `string` |
| `fetch` | [`FetchAPI`](../interfaces/FetchAPI.md) |

#### Inherited from

[BaseAPI](BaseAPI.md).[constructor](BaseAPI.md#constructor)

#### Defined in

[src/generated/api.ts:59](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/generated/api.ts#L59)

## Properties

### basePath

• `Protected` **basePath**: `string`

#### Inherited from

[BaseAPI](BaseAPI.md).[basePath](BaseAPI.md#basepath)

___

### configuration

• `Protected` **configuration**: [`Configuration`](Configuration.md)

#### Inherited from

[BaseAPI](BaseAPI.md).[configuration](BaseAPI.md#configuration)

#### Defined in

[src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/generated/api.ts#L57)

___

### fetch

• `Protected` **fetch**: [`FetchAPI`](../interfaces/FetchAPI.md)

#### Inherited from

[BaseAPI](BaseAPI.md).[fetch](BaseAPI.md#fetch)

## Methods

### describeMailServerDomain

▸ **describeMailServerDomain**(`describeOptions`, `options?`): `Promise`<[`DescribeMailServerDomainResult`](../interfaces/DescribeMailServerDomainResult.md)\>

**`summary`** Get DNS Mail Server records for a domain

**`throws`** {RequiredError}

**`memberof`** MailServerControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `describeOptions` | [`DescribeDomainOptions`](../interfaces/DescribeDomainOptions.md) | describeOptions |
| `options?` | `any` | - |

#### Returns

`Promise`<[`DescribeMailServerDomainResult`](../interfaces/DescribeMailServerDomainResult.md)\>

#### Defined in

[src/generated/api.ts:25044](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/generated/api.ts#L25044)

___

### getDnsLookup

▸ **getDnsLookup**(`dnsLookupOptions`, `options?`): `Promise`<[`DNSLookupResults`](../interfaces/DNSLookupResults.md)\>

**`summary`** Lookup DNS records for a domain

**`throws`** {RequiredError}

**`memberof`** MailServerControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dnsLookupOptions` | [`DNSLookupOptions`](../interfaces/DNSLookupOptions.md) | dnsLookupOptions |
| `options?` | `any` | - |

#### Returns

`Promise`<[`DNSLookupResults`](../interfaces/DNSLookupResults.md)\>

#### Defined in

[src/generated/api.ts:25064](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/generated/api.ts#L25064)

___

### getIpAddress

▸ **getIpAddress**(`name`, `options?`): `Promise`<[`IPAddressResult`](../interfaces/IPAddressResult.md)\>

**`summary`** Get IP address for a domain

**`throws`** {RequiredError}

**`memberof`** MailServerControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | name |
| `options?` | `any` | - |

#### Returns

`Promise`<[`IPAddressResult`](../interfaces/IPAddressResult.md)\>

#### Defined in

[src/generated/api.ts:25079](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/generated/api.ts#L25079)

___

### verifyEmailAddress

▸ **verifyEmailAddress**(`verifyOptions`, `options?`): `Promise`<[`EmailVerificationResult`](../interfaces/EmailVerificationResult.md)\>

**`summary`** Verify the existence of an email address at a given mail server.

**`throws`** {RequiredError}

**`memberof`** MailServerControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `verifyOptions` | [`VerifyEmailAddressOptions`](../interfaces/VerifyEmailAddressOptions.md) | verifyOptions |
| `options?` | `any` | - |

#### Returns

`Promise`<[`EmailVerificationResult`](../interfaces/EmailVerificationResult.md)\>

#### Defined in

[src/generated/api.ts:25094](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/generated/api.ts#L25094)
