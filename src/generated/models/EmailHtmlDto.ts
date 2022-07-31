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
 *
 * @export
 * @interface EmailHtmlDto
 */
export interface EmailHtmlDto {
  /**
   *
   * @type {string}
   * @memberof EmailHtmlDto
   */
  subject?: string;
  /**
   *
   * @type {string}
   * @memberof EmailHtmlDto
   */
  body?: string;
}

export function EmailHtmlDtoFromJSON(json: any): EmailHtmlDto {
  return EmailHtmlDtoFromJSONTyped(json, false);
}

export function EmailHtmlDtoFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): EmailHtmlDto {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    subject: !exists(json, 'subject') ? undefined : json['subject'],
    body: !exists(json, 'body') ? undefined : json['body'],
  };
}

export function EmailHtmlDtoToJSON(value?: EmailHtmlDto | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    subject: value.subject,
    body: value.body,
  };
}