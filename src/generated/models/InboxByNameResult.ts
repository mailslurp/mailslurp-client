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
 * Result of search for inbox by name
 * @export
 * @interface InboxByNameResult
 */
export interface InboxByNameResult {
  /**
   *
   * @type {string}
   * @memberof InboxByNameResult
   */
  inboxId?: string;
  /**
   *
   * @type {boolean}
   * @memberof InboxByNameResult
   */
  _exists: boolean;
}

export function InboxByNameResultFromJSON(json: any): InboxByNameResult {
  return InboxByNameResultFromJSONTyped(json, false);
}

export function InboxByNameResultFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): InboxByNameResult {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    inboxId: !exists(json, 'inboxId') ? undefined : json['inboxId'],
    _exists: json['exists'],
  };
}

export function InboxByNameResultToJSON(value?: InboxByNameResult | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    inboxId: value.inboxId,
    exists: value._exists,
  };
}