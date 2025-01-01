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
  ConnectorSyncSettingsDto,
  ConnectorSyncSettingsDtoFromJSON,
  ConnectorSyncSettingsDtoFromJSONTyped,
  ConnectorSyncSettingsDtoToJSON,
} from './';

/**
 *
 * @export
 * @interface OptionalConnectorSyncSettingsDto
 */
export interface OptionalConnectorSyncSettingsDto {
  /**
   *
   * @type {boolean}
   * @memberof OptionalConnectorSyncSettingsDto
   */
  present: boolean;
  /**
   *
   * @type {ConnectorSyncSettingsDto}
   * @memberof OptionalConnectorSyncSettingsDto
   */
  result?: ConnectorSyncSettingsDto;
}

export function OptionalConnectorSyncSettingsDtoFromJSON(
  json: any
): OptionalConnectorSyncSettingsDto {
  return OptionalConnectorSyncSettingsDtoFromJSONTyped(json, false);
}

export function OptionalConnectorSyncSettingsDtoFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): OptionalConnectorSyncSettingsDto {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    present: json['present'],
    result: !exists(json, 'result')
      ? undefined
      : ConnectorSyncSettingsDtoFromJSON(json['result']),
  };
}

export function OptionalConnectorSyncSettingsDtoToJSON(
  value?: OptionalConnectorSyncSettingsDto | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    present: value.present,
    result: ConnectorSyncSettingsDtoToJSON(value.result),
  };
}