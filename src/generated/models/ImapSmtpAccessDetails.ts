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
 * Access details for inbox using SMTP or IMAP
 * @export
 * @interface ImapSmtpAccessDetails
 */
export interface ImapSmtpAccessDetails {
  /**
   * Secure TLS SMTP server host domain
   * @type {string}
   * @memberof ImapSmtpAccessDetails
   */
  secureSmtpServerHost: string;
  /**
   * Secure TLS SMTP server host port
   * @type {number}
   * @memberof ImapSmtpAccessDetails
   */
  secureSmtpServerPort: number;
  /**
   * Secure TLS SMTP username for login
   * @type {string}
   * @memberof ImapSmtpAccessDetails
   */
  secureSmtpUsername: string;
  /**
   * Secure TLS SMTP password for login
   * @type {string}
   * @memberof ImapSmtpAccessDetails
   */
  secureSmtpPassword: string;
  /**
   * SMTP server host domain
   * @type {string}
   * @memberof ImapSmtpAccessDetails
   */
  smtpServerHost: string;
  /**
   * SMTP server host port
   * @type {number}
   * @memberof ImapSmtpAccessDetails
   */
  smtpServerPort: number;
  /**
   * SMTP username for login
   * @type {string}
   * @memberof ImapSmtpAccessDetails
   */
  smtpUsername: string;
  /**
   * SMTP password for login
   * @type {string}
   * @memberof ImapSmtpAccessDetails
   */
  smtpPassword: string;
  /**
   * IMAP server host domain
   * @type {string}
   * @memberof ImapSmtpAccessDetails
   */
  imapServerHost: string;
  /**
   * IMAP server host port
   * @type {number}
   * @memberof ImapSmtpAccessDetails
   */
  imapServerPort: number;
  /**
   * IMAP username for login
   * @type {string}
   * @memberof ImapSmtpAccessDetails
   */
  imapUsername: string;
  /**
   * IMAP password for login
   * @type {string}
   * @memberof ImapSmtpAccessDetails
   */
  imapPassword: string;
  /**
   * Mail from domain or SMTP HELO value
   * @type {string}
   * @memberof ImapSmtpAccessDetails
   */
  mailFromDomain?: string | null;
}

export function ImapSmtpAccessDetailsFromJSON(
  json: any
): ImapSmtpAccessDetails {
  return ImapSmtpAccessDetailsFromJSONTyped(json, false);
}

export function ImapSmtpAccessDetailsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ImapSmtpAccessDetails {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    secureSmtpServerHost: json['secureSmtpServerHost'],
    secureSmtpServerPort: json['secureSmtpServerPort'],
    secureSmtpUsername: json['secureSmtpUsername'],
    secureSmtpPassword: json['secureSmtpPassword'],
    smtpServerHost: json['smtpServerHost'],
    smtpServerPort: json['smtpServerPort'],
    smtpUsername: json['smtpUsername'],
    smtpPassword: json['smtpPassword'],
    imapServerHost: json['imapServerHost'],
    imapServerPort: json['imapServerPort'],
    imapUsername: json['imapUsername'],
    imapPassword: json['imapPassword'],
    mailFromDomain: !exists(json, 'mailFromDomain')
      ? undefined
      : json['mailFromDomain'],
  };
}

export function ImapSmtpAccessDetailsToJSON(
  value?: ImapSmtpAccessDetails | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    secureSmtpServerHost: value.secureSmtpServerHost,
    secureSmtpServerPort: value.secureSmtpServerPort,
    secureSmtpUsername: value.secureSmtpUsername,
    secureSmtpPassword: value.secureSmtpPassword,
    smtpServerHost: value.smtpServerHost,
    smtpServerPort: value.smtpServerPort,
    smtpUsername: value.smtpUsername,
    smtpPassword: value.smtpPassword,
    imapServerHost: value.imapServerHost,
    imapServerPort: value.imapServerPort,
    imapUsername: value.imapUsername,
    imapPassword: value.imapPassword,
    mailFromDomain: value.mailFromDomain,
  };
}
