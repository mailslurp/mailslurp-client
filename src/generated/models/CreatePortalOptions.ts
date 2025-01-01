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
 * @interface CreatePortalOptions
 */
export interface CreatePortalOptions {
  /**
   *
   * @type {string}
   * @memberof CreatePortalOptions
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof CreatePortalOptions
   */
  domainId?: string;
  /**
   *
   * @type {string}
   * @memberof CreatePortalOptions
   */
  description?: string;
  /**
   *
   * @type {string}
   * @memberof CreatePortalOptions
   */
  linkHelp?: string;
}

export function CreatePortalOptionsFromJSON(json: any): CreatePortalOptions {
  return CreatePortalOptionsFromJSONTyped(json, false);
}

export function CreatePortalOptionsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreatePortalOptions {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    name: !exists(json, 'name') ? undefined : json['name'],
    domainId: !exists(json, 'domainId') ? undefined : json['domainId'],
    description: !exists(json, 'description') ? undefined : json['description'],
    linkHelp: !exists(json, 'linkHelp') ? undefined : json['linkHelp'],
  };
}

export function CreatePortalOptionsToJSON(
  value?: CreatePortalOptions | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    name: value.name,
    domainId: value.domainId,
    description: value.description,
    linkHelp: value.linkHelp,
  };
}
