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
  ListUnsubscribeRecipientProjection,
  ListUnsubscribeRecipientProjectionFromJSON,
  ListUnsubscribeRecipientProjectionFromJSONTyped,
  ListUnsubscribeRecipientProjectionToJSON,
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
 * Paginated list unsubscribe recipients. Page index starts at zero. Projection results may omit larger entity fields. For fetching a full entity use the projection ID with individual method calls.
 * @export
 * @interface PageListUnsubscribeRecipients
 */
export interface PageListUnsubscribeRecipients {
  /**
   *
   * @type {Array<ListUnsubscribeRecipientProjection>}
   * @memberof PageListUnsubscribeRecipients
   */
  content?: Array<ListUnsubscribeRecipientProjection>;
  /**
   *
   * @type {PageableObject}
   * @memberof PageListUnsubscribeRecipients
   */
  pageable?: PageableObject;
  /**
   *
   * @type {number}
   * @memberof PageListUnsubscribeRecipients
   */
  totalElements: number;
  /**
   *
   * @type {number}
   * @memberof PageListUnsubscribeRecipients
   */
  totalPages: number;
  /**
   *
   * @type {boolean}
   * @memberof PageListUnsubscribeRecipients
   */
  last?: boolean;
  /**
   *
   * @type {number}
   * @memberof PageListUnsubscribeRecipients
   */
  numberOfElements?: number;
  /**
   *
   * @type {boolean}
   * @memberof PageListUnsubscribeRecipients
   */
  first?: boolean;
  /**
   *
   * @type {number}
   * @memberof PageListUnsubscribeRecipients
   */
  size?: number;
  /**
   *
   * @type {number}
   * @memberof PageListUnsubscribeRecipients
   */
  number?: number;
  /**
   *
   * @type {SortObject}
   * @memberof PageListUnsubscribeRecipients
   */
  sort?: SortObject;
  /**
   *
   * @type {boolean}
   * @memberof PageListUnsubscribeRecipients
   */
  empty?: boolean;
}

export function PageListUnsubscribeRecipientsFromJSON(
  json: any
): PageListUnsubscribeRecipients {
  return PageListUnsubscribeRecipientsFromJSONTyped(json, false);
}

export function PageListUnsubscribeRecipientsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PageListUnsubscribeRecipients {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    content: !exists(json, 'content')
      ? undefined
      : (json['content'] as Array<any>).map(
          ListUnsubscribeRecipientProjectionFromJSON
        ),
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

export function PageListUnsubscribeRecipientsToJSON(
  value?: PageListUnsubscribeRecipients | null
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
        : (value.content as Array<any>).map(
            ListUnsubscribeRecipientProjectionToJSON
          ),
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
