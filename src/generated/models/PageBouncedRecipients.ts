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
  BounceRecipientProjection,
  BounceRecipientProjectionFromJSON,
  BounceRecipientProjectionFromJSONTyped,
  BounceRecipientProjectionToJSON,
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
 * Paginated bounced recipients. Page index starts at zero. Projection results may omit larger entity fields. For fetching a full entity use the projection ID with individual method calls.
 * @export
 * @interface PageBouncedRecipients
 */
export interface PageBouncedRecipients {
  /**
   *
   * @type {Array<BounceRecipientProjection>}
   * @memberof PageBouncedRecipients
   */
  content?: Array<BounceRecipientProjection>;
  /**
   *
   * @type {PageableObject}
   * @memberof PageBouncedRecipients
   */
  pageable?: PageableObject;
  /**
   *
   * @type {number}
   * @memberof PageBouncedRecipients
   */
  totalElements: number;
  /**
   *
   * @type {number}
   * @memberof PageBouncedRecipients
   */
  totalPages: number;
  /**
   *
   * @type {boolean}
   * @memberof PageBouncedRecipients
   */
  last?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof PageBouncedRecipients
   */
  first?: boolean;
  /**
   *
   * @type {number}
   * @memberof PageBouncedRecipients
   */
  numberOfElements?: number;
  /**
   *
   * @type {number}
   * @memberof PageBouncedRecipients
   */
  size?: number;
  /**
   *
   * @type {number}
   * @memberof PageBouncedRecipients
   */
  number?: number;
  /**
   *
   * @type {SortObject}
   * @memberof PageBouncedRecipients
   */
  sort?: SortObject;
  /**
   *
   * @type {boolean}
   * @memberof PageBouncedRecipients
   */
  empty?: boolean;
}

export function PageBouncedRecipientsFromJSON(
  json: any
): PageBouncedRecipients {
  return PageBouncedRecipientsFromJSONTyped(json, false);
}

export function PageBouncedRecipientsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PageBouncedRecipients {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    content: !exists(json, 'content')
      ? undefined
      : (json['content'] as Array<any>).map(BounceRecipientProjectionFromJSON),
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

export function PageBouncedRecipientsToJSON(
  value?: PageBouncedRecipients | null
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
        : (value.content as Array<any>).map(BounceRecipientProjectionToJSON),
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
