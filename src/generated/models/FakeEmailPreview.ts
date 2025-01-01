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
  EmailRecipients,
  EmailRecipientsFromJSON,
  EmailRecipientsFromJSONTyped,
  EmailRecipientsToJSON,
  Sender,
  SenderFromJSON,
  SenderFromJSONTyped,
  SenderToJSON,
} from './';

/**
 *
 * @export
 * @interface FakeEmailPreview
 */
export interface FakeEmailPreview {
  /**
   *
   * @type {string}
   * @memberof FakeEmailPreview
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof FakeEmailPreview
   */
  emailAddress: string;
  /**
   *
   * @type {Sender}
   * @memberof FakeEmailPreview
   */
  sender?: Sender | null;
  /**
   *
   * @type {EmailRecipients}
   * @memberof FakeEmailPreview
   */
  recipients?: EmailRecipients | null;
  /**
   *
   * @type {boolean}
   * @memberof FakeEmailPreview
   */
  hasAttachments: boolean;
  /**
   *
   * @type {string}
   * @memberof FakeEmailPreview
   */
  subject?: string;
  /**
   *
   * @type {string}
   * @memberof FakeEmailPreview
   */
  preview?: string;
  /**
   *
   * @type {Date}
   * @memberof FakeEmailPreview
   */
  createdAt: Date;
  /**
   *
   * @type {boolean}
   * @memberof FakeEmailPreview
   */
  seen: boolean;
}

export function FakeEmailPreviewFromJSON(json: any): FakeEmailPreview {
  return FakeEmailPreviewFromJSONTyped(json, false);
}

export function FakeEmailPreviewFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): FakeEmailPreview {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: json['id'],
    emailAddress: json['emailAddress'],
    sender: !exists(json, 'sender')
      ? undefined
      : SenderFromJSON(json['sender']),
    recipients: !exists(json, 'recipients')
      ? undefined
      : EmailRecipientsFromJSON(json['recipients']),
    hasAttachments: json['hasAttachments'],
    subject: !exists(json, 'subject') ? undefined : json['subject'],
    preview: !exists(json, 'preview') ? undefined : json['preview'],
    createdAt: new Date(json['createdAt']),
    seen: json['seen'],
  };
}

export function FakeEmailPreviewToJSON(value?: FakeEmailPreview | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    emailAddress: value.emailAddress,
    sender: SenderToJSON(value.sender),
    recipients: EmailRecipientsToJSON(value.recipients),
    hasAttachments: value.hasAttachments,
    subject: value.subject,
    preview: value.preview,
    createdAt: value.createdAt.toISOString(),
    seen: value.seen,
  };
}
