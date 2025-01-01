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
import {
  CreateConnectorImapConnectionOptions,
  CreateConnectorImapConnectionOptionsFromJSON,
  CreateConnectorImapConnectionOptionsFromJSONTyped,
  CreateConnectorImapConnectionOptionsToJSON,
  CreateConnectorOptions,
  CreateConnectorOptionsFromJSON,
  CreateConnectorOptionsFromJSONTyped,
  CreateConnectorOptionsToJSON,
  CreateConnectorSmtpConnectionOptions,
  CreateConnectorSmtpConnectionOptionsFromJSON,
  CreateConnectorSmtpConnectionOptionsFromJSONTyped,
  CreateConnectorSmtpConnectionOptionsToJSON,
  CreateConnectorSyncSettingsOptions,
  CreateConnectorSyncSettingsOptionsFromJSON,
  CreateConnectorSyncSettingsOptionsFromJSONTyped,
  CreateConnectorSyncSettingsOptionsToJSON,
} from './';

/**
 * Options for creating an inbox connection with an external mail provider including extra settings
 * @export
 * @interface CreateConnectorWithOptions
 */
export interface CreateConnectorWithOptions {
  /**
   *
   * @type {CreateConnectorOptions}
   * @memberof CreateConnectorWithOptions
   */
  createConnectorOptions: CreateConnectorOptions;
  /**
   *
   * @type {CreateConnectorImapConnectionOptions}
   * @memberof CreateConnectorWithOptions
   */
  createConnectorImapConnectionOptions?: CreateConnectorImapConnectionOptions;
  /**
   *
   * @type {CreateConnectorSmtpConnectionOptions}
   * @memberof CreateConnectorWithOptions
   */
  createConnectorSmtpConnectionOptions?: CreateConnectorSmtpConnectionOptions;
  /**
   *
   * @type {CreateConnectorSyncSettingsOptions}
   * @memberof CreateConnectorWithOptions
   */
  createConnectorSyncSettingsOptions?: CreateConnectorSyncSettingsOptions;
}

export function CreateConnectorWithOptionsFromJSON(
  json: any
): CreateConnectorWithOptions {
  return CreateConnectorWithOptionsFromJSONTyped(json, false);
}

export function CreateConnectorWithOptionsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateConnectorWithOptions {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    createConnectorOptions: CreateConnectorOptionsFromJSON(
      json['createConnectorOptions']
    ),
    createConnectorImapConnectionOptions: !exists(
      json,
      'createConnectorImapConnectionOptions'
    )
      ? undefined
      : CreateConnectorImapConnectionOptionsFromJSON(
          json['createConnectorImapConnectionOptions']
        ),
    createConnectorSmtpConnectionOptions: !exists(
      json,
      'createConnectorSmtpConnectionOptions'
    )
      ? undefined
      : CreateConnectorSmtpConnectionOptionsFromJSON(
          json['createConnectorSmtpConnectionOptions']
        ),
    createConnectorSyncSettingsOptions: !exists(
      json,
      'createConnectorSyncSettingsOptions'
    )
      ? undefined
      : CreateConnectorSyncSettingsOptionsFromJSON(
          json['createConnectorSyncSettingsOptions']
        ),
  };
}

export function CreateConnectorWithOptionsToJSON(
  value?: CreateConnectorWithOptions | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    createConnectorOptions: CreateConnectorOptionsToJSON(
      value.createConnectorOptions
    ),
    createConnectorImapConnectionOptions:
      CreateConnectorImapConnectionOptionsToJSON(
        value.createConnectorImapConnectionOptions
      ),
    createConnectorSmtpConnectionOptions:
      CreateConnectorSmtpConnectionOptionsToJSON(
        value.createConnectorSmtpConnectionOptions
      ),
    createConnectorSyncSettingsOptions:
      CreateConnectorSyncSettingsOptionsToJSON(
        value.createConnectorSyncSettingsOptions
      ),
  };
}