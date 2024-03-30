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
import { DNSLookupOptions, DNSLookupResults, DNSLookupsOptions, DescribeDomainOptions, DescribeMailServerDomainResult, EmailVerificationResult, IPAddressResult, VerifyEmailAddressOptions } from '../models';
export interface DescribeMailServerDomainRequest {
    describeDomainOptions: DescribeDomainOptions;
}
export interface GetDnsLookupRequest {
    dNSLookupOptions: DNSLookupOptions;
}
export interface GetDnsLookupsRequest {
    dNSLookupsOptions: DNSLookupsOptions;
}
export interface GetIpAddressRequest {
    name: string;
}
export interface VerifyEmailAddressRequest {
    verifyEmailAddressOptions: VerifyEmailAddressOptions;
}
/**
 *
 */
export declare class MailServerControllerApi extends runtime.BaseAPI {
    /**
     * Get DNS Mail Server records for a domain
     */
    describeMailServerDomainRaw(requestParameters: DescribeMailServerDomainRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<DescribeMailServerDomainResult>>;
    /**
     * Get DNS Mail Server records for a domain
     */
    describeMailServerDomain(requestParameters: DescribeMailServerDomainRequest, initOverrides?: RequestInit): Promise<DescribeMailServerDomainResult>;
    /**
     * Lookup DNS records for a domain
     */
    getDnsLookupRaw(requestParameters: GetDnsLookupRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<DNSLookupResults>>;
    /**
     * Lookup DNS records for a domain
     */
    getDnsLookup(requestParameters: GetDnsLookupRequest, initOverrides?: RequestInit): Promise<DNSLookupResults>;
    /**
     * Lookup DNS records for multiple domains
     */
    getDnsLookupsRaw(requestParameters: GetDnsLookupsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<DNSLookupResults>>;
    /**
     * Lookup DNS records for multiple domains
     */
    getDnsLookups(requestParameters: GetDnsLookupsRequest, initOverrides?: RequestInit): Promise<DNSLookupResults>;
    /**
     * Get IP address for a domain
     */
    getIpAddressRaw(requestParameters: GetIpAddressRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<IPAddressResult>>;
    /**
     * Get IP address for a domain
     */
    getIpAddress(requestParameters: GetIpAddressRequest, initOverrides?: RequestInit): Promise<IPAddressResult>;
    /**
     * Deprecated. Use the EmailVerificationController methods for more accurate and reliable functionality. Verify the existence of an email address at a given mail server.
     */
    verifyEmailAddressRaw(requestParameters: VerifyEmailAddressRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<EmailVerificationResult>>;
    /**
     * Deprecated. Use the EmailVerificationController methods for more accurate and reliable functionality. Verify the existence of an email address at a given mail server.
     */
    verifyEmailAddress(requestParameters: VerifyEmailAddressRequest, initOverrides?: RequestInit): Promise<EmailVerificationResult>;
}
