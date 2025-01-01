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
 * @interface WebhookEndpointProjection
 */
export interface WebhookEndpointProjection {
  /**
   *
   * @type {string}
   * @memberof WebhookEndpointProjection
   */
  url: string;
  /**
   *
   * @type {string}
   * @memberof WebhookEndpointProjection
   */
  health: WebhookEndpointProjectionHealthEnum;
}

/**
 * @export
 * @enum {string}
 */
export enum WebhookEndpointProjectionHealthEnum {
  HEALTHY = 'HEALTHY',
  UNHEALTHY = 'UNHEALTHY',
}

export function WebhookEndpointProjectionFromJSON(
  json: any
): WebhookEndpointProjection {
  return WebhookEndpointProjectionFromJSONTyped(json, false);
}

export function WebhookEndpointProjectionFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): WebhookEndpointProjection {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    url: json['url'],
    health: json['health'],
  };
}

export function WebhookEndpointProjectionToJSON(
  value?: WebhookEndpointProjection | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    url: value.url,
    health: value.health,
  };
}
