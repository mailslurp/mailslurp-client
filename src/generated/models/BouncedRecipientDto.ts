/* tslint:disable */
/* eslint-disable */
/**
 * MailSlurp API
 * MailSlurp is an API for sending and receiving emails from dynamically allocated email addresses. It\'s designed for developers and QA teams to test applications, process inbound emails, send templated notifications, attachments, and more.  ## Resources  - [Homepage](https://www.mailslurp.com) - Get an [API KEY](https://app.mailslurp.com/sign-up/) - Generated [SDK Clients](https://www.mailslurp.com/docs/) - [Examples](https://github.com/mailslurp/examples) repository
 *
 * The version of the OpenAPI document: 6.5.2
 *
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
   * @type {Date}
   * @memberof BouncedRecipientDto
   */
  createdAt: Date;
  /**
   *
   * @type {string}
   * @memberof BouncedRecipientDto
   */
  id?: string;
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
  userId: string;
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
    createdAt: new Date(json['createdAt']),
    id: !exists(json, 'id') ? undefined : json['id'],
    recipient: json['recipient'],
    userId: json['userId'],
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
    createdAt: value.createdAt.toISOString(),
    id: value.id,
    recipient: value.recipient,
    userId: value.userId,
  };
}