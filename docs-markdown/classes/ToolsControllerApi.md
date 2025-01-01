[MailSlurp JS](../README.md) / ToolsControllerApi

# Class: ToolsControllerApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`ToolsControllerApi`**

## Table of contents

### Constructors

- [constructor](ToolsControllerApi.md#constructor)

### Properties

- [configuration](ToolsControllerApi.md#configuration)

### Methods

- [checkEmailFeaturesClientSupport](ToolsControllerApi.md#checkemailfeaturesclientsupport)
- [checkEmailFeaturesClientSupportRaw](ToolsControllerApi.md#checkemailfeaturesclientsupportraw)
- [createNewFakeEmailAddress](ToolsControllerApi.md#createnewfakeemailaddress)
- [createNewFakeEmailAddressRaw](ToolsControllerApi.md#createnewfakeemailaddressraw)
- [deleteNewFakeEmailAddress](ToolsControllerApi.md#deletenewfakeemailaddress)
- [deleteNewFakeEmailAddressRaw](ToolsControllerApi.md#deletenewfakeemailaddressraw)
- [generateBimiRecord](ToolsControllerApi.md#generatebimirecord)
- [generateBimiRecordRaw](ToolsControllerApi.md#generatebimirecordraw)
- [generateDmarcRecord](ToolsControllerApi.md#generatedmarcrecord)
- [generateDmarcRecordRaw](ToolsControllerApi.md#generatedmarcrecordraw)
- [generateMtaStsRecord](ToolsControllerApi.md#generatemtastsrecord)
- [generateMtaStsRecordRaw](ToolsControllerApi.md#generatemtastsrecordraw)
- [generateTlsReportingRecord](ToolsControllerApi.md#generatetlsreportingrecord)
- [generateTlsReportingRecordRaw](ToolsControllerApi.md#generatetlsreportingrecordraw)
- [getFakeEmailByEmailAddress](ToolsControllerApi.md#getfakeemailbyemailaddress)
- [getFakeEmailByEmailAddressRaw](ToolsControllerApi.md#getfakeemailbyemailaddressraw)
- [getFakeEmailById](ToolsControllerApi.md#getfakeemailbyid)
- [getFakeEmailByIdRaw](ToolsControllerApi.md#getfakeemailbyidraw)
- [getFakeEmailRaw](ToolsControllerApi.md#getfakeemailraw)
- [getFakeEmailRawRaw](ToolsControllerApi.md#getfakeemailrawraw)
- [getFakeEmailsForAddress](ToolsControllerApi.md#getfakeemailsforaddress)
- [getFakeEmailsForAddressRaw](ToolsControllerApi.md#getfakeemailsforaddressraw)
- [lookupBimiDomain](ToolsControllerApi.md#lookupbimidomain)
- [lookupBimiDomainRaw](ToolsControllerApi.md#lookupbimidomainraw)
- [lookupDmarcDomain](ToolsControllerApi.md#lookupdmarcdomain)
- [lookupDmarcDomainRaw](ToolsControllerApi.md#lookupdmarcdomainraw)
- [lookupMtaStsDomain](ToolsControllerApi.md#lookupmtastsdomain)
- [lookupMtaStsDomainRaw](ToolsControllerApi.md#lookupmtastsdomainraw)
- [lookupTlsReportingDomain](ToolsControllerApi.md#lookuptlsreportingdomain)
- [lookupTlsReportingDomainRaw](ToolsControllerApi.md#lookuptlsreportingdomainraw)
- [request](ToolsControllerApi.md#request)
- [withMiddleware](ToolsControllerApi.md#withmiddleware)
- [withPostMiddleware](ToolsControllerApi.md#withpostmiddleware)
- [withPreMiddleware](ToolsControllerApi.md#withpremiddleware)

## Constructors

### constructor

• **new ToolsControllerApi**(`configuration?`)

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

### checkEmailFeaturesClientSupport

▸ **checkEmailFeaturesClientSupport**(`requestParameters`, `initOverrides?`): `Promise`<[`CheckEmailFeaturesClientSupportResults`](../interfaces/CheckEmailFeaturesClientSupportResults.md)\>

Check email client support for email HTML and CSS features

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CheckEmailFeaturesClientSupportRequest`](../interfaces/CheckEmailFeaturesClientSupportRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`CheckEmailFeaturesClientSupportResults`](../interfaces/CheckEmailFeaturesClientSupportResults.md)\>

___

### checkEmailFeaturesClientSupportRaw

▸ **checkEmailFeaturesClientSupportRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CheckEmailFeaturesClientSupportResults`](../interfaces/CheckEmailFeaturesClientSupportResults.md)\>\>

Check email client support for email HTML and CSS features

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CheckEmailFeaturesClientSupportRequest`](../interfaces/CheckEmailFeaturesClientSupportRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CheckEmailFeaturesClientSupportResults`](../interfaces/CheckEmailFeaturesClientSupportResults.md)\>\>

___

### createNewFakeEmailAddress

▸ **createNewFakeEmailAddress**(`initOverrides?`): `Promise`<[`NewFakeEmailAddressResult`](../interfaces/NewFakeEmailAddressResult.md)\>

Create a new email address using the fake email domains

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`NewFakeEmailAddressResult`](../interfaces/NewFakeEmailAddressResult.md)\>

___

### createNewFakeEmailAddressRaw

▸ **createNewFakeEmailAddressRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`NewFakeEmailAddressResult`](../interfaces/NewFakeEmailAddressResult.md)\>\>

Create a new email address using the fake email domains

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`NewFakeEmailAddressResult`](../interfaces/NewFakeEmailAddressResult.md)\>\>

___

### deleteNewFakeEmailAddress

▸ **deleteNewFakeEmailAddress**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

Delete a fake email address using the fake email domains
Delete a fake email address using the fake email domains

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteNewFakeEmailAddressRequest`](../interfaces/DeleteNewFakeEmailAddressRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### deleteNewFakeEmailAddressRaw

▸ **deleteNewFakeEmailAddressRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Delete a fake email address using the fake email domains
Delete a fake email address using the fake email domains

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteNewFakeEmailAddressRequest`](../interfaces/DeleteNewFakeEmailAddressRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### generateBimiRecord

▸ **generateBimiRecord**(`requestParameters`, `initOverrides?`): `Promise`<[`GenerateBimiRecordResults`](../interfaces/GenerateBimiRecordResults.md)\>

Create a BIMI record policy

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GenerateBimiRecordRequest`](../interfaces/GenerateBimiRecordRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`GenerateBimiRecordResults`](../interfaces/GenerateBimiRecordResults.md)\>

___

### generateBimiRecordRaw

▸ **generateBimiRecordRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`GenerateBimiRecordResults`](../interfaces/GenerateBimiRecordResults.md)\>\>

Create a BIMI record policy

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GenerateBimiRecordRequest`](../interfaces/GenerateBimiRecordRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`GenerateBimiRecordResults`](../interfaces/GenerateBimiRecordResults.md)\>\>

___

### generateDmarcRecord

▸ **generateDmarcRecord**(`requestParameters`, `initOverrides?`): `Promise`<[`GenerateDmarcRecordResults`](../interfaces/GenerateDmarcRecordResults.md)\>

Create a DMARC record policy

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GenerateDmarcRecordRequest`](../interfaces/GenerateDmarcRecordRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`GenerateDmarcRecordResults`](../interfaces/GenerateDmarcRecordResults.md)\>

___

### generateDmarcRecordRaw

▸ **generateDmarcRecordRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`GenerateDmarcRecordResults`](../interfaces/GenerateDmarcRecordResults.md)\>\>

Create a DMARC record policy

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GenerateDmarcRecordRequest`](../interfaces/GenerateDmarcRecordRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`GenerateDmarcRecordResults`](../interfaces/GenerateDmarcRecordResults.md)\>\>

___

### generateMtaStsRecord

▸ **generateMtaStsRecord**(`requestParameters`, `initOverrides?`): `Promise`<[`GenerateMtaStsRecordResults`](../interfaces/GenerateMtaStsRecordResults.md)\>

Create a TLS reporting record policy

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GenerateMtaStsRecordRequest`](../interfaces/GenerateMtaStsRecordRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`GenerateMtaStsRecordResults`](../interfaces/GenerateMtaStsRecordResults.md)\>

___

### generateMtaStsRecordRaw

▸ **generateMtaStsRecordRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`GenerateMtaStsRecordResults`](../interfaces/GenerateMtaStsRecordResults.md)\>\>

Create a TLS reporting record policy

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GenerateMtaStsRecordRequest`](../interfaces/GenerateMtaStsRecordRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`GenerateMtaStsRecordResults`](../interfaces/GenerateMtaStsRecordResults.md)\>\>

___

### generateTlsReportingRecord

▸ **generateTlsReportingRecord**(`requestParameters`, `initOverrides?`): `Promise`<[`GenerateTlsReportingRecordResults`](../interfaces/GenerateTlsReportingRecordResults.md)\>

Create a TLS reporting record policy

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GenerateTlsReportingRecordRequest`](../interfaces/GenerateTlsReportingRecordRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`GenerateTlsReportingRecordResults`](../interfaces/GenerateTlsReportingRecordResults.md)\>

___

### generateTlsReportingRecordRaw

▸ **generateTlsReportingRecordRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`GenerateTlsReportingRecordResults`](../interfaces/GenerateTlsReportingRecordResults.md)\>\>

Create a TLS reporting record policy

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GenerateTlsReportingRecordRequest`](../interfaces/GenerateTlsReportingRecordRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`GenerateTlsReportingRecordResults`](../interfaces/GenerateTlsReportingRecordResults.md)\>\>

___

### getFakeEmailByEmailAddress

▸ **getFakeEmailByEmailAddress**(`requestParameters`, `initOverrides?`): `Promise`<[`FakeEmailResult`](../interfaces/FakeEmailResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetFakeEmailByEmailAddressRequest`](../interfaces/GetFakeEmailByEmailAddressRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`FakeEmailResult`](../interfaces/FakeEmailResult.md)\>

___

### getFakeEmailByEmailAddressRaw

▸ **getFakeEmailByEmailAddressRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`FakeEmailResult`](../interfaces/FakeEmailResult.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetFakeEmailByEmailAddressRequest`](../interfaces/GetFakeEmailByEmailAddressRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`FakeEmailResult`](../interfaces/FakeEmailResult.md)\>\>

___

### getFakeEmailById

▸ **getFakeEmailById**(`requestParameters`, `initOverrides?`): `Promise`<[`FakeEmailResult`](../interfaces/FakeEmailResult.md)\>

Get a fake email by its ID
Get a fake email by its ID

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetFakeEmailByIdRequest`](../interfaces/GetFakeEmailByIdRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`FakeEmailResult`](../interfaces/FakeEmailResult.md)\>

___

### getFakeEmailByIdRaw

▸ **getFakeEmailByIdRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`FakeEmailResult`](../interfaces/FakeEmailResult.md)\>\>

Get a fake email by its ID
Get a fake email by its ID

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetFakeEmailByIdRequest`](../interfaces/GetFakeEmailByIdRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`FakeEmailResult`](../interfaces/FakeEmailResult.md)\>\>

___

### getFakeEmailRaw

▸ **getFakeEmailRaw**(`requestParameters`, `initOverrides?`): `Promise`<`string`\>

Retrieve the raw content of a fake email by its ID
Get raw fake email content

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetFakeEmailRawRequest`](../interfaces/GetFakeEmailRawRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`string`\>

___

### getFakeEmailRawRaw

▸ **getFakeEmailRawRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`string`\>\>

Retrieve the raw content of a fake email by its ID
Get raw fake email content

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetFakeEmailRawRequest`](../interfaces/GetFakeEmailRawRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`string`\>\>

___

### getFakeEmailsForAddress

▸ **getFakeEmailsForAddress**(`requestParameters`, `initOverrides?`): `Promise`<[`FakeEmailPreview`](../interfaces/FakeEmailPreview.md)[]\>

Get fake emails for an address
Get fake emails for an address

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetFakeEmailsForAddressRequest`](../interfaces/GetFakeEmailsForAddressRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`FakeEmailPreview`](../interfaces/FakeEmailPreview.md)[]\>

___

### getFakeEmailsForAddressRaw

▸ **getFakeEmailsForAddressRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`FakeEmailPreview`](../interfaces/FakeEmailPreview.md)[]\>\>

Get fake emails for an address
Get fake emails for an address

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetFakeEmailsForAddressRequest`](../interfaces/GetFakeEmailsForAddressRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`FakeEmailPreview`](../interfaces/FakeEmailPreview.md)[]\>\>

___

### lookupBimiDomain

▸ **lookupBimiDomain**(`requestParameters`, `initOverrides?`): `Promise`<[`LookupBimiDomainResults`](../interfaces/LookupBimiDomainResults.md)\>

Lookup a BIMI record policy

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`LookupBimiDomainRequest`](../interfaces/LookupBimiDomainRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`LookupBimiDomainResults`](../interfaces/LookupBimiDomainResults.md)\>

___

### lookupBimiDomainRaw

▸ **lookupBimiDomainRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`LookupBimiDomainResults`](../interfaces/LookupBimiDomainResults.md)\>\>

Lookup a BIMI record policy

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`LookupBimiDomainRequest`](../interfaces/LookupBimiDomainRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`LookupBimiDomainResults`](../interfaces/LookupBimiDomainResults.md)\>\>

___

### lookupDmarcDomain

▸ **lookupDmarcDomain**(`requestParameters`, `initOverrides?`): `Promise`<[`LookupDmarcDomainResults`](../interfaces/LookupDmarcDomainResults.md)\>

Lookup a DMARC record policy

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`LookupDmarcDomainRequest`](../interfaces/LookupDmarcDomainRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`LookupDmarcDomainResults`](../interfaces/LookupDmarcDomainResults.md)\>

___

### lookupDmarcDomainRaw

▸ **lookupDmarcDomainRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`LookupDmarcDomainResults`](../interfaces/LookupDmarcDomainResults.md)\>\>

Lookup a DMARC record policy

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`LookupDmarcDomainRequest`](../interfaces/LookupDmarcDomainRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`LookupDmarcDomainResults`](../interfaces/LookupDmarcDomainResults.md)\>\>

___

### lookupMtaStsDomain

▸ **lookupMtaStsDomain**(`requestParameters`, `initOverrides?`): `Promise`<[`LookupMtaStsDomainResults`](../interfaces/LookupMtaStsDomainResults.md)\>

Lookup a MTA-STS domain policy

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`LookupMtaStsDomainRequest`](../interfaces/LookupMtaStsDomainRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`LookupMtaStsDomainResults`](../interfaces/LookupMtaStsDomainResults.md)\>

___

### lookupMtaStsDomainRaw

▸ **lookupMtaStsDomainRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`LookupMtaStsDomainResults`](../interfaces/LookupMtaStsDomainResults.md)\>\>

Lookup a MTA-STS domain policy

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`LookupMtaStsDomainRequest`](../interfaces/LookupMtaStsDomainRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`LookupMtaStsDomainResults`](../interfaces/LookupMtaStsDomainResults.md)\>\>

___

### lookupTlsReportingDomain

▸ **lookupTlsReportingDomain**(`requestParameters`, `initOverrides?`): `Promise`<[`LookupTlsReportingDomainResults`](../interfaces/LookupTlsReportingDomainResults.md)\>

Lookup a TLS reporting domain policy

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`LookupTlsReportingDomainRequest`](../interfaces/LookupTlsReportingDomainRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`LookupTlsReportingDomainResults`](../interfaces/LookupTlsReportingDomainResults.md)\>

___

### lookupTlsReportingDomainRaw

▸ **lookupTlsReportingDomainRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`LookupTlsReportingDomainResults`](../interfaces/LookupTlsReportingDomainResults.md)\>\>

Lookup a TLS reporting domain policy

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`LookupTlsReportingDomainRequest`](../interfaces/LookupTlsReportingDomainRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`LookupTlsReportingDomainResults`](../interfaces/LookupTlsReportingDomainResults.md)\>\>

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
