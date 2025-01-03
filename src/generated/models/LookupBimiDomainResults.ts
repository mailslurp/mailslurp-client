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

import { exists, mapValues } from '../runtime';
import {
  DNSLookupOptions,
  DNSLookupOptionsFromJSON,
  DNSLookupOptionsFromJSONTyped,
  DNSLookupOptionsToJSON,
  DNSLookupResult,
  DNSLookupResultFromJSON,
  DNSLookupResultFromJSONTyped,
  DNSLookupResultToJSON,
} from './';

/**
 *
 * @export
 * @interface LookupBimiDomainResults
 */
export interface LookupBimiDomainResults {
  /**
   *
   * @type {boolean}
   * @memberof LookupBimiDomainResults
   */
  valid: boolean;
  /**
   *
   * @type {DNSLookupOptions}
   * @memberof LookupBimiDomainResults
   */
  query: DNSLookupOptions;
  /**
   *
   * @type {Array<DNSLookupResult>}
   * @memberof LookupBimiDomainResults
   */
  records: Array<DNSLookupResult>;
  /**
   *
   * @type {Array<string>}
   * @memberof LookupBimiDomainResults
   */
  errors: Array<string>;
  /**
   *
   * @type {Array<string>}
   * @memberof LookupBimiDomainResults
   */
  warnings: Array<string>;
}

export function LookupBimiDomainResultsFromJSON(
  json: any
): LookupBimiDomainResults {
  return LookupBimiDomainResultsFromJSONTyped(json, false);
}

export function LookupBimiDomainResultsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): LookupBimiDomainResults {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    valid: json['valid'],
    query: DNSLookupOptionsFromJSON(json['query']),
    records: (json['records'] as Array<any>).map(DNSLookupResultFromJSON),
    errors: json['errors'],
    warnings: json['warnings'],
  };
}

export function LookupBimiDomainResultsToJSON(
  value?: LookupBimiDomainResults | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    valid: value.valid,
    query: DNSLookupOptionsToJSON(value.query),
    records: (value.records as Array<any>).map(DNSLookupResultToJSON),
    errors: value.errors,
    warnings: value.warnings,
  };
}
