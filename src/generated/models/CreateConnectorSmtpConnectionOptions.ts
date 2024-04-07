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
 *
 * @export
 * @interface CreateConnectorSmtpConnectionOptions
 */
export interface CreateConnectorSmtpConnectionOptions {
  /**
   *
   * @type {boolean}
   * @memberof CreateConnectorSmtpConnectionOptions
   */
  enabled?: boolean;
  /**
   *
   * @type {string}
   * @memberof CreateConnectorSmtpConnectionOptions
   */
  smtpHost: string;
  /**
   *
   * @type {number}
   * @memberof CreateConnectorSmtpConnectionOptions
   */
  smtpPort?: number;
  /**
   *
   * @type {boolean}
   * @memberof CreateConnectorSmtpConnectionOptions
   */
  smtpSsl?: boolean;
  /**
   *
   * @type {string}
   * @memberof CreateConnectorSmtpConnectionOptions
   */
  smtpUsername?: string;
  /**
   *
   * @type {string}
   * @memberof CreateConnectorSmtpConnectionOptions
   */
  smtpPassword?: string;
}

export function CreateConnectorSmtpConnectionOptionsFromJSON(
  json: any
): CreateConnectorSmtpConnectionOptions {
  return CreateConnectorSmtpConnectionOptionsFromJSONTyped(json, false);
}

export function CreateConnectorSmtpConnectionOptionsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateConnectorSmtpConnectionOptions {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    enabled: !exists(json, 'enabled') ? undefined : json['enabled'],
    smtpHost: json['smtpHost'],
    smtpPort: !exists(json, 'smtpPort') ? undefined : json['smtpPort'],
    smtpSsl: !exists(json, 'smtpSsl') ? undefined : json['smtpSsl'],
    smtpUsername: !exists(json, 'smtpUsername')
      ? undefined
      : json['smtpUsername'],
    smtpPassword: !exists(json, 'smtpPassword')
      ? undefined
      : json['smtpPassword'],
  };
}

export function CreateConnectorSmtpConnectionOptionsToJSON(
  value?: CreateConnectorSmtpConnectionOptions | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    enabled: value.enabled,
    smtpHost: value.smtpHost,
    smtpPort: value.smtpPort,
    smtpSsl: value.smtpSsl,
    smtpUsername: value.smtpUsername,
    smtpPassword: value.smtpPassword,
  };
}
