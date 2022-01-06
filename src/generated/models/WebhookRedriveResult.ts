/* tslint:disable */
/* eslint-disable */
/**
 * MailSlurp API
 * MailSlurp is an API for sending and receiving emails from dynamically allocated email addresses. It\'s designed for developers and QA teams to test applications, process inbound emails, send templated notifications, attachments, and more.  ## Resources  - [Homepage](https://www.mailslurp.com) - Get an [API KEY](https://app.mailslurp.com/sign-up/) - Generated [SDK Clients](https://www.mailslurp.com/docs/) - [Examples](https://github.com/mailslurp/examples) repository
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
 * @interface WebhookRedriveResult
 */
export interface WebhookRedriveResult {
  /**
   *
   * @type {string}
   * @memberof WebhookRedriveResult
   */
  webhookResultId: string;
  /**
   *
   * @type {boolean}
   * @memberof WebhookRedriveResult
   */
  success: boolean;
  /**
   *
   * @type {string}
   * @memberof WebhookRedriveResult
   */
  message?: string;
}

export function WebhookRedriveResultFromJSON(json: any): WebhookRedriveResult {
  return WebhookRedriveResultFromJSONTyped(json, false);
}

export function WebhookRedriveResultFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): WebhookRedriveResult {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    webhookResultId: json['webhookResultId'],
    success: json['success'],
    message: !exists(json, 'message') ? undefined : json['message'],
  };
}

export function WebhookRedriveResultToJSON(
  value?: WebhookRedriveResult | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    webhookResultId: value.webhookResultId,
    success: value.success,
    message: value.message,
  };
}
