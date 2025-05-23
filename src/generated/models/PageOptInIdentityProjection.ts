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
  OptInIdentityProjection,
  OptInIdentityProjectionFromJSON,
  OptInIdentityProjectionFromJSONTyped,
  OptInIdentityProjectionToJSON,
  PageableObject,
  PageableObjectFromJSON,
  PageableObjectFromJSONTyped,
  PageableObjectToJSON,
  SortObject,
  SortObjectFromJSON,
  SortObjectFromJSONTyped,
  SortObjectToJSON,
} from './';

/**
 * Paginated opt in identity projections reflecting users who have verified double-opt in consent to receive emails from your account.
 * @export
 * @interface PageOptInIdentityProjection
 */
export interface PageOptInIdentityProjection {
  /**
   *
   * @type {Array<OptInIdentityProjection>}
   * @memberof PageOptInIdentityProjection
   */
  content?: Array<OptInIdentityProjection>;
  /**
   *
   * @type {PageableObject}
   * @memberof PageOptInIdentityProjection
   */
  pageable?: PageableObject;
  /**
   *
   * @type {number}
   * @memberof PageOptInIdentityProjection
   */
  totalElements: number;
  /**
   *
   * @type {number}
   * @memberof PageOptInIdentityProjection
   */
  totalPages: number;
  /**
   *
   * @type {boolean}
   * @memberof PageOptInIdentityProjection
   */
  last?: boolean;
  /**
   *
   * @type {number}
   * @memberof PageOptInIdentityProjection
   */
  numberOfElements?: number;
  /**
   *
   * @type {boolean}
   * @memberof PageOptInIdentityProjection
   */
  first?: boolean;
  /**
   *
   * @type {number}
   * @memberof PageOptInIdentityProjection
   */
  size?: number;
  /**
   *
   * @type {number}
   * @memberof PageOptInIdentityProjection
   */
  number?: number;
  /**
   *
   * @type {SortObject}
   * @memberof PageOptInIdentityProjection
   */
  sort?: SortObject;
  /**
   *
   * @type {boolean}
   * @memberof PageOptInIdentityProjection
   */
  empty?: boolean;
}

export function PageOptInIdentityProjectionFromJSON(
  json: any
): PageOptInIdentityProjection {
  return PageOptInIdentityProjectionFromJSONTyped(json, false);
}

export function PageOptInIdentityProjectionFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PageOptInIdentityProjection {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    content: !exists(json, 'content')
      ? undefined
      : (json['content'] as Array<any>).map(OptInIdentityProjectionFromJSON),
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

export function PageOptInIdentityProjectionToJSON(
  value?: PageOptInIdentityProjection | null
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
        : (value.content as Array<any>).map(OptInIdentityProjectionToJSON),
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
