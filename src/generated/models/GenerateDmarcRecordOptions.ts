/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
/**
 *
 * @export
 * @interface GenerateDmarcRecordOptions
 */
export interface GenerateDmarcRecordOptions {
  /**
   *
   * @type {string}
   * @memberof GenerateDmarcRecordOptions
   */
  domain: string;
  /**
   *
   * @type {string}
   * @memberof GenerateDmarcRecordOptions
   */
  version: GenerateDmarcRecordOptionsVersionEnum;
  /**
   *
   * @type {string}
   * @memberof GenerateDmarcRecordOptions
   */
  policy: GenerateDmarcRecordOptionsPolicyEnum;
  /**
   *
   * @type {string}
   * @memberof GenerateDmarcRecordOptions
   */
  subdomainPolicy?: GenerateDmarcRecordOptionsSubdomainPolicyEnum;
  /**
   *
   * @type {Array<string>}
   * @memberof GenerateDmarcRecordOptions
   */
  reportEmailAddress?: Array<string>;
  /**
   *
   * @type {Array<string>}
   * @memberof GenerateDmarcRecordOptions
   */
  forensicEmailAddress?: Array<string>;
  /**
   *
   * @type {number}
   * @memberof GenerateDmarcRecordOptions
   */
  percentage?: number;
  /**
   *
   * @type {string}
   * @memberof GenerateDmarcRecordOptions
   */
  reportFormat?: GenerateDmarcRecordOptionsReportFormatEnum;
  /**
   *
   * @type {number}
   * @memberof GenerateDmarcRecordOptions
   */
  secondsBetweenReports?: number;
  /**
   *
   * @type {string}
   * @memberof GenerateDmarcRecordOptions
   */
  adkim?: GenerateDmarcRecordOptionsAdkimEnum;
  /**
   *
   * @type {string}
   * @memberof GenerateDmarcRecordOptions
   */
  aspf?: GenerateDmarcRecordOptionsAspfEnum;
  /**
   *
   * @type {string}
   * @memberof GenerateDmarcRecordOptions
   */
  fo?: GenerateDmarcRecordOptionsFoEnum;
}

/**
 * @export
 * @enum {string}
 */
export enum GenerateDmarcRecordOptionsVersionEnum {
  DMARC1 = 'DMARC1',
}
/**
 * @export
 * @enum {string}
 */
export enum GenerateDmarcRecordOptionsPolicyEnum {
  NONE = 'NONE',
  QUARANTINE = 'QUARANTINE',
  REJECT = 'REJECT',
}
/**
 * @export
 * @enum {string}
 */
export enum GenerateDmarcRecordOptionsSubdomainPolicyEnum {
  NONE = 'NONE',
  QUARANTINE = 'QUARANTINE',
  REJECT = 'REJECT',
}
/**
 * @export
 * @enum {string}
 */
export enum GenerateDmarcRecordOptionsReportFormatEnum {
  AFRF = 'AFRF',
}
/**
 * @export
 * @enum {string}
 */
export enum GenerateDmarcRecordOptionsAdkimEnum {
  STRICT = 'STRICT',
  RELAXED = 'RELAXED',
}
/**
 * @export
 * @enum {string}
 */
export enum GenerateDmarcRecordOptionsAspfEnum {
  STRICT = 'STRICT',
  RELAXED = 'RELAXED',
}
/**
 * @export
 * @enum {string}
 */
export enum GenerateDmarcRecordOptionsFoEnum {
  _0 = 'FO_0',
  _1 = 'FO_1',
  D = 'FO_D',
  S = 'FO_S',
}

export function GenerateDmarcRecordOptionsFromJSON(
  json: any
): GenerateDmarcRecordOptions {
  return GenerateDmarcRecordOptionsFromJSONTyped(json, false);
}

export function GenerateDmarcRecordOptionsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GenerateDmarcRecordOptions {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    domain: json['domain'],
    version: json['version'],
    policy: json['policy'],
    subdomainPolicy: !exists(json, 'subdomainPolicy')
      ? undefined
      : json['subdomainPolicy'],
    reportEmailAddress: !exists(json, 'reportEmailAddress')
      ? undefined
      : json['reportEmailAddress'],
    forensicEmailAddress: !exists(json, 'forensicEmailAddress')
      ? undefined
      : json['forensicEmailAddress'],
    percentage: !exists(json, 'percentage') ? undefined : json['percentage'],
    reportFormat: !exists(json, 'reportFormat')
      ? undefined
      : json['reportFormat'],
    secondsBetweenReports: !exists(json, 'secondsBetweenReports')
      ? undefined
      : json['secondsBetweenReports'],
    adkim: !exists(json, 'adkim') ? undefined : json['adkim'],
    aspf: !exists(json, 'aspf') ? undefined : json['aspf'],
    fo: !exists(json, 'fo') ? undefined : json['fo'],
  };
}

export function GenerateDmarcRecordOptionsToJSON(
  value?: GenerateDmarcRecordOptions | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    domain: value.domain,
    version: value.version,
    policy: value.policy,
    subdomainPolicy: value.subdomainPolicy,
    reportEmailAddress: value.reportEmailAddress,
    forensicEmailAddress: value.forensicEmailAddress,
    percentage: value.percentage,
    reportFormat: value.reportFormat,
    secondsBetweenReports: value.secondsBetweenReports,
    adkim: value.adkim,
    aspf: value.aspf,
    fo: value.fo,
  };
}