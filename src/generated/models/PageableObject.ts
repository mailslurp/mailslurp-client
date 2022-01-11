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
import { Sort, SortFromJSON, SortFromJSONTyped, SortToJSON } from './';

/**
 *
 * @export
 * @interface PageableObject
 */
export interface PageableObject {
  /**
   *
   * @type {number}
   * @memberof PageableObject
   */
  offset?: number;
  /**
   *
   * @type {Sort}
   * @memberof PageableObject
   */
  sort?: Sort;
  /**
   *
   * @type {number}
   * @memberof PageableObject
   */
  pageNumber?: number;
  /**
   *
   * @type {number}
   * @memberof PageableObject
   */
  pageSize?: number;
  /**
   *
   * @type {boolean}
   * @memberof PageableObject
   */
  paged?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof PageableObject
   */
  unpaged?: boolean;
}

export function PageableObjectFromJSON(json: any): PageableObject {
  return PageableObjectFromJSONTyped(json, false);
}

export function PageableObjectFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PageableObject {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    offset: !exists(json, 'offset') ? undefined : json['offset'],
    sort: !exists(json, 'sort') ? undefined : SortFromJSON(json['sort']),
    pageNumber: !exists(json, 'pageNumber') ? undefined : json['pageNumber'],
    pageSize: !exists(json, 'pageSize') ? undefined : json['pageSize'],
    paged: !exists(json, 'paged') ? undefined : json['paged'],
    unpaged: !exists(json, 'unpaged') ? undefined : json['unpaged'],
  };
}

export function PageableObjectToJSON(value?: PageableObject | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    offset: value.offset,
    sort: SortToJSON(value.sort),
    pageNumber: value.pageNumber,
    pageSize: value.pageSize,
    paged: value.paged,
    unpaged: value.unpaged,
  };
}