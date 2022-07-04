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
import {
  WebhookHeaders,
  WebhookHeadersFromJSON,
  WebhookHeadersFromJSONTyped,
  WebhookHeadersToJSON,
} from './';

/**
 * Representation of a webhook for an inbox. The URL specified will be using by MailSlurp whenever an email is received by the attached inbox. A webhook entity should have a URL that points to your server. Your server should accept HTTP/S POST requests and return a success 200. MailSlurp will retry your webhooks if they fail. See https://api.mailslurp.com/schemas/webhook-payload for the payload schema.
 * @export
 * @interface WebhookDto
 */
export interface WebhookDto {
  /**
   * ID of the Webhook
   * @type {string}
   * @memberof WebhookDto
   */
  id: string;
  /**
   * User ID of the Webhook
   * @type {string}
   * @memberof WebhookDto
   */
  userId: string;
  /**
   * Does webhook expect basic authentication? If true it means you created this webhook with a username and password. MailSlurp will use these in the URL to authenticate itself.
   * @type {boolean}
   * @memberof WebhookDto
   */
  basicAuth: boolean;
  /**
   * Name of the webhook
   * @type {string}
   * @memberof WebhookDto
   */
  name?: string | null;
  /**
   * The inbox that the Webhook will be triggered by. If null then webhook triggered at account level
   * @type {string}
   * @memberof WebhookDto
   */
  inboxId?: string | null;
  /**
   * URL of your server that the webhook will be sent to. The schema of the JSON that is sent is described by the payloadJsonSchema.
   * @type {string}
   * @memberof WebhookDto
   */
  url: string;
  /**
   * HTTP method that your server endpoint must listen for
   * @type {string}
   * @memberof WebhookDto
   */
  method: WebhookDtoMethodEnum;
  /**
   * Deprecated. Fetch JSON Schema for webhook using the getJsonSchemaForWebhookPayload method
   * @type {string}
   * @memberof WebhookDto
   */
  payloadJsonSchema: string;
  /**
   * When the webhook was created
   * @type {Date}
   * @memberof WebhookDto
   */
  createdAt: Date | null;
  /**
   *
   * @type {Date}
   * @memberof WebhookDto
   */
  updatedAt: Date;
  /**
   * Webhook trigger event name
   * @type {string}
   * @memberof WebhookDto
   */
  eventName?: WebhookDtoEventNameEnum;
  /**
   *
   * @type {WebhookHeaders}
   * @memberof WebhookDto
   */
  requestHeaders?: WebhookHeaders;
}

/**
 * @export
 * @enum {string}
 */
export enum WebhookDtoMethodEnum {
  GET = 'GET',
  HEAD = 'HEAD',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
  OPTIONS = 'OPTIONS',
  TRACE = 'TRACE',
}
/**
 * @export
 * @enum {string}
 */
export enum WebhookDtoEventNameEnum {
  EMAIL_RECEIVED = 'EMAIL_RECEIVED',
  NEW_EMAIL = 'NEW_EMAIL',
  NEW_CONTACT = 'NEW_CONTACT',
  NEW_ATTACHMENT = 'NEW_ATTACHMENT',
  EMAIL_OPENED = 'EMAIL_OPENED',
  EMAIL_READ = 'EMAIL_READ',
  BOUNCE = 'BOUNCE',
  BOUNCE_RECIPIENT = 'BOUNCE_RECIPIENT',
  NEW_SMS = 'NEW_SMS',
}

export function WebhookDtoFromJSON(json: any): WebhookDto {
  return WebhookDtoFromJSONTyped(json, false);
}

export function WebhookDtoFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): WebhookDto {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: json['id'],
    userId: json['userId'],
    basicAuth: json['basicAuth'],
    name: !exists(json, 'name') ? undefined : json['name'],
    inboxId: !exists(json, 'inboxId') ? undefined : json['inboxId'],
    url: json['url'],
    method: json['method'],
    payloadJsonSchema: json['payloadJsonSchema'],
    createdAt: json['createdAt'] === null ? null : new Date(json['createdAt']),
    updatedAt: new Date(json['updatedAt']),
    eventName: !exists(json, 'eventName') ? undefined : json['eventName'],
    requestHeaders: !exists(json, 'requestHeaders')
      ? undefined
      : WebhookHeadersFromJSON(json['requestHeaders']),
  };
}

export function WebhookDtoToJSON(value?: WebhookDto | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    userId: value.userId,
    basicAuth: value.basicAuth,
    name: value.name,
    inboxId: value.inboxId,
    url: value.url,
    method: value.method,
    payloadJsonSchema: value.payloadJsonSchema,
    createdAt: value.createdAt === null ? null : value.createdAt.toISOString(),
    updatedAt: value.updatedAt.toISOString(),
    eventName: value.eventName,
    requestHeaders: WebhookHeadersToJSON(value.requestHeaders),
  };
}
