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
/**
 * Sent email details
 * @export
 * @interface SentEmailDto
 */
export interface SentEmailDto {
  /**
   * ID of sent email
   * @type {string}
   * @memberof SentEmailDto
   */
  id: string;
  /**
   * User ID
   * @type {string}
   * @memberof SentEmailDto
   */
  userId: string;
  /**
   * Inbox ID email was sent from
   * @type {string}
   * @memberof SentEmailDto
   */
  inboxId: string;
  /**
   * Domain ID
   * @type {string}
   * @memberof SentEmailDto
   */
  domainId?: string;
  /**
   * Recipients email was sent to
   * @type {Array<string>}
   * @memberof SentEmailDto
   */
  to?: Array<string>;
  /**
   *
   * @type {string}
   * @memberof SentEmailDto
   */
  from?: string;
  /**
   *
   * @type {string}
   * @memberof SentEmailDto
   */
  replyTo?: string;
  /**
   *
   * @type {Array<string>}
   * @memberof SentEmailDto
   */
  cc?: Array<string>;
  /**
   *
   * @type {Array<string>}
   * @memberof SentEmailDto
   */
  bcc?: Array<string>;
  /**
   * Array of IDs of attachments that were sent with this email
   * @type {Array<string>}
   * @memberof SentEmailDto
   */
  attachments?: Array<string>;
  /**
   *
   * @type {string}
   * @memberof SentEmailDto
   */
  subject?: string;
  /**
   * MD5 Hash
   * @type {string}
   * @memberof SentEmailDto
   */
  bodyMD5Hash?: string;
  /**
   *
   * @type {string}
   * @memberof SentEmailDto
   */
  body?: string;
  /**
   *
   * @type {Array<string>}
   * @memberof SentEmailDto
   */
  toContacts?: Array<string>;
  /**
   *
   * @type {string}
   * @memberof SentEmailDto
   */
  toGroup?: string;
  /**
   *
   * @type {string}
   * @memberof SentEmailDto
   */
  charset?: string;
  /**
   *
   * @type {boolean}
   * @memberof SentEmailDto
   */
  isHTML?: boolean;
  /**
   *
   * @type {Date}
   * @memberof SentEmailDto
   */
  sentAt: Date;
  /**
   *
   * @type {Array<string>}
   * @memberof SentEmailDto
   */
  pixelIds?: Array<string>;
  /**
   *
   * @type {string}
   * @memberof SentEmailDto
   */
  messageId?: string;
  /**
   *
   * @type {Array<string>}
   * @memberof SentEmailDto
   */
  messageIds?: Array<string>;
  /**
   *
   * @type {boolean}
   * @memberof SentEmailDto
   */
  virtualSend?: boolean;
  /**
   *
   * @type {string}
   * @memberof SentEmailDto
   */
  templateId?: string;
  /**
   *
   * @type {{ [key: string]: object; }}
   * @memberof SentEmailDto
   */
  templateVariables?: { [key: string]: object };
  /**
   *
   * @type {boolean}
   * @memberof SentEmailDto
   */
  html?: boolean;
}

export function SentEmailDtoFromJSON(json: any): SentEmailDto {
  return SentEmailDtoFromJSONTyped(json, false);
}

export function SentEmailDtoFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): SentEmailDto {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: json['id'],
    userId: json['userId'],
    inboxId: json['inboxId'],
    domainId: !exists(json, 'domainId') ? undefined : json['domainId'],
    to: !exists(json, 'to') ? undefined : json['to'],
    from: !exists(json, 'from') ? undefined : json['from'],
    replyTo: !exists(json, 'replyTo') ? undefined : json['replyTo'],
    cc: !exists(json, 'cc') ? undefined : json['cc'],
    bcc: !exists(json, 'bcc') ? undefined : json['bcc'],
    attachments: !exists(json, 'attachments') ? undefined : json['attachments'],
    subject: !exists(json, 'subject') ? undefined : json['subject'],
    bodyMD5Hash: !exists(json, 'bodyMD5Hash') ? undefined : json['bodyMD5Hash'],
    body: !exists(json, 'body') ? undefined : json['body'],
    toContacts: !exists(json, 'toContacts') ? undefined : json['toContacts'],
    toGroup: !exists(json, 'toGroup') ? undefined : json['toGroup'],
    charset: !exists(json, 'charset') ? undefined : json['charset'],
    isHTML: !exists(json, 'isHTML') ? undefined : json['isHTML'],
    sentAt: new Date(json['sentAt']),
    pixelIds: !exists(json, 'pixelIds') ? undefined : json['pixelIds'],
    messageId: !exists(json, 'messageId') ? undefined : json['messageId'],
    messageIds: !exists(json, 'messageIds') ? undefined : json['messageIds'],
    virtualSend: !exists(json, 'virtualSend') ? undefined : json['virtualSend'],
    templateId: !exists(json, 'templateId') ? undefined : json['templateId'],
    templateVariables: !exists(json, 'templateVariables')
      ? undefined
      : json['templateVariables'],
    html: !exists(json, 'html') ? undefined : json['html'],
  };
}

export function SentEmailDtoToJSON(value?: SentEmailDto | null): any {
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
    replyTo: value.replyTo,
    cc: value.cc,
    bcc: value.bcc,
    attachments: value.attachments,
    subject: value.subject,
    bodyMD5Hash: value.bodyMD5Hash,
    body: value.body,
    toContacts: value.toContacts,
    toGroup: value.toGroup,
    charset: value.charset,
    isHTML: value.isHTML,
    sentAt: value.sentAt.toISOString(),
    pixelIds: value.pixelIds,
    messageId: value.messageId,
    messageIds: value.messageIds,
    virtualSend: value.virtualSend,
    templateId: value.templateId,
    templateVariables: value.templateVariables,
    html: value.html,
  };
}
