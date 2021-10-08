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
  AttachmentMetaData,
  AttachmentMetaDataFromJSON,
  AttachmentMetaDataFromJSONTyped,
  AttachmentMetaDataToJSON,
} from './';

/**
 * NEW_EMAIL webhook payload. Sent to your webhook url endpoint via HTTP POST when an email is received by the inbox that your webhook is attached to. Use the email ID to fetch the full email body or attachments.
 * @export
 * @interface WebhookNewEmailPayload
 */
export interface WebhookNewEmailPayload {
  /**
   * List of attachment meta data objects if attachments present
   * @type {Array<AttachmentMetaData>}
   * @memberof WebhookNewEmailPayload
   */
  attachmentMetaDatas?: Array<AttachmentMetaData>;
  /**
   * List of `BCC` recipients email addresses that the email was addressed to. See recipients object for names.
   * @type {Array<string>}
   * @memberof WebhookNewEmailPayload
   */
  bcc?: Array<string>;
  /**
   * List of `CC` recipients email addresses that the email was addressed to. See recipients object for names.
   * @type {Array<string>}
   * @memberof WebhookNewEmailPayload
   */
  cc?: Array<string>;
  /**
   * Date time of event creation
   * @type {Date}
   * @memberof WebhookNewEmailPayload
   */
  createdAt?: Date;
  /**
   * ID of the email that was received. Use this ID for fetching the email with the `EmailController`.
   * @type {string}
   * @memberof WebhookNewEmailPayload
   */
  emailId?: string;
  /**
   * Name of the event type webhook is being triggered for.
   * @type {string}
   * @memberof WebhookNewEmailPayload
   */
  eventName?: WebhookNewEmailPayloadEventNameEnum;
  /**
   * Who the email was sent from. An email address - see fromName for the sender name.
   * @type {string}
   * @memberof WebhookNewEmailPayload
   */
  from?: string;
  /**
   * Id of the inbox that received an email
   * @type {string}
   * @memberof WebhookNewEmailPayload
   */
  inboxId?: string;
  /**
   * Idempotent message ID. Store this ID locally or in a database to prevent message duplication.
   * @type {string}
   * @memberof WebhookNewEmailPayload
   */
  messageId?: string;
  /**
   * The subject line of the email message as specified by SMTP subject header
   * @type {string}
   * @memberof WebhookNewEmailPayload
   */
  subject?: string;
  /**
   * List of `To` recipient email addresses that the email was addressed to. See recipients object for names.
   * @type {Array<string>}
   * @memberof WebhookNewEmailPayload
   */
  to?: Array<string>;
  /**
   * ID of webhook entity being triggered
   * @type {string}
   * @memberof WebhookNewEmailPayload
   */
  webhookId?: string;
  /**
   * Name of the webhook being triggered
   * @type {string}
   * @memberof WebhookNewEmailPayload
   */
  webhookName?: string;
}

/**
 * @export
 * @enum {string}
 */
export enum WebhookNewEmailPayloadEventNameEnum {
  EMAIL_RECEIVED = 'EMAIL_RECEIVED',
  NEW_EMAIL = 'NEW_EMAIL',
  NEW_CONTACT = 'NEW_CONTACT',
  NEW_ATTACHMENT = 'NEW_ATTACHMENT',
  EMAIL_OPENED = 'EMAIL_OPENED',
  EMAIL_READ = 'EMAIL_READ',
}

export function WebhookNewEmailPayloadFromJSON(
  json: any
): WebhookNewEmailPayload {
  return WebhookNewEmailPayloadFromJSONTyped(json, false);
}

export function WebhookNewEmailPayloadFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): WebhookNewEmailPayload {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    attachmentMetaDatas: !exists(json, 'attachmentMetaDatas')
      ? undefined
      : (json['attachmentMetaDatas'] as Array<any>).map(
          AttachmentMetaDataFromJSON
        ),
    bcc: !exists(json, 'bcc') ? undefined : json['bcc'],
    cc: !exists(json, 'cc') ? undefined : json['cc'],
    createdAt: !exists(json, 'createdAt')
      ? undefined
      : new Date(json['createdAt']),
    emailId: !exists(json, 'emailId') ? undefined : json['emailId'],
    eventName: !exists(json, 'eventName') ? undefined : json['eventName'],
    from: !exists(json, 'from') ? undefined : json['from'],
    inboxId: !exists(json, 'inboxId') ? undefined : json['inboxId'],
    messageId: !exists(json, 'messageId') ? undefined : json['messageId'],
    subject: !exists(json, 'subject') ? undefined : json['subject'],
    to: !exists(json, 'to') ? undefined : json['to'],
    webhookId: !exists(json, 'webhookId') ? undefined : json['webhookId'],
    webhookName: !exists(json, 'webhookName') ? undefined : json['webhookName'],
  };
}

export function WebhookNewEmailPayloadToJSON(
  value?: WebhookNewEmailPayload | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    attachmentMetaDatas:
      value.attachmentMetaDatas === undefined
        ? undefined
        : (value.attachmentMetaDatas as Array<any>).map(
            AttachmentMetaDataToJSON
          ),
    bcc: value.bcc,
    cc: value.cc,
    createdAt:
      value.createdAt === undefined ? undefined : value.createdAt.toISOString(),
    emailId: value.emailId,
    eventName: value.eventName,
    from: value.from,
    inboxId: value.inboxId,
    messageId: value.messageId,
    subject: value.subject,
    to: value.to,
    webhookId: value.webhookId,
    webhookName: value.webhookName,
  };
}