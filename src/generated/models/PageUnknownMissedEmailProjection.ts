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
  PageableObject,
  PageableObjectFromJSON,
  PageableObjectFromJSONTyped,
  PageableObjectToJSON,
  Sort,
  SortFromJSON,
  SortFromJSONTyped,
  SortToJSON,
  UnknownMissedEmailProjection,
  UnknownMissedEmailProjectionFromJSON,
  UnknownMissedEmailProjectionFromJSONTyped,
  UnknownMissedEmailProjectionToJSON,
} from './';

/**
 * Paginated unknown MissedEmail results. Unknown missed emails are emails that were sent to MailSlurp /Page index starts at zero. Projection results may omit larger entity fields. For fetching a full entity use the projection ID with individual method calls.
 * @export
 * @interface PageUnknownMissedEmailProjection
 */
export interface PageUnknownMissedEmailProjection {
  /**
   *
   * @type {Array<UnknownMissedEmailProjection>}
   * @memberof PageUnknownMissedEmailProjection
   */
  content?: Array<UnknownMissedEmailProjection>;
  /**
   *
   * @type {PageableObject}
   * @memberof PageUnknownMissedEmailProjection
   */
  pageable?: PageableObject;
  /**
   *
   * @type {number}
   * @memberof PageUnknownMissedEmailProjection
   */
  total?: number;
  /**
   *
   * @type {number}
   * @memberof PageUnknownMissedEmailProjection
   */
  totalElements?: number;
  /**
   *
   * @type {number}
   * @memberof PageUnknownMissedEmailProjection
   */
  totalPages?: number;
  /**
   *
   * @type {boolean}
   * @memberof PageUnknownMissedEmailProjection
   */
  last?: boolean;
  /**
   *
   * @type {number}
   * @memberof PageUnknownMissedEmailProjection
   */
  size?: number;
  /**
   *
   * @type {number}
   * @memberof PageUnknownMissedEmailProjection
   */
  number?: number;
  /**
   *
   * @type {Sort}
   * @memberof PageUnknownMissedEmailProjection
   */
  sort?: Sort;
  /**
   *
   * @type {number}
   * @memberof PageUnknownMissedEmailProjection
   */
  numberOfElements?: number;
  /**
   *
   * @type {boolean}
   * @memberof PageUnknownMissedEmailProjection
   */
  first?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof PageUnknownMissedEmailProjection
   */
  empty?: boolean;
}

export function PageUnknownMissedEmailProjectionFromJSON(
  json: any
): PageUnknownMissedEmailProjection {
  return PageUnknownMissedEmailProjectionFromJSONTyped(json, false);
}

export function PageUnknownMissedEmailProjectionFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PageUnknownMissedEmailProjection {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    content: !exists(json, 'content')
      ? undefined
      : (json['content'] as Array<any>).map(
          UnknownMissedEmailProjectionFromJSON
        ),
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

export function PageUnknownMissedEmailProjectionToJSON(
  value?: PageUnknownMissedEmailProjection | null
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
        : (value.content as Array<any>).map(UnknownMissedEmailProjectionToJSON),
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
