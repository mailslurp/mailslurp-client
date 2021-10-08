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
import {
  EmailAnalysis,
  EmailAnalysisFromJSON,
  EmailAnalysisFromJSONTyped,
  EmailAnalysisToJSON,
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
 * Email entity (also known as EmailDto). When an SMTP email message is received by MailSlurp it is parsed. The body and attachments are written to disk and the fields such as to, from, subject etc are stored in a database. The `body` contains the email content. If you want the original SMTP message see the `getRawEmail` endpoints. The attachments can be fetched using the AttachmentController
 * @export
 * @interface Email
 */
export interface Email {
  /**
   *
   * @type {EmailAnalysis}
   * @memberof Email
   */
  analysis?: EmailAnalysis;
  /**
   * List of IDs of attachments found in the email. Use these IDs with the Inbox and Email Controllers to download attachments and attachment meta data such as filesize, name, extension.
   * @type {Array<string>}
   * @memberof Email
   */
  attachments?: Array<string>;
  /**
   * List of `BCC` recipients email addresses that the email was addressed to. See recipients object for names.
   * @type {Array<string>}
   * @memberof Email
   */
  bcc?: Array<string>;
  /**
   * The body of the email message as text parsed from the SMTP message body (does not include attachments). Fetch the raw content to access the SMTP message and use the attachments property to access attachments. The body is stored separately to the email entity so the body is not returned in paginated results only in full single email or wait requests.
   * @type {string}
   * @memberof Email
   */
  body?: string;
  /**
   * An excerpt of the body of the email message for quick preview .
   * @type {string}
   * @memberof Email
   */
  bodyExcerpt?: string;
  /**
   * A hash signature of the email message using MD5. Useful for comparing emails without fetching full body.
   * @type {string}
   * @memberof Email
   */
  bodyMD5Hash?: string;
  /**
   * List of `CC` recipients email addresses that the email was addressed to. See recipients object for names.
   * @type {Array<string>}
   * @memberof Email
   */
  cc?: Array<string>;
  /**
   * Detected character set of the email body such as UTF-8
   * @type {string}
   * @memberof Email
   */
  charset?: string;
  /**
   * When was the email received by MailSlurp
   * @type {Date}
   * @memberof Email
   */
  createdAt?: Date;
  /**
   * Who the email was sent from. An email address - see fromName for the sender name.
   * @type {string}
   * @memberof Email
   */
  from?: string;
  /**
   * Collection of SMTP headers attached to email
   * @type {{ [key: string]: string; }}
   * @memberof Email
   */
  headers?: { [key: string]: string };
  /**
   * ID of the email entity
   * @type {string}
   * @memberof Email
   */
  id?: string;
  /**
   * ID of the inbox that received the email
   * @type {string}
   * @memberof Email
   */
  inboxId?: string;
  /**
   * Is the email body HTML
   * @type {boolean}
   * @memberof Email
   */
  isHTML?: boolean;
  /**
   * Read flag. Has the email ever been viewed in the dashboard or fetched via the API with a hydrated body? If so the email is marked as read. Paginated results do not affect read status. Read status is different to email opened event as it depends on your own account accessing the email. Email opened is determined by tracking pixels sent to other uses if enable during sending. You can listened for both email read and email opened events using webhooks.
   * @type {boolean}
   * @memberof Email
   */
  read?: boolean;
  /**
   *
   * @type {EmailRecipients}
   * @memberof Email
   */
  recipients?: EmailRecipients;
  /**
   * The `replyTo` field on the received email message
   * @type {string}
   * @memberof Email
   */
  replyTo?: string;
  /**
   *
   * @type {Sender}
   * @memberof Email
   */
  sender?: Sender;
  /**
   * The subject line of the email message as specified by SMTP subject header
   * @type {string}
   * @memberof Email
   */
  subject?: string;
  /**
   * Can the email be accessed by organization team members
   * @type {boolean}
   * @memberof Email
   */
  teamAccess?: boolean;
  /**
   * List of `To` recipient email addresses that the email was addressed to. See recipients object for names.
   * @type {Array<string>}
   * @memberof Email
   */
  to?: Array<string>;
  /**
   * When was the email last updated
   * @type {Date}
   * @memberof Email
   */
  updatedAt?: Date;
  /**
   * ID of user that email belongs to
   * @type {string}
   * @memberof Email
   */
  userId?: string;
}

export function EmailFromJSON(json: any): Email {
  return EmailFromJSONTyped(json, false);
}

export function EmailFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): Email {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    analysis: !exists(json, 'analysis')
      ? undefined
      : EmailAnalysisFromJSON(json['analysis']),
    attachments: !exists(json, 'attachments') ? undefined : json['attachments'],
    bcc: !exists(json, 'bcc') ? undefined : json['bcc'],
    body: !exists(json, 'body') ? undefined : json['body'],
    bodyExcerpt: !exists(json, 'bodyExcerpt') ? undefined : json['bodyExcerpt'],
    bodyMD5Hash: !exists(json, 'bodyMD5Hash') ? undefined : json['bodyMD5Hash'],
    cc: !exists(json, 'cc') ? undefined : json['cc'],
    charset: !exists(json, 'charset') ? undefined : json['charset'],
    createdAt: !exists(json, 'createdAt')
      ? undefined
      : new Date(json['createdAt']),
    from: !exists(json, 'from') ? undefined : json['from'],
    headers: !exists(json, 'headers') ? undefined : json['headers'],
    id: !exists(json, 'id') ? undefined : json['id'],
    inboxId: !exists(json, 'inboxId') ? undefined : json['inboxId'],
    isHTML: !exists(json, 'isHTML') ? undefined : json['isHTML'],
    read: !exists(json, 'read') ? undefined : json['read'],
    recipients: !exists(json, 'recipients')
      ? undefined
      : EmailRecipientsFromJSON(json['recipients']),
    replyTo: !exists(json, 'replyTo') ? undefined : json['replyTo'],
    sender: !exists(json, 'sender')
      ? undefined
      : SenderFromJSON(json['sender']),
    subject: !exists(json, 'subject') ? undefined : json['subject'],
    teamAccess: !exists(json, 'teamAccess') ? undefined : json['teamAccess'],
    to: !exists(json, 'to') ? undefined : json['to'],
    updatedAt: !exists(json, 'updatedAt')
      ? undefined
      : new Date(json['updatedAt']),
    userId: !exists(json, 'userId') ? undefined : json['userId'],
  };
}

export function EmailToJSON(value?: Email | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    analysis: EmailAnalysisToJSON(value.analysis),
    attachments: value.attachments,
    bcc: value.bcc,
    body: value.body,
    bodyExcerpt: value.bodyExcerpt,
    bodyMD5Hash: value.bodyMD5Hash,
    cc: value.cc,
    charset: value.charset,
    createdAt:
      value.createdAt === undefined ? undefined : value.createdAt.toISOString(),
    from: value.from,
    headers: value.headers,
    id: value.id,
    inboxId: value.inboxId,
    isHTML: value.isHTML,
    read: value.read,
    recipients: EmailRecipientsToJSON(value.recipients),
    replyTo: value.replyTo,
    sender: SenderToJSON(value.sender),
    subject: value.subject,
    teamAccess: value.teamAccess,
    to: value.to,
    updatedAt:
      value.updatedAt === undefined ? undefined : value.updatedAt.toISOString(),
    userId: value.userId,
  };
}
