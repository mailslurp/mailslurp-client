[MailSlurp JS](../README.md) / DomainControllerApi

# Class: DomainControllerApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`DomainControllerApi`**

## Table of contents

### Constructors

- [constructor](DomainControllerApi.md#constructor)

### Properties

- [configuration](DomainControllerApi.md#configuration)

### Methods

- [addDomainWildcardCatchAll](DomainControllerApi.md#adddomainwildcardcatchall)
- [addDomainWildcardCatchAllRaw](DomainControllerApi.md#adddomainwildcardcatchallraw)
- [createDomain](DomainControllerApi.md#createdomain)
- [createDomainRaw](DomainControllerApi.md#createdomainraw)
- [deleteDomain](DomainControllerApi.md#deletedomain)
- [deleteDomainRaw](DomainControllerApi.md#deletedomainraw)
- [getDomain](DomainControllerApi.md#getdomain)
- [getDomainRaw](DomainControllerApi.md#getdomainraw)
- [getDomainWildcardCatchAllInbox](DomainControllerApi.md#getdomainwildcardcatchallinbox)
- [getDomainWildcardCatchAllInboxRaw](DomainControllerApi.md#getdomainwildcardcatchallinboxraw)
- [getDomains](DomainControllerApi.md#getdomains)
- [getDomainsRaw](DomainControllerApi.md#getdomainsraw)
- [request](DomainControllerApi.md#request)
- [updateDomain](DomainControllerApi.md#updatedomain)
- [updateDomainRaw](DomainControllerApi.md#updatedomainraw)
- [withMiddleware](DomainControllerApi.md#withmiddleware)
- [withPostMiddleware](DomainControllerApi.md#withpostmiddleware)
- [withPreMiddleware](DomainControllerApi.md#withpremiddleware)

## Constructors

### constructor

• **new DomainControllerApi**(`configuration?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration` | [`Configuration`](Configuration.md) |

#### Inherited from

[BaseAPI](BaseAPI.md).[constructor](BaseAPI.md#constructor)

## Properties

### configuration

• `Protected` **configuration**: [`Configuration`](Configuration.md)

#### Inherited from

[BaseAPI](BaseAPI.md).[configuration](BaseAPI.md#configuration)

## Methods

### addDomainWildcardCatchAll

▸ **addDomainWildcardCatchAll**(`requestParameters`, `initOverrides?`): `Promise`<[`DomainDto`](../interfaces/DomainDto.md)\>

Add a catch all inbox to a domain so that any emails sent to it that cannot be matched will be sent to the catch all inbox generated
Add catch all wild card inbox to domain

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AddDomainWildcardCatchAllRequest`](../interfaces/AddDomainWildcardCatchAllRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`DomainDto`](../interfaces/DomainDto.md)\>

___

### addDomainWildcardCatchAllRaw

▸ **addDomainWildcardCatchAllRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DomainDto`](../interfaces/DomainDto.md)\>\>

Add a catch all inbox to a domain so that any emails sent to it that cannot be matched will be sent to the catch all inbox generated
Add catch all wild card inbox to domain

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AddDomainWildcardCatchAllRequest`](../interfaces/AddDomainWildcardCatchAllRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DomainDto`](../interfaces/DomainDto.md)\>\>

___

### createDomain

▸ **createDomain**(`requestParameters`, `initOverrides?`): `Promise`<[`DomainDto`](../interfaces/DomainDto.md)\>

Link a domain that you own with MailSlurp so you can create email addresses using it. Endpoint returns DNS records used for validation. You must add these verification records to your host provider\'s DNS setup to verify the domain.
Create Domain

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateDomainRequest`](../interfaces/CreateDomainRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`DomainDto`](../interfaces/DomainDto.md)\>

___

### createDomainRaw

▸ **createDomainRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DomainDto`](../interfaces/DomainDto.md)\>\>

Link a domain that you own with MailSlurp so you can create email addresses using it. Endpoint returns DNS records used for validation. You must add these verification records to your host provider\'s DNS setup to verify the domain.
Create Domain

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateDomainRequest`](../interfaces/CreateDomainRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DomainDto`](../interfaces/DomainDto.md)\>\>

___

### deleteDomain

▸ **deleteDomain**(`requestParameters`, `initOverrides?`): `Promise`<`string`[]\>

Delete a domain. This will disable any existing inboxes that use this domain.
Delete a domain

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteDomainRequest`](../interfaces/DeleteDomainRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`string`[]\>

___

### deleteDomainRaw

▸ **deleteDomainRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`string`[]\>\>

Delete a domain. This will disable any existing inboxes that use this domain.
Delete a domain

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteDomainRequest`](../interfaces/DeleteDomainRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`string`[]\>\>

___

### getDomain

▸ **getDomain**(`requestParameters`, `initOverrides?`): `Promise`<[`DomainDto`](../interfaces/DomainDto.md)\>

Returns domain verification status and tokens for a given domain
Get a domain

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDomainRequest`](../interfaces/GetDomainRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`DomainDto`](../interfaces/DomainDto.md)\>

___

### getDomainRaw

▸ **getDomainRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DomainDto`](../interfaces/DomainDto.md)\>\>

Returns domain verification status and tokens for a given domain
Get a domain

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDomainRequest`](../interfaces/GetDomainRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DomainDto`](../interfaces/DomainDto.md)\>\>

___

### getDomainWildcardCatchAllInbox

▸ **getDomainWildcardCatchAllInbox**(`requestParameters`, `initOverrides?`): `Promise`<[`InboxDto`](../interfaces/InboxDto.md)\>

Get the catch all inbox for a domain for missed emails
Get catch all wild card inbox for domain

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDomainWildcardCatchAllInboxRequest`](../interfaces/GetDomainWildcardCatchAllInboxRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`InboxDto`](../interfaces/InboxDto.md)\>

___

### getDomainWildcardCatchAllInboxRaw

▸ **getDomainWildcardCatchAllInboxRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxDto`](../interfaces/InboxDto.md)\>\>

Get the catch all inbox for a domain for missed emails
Get catch all wild card inbox for domain

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDomainWildcardCatchAllInboxRequest`](../interfaces/GetDomainWildcardCatchAllInboxRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxDto`](../interfaces/InboxDto.md)\>\>

___

### getDomains

▸ **getDomains**(`initOverrides?`): `Promise`<[`DomainPreview`](../interfaces/DomainPreview.md)[]\>

List all custom domains you have created
Get domains

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`DomainPreview`](../interfaces/DomainPreview.md)[]\>

___

### getDomainsRaw

▸ **getDomainsRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DomainPreview`](../interfaces/DomainPreview.md)[]\>\>

List all custom domains you have created
Get domains

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DomainPreview`](../interfaces/DomainPreview.md)[]\>\>

___

### request

▸ `Protected` **request**(`context`, `initOverrides?`): `Promise`<`Response`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`RequestOpts`](../interfaces/RequestOpts.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`Response`\>

#### Inherited from

[BaseAPI](BaseAPI.md).[request](BaseAPI.md#request)

___

### updateDomain

▸ **updateDomain**(`requestParameters`, `initOverrides?`): `Promise`<[`DomainDto`](../interfaces/DomainDto.md)\>

Update values on a domain. Note you cannot change the domain name as it is immutable. Recreate the domain if you need to alter this.
Update a domain

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateDomainRequest`](../interfaces/UpdateDomainRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`DomainDto`](../interfaces/DomainDto.md)\>

___

### updateDomainRaw

▸ **updateDomainRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DomainDto`](../interfaces/DomainDto.md)\>\>

Update values on a domain. Note you cannot change the domain name as it is immutable. Recreate the domain if you need to alter this.
Update a domain

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateDomainRequest`](../interfaces/UpdateDomainRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DomainDto`](../interfaces/DomainDto.md)\>\>

___

### withMiddleware

▸ **withMiddleware**<`T`\>(`this`, `...middlewares`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseAPI`](BaseAPI.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `...middlewares` | [`Middleware`](../interfaces/Middleware.md)[] |

#### Returns

`T`

#### Inherited from

[BaseAPI](BaseAPI.md).[withMiddleware](BaseAPI.md#withmiddleware)

___

### withPostMiddleware

▸ **withPostMiddleware**<`T`\>(`this`, `...postMiddlewares`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseAPI`](BaseAPI.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `...postMiddlewares` | (`context`: [`ResponseContext`](../interfaces/ResponseContext.md)) => `Promise`<`void` \| `Response`\>[] |

#### Returns

`T`

#### Inherited from

[BaseAPI](BaseAPI.md).[withPostMiddleware](BaseAPI.md#withpostmiddleware)

___

### withPreMiddleware

▸ **withPreMiddleware**<`T`\>(`this`, `...preMiddlewares`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseAPI`](BaseAPI.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `...preMiddlewares` | (`context`: [`RequestContext`](../interfaces/RequestContext.md)) => `Promise`<`void` \| [`FetchParams`](../interfaces/FetchParams.md)\>[] |

#### Returns

`T`

#### Inherited from

[BaseAPI](BaseAPI.md).[withPreMiddleware](BaseAPI.md#withpremiddleware)
