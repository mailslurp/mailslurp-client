/* tslint:disable */
/* eslint-disable */
/**
 * MailSlurp API
 * MailSlurp is an API for sending and receiving emails from dynamically allocated email addresses. It\'s designed for developers and QA teams to test applications, process inbound emails, send templated notifications, attachments, and more.  ## Resources  - [Homepage](https://www.mailslurp.com) - Get an [API KEY](https://app.mailslurp.com/sign-up/) - Generated [SDK Clients](https://docs.mailslurp.com/) - [Examples](https://github.com/mailslurp/examples) repository
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
  PageableObject,
  PageableObjectFromJSON,
  PageableObjectFromJSONTyped,
  PageableObjectToJSON,
  Sort,
  SortFromJSON,
  SortFromJSONTyped,
  SortToJSON,
  ThreadProjection,
  ThreadProjectionFromJSON,
  ThreadProjectionFromJSONTyped,
  ThreadProjectionToJSON,
} from './';

/**
 * Paginated email projection results. EmailProjections and EmailPreviews are essentially the same but have legacy naming issues. Page index starts at zero. Projection results may omit larger entity fields. For fetching a full email entity use the projection ID with individual method calls. For emails there are several methods for fetching message bodies and attachments.
 * @export
 * @interface PageThreadProjection
 */
export interface PageThreadProjection {
  /**
   *
   * @type {Array<ThreadProjection>}
   * @memberof PageThreadProjection
   */
  content?: Array<ThreadProjection>;
  /**
   *
   * @type {PageableObject}
   * @memberof PageThreadProjection
   */
  pageable?: PageableObject;
  /**
   *
   * @type {number}
   * @memberof PageThreadProjection
   */
  total?: number;
  /**
   *
   * @type {boolean}
   * @memberof PageThreadProjection
   */
  last?: boolean;
  /**
   *
   * @type {number}
   * @memberof PageThreadProjection
   */
  totalElements?: number;
  /**
   *
   * @type {number}
   * @memberof PageThreadProjection
   */
  totalPages?: number;
  /**
   *
   * @type {number}
   * @memberof PageThreadProjection
   */
  size?: number;
  /**
   *
   * @type {number}
   * @memberof PageThreadProjection
   */
  number?: number;
  /**
   *
   * @type {Sort}
   * @memberof PageThreadProjection
   */
  sort?: Sort;
  /**
   *
   * @type {boolean}
   * @memberof PageThreadProjection
   */
  first?: boolean;
  /**
   *
   * @type {number}
   * @memberof PageThreadProjection
   */
  numberOfElements?: number;
  /**
   *
   * @type {boolean}
   * @memberof PageThreadProjection
   */
  empty?: boolean;
}

export function PageThreadProjectionFromJSON(json: any): PageThreadProjection {
  return PageThreadProjectionFromJSONTyped(json, false);
}

export function PageThreadProjectionFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PageThreadProjection {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    content: !exists(json, 'content')
      ? undefined
      : (json['content'] as Array<any>).map(ThreadProjectionFromJSON),
    pageable: !exists(json, 'pageable')
      ? undefined
      : PageableObjectFromJSON(json['pageable']),
    total: !exists(json, 'total') ? undefined : json['total'],
    last: !exists(json, 'last') ? undefined : json['last'],
    totalElements: !exists(json, 'totalElements')
      ? undefined
      : json['totalElements'],
    totalPages: !exists(json, 'totalPages') ? undefined : json['totalPages'],
    size: !exists(json, 'size') ? undefined : json['size'],
    number: !exists(json, 'number') ? undefined : json['number'],
    sort: !exists(json, 'sort') ? undefined : SortFromJSON(json['sort']),
    first: !exists(json, 'first') ? undefined : json['first'],
    numberOfElements: !exists(json, 'numberOfElements')
      ? undefined
      : json['numberOfElements'],
    empty: !exists(json, 'empty') ? undefined : json['empty'],
  };
}

export function PageThreadProjectionToJSON(
  value?: PageThreadProjection | null
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
        : (value.content as Array<any>).map(ThreadProjectionToJSON),
    pageable: PageableObjectToJSON(value.pageable),
    total: value.total,
    last: value.last,
    totalElements: value.totalElements,
    totalPages: value.totalPages,
    size: value.size,
    number: value.number,
    sort: SortToJSON(value.sort),
    first: value.first,
    numberOfElements: value.numberOfElements,
    empty: value.empty,
  };
}
