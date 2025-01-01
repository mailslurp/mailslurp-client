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
 * @interface EmailFeaturePlatformName
 */
export interface EmailFeaturePlatformName {
  /**
   *
   * @type {string}
   * @memberof EmailFeaturePlatformName
   */
  slug: EmailFeaturePlatformNameSlugEnum;
  /**
   *
   * @type {string}
   * @memberof EmailFeaturePlatformName
   */
  name: string;
}

/**
 * @export
 * @enum {string}
 */
export enum EmailFeaturePlatformNameSlugEnum {
  android = 'android',
  desktop_app = 'desktop-app',
  desktop_webmail = 'desktop-webmail',
  ios = 'ios',
  macos = 'macos',
  mobile_webmail = 'mobile-webmail',
  outlook_com = 'outlook-com',
  webmail = 'webmail',
  windows = 'windows',
  windows_mail = 'windows-mail',
}

export function EmailFeaturePlatformNameFromJSON(
  json: any
): EmailFeaturePlatformName {
  return EmailFeaturePlatformNameFromJSONTyped(json, false);
}

export function EmailFeaturePlatformNameFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): EmailFeaturePlatformName {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    slug: json['slug'],
    name: json['name'],
  };
}

export function EmailFeaturePlatformNameToJSON(
  value?: EmailFeaturePlatformName | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    slug: value.slug,
    name: value.name,
  };
}
