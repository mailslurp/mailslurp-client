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
  ImageIssue,
  ImageIssueFromJSON,
  ImageIssueFromJSONTyped,
  ImageIssueToJSON,
  LinkIssue,
  LinkIssueFromJSON,
  LinkIssueFromJSONTyped,
  LinkIssueToJSON,
  SpellingIssue,
  SpellingIssueFromJSON,
  SpellingIssueFromJSONTyped,
  SpellingIssueToJSON,
} from './';

/**
 *
 * @export
 * @interface CheckEmailBodyResults
 */
export interface CheckEmailBodyResults {
  /**
   *
   * @type {boolean}
   * @memberof CheckEmailBodyResults
   */
  hasIssues: boolean;
  /**
   *
   * @type {Array<LinkIssue>}
   * @memberof CheckEmailBodyResults
   */
  linkIssues: Array<LinkIssue>;
  /**
   *
   * @type {Array<ImageIssue>}
   * @memberof CheckEmailBodyResults
   */
  imageIssues: Array<ImageIssue>;
  /**
   *
   * @type {Array<SpellingIssue>}
   * @memberof CheckEmailBodyResults
   */
  spellingIssues: Array<SpellingIssue>;
}

export function CheckEmailBodyResultsFromJSON(
  json: any
): CheckEmailBodyResults {
  return CheckEmailBodyResultsFromJSONTyped(json, false);
}

export function CheckEmailBodyResultsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CheckEmailBodyResults {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    hasIssues: json['hasIssues'],
    linkIssues: (json['linkIssues'] as Array<any>).map(LinkIssueFromJSON),
    imageIssues: (json['imageIssues'] as Array<any>).map(ImageIssueFromJSON),
    spellingIssues: (json['spellingIssues'] as Array<any>).map(
      SpellingIssueFromJSON
    ),
  };
}

export function CheckEmailBodyResultsToJSON(
  value?: CheckEmailBodyResults | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    hasIssues: value.hasIssues,
    linkIssues: (value.linkIssues as Array<any>).map(LinkIssueToJSON),
    imageIssues: (value.imageIssues as Array<any>).map(ImageIssueToJSON),
    spellingIssues: (value.spellingIssues as Array<any>).map(
      SpellingIssueToJSON
    ),
  };
}