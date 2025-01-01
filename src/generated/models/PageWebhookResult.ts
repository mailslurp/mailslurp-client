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
  SortObject,
  SortObjectFromJSON,
  SortObjectFromJSONTyped,
  SortObjectToJSON,
  WebhookResultDto,
  WebhookResultDtoFromJSON,
  WebhookResultDtoFromJSONTyped,
  WebhookResultDtoToJSON,
} from './';

/**
 * Paginated webhook results. Page index starts at zero. Projection results may omit larger entity fields. For fetching a full entity use the projection ID with individual method calls.
 * @export
 * @interface PageWebhookResult
 */
export interface PageWebhookResult {
  /**
   *
   * @type {Array<WebhookResultDto>}
   * @memberof PageWebhookResult
   */
  content?: Array<WebhookResultDto>;
  /**
   *
   * @type {PageableObject}
   * @memberof PageWebhookResult
   */
  pageable?: PageableObject;
  /**
   *
   * @type {number}
   * @memberof PageWebhookResult
   */
  totalElements: number;
  /**
   *
   * @type {number}
   * @memberof PageWebhookResult
   */
  totalPages: number;
  /**
   *
   * @type {boolean}
   * @memberof PageWebhookResult
   */
  last?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof PageWebhookResult
   */
  first?: boolean;
  /**
   *
   * @type {number}
   * @memberof PageWebhookResult
   */
  numberOfElements?: number;
  /**
   *
   * @type {number}
   * @memberof PageWebhookResult
   */
  size?: number;
  /**
   *
   * @type {number}
   * @memberof PageWebhookResult
   */
  number?: number;
  /**
   *
   * @type {SortObject}
   * @memberof PageWebhookResult
   */
  sort?: SortObject;
  /**
   *
   * @type {boolean}
   * @memberof PageWebhookResult
   */
  empty?: boolean;
}

export function PageWebhookResultFromJSON(json: any): PageWebhookResult {
  return PageWebhookResultFromJSONTyped(json, false);
}

export function PageWebhookResultFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PageWebhookResult {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    content: !exists(json, 'content')
      ? undefined
      : (json['content'] as Array<any>).map(WebhookResultDtoFromJSON),
    pageable: !exists(json, 'pageable')
      ? undefined
      : PageableObjectFromJSON(json['pageable']),
    totalElements: json['totalElements'],
    totalPages: json['totalPages'],
    last: !exists(json, 'last') ? undefined : json['last'],
    first: !exists(json, 'first') ? undefined : json['first'],
    numberOfElements: !exists(json, 'numberOfElements')
      ? undefined
      : json['numberOfElements'],
    size: !exists(json, 'size') ? undefined : json['size'],
    number: !exists(json, 'number') ? undefined : json['number'],
    sort: !exists(json, 'sort') ? undefined : SortObjectFromJSON(json['sort']),
    empty: !exists(json, 'empty') ? undefined : json['empty'],
  };
}

export function PageWebhookResultToJSON(value?: PageWebhookResult | null): any {
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
        : (value.content as Array<any>).map(WebhookResultDtoToJSON),
    pageable: PageableObjectToJSON(value.pageable),
    totalElements: value.totalElements,
    totalPages: value.totalPages,
    last: value.last,
    first: value.first,
    numberOfElements: value.numberOfElements,
    size: value.size,
    number: value.number,
    sort: SortObjectToJSON(value.sort),
    empty: value.empty,
  };
}
