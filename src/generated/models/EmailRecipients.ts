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
  Recipient,
  RecipientFromJSON,
  RecipientFromJSONTyped,
  RecipientToJSON,
} from './';

/**
 * The `To`,`CC`,`BCC` recipients stored in object form with email address and name accessible.
 * @export
 * @interface EmailRecipients
 */
export interface EmailRecipients {
  /**
   *
   * @type {Array<Recipient>}
   * @memberof EmailRecipients
   */
  to?: Array<Recipient>;
  /**
   *
   * @type {Array<Recipient>}
   * @memberof EmailRecipients
   */
  cc?: Array<Recipient>;
  /**
   *
   * @type {Array<Recipient>}
   * @memberof EmailRecipients
   */
  bcc?: Array<Recipient>;
}

export function EmailRecipientsFromJSON(json: any): EmailRecipients {
  return EmailRecipientsFromJSONTyped(json, false);
}

export function EmailRecipientsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): EmailRecipients {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    to: !exists(json, 'to')
      ? undefined
      : (json['to'] as Array<any>).map(RecipientFromJSON),
    cc: !exists(json, 'cc')
      ? undefined
      : (json['cc'] as Array<any>).map(RecipientFromJSON),
    bcc: !exists(json, 'bcc')
      ? undefined
      : (json['bcc'] as Array<any>).map(RecipientFromJSON),
  };
}

export function EmailRecipientsToJSON(value?: EmailRecipients | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    to:
      value.to === undefined
        ? undefined
        : (value.to as Array<any>).map(RecipientToJSON),
    cc:
      value.cc === undefined
        ? undefined
        : (value.cc as Array<any>).map(RecipientToJSON),
    bcc:
      value.bcc === undefined
        ? undefined
        : (value.bcc as Array<any>).map(RecipientToJSON),
  };
}
