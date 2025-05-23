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
import {
  ImapMailboxStatus,
  ImapMailboxStatusFromJSON,
  ImapMailboxStatusFromJSONTyped,
  ImapMailboxStatusToJSON,
} from './';

/**
 *
 * @export
 * @interface ImapServerStatusResult
 */
export interface ImapServerStatusResult {
  /**
   *
   * @type {ImapMailboxStatus}
   * @memberof ImapServerStatusResult
   */
  result?: ImapMailboxStatus | null;
}

export function ImapServerStatusResultFromJSON(
  json: any
): ImapServerStatusResult {
  return ImapServerStatusResultFromJSONTyped(json, false);
}

export function ImapServerStatusResultFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ImapServerStatusResult {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    result: !exists(json, 'result')
      ? undefined
      : ImapMailboxStatusFromJSON(json['result']),
  };
}

export function ImapServerStatusResultToJSON(
  value?: ImapServerStatusResult | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    result: ImapMailboxStatusToJSON(value.result),
  };
}
