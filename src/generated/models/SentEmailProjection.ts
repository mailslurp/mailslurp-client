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
 * @interface SentEmailProjection
 */
export interface SentEmailProjection {
  /**
   *
   * @type {string}
   * @memberof SentEmailProjection
   */
  subject?: string | null;
  /**
   *
   * @type {Date}
   * @memberof SentEmailProjection
   */
  createdAt: Date;
  /**
   *
   * @type {string}
   * @memberof SentEmailProjection
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof SentEmailProjection
   */
  from?: string | null;
  /**
   *
   * @type {Sender}
   * @memberof SentEmailProjection
   */
  sender?: Sender | null;
  /**
   *
   * @type {EmailRecipients}
   * @memberof SentEmailProjection
   */
  recipients?: EmailRecipients | null;
  /**
   *
   * @type {string}
   * @memberof SentEmailProjection
   */
  userId: string;
  /**
   *
   * @type {Array<string>}
   * @memberof SentEmailProjection
   */
  attachments?: Array<string> | null;
  /**
   *
   * @type {string}
   * @memberof SentEmailProjection
   */
  inboxId: string;
  /**
   *
   * @type {Array<string>}
   * @memberof SentEmailProjection
   */
  to: Array<string>;
  /**
   *
   * @type {Array<string>}
   * @memberof SentEmailProjection
   */
  cc: Array<string>;
  /**
   *
   * @type {Array<string>}
   * @memberof SentEmailProjection
   */
  bcc: Array<string>;
  /**
   *
   * @type {string}
   * @memberof SentEmailProjection
   */
  messageId?: string | null;
  /**
   *
   * @type {string}
   * @memberof SentEmailProjection
   */
  inReplyTo?: string | null;
  /**
   *
   * @type {string}
   * @memberof SentEmailProjection
   */
  bodyExcerpt?: string | null;
  /**
   *
   * @type {string}
   * @memberof SentEmailProjection
   */
  textExcerpt?: string | null;
  /**
   *
   * @type {string}
   * @memberof SentEmailProjection
   */
  bodyMD5Hash?: string | null;
  /**
   *
   * @type {boolean}
   * @memberof SentEmailProjection
   */
  virtualSend: boolean;
  /**
   *
   * @type {string}
   * @memberof SentEmailProjection
   */
  threadId?: string | null;
}

export function SentEmailProjectionFromJSON(json: any): SentEmailProjection {
  return SentEmailProjectionFromJSONTyped(json, false);
}

export function SentEmailProjectionFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): SentEmailProjection {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    subject: !exists(json, 'subject') ? undefined : json['subject'],
    createdAt: new Date(json['createdAt']),
    id: json['id'],
    from: !exists(json, 'from') ? undefined : json['from'],
    sender: !exists(json, 'sender')
      ? undefined
      : SenderFromJSON(json['sender']),
    recipients: !exists(json, 'recipients')
      ? undefined
      : EmailRecipientsFromJSON(json['recipients']),
    userId: json['userId'],
    attachments: !exists(json, 'attachments') ? undefined : json['attachments'],
    inboxId: json['inboxId'],
    to: json['to'],
    cc: json['cc'],
    bcc: json['bcc'],
    messageId: !exists(json, 'messageId') ? undefined : json['messageId'],
    inReplyTo: !exists(json, 'inReplyTo') ? undefined : json['inReplyTo'],
    bodyExcerpt: !exists(json, 'bodyExcerpt') ? undefined : json['bodyExcerpt'],
    textExcerpt: !exists(json, 'textExcerpt') ? undefined : json['textExcerpt'],
    bodyMD5Hash: !exists(json, 'bodyMD5Hash') ? undefined : json['bodyMD5Hash'],
    virtualSend: json['virtualSend'],
    threadId: !exists(json, 'threadId') ? undefined : json['threadId'],
  };
}

export function SentEmailProjectionToJSON(
  value?: SentEmailProjection | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    subject: value.subject,
    createdAt: value.createdAt.toISOString(),
    id: value.id,
    from: value.from,
    sender: SenderToJSON(value.sender),
    recipients: EmailRecipientsToJSON(value.recipients),
    userId: value.userId,
    attachments: value.attachments,
    inboxId: value.inboxId,
    to: value.to,
    cc: value.cc,
    bcc: value.bcc,
    messageId: value.messageId,
    inReplyTo: value.inReplyTo,
    bodyExcerpt: value.bodyExcerpt,
    textExcerpt: value.textExcerpt,
    bodyMD5Hash: value.bodyMD5Hash,
    virtualSend: value.virtualSend,
    threadId: value.threadId,
  };
}
