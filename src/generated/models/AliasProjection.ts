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
 * Representation of a alias
 * @export
 * @interface AliasProjection
 */
export interface AliasProjection {
  /**
   *
   * @type {string}
   * @memberof AliasProjection
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof AliasProjection
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof AliasProjection
   */
  inboxId: string;
  /**
   *
   * @type {string}
   * @memberof AliasProjection
   */
  emailAddress: string;
  /**
   *
   * @type {string}
   * @memberof AliasProjection
   */
  userId: string;
  /**
   *
   * @type {boolean}
   * @memberof AliasProjection
   */
  useThreads?: boolean;
  /**
   *
   * @type {Date}
   * @memberof AliasProjection
   */
  createdAt: Date;
  /**
   *
   * @type {Date}
   * @memberof AliasProjection
   */
  updatedAt: Date;
}

export function AliasProjectionFromJSON(json: any): AliasProjection {
  return AliasProjectionFromJSONTyped(json, false);
}

export function AliasProjectionFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): AliasProjection {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    name: !exists(json, 'name') ? undefined : json['name'],
    id: json['id'],
    inboxId: json['inboxId'],
    emailAddress: json['emailAddress'],
    userId: json['userId'],
    useThreads: !exists(json, 'useThreads') ? undefined : json['useThreads'],
    createdAt: new Date(json['createdAt']),
    updatedAt: new Date(json['updatedAt']),
  };
}

export function AliasProjectionToJSON(value?: AliasProjection | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    name: value.name,
    id: value.id,
    inboxId: value.inboxId,
    emailAddress: value.emailAddress,
    userId: value.userId,
    useThreads: value.useThreads,
    createdAt: value.createdAt.toISOString(),
    updatedAt: value.updatedAt.toISOString(),
  };
}
