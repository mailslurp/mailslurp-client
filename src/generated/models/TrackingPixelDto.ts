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
 * @interface TrackingPixelDto
 */
export interface TrackingPixelDto {
  /**
   *
   * @type {string}
   * @memberof TrackingPixelDto
   */
  id: string;
  /**
   *
   * @type {boolean}
   * @memberof TrackingPixelDto
   */
  seen: boolean;
  /**
   *
   * @type {string}
   * @memberof TrackingPixelDto
   */
  recipient?: string;
  /**
   *
   * @type {string}
   * @memberof TrackingPixelDto
   */
  html: string;
  /**
   *
   * @type {string}
   * @memberof TrackingPixelDto
   */
  url: string;
  /**
   *
   * @type {string}
   * @memberof TrackingPixelDto
   */
  inboxId?: string;
  /**
   *
   * @type {string}
   * @memberof TrackingPixelDto
   */
  sentEmailId?: string;
  /**
   *
   * @type {Date}
   * @memberof TrackingPixelDto
   */
  seenAt?: Date;
  /**
   *
   * @type {Date}
   * @memberof TrackingPixelDto
   */
  createdAt: Date;
}

export function TrackingPixelDtoFromJSON(json: any): TrackingPixelDto {
  return TrackingPixelDtoFromJSONTyped(json, false);
}

export function TrackingPixelDtoFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): TrackingPixelDto {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: json['id'],
    seen: json['seen'],
    recipient: !exists(json, 'recipient') ? undefined : json['recipient'],
    html: json['html'],
    url: json['url'],
    inboxId: !exists(json, 'inboxId') ? undefined : json['inboxId'],
    sentEmailId: !exists(json, 'sentEmailId') ? undefined : json['sentEmailId'],
    seenAt: !exists(json, 'seenAt') ? undefined : new Date(json['seenAt']),
    createdAt: new Date(json['createdAt']),
  };
}

export function TrackingPixelDtoToJSON(value?: TrackingPixelDto | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    seen: value.seen,
    recipient: value.recipient,
    html: value.html,
    url: value.url,
    inboxId: value.inboxId,
    sentEmailId: value.sentEmailId,
    seenAt: value.seenAt === undefined ? undefined : value.seenAt.toISOString(),
    createdAt: value.createdAt.toISOString(),
  };
}
