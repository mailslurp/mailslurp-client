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

- [analyzeDmarcReport](ToolsControllerApi.md#analyzedmarcreport)
- [analyzeDmarcReportRaw](ToolsControllerApi.md#analyzedmarcreportraw)
- [analyzeEmailHeaders](ToolsControllerApi.md#analyzeemailheaders)
- [analyzeEmailHeadersRaw](ToolsControllerApi.md#analyzeemailheadersraw)
- [checkCampaignProbe](ToolsControllerApi.md#checkcampaignprobe)
- [checkCampaignProbeRaw](ToolsControllerApi.md#checkcampaignproberaw)
- [checkDnsPropagation](ToolsControllerApi.md#checkdnspropagation)
- [checkDnsPropagationRaw](ToolsControllerApi.md#checkdnspropagationraw)
- [checkDomainMonitor](ToolsControllerApi.md#checkdomainmonitor)
- [checkDomainMonitorRaw](ToolsControllerApi.md#checkdomainmonitorraw)
- [checkEmailAudit](ToolsControllerApi.md#checkemailaudit)
- [checkEmailAuditRaw](ToolsControllerApi.md#checkemailauditraw)
- [checkEmailAuthStack](ToolsControllerApi.md#checkemailauthstack)
- [checkEmailAuthStackRaw](ToolsControllerApi.md#checkemailauthstackraw)
- [checkEmailBlacklist](ToolsControllerApi.md#checkemailblacklist)
- [checkEmailBlacklistRaw](ToolsControllerApi.md#checkemailblacklistraw)
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
- [generateSpfRecord](ToolsControllerApi.md#generatespfrecord)
- [generateSpfRecordRaw](ToolsControllerApi.md#generatespfrecordraw)
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
- [lookupDkimDomain](ToolsControllerApi.md#lookupdkimdomain)
- [lookupDkimDomainRaw](ToolsControllerApi.md#lookupdkimdomainraw)
- [lookupDmarcDomain](ToolsControllerApi.md#lookupdmarcdomain)
- [lookupDmarcDomainRaw](ToolsControllerApi.md#lookupdmarcdomainraw)
- [lookupMtaStsDomain](ToolsControllerApi.md#lookupmtastsdomain)
- [lookupMtaStsDomainRaw](ToolsControllerApi.md#lookupmtastsdomainraw)
- [lookupMxRecord](ToolsControllerApi.md#lookupmxrecord)
- [lookupMxRecordRaw](ToolsControllerApi.md#lookupmxrecordraw)
- [lookupPtr](ToolsControllerApi.md#lookupptr)
- [lookupPtrRaw](ToolsControllerApi.md#lookupptrraw)
- [lookupSpfDomain](ToolsControllerApi.md#lookupspfdomain)
- [lookupSpfDomainRaw](ToolsControllerApi.md#lookupspfdomainraw)
- [lookupTlsReportingDomain](ToolsControllerApi.md#lookuptlsreportingdomain)
- [lookupTlsReportingDomainRaw](ToolsControllerApi.md#lookuptlsreportingdomainraw)
- [request](ToolsControllerApi.md#request)
- [testSmtpServer](ToolsControllerApi.md#testsmtpserver)
- [testSmtpServerRaw](ToolsControllerApi.md#testsmtpserverraw)
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

### analyzeDmarcReport

▸ **analyzeDmarcReport**(`requestParameters`, `initOverrides?`): `Promise`<[`AnalyzeDmarcReportResults`](../interfaces/AnalyzeDmarcReportResults.md)\>

Parse and summarize a DMARC aggregate XML report

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AnalyzeDmarcReportRequest`](../interfaces/AnalyzeDmarcReportRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`AnalyzeDmarcReportResults`](../interfaces/AnalyzeDmarcReportResults.md)\>

___

### analyzeDmarcReportRaw

▸ **analyzeDmarcReportRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AnalyzeDmarcReportResults`](../interfaces/AnalyzeDmarcReportResults.md)\>\>

Parse and summarize a DMARC aggregate XML report

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AnalyzeDmarcReportRequest`](../interfaces/AnalyzeDmarcReportRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AnalyzeDmarcReportResults`](../interfaces/AnalyzeDmarcReportResults.md)\>\>

___

### analyzeEmailHeaders

▸ **analyzeEmailHeaders**(`requestParameters`, `initOverrides?`): `Promise`<[`AnalyzeEmailHeadersResults`](../interfaces/AnalyzeEmailHeadersResults.md)\>

Analyze email headers for auth results and delivery path

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AnalyzeEmailHeadersRequest`](../interfaces/AnalyzeEmailHeadersRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`AnalyzeEmailHeadersResults`](../interfaces/AnalyzeEmailHeadersResults.md)\>

___

### analyzeEmailHeadersRaw

▸ **analyzeEmailHeadersRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AnalyzeEmailHeadersResults`](../interfaces/AnalyzeEmailHeadersResults.md)\>\>

Analyze email headers for auth results and delivery path

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AnalyzeEmailHeadersRequest`](../interfaces/AnalyzeEmailHeadersRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AnalyzeEmailHeadersResults`](../interfaces/AnalyzeEmailHeadersResults.md)\>\>

___

### checkCampaignProbe

▸ **checkCampaignProbe**(`requestParameters`, `initOverrides?`): `Promise`<[`CheckCampaignProbeResults`](../interfaces/CheckCampaignProbeResults.md)\>

Run a one-shot free campaign probe preflight check

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CheckCampaignProbeRequest`](../interfaces/CheckCampaignProbeRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`CheckCampaignProbeResults`](../interfaces/CheckCampaignProbeResults.md)\>

___

### checkCampaignProbeRaw

▸ **checkCampaignProbeRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CheckCampaignProbeResults`](../interfaces/CheckCampaignProbeResults.md)\>\>

Run a one-shot free campaign probe preflight check

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CheckCampaignProbeRequest`](../interfaces/CheckCampaignProbeRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CheckCampaignProbeResults`](../interfaces/CheckCampaignProbeResults.md)\>\>

___

### checkDnsPropagation

▸ **checkDnsPropagation**(`requestParameters`, `initOverrides?`): `Promise`<[`CheckDnsPropagationResults`](../interfaces/CheckDnsPropagationResults.md)\>

Check DNS propagation for a host and record type across configured resolvers

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CheckDnsPropagationRequest`](../interfaces/CheckDnsPropagationRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`CheckDnsPropagationResults`](../interfaces/CheckDnsPropagationResults.md)\>

___

### checkDnsPropagationRaw

▸ **checkDnsPropagationRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CheckDnsPropagationResults`](../interfaces/CheckDnsPropagationResults.md)\>\>

Check DNS propagation for a host and record type across configured resolvers

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CheckDnsPropagationRequest`](../interfaces/CheckDnsPropagationRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CheckDnsPropagationResults`](../interfaces/CheckDnsPropagationResults.md)\>\>

___

### checkDomainMonitor

▸ **checkDomainMonitor**(`requestParameters`, `initOverrides?`): `Promise`<[`CheckDomainMonitorResults`](../interfaces/CheckDomainMonitorResults.md)\>

Run a one-shot free domain monitor posture check

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CheckDomainMonitorRequest`](../interfaces/CheckDomainMonitorRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`CheckDomainMonitorResults`](../interfaces/CheckDomainMonitorResults.md)\>

___

### checkDomainMonitorRaw

▸ **checkDomainMonitorRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CheckDomainMonitorResults`](../interfaces/CheckDomainMonitorResults.md)\>\>

Run a one-shot free domain monitor posture check

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CheckDomainMonitorRequest`](../interfaces/CheckDomainMonitorRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CheckDomainMonitorResults`](../interfaces/CheckDomainMonitorResults.md)\>\>

___

### checkEmailAudit

▸ **checkEmailAudit**(`requestParameters`, `initOverrides?`): `Promise`<[`EmailAuditAnalysisResult`](../interfaces/EmailAuditAnalysisResult.md)\>

Run a one-shot free email audit across links, images, HTML, and client support

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CheckEmailAuditRequest`](../interfaces/CheckEmailAuditRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`EmailAuditAnalysisResult`](../interfaces/EmailAuditAnalysisResult.md)\>

___

### checkEmailAuditRaw

▸ **checkEmailAuditRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailAuditAnalysisResult`](../interfaces/EmailAuditAnalysisResult.md)\>\>

Run a one-shot free email audit across links, images, HTML, and client support

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CheckEmailAuditRequest`](../interfaces/CheckEmailAuditRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailAuditAnalysisResult`](../interfaces/EmailAuditAnalysisResult.md)\>\>

___

### checkEmailAuthStack

▸ **checkEmailAuthStack**(`requestParameters`, `initOverrides?`): `Promise`<[`CheckEmailAuthStackResults`](../interfaces/CheckEmailAuthStackResults.md)\>

Run a one-shot combined SPF, DKIM, DMARC, BIMI, MX, MTA-STS, and TLS-RPT check

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CheckEmailAuthStackRequest`](../interfaces/CheckEmailAuthStackRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`CheckEmailAuthStackResults`](../interfaces/CheckEmailAuthStackResults.md)\>

___

### checkEmailAuthStackRaw

▸ **checkEmailAuthStackRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CheckEmailAuthStackResults`](../interfaces/CheckEmailAuthStackResults.md)\>\>

Run a one-shot combined SPF, DKIM, DMARC, BIMI, MX, MTA-STS, and TLS-RPT check

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CheckEmailAuthStackRequest`](../interfaces/CheckEmailAuthStackRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CheckEmailAuthStackResults`](../interfaces/CheckEmailAuthStackResults.md)\>\>

___

### checkEmailBlacklist

▸ **checkEmailBlacklist**(`requestParameters`, `initOverrides?`): `Promise`<[`CheckEmailBlacklistResults`](../interfaces/CheckEmailBlacklistResults.md)\>

Check whether a domain or IP appears on configured DNS blacklists

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CheckEmailBlacklistRequest`](../interfaces/CheckEmailBlacklistRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`CheckEmailBlacklistResults`](../interfaces/CheckEmailBlacklistResults.md)\>

___

### checkEmailBlacklistRaw

▸ **checkEmailBlacklistRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CheckEmailBlacklistResults`](../interfaces/CheckEmailBlacklistResults.md)\>\>

Check whether a domain or IP appears on configured DNS blacklists

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CheckEmailBlacklistRequest`](../interfaces/CheckEmailBlacklistRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CheckEmailBlacklistResults`](../interfaces/CheckEmailBlacklistResults.md)\>\>

___

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

### generateSpfRecord

▸ **generateSpfRecord**(`requestParameters`, `initOverrides?`): `Promise`<[`GenerateSpfRecordResults`](../interfaces/GenerateSpfRecordResults.md)\>

Create an SPF record

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GenerateSpfRecordRequest`](../interfaces/GenerateSpfRecordRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`GenerateSpfRecordResults`](../interfaces/GenerateSpfRecordResults.md)\>

___

### generateSpfRecordRaw

▸ **generateSpfRecordRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`GenerateSpfRecordResults`](../interfaces/GenerateSpfRecordResults.md)\>\>

Create an SPF record

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GenerateSpfRecordRequest`](../interfaces/GenerateSpfRecordRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`GenerateSpfRecordResults`](../interfaces/GenerateSpfRecordResults.md)\>\>

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

### lookupDkimDomain

▸ **lookupDkimDomain**(`requestParameters`, `initOverrides?`): `Promise`<[`LookupDkimDomainResults`](../interfaces/LookupDkimDomainResults.md)\>

Lookup and validate a DKIM record

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`LookupDkimDomainRequest`](../interfaces/LookupDkimDomainRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`LookupDkimDomainResults`](../interfaces/LookupDkimDomainResults.md)\>

___

### lookupDkimDomainRaw

▸ **lookupDkimDomainRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`LookupDkimDomainResults`](../interfaces/LookupDkimDomainResults.md)\>\>

Lookup and validate a DKIM record

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`LookupDkimDomainRequest`](../interfaces/LookupDkimDomainRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`LookupDkimDomainResults`](../interfaces/LookupDkimDomainResults.md)\>\>

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

### lookupMxRecord

▸ **lookupMxRecord**(`requestParameters`, `initOverrides?`): `Promise`<[`LookupMxRecordsResults`](../interfaces/LookupMxRecordsResults.md)\>

Lookup a MX records for a domain

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`LookupMxRecordRequest`](../interfaces/LookupMxRecordRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`LookupMxRecordsResults`](../interfaces/LookupMxRecordsResults.md)\>

___

### lookupMxRecordRaw

▸ **lookupMxRecordRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`LookupMxRecordsResults`](../interfaces/LookupMxRecordsResults.md)\>\>

Lookup a MX records for a domain

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`LookupMxRecordRequest`](../interfaces/LookupMxRecordRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`LookupMxRecordsResults`](../interfaces/LookupMxRecordsResults.md)\>\>

___

### lookupPtr

▸ **lookupPtr**(`requestParameters`, `initOverrides?`): `Promise`<[`LookupPtrResults`](../interfaces/LookupPtrResults.md)\>

Lookup PTR records for an IP address

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`LookupPtrRequest`](../interfaces/LookupPtrRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`LookupPtrResults`](../interfaces/LookupPtrResults.md)\>

___

### lookupPtrRaw

▸ **lookupPtrRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`LookupPtrResults`](../interfaces/LookupPtrResults.md)\>\>

Lookup PTR records for an IP address

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`LookupPtrRequest`](../interfaces/LookupPtrRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`LookupPtrResults`](../interfaces/LookupPtrResults.md)\>\>

___

### lookupSpfDomain

▸ **lookupSpfDomain**(`requestParameters`, `initOverrides?`): `Promise`<[`LookupSpfDomainResults`](../interfaces/LookupSpfDomainResults.md)\>

Lookup and validate an SPF record

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`LookupSpfDomainRequest`](../interfaces/LookupSpfDomainRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`LookupSpfDomainResults`](../interfaces/LookupSpfDomainResults.md)\>

___

### lookupSpfDomainRaw

▸ **lookupSpfDomainRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`LookupSpfDomainResults`](../interfaces/LookupSpfDomainResults.md)\>\>

Lookup and validate an SPF record

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`LookupSpfDomainRequest`](../interfaces/LookupSpfDomainRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`LookupSpfDomainResults`](../interfaces/LookupSpfDomainResults.md)\>\>

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

### testSmtpServer

▸ **testSmtpServer**(`requestParameters`, `initOverrides?`): `Promise`<[`TestSmtpServerResults`](../interfaces/TestSmtpServerResults.md)\>

Run a conservative SMTP connectivity, TLS, and AUTH diagnostic

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`TestSmtpServerRequest`](../interfaces/TestSmtpServerRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`TestSmtpServerResults`](../interfaces/TestSmtpServerResults.md)\>

___

### testSmtpServerRaw

▸ **testSmtpServerRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`TestSmtpServerResults`](../interfaces/TestSmtpServerResults.md)\>\>

Run a conservative SMTP connectivity, TLS, and AUTH diagnostic

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`TestSmtpServerRequest`](../interfaces/TestSmtpServerRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`TestSmtpServerResults`](../interfaces/TestSmtpServerResults.md)\>\>

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
