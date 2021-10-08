/* tslint:disable */
/* eslint-disable */
/**
 * MailSlurp API
 * MailSlurp is an API for sending and receiving emails from dynamically allocated email addresses. It\'s designed for developers and QA teams to test applications, process inbound emails, send templated notifications, attachments, and more.  ## Resources  - [Homepage](https://www.mailslurp.com) - Get an [API KEY](https://app.mailslurp.com/sign-up/) - Generated [SDK Clients](https://www.mailslurp.com/docs/) - [Examples](https://github.com/mailslurp/examples) repository
 *
 * The version of the OpenAPI document: 6.5.2
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 *
 * @export
 * @interface InboxForwarderTestOptions
 */
export interface InboxForwarderTestOptions {
  /**
   *
   * @type {string}
   * @memberof InboxForwarderTestOptions
   */
  testValue: string;
}

export function InboxForwarderTestOptionsFromJSON(
  json: any
): InboxForwarderTestOptions {
  return InboxForwarderTestOptionsFromJSONTyped(json, false);
}

export function InboxForwarderTestOptionsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): InboxForwarderTestOptions {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    testValue: json['testValue'],
  };
}

export function InboxForwarderTestOptionsToJSON(
  value?: InboxForwarderTestOptions | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    testValue: value.testValue,
  };
}