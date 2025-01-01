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
 * BOUNCE webhook payload. Sent to your webhook url endpoint via HTTP POST when an email bounced or was rejected by a recipient. Save the recipients to a ban list on your server and avoid emailing them again. It is recommended you also listen to the BOUNCE_RECIPIENT payload.
 * @export
 * @interface WebhookBouncePayload
 */
export interface WebhookBouncePayload {
  /**
   * Idempotent message ID. Store this ID locally or in a database to prevent message duplication.
   * @type {string}
   * @memberof WebhookBouncePayload
   */
  messageId: string;
  /**
   * ID of webhook entity being triggered
   * @type {string}
   * @memberof WebhookBouncePayload
   */
  webhookId: string;
  /**
   * Name of the event type webhook is being triggered for.
   * @type {string}
   * @memberof WebhookBouncePayload
   */
  eventName: WebhookBouncePayloadEventNameEnum;
  /**
   * Name of the webhook being triggered
   * @type {string}
   * @memberof WebhookBouncePayload
   */
  webhookName?: string | null;
  /**
   * ID of the bounce email record. Use the ID with the bounce controller to view more information
   * @type {string}
   * @memberof WebhookBouncePayload
   */
  bounceId: string;
  /**
   * Email sent to recipients
   * @type {Array<string>}
   * @memberof WebhookBouncePayload
   */
  sentToRecipients?: Array<string> | null;
  /**
   * Sender causing bounce
   * @type {string}
   * @memberof WebhookBouncePayload
   */
  sender: string;
  /**
   * Email addresses that resulted in a bounce or email being rejected. Please save these recipients and avoid emailing them in the future to maintain your reputation.
   * @type {Array<string>}
   * @memberof WebhookBouncePayload
   */
  bounceRecipients?: Array<string> | null;
}

/**
 * @export
 * @enum {string}
 */
export enum WebhookBouncePayloadEventNameEnum {
  EMAIL_RECEIVED = 'EMAIL_RECEIVED',
  NEW_EMAIL = 'NEW_EMAIL',
  NEW_CONTACT = 'NEW_CONTACT',
  NEW_ATTACHMENT = 'NEW_ATTACHMENT',
  EMAIL_OPENED = 'EMAIL_OPENED',
  EMAIL_READ = 'EMAIL_READ',
  DELIVERY_STATUS = 'DELIVERY_STATUS',
  BOUNCE = 'BOUNCE',
  BOUNCE_RECIPIENT = 'BOUNCE_RECIPIENT',
  NEW_SMS = 'NEW_SMS',
  NEW_GUEST_USER = 'NEW_GUEST_USER',
}

export function WebhookBouncePayloadFromJSON(json: any): WebhookBouncePayload {
  return WebhookBouncePayloadFromJSONTyped(json, false);
}

export function WebhookBouncePayloadFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): WebhookBouncePayload {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    messageId: json['messageId'],
    webhookId: json['webhookId'],
    eventName: json['eventName'],
    webhookName: !exists(json, 'webhookName') ? undefined : json['webhookName'],
    bounceId: json['bounceId'],
    sentToRecipients: !exists(json, 'sentToRecipients')
      ? undefined
      : json['sentToRecipients'],
    sender: json['sender'],
    bounceRecipients: !exists(json, 'bounceRecipients')
      ? undefined
      : json['bounceRecipients'],
  };
}

export function WebhookBouncePayloadToJSON(
  value?: WebhookBouncePayload | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    messageId: value.messageId,
    webhookId: value.webhookId,
    eventName: value.eventName,
    webhookName: value.webhookName,
    bounceId: value.bounceId,
    sentToRecipients: value.sentToRecipients,
    sender: value.sender,
    bounceRecipients: value.bounceRecipients,
  };
}
