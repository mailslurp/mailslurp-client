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
import { Sort, SortFromJSON, SortFromJSONTyped, SortToJSON } from './';

/**
 *
 * @export
 * @interface Pageable
 */
export interface Pageable {
  /**
   *
   * @type {number}
   * @memberof Pageable
   */
  offset?: number;
  /**
   *
   * @type {number}
   * @memberof Pageable
   */
  pageNumber?: number;
  /**
   *
   * @type {number}
   * @memberof Pageable
   */
  pageSize?: number;
  /**
   *
   * @type {boolean}
   * @memberof Pageable
   */
  paged?: boolean;
  /**
   *
   * @type {Sort}
   * @memberof Pageable
   */
  sort?: Sort;
  /**
   *
   * @type {boolean}
   * @memberof Pageable
   */
  unpaged?: boolean;
}

export function PageableFromJSON(json: any): Pageable {
  return PageableFromJSONTyped(json, false);
}

export function PageableFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): Pageable {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    offset: !exists(json, 'offset') ? undefined : json['offset'],
    pageNumber: !exists(json, 'pageNumber') ? undefined : json['pageNumber'],
    pageSize: !exists(json, 'pageSize') ? undefined : json['pageSize'],
    paged: !exists(json, 'paged') ? undefined : json['paged'],
    sort: !exists(json, 'sort') ? undefined : SortFromJSON(json['sort']),
    unpaged: !exists(json, 'unpaged') ? undefined : json['unpaged'],
  };
}

export function PageableToJSON(value?: Pageable | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    offset: value.offset,
    pageNumber: value.pageNumber,
    pageSize: value.pageSize,
    paged: value.paged,
    sort: SortToJSON(value.sort),
    unpaged: value.unpaged,
  };
}