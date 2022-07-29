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
 * @interface Complaint
 */
export interface Complaint {
  /**
   *
   * @type {string}
   * @memberof Complaint
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof Complaint
   */
  userId?: string;
  /**
   *
   * @type {string}
   * @memberof Complaint
   */
  eventType?: string;
  /**
   *
   * @type {string}
   * @memberof Complaint
   */
  mailSource?: string;
  /**
   *
   * @type {string}
   * @memberof Complaint
   */
  mailMessageId?: string;
  /**
   *
   * @type {string}
   * @memberof Complaint
   */
  complaintRecipient: string;
  /**
   *
   * @type {Date}
   * @memberof Complaint
   */
  createdAt: Date;
  /**
   *
   * @type {Date}
   * @memberof Complaint
   */
  updatedAt: Date;
}

export function ComplaintFromJSON(json: any): Complaint {
  return ComplaintFromJSONTyped(json, false);
}

export function ComplaintFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): Complaint {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: json['id'],
    userId: !exists(json, 'userId') ? undefined : json['userId'],
    eventType: !exists(json, 'eventType') ? undefined : json['eventType'],
    mailSource: !exists(json, 'mailSource') ? undefined : json['mailSource'],
    mailMessageId: !exists(json, 'mailMessageId')
      ? undefined
      : json['mailMessageId'],
    complaintRecipient: json['complaintRecipient'],
    createdAt: new Date(json['createdAt']),
    updatedAt: new Date(json['updatedAt']),
  };
}

export function ComplaintToJSON(value?: Complaint | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    userId: value.userId,
    eventType: value.eventType,
    mailSource: value.mailSource,
    mailMessageId: value.mailMessageId,
    complaintRecipient: value.complaintRecipient,
    createdAt: value.createdAt.toISOString(),
    updatedAt: value.updatedAt.toISOString(),
  };
}
