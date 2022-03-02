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
/**
 * Representation a user's account
 * @export
 * @interface UserDto
 */
export interface UserDto {
  /**
   *
   * @type {string}
   * @memberof UserDto
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof UserDto
   */
  apiKey: string;
  /**
   *
   * @type {string}
   * @memberof UserDto
   */
  emailAddress: string;
  /**
   *
   * @type {string}
   * @memberof UserDto
   */
  emailAddressMd5: string;
  /**
   *
   * @type {Date}
   * @memberof UserDto
   */
  created?: Date;
  /**
   *
   * @type {string}
   * @memberof UserDto
   */
  userType?: UserDtoUserTypeEnum;
  /**
   * Does user belong to an organization
   * @type {string}
   * @memberof UserDto
   */
  organization?: string;
  /**
   * Has user accepted an organization invite
   * @type {string}
   * @memberof UserDto
   */
  verified?: UserDtoVerifiedEnum;
  /**
   *
   * @type {boolean}
   * @memberof UserDto
   */
  hasPassword: boolean;
  /**
   *
   * @type {boolean}
   * @memberof UserDto
   */
  isFrozen: boolean;
  /**
   *
   * @type {boolean}
   * @memberof UserDto
   */
  addNewContacts?: boolean;
  /**
   *
   * @type {string}
   * @memberof UserDto
   */
  ssoProvider?: string;
  /**
   *
   * @type {string}
   * @memberof UserDto
   */
  customerId?: string;
  /**
   *
   * @type {boolean}
   * @memberof UserDto
   */
  hasOnboarded?: boolean;
  /**
   *
   * @type {string}
   * @memberof UserDto
   */
  imapUsername?: string;
  /**
   *
   * @type {string}
   * @memberof UserDto
   */
  imapPassword?: string;
  /**
   *
   * @type {string}
   * @memberof UserDto
   */
  smtpUsername?: string;
  /**
   *
   * @type {string}
   * @memberof UserDto
   */
  smtpPassword?: string;
}

/**
 * @export
 * @enum {string}
 */
export enum UserDtoUserTypeEnum {
  SOLO = 'SOLO',
  CHILD_SOLO = 'CHILD_SOLO',
  CHILD_TEAM = 'CHILD_TEAM',
}
/**
 * @export
 * @enum {string}
 */
export enum UserDtoVerifiedEnum {
  VERIFIED = 'VERIFIED',
  PENDING = 'PENDING',
}

export function UserDtoFromJSON(json: any): UserDto {
  return UserDtoFromJSONTyped(json, false);
}

export function UserDtoFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UserDto {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: json['id'],
    apiKey: json['apiKey'],
    emailAddress: json['emailAddress'],
    emailAddressMd5: json['emailAddressMd5'],
    created: !exists(json, 'created') ? undefined : new Date(json['created']),
    userType: !exists(json, 'userType') ? undefined : json['userType'],
    organization: !exists(json, 'organization')
      ? undefined
      : json['organization'],
    verified: !exists(json, 'verified') ? undefined : json['verified'],
    hasPassword: json['hasPassword'],
    isFrozen: json['isFrozen'],
    addNewContacts: !exists(json, 'addNewContacts')
      ? undefined
      : json['addNewContacts'],
    ssoProvider: !exists(json, 'ssoProvider') ? undefined : json['ssoProvider'],
    customerId: !exists(json, 'customerId') ? undefined : json['customerId'],
    hasOnboarded: !exists(json, 'hasOnboarded')
      ? undefined
      : json['hasOnboarded'],
    imapUsername: !exists(json, 'imapUsername')
      ? undefined
      : json['imapUsername'],
    imapPassword: !exists(json, 'imapPassword')
      ? undefined
      : json['imapPassword'],
    smtpUsername: !exists(json, 'smtpUsername')
      ? undefined
      : json['smtpUsername'],
    smtpPassword: !exists(json, 'smtpPassword')
      ? undefined
      : json['smtpPassword'],
  };
}

export function UserDtoToJSON(value?: UserDto | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    apiKey: value.apiKey,
    emailAddress: value.emailAddress,
    emailAddressMd5: value.emailAddressMd5,
    created:
      value.created === undefined ? undefined : value.created.toISOString(),
    userType: value.userType,
    organization: value.organization,
    verified: value.verified,
    hasPassword: value.hasPassword,
    isFrozen: value.isFrozen,
    addNewContacts: value.addNewContacts,
    ssoProvider: value.ssoProvider,
    customerId: value.customerId,
    hasOnboarded: value.hasOnboarded,
    imapUsername: value.imapUsername,
    imapPassword: value.imapPassword,
    smtpUsername: value.smtpUsername,
    smtpPassword: value.smtpPassword,
  };
}
