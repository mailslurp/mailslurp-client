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
/**
 *
 * @export
 * @interface SortObject
 */
export interface SortObject {
  /**
   *
   * @type {boolean}
   * @memberof SortObject
   */
  sorted?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof SortObject
   */
  unsorted?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof SortObject
   */
  empty?: boolean;
}

export function SortObjectFromJSON(json: any): SortObject {
  return SortObjectFromJSONTyped(json, false);
}

export function SortObjectFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): SortObject {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    sorted: !exists(json, 'sorted') ? undefined : json['sorted'],
    unsorted: !exists(json, 'unsorted') ? undefined : json['unsorted'],
    empty: !exists(json, 'empty') ? undefined : json['empty'],
  };
}

export function SortObjectToJSON(value?: SortObject | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    sorted: value.sorted,
    unsorted: value.unsorted,
    empty: value.empty,
  };
}
