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
  EmailFeatureSupportFlags,
  EmailFeatureSupportFlagsFromJSON,
  EmailFeatureSupportFlagsFromJSONTyped,
  EmailFeatureSupportFlagsToJSON,
} from './';

/**
 *
 * @export
 * @interface EmailFeatureVersionStatistics
 */
export interface EmailFeatureVersionStatistics {
  /**
   *
   * @type {string}
   * @memberof EmailFeatureVersionStatistics
   */
  version: string;
  /**
   *
   * @type {EmailFeatureSupportFlags}
   * @memberof EmailFeatureVersionStatistics
   */
  supportFlags: EmailFeatureSupportFlags;
}

export function EmailFeatureVersionStatisticsFromJSON(
  json: any
): EmailFeatureVersionStatistics {
  return EmailFeatureVersionStatisticsFromJSONTyped(json, false);
}

export function EmailFeatureVersionStatisticsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): EmailFeatureVersionStatistics {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    version: json['version'],
    supportFlags: EmailFeatureSupportFlagsFromJSON(json['supportFlags']),
  };
}

export function EmailFeatureVersionStatisticsToJSON(
  value?: EmailFeatureVersionStatistics | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    version: value.version,
    supportFlags: EmailFeatureSupportFlagsToJSON(value.supportFlags),
  };
}
