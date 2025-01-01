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
 * Email alias representation
 * @export
 * @interface AliasDto
 */
export interface AliasDto {
  /**
   *
   * @type {string}
   * @memberof AliasDto
   */
  id: string;
  /**
   * The alias's email address for receiving email
   * @type {string}
   * @memberof AliasDto
   */
  emailAddress: string;
  /**
   * The underlying email address that is hidden and will received forwarded email
   * @type {string}
   * @memberof AliasDto
   */
  maskedEmailAddress?: string | null;
  /**
   *
   * @type {string}
   * @memberof AliasDto
   */
  userId: string;
  /**
   * Inbox that is associated with the alias
   * @type {string}
   * @memberof AliasDto
   */
  inboxId: string;
  /**
   *
   * @type {string}
   * @memberof AliasDto
   */
  name?: string | null;
  /**
   * If alias will generate response threads or not when email are received by it
   * @type {boolean}
   * @memberof AliasDto
   */
  useThreads?: boolean | null;
  /**
   * Has the alias been verified. You must verify an alias if the masked email address has not yet been verified by your account
   * @type {boolean}
   * @memberof AliasDto
   */
  isVerified: boolean;
  /**
   * Domain ID associated with the alias
   * @type {string}
   * @memberof AliasDto
   */
  domainId?: string | null;
  /**
   *
   * @type {Date}
   * @memberof AliasDto
   */
  createdAt?: Date | null;
  /**
   *
   * @type {Date}
   * @memberof AliasDto
   */
  updatedAt?: Date | null;
}

export function AliasDtoFromJSON(json: any): AliasDto {
  return AliasDtoFromJSONTyped(json, false);
}

export function AliasDtoFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): AliasDto {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: json['id'],
    emailAddress: json['emailAddress'],
    maskedEmailAddress: !exists(json, 'maskedEmailAddress')
      ? undefined
      : json['maskedEmailAddress'],
    userId: json['userId'],
    inboxId: json['inboxId'],
    name: !exists(json, 'name') ? undefined : json['name'],
    useThreads: !exists(json, 'useThreads') ? undefined : json['useThreads'],
    isVerified: json['isVerified'],
    domainId: !exists(json, 'domainId') ? undefined : json['domainId'],
    createdAt: !exists(json, 'createdAt')
      ? undefined
      : json['createdAt'] === null
      ? null
      : new Date(json['createdAt']),
    updatedAt: !exists(json, 'updatedAt')
      ? undefined
      : json['updatedAt'] === null
      ? null
      : new Date(json['updatedAt']),
  };
}

export function AliasDtoToJSON(value?: AliasDto | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    emailAddress: value.emailAddress,
    maskedEmailAddress: value.maskedEmailAddress,
    userId: value.userId,
    inboxId: value.inboxId,
    name: value.name,
    useThreads: value.useThreads,
    isVerified: value.isVerified,
    domainId: value.domainId,
    createdAt:
      value.createdAt === undefined
        ? undefined
        : value.createdAt === null
        ? null
        : value.createdAt.toISOString(),
    updatedAt:
      value.updatedAt === undefined
        ? undefined
        : value.updatedAt === null
        ? null
        : value.updatedAt.toISOString(),
  };
}
