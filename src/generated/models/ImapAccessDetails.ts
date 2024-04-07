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
 * Access details for inbox using IMAP
 * @export
 * @interface ImapAccessDetails
 */
export interface ImapAccessDetails {
  /**
   * IMAP server host domain
   * @type {string}
   * @memberof ImapAccessDetails
   */
  imapServerHost: string;
  /**
   * IMAP server host port
   * @type {number}
   * @memberof ImapAccessDetails
   */
  imapServerPort: number;
  /**
   * IMAP username for login
   * @type {string}
   * @memberof ImapAccessDetails
   */
  imapUsername: string;
  /**
   * IMAP password for login
   * @type {string}
   * @memberof ImapAccessDetails
   */
  imapPassword: string;
  /**
   * IMAP mailbox to SELECT
   * @type {string}
   * @memberof ImapAccessDetails
   */
  imapMailbox: string;
}

export function ImapAccessDetailsFromJSON(json: any): ImapAccessDetails {
  return ImapAccessDetailsFromJSONTyped(json, false);
}

export function ImapAccessDetailsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ImapAccessDetails {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    imapServerHost: json['imapServerHost'],
    imapServerPort: json['imapServerPort'],
    imapUsername: json['imapUsername'],
    imapPassword: json['imapPassword'],
    imapMailbox: json['imapMailbox'],
  };
}

export function ImapAccessDetailsToJSON(value?: ImapAccessDetails | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    imapServerHost: value.imapServerHost,
    imapServerPort: value.imapServerPort,
    imapUsername: value.imapUsername,
    imapPassword: value.imapPassword,
    imapMailbox: value.imapMailbox,
  };
}
