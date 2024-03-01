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
  InboxRulesetDto,
  InboxRulesetDtoFromJSON,
  InboxRulesetDtoFromJSONTyped,
  InboxRulesetDtoToJSON,
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
 * Paginated inbox ruleset results. Page index starts at zero. Projection results may omit larger entity fields. For fetching a full entity use the projection ID with individual method calls.
 * @export
 * @interface PageInboxRulesetDto
 */
export interface PageInboxRulesetDto {
  /**
   *
   * @type {Array<InboxRulesetDto>}
   * @memberof PageInboxRulesetDto
   */
  content?: Array<InboxRulesetDto>;
  /**
   *
   * @type {PageableObject}
   * @memberof PageInboxRulesetDto
   */
  pageable?: PageableObject;
  /**
   *
   * @type {number}
   * @memberof PageInboxRulesetDto
   */
  totalPages: number;
  /**
   *
   * @type {number}
   * @memberof PageInboxRulesetDto
   */
  totalElements: number;
  /**
   *
   * @type {boolean}
   * @memberof PageInboxRulesetDto
   */
  last?: boolean;
  /**
   *
   * @type {number}
   * @memberof PageInboxRulesetDto
   */
  numberOfElements?: number;
  /**
   *
   * @type {boolean}
   * @memberof PageInboxRulesetDto
   */
  first?: boolean;
  /**
   *
   * @type {number}
   * @memberof PageInboxRulesetDto
   */
  size?: number;
  /**
   *
   * @type {number}
   * @memberof PageInboxRulesetDto
   */
  number?: number;
  /**
   *
   * @type {SortObject}
   * @memberof PageInboxRulesetDto
   */
  sort?: SortObject;
  /**
   *
   * @type {boolean}
   * @memberof PageInboxRulesetDto
   */
  empty?: boolean;
}

export function PageInboxRulesetDtoFromJSON(json: any): PageInboxRulesetDto {
  return PageInboxRulesetDtoFromJSONTyped(json, false);
}

export function PageInboxRulesetDtoFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PageInboxRulesetDto {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    content: !exists(json, 'content')
      ? undefined
      : (json['content'] as Array<any>).map(InboxRulesetDtoFromJSON),
    pageable: !exists(json, 'pageable')
      ? undefined
      : PageableObjectFromJSON(json['pageable']),
    totalPages: json['totalPages'],
    totalElements: json['totalElements'],
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

export function PageInboxRulesetDtoToJSON(
  value?: PageInboxRulesetDto | null
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
        : (value.content as Array<any>).map(InboxRulesetDtoToJSON),
    pageable: PageableObjectToJSON(value.pageable),
    totalPages: value.totalPages,
    totalElements: value.totalElements,
    last: value.last,
    numberOfElements: value.numberOfElements,
    first: value.first,
    size: value.size,
    number: value.number,
    sort: SortObjectToJSON(value.sort),
    empty: value.empty,
  };
}
