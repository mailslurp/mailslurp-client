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
import {
  InboxIdItem,
  InboxIdItemFromJSON,
  InboxIdItemFromJSONTyped,
  InboxIdItemToJSON,
} from './';

/**
 * List of inbox IDs and email addresses
 * @export
 * @interface InboxIdsResult
 */
export interface InboxIdsResult {
  /**
   *
   * @type {Array<InboxIdItem>}
   * @memberof InboxIdsResult
   */
  inboxIds: Array<InboxIdItem>;
}

export function InboxIdsResultFromJSON(json: any): InboxIdsResult {
  return InboxIdsResultFromJSONTyped(json, false);
}

export function InboxIdsResultFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): InboxIdsResult {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    inboxIds: (json['inboxIds'] as Array<any>).map(InboxIdItemFromJSON),
  };
}

export function InboxIdsResultToJSON(value?: InboxIdsResult | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    inboxIds: (value.inboxIds as Array<any>).map(InboxIdItemToJSON),
  };
}
