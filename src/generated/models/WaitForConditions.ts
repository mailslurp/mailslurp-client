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
  MatchOption,
  MatchOptionFromJSON,
  MatchOptionFromJSONTyped,
  MatchOptionToJSON,
} from './';

/**
 * Conditions to apply to emails that you are waiting for
 * @export
 * @interface WaitForConditions
 */
export interface WaitForConditions {
  /**
   * ID of inbox to search within and apply conditions to. Essentially filtering the emails found to give a count.
   * @type {string}
   * @memberof WaitForConditions
   */
  inboxId: string;
  /**
   * Number of results that should match conditions. Either exactly or at least this amount based on the `countType`. If count condition is not met and the timeout has not been reached the `waitFor` method will retry the operation.
   * @type {number}
   * @memberof WaitForConditions
   */
  count?: number | null;
  /**
   * Max time in milliseconds to wait between retries if a `timeout` is specified.
   * @type {number}
   * @memberof WaitForConditions
   */
  delayTimeout?: number | null;
  /**
   * Max time in milliseconds to retry the `waitFor` operation until conditions are met.
   * @type {number}
   * @memberof WaitForConditions
   */
  timeout: number;
  /**
   * Apply conditions only to **unread** emails. All emails begin with `read=false`. An email is marked `read=true` when an `EmailDto` representation of it has been returned to the user at least once. For example you have called `getEmail` or `waitForLatestEmail` etc., or you have viewed the email in the dashboard.
   * @type {boolean}
   * @memberof WaitForConditions
   */
  unreadOnly?: boolean | null;
  /**
   * How result size should be compared with the expected size. Exactly or at-least matching result?
   * @type {string}
   * @memberof WaitForConditions
   */
  countType?: WaitForConditionsCountTypeEnum;
  /**
   * Conditions that should be matched for an email to qualify for results. Each condition will be applied in order to each email within an inbox to filter a result list of matching emails you are waiting for.
   * @type {Array<MatchOption>}
   * @memberof WaitForConditions
   */
  matches?: Array<MatchOption> | null;
  /**
   * Direction to sort matching emails by created time
   * @type {string}
   * @memberof WaitForConditions
   */
  sortDirection?: WaitForConditionsSortDirectionEnum;
  /**
   * ISO Date Time earliest time of email to consider. Filter for matching emails that were received after this date
   * @type {Date}
   * @memberof WaitForConditions
   */
  since?: Date | null;
  /**
   * ISO Date Time latest time of email to consider. Filter for matching emails that were received before this date
   * @type {Date}
   * @memberof WaitForConditions
   */
  before?: Date | null;
}

/**
 * @export
 * @enum {string}
 */
export enum WaitForConditionsCountTypeEnum {
  EXACTLY = 'EXACTLY',
  ATLEAST = 'ATLEAST',
}
/**
 * @export
 * @enum {string}
 */
export enum WaitForConditionsSortDirectionEnum {
  ASC = 'ASC',
  DESC = 'DESC',
}

export function WaitForConditionsFromJSON(json: any): WaitForConditions {
  return WaitForConditionsFromJSONTyped(json, false);
}

export function WaitForConditionsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): WaitForConditions {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    inboxId: json['inboxId'],
    count: !exists(json, 'count') ? undefined : json['count'],
    delayTimeout: !exists(json, 'delayTimeout')
      ? undefined
      : json['delayTimeout'],
    timeout: json['timeout'],
    unreadOnly: !exists(json, 'unreadOnly') ? undefined : json['unreadOnly'],
    countType: !exists(json, 'countType') ? undefined : json['countType'],
    matches: !exists(json, 'matches')
      ? undefined
      : json['matches'] === null
      ? null
      : (json['matches'] as Array<any>).map(MatchOptionFromJSON),
    sortDirection: !exists(json, 'sortDirection')
      ? undefined
      : json['sortDirection'],
    since: !exists(json, 'since')
      ? undefined
      : json['since'] === null
      ? null
      : new Date(json['since']),
    before: !exists(json, 'before')
      ? undefined
      : json['before'] === null
      ? null
      : new Date(json['before']),
  };
}

export function WaitForConditionsToJSON(value?: WaitForConditions | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    inboxId: value.inboxId,
    count: value.count,
    delayTimeout: value.delayTimeout,
    timeout: value.timeout,
    unreadOnly: value.unreadOnly,
    countType: value.countType,
    matches:
      value.matches === undefined
        ? undefined
        : value.matches === null
        ? null
        : (value.matches as Array<any>).map(MatchOptionToJSON),
    sortDirection: value.sortDirection,
    since:
      value.since === undefined
        ? undefined
        : value.since === null
        ? null
        : value.since.toISOString(),
    before:
      value.before === undefined
        ? undefined
        : value.before === null
        ? null
        : value.before.toISOString(),
  };
}
