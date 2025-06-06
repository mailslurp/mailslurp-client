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
  PageableObject,
  PageableObjectFromJSON,
  PageableObjectFromJSONTyped,
  PageableObjectToJSON,
  PlusAddressProjection,
  PlusAddressProjectionFromJSON,
  PlusAddressProjectionFromJSONTyped,
  PlusAddressProjectionToJSON,
  SortObject,
  SortObjectFromJSON,
  SortObjectFromJSONTyped,
  SortObjectToJSON,
} from './';

/**
 * Paginated inbox plus addresses. Page index starts at zero. Projection results may omit larger entity fields. For fetching a full entity use the projection ID with individual method calls.
 * @export
 * @interface PagePlusAddressProjection
 */
export interface PagePlusAddressProjection {
  /**
   *
   * @type {Array<PlusAddressProjection>}
   * @memberof PagePlusAddressProjection
   */
  content?: Array<PlusAddressProjection>;
  /**
   *
   * @type {PageableObject}
   * @memberof PagePlusAddressProjection
   */
  pageable?: PageableObject;
  /**
   *
   * @type {number}
   * @memberof PagePlusAddressProjection
   */
  totalElements: number;
  /**
   *
   * @type {number}
   * @memberof PagePlusAddressProjection
   */
  totalPages: number;
  /**
   *
   * @type {boolean}
   * @memberof PagePlusAddressProjection
   */
  last?: boolean;
  /**
   *
   * @type {number}
   * @memberof PagePlusAddressProjection
   */
  numberOfElements?: number;
  /**
   *
   * @type {boolean}
   * @memberof PagePlusAddressProjection
   */
  first?: boolean;
  /**
   *
   * @type {number}
   * @memberof PagePlusAddressProjection
   */
  size?: number;
  /**
   *
   * @type {number}
   * @memberof PagePlusAddressProjection
   */
  number?: number;
  /**
   *
   * @type {SortObject}
   * @memberof PagePlusAddressProjection
   */
  sort?: SortObject;
  /**
   *
   * @type {boolean}
   * @memberof PagePlusAddressProjection
   */
  empty?: boolean;
}

export function PagePlusAddressProjectionFromJSON(
  json: any
): PagePlusAddressProjection {
  return PagePlusAddressProjectionFromJSONTyped(json, false);
}

export function PagePlusAddressProjectionFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PagePlusAddressProjection {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    content: !exists(json, 'content')
      ? undefined
      : (json['content'] as Array<any>).map(PlusAddressProjectionFromJSON),
    pageable: !exists(json, 'pageable')
      ? undefined
      : PageableObjectFromJSON(json['pageable']),
    totalElements: json['totalElements'],
    totalPages: json['totalPages'],
    last: !exists(json, 'last') ? undefined : json['last'],
    numberOfElements: !exists(json, 'numberOfElements')
      ? undefined
      : json['numberOfElements'],
    first: !exists(json, 'first') ? undefined : json['first'],
    size: !exists(json, 'size') ? undefined : json['size'],
    number: !exists(json, 'number') ? undefined : json['number'],
    sort: !exists(json, 'sort') ? undefined : SortObjectFromJSON(json['sort']),
    empty: !exists(json, 'empty') ? undefined : json['empty'],
  };
}

export function PagePlusAddressProjectionToJSON(
  value?: PagePlusAddressProjection | null
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
        : (value.content as Array<any>).map(PlusAddressProjectionToJSON),
    pageable: PageableObjectToJSON(value.pageable),
    totalElements: value.totalElements,
    totalPages: value.totalPages,
    last: value.last,
    numberOfElements: value.numberOfElements,
    first: value.first,
    size: value.size,
    number: value.number,
    sort: SortObjectToJSON(value.sort),
    empty: value.empty,
  };
}
