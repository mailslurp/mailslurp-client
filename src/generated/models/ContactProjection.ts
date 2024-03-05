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
 * Email contact for address book
 * @export
 * @interface ContactProjection
 */
export interface ContactProjection {
  /**
   *
   * @type {Date}
   * @memberof ContactProjection
   */
  createdAt: Date;
  /**
   *
   * @type {string}
   * @memberof ContactProjection
   */
  emailAddress?: string | null;
  /**
   *
   * @type {Array<string>}
   * @memberof ContactProjection
   */
  emailAddresses?: Array<string> | null;
  /**
   *
   * @type {string}
   * @memberof ContactProjection
   */
  firstName?: string | null;
  /**
   *
   * @type {string}
   * @memberof ContactProjection
   */
  lastName?: string | null;
  /**
   *
   * @type {string}
   * @memberof ContactProjection
   */
  company?: string | null;
  /**
   *
   * @type {boolean}
   * @memberof ContactProjection
   */
  optOut?: boolean | null;
  /**
   *
   * @type {string}
   * @memberof ContactProjection
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof ContactProjection
   */
  groupId?: string | null;
}

export function ContactProjectionFromJSON(json: any): ContactProjection {
  return ContactProjectionFromJSONTyped(json, false);
}

export function ContactProjectionFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ContactProjection {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    createdAt: new Date(json['createdAt']),
    emailAddress: !exists(json, 'emailAddress')
      ? undefined
      : json['emailAddress'],
    emailAddresses: !exists(json, 'emailAddresses')
      ? undefined
      : json['emailAddresses'],
    firstName: !exists(json, 'firstName') ? undefined : json['firstName'],
    lastName: !exists(json, 'lastName') ? undefined : json['lastName'],
    company: !exists(json, 'company') ? undefined : json['company'],
    optOut: !exists(json, 'optOut') ? undefined : json['optOut'],
    id: json['id'],
    groupId: !exists(json, 'groupId') ? undefined : json['groupId'],
  };
}

export function ContactProjectionToJSON(value?: ContactProjection | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    createdAt: value.createdAt.toISOString(),
    emailAddress: value.emailAddress,
    emailAddresses: value.emailAddresses,
    firstName: value.firstName,
    lastName: value.lastName,
    company: value.company,
    optOut: value.optOut,
    id: value.id,
    groupId: value.groupId,
  };
}
