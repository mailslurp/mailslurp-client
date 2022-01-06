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
  TemplateProjection,
  TemplateProjectionFromJSON,
  TemplateProjectionFromJSONTyped,
  TemplateProjectionToJSON,
} from './';

/**
 * Paginated email template results. Page index starts at zero. Projection results may omit larger entity fields. For fetching a full entity use the projection ID with individual method calls.
 * @export
 * @interface PageTemplateProjection
 */
export interface PageTemplateProjection {
  /**
   *
   * @type {Array<TemplateProjection>}
   * @memberof PageTemplateProjection
   */
  content?: Array<TemplateProjection>;
  /**
   *
   * @type {PageableObject}
   * @memberof PageTemplateProjection
   */
  pageable?: PageableObject;
  /**
   *
   * @type {number}
   * @memberof PageTemplateProjection
   */
  total?: number;
  /**
   *
   * @type {boolean}
   * @memberof PageTemplateProjection
   */
  last?: boolean;
  /**
   *
   * @type {number}
   * @memberof PageTemplateProjection
   */
  totalElements?: number;
  /**
   *
   * @type {number}
   * @memberof PageTemplateProjection
   */
  totalPages?: number;
  /**
   *
   * @type {number}
   * @memberof PageTemplateProjection
   */
  size?: number;
  /**
   *
   * @type {number}
   * @memberof PageTemplateProjection
   */
  number?: number;
  /**
   *
   * @type {Sort}
   * @memberof PageTemplateProjection
   */
  sort?: Sort;
  /**
   *
   * @type {boolean}
   * @memberof PageTemplateProjection
   */
  first?: boolean;
  /**
   *
   * @type {number}
   * @memberof PageTemplateProjection
   */
  numberOfElements?: number;
  /**
   *
   * @type {boolean}
   * @memberof PageTemplateProjection
   */
  empty?: boolean;
}

export function PageTemplateProjectionFromJSON(
  json: any
): PageTemplateProjection {
  return PageTemplateProjectionFromJSONTyped(json, false);
}

export function PageTemplateProjectionFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PageTemplateProjection {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    content: !exists(json, 'content')
      ? undefined
      : (json['content'] as Array<any>).map(TemplateProjectionFromJSON),
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

export function PageTemplateProjectionToJSON(
  value?: PageTemplateProjection | null
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
        : (value.content as Array<any>).map(TemplateProjectionToJSON),
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
