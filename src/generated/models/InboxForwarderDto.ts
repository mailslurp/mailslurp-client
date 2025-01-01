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
 * Inbox forwarder. Describes how an inbox will forward matching emails to designated recipients.
 * @export
 * @interface InboxForwarderDto
 */
export interface InboxForwarderDto {
  /**
   *
   * @type {string}
   * @memberof InboxForwarderDto
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof InboxForwarderDto
   */
  inboxId?: string | null;
  /**
   * Name of inbox forwarder
   * @type {string}
   * @memberof InboxForwarderDto
   */
  name?: string | null;
  /**
   * Which field to match against
   * @type {string}
   * @memberof InboxForwarderDto
   */
  field: InboxForwarderDtoFieldEnum;
  /**
   * Wild-card type pattern to apply to field
   * @type {string}
   * @memberof InboxForwarderDto
   */
  match: string;
  /**
   * Who to send forwarded email to
   * @type {Array<string>}
   * @memberof InboxForwarderDto
   */
  forwardToRecipients: Array<string>;
  /**
   *
   * @type {Date}
   * @memberof InboxForwarderDto
   */
  createdAt: Date;
}

/**
 * @export
 * @enum {string}
 */
export enum InboxForwarderDtoFieldEnum {
  RECIPIENTS = 'RECIPIENTS',
  SENDER = 'SENDER',
  SUBJECT = 'SUBJECT',
  ATTACHMENTS = 'ATTACHMENTS',
}

export function InboxForwarderDtoFromJSON(json: any): InboxForwarderDto {
  return InboxForwarderDtoFromJSONTyped(json, false);
}

export function InboxForwarderDtoFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): InboxForwarderDto {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: json['id'],
    inboxId: !exists(json, 'inboxId') ? undefined : json['inboxId'],
    name: !exists(json, 'name') ? undefined : json['name'],
    field: json['field'],
    match: json['match'],
    forwardToRecipients: json['forwardToRecipients'],
    createdAt: new Date(json['createdAt']),
  };
}

export function InboxForwarderDtoToJSON(value?: InboxForwarderDto | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    inboxId: value.inboxId,
    name: value.name,
    field: value.field,
    match: value.match,
    forwardToRecipients: value.forwardToRecipients,
    createdAt: value.createdAt.toISOString(),
  };
}
