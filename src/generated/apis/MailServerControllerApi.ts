/* tslint:disable */
/* eslint-disable */
/**
 * MailSlurp API
 * MailSlurp is an API for sending and receiving emails and SMS from dynamically allocated email addresses and phone numbers. It\'s designed for developers and QA teams to test applications, process inbound emails, send templated notifications, attachments, and more.  ## Resources  - [Homepage](https://www.mailslurp.com) - Get an [API KEY](https://app.mailslurp.com/sign-up/) - Generated [SDK Clients](https://docs.mailslurp.com/) - [Examples](https://github.com/mailslurp/examples) repository
 *
 * The version of the OpenAPI document: 6.5.2
 * Contact: contact@mailslurp.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import * as runtime from '../runtime';
import {
  DNSLookupOptions,
  DNSLookupOptionsFromJSON,
  DNSLookupOptionsToJSON,
  DNSLookupResults,
  DNSLookupResultsFromJSON,
  DNSLookupResultsToJSON,
  DNSLookupsOptions,
  DNSLookupsOptionsFromJSON,
  DNSLookupsOptionsToJSON,
  DescribeDomainOptions,
  DescribeDomainOptionsFromJSON,
  DescribeDomainOptionsToJSON,
  DescribeMailServerDomainResult,
  DescribeMailServerDomainResultFromJSON,
  DescribeMailServerDomainResultToJSON,
  EmailVerificationResult,
  EmailVerificationResultFromJSON,
  EmailVerificationResultToJSON,
  IPAddressResult,
  IPAddressResultFromJSON,
  IPAddressResultToJSON,
  VerifyEmailAddressOptions,
  VerifyEmailAddressOptionsFromJSON,
  VerifyEmailAddressOptionsToJSON,
} from '../models';

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
export class MailServerControllerApi extends runtime.BaseAPI {
  /**
   * Get DNS Mail Server records for a domain
   */
  async describeMailServerDomainRaw(
    requestParameters: DescribeMailServerDomainRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<DescribeMailServerDomainResult>> {
    if (
      requestParameters.describeDomainOptions === null ||
      requestParameters.describeDomainOptions === undefined
    ) {
      throw new runtime.RequiredError(
        'describeDomainOptions',
        'Required parameter requestParameters.describeDomainOptions was null or undefined when calling describeMailServerDomain.'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
    }

    const response = await this.request(
      {
        path: `/mail-server/describe/domain`,
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: DescribeDomainOptionsToJSON(
          requestParameters.describeDomainOptions
        ),
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      DescribeMailServerDomainResultFromJSON(jsonValue)
    );
  }

  /**
   * Get DNS Mail Server records for a domain
   */
  async describeMailServerDomain(
    requestParameters: DescribeMailServerDomainRequest,
    initOverrides?: RequestInit
  ): Promise<DescribeMailServerDomainResult> {
    const response = await this.describeMailServerDomainRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Lookup DNS records for a domain
   */
  async getDnsLookupRaw(
    requestParameters: GetDnsLookupRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<DNSLookupResults>> {
    if (
      requestParameters.dNSLookupOptions === null ||
      requestParameters.dNSLookupOptions === undefined
    ) {
      throw new runtime.RequiredError(
        'dNSLookupOptions',
        'Required parameter requestParameters.dNSLookupOptions was null or undefined when calling getDnsLookup.'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
    }

    const response = await this.request(
      {
        path: `/mail-server/describe/dns-lookup`,
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: DNSLookupOptionsToJSON(requestParameters.dNSLookupOptions),
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      DNSLookupResultsFromJSON(jsonValue)
    );
  }

  /**
   * Lookup DNS records for a domain
   */
  async getDnsLookup(
    requestParameters: GetDnsLookupRequest,
    initOverrides?: RequestInit
  ): Promise<DNSLookupResults> {
    const response = await this.getDnsLookupRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Lookup DNS records for multiple domains
   */
  async getDnsLookupsRaw(
    requestParameters: GetDnsLookupsRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<DNSLookupResults>> {
    if (
      requestParameters.dNSLookupsOptions === null ||
      requestParameters.dNSLookupsOptions === undefined
    ) {
      throw new runtime.RequiredError(
        'dNSLookupsOptions',
        'Required parameter requestParameters.dNSLookupsOptions was null or undefined when calling getDnsLookups.'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
    }

    const response = await this.request(
      {
        path: `/mail-server/describe/dns-lookups`,
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: DNSLookupsOptionsToJSON(requestParameters.dNSLookupsOptions),
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      DNSLookupResultsFromJSON(jsonValue)
    );
  }

  /**
   * Lookup DNS records for multiple domains
   */
  async getDnsLookups(
    requestParameters: GetDnsLookupsRequest,
    initOverrides?: RequestInit
  ): Promise<DNSLookupResults> {
    const response = await this.getDnsLookupsRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Get IP address for a domain
   */
  async getIpAddressRaw(
    requestParameters: GetIpAddressRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<IPAddressResult>> {
    if (
      requestParameters.name === null ||
      requestParameters.name === undefined
    ) {
      throw new runtime.RequiredError(
        'name',
        'Required parameter requestParameters.name was null or undefined when calling getIpAddress.'
      );
    }

    const queryParameters: any = {};

    if (requestParameters.name !== undefined) {
      queryParameters['name'] = requestParameters.name;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
    }

    const response = await this.request(
      {
        path: `/mail-server/describe/ip-address`,
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      IPAddressResultFromJSON(jsonValue)
    );
  }

  /**
   * Get IP address for a domain
   */
  async getIpAddress(
    requestParameters: GetIpAddressRequest,
    initOverrides?: RequestInit
  ): Promise<IPAddressResult> {
    const response = await this.getIpAddressRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Deprecated. Use the EmailVerificationController methods for more accurate and reliable functionality. Verify the existence of an email address at a given mail server.
   */
  async verifyEmailAddressRaw(
    requestParameters: VerifyEmailAddressRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<EmailVerificationResult>> {
    if (
      requestParameters.verifyEmailAddressOptions === null ||
      requestParameters.verifyEmailAddressOptions === undefined
    ) {
      throw new runtime.RequiredError(
        'verifyEmailAddressOptions',
        'Required parameter requestParameters.verifyEmailAddressOptions was null or undefined when calling verifyEmailAddress.'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
    }

    const response = await this.request(
      {
        path: `/mail-server/verify/email-address`,
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: VerifyEmailAddressOptionsToJSON(
          requestParameters.verifyEmailAddressOptions
        ),
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      EmailVerificationResultFromJSON(jsonValue)
    );
  }

  /**
   * Deprecated. Use the EmailVerificationController methods for more accurate and reliable functionality. Verify the existence of an email address at a given mail server.
   */
  async verifyEmailAddress(
    requestParameters: VerifyEmailAddressRequest,
    initOverrides?: RequestInit
  ): Promise<EmailVerificationResult> {
    const response = await this.verifyEmailAddressRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }
}
