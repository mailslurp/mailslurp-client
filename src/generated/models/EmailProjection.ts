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
 * A compact representation of a full email. Used in list endpoints to keep response sizes low. Body and attachments are not included. To get all fields of the email use the `getEmail` method with the email projection's ID. See `EmailDto` for documentation on projection properties.
 * @export
 * @interface EmailProjection
 */
export interface EmailProjection {
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
  from?: string;
  /**
   *
   * @type {string}
   * @memberof EmailProjection
   */
  subject?: string;
  /**
   *
   * @type {string}
   * @memberof EmailProjection
   */
  inboxId: string;
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
  to: Array<string>;
  /**
   *
   * @type {boolean}
   * @memberof EmailProjection
   */
  teamAccess?: boolean;
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
  bodyMD5Hash?: string;
  /**
   *
   * @type {string}
   * @memberof EmailProjection
   */
  bodyExcerpt?: string;
  /**
   *
   * @type {Date}
   * @memberof EmailProjection
   */
  createdAt: Date;
  /**
   *
   * @type {Array<string>}
   * @memberof EmailProjection
   */
  bcc?: Array<string>;
  /**
   *
   * @type {Array<string>}
   * @memberof EmailProjection
   */
  cc?: Array<string>;
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
    id: json['id'],
    from: !exists(json, 'from') ? undefined : json['from'],
    subject: !exists(json, 'subject') ? undefined : json['subject'],
    inboxId: json['inboxId'],
    attachments: !exists(json, 'attachments') ? undefined : json['attachments'],
    to: json['to'],
    teamAccess: !exists(json, 'teamAccess') ? undefined : json['teamAccess'],
    read: !exists(json, 'read') ? undefined : json['read'],
    bodyMD5Hash: !exists(json, 'bodyMD5Hash') ? undefined : json['bodyMD5Hash'],
    bodyExcerpt: !exists(json, 'bodyExcerpt') ? undefined : json['bodyExcerpt'],
    createdAt: new Date(json['createdAt']),
    bcc: !exists(json, 'bcc') ? undefined : json['bcc'],
    cc: !exists(json, 'cc') ? undefined : json['cc'],
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
    id: value.id,
    from: value.from,
    subject: value.subject,
    inboxId: value.inboxId,
    attachments: value.attachments,
    to: value.to,
    teamAccess: value.teamAccess,
    read: value.read,
    bodyMD5Hash: value.bodyMD5Hash,
    bodyExcerpt: value.bodyExcerpt,
    createdAt: value.createdAt.toISOString(),
    bcc: value.bcc,
    cc: value.cc,
  };
}
