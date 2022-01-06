/* tslint:disable */
/* eslint-disable */
/**
 * MailSlurp API
 * MailSlurp is an API for sending and receiving emails from dynamically allocated email addresses. It\'s designed for developers and QA teams to test applications, process inbound emails, send templated notifications, attachments, and more.  ## Resources  - [Homepage](https://www.mailslurp.com) - Get an [API KEY](https://app.mailslurp.com/sign-up/) - Generated [SDK Clients](https://www.mailslurp.com/docs/) - [Examples](https://github.com/mailslurp/examples) repository
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
 * @interface AttachmentEntity
 */
export interface AttachmentEntity {
  /**
   *
   * @type {string}
   * @memberof AttachmentEntity
   */
  id?: string;
  /**
   *
   * @type {string}
   * @memberof AttachmentEntity
   */
  attachmentId: string;
  /**
   *
   * @type {string}
   * @memberof AttachmentEntity
   */
  userId: string;
  /**
   *
   * @type {string}
   * @memberof AttachmentEntity
   */
  contentType?: string;
  /**
   *
   * @type {number}
   * @memberof AttachmentEntity
   */
  contentLength?: number;
  /**
   *
   * @type {string}
   * @memberof AttachmentEntity
   */
  name?: string;
  /**
   *
   * @type {Date}
   * @memberof AttachmentEntity
   */
  createdAt: Date;
  /**
   *
   * @type {Date}
   * @memberof AttachmentEntity
   */
  updatedAt: Date;
}

export function AttachmentEntityFromJSON(json: any): AttachmentEntity {
  return AttachmentEntityFromJSONTyped(json, false);
}

export function AttachmentEntityFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): AttachmentEntity {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    attachmentId: json['attachmentId'],
    userId: json['userId'],
    contentType: !exists(json, 'contentType') ? undefined : json['contentType'],
    contentLength: !exists(json, 'contentLength')
      ? undefined
      : json['contentLength'],
    name: !exists(json, 'name') ? undefined : json['name'],
    createdAt: new Date(json['createdAt']),
    updatedAt: new Date(json['updatedAt']),
  };
}

export function AttachmentEntityToJSON(value?: AttachmentEntity | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    attachmentId: value.attachmentId,
    userId: value.userId,
    contentType: value.contentType,
    contentLength: value.contentLength,
    name: value.name,
    createdAt: value.createdAt.toISOString(),
    updatedAt: value.updatedAt.toISOString(),
  };
}
