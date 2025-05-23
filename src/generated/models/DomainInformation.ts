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
 *
 * @export
 * @interface DomainInformation
 */
export interface DomainInformation {
  /**
   *
   * @type {string}
   * @memberof DomainInformation
   */
  domainName: string;
  /**
   *
   * @type {boolean}
   * @memberof DomainInformation
   */
  verified: boolean;
  /**
   * Type of domain. Dictates type of inbox that can be created with domain. HTTP means inboxes are processed using SES while SMTP inboxes use a custom SMTP mail server. SMTP does not support sending so use HTTP for sending emails.
   * @type {string}
   * @memberof DomainInformation
   */
  domainType: DomainInformationDomainTypeEnum;
}

/**
 * @export
 * @enum {string}
 */
export enum DomainInformationDomainTypeEnum {
  HTTP_INBOX = 'HTTP_INBOX',
  SMTP_DOMAIN = 'SMTP_DOMAIN',
}

export function DomainInformationFromJSON(json: any): DomainInformation {
  return DomainInformationFromJSONTyped(json, false);
}

export function DomainInformationFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): DomainInformation {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    domainName: json['domainName'],
    verified: json['verified'],
    domainType: json['domainType'],
  };
}

export function DomainInformationToJSON(value?: DomainInformation | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    domainName: value.domainName,
    verified: value.verified,
    domainType: value.domainType,
  };
}
