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
 * A thread is a message thread created for a message received by an alias
 * @export
 * @interface ThreadProjection
 */
export interface ThreadProjection {
  /**
   * Name of thread
   * @type {string}
   * @memberof ThreadProjection
   */
  name?: string;
  /**
   * ID of email thread
   * @type {string}
   * @memberof ThreadProjection
   */
  id: string;
  /**
   * Thread subject
   * @type {string}
   * @memberof ThreadProjection
   */
  subject?: string;
  /**
   * Inbox ID
   * @type {string}
   * @memberof ThreadProjection
   */
  inboxId: string;
  /**
   * User ID
   * @type {string}
   * @memberof ThreadProjection
   */
  userId: string;
  /**
   * To recipients
   * @type {Array<string>}
   * @memberof ThreadProjection
   */
  to: Array<string>;
  /**
   * Created at DateTime
   * @type {Date}
   * @memberof ThreadProjection
   */
  createdAt: Date;
  /**
   * BCC recipients
   * @type {Array<string>}
   * @memberof ThreadProjection
   */
  bcc?: Array<string>;
  /**
   * CC recipients
   * @type {Array<string>}
   * @memberof ThreadProjection
   */
  cc?: Array<string>;
  /**
   * Updated at DateTime
   * @type {Date}
   * @memberof ThreadProjection
   */
  updatedAt: Date;
  /**
   * Alias ID
   * @type {string}
   * @memberof ThreadProjection
   */
  aliasId: string;
}

export function ThreadProjectionFromJSON(json: any): ThreadProjection {
  return ThreadProjectionFromJSONTyped(json, false);
}

export function ThreadProjectionFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ThreadProjection {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    name: !exists(json, 'name') ? undefined : json['name'],
    id: json['id'],
    subject: !exists(json, 'subject') ? undefined : json['subject'],
    inboxId: json['inboxId'],
    userId: json['userId'],
    to: json['to'],
    createdAt: new Date(json['createdAt']),
    bcc: !exists(json, 'bcc') ? undefined : json['bcc'],
    cc: !exists(json, 'cc') ? undefined : json['cc'],
    updatedAt: new Date(json['updatedAt']),
    aliasId: json['aliasId'],
  };
}

export function ThreadProjectionToJSON(value?: ThreadProjection | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    name: value.name,
    id: value.id,
    subject: value.subject,
    inboxId: value.inboxId,
    userId: value.userId,
    to: value.to,
    createdAt: value.createdAt.toISOString(),
    bcc: value.bcc,
    cc: value.cc,
    updatedAt: value.updatedAt.toISOString(),
    aliasId: value.aliasId,
  };
}
