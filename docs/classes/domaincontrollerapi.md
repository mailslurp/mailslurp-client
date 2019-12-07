[MailSlurp Client](../README.md) > [DomainControllerApi](../classes/domaincontrollerapi.md)

# Class: DomainControllerApi

DomainControllerApi - object-oriented interface

*__export__*: 

*__class__*: DomainControllerApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ DomainControllerApi**

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

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new DomainControllerApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`undefined` \| `string`*, fetch?: *[FetchAPI](../interfaces/fetchapi.md)*): [DomainControllerApi](domaincontrollerapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:49*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) |
| `Optional` basePath | `undefined` \| `string` |
| `Optional` fetch | [FetchAPI](../interfaces/fetchapi.md) |

**Returns:** [DomainControllerApi](domaincontrollerapi.md)

___

## Properties

<a id="basepath"></a>

### `<Protected>` basePath

**● basePath**: *`string`*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#basepath)*

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:47*

___
<a id="configuration"></a>

### `<Protected>` configuration

**● configuration**: *[Configuration](configuration.md) \| `undefined`*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#configuration)*

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:49*

___
<a id="fetch"></a>

### `<Protected>` fetch

**● fetch**: *[FetchAPI](../interfaces/fetchapi.md)*

*Inherited from [BaseAPI](baseapi.md).[fetch](baseapi.md#fetch)*

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:48*

___

## Methods

<a id="createdomain"></a>

###  createDomain

▸ **createDomain**(createDomainOptions: *[CreateDomainOptions](../interfaces/createdomainoptions.md)*, options?: *`any`*): `Promise`<[DomainPlusVerificationRecordsAndStatus](../interfaces/domainplusverificationrecordsandstatus.md)>

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:1673*

Link a domain that you own with MailSlurp so you can create email addresses using it. Endpoint returns DNS records used for validation. You must add these verification records to your host provider's DNS setup to verify the domain.

*__summary__*: Create Domain

*__throws__*: {RequiredError}

*__memberof__*: DomainControllerApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| createDomainOptions | [CreateDomainOptions](../interfaces/createdomainoptions.md) |  domainOptions |
| `Optional` options | `any` |

**Returns:** `Promise`<[DomainPlusVerificationRecordsAndStatus](../interfaces/domainplusverificationrecordsandstatus.md)>

___
<a id="deletedomain"></a>

###  deleteDomain

▸ **deleteDomain**(id: *`string`*, options?: *`any`*): `Promise`<`Response`>

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:1682*

Delete a domain. This will disable any existing inboxes that use this domain.

*__summary__*: Delete a domain

*__throws__*: {RequiredError}

*__memberof__*: DomainControllerApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  id |
| `Optional` options | `any` |

**Returns:** `Promise`<`Response`>

___
<a id="getdomain"></a>

###  getDomain

▸ **getDomain**(id: *`string`*, options?: *`any`*): `Promise`<[DomainPlusVerificationRecordsAndStatus](../interfaces/domainplusverificationrecordsandstatus.md)>

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:1691*

Returns domain verification status and tokens for a given domain

*__summary__*: Get a domain

*__throws__*: {RequiredError}

*__memberof__*: DomainControllerApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  id |
| `Optional` options | `any` |

**Returns:** `Promise`<[DomainPlusVerificationRecordsAndStatus](../interfaces/domainplusverificationrecordsandstatus.md)>

___
<a id="getdomains"></a>

###  getDomains

▸ **getDomains**(options?: *`any`*): `Promise`<[DomainPreview](../interfaces/domainpreview.md)[]>

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:1699*

List all custom domains you have created

*__summary__*: Get domains

*__throws__*: {RequiredError}

*__memberof__*: DomainControllerApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | `any` |

**Returns:** `Promise`<[DomainPreview](../interfaces/domainpreview.md)[]>

___

