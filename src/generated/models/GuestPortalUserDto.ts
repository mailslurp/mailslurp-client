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
 * @interface GuestPortalUserDto
 */
export interface GuestPortalUserDto {
  /**
   *
   * @type {string}
   * @memberof GuestPortalUserDto
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof GuestPortalUserDto
   */
  userId: string;
  /**
   *
   * @type {string}
   * @memberof GuestPortalUserDto
   */
  portalId: string;
  /**
   *
   * @type {string}
   * @memberof GuestPortalUserDto
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof GuestPortalUserDto
   */
  username: string;
  /**
   *
   * @type {string}
   * @memberof GuestPortalUserDto
   */
  emailAddress?: string;
  /**
   *
   * @type {string}
   * @memberof GuestPortalUserDto
   */
  inboxId?: string;
  /**
   *
   * @type {string}
   * @memberof GuestPortalUserDto
   */
  loginUrl: string;
  /**
   *
   * @type {Date}
   * @memberof GuestPortalUserDto
   */
  createdAt: Date;
  /**
   *
   * @type {Date}
   * @memberof GuestPortalUserDto
   */
  updatedAt: Date;
}

export function GuestPortalUserDtoFromJSON(json: any): GuestPortalUserDto {
  return GuestPortalUserDtoFromJSONTyped(json, false);
}

export function GuestPortalUserDtoFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GuestPortalUserDto {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: json['id'],
    userId: json['userId'],
    portalId: json['portalId'],
    name: !exists(json, 'name') ? undefined : json['name'],
    username: json['username'],
    emailAddress: !exists(json, 'emailAddress')
      ? undefined
      : json['emailAddress'],
    inboxId: !exists(json, 'inboxId') ? undefined : json['inboxId'],
    loginUrl: json['loginUrl'],
    createdAt: new Date(json['createdAt']),
    updatedAt: new Date(json['updatedAt']),
  };
}

export function GuestPortalUserDtoToJSON(
  value?: GuestPortalUserDto | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    userId: value.userId,
    portalId: value.portalId,
    name: value.name,
    username: value.username,
    emailAddress: value.emailAddress,
    inboxId: value.inboxId,
    loginUrl: value.loginUrl,
    createdAt: value.createdAt.toISOString(),
    updatedAt: value.updatedAt.toISOString(),
  };
}
