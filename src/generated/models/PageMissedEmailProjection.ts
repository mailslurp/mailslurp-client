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
import {
  MissedEmailProjection,
  MissedEmailProjectionFromJSON,
  MissedEmailProjectionFromJSONTyped,
  MissedEmailProjectionToJSON,
  PageableObject,
  PageableObjectFromJSON,
  PageableObjectFromJSONTyped,
  PageableObjectToJSON,
  Sort,
  SortFromJSON,
  SortFromJSONTyped,
  SortToJSON,
} from './';

/**
 * Paginated MissedEmail results. Page index starts at zero. Projection results may omit larger entity fields. For fetching a full entity use the projection ID with individual method calls.
 * @export
 * @interface PageMissedEmailProjection
 */
export interface PageMissedEmailProjection {
  /**
   *
   * @type {Array<MissedEmailProjection>}
   * @memberof PageMissedEmailProjection
   */
  content?: Array<MissedEmailProjection>;
  /**
   *
   * @type {PageableObject}
   * @memberof PageMissedEmailProjection
   */
  pageable?: PageableObject;
  /**
   *
   * @type {number}
   * @memberof PageMissedEmailProjection
   */
  total?: number;
  /**
   *
   * @type {number}
   * @memberof PageMissedEmailProjection
   */
  totalElements?: number;
  /**
   *
   * @type {number}
   * @memberof PageMissedEmailProjection
   */
  totalPages?: number;
  /**
   *
   * @type {boolean}
   * @memberof PageMissedEmailProjection
   */
  last?: boolean;
  /**
   *
   * @type {number}
   * @memberof PageMissedEmailProjection
   */
  size?: number;
  /**
   *
   * @type {number}
   * @memberof PageMissedEmailProjection
   */
  number?: number;
  /**
   *
   * @type {Sort}
   * @memberof PageMissedEmailProjection
   */
  sort?: Sort;
  /**
   *
   * @type {number}
   * @memberof PageMissedEmailProjection
   */
  numberOfElements?: number;
  /**
   *
   * @type {boolean}
   * @memberof PageMissedEmailProjection
   */
  first?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof PageMissedEmailProjection
   */
  empty?: boolean;
}

export function PageMissedEmailProjectionFromJSON(
  json: any
): PageMissedEmailProjection {
  return PageMissedEmailProjectionFromJSONTyped(json, false);
}

export function PageMissedEmailProjectionFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PageMissedEmailProjection {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    content: !exists(json, 'content')
      ? undefined
      : (json['content'] as Array<any>).map(MissedEmailProjectionFromJSON),
    pageable: !exists(json, 'pageable')
      ? undefined
      : PageableObjectFromJSON(json['pageable']),
    total: !exists(json, 'total') ? undefined : json['total'],
    totalElements: !exists(json, 'totalElements')
      ? undefined
      : json['totalElements'],
    totalPages: !exists(json, 'totalPages') ? undefined : json['totalPages'],
    last: !exists(json, 'last') ? undefined : json['last'],
    size: !exists(json, 'size') ? undefined : json['size'],
    number: !exists(json, 'number') ? undefined : json['number'],
    sort: !exists(json, 'sort') ? undefined : SortFromJSON(json['sort']),
    numberOfElements: !exists(json, 'numberOfElements')
      ? undefined
      : json['numberOfElements'],
    first: !exists(json, 'first') ? undefined : json['first'],
    empty: !exists(json, 'empty') ? undefined : json['empty'],
  };
}

export function PageMissedEmailProjectionToJSON(
  value?: PageMissedEmailProjection | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    content:
      value.content === undefined
        ? undefined
        : (value.content as Array<any>).map(MissedEmailProjectionToJSON),
    pageable: PageableObjectToJSON(value.pageable),
    total: value.total,
    totalElements: value.totalElements,
    totalPages: value.totalPages,
    last: value.last,
    size: value.size,
    number: value.number,
    sort: SortToJSON(value.sort),
    numberOfElements: value.numberOfElements,
    first: value.first,
    empty: value.empty,
  };
}
