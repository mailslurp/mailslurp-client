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
 * @interface UserInfoDto
 */
export interface UserInfoDto {
  /**
   *
   * @type {string}
   * @memberof UserInfoDto
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof UserInfoDto
   */
  emailAddress: string;
  /**
   *
   * @type {string}
   * @memberof UserInfoDto
   */
  accountState: UserInfoDtoAccountStateEnum;
  /**
   *
   * @type {string}
   * @memberof UserInfoDto
   */
  subscriptionType?: UserInfoDtoSubscriptionTypeEnum;
  /**
   *
   * @type {string}
   * @memberof UserInfoDto
   */
  accountType: UserInfoDtoAccountTypeEnum;
  /**
   *
   * @type {Date}
   * @memberof UserInfoDto
   */
  createdAt: Date;
}

/**
 * @export
 * @enum {string}
 */
export enum UserInfoDtoAccountStateEnum {
  FROZEN = 'FROZEN',
  ACTIVE = 'ACTIVE',
}
/**
 * @export
 * @enum {string}
 */
export enum UserInfoDtoSubscriptionTypeEnum {
  PRO_MONTHLY = 'PRO_MONTHLY',
  STARTER = 'STARTER',
  TEAM = 'TEAM',
  ENTERPRISE = 'ENTERPRISE',
}
/**
 * @export
 * @enum {string}
 */
export enum UserInfoDtoAccountTypeEnum {
  SOLO = 'SOLO',
  CHILD_SOLO = 'CHILD_SOLO',
  CHILD_TEAM = 'CHILD_TEAM',
}

export function UserInfoDtoFromJSON(json: any): UserInfoDto {
  return UserInfoDtoFromJSONTyped(json, false);
}

export function UserInfoDtoFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UserInfoDto {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: json['id'],
    emailAddress: json['emailAddress'],
    accountState: json['accountState'],
    subscriptionType: !exists(json, 'subscriptionType')
      ? undefined
      : json['subscriptionType'],
    accountType: json['accountType'],
    createdAt: new Date(json['createdAt']),
  };
}

export function UserInfoDtoToJSON(value?: UserInfoDto | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    emailAddress: value.emailAddress,
    accountState: value.accountState,
    subscriptionType: value.subscriptionType,
    accountType: value.accountType,
    createdAt: value.createdAt.toISOString(),
  };
}
