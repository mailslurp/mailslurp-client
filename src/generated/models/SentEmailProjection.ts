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
 * @interface SentEmailProjection
 */
export interface SentEmailProjection {
  /**
   *
   * @type {Date}
   * @memberof SentEmailProjection
   */
  createdAt: Date;
  /**
   *
   * @type {string}
   * @memberof SentEmailProjection
   */
  id: string;
  /**
   *
   * @type {Array<string>}
   * @memberof SentEmailProjection
   */
  bcc: Array<string>;
  /**
   *
   * @type {Array<string>}
   * @memberof SentEmailProjection
   */
  cc: Array<string>;
  /**
   *
   * @type {boolean}
   * @memberof SentEmailProjection
   */
  virtualSend: boolean;
  /**
   *
   * @type {string}
   * @memberof SentEmailProjection
   */
  from?: string;
  /**
   *
   * @type {string}
   * @memberof SentEmailProjection
   */
  subject?: string;
  /**
   *
   * @type {string}
   * @memberof SentEmailProjection
   */
  inboxId: string;
  /**
   *
   * @type {string}
   * @memberof SentEmailProjection
   */
  userId: string;
  /**
   *
   * @type {Array<string>}
   * @memberof SentEmailProjection
   */
  attachments: Array<string>;
  /**
   *
   * @type {Array<string>}
   * @memberof SentEmailProjection
   */
  to: Array<string>;
  /**
   *
   * @type {string}
   * @memberof SentEmailProjection
   */
  bodyMD5Hash?: string;
}

export function SentEmailProjectionFromJSON(json: any): SentEmailProjection {
  return SentEmailProjectionFromJSONTyped(json, false);
}

export function SentEmailProjectionFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): SentEmailProjection {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    createdAt: new Date(json['createdAt']),
    id: json['id'],
    bcc: json['bcc'],
    cc: json['cc'],
    virtualSend: json['virtualSend'],
    from: !exists(json, 'from') ? undefined : json['from'],
    subject: !exists(json, 'subject') ? undefined : json['subject'],
    inboxId: json['inboxId'],
    userId: json['userId'],
    attachments: json['attachments'],
    to: json['to'],
    bodyMD5Hash: !exists(json, 'bodyMD5Hash') ? undefined : json['bodyMD5Hash'],
  };
}

export function SentEmailProjectionToJSON(
  value?: SentEmailProjection | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    createdAt: value.createdAt.toISOString(),
    id: value.id,
    bcc: value.bcc,
    cc: value.cc,
    virtualSend: value.virtualSend,
    from: value.from,
    subject: value.subject,
    inboxId: value.inboxId,
    userId: value.userId,
    attachments: value.attachments,
    to: value.to,
    bodyMD5Hash: value.bodyMD5Hash,
  };
}
