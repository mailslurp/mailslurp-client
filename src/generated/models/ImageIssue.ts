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
 * @interface ImageIssue
 */
export interface ImageIssue {
  /**
   *
   * @type {string}
   * @memberof ImageIssue
   */
  url: string;
  /**
   *
   * @type {number}
   * @memberof ImageIssue
   */
  responseStatus?: number;
  /**
   *
   * @type {string}
   * @memberof ImageIssue
   */
  severity: ImageIssueSeverityEnum;
  /**
   *
   * @type {string}
   * @memberof ImageIssue
   */
  message: string;
}

/**
 * @export
 * @enum {string}
 */
export enum ImageIssueSeverityEnum {
  Warning = 'Warning',
  Error = 'Error',
}

export function ImageIssueFromJSON(json: any): ImageIssue {
  return ImageIssueFromJSONTyped(json, false);
}

export function ImageIssueFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ImageIssue {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    url: json['url'],
    responseStatus: !exists(json, 'responseStatus')
      ? undefined
      : json['responseStatus'],
    severity: json['severity'],
    message: json['message'],
  };
}

export function ImageIssueToJSON(value?: ImageIssue | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    url: value.url,
    responseStatus: value.responseStatus,
    severity: value.severity,
    message: value.message,
  };
}