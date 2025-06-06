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
  SmsProjection,
  SmsProjectionFromJSON,
  SmsProjectionFromJSONTyped,
  SmsProjectionToJSON,
  SortObject,
  SortObjectFromJSON,
  SortObjectFromJSONTyped,
  SortObjectToJSON,
} from './';

/**
 * Paginated SMS messages. Page index starts at zero. Projection results may omit larger entity fields. For fetching a full entity use the projection ID with individual method calls.
 * @export
 * @interface PageSmsProjection
 */
export interface PageSmsProjection {
  /**
   *
   * @type {Array<SmsProjection>}
   * @memberof PageSmsProjection
   */
  content?: Array<SmsProjection>;
  /**
   *
   * @type {PageableObject}
   * @memberof PageSmsProjection
   */
  pageable?: PageableObject;
  /**
   *
   * @type {number}
   * @memberof PageSmsProjection
   */
  totalElements: number;
  /**
   *
   * @type {number}
   * @memberof PageSmsProjection
   */
  totalPages: number;
  /**
   *
   * @type {boolean}
   * @memberof PageSmsProjection
   */
  last?: boolean;
  /**
   *
   * @type {number}
   * @memberof PageSmsProjection
   */
  numberOfElements?: number;
  /**
   *
   * @type {boolean}
   * @memberof PageSmsProjection
   */
  first?: boolean;
  /**
   *
   * @type {number}
   * @memberof PageSmsProjection
   */
  size?: number;
  /**
   *
   * @type {number}
   * @memberof PageSmsProjection
   */
  number?: number;
  /**
   *
   * @type {SortObject}
   * @memberof PageSmsProjection
   */
  sort?: SortObject;
  /**
   *
   * @type {boolean}
   * @memberof PageSmsProjection
   */
  empty?: boolean;
}

export function PageSmsProjectionFromJSON(json: any): PageSmsProjection {
  return PageSmsProjectionFromJSONTyped(json, false);
}

export function PageSmsProjectionFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PageSmsProjection {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    content: !exists(json, 'content')
      ? undefined
      : (json['content'] as Array<any>).map(SmsProjectionFromJSON),
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

export function PageSmsProjectionToJSON(value?: PageSmsProjection | null): any {
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
        : (value.content as Array<any>).map(SmsProjectionToJSON),
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
