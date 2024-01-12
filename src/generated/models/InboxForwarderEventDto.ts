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
 * Inbox forwarder event. Describes how an email was handled by an inbox forwarder.
 * @export
 * @interface InboxForwarderEventDto
 */
export interface InboxForwarderEventDto {
  /**
   *
   * @type {string}
   * @memberof InboxForwarderEventDto
   */
  id?: string | null;
  /**
   *
   * @type {string}
   * @memberof InboxForwarderEventDto
   */
  inboxId?: string | null;
  /**
   *
   * @type {string}
   * @memberof InboxForwarderEventDto
   */
  emailId?: string | null;
  /**
   *
   * @type {string}
   * @memberof InboxForwarderEventDto
   */
  userId?: string | null;
  /**
   *
   * @type {string}
   * @memberof InboxForwarderEventDto
   */
  forwarderId?: string | null;
  /**
   *
   * @type {string}
   * @memberof InboxForwarderEventDto
   */
  message?: string | null;
  /**
   *
   * @type {string}
   * @memberof InboxForwarderEventDto
   */
  status?: InboxForwarderEventDtoStatusEnum;
  /**
   *
   * @type {Date}
   * @memberof InboxForwarderEventDto
   */
  createdAt: Date;
}

/**
 * @export
 * @enum {string}
 */
export enum InboxForwarderEventDtoStatusEnum {
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE',
}

export function InboxForwarderEventDtoFromJSON(
  json: any
): InboxForwarderEventDto {
  return InboxForwarderEventDtoFromJSONTyped(json, false);
}

export function InboxForwarderEventDtoFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): InboxForwarderEventDto {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    inboxId: !exists(json, 'inboxId') ? undefined : json['inboxId'],
    emailId: !exists(json, 'emailId') ? undefined : json['emailId'],
    userId: !exists(json, 'userId') ? undefined : json['userId'],
    forwarderId: !exists(json, 'forwarderId') ? undefined : json['forwarderId'],
    message: !exists(json, 'message') ? undefined : json['message'],
    status: !exists(json, 'status') ? undefined : json['status'],
    createdAt: new Date(json['createdAt']),
  };
}

export function InboxForwarderEventDtoToJSON(
  value?: InboxForwarderEventDto | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    inboxId: value.inboxId,
    emailId: value.emailId,
    userId: value.userId,
    forwarderId: value.forwarderId,
    message: value.message,
    status: value.status,
    createdAt: value.createdAt.toISOString(),
  };
}
