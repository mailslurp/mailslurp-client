/* tslint:disable */
/* eslint-disable */
/**
 * MailSlurp API
 * MailSlurp is an API for sending and receiving emails and SMS from dynamically allocated email addresses and phone numbers. It\'s designed for developers and QA teams to test applications, process inbound emails, send templated notifications, attachments, and more.  ## Resources  - [Homepage](https://www.mailslurp.com) - Get an [API KEY](https://app.mailslurp.com/sign-up/) - Generated [SDK Clients](https://docs.mailslurp.com/) - [Examples](https://github.com/mailslurp/examples) repository
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
 * Bounced recipient
 * @export
 * @interface BounceRecipientProjection
 */
export interface BounceRecipientProjection {
  /**
   *
   * @type {Date}
   * @memberof BounceRecipientProjection
   */
  createdAt: Date;
  /**
   *
   * @type {string}
   * @memberof BounceRecipientProjection
   */
  sentEmailId?: string | null;
  /**
   *
   * @type {string}
   * @memberof BounceRecipientProjection
   */
  recipient: string;
  /**
   *
   * @type {string}
   * @memberof BounceRecipientProjection
   */
  action?: string | null;
  /**
   *
   * @type {string}
   * @memberof BounceRecipientProjection
   */
  bounceType?: string | null;
  /**
   *
   * @type {string}
   * @memberof BounceRecipientProjection
   */
  id?: string;
  /**
   *
   * @type {string}
   * @memberof BounceRecipientProjection
   */
  status?: string | null;
}

export function BounceRecipientProjectionFromJSON(
  json: any
): BounceRecipientProjection {
  return BounceRecipientProjectionFromJSONTyped(json, false);
}

export function BounceRecipientProjectionFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): BounceRecipientProjection {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    createdAt: new Date(json['createdAt']),
    sentEmailId: !exists(json, 'sentEmailId') ? undefined : json['sentEmailId'],
    recipient: json['recipient'],
    action: !exists(json, 'action') ? undefined : json['action'],
    bounceType: !exists(json, 'bounceType') ? undefined : json['bounceType'],
    id: !exists(json, 'id') ? undefined : json['id'],
    status: !exists(json, 'status') ? undefined : json['status'],
  };
}

export function BounceRecipientProjectionToJSON(
  value?: BounceRecipientProjection | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    createdAt: value.createdAt.toISOString(),
    sentEmailId: value.sentEmailId,
    recipient: value.recipient,
    action: value.action,
    bounceType: value.bounceType,
    id: value.id,
    status: value.status,
  };
}
