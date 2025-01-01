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
 * Create template options
 * @export
 * @interface CreateTemplateOptions
 */
export interface CreateTemplateOptions {
  /**
   * Name of template
   * @type {string}
   * @memberof CreateTemplateOptions
   */
  name: string;
  /**
   * Template content. Can include moustache style variables such as {{var_name}}
   * @type {string}
   * @memberof CreateTemplateOptions
   */
  content: string;
}

export function CreateTemplateOptionsFromJSON(
  json: any
): CreateTemplateOptions {
  return CreateTemplateOptionsFromJSONTyped(json, false);
}

export function CreateTemplateOptionsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateTemplateOptions {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    name: json['name'],
    content: json['content'],
  };
}

export function CreateTemplateOptionsToJSON(
  value?: CreateTemplateOptions | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    name: value.name,
    content: value.content,
  };
}
