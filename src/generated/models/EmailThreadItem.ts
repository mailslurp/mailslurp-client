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
 * @interface EmailThreadItem
 */
export interface EmailThreadItem {
  /**
   *
   * @type {string}
   * @memberof EmailThreadItem
   */
  itemType: EmailThreadItemItemTypeEnum;
  /**
   *
   * @type {string}
   * @memberof EmailThreadItem
   */
  entityId: string;
  /**
   *
   * @type {string}
   * @memberof EmailThreadItem
   */
  bodyExcerpt?: string | null;
  /**
   *
   * @type {string}
   * @memberof EmailThreadItem
   */
  textExcerpt?: string | null;
  /**
   *
   * @type {string}
   * @memberof EmailThreadItem
   */
  subject?: string | null;
  /**
   *
   * @type {Array<string>}
   * @memberof EmailThreadItem
   */
  to: Array<string>;
  /**
   *
   * @type {string}
   * @memberof EmailThreadItem
   */
  from?: string | null;
  /**
   *
   * @type {Array<string>}
   * @memberof EmailThreadItem
   */
  bcc?: Array<string> | null;
  /**
   *
   * @type {Array<string>}
   * @memberof EmailThreadItem
   */
  cc?: Array<string> | null;
  /**
   *
   * @type {Array<string>}
   * @memberof EmailThreadItem
   */
  attachments?: Array<string> | null;
  /**
   *
   * @type {Date}
   * @memberof EmailThreadItem
   */
  createdAt: Date;
  /**
   *
   * @type {boolean}
   * @memberof EmailThreadItem
   */
  read: boolean;
  /**
   *
   * @type {string}
   * @memberof EmailThreadItem
   */
  inReplyTo?: string | null;
  /**
   *
   * @type {string}
   * @memberof EmailThreadItem
   */
  messageId?: string | null;
  /**
   *
   * @type {string}
   * @memberof EmailThreadItem
   */
  threadId?: string | null;
  /**
   *
   * @type {Sender}
   * @memberof EmailThreadItem
   */
  sender?: Sender | null;
  /**
   *
   * @type {EmailRecipients}
   * @memberof EmailThreadItem
   */
  recipients?: EmailRecipients | null;
}

/**
 * @export
 * @enum {string}
 */
export enum EmailThreadItemItemTypeEnum {
  RECEIVED_EMAIL = 'RECEIVED_EMAIL',
  SENT_EMAIL = 'SENT_EMAIL',
}

export function EmailThreadItemFromJSON(json: any): EmailThreadItem {
  return EmailThreadItemFromJSONTyped(json, false);
}

export function EmailThreadItemFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): EmailThreadItem {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    itemType: json['itemType'],
    entityId: json['entityId'],
    bodyExcerpt: !exists(json, 'bodyExcerpt') ? undefined : json['bodyExcerpt'],
    textExcerpt: !exists(json, 'textExcerpt') ? undefined : json['textExcerpt'],
    subject: !exists(json, 'subject') ? undefined : json['subject'],
    to: json['to'],
    from: !exists(json, 'from') ? undefined : json['from'],
    bcc: !exists(json, 'bcc') ? undefined : json['bcc'],
    cc: !exists(json, 'cc') ? undefined : json['cc'],
    attachments: !exists(json, 'attachments') ? undefined : json['attachments'],
    createdAt: new Date(json['createdAt']),
    read: json['read'],
    inReplyTo: !exists(json, 'inReplyTo') ? undefined : json['inReplyTo'],
    messageId: !exists(json, 'messageId') ? undefined : json['messageId'],
    threadId: !exists(json, 'threadId') ? undefined : json['threadId'],
    sender: !exists(json, 'sender')
      ? undefined
      : SenderFromJSON(json['sender']),
    recipients: !exists(json, 'recipients')
      ? undefined
      : EmailRecipientsFromJSON(json['recipients']),
  };
}

export function EmailThreadItemToJSON(value?: EmailThreadItem | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    itemType: value.itemType,
    entityId: value.entityId,
    bodyExcerpt: value.bodyExcerpt,
    textExcerpt: value.textExcerpt,
    subject: value.subject,
    to: value.to,
    from: value.from,
    bcc: value.bcc,
    cc: value.cc,
    attachments: value.attachments,
    createdAt: value.createdAt.toISOString(),
    read: value.read,
    inReplyTo: value.inReplyTo,
    messageId: value.messageId,
    threadId: value.threadId,
    sender: SenderToJSON(value.sender),
    recipients: EmailRecipientsToJSON(value.recipients),
  };
}
