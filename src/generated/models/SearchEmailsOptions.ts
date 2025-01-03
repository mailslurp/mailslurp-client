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
 *
 * @export
 * @interface SearchEmailsOptions
 */
export interface SearchEmailsOptions {
  /**
   * Optional inbox ids to filter by. Can be repeated. By default will use all inboxes belonging to your account.
   * @type {Array<string>}
   * @memberof SearchEmailsOptions
   */
  inboxIds?: Array<string>;
  /**
   * Optional page index in email list pagination
   * @type {number}
   * @memberof SearchEmailsOptions
   */
  pageIndex?: number;
  /**
   * Optional page size in email list pagination. Maximum size is 100. Use page index and sort to page through larger results
   * @type {number}
   * @memberof SearchEmailsOptions
   */
  pageSize?: number;
  /**
   * Optional createdAt sort direction ASC or DESC
   * @type {string}
   * @memberof SearchEmailsOptions
   */
  sortDirection?: SearchEmailsOptionsSortDirectionEnum;
  /**
   * Optional filter for unread emails only. All emails are considered unread until they are viewed in the dashboard or requested directly
   * @type {boolean}
   * @memberof SearchEmailsOptions
   */
  unreadOnly?: boolean;
  /**
   * Optional search filter. Searches email recipients, sender, subject, email address and ID. Does not search email body
   * @type {string}
   * @memberof SearchEmailsOptions
   */
  searchFilter?: string;
  /**
   * Optional filter emails received after given date time
   * @type {Date}
   * @memberof SearchEmailsOptions
   */
  since?: Date;
  /**
   * Optional filter emails received before given date time
   * @type {Date}
   * @memberof SearchEmailsOptions
   */
  before?: Date;
}

/**
 * @export
 * @enum {string}
 */
export enum SearchEmailsOptionsSortDirectionEnum {
  ASC = 'ASC',
  DESC = 'DESC',
}

export function SearchEmailsOptionsFromJSON(json: any): SearchEmailsOptions {
  return SearchEmailsOptionsFromJSONTyped(json, false);
}

export function SearchEmailsOptionsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): SearchEmailsOptions {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    inboxIds: !exists(json, 'inboxIds') ? undefined : json['inboxIds'],
    pageIndex: !exists(json, 'pageIndex') ? undefined : json['pageIndex'],
    pageSize: !exists(json, 'pageSize') ? undefined : json['pageSize'],
    sortDirection: !exists(json, 'sortDirection')
      ? undefined
      : json['sortDirection'],
    unreadOnly: !exists(json, 'unreadOnly') ? undefined : json['unreadOnly'],
    searchFilter: !exists(json, 'searchFilter')
      ? undefined
      : json['searchFilter'],
    since: !exists(json, 'since') ? undefined : new Date(json['since']),
    before: !exists(json, 'before') ? undefined : new Date(json['before']),
  };
}

export function SearchEmailsOptionsToJSON(
  value?: SearchEmailsOptions | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    inboxIds: value.inboxIds,
    pageIndex: value.pageIndex,
    pageSize: value.pageSize,
    sortDirection: value.sortDirection,
    unreadOnly: value.unreadOnly,
    searchFilter: value.searchFilter,
    since: value.since === undefined ? undefined : value.since.toISOString(),
    before: value.before === undefined ? undefined : value.before.toISOString(),
  };
}
