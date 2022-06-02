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
 * Bounced email event
 * @export
 * @interface BounceProjection
 */
export interface BounceProjection {
  /**
   *
   * @type {string}
   * @memberof BounceProjection
   */
  id?: string;
  /**
   *
   * @type {string}
   * @memberof BounceProjection
   */
  sender: string;
  /**
   *
   * @type {Date}
   * @memberof BounceProjection
   */
  createdAt: Date;
}

export function BounceProjectionFromJSON(json: any): BounceProjection {
  return BounceProjectionFromJSONTyped(json, false);
}

export function BounceProjectionFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): BounceProjection {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    sender: json['sender'],
    createdAt: new Date(json['createdAt']),
  };
}

export function BounceProjectionToJSON(value?: BounceProjection | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    sender: value.sender,
    createdAt: value.createdAt.toISOString(),
  };
}
