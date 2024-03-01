/**
 * MailSlurp API
 * MailSlurp is an API for sending and receiving emails from dynamically allocated email addresses. It\'s designed for developers and QA teams to test applications, process inbound emails, send templated notifications, attachments, and more.  ## Resources  - [Homepage](https://www.mailslurp.com) - Get an [API KEY](https://app.mailslurp.com/sign-up/) - Generated [SDK Clients](https://docs.mailslurp.com/) - [Examples](https://github.com/mailslurp/examples) repository
 *
 * The version of the OpenAPI document: 6.5.2
 * Contact: contact@mailslurp.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import * as runtime from '../runtime';
import { CheckEmailFeaturesClientSupportOptions, CheckEmailFeaturesClientSupportResults, FakeEmailPreview, FakeEmailResult, GenerateBimiRecordOptions, GenerateBimiRecordResults, GenerateDmarcRecordOptions, GenerateDmarcRecordResults, GenerateMtaStsRecordOptions, GenerateMtaStsRecordResults, GenerateTlsReportingRecordOptions, GenerateTlsReportingRecordResults, LookupBimiDomainOptions, LookupBimiDomainResults, LookupDmarcDomainOptions, LookupDmarcDomainResults, LookupMtaStsDomainOptions, LookupMtaStsDomainResults, LookupTlsReportingDomainOptions, LookupTlsReportingDomainResults, NewFakeEmailAddressResult } from '../models';
export interface CheckEmailFeaturesClientSupportRequest {
    checkEmailFeaturesClientSupportOptions: CheckEmailFeaturesClientSupportOptions;
}
export interface GenerateBimiRecordRequest {
    generateBimiRecordOptions: GenerateBimiRecordOptions;
}
export interface GenerateDmarcRecordRequest {
    generateDmarcRecordOptions: GenerateDmarcRecordOptions;
}
export interface GenerateMtaStsRecordRequest {
    generateMtaStsRecordOptions: GenerateMtaStsRecordOptions;
}
export interface GenerateTlsReportingRecordRequest {
    generateTlsReportingRecordOptions: GenerateTlsReportingRecordOptions;
}
export interface GetFakeEmailByIdRequest {
    id: string;
}
export interface GetFakeEmailsForAddressRequest {
    emailAddress: string;
    page?: number;
}
export interface LookupBimiDomainRequest {
    lookupBimiDomainOptions: LookupBimiDomainOptions;
}
export interface LookupDmarcDomainRequest {
    lookupDmarcDomainOptions: LookupDmarcDomainOptions;
}
export interface LookupMtaStsDomainRequest {
    lookupMtaStsDomainOptions: LookupMtaStsDomainOptions;
}
export interface LookupTlsReportingDomainRequest {
    lookupTlsReportingDomainOptions: LookupTlsReportingDomainOptions;
}
/**
 *
 */
export declare class ToolsControllerApi extends runtime.BaseAPI {
    /**
     * Check email client support for email HTML and CSS features
     */
    checkEmailFeaturesClientSupportRaw(requestParameters: CheckEmailFeaturesClientSupportRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<CheckEmailFeaturesClientSupportResults>>;
    /**
     * Check email client support for email HTML and CSS features
     */
    checkEmailFeaturesClientSupport(requestParameters: CheckEmailFeaturesClientSupportRequest, initOverrides?: RequestInit): Promise<CheckEmailFeaturesClientSupportResults>;
    /**
     * Create a new email address using the fake email domains
     */
    createNewFakeEmailAddressRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<NewFakeEmailAddressResult>>;
    /**
     * Create a new email address using the fake email domains
     */
    createNewFakeEmailAddress(initOverrides?: RequestInit): Promise<NewFakeEmailAddressResult>;
    /**
     * Create a BIMI record policy
     */
    generateBimiRecordRaw(requestParameters: GenerateBimiRecordRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<GenerateBimiRecordResults>>;
    /**
     * Create a BIMI record policy
     */
    generateBimiRecord(requestParameters: GenerateBimiRecordRequest, initOverrides?: RequestInit): Promise<GenerateBimiRecordResults>;
    /**
     * Create a DMARC record policy
     */
    generateDmarcRecordRaw(requestParameters: GenerateDmarcRecordRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<GenerateDmarcRecordResults>>;
    /**
     * Create a DMARC record policy
     */
    generateDmarcRecord(requestParameters: GenerateDmarcRecordRequest, initOverrides?: RequestInit): Promise<GenerateDmarcRecordResults>;
    /**
     * Create a TLS reporting record policy
     */
    generateMtaStsRecordRaw(requestParameters: GenerateMtaStsRecordRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<GenerateMtaStsRecordResults>>;
    /**
     * Create a TLS reporting record policy
     */
    generateMtaStsRecord(requestParameters: GenerateMtaStsRecordRequest, initOverrides?: RequestInit): Promise<GenerateMtaStsRecordResults>;
    /**
     * Create a TLS reporting record policy
     */
    generateTlsReportingRecordRaw(requestParameters: GenerateTlsReportingRecordRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<GenerateTlsReportingRecordResults>>;
    /**
     * Create a TLS reporting record policy
     */
    generateTlsReportingRecord(requestParameters: GenerateTlsReportingRecordRequest, initOverrides?: RequestInit): Promise<GenerateTlsReportingRecordResults>;
    /**
     */
    getFakeEmailByIdRaw(requestParameters: GetFakeEmailByIdRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<FakeEmailResult>>;
    /**
     */
    getFakeEmailById(requestParameters: GetFakeEmailByIdRequest, initOverrides?: RequestInit): Promise<FakeEmailResult>;
    /**
     */
    getFakeEmailsForAddressRaw(requestParameters: GetFakeEmailsForAddressRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<FakeEmailPreview>>>;
    /**
     */
    getFakeEmailsForAddress(requestParameters: GetFakeEmailsForAddressRequest, initOverrides?: RequestInit): Promise<Array<FakeEmailPreview>>;
    /**
     * Lookup a BIMI record policy
     */
    lookupBimiDomainRaw(requestParameters: LookupBimiDomainRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<LookupBimiDomainResults>>;
    /**
     * Lookup a BIMI record policy
     */
    lookupBimiDomain(requestParameters: LookupBimiDomainRequest, initOverrides?: RequestInit): Promise<LookupBimiDomainResults>;
    /**
     * Lookup a DMARC record policy
     */
    lookupDmarcDomainRaw(requestParameters: LookupDmarcDomainRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<LookupDmarcDomainResults>>;
    /**
     * Lookup a DMARC record policy
     */
    lookupDmarcDomain(requestParameters: LookupDmarcDomainRequest, initOverrides?: RequestInit): Promise<LookupDmarcDomainResults>;
    /**
     * Lookup a MTA-STS domain policy
     */
    lookupMtaStsDomainRaw(requestParameters: LookupMtaStsDomainRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<LookupMtaStsDomainResults>>;
    /**
     * Lookup a MTA-STS domain policy
     */
    lookupMtaStsDomain(requestParameters: LookupMtaStsDomainRequest, initOverrides?: RequestInit): Promise<LookupMtaStsDomainResults>;
    /**
     * Lookup a TLS reporting domain policy
     */
    lookupTlsReportingDomainRaw(requestParameters: LookupTlsReportingDomainRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<LookupTlsReportingDomainResults>>;
    /**
     * Lookup a TLS reporting domain policy
     */
    lookupTlsReportingDomain(requestParameters: LookupTlsReportingDomainRequest, initOverrides?: RequestInit): Promise<LookupTlsReportingDomainResults>;
}
