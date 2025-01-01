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
 * Edit access details for inbox using SMTP
 * @export
 * @interface UpdateSmtpAccessOptions
 */
export interface UpdateSmtpAccessOptions {
  /**
   * SMTP username for login
   * @type {string}
   * @memberof UpdateSmtpAccessOptions
   */
  smtpUsername?: string | null;
  /**
   * SMTP password for login
   * @type {string}
   * @memberof UpdateSmtpAccessOptions
   */
  smtpPassword?: string | null;
}

export function UpdateSmtpAccessOptionsFromJSON(
  json: any
): UpdateSmtpAccessOptions {
  return UpdateSmtpAccessOptionsFromJSONTyped(json, false);
}

export function UpdateSmtpAccessOptionsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UpdateSmtpAccessOptions {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    smtpUsername: !exists(json, 'smtpUsername')
      ? undefined
      : json['smtpUsername'],
    smtpPassword: !exists(json, 'smtpPassword')
      ? undefined
      : json['smtpPassword'],
  };
}

export function UpdateSmtpAccessOptionsToJSON(
  value?: UpdateSmtpAccessOptions | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    smtpUsername: value.smtpUsername,
    smtpPassword: value.smtpPassword,
  };
}