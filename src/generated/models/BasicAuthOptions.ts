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
 * Basic Authentication options for webhooks. Will be used is present when calling webhook endpoints.
 * @export
 * @interface BasicAuthOptions
 */
export interface BasicAuthOptions {
  /**
   *
   * @type {string}
   * @memberof BasicAuthOptions
   */
  username: string;
  /**
   *
   * @type {string}
   * @memberof BasicAuthOptions
   */
  password: string;
}

export function BasicAuthOptionsFromJSON(json: any): BasicAuthOptions {
  return BasicAuthOptionsFromJSONTyped(json, false);
}

export function BasicAuthOptionsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): BasicAuthOptions {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    username: json['username'],
    password: json['password'],
  };
}

export function BasicAuthOptionsToJSON(value?: BasicAuthOptions | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    username: value.username,
    password: value.password,
  };
}
