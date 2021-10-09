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
/**
 * Analysis result for email. Each verdict property is a string PASS|FAIL|GRAY or dynamic error message
 * @export
 * @interface EmailAnalysis
 */
export interface EmailAnalysis {
  /**
   * Verdict of DomainKeys Identified Mail analysis
   * @type {string}
   * @memberof EmailAnalysis
   */
  dkimVerdict?: string;
  /**
   * Verdict of Domain-based Message Authentication Reporting and Conformance analysis
   * @type {string}
   * @memberof EmailAnalysis
   */
  dmarcVerdict?: string;
  /**
   * Verdict of spam ranking analysis
   * @type {string}
   * @memberof EmailAnalysis
   */
  spamVerdict?: string;
  /**
   * Verdict of Send Policy Framework record spoofing analysis
   * @type {string}
   * @memberof EmailAnalysis
   */
  spfVerdict?: string;
  /**
   * Verdict of virus scan analysis
   * @type {string}
   * @memberof EmailAnalysis
   */
  virusVerdict?: string;
}

export function EmailAnalysisFromJSON(json: any): EmailAnalysis {
  return EmailAnalysisFromJSONTyped(json, false);
}

export function EmailAnalysisFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): EmailAnalysis {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    dkimVerdict: !exists(json, 'dkimVerdict') ? undefined : json['dkimVerdict'],
    dmarcVerdict: !exists(json, 'dmarcVerdict')
      ? undefined
      : json['dmarcVerdict'],
    spamVerdict: !exists(json, 'spamVerdict') ? undefined : json['spamVerdict'],
    spfVerdict: !exists(json, 'spfVerdict') ? undefined : json['spfVerdict'],
    virusVerdict: !exists(json, 'virusVerdict')
      ? undefined
      : json['virusVerdict'],
  };
}

export function EmailAnalysisToJSON(value?: EmailAnalysis | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    dkimVerdict: value.dkimVerdict,
    dmarcVerdict: value.dmarcVerdict,
    spamVerdict: value.spamVerdict,
    spfVerdict: value.spfVerdict,
    virusVerdict: value.virusVerdict,
  };
}
