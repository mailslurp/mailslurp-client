/* tslint:disable */
/* eslint-disable */
/**
 * MailSlurp API
 * MailSlurp is an API for sending and receiving emails from dynamically allocated email addresses. It\'s designed for developers and QA teams to test applications, process inbound emails, send templated notifications, attachments, and more.  ## Resources  - [Homepage](https://www.mailslurp.com) - Get an [API KEY](https://app.mailslurp.com/sign-up/) - Generated [SDK Clients](https://docs.mailslurp.com/) - [Examples](https://github.com/mailslurp/examples) repository
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
   * ID of the email entity
   * @type {string}
   * @memberof Email
   */
  id: string;
  /**
   * ID of user that email belongs to
   * @type {string}
   * @memberof Email
   */
  userId: string;
  /**
   * ID of the inbox that received the email
   * @type {string}
   * @memberof Email
   */
  inboxId: string;
  /**
   * ID of the domain that received the email
   * @type {string}
   * @memberof Email
   */
  domainId?: string | null;
  /**
   * List of `To` recipient email addresses that the email was addressed to. See recipients object for names.
   * @type {Array<string>}
   * @memberof Email
   */
  to: Array<string>;
  /**
   * Who the email was sent from. An email address - see fromName for the sender name.
   * @type {string}
   * @memberof Email
   */
  from?: string | null;
  /**
   *
   * @type {Sender}
   * @memberof Email
   */
  sender?: Sender | null;
  /**
   *
   * @type {EmailRecipients}
   * @memberof Email
   */
  recipients?: EmailRecipients | null;
  /**
   * The `replyTo` field on the received email message
   * @type {string}
   * @memberof Email
   */
  replyTo?: string | null;
  /**
   * List of `CC` recipients email addresses that the email was addressed to. See recipients object for names.
   * @type {Array<string>}
   * @memberof Email
   */
  cc?: Array<string> | null;
  /**
   * List of `BCC` recipients email addresses that the email was addressed to. See recipients object for names.
   * @type {Array<string>}
   * @memberof Email
   */
  bcc?: Array<string> | null;
  /**
   * Collection of SMTP headers attached to email
   * @type {{ [key: string]: string; }}
   * @memberof Email
   */
  headers?: { [key: string]: string } | null;
  /**
   * Multi-value map of SMTP headers attached to email
   * @type {{ [key: string]: Array<string>; }}
   * @memberof Email
   */
  headersMap?: { [key: string]: Array<string> } | null;
  /**
   * List of IDs of attachments found in the email. Use these IDs with the Inbox and Email Controllers to download attachments and attachment meta data such as filesize, name, extension.
   * @type {Array<string>}
   * @memberof Email
   */
  attachments?: Array<string> | null;
  /**
   * The subject line of the email message as specified by SMTP subject header
   * @type {string}
   * @memberof Email
   */
  subject?: string | null;
  /**
   * The body of the email message as text parsed from the SMTP message body (does not include attachments). Fetch the raw content to access the SMTP message and use the attachments property to access attachments. The body is stored separately to the email entity so the body is not returned in paginated results only in full single email or wait requests.
   * @type {string}
   * @memberof Email
   */
  body?: string | null;
  /**
   * An excerpt of the body of the email message for quick preview .
   * @type {string}
   * @memberof Email
   */
  bodyExcerpt?: string | null;
  /**
   * A hash signature of the email message using MD5. Useful for comparing emails without fetching full body.
   * @type {string}
   * @memberof Email
   */
  bodyMD5Hash?: string | null;
  /**
   * Is the email body content type HTML?
   * @type {boolean}
   * @memberof Email
   */
  isHTML?: boolean | null;
  /**
   * Detected character set of the email body such as UTF-8
   * @type {string}
   * @memberof Email
   */
  charset?: string | null;
  /**
   *
   * @type {EmailAnalysis}
   * @memberof Email
   */
  analysis?: EmailAnalysis | null;
  /**
   * When was the email received by MailSlurp
   * @type {Date}
   * @memberof Email
   */
  createdAt: Date;
  /**
   * When was the email last updated
   * @type {Date}
   * @memberof Email
   */
  updatedAt: Date;
  /**
   * Read flag. Has the email ever been viewed in the dashboard or fetched via the API with a hydrated body? If so the email is marked as read. Paginated results do not affect read status. Read status is different to email opened event as it depends on your own account accessing the email. Email opened is determined by tracking pixels sent to other uses if enable during sending. You can listened for both email read and email opened events using webhooks.
   * @type {boolean}
   * @memberof Email
   */
  read: boolean;
  /**
   * Can the email be accessed by organization team members
   * @type {boolean}
   * @memberof Email
   */
  teamAccess: boolean;
  /**
   *
   * @type {boolean}
   * @memberof Email
   */
  html?: boolean;
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
    id: json['id'],
    userId: json['userId'],
    inboxId: json['inboxId'],
    domainId: !exists(json, 'domainId') ? undefined : json['domainId'],
    to: json['to'],
    from: !exists(json, 'from') ? undefined : json['from'],
    sender: !exists(json, 'sender')
      ? undefined
      : SenderFromJSON(json['sender']),
    recipients: !exists(json, 'recipients')
      ? undefined
      : EmailRecipientsFromJSON(json['recipients']),
    replyTo: !exists(json, 'replyTo') ? undefined : json['replyTo'],
    cc: !exists(json, 'cc') ? undefined : json['cc'],
    bcc: !exists(json, 'bcc') ? undefined : json['bcc'],
    headers: !exists(json, 'headers') ? undefined : json['headers'],
    headersMap: !exists(json, 'headersMap') ? undefined : json['headersMap'],
    attachments: !exists(json, 'attachments') ? undefined : json['attachments'],
    subject: !exists(json, 'subject') ? undefined : json['subject'],
    body: !exists(json, 'body') ? undefined : json['body'],
    bodyExcerpt: !exists(json, 'bodyExcerpt') ? undefined : json['bodyExcerpt'],
    bodyMD5Hash: !exists(json, 'bodyMD5Hash') ? undefined : json['bodyMD5Hash'],
    isHTML: !exists(json, 'isHTML') ? undefined : json['isHTML'],
    charset: !exists(json, 'charset') ? undefined : json['charset'],
    analysis: !exists(json, 'analysis')
      ? undefined
      : EmailAnalysisFromJSON(json['analysis']),
    createdAt: new Date(json['createdAt']),
    updatedAt: new Date(json['updatedAt']),
    read: json['read'],
    teamAccess: json['teamAccess'],
    html: !exists(json, 'html') ? undefined : json['html'],
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
    id: value.id,
    userId: value.userId,
    inboxId: value.inboxId,
    domainId: value.domainId,
    to: value.to,
    from: value.from,
    sender: SenderToJSON(value.sender),
    recipients: EmailRecipientsToJSON(value.recipients),
    replyTo: value.replyTo,
    cc: value.cc,
    bcc: value.bcc,
    headers: value.headers,
    headersMap: value.headersMap,
    attachments: value.attachments,
    subject: value.subject,
    body: value.body,
    bodyExcerpt: value.bodyExcerpt,
    bodyMD5Hash: value.bodyMD5Hash,
    isHTML: value.isHTML,
    charset: value.charset,
    analysis: EmailAnalysisToJSON(value.analysis),
    createdAt: value.createdAt.toISOString(),
    updatedAt: value.updatedAt.toISOString(),
    read: value.read,
    teamAccess: value.teamAccess,
    html: value.html,
  };
}
