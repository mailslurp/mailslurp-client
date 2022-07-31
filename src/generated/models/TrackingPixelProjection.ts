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
 * Tracking pixel data
 * @export
 * @interface TrackingPixelProjection
 */
export interface TrackingPixelProjection {
  /**
   *
   * @type {string}
   * @memberof TrackingPixelProjection
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof TrackingPixelProjection
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof TrackingPixelProjection
   */
  userId: string;
  /**
   *
   * @type {string}
   * @memberof TrackingPixelProjection
   */
  inboxId?: string;
  /**
   *
   * @type {string}
   * @memberof TrackingPixelProjection
   */
  sentEmailId?: string;
  /**
   *
   * @type {Date}
   * @memberof TrackingPixelProjection
   */
  createdAt: Date;
  /**
   *
   * @type {boolean}
   * @memberof TrackingPixelProjection
   */
  seen: boolean;
  /**
   *
   * @type {string}
   * @memberof TrackingPixelProjection
   */
  recipient?: string;
  /**
   *
   * @type {Date}
   * @memberof TrackingPixelProjection
   */
  seenAt?: Date;
}

export function TrackingPixelProjectionFromJSON(
  json: any
): TrackingPixelProjection {
  return TrackingPixelProjectionFromJSONTyped(json, false);
}

export function TrackingPixelProjectionFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): TrackingPixelProjection {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    name: !exists(json, 'name') ? undefined : json['name'],
    id: json['id'],
    userId: json['userId'],
    inboxId: !exists(json, 'inboxId') ? undefined : json['inboxId'],
    sentEmailId: !exists(json, 'sentEmailId') ? undefined : json['sentEmailId'],
    createdAt: new Date(json['createdAt']),
    seen: json['seen'],
    recipient: !exists(json, 'recipient') ? undefined : json['recipient'],
    seenAt: !exists(json, 'seenAt') ? undefined : new Date(json['seenAt']),
  };
}

export function TrackingPixelProjectionToJSON(
  value?: TrackingPixelProjection | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    name: value.name,
    id: value.id,
    userId: value.userId,
    inboxId: value.inboxId,
    sentEmailId: value.sentEmailId,
    createdAt: value.createdAt.toISOString(),
    seen: value.seen,
    recipient: value.recipient,
    seenAt: value.seenAt === undefined ? undefined : value.seenAt.toISOString(),
  };
}
