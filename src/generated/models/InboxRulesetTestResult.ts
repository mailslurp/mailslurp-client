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
 * Result of test of inbox ruleset
 * @export
 * @interface InboxRulesetTestResult
 */
export interface InboxRulesetTestResult {
  /**
   * Map of inbox ruleset ID to boolean of if target matches
   * @type {{ [key: string]: boolean; }}
   * @memberof InboxRulesetTestResult
   */
  rulesetMatches: { [key: string]: boolean };
  /**
   *
   * @type {boolean}
   * @memberof InboxRulesetTestResult
   */
  matches: boolean;
}

export function InboxRulesetTestResultFromJSON(
  json: any
): InboxRulesetTestResult {
  return InboxRulesetTestResultFromJSONTyped(json, false);
}

export function InboxRulesetTestResultFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): InboxRulesetTestResult {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    rulesetMatches: json['rulesetMatches'],
    matches: json['matches'],
  };
}

export function InboxRulesetTestResultToJSON(
  value?: InboxRulesetTestResult | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    rulesetMatches: value.rulesetMatches,
    matches: value.matches,
  };
}
