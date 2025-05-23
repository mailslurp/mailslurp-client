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
  NameServerRecord,
  NameServerRecordFromJSON,
  NameServerRecordFromJSONTyped,
  NameServerRecordToJSON,
} from './';

/**
 * Name Server lookup result
 * @export
 * @interface DescribeMailServerDomainResult
 */
export interface DescribeMailServerDomainResult {
  /**
   *
   * @type {Array<NameServerRecord>}
   * @memberof DescribeMailServerDomainResult
   */
  mxRecords: Array<NameServerRecord>;
  /**
   *
   * @type {string}
   * @memberof DescribeMailServerDomainResult
   */
  domain: string;
  /**
   *
   * @type {string}
   * @memberof DescribeMailServerDomainResult
   */
  message?: string | null;
}

export function DescribeMailServerDomainResultFromJSON(
  json: any
): DescribeMailServerDomainResult {
  return DescribeMailServerDomainResultFromJSONTyped(json, false);
}

export function DescribeMailServerDomainResultFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): DescribeMailServerDomainResult {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    mxRecords: (json['mxRecords'] as Array<any>).map(NameServerRecordFromJSON),
    domain: json['domain'],
    message: !exists(json, 'message') ? undefined : json['message'],
  };
}

export function DescribeMailServerDomainResultToJSON(
  value?: DescribeMailServerDomainResult | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    mxRecords: (value.mxRecords as Array<any>).map(NameServerRecordToJSON),
    domain: value.domain,
    message: value.message,
  };
}
