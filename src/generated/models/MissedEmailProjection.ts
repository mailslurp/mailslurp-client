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
 * Missed email data
 * @export
 * @interface MissedEmailProjection
 */
export interface MissedEmailProjection {
  /**
   *
   * @type {string}
   * @memberof MissedEmailProjection
   */
  userId?: string | null;
  /**
   *
   * @type {Date}
   * @memberof MissedEmailProjection
   */
  createdAt: Date;
  /**
   *
   * @type {string}
   * @memberof MissedEmailProjection
   */
  subject?: string | null;
  /**
   *
   * @type {string}
   * @memberof MissedEmailProjection
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof MissedEmailProjection
   */
  from?: string | null;
}

export function MissedEmailProjectionFromJSON(
  json: any
): MissedEmailProjection {
  return MissedEmailProjectionFromJSONTyped(json, false);
}

export function MissedEmailProjectionFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): MissedEmailProjection {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    userId: !exists(json, 'userId') ? undefined : json['userId'],
    createdAt: new Date(json['createdAt']),
    subject: !exists(json, 'subject') ? undefined : json['subject'],
    id: json['id'],
    from: !exists(json, 'from') ? undefined : json['from'],
  };
}

export function MissedEmailProjectionToJSON(
  value?: MissedEmailProjection | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    userId: value.userId,
    createdAt: value.createdAt.toISOString(),
    subject: value.subject,
    id: value.id,
    from: value.from,
  };
}
