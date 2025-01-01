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
 * @interface EmailContentPartResult
 */
export interface EmailContentPartResult {
  /**
   *
   * @type {string}
   * @memberof EmailContentPartResult
   */
  content?: string | null;
}

export function EmailContentPartResultFromJSON(
  json: any
): EmailContentPartResult {
  return EmailContentPartResultFromJSONTyped(json, false);
}

export function EmailContentPartResultFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): EmailContentPartResult {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    content: !exists(json, 'content') ? undefined : json['content'],
  };
}

export function EmailContentPartResultToJSON(
  value?: EmailContentPartResult | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    content: value.content,
  };
}
