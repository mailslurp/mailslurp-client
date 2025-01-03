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
  CreateInboxRulesetOptions,
  CreateInboxRulesetOptionsFromJSON,
  CreateInboxRulesetOptionsFromJSONTyped,
  CreateInboxRulesetOptionsToJSON,
  InboxRulesetTestOptions,
  InboxRulesetTestOptionsFromJSON,
  InboxRulesetTestOptionsFromJSONTyped,
  InboxRulesetTestOptionsToJSON,
} from './';

/**
 * Test inbox ruleset options
 * @export
 * @interface TestNewInboxRulesetOptions
 */
export interface TestNewInboxRulesetOptions {
  /**
   *
   * @type {InboxRulesetTestOptions}
   * @memberof TestNewInboxRulesetOptions
   */
  inboxRulesetTestOptions: InboxRulesetTestOptions;
  /**
   *
   * @type {CreateInboxRulesetOptions}
   * @memberof TestNewInboxRulesetOptions
   */
  createInboxRulesetOptions: CreateInboxRulesetOptions;
}

export function TestNewInboxRulesetOptionsFromJSON(
  json: any
): TestNewInboxRulesetOptions {
  return TestNewInboxRulesetOptionsFromJSONTyped(json, false);
}

export function TestNewInboxRulesetOptionsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): TestNewInboxRulesetOptions {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    inboxRulesetTestOptions: InboxRulesetTestOptionsFromJSON(
      json['inboxRulesetTestOptions']
    ),
    createInboxRulesetOptions: CreateInboxRulesetOptionsFromJSON(
      json['createInboxRulesetOptions']
    ),
  };
}

export function TestNewInboxRulesetOptionsToJSON(
  value?: TestNewInboxRulesetOptions | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    inboxRulesetTestOptions: InboxRulesetTestOptionsToJSON(
      value.inboxRulesetTestOptions
    ),
    createInboxRulesetOptions: CreateInboxRulesetOptionsToJSON(
      value.createInboxRulesetOptions
    ),
  };
}
