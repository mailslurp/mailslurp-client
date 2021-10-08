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
 * A compact representation of a full email. Used in list endpoints to keep response sizes low. Body and attachments are not included. To get all fields of the email use the `getEmail` method with the email projection's ID. See `EmailDto` for documentation on projection properties.
 * @export
 * @interface EmailProjection
 */
export interface EmailProjection {
  /**
   *
   * @type {Array<string>}
   * @memberof EmailProjection
   */
  attachments?: Array<string>;
  /**
   *
   * @type {Array<string>}
   * @memberof EmailProjection
   */
  bcc?: Array<string>;
  /**
   *
   * @type {string}
   * @memberof EmailProjection
   */
  bodyExcerpt?: string;
  /**
   *
   * @type {string}
   * @memberof EmailProjection
   */
  bodyMD5Hash?: string;
  /**
   *
   * @type {Array<string>}
   * @memberof EmailProjection
   */
  cc?: Array<string>;
  /**
   *
   * @type {Date}
   * @memberof EmailProjection
   */
  createdAt: Date;
  /**
   *
   * @type {string}
   * @memberof EmailProjection
   */
  from?: string;
  /**
   *
   * @type {string}
   * @memberof EmailProjection
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof EmailProjection
   */
  inboxId: string;
  /**
   *
   * @type {boolean}
   * @memberof EmailProjection
   */
  read?: boolean;
  /**
   *
   * @type {string}
   * @memberof EmailProjection
   */
  subject?: string;
  /**
   *
   * @type {boolean}
   * @memberof EmailProjection
   */
  teamAccess?: boolean;
  /**
   *
   * @type {Array<string>}
   * @memberof EmailProjection
   */
  to: Array<string>;
}

export function EmailProjectionFromJSON(json: any): EmailProjection {
  return EmailProjectionFromJSONTyped(json, false);
}

export function EmailProjectionFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): EmailProjection {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    attachments: !exists(json, 'attachments') ? undefined : json['attachments'],
    bcc: !exists(json, 'bcc') ? undefined : json['bcc'],
    bodyExcerpt: !exists(json, 'bodyExcerpt') ? undefined : json['bodyExcerpt'],
    bodyMD5Hash: !exists(json, 'bodyMD5Hash') ? undefined : json['bodyMD5Hash'],
    cc: !exists(json, 'cc') ? undefined : json['cc'],
    createdAt: new Date(json['createdAt']),
    from: !exists(json, 'from') ? undefined : json['from'],
    id: json['id'],
    inboxId: json['inboxId'],
    read: !exists(json, 'read') ? undefined : json['read'],
    subject: !exists(json, 'subject') ? undefined : json['subject'],
    teamAccess: !exists(json, 'teamAccess') ? undefined : json['teamAccess'],
    to: json['to'],
  };
}

export function EmailProjectionToJSON(value?: EmailProjection | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    attachments: value.attachments,
    bcc: value.bcc,
    bodyExcerpt: value.bodyExcerpt,
    bodyMD5Hash: value.bodyMD5Hash,
    cc: value.cc,
    createdAt: value.createdAt.toISOString(),
    from: value.from,
    id: value.id,
    inboxId: value.inboxId,
    read: value.read,
    subject: value.subject,
    teamAccess: value.teamAccess,
    to: value.to,
  };
}
