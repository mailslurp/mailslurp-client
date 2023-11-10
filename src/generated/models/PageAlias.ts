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
  AliasProjection,
  AliasProjectionFromJSON,
  AliasProjectionFromJSONTyped,
  AliasProjectionToJSON,
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
 * Paginated email alias results. Page index starts at zero. Projection results may omit larger entity fields. For fetching a full entity use the projection ID with individual method calls.
 * @export
 * @interface PageAlias
 */
export interface PageAlias {
  /**
   *
   * @type {Array<AliasProjection>}
   * @memberof PageAlias
   */
  content?: Array<AliasProjection>;
  /**
   *
   * @type {PageableObject}
   * @memberof PageAlias
   */
  pageable?: PageableObject;
  /**
   *
   * @type {number}
   * @memberof PageAlias
   */
  total?: number;
  /**
   *
   * @type {number}
   * @memberof PageAlias
   */
  totalElements?: number;
  /**
   *
   * @type {number}
   * @memberof PageAlias
   */
  totalPages?: number;
  /**
   *
   * @type {boolean}
   * @memberof PageAlias
   */
  last?: boolean;
  /**
   *
   * @type {number}
   * @memberof PageAlias
   */
  size?: number;
  /**
   *
   * @type {number}
   * @memberof PageAlias
   */
  number?: number;
  /**
   *
   * @type {SortObject}
   * @memberof PageAlias
   */
  sort?: SortObject;
  /**
   *
   * @type {number}
   * @memberof PageAlias
   */
  numberOfElements?: number;
  /**
   *
   * @type {boolean}
   * @memberof PageAlias
   */
  first?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof PageAlias
   */
  empty?: boolean;
}

export function PageAliasFromJSON(json: any): PageAlias {
  return PageAliasFromJSONTyped(json, false);
}

export function PageAliasFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PageAlias {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    content: !exists(json, 'content')
      ? undefined
      : (json['content'] as Array<any>).map(AliasProjectionFromJSON),
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
    sort: !exists(json, 'sort') ? undefined : SortObjectFromJSON(json['sort']),
    numberOfElements: !exists(json, 'numberOfElements')
      ? undefined
      : json['numberOfElements'],
    first: !exists(json, 'first') ? undefined : json['first'],
    empty: !exists(json, 'empty') ? undefined : json['empty'],
  };
}

export function PageAliasToJSON(value?: PageAlias | null): any {
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
        : (value.content as Array<any>).map(AliasProjectionToJSON),
    pageable: PageableObjectToJSON(value.pageable),
    total: value.total,
    totalElements: value.totalElements,
    totalPages: value.totalPages,
    last: value.last,
    size: value.size,
    number: value.number,
    sort: SortObjectToJSON(value.sort),
    numberOfElements: value.numberOfElements,
    first: value.first,
    empty: value.empty,
  };
}
