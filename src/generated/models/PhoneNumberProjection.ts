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
 * Phone number projection
 * @export
 * @interface PhoneNumberProjection
 */
export interface PhoneNumberProjection {
  /**
   *
   * @type {string}
   * @memberof PhoneNumberProjection
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof PhoneNumberProjection
   */
  userId: string;
  /**
   *
   * @type {string}
   * @memberof PhoneNumberProjection
   */
  phoneNumber: string;
  /**
   *
   * @type {string}
   * @memberof PhoneNumberProjection
   */
  phoneCountry: PhoneNumberProjectionPhoneCountryEnum;
  /**
   *
   * @type {Date}
   * @memberof PhoneNumberProjection
   */
  createdAt: Date;
}

/**
 * @export
 * @enum {string}
 */
export enum PhoneNumberProjectionPhoneCountryEnum {
  US = 'US',
  GB = 'GB',
}

export function PhoneNumberProjectionFromJSON(
  json: any
): PhoneNumberProjection {
  return PhoneNumberProjectionFromJSONTyped(json, false);
}

export function PhoneNumberProjectionFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PhoneNumberProjection {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: json['id'],
    userId: json['userId'],
    phoneNumber: json['phoneNumber'],
    phoneCountry: json['phoneCountry'],
    createdAt: new Date(json['createdAt']),
  };
}

export function PhoneNumberProjectionToJSON(
  value?: PhoneNumberProjection | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    userId: value.userId,
    phoneNumber: value.phoneNumber,
    phoneCountry: value.phoneCountry,
    createdAt: value.createdAt.toISOString(),
  };
}