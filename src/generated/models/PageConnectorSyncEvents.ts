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
  ConnectorSyncEventProjection,
  ConnectorSyncEventProjectionFromJSON,
  ConnectorSyncEventProjectionFromJSONTyped,
  ConnectorSyncEventProjectionToJSON,
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
 * Paginated inbox connector sync events. Page index starts at zero. Projection results may omit larger entity fields. For fetching a full entity use the projection ID with individual method calls.
 * @export
 * @interface PageConnectorSyncEvents
 */
export interface PageConnectorSyncEvents {
  /**
   *
   * @type {Array<ConnectorSyncEventProjection>}
   * @memberof PageConnectorSyncEvents
   */
  content?: Array<ConnectorSyncEventProjection>;
  /**
   *
   * @type {PageableObject}
   * @memberof PageConnectorSyncEvents
   */
  pageable?: PageableObject;
  /**
   *
   * @type {number}
   * @memberof PageConnectorSyncEvents
   */
  totalPages: number;
  /**
   *
   * @type {number}
   * @memberof PageConnectorSyncEvents
   */
  totalElements: number;
  /**
   *
   * @type {boolean}
   * @memberof PageConnectorSyncEvents
   */
  last?: boolean;
  /**
   *
   * @type {number}
   * @memberof PageConnectorSyncEvents
   */
  numberOfElements?: number;
  /**
   *
   * @type {boolean}
   * @memberof PageConnectorSyncEvents
   */
  first?: boolean;
  /**
   *
   * @type {number}
   * @memberof PageConnectorSyncEvents
   */
  size?: number;
  /**
   *
   * @type {number}
   * @memberof PageConnectorSyncEvents
   */
  number?: number;
  /**
   *
   * @type {SortObject}
   * @memberof PageConnectorSyncEvents
   */
  sort?: SortObject;
  /**
   *
   * @type {boolean}
   * @memberof PageConnectorSyncEvents
   */
  empty?: boolean;
}

export function PageConnectorSyncEventsFromJSON(
  json: any
): PageConnectorSyncEvents {
  return PageConnectorSyncEventsFromJSONTyped(json, false);
}

export function PageConnectorSyncEventsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PageConnectorSyncEvents {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    content: !exists(json, 'content')
      ? undefined
      : (json['content'] as Array<any>).map(
          ConnectorSyncEventProjectionFromJSON
        ),
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

export function PageConnectorSyncEventsToJSON(
  value?: PageConnectorSyncEvents | null
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
        : (value.content as Array<any>).map(ConnectorSyncEventProjectionToJSON),
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
