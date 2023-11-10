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
  EmailFeatureCategoryName,
  EmailFeatureCategoryNameFromJSON,
  EmailFeatureCategoryNameFromJSONTyped,
  EmailFeatureCategoryNameToJSON,
  EmailFeatureFamilyName,
  EmailFeatureFamilyNameFromJSON,
  EmailFeatureFamilyNameFromJSONTyped,
  EmailFeatureFamilyNameToJSON,
  EmailFeaturePlatformName,
  EmailFeaturePlatformNameFromJSON,
  EmailFeaturePlatformNameFromJSONTyped,
  EmailFeaturePlatformNameToJSON,
} from './';

/**
 *
 * @export
 * @interface EmailFeatureNames
 */
export interface EmailFeatureNames {
  /**
   *
   * @type {Array<EmailFeatureFamilyName>}
   * @memberof EmailFeatureNames
   */
  family: Array<EmailFeatureFamilyName>;
  /**
   *
   * @type {Array<EmailFeaturePlatformName>}
   * @memberof EmailFeatureNames
   */
  platform: Array<EmailFeaturePlatformName>;
  /**
   *
   * @type {Array<EmailFeatureCategoryName>}
   * @memberof EmailFeatureNames
   */
  category: Array<EmailFeatureCategoryName>;
}

export function EmailFeatureNamesFromJSON(json: any): EmailFeatureNames {
  return EmailFeatureNamesFromJSONTyped(json, false);
}

export function EmailFeatureNamesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): EmailFeatureNames {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    family: (json['family'] as Array<any>).map(EmailFeatureFamilyNameFromJSON),
    platform: (json['platform'] as Array<any>).map(
      EmailFeaturePlatformNameFromJSON
    ),
    category: (json['category'] as Array<any>).map(
      EmailFeatureCategoryNameFromJSON
    ),
  };
}

export function EmailFeatureNamesToJSON(value?: EmailFeatureNames | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    family: (value.family as Array<any>).map(EmailFeatureFamilyNameToJSON),
    platform: (value.platform as Array<any>).map(
      EmailFeaturePlatformNameToJSON
    ),
    category: (value.category as Array<any>).map(
      EmailFeatureCategoryNameToJSON
    ),
  };
}
