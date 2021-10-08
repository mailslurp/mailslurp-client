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
import {
  InboxPreview,
  InboxPreviewFromJSON,
  InboxPreviewFromJSONTyped,
  InboxPreviewToJSON,
  Pageable,
  PageableFromJSON,
  PageableFromJSONTyped,
  PageableToJSON,
  Sort,
  SortFromJSON,
  SortFromJSONTyped,
  SortToJSON,
} from './';

/**
 * Paginated inbox results. Page index starts at zero. Projection results may omit larger entity fields. For fetching a full entity use the projection ID with individual method calls.
 * @export
 * @interface PageInboxProjection
 */
export interface PageInboxProjection {
  /**
   *
   * @type {Array<InboxPreview>}
   * @memberof PageInboxProjection
   */
  content?: Array<InboxPreview>;
  /**
   *
   * @type {boolean}
   * @memberof PageInboxProjection
   */
  empty?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof PageInboxProjection
   */
  first?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof PageInboxProjection
   */
  last?: boolean;
  /**
   *
   * @type {number}
   * @memberof PageInboxProjection
   */
  number?: number;
  /**
   *
   * @type {number}
   * @memberof PageInboxProjection
   */
  numberOfElements?: number;
  /**
   *
   * @type {Pageable}
   * @memberof PageInboxProjection
   */
  pageable?: Pageable;
  /**
   *
   * @type {number}
   * @memberof PageInboxProjection
   */
  size?: number;
  /**
   *
   * @type {Sort}
   * @memberof PageInboxProjection
   */
  sort?: Sort;
  /**
   *
   * @type {number}
   * @memberof PageInboxProjection
   */
  totalElements?: number;
  /**
   *
   * @type {number}
   * @memberof PageInboxProjection
   */
  totalPages?: number;
}

export function PageInboxProjectionFromJSON(json: any): PageInboxProjection {
  return PageInboxProjectionFromJSONTyped(json, false);
}

export function PageInboxProjectionFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PageInboxProjection {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    content: !exists(json, 'content')
      ? undefined
      : (json['content'] as Array<any>).map(InboxPreviewFromJSON),
    empty: !exists(json, 'empty') ? undefined : json['empty'],
    first: !exists(json, 'first') ? undefined : json['first'],
    last: !exists(json, 'last') ? undefined : json['last'],
    number: !exists(json, 'number') ? undefined : json['number'],
    numberOfElements: !exists(json, 'numberOfElements')
      ? undefined
      : json['numberOfElements'],
    pageable: !exists(json, 'pageable')
      ? undefined
      : PageableFromJSON(json['pageable']),
    size: !exists(json, 'size') ? undefined : json['size'],
    sort: !exists(json, 'sort') ? undefined : SortFromJSON(json['sort']),
    totalElements: !exists(json, 'totalElements')
      ? undefined
      : json['totalElements'],
    totalPages: !exists(json, 'totalPages') ? undefined : json['totalPages'],
  };
}

export function PageInboxProjectionToJSON(
  value?: PageInboxProjection | null
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
        : (value.content as Array<any>).map(InboxPreviewToJSON),
    empty: value.empty,
    first: value.first,
    last: value.last,
    number: value.number,
    numberOfElements: value.numberOfElements,
    pageable: PageableToJSON(value.pageable),
    size: value.size,
    sort: SortToJSON(value.sort),
    totalElements: value.totalElements,
    totalPages: value.totalPages,
  };
}
