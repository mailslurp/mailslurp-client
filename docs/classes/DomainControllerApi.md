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

### <a id="constructor" name="constructor"></a> constructor

• **new DomainControllerApi**(`configuration?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration` | [`Configuration`](Configuration.md) |

#### Inherited from

[BaseAPI](BaseAPI.md).[constructor](BaseAPI.md#constructor)

## Properties

### <a id="configuration" name="configuration"></a> configuration

• `Protected` **configuration**: [`Configuration`](Configuration.md)

#### Inherited from

[BaseAPI](BaseAPI.md).[configuration](BaseAPI.md#configuration)

## Methods

### <a id="adddomainwildcardcatchall" name="adddomainwildcardcatchall"></a> addDomainWildcardCatchAll

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

### <a id="adddomainwildcardcatchallraw" name="adddomainwildcardcatchallraw"></a> addDomainWildcardCatchAllRaw

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

### <a id="createdomain" name="createdomain"></a> createDomain

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

### <a id="createdomainraw" name="createdomainraw"></a> createDomainRaw

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

### <a id="deletedomain" name="deletedomain"></a> deleteDomain

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

### <a id="deletedomainraw" name="deletedomainraw"></a> deleteDomainRaw

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

### <a id="getdomain" name="getdomain"></a> getDomain

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

### <a id="getdomainraw" name="getdomainraw"></a> getDomainRaw

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

### <a id="getdomainwildcardcatchallinbox" name="getdomainwildcardcatchallinbox"></a> getDomainWildcardCatchAllInbox

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

### <a id="getdomainwildcardcatchallinboxraw" name="getdomainwildcardcatchallinboxraw"></a> getDomainWildcardCatchAllInboxRaw

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

### <a id="getdomains" name="getdomains"></a> getDomains

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

### <a id="getdomainsraw" name="getdomainsraw"></a> getDomainsRaw

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

### <a id="request" name="request"></a> request

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

### <a id="updatedomain" name="updatedomain"></a> updateDomain

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

### <a id="updatedomainraw" name="updatedomainraw"></a> updateDomainRaw

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

### <a id="withmiddleware" name="withmiddleware"></a> withMiddleware

▸ **withMiddleware**<`T`\>(`this`, ...`middlewares`): `T`

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

### <a id="withpostmiddleware" name="withpostmiddleware"></a> withPostMiddleware

▸ **withPostMiddleware**<`T`\>(`this`, ...`postMiddlewares`): `T`

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

### <a id="withpremiddleware" name="withpremiddleware"></a> withPreMiddleware

▸ **withPreMiddleware**<`T`\>(`this`, ...`preMiddlewares`): `T`

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
