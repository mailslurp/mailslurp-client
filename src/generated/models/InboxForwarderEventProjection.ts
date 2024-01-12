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
 * Inbox forwarder event
 * @export
 * @interface InboxForwarderEventProjection
 */
export interface InboxForwarderEventProjection {
  /**
   *
   * @type {string}
   * @memberof InboxForwarderEventProjection
   */
  emailId?: string | null;
  /**
   *
   * @type {string}
   * @memberof InboxForwarderEventProjection
   */
  inboxId?: string | null;
  /**
   *
   * @type {string}
   * @memberof InboxForwarderEventProjection
   */
  userId?: string | null;
  /**
   *
   * @type {Date}
   * @memberof InboxForwarderEventProjection
   */
  createdAt: Date;
  /**
   *
   * @type {string}
   * @memberof InboxForwarderEventProjection
   */
  forwarderId?: string | null;
  /**
   *
   * @type {string}
   * @memberof InboxForwarderEventProjection
   */
  message?: string | null;
  /**
   *
   * @type {string}
   * @memberof InboxForwarderEventProjection
   */
  id?: string | null;
  /**
   *
   * @type {string}
   * @memberof InboxForwarderEventProjection
   */
  status?: InboxForwarderEventProjectionStatusEnum;
}

/**
 * @export
 * @enum {string}
 */
export enum InboxForwarderEventProjectionStatusEnum {
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE',
}

export function InboxForwarderEventProjectionFromJSON(
  json: any
): InboxForwarderEventProjection {
  return InboxForwarderEventProjectionFromJSONTyped(json, false);
}

export function InboxForwarderEventProjectionFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): InboxForwarderEventProjection {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    emailId: !exists(json, 'emailId') ? undefined : json['emailId'],
    inboxId: !exists(json, 'inboxId') ? undefined : json['inboxId'],
    userId: !exists(json, 'userId') ? undefined : json['userId'],
    createdAt: new Date(json['createdAt']),
    forwarderId: !exists(json, 'forwarderId') ? undefined : json['forwarderId'],
    message: !exists(json, 'message') ? undefined : json['message'],
    id: !exists(json, 'id') ? undefined : json['id'],
    status: !exists(json, 'status') ? undefined : json['status'],
  };
}

export function InboxForwarderEventProjectionToJSON(
  value?: InboxForwarderEventProjection | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    emailId: value.emailId,
    inboxId: value.inboxId,
    userId: value.userId,
    createdAt: value.createdAt.toISOString(),
    forwarderId: value.forwarderId,
    message: value.message,
    id: value.id,
    status: value.status,
  };
}
