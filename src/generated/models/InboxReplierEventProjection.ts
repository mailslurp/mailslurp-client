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
 * Inbox replier event
 * @export
 * @interface InboxReplierEventProjection
 */
export interface InboxReplierEventProjection {
  /**
   *
   * @type {string}
   * @memberof InboxReplierEventProjection
   */
  message?: string | null;
  /**
   *
   * @type {string}
   * @memberof InboxReplierEventProjection
   */
  id?: string | null;
  /**
   *
   * @type {string}
   * @memberof InboxReplierEventProjection
   */
  status?: InboxReplierEventProjectionStatusEnum;
  /**
   *
   * @type {string}
   * @memberof InboxReplierEventProjection
   */
  emailId?: string | null;
  /**
   *
   * @type {string}
   * @memberof InboxReplierEventProjection
   */
  inboxId?: string | null;
  /**
   *
   * @type {string}
   * @memberof InboxReplierEventProjection
   */
  userId?: string | null;
  /**
   *
   * @type {Date}
   * @memberof InboxReplierEventProjection
   */
  createdAt: Date;
  /**
   *
   * @type {string}
   * @memberof InboxReplierEventProjection
   */
  replierId?: string | null;
}

/**
 * @export
 * @enum {string}
 */
export enum InboxReplierEventProjectionStatusEnum {
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE',
}

export function InboxReplierEventProjectionFromJSON(
  json: any
): InboxReplierEventProjection {
  return InboxReplierEventProjectionFromJSONTyped(json, false);
}

export function InboxReplierEventProjectionFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): InboxReplierEventProjection {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    message: !exists(json, 'message') ? undefined : json['message'],
    id: !exists(json, 'id') ? undefined : json['id'],
    status: !exists(json, 'status') ? undefined : json['status'],
    emailId: !exists(json, 'emailId') ? undefined : json['emailId'],
    inboxId: !exists(json, 'inboxId') ? undefined : json['inboxId'],
    userId: !exists(json, 'userId') ? undefined : json['userId'],
    createdAt: new Date(json['createdAt']),
    replierId: !exists(json, 'replierId') ? undefined : json['replierId'],
  };
}

export function InboxReplierEventProjectionToJSON(
  value?: InboxReplierEventProjection | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    message: value.message,
    id: value.id,
    status: value.status,
    emailId: value.emailId,
    inboxId: value.inboxId,
    userId: value.userId,
    createdAt: value.createdAt.toISOString(),
    replierId: value.replierId,
  };
}
