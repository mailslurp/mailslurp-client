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
  InboxReplierEventProjection,
  InboxReplierEventProjectionFromJSON,
  InboxReplierEventProjectionFromJSONTyped,
  InboxReplierEventProjectionToJSON,
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
 * Paginated inbox replier events. Page index starts at zero. Projection results may omit larger entity fields. For fetching a full entity use the projection ID with individual method calls.
 * @export
 * @interface PageInboxReplierEvents
 */
export interface PageInboxReplierEvents {
  /**
   *
   * @type {Array<InboxReplierEventProjection>}
   * @memberof PageInboxReplierEvents
   */
  content?: Array<InboxReplierEventProjection>;
  /**
   *
   * @type {PageableObject}
   * @memberof PageInboxReplierEvents
   */
  pageable?: PageableObject;
  /**
   *
   * @type {number}
   * @memberof PageInboxReplierEvents
   */
  total?: number;
  /**
   *
   * @type {boolean}
   * @memberof PageInboxReplierEvents
   */
  last?: boolean;
  /**
   *
   * @type {number}
   * @memberof PageInboxReplierEvents
   */
  totalElements?: number;
  /**
   *
   * @type {number}
   * @memberof PageInboxReplierEvents
   */
  totalPages?: number;
  /**
   *
   * @type {number}
   * @memberof PageInboxReplierEvents
   */
  size?: number;
  /**
   *
   * @type {number}
   * @memberof PageInboxReplierEvents
   */
  number?: number;
  /**
   *
   * @type {Sort}
   * @memberof PageInboxReplierEvents
   */
  sort?: Sort;
  /**
   *
   * @type {boolean}
   * @memberof PageInboxReplierEvents
   */
  first?: boolean;
  /**
   *
   * @type {number}
   * @memberof PageInboxReplierEvents
   */
  numberOfElements?: number;
  /**
   *
   * @type {boolean}
   * @memberof PageInboxReplierEvents
   */
  empty?: boolean;
}

export function PageInboxReplierEventsFromJSON(
  json: any
): PageInboxReplierEvents {
  return PageInboxReplierEventsFromJSONTyped(json, false);
}

export function PageInboxReplierEventsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PageInboxReplierEvents {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    content: !exists(json, 'content')
      ? undefined
      : (json['content'] as Array<any>).map(
          InboxReplierEventProjectionFromJSON
        ),
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

export function PageInboxReplierEventsToJSON(
  value?: PageInboxReplierEvents | null
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
        : (value.content as Array<any>).map(InboxReplierEventProjectionToJSON),
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
