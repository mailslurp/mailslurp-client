/* tslint:disable */
/* eslint-disable */
/**
 * MailSlurp API
 * MailSlurp is an API for sending and receiving emails from dynamically allocated email addresses. It\'s designed for developers and QA teams to test applications, process inbound emails, send templated notifications, attachments, and more.  ## Resources  - [Homepage](https://www.mailslurp.com) - Get an [API KEY](https://app.mailslurp.com/sign-up/) - Generated [SDK Clients](https://www.mailslurp.com/docs/) - [Examples](https://github.com/mailslurp/examples) repository
 *
 * The version of the OpenAPI document: 6.5.2
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Options for exporting user data
 * @export
 * @interface ExportOptions
 */
export interface ExportOptions {
  /**
   *
   * @type {string}
   * @memberof ExportOptions
   */
  outputFormat: ExportOptionsOutputFormatEnum;
  /**
   *
   * @type {boolean}
   * @memberof ExportOptions
   */
  excludePreviouslyExported?: boolean;
  /**
   *
   * @type {Date}
   * @memberof ExportOptions
   */
  createdEarliestTime?: Date;
  /**
   *
   * @type {Date}
   * @memberof ExportOptions
   */
  createdOldestTime?: Date;
  /**
   *
   * @type {string}
   * @memberof ExportOptions
   */
  filter?: string;
  /**
   *
   * @type {object}
   * @memberof ExportOptions
   */
  listSeparatorToken?: object;
}

/**
 * @export
 * @enum {string}
 */
export enum ExportOptionsOutputFormatEnum {
  DEFAULT = 'CSV_DEFAULT',
  EXCEL = 'CSV_EXCEL',
}

export function ExportOptionsFromJSON(json: any): ExportOptions {
  return ExportOptionsFromJSONTyped(json, false);
}

export function ExportOptionsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ExportOptions {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    outputFormat: json['outputFormat'],
    excludePreviouslyExported: !exists(json, 'excludePreviouslyExported')
      ? undefined
      : json['excludePreviouslyExported'],
    createdEarliestTime: !exists(json, 'createdEarliestTime')
      ? undefined
      : new Date(json['createdEarliestTime']),
    createdOldestTime: !exists(json, 'createdOldestTime')
      ? undefined
      : new Date(json['createdOldestTime']),
    filter: !exists(json, 'filter') ? undefined : json['filter'],
    listSeparatorToken: !exists(json, 'listSeparatorToken')
      ? undefined
      : json['listSeparatorToken'],
  };
}

export function ExportOptionsToJSON(value?: ExportOptions | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    outputFormat: value.outputFormat,
    excludePreviouslyExported: value.excludePreviouslyExported,
    createdEarliestTime:
      value.createdEarliestTime === undefined
        ? undefined
        : value.createdEarliestTime.toISOString(),
    createdOldestTime:
      value.createdOldestTime === undefined
        ? undefined
        : value.createdOldestTime.toISOString(),
    filter: value.filter,
    listSeparatorToken: value.listSeparatorToken,
  };
}
