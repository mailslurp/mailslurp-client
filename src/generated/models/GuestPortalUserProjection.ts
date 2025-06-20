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
 * Representation of a guest portal user
 * @export
 * @interface GuestPortalUserProjection
 */
export interface GuestPortalUserProjection {
  /**
   *
   * @type {string}
   * @memberof GuestPortalUserProjection
   */
  username: string;
  /**
   *
   * @type {string}
   * @memberof GuestPortalUserProjection
   */
  inboxId?: string;
  /**
   *
   * @type {string}
   * @memberof GuestPortalUserProjection
   */
  userId: string;
  /**
   *
   * @type {string}
   * @memberof GuestPortalUserProjection
   */
  emailAddress?: string;
  /**
   *
   * @type {Date}
   * @memberof GuestPortalUserProjection
   */
  updatedAt: Date;
  /**
   *
   * @type {Date}
   * @memberof GuestPortalUserProjection
   */
  createdAt: Date;
  /**
   *
   * @type {string}
   * @memberof GuestPortalUserProjection
   */
  portalId: string;
  /**
   *
   * @type {string}
   * @memberof GuestPortalUserProjection
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof GuestPortalUserProjection
   */
  id: string;
}

export function GuestPortalUserProjectionFromJSON(
  json: any
): GuestPortalUserProjection {
  return GuestPortalUserProjectionFromJSONTyped(json, false);
}

export function GuestPortalUserProjectionFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GuestPortalUserProjection {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    username: json['username'],
    inboxId: !exists(json, 'inboxId') ? undefined : json['inboxId'],
    userId: json['userId'],
    emailAddress: !exists(json, 'emailAddress')
      ? undefined
      : json['emailAddress'],
    updatedAt: new Date(json['updatedAt']),
    createdAt: new Date(json['createdAt']),
    portalId: json['portalId'],
    name: !exists(json, 'name') ? undefined : json['name'],
    id: json['id'],
  };
}

export function GuestPortalUserProjectionToJSON(
  value?: GuestPortalUserProjection | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    username: value.username,
    inboxId: value.inboxId,
    userId: value.userId,
    emailAddress: value.emailAddress,
    updatedAt: value.updatedAt.toISOString(),
    createdAt: value.createdAt.toISOString(),
    portalId: value.portalId,
    name: value.name,
    id: value.id,
  };
}
