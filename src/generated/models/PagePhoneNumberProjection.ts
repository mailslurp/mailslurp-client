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
  PhoneNumberProjection,
  PhoneNumberProjectionFromJSON,
  PhoneNumberProjectionFromJSONTyped,
  PhoneNumberProjectionToJSON,
  Sort,
  SortFromJSON,
  SortFromJSONTyped,
  SortToJSON,
} from './';

/**
 * Paginated phone numbers. Page index starts at zero. Projection results may omit larger entity fields. For fetching a full entity use the projection ID with individual method calls.
 * @export
 * @interface PagePhoneNumberProjection
 */
export interface PagePhoneNumberProjection {
  /**
   *
   * @type {Array<PhoneNumberProjection>}
   * @memberof PagePhoneNumberProjection
   */
  content?: Array<PhoneNumberProjection>;
  /**
   *
   * @type {PageableObject}
   * @memberof PagePhoneNumberProjection
   */
  pageable?: PageableObject;
  /**
   *
   * @type {number}
   * @memberof PagePhoneNumberProjection
   */
  total?: number;
  /**
   *
   * @type {number}
   * @memberof PagePhoneNumberProjection
   */
  totalPages?: number;
  /**
   *
   * @type {number}
   * @memberof PagePhoneNumberProjection
   */
  totalElements?: number;
  /**
   *
   * @type {boolean}
   * @memberof PagePhoneNumberProjection
   */
  last?: boolean;
  /**
   *
   * @type {number}
   * @memberof PagePhoneNumberProjection
   */
  size?: number;
  /**
   *
   * @type {number}
   * @memberof PagePhoneNumberProjection
   */
  number?: number;
  /**
   *
   * @type {Sort}
   * @memberof PagePhoneNumberProjection
   */
  sort?: Sort;
  /**
   *
   * @type {number}
   * @memberof PagePhoneNumberProjection
   */
  numberOfElements?: number;
  /**
   *
   * @type {boolean}
   * @memberof PagePhoneNumberProjection
   */
  first?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof PagePhoneNumberProjection
   */
  empty?: boolean;
}

export function PagePhoneNumberProjectionFromJSON(
  json: any
): PagePhoneNumberProjection {
  return PagePhoneNumberProjectionFromJSONTyped(json, false);
}

export function PagePhoneNumberProjectionFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PagePhoneNumberProjection {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    content: !exists(json, 'content')
      ? undefined
      : (json['content'] as Array<any>).map(PhoneNumberProjectionFromJSON),
    pageable: !exists(json, 'pageable')
      ? undefined
      : PageableObjectFromJSON(json['pageable']),
    total: !exists(json, 'total') ? undefined : json['total'],
    totalPages: !exists(json, 'totalPages') ? undefined : json['totalPages'],
    totalElements: !exists(json, 'totalElements')
      ? undefined
      : json['totalElements'],
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

export function PagePhoneNumberProjectionToJSON(
  value?: PagePhoneNumberProjection | null
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
        : (value.content as Array<any>).map(PhoneNumberProjectionToJSON),
    pageable: PageableObjectToJSON(value.pageable),
    total: value.total,
    totalPages: value.totalPages,
    totalElements: value.totalElements,
    last: value.last,
    size: value.size,
    number: value.number,
    sort: SortToJSON(value.sort),
    numberOfElements: value.numberOfElements,
    first: value.first,
    empty: value.empty,
  };
}
