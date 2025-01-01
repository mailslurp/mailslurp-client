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
 * Options for creating automatic syncing between an inbox connection and an external mail provider
 * @export
 * @interface CreateConnectorSyncSettingsOptions
 */
export interface CreateConnectorSyncSettingsOptions {
  /**
   * Enable automatic background sync
   * @type {boolean}
   * @memberof CreateConnectorSyncSettingsOptions
   */
  syncEnabled?: boolean | null;
  /**
   * Sync schedule type
   * @type {string}
   * @memberof CreateConnectorSyncSettingsOptions
   */
  syncScheduleType?: CreateConnectorSyncSettingsOptionsSyncScheduleTypeEnum;
  /**
   * Sync interval in minutes
   * @type {number}
   * @memberof CreateConnectorSyncSettingsOptions
   */
  syncInterval?: number | null;
}

/**
 * @export
 * @enum {string}
 */
export enum CreateConnectorSyncSettingsOptionsSyncScheduleTypeEnum {
  INTERVAL = 'INTERVAL',
}

export function CreateConnectorSyncSettingsOptionsFromJSON(
  json: any
): CreateConnectorSyncSettingsOptions {
  return CreateConnectorSyncSettingsOptionsFromJSONTyped(json, false);
}

export function CreateConnectorSyncSettingsOptionsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateConnectorSyncSettingsOptions {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    syncEnabled: !exists(json, 'syncEnabled') ? undefined : json['syncEnabled'],
    syncScheduleType: !exists(json, 'syncScheduleType')
      ? undefined
      : json['syncScheduleType'],
    syncInterval: !exists(json, 'syncInterval')
      ? undefined
      : json['syncInterval'],
  };
}

export function CreateConnectorSyncSettingsOptionsToJSON(
  value?: CreateConnectorSyncSettingsOptions | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    syncEnabled: value.syncEnabled,
    syncScheduleType: value.syncScheduleType,
    syncInterval: value.syncInterval,
  };
}