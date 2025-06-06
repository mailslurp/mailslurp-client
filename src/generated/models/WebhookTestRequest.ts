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
 * Result of webhook test request
 * @export
 * @interface WebhookTestRequest
 */
export interface WebhookTestRequest {
  /**
   *
   * @type {string}
   * @memberof WebhookTestRequest
   */
  url: string;
  /**
   *
   * @type {string}
   * @memberof WebhookTestRequest
   */
  method: WebhookTestRequestMethodEnum;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof WebhookTestRequest
   */
  headers: { [key: string]: string };
  /**
   *
   * @type {string}
   * @memberof WebhookTestRequest
   */
  payload?: string | null;
}

/**
 * @export
 * @enum {string}
 */
export enum WebhookTestRequestMethodEnum {
  POST = 'POST',
  DELETE = 'DELETE',
  GET = 'GET',
  PUT = 'PUT',
  PATCH = 'PATCH',
  HEAD = 'HEAD',
  OPTIONS = 'OPTIONS',
  TRACE = 'TRACE',
}

export function WebhookTestRequestFromJSON(json: any): WebhookTestRequest {
  return WebhookTestRequestFromJSONTyped(json, false);
}

export function WebhookTestRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): WebhookTestRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    url: json['url'],
    method: json['method'],
    headers: json['headers'],
    payload: !exists(json, 'payload') ? undefined : json['payload'],
  };
}

export function WebhookTestRequestToJSON(
  value?: WebhookTestRequest | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    url: value.url,
    method: value.method,
    headers: value.headers,
    payload: value.payload,
  };
}
