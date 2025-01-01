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
 * @interface LookupBimiDomainOptions
 */
export interface LookupBimiDomainOptions {
  /**
   *
   * @type {string}
   * @memberof LookupBimiDomainOptions
   */
  host: string;
}

export function LookupBimiDomainOptionsFromJSON(
  json: any
): LookupBimiDomainOptions {
  return LookupBimiDomainOptionsFromJSONTyped(json, false);
}

export function LookupBimiDomainOptionsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): LookupBimiDomainOptions {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    host: json['host'],
  };
}

export function LookupBimiDomainOptionsToJSON(
  value?: LookupBimiDomainOptions | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    host: value.host,
  };
}
