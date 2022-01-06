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
 * @interface InboxRulesetTestOptions
 */
export interface InboxRulesetTestOptions {
  /**
   *
   * @type {string}
   * @memberof InboxRulesetTestOptions
   */
  testTarget: string;
}

export function InboxRulesetTestOptionsFromJSON(
  json: any
): InboxRulesetTestOptions {
  return InboxRulesetTestOptionsFromJSONTyped(json, false);
}

export function InboxRulesetTestOptionsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): InboxRulesetTestOptions {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    testTarget: json['testTarget'],
  };
}

export function InboxRulesetTestOptionsToJSON(
  value?: InboxRulesetTestOptions | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    testTarget: value.testTarget,
  };
}
