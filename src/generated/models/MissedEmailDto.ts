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
 * Missed email
 * @export
 * @interface MissedEmailDto
 */
export interface MissedEmailDto {
  /**
   *
   * @type {string}
   * @memberof MissedEmailDto
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof MissedEmailDto
   */
  userId?: string | null;
  /**
   *
   * @type {string}
   * @memberof MissedEmailDto
   */
  subject?: string | null;
  /**
   *
   * @type {string}
   * @memberof MissedEmailDto
   */
  bodyExcerpt?: string | null;
  /**
   *
   * @type {number}
   * @memberof MissedEmailDto
   */
  attachmentCount: number;
  /**
   *
   * @type {string}
   * @memberof MissedEmailDto
   */
  from?: string | null;
  /**
   *
   * @type {string}
   * @memberof MissedEmailDto
   */
  rawUrl?: string | null;
  /**
   *
   * @type {string}
   * @memberof MissedEmailDto
   */
  rawKey?: string | null;
  /**
   *
   * @type {string}
   * @memberof MissedEmailDto
   */
  rawBucket?: string | null;
  /**
   *
   * @type {boolean}
   * @memberof MissedEmailDto
   */
  canRestore?: boolean | null;
  /**
   *
   * @type {Array<string>}
   * @memberof MissedEmailDto
   */
  to: Array<string>;
  /**
   *
   * @type {Array<string>}
   * @memberof MissedEmailDto
   */
  cc: Array<string>;
  /**
   *
   * @type {Array<string>}
   * @memberof MissedEmailDto
   */
  bcc: Array<string>;
  /**
   *
   * @type {Array<string>}
   * @memberof MissedEmailDto
   */
  inboxIds: Array<string>;
  /**
   *
   * @type {Date}
   * @memberof MissedEmailDto
   */
  createdAt: Date;
  /**
   *
   * @type {Date}
   * @memberof MissedEmailDto
   */
  updatedAt: Date;
}

export function MissedEmailDtoFromJSON(json: any): MissedEmailDto {
  return MissedEmailDtoFromJSONTyped(json, false);
}

export function MissedEmailDtoFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): MissedEmailDto {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: json['id'],
    userId: !exists(json, 'userId') ? undefined : json['userId'],
    subject: !exists(json, 'subject') ? undefined : json['subject'],
    bodyExcerpt: !exists(json, 'bodyExcerpt') ? undefined : json['bodyExcerpt'],
    attachmentCount: json['attachmentCount'],
    from: !exists(json, 'from') ? undefined : json['from'],
    rawUrl: !exists(json, 'rawUrl') ? undefined : json['rawUrl'],
    rawKey: !exists(json, 'rawKey') ? undefined : json['rawKey'],
    rawBucket: !exists(json, 'rawBucket') ? undefined : json['rawBucket'],
    canRestore: !exists(json, 'canRestore') ? undefined : json['canRestore'],
    to: json['to'],
    cc: json['cc'],
    bcc: json['bcc'],
    inboxIds: json['inboxIds'],
    createdAt: new Date(json['createdAt']),
    updatedAt: new Date(json['updatedAt']),
  };
}

export function MissedEmailDtoToJSON(value?: MissedEmailDto | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    userId: value.userId,
    subject: value.subject,
    bodyExcerpt: value.bodyExcerpt,
    attachmentCount: value.attachmentCount,
    from: value.from,
    rawUrl: value.rawUrl,
    rawKey: value.rawKey,
    rawBucket: value.rawBucket,
    canRestore: value.canRestore,
    to: value.to,
    cc: value.cc,
    bcc: value.bcc,
    inboxIds: value.inboxIds,
    createdAt: value.createdAt.toISOString(),
    updatedAt: value.updatedAt.toISOString(),
  };
}