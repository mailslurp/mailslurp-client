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
 * Email verification result. Valid means email address exists according to response from mail server running at the domain and port given.
 * @export
 * @interface EmailVerificationResult
 */
export interface EmailVerificationResult {
  /**
   *
   * @type {string}
   * @memberof EmailVerificationResult
   */
  domainName: string;
  /**
   *
   * @type {number}
   * @memberof EmailVerificationResult
   */
  port: number;
  /**
   *
   * @type {string}
   * @memberof EmailVerificationResult
   */
  emailAddress: string;
  /**
   *
   * @type {boolean}
   * @memberof EmailVerificationResult
   */
  isValid: boolean;
  /**
   *
   * @type {string}
   * @memberof EmailVerificationResult
   */
  error?: string | null;
}

export function EmailVerificationResultFromJSON(
  json: any
): EmailVerificationResult {
  return EmailVerificationResultFromJSONTyped(json, false);
}

export function EmailVerificationResultFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): EmailVerificationResult {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    domainName: json['domainName'],
    port: json['port'],
    emailAddress: json['emailAddress'],
    isValid: json['isValid'],
    error: !exists(json, 'error') ? undefined : json['error'],
  };
}

export function EmailVerificationResultToJSON(
  value?: EmailVerificationResult | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    domainName: value.domainName,
    port: value.port,
    emailAddress: value.emailAddress,
    isValid: value.isValid,
    error: value.error,
  };
}
