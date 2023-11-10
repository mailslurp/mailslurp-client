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
 * Bounced recipient
 * @export
 * @interface BouncedRecipientDto
 */
export interface BouncedRecipientDto {
  /**
   *
   * @type {string}
   * @memberof BouncedRecipientDto
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof BouncedRecipientDto
   */
  userId?: string | null;
  /**
   *
   * @type {string}
   * @memberof BouncedRecipientDto
   */
  sentEmailId?: string | null;
  /**
   *
   * @type {string}
   * @memberof BouncedRecipientDto
   */
  recipient: string;
  /**
   *
   * @type {string}
   * @memberof BouncedRecipientDto
   */
  diagnosticCode?: string | null;
  /**
   *
   * @type {string}
   * @memberof BouncedRecipientDto
   */
  action?: string | null;
  /**
   *
   * @type {string}
   * @memberof BouncedRecipientDto
   */
  bounceType?: string | null;
  /**
   *
   * @type {string}
   * @memberof BouncedRecipientDto
   */
  status?: string | null;
  /**
   *
   * @type {Date}
   * @memberof BouncedRecipientDto
   */
  createdAt: Date;
}

export function BouncedRecipientDtoFromJSON(json: any): BouncedRecipientDto {
  return BouncedRecipientDtoFromJSONTyped(json, false);
}

export function BouncedRecipientDtoFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): BouncedRecipientDto {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: json['id'],
    userId: !exists(json, 'userId') ? undefined : json['userId'],
    sentEmailId: !exists(json, 'sentEmailId') ? undefined : json['sentEmailId'],
    recipient: json['recipient'],
    diagnosticCode: !exists(json, 'diagnosticCode')
      ? undefined
      : json['diagnosticCode'],
    action: !exists(json, 'action') ? undefined : json['action'],
    bounceType: !exists(json, 'bounceType') ? undefined : json['bounceType'],
    status: !exists(json, 'status') ? undefined : json['status'],
    createdAt: new Date(json['createdAt']),
  };
}

export function BouncedRecipientDtoToJSON(
  value?: BouncedRecipientDto | null
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
    sentEmailId: value.sentEmailId,
    recipient: value.recipient,
    diagnosticCode: value.diagnosticCode,
    action: value.action,
    bounceType: value.bounceType,
    status: value.status,
    createdAt: value.createdAt.toISOString(),
  };
}
