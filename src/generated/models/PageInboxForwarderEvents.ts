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
  InboxForwarderEventProjection,
  InboxForwarderEventProjectionFromJSON,
  InboxForwarderEventProjectionFromJSONTyped,
  InboxForwarderEventProjectionToJSON,
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
 * Paginated inbox forwarder events. Page index starts at zero. Projection results may omit larger entity fields. For fetching a full entity use the projection ID with individual method calls.
 * @export
 * @interface PageInboxForwarderEvents
 */
export interface PageInboxForwarderEvents {
  /**
   *
   * @type {Array<InboxForwarderEventProjection>}
   * @memberof PageInboxForwarderEvents
   */
  content?: Array<InboxForwarderEventProjection>;
  /**
   *
   * @type {PageableObject}
   * @memberof PageInboxForwarderEvents
   */
  pageable?: PageableObject;
  /**
   *
   * @type {number}
   * @memberof PageInboxForwarderEvents
   */
  totalElements: number;
  /**
   *
   * @type {number}
   * @memberof PageInboxForwarderEvents
   */
  totalPages: number;
  /**
   *
   * @type {boolean}
   * @memberof PageInboxForwarderEvents
   */
  last?: boolean;
  /**
   *
   * @type {number}
   * @memberof PageInboxForwarderEvents
   */
  numberOfElements?: number;
  /**
   *
   * @type {boolean}
   * @memberof PageInboxForwarderEvents
   */
  first?: boolean;
  /**
   *
   * @type {number}
   * @memberof PageInboxForwarderEvents
   */
  size?: number;
  /**
   *
   * @type {number}
   * @memberof PageInboxForwarderEvents
   */
  number?: number;
  /**
   *
   * @type {SortObject}
   * @memberof PageInboxForwarderEvents
   */
  sort?: SortObject;
  /**
   *
   * @type {boolean}
   * @memberof PageInboxForwarderEvents
   */
  empty?: boolean;
}

export function PageInboxForwarderEventsFromJSON(
  json: any
): PageInboxForwarderEvents {
  return PageInboxForwarderEventsFromJSONTyped(json, false);
}

export function PageInboxForwarderEventsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PageInboxForwarderEvents {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    content: !exists(json, 'content')
      ? undefined
      : (json['content'] as Array<any>).map(
          InboxForwarderEventProjectionFromJSON
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

export function PageInboxForwarderEventsToJSON(
  value?: PageInboxForwarderEvents | null
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
            InboxForwarderEventProjectionToJSON
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
