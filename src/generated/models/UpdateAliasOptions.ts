/* tslint:disable */
/* eslint-disable */
/**
 * MailSlurp API
 * MailSlurp is an API for sending and receiving emails from dynamically allocated email addresses. It\'s designed for developers and QA teams to test applications, process inbound emails, send templated notifications, attachments, and more.  ## Resources  - [Homepage](https://www.mailslurp.com) - Get an [API KEY](https://app.mailslurp.com/sign-up/) - Generated [SDK Clients](https://www.mailslurp.com/docs/) - [Examples](https://github.com/mailslurp/examples) repository
 *
 * The version of the OpenAPI document: 6.5.2
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Update an email alias
 * @export
 * @interface UpdateAliasOptions
 */
export interface UpdateAliasOptions {
  /**
   * Optional name for alias
   * @type {string}
   * @memberof UpdateAliasOptions
   */
  name?: string;
}

export function UpdateAliasOptionsFromJSON(json: any): UpdateAliasOptions {
  return UpdateAliasOptionsFromJSONTyped(json, false);
}

export function UpdateAliasOptionsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UpdateAliasOptions {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    name: !exists(json, 'name') ? undefined : json['name'],
  };
}

export function UpdateAliasOptionsToJSON(
  value?: UpdateAliasOptions | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    name: value.name,
  };
}
