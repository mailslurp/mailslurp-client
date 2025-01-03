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
 * Content in raw format
 * @export
 * @interface RawEmailJson
 */
export interface RawEmailJson {
  /**
   *
   * @type {string}
   * @memberof RawEmailJson
   */
  content: string;
}

export function RawEmailJsonFromJSON(json: any): RawEmailJson {
  return RawEmailJsonFromJSONTyped(json, false);
}

export function RawEmailJsonFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): RawEmailJson {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    content: json['content'],
  };
}

export function RawEmailJsonToJSON(value?: RawEmailJson | null): any {
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
