[MailSlurp JS](../README.md) / DomainControllerApi

# Class: DomainControllerApi

DomainControllerApi - object-oriented interface

**`export`**

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`DomainControllerApi`**

## Table of contents

### Constructors

- [constructor](DomainControllerApi.md#constructor)

### Properties

- [basePath](DomainControllerApi.md#basepath)
- [configuration](DomainControllerApi.md#configuration)
- [fetch](DomainControllerApi.md#fetch)

### Methods

- [addDomainWildcardCatchAll](DomainControllerApi.md#adddomainwildcardcatchall)
- [createDomain](DomainControllerApi.md#createdomain)
- [deleteDomain](DomainControllerApi.md#deletedomain)
- [getDomain](DomainControllerApi.md#getdomain)
- [getDomains](DomainControllerApi.md#getdomains)
- [updateDomain](DomainControllerApi.md#updatedomain)

## Constructors

### constructor

• **new DomainControllerApi**(`configuration?`, `basePath?`, `fetch?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) |
| `basePath` | `string` |
| `fetch` | [`FetchAPI`](../interfaces/FetchAPI.md) |

#### Inherited from

[BaseAPI](BaseAPI.md).[constructor](BaseAPI.md#constructor)

#### Defined in

[src/generated/api.ts:59](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L59)

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

[src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L57)

___

### fetch

• `Protected` **fetch**: [`FetchAPI`](../interfaces/FetchAPI.md)

#### Inherited from

[BaseAPI](BaseAPI.md).[fetch](BaseAPI.md#fetch)

## Methods

### addDomainWildcardCatchAll

▸ **addDomainWildcardCatchAll**(`id`, `options?`): `Promise`<[`DomainDto`](../interfaces/DomainDto.md)\>

Add a catch all inbox to a domain so that any emails sent to it that cannot be matched will be sent to the catch all inbox generated

**`summary`** Add catch all wild card inbox to domain

**`throws`** {RequiredError}

**`memberof`** DomainControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | id |
| `options?` | `any` | - |

#### Returns

`Promise`<[`DomainDto`](../interfaces/DomainDto.md)\>

#### Defined in

[src/generated/api.ts:13276](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L13276)

___

### createDomain

▸ **createDomain**(`domainOptions`, `options?`): `Promise`<[`DomainDto`](../interfaces/DomainDto.md)\>

Link a domain that you own with MailSlurp so you can create email addresses using it. Endpoint returns DNS records used for validation. You must add these verification records to your host provider's DNS setup to verify the domain.

**`summary`** Create Domain

**`throws`** {RequiredError}

**`memberof`** DomainControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `domainOptions` | [`CreateDomainOptions`](../interfaces/CreateDomainOptions.md) | domainOptions |
| `options?` | `any` | - |

#### Returns

`Promise`<[`DomainDto`](../interfaces/DomainDto.md)\>

#### Defined in

[src/generated/api.ts:13290](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L13290)

___

### deleteDomain

▸ **deleteDomain**(`id`, `options?`): `Promise`<`string`[]\>

Delete a domain. This will disable any existing inboxes that use this domain.

**`summary`** Delete a domain

**`throws`** {RequiredError}

**`memberof`** DomainControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | id |
| `options?` | `any` | - |

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/generated/api.ts:13305](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L13305)

___

### getDomain

▸ **getDomain**(`id`, `options?`): `Promise`<[`DomainDto`](../interfaces/DomainDto.md)\>

Returns domain verification status and tokens for a given domain

**`summary`** Get a domain

**`throws`** {RequiredError}

**`memberof`** DomainControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | id |
| `options?` | `any` | - |

#### Returns

`Promise`<[`DomainDto`](../interfaces/DomainDto.md)\>

#### Defined in

[src/generated/api.ts:13320](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L13320)

___

### getDomains

▸ **getDomains**(`options?`): `Promise`<[`DomainPreview`](../interfaces/DomainPreview.md)[]\>

List all custom domains you have created

**`summary`** Get domains

**`throws`** {RequiredError}

**`memberof`** DomainControllerApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<[`DomainPreview`](../interfaces/DomainPreview.md)[]\>

#### Defined in

[src/generated/api.ts:13334](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L13334)

___

### updateDomain

▸ **updateDomain**(`id`, `updateDomainDto`, `options?`): `Promise`<[`DomainDto`](../interfaces/DomainDto.md)\>

Update values on a domain. Note you cannot change the domain name as it is immutable. Recreate the domain if you need to alter this.

**`summary`** Update a domain

**`throws`** {RequiredError}

**`memberof`** DomainControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | id |
| `updateDomainDto` | [`UpdateDomainOptions`](../interfaces/UpdateDomainOptions.md) | updateDomainDto |
| `options?` | `any` | - |

#### Returns

`Promise`<[`DomainDto`](../interfaces/DomainDto.md)\>

#### Defined in

[src/generated/api.ts:13350](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L13350)
