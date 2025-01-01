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
 * Number of unread entities
 * @export
 * @interface UnreadCount
 */
export interface UnreadCount {
  /**
   *
   * @type {number}
   * @memberof UnreadCount
   */
  count: number;
}

export function UnreadCountFromJSON(json: any): UnreadCount {
  return UnreadCountFromJSONTyped(json, false);
}

export function UnreadCountFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UnreadCount {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    count: json['count'],
  };
}

export function UnreadCountToJSON(value?: UnreadCount | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    count: value.count,
  };
}
