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
 * @interface SmsPreview
 */
export interface SmsPreview {
  /**
   *
   * @type {string}
   * @memberof SmsPreview
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof SmsPreview
   */
  userId: string;
  /**
   *
   * @type {string}
   * @memberof SmsPreview
   */
  body: string;
  /**
   *
   * @type {string}
   * @memberof SmsPreview
   */
  phoneNumber: string;
  /**
   *
   * @type {string}
   * @memberof SmsPreview
   */
  fromNumber: string;
  /**
   *
   * @type {Date}
   * @memberof SmsPreview
   */
  createdAt: Date;
}

export function SmsPreviewFromJSON(json: any): SmsPreview {
  return SmsPreviewFromJSONTyped(json, false);
}

export function SmsPreviewFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): SmsPreview {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: json['id'],
    userId: json['userId'],
    body: json['body'],
    phoneNumber: json['phoneNumber'],
    fromNumber: json['fromNumber'],
    createdAt: new Date(json['createdAt']),
  };
}

export function SmsPreviewToJSON(value?: SmsPreview | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    userId: value.userId,
    body: value.body,
    phoneNumber: value.phoneNumber,
    fromNumber: value.fromNumber,
    createdAt: value.createdAt.toISOString(),
  };
}
