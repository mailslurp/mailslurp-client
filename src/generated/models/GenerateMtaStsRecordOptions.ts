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
/**
 *
 * @export
 * @interface GenerateMtaStsRecordOptions
 */
export interface GenerateMtaStsRecordOptions {
  /**
   *
   * @type {string}
   * @memberof GenerateMtaStsRecordOptions
   */
  host: string;
  /**
   *
   * @type {string}
   * @memberof GenerateMtaStsRecordOptions
   */
  version: GenerateMtaStsRecordOptionsVersionEnum;
  /**
   *
   * @type {string}
   * @memberof GenerateMtaStsRecordOptions
   */
  mode: GenerateMtaStsRecordOptionsModeEnum;
  /**
   *
   * @type {number}
   * @memberof GenerateMtaStsRecordOptions
   */
  ttl: number;
  /**
   *
   * @type {number}
   * @memberof GenerateMtaStsRecordOptions
   */
  maxAgeSeconds: number;
  /**
   *
   * @type {Array<string>}
   * @memberof GenerateMtaStsRecordOptions
   */
  mxRecords: Array<string>;
}

/**
 * @export
 * @enum {string}
 */
export enum GenerateMtaStsRecordOptionsVersionEnum {
  STSv1 = 'STSv1',
}
/**
 * @export
 * @enum {string}
 */
export enum GenerateMtaStsRecordOptionsModeEnum {
  TESTING = 'TESTING',
  ENFORCE = 'ENFORCE',
  NONE = 'NONE',
}

export function GenerateMtaStsRecordOptionsFromJSON(
  json: any
): GenerateMtaStsRecordOptions {
  return GenerateMtaStsRecordOptionsFromJSONTyped(json, false);
}

export function GenerateMtaStsRecordOptionsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GenerateMtaStsRecordOptions {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    host: json['host'],
    version: json['version'],
    mode: json['mode'],
    ttl: json['ttl'],
    maxAgeSeconds: json['maxAgeSeconds'],
    mxRecords: json['mxRecords'],
  };
}

export function GenerateMtaStsRecordOptionsToJSON(
  value?: GenerateMtaStsRecordOptions | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    host: value.host,
    version: value.version,
    mode: value.mode,
    ttl: value.ttl,
    maxAgeSeconds: value.maxAgeSeconds,
    mxRecords: value.mxRecords,
  };
}
