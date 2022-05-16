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
 * Representation of a webhook
 * @export
 * @interface WebhookProjection
 */
export interface WebhookProjection {
  /**
   *
   * @type {string}
   * @memberof WebhookProjection
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof WebhookProjection
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof WebhookProjection
   */
  url: string;
  /**
   *
   * @type {Date}
   * @memberof WebhookProjection
   */
  createdAt: Date;
  /**
   *
   * @type {string}
   * @memberof WebhookProjection
   */
  inboxId?: string;
  /**
   *
   * @type {string}
   * @memberof WebhookProjection
   */
  eventName?: WebhookProjectionEventNameEnum;
  /**
   *
   * @type {Date}
   * @memberof WebhookProjection
   */
  updatedAt: Date;
}

/**
 * @export
 * @enum {string}
 */
export enum WebhookProjectionEventNameEnum {
  EMAIL_RECEIVED = 'EMAIL_RECEIVED',
  NEW_EMAIL = 'NEW_EMAIL',
  NEW_CONTACT = 'NEW_CONTACT',
  NEW_ATTACHMENT = 'NEW_ATTACHMENT',
  EMAIL_OPENED = 'EMAIL_OPENED',
  EMAIL_READ = 'EMAIL_READ',
  BOUNCE = 'BOUNCE',
  BOUNCE_RECIPIENT = 'BOUNCE_RECIPIENT',
}

export function WebhookProjectionFromJSON(json: any): WebhookProjection {
  return WebhookProjectionFromJSONTyped(json, false);
}

export function WebhookProjectionFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): WebhookProjection {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    name: !exists(json, 'name') ? undefined : json['name'],
    id: json['id'],
    url: json['url'],
    createdAt: new Date(json['createdAt']),
    inboxId: !exists(json, 'inboxId') ? undefined : json['inboxId'],
    eventName: !exists(json, 'eventName') ? undefined : json['eventName'],
    updatedAt: new Date(json['updatedAt']),
  };
}

export function WebhookProjectionToJSON(value?: WebhookProjection | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    name: value.name,
    id: value.id,
    url: value.url,
    createdAt: value.createdAt.toISOString(),
    inboxId: value.inboxId,
    eventName: value.eventName,
    updatedAt: value.updatedAt.toISOString(),
  };
}
