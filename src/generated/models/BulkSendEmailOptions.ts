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
import {
  SendEmailOptions,
  SendEmailOptionsFromJSON,
  SendEmailOptionsFromJSONTyped,
  SendEmailOptionsToJSON,
} from './';

/**
 * Options for bulk sending an email from multiple addresses. See regular `sendEmail` methods for more information.
 * @export
 * @interface BulkSendEmailOptions
 */
export interface BulkSendEmailOptions {
  /**
   * Inboxes to send the email from
   * @type {Array<string>}
   * @memberof BulkSendEmailOptions
   */
  inboxIds: Array<string>;
  /**
   *
   * @type {SendEmailOptions}
   * @memberof BulkSendEmailOptions
   */
  sendEmailOptions: SendEmailOptions;
}

export function BulkSendEmailOptionsFromJSON(json: any): BulkSendEmailOptions {
  return BulkSendEmailOptionsFromJSONTyped(json, false);
}

export function BulkSendEmailOptionsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): BulkSendEmailOptions {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    inboxIds: json['inboxIds'],
    sendEmailOptions: SendEmailOptionsFromJSON(json['sendEmailOptions']),
  };
}

export function BulkSendEmailOptionsToJSON(
  value?: BulkSendEmailOptions | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    inboxIds: value.inboxIds,
    sendEmailOptions: SendEmailOptionsToJSON(value.sendEmailOptions),
  };
}
