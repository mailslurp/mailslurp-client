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
/**
 *
 * @export
 * @interface AccountBounceBlockDto
 */
export interface AccountBounceBlockDto {
  /**
   *
   * @type {boolean}
   * @memberof AccountBounceBlockDto
   */
  isSendingBlocked: boolean;
  /**
   *
   * @type {number}
   * @memberof AccountBounceBlockDto
   */
  bounceCount: number;
  /**
   *
   * @type {number}
   * @memberof AccountBounceBlockDto
   */
  bounceCountToday: number;
  /**
   *
   * @type {number}
   * @memberof AccountBounceBlockDto
   */
  maximumDailyBounces: number;
  /**
   *
   * @type {number}
   * @memberof AccountBounceBlockDto
   */
  maximumAccountBounces: number;
}

export function AccountBounceBlockDtoFromJSON(
  json: any
): AccountBounceBlockDto {
  return AccountBounceBlockDtoFromJSONTyped(json, false);
}

export function AccountBounceBlockDtoFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): AccountBounceBlockDto {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    isSendingBlocked: json['isSendingBlocked'],
    bounceCount: json['bounceCount'],
    bounceCountToday: json['bounceCountToday'],
    maximumDailyBounces: json['maximumDailyBounces'],
    maximumAccountBounces: json['maximumAccountBounces'],
  };
}

export function AccountBounceBlockDtoToJSON(
  value?: AccountBounceBlockDto | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    isSendingBlocked: value.isSendingBlocked,
    bounceCount: value.bounceCount,
    bounceCountToday: value.bounceCountToday,
    maximumDailyBounces: value.maximumDailyBounces,
    maximumAccountBounces: value.maximumAccountBounces,
  };
}
