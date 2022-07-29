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
  TrackingPixelProjection,
  TrackingPixelProjectionFromJSON,
  TrackingPixelProjectionFromJSONTyped,
  TrackingPixelProjectionToJSON,
} from './';

/**
 * Paginated TrackingPixel results. Page index starts at zero. Projection results may omit larger entity fields. For fetching a full entity use the projection ID with individual method calls.
 * @export
 * @interface PageTrackingPixelProjection
 */
export interface PageTrackingPixelProjection {
  /**
   *
   * @type {Array<TrackingPixelProjection>}
   * @memberof PageTrackingPixelProjection
   */
  content?: Array<TrackingPixelProjection>;
  /**
   *
   * @type {PageableObject}
   * @memberof PageTrackingPixelProjection
   */
  pageable?: PageableObject;
  /**
   *
   * @type {number}
   * @memberof PageTrackingPixelProjection
   */
  total?: number;
  /**
   *
   * @type {boolean}
   * @memberof PageTrackingPixelProjection
   */
  last?: boolean;
  /**
   *
   * @type {number}
   * @memberof PageTrackingPixelProjection
   */
  totalPages?: number;
  /**
   *
   * @type {number}
   * @memberof PageTrackingPixelProjection
   */
  totalElements?: number;
  /**
   *
   * @type {number}
   * @memberof PageTrackingPixelProjection
   */
  size?: number;
  /**
   *
   * @type {number}
   * @memberof PageTrackingPixelProjection
   */
  number?: number;
  /**
   *
   * @type {Sort}
   * @memberof PageTrackingPixelProjection
   */
  sort?: Sort;
  /**
   *
   * @type {boolean}
   * @memberof PageTrackingPixelProjection
   */
  first?: boolean;
  /**
   *
   * @type {number}
   * @memberof PageTrackingPixelProjection
   */
  numberOfElements?: number;
  /**
   *
   * @type {boolean}
   * @memberof PageTrackingPixelProjection
   */
  empty?: boolean;
}

export function PageTrackingPixelProjectionFromJSON(
  json: any
): PageTrackingPixelProjection {
  return PageTrackingPixelProjectionFromJSONTyped(json, false);
}

export function PageTrackingPixelProjectionFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PageTrackingPixelProjection {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    content: !exists(json, 'content')
      ? undefined
      : (json['content'] as Array<any>).map(TrackingPixelProjectionFromJSON),
    pageable: !exists(json, 'pageable')
      ? undefined
      : PageableObjectFromJSON(json['pageable']),
    total: !exists(json, 'total') ? undefined : json['total'],
    last: !exists(json, 'last') ? undefined : json['last'],
    totalPages: !exists(json, 'totalPages') ? undefined : json['totalPages'],
    totalElements: !exists(json, 'totalElements')
      ? undefined
      : json['totalElements'],
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

export function PageTrackingPixelProjectionToJSON(
  value?: PageTrackingPixelProjection | null
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
        : (value.content as Array<any>).map(TrackingPixelProjectionToJSON),
    pageable: PageableObjectToJSON(value.pageable),
    total: value.total,
    last: value.last,
    totalPages: value.totalPages,
    totalElements: value.totalElements,
    size: value.size,
    number: value.number,
    sort: SortToJSON(value.sort),
    first: value.first,
    numberOfElements: value.numberOfElements,
    empty: value.empty,
  };
}
