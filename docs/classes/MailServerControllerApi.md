# Class: MailServerControllerApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`MailServerControllerApi`**

## Table of contents

### Constructors

- [constructor](MailServerControllerApi.md#constructor)

### Properties

- [configuration](MailServerControllerApi.md#configuration)

### Methods

- [describeMailServerDomain](MailServerControllerApi.md#describemailserverdomain)
- [describeMailServerDomainRaw](MailServerControllerApi.md#describemailserverdomainraw)
- [getDnsLookup](MailServerControllerApi.md#getdnslookup)
- [getDnsLookupRaw](MailServerControllerApi.md#getdnslookupraw)
- [getIpAddress](MailServerControllerApi.md#getipaddress)
- [getIpAddressRaw](MailServerControllerApi.md#getipaddressraw)
- [request](MailServerControllerApi.md#request)
- [verifyEmailAddress](MailServerControllerApi.md#verifyemailaddress)
- [verifyEmailAddressRaw](MailServerControllerApi.md#verifyemailaddressraw)
- [withMiddleware](MailServerControllerApi.md#withmiddleware)
- [withPostMiddleware](MailServerControllerApi.md#withpostmiddleware)
- [withPreMiddleware](MailServerControllerApi.md#withpremiddleware)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new MailServerControllerApi**(`configuration?`)

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

### <a id="describemailserverdomain" name="describemailserverdomain"></a> describeMailServerDomain

▸ **describeMailServerDomain**(`requestParameters`, `initOverrides?`): `Promise`<[`DescribeMailServerDomainResult`](../interfaces/DescribeMailServerDomainResult.md)\>

Get DNS Mail Server records for a domain

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DescribeMailServerDomainRequest`](../interfaces/DescribeMailServerDomainRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`DescribeMailServerDomainResult`](../interfaces/DescribeMailServerDomainResult.md)\>

___

### <a id="describemailserverdomainraw" name="describemailserverdomainraw"></a> describeMailServerDomainRaw

▸ **describeMailServerDomainRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DescribeMailServerDomainResult`](../interfaces/DescribeMailServerDomainResult.md)\>\>

Get DNS Mail Server records for a domain

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DescribeMailServerDomainRequest`](../interfaces/DescribeMailServerDomainRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DescribeMailServerDomainResult`](../interfaces/DescribeMailServerDomainResult.md)\>\>

___

### <a id="getdnslookup" name="getdnslookup"></a> getDnsLookup

▸ **getDnsLookup**(`requestParameters`, `initOverrides?`): `Promise`<[`DNSLookupResults`](../interfaces/DNSLookupResults.md)\>

Lookup DNS records for a domain

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDnsLookupRequest`](../interfaces/GetDnsLookupRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`DNSLookupResults`](../interfaces/DNSLookupResults.md)\>

___

### <a id="getdnslookupraw" name="getdnslookupraw"></a> getDnsLookupRaw

▸ **getDnsLookupRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DNSLookupResults`](../interfaces/DNSLookupResults.md)\>\>

Lookup DNS records for a domain

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDnsLookupRequest`](../interfaces/GetDnsLookupRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DNSLookupResults`](../interfaces/DNSLookupResults.md)\>\>

___

### <a id="getipaddress" name="getipaddress"></a> getIpAddress

▸ **getIpAddress**(`requestParameters`, `initOverrides?`): `Promise`<[`IPAddressResult`](../interfaces/IPAddressResult.md)\>

Get IP address for a domain

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetIpAddressRequest`](../interfaces/GetIpAddressRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`IPAddressResult`](../interfaces/IPAddressResult.md)\>

___

### <a id="getipaddressraw" name="getipaddressraw"></a> getIpAddressRaw

▸ **getIpAddressRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`IPAddressResult`](../interfaces/IPAddressResult.md)\>\>

Get IP address for a domain

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetIpAddressRequest`](../interfaces/GetIpAddressRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`IPAddressResult`](../interfaces/IPAddressResult.md)\>\>

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

### <a id="verifyemailaddress" name="verifyemailaddress"></a> verifyEmailAddress

▸ **verifyEmailAddress**(`requestParameters`, `initOverrides?`): `Promise`<[`EmailVerificationResult`](../interfaces/EmailVerificationResult.md)\>

Deprecated. Use the EmailVerificationController methods for more accurate and reliable functionality. Verify the existence of an email address at a given mail server.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`VerifyEmailAddressRequest`](../interfaces/VerifyEmailAddressRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`EmailVerificationResult`](../interfaces/EmailVerificationResult.md)\>

___

### <a id="verifyemailaddressraw" name="verifyemailaddressraw"></a> verifyEmailAddressRaw

▸ **verifyEmailAddressRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailVerificationResult`](../interfaces/EmailVerificationResult.md)\>\>

Deprecated. Use the EmailVerificationController methods for more accurate and reliable functionality. Verify the existence of an email address at a given mail server.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`VerifyEmailAddressRequest`](../interfaces/VerifyEmailAddressRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailVerificationResult`](../interfaces/EmailVerificationResult.md)\>\>

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
