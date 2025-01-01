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
 * @interface DeliveryStatusDto
 */
export interface DeliveryStatusDto {
  /**
   *
   * @type {string}
   * @memberof DeliveryStatusDto
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof DeliveryStatusDto
   */
  userId: string;
  /**
   *
   * @type {string}
   * @memberof DeliveryStatusDto
   */
  sentId?: string;
  /**
   *
   * @type {string}
   * @memberof DeliveryStatusDto
   */
  remoteMtaIp?: string;
  /**
   *
   * @type {string}
   * @memberof DeliveryStatusDto
   */
  inboxId?: string;
  /**
   *
   * @type {string}
   * @memberof DeliveryStatusDto
   */
  reportingMta?: string;
  /**
   *
   * @type {Array<string>}
   * @memberof DeliveryStatusDto
   */
  recipients?: Array<string>;
  /**
   *
   * @type {string}
   * @memberof DeliveryStatusDto
   */
  smtpResponse?: string;
  /**
   *
   * @type {number}
   * @memberof DeliveryStatusDto
   */
  smtpStatusCode?: number;
  /**
   *
   * @type {number}
   * @memberof DeliveryStatusDto
   */
  processingTimeMillis?: number;
  /**
   *
   * @type {Date}
   * @memberof DeliveryStatusDto
   */
  received?: Date;
  /**
   *
   * @type {string}
   * @memberof DeliveryStatusDto
   */
  subject?: string;
  /**
   *
   * @type {Date}
   * @memberof DeliveryStatusDto
   */
  createdAt: Date;
  /**
   *
   * @type {Date}
   * @memberof DeliveryStatusDto
   */
  updatedAt: Date;
}

export function DeliveryStatusDtoFromJSON(json: any): DeliveryStatusDto {
  return DeliveryStatusDtoFromJSONTyped(json, false);
}

export function DeliveryStatusDtoFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): DeliveryStatusDto {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: json['id'],
    userId: json['userId'],
    sentId: !exists(json, 'sentId') ? undefined : json['sentId'],
    remoteMtaIp: !exists(json, 'remoteMtaIp') ? undefined : json['remoteMtaIp'],
    inboxId: !exists(json, 'inboxId') ? undefined : json['inboxId'],
    reportingMta: !exists(json, 'reportingMta')
      ? undefined
      : json['reportingMta'],
    recipients: !exists(json, 'recipients') ? undefined : json['recipients'],
    smtpResponse: !exists(json, 'smtpResponse')
      ? undefined
      : json['smtpResponse'],
    smtpStatusCode: !exists(json, 'smtpStatusCode')
      ? undefined
      : json['smtpStatusCode'],
    processingTimeMillis: !exists(json, 'processingTimeMillis')
      ? undefined
      : json['processingTimeMillis'],
    received: !exists(json, 'received')
      ? undefined
      : new Date(json['received']),
    subject: !exists(json, 'subject') ? undefined : json['subject'],
    createdAt: new Date(json['createdAt']),
    updatedAt: new Date(json['updatedAt']),
  };
}

export function DeliveryStatusDtoToJSON(value?: DeliveryStatusDto | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    userId: value.userId,
    sentId: value.sentId,
    remoteMtaIp: value.remoteMtaIp,
    inboxId: value.inboxId,
    reportingMta: value.reportingMta,
    recipients: value.recipients,
    smtpResponse: value.smtpResponse,
    smtpStatusCode: value.smtpStatusCode,
    processingTimeMillis: value.processingTimeMillis,
    received:
      value.received === undefined ? undefined : value.received.toISOString(),
    subject: value.subject,
    createdAt: value.createdAt.toISOString(),
    updatedAt: value.updatedAt.toISOString(),
  };
}
