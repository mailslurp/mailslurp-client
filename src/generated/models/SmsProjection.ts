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
 * SMS projection
 * @export
 * @interface SmsProjection
 */
export interface SmsProjection {
  /**
   *
   * @type {string}
   * @memberof SmsProjection
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof SmsProjection
   */
  body: string;
  /**
   *
   * @type {string}
   * @memberof SmsProjection
   */
  userId: string;
  /**
   *
   * @type {string}
   * @memberof SmsProjection
   */
  phoneNumber: string;
  /**
   *
   * @type {Date}
   * @memberof SmsProjection
   */
  createdAt: Date;
  /**
   *
   * @type {string}
   * @memberof SmsProjection
   */
  fromNumber: string;
  /**
   *
   * @type {boolean}
   * @memberof SmsProjection
   */
  read: boolean;
}

export function SmsProjectionFromJSON(json: any): SmsProjection {
  return SmsProjectionFromJSONTyped(json, false);
}

export function SmsProjectionFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): SmsProjection {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: json['id'],
    body: json['body'],
    userId: json['userId'],
    phoneNumber: json['phoneNumber'],
    createdAt: new Date(json['createdAt']),
    fromNumber: json['fromNumber'],
    read: json['read'],
  };
}

export function SmsProjectionToJSON(value?: SmsProjection | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    body: value.body,
    userId: value.userId,
    phoneNumber: value.phoneNumber,
    createdAt: value.createdAt.toISOString(),
    fromNumber: value.fromNumber,
    read: value.read,
  };
}
