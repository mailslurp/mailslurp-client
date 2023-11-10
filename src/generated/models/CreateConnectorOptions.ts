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
  CreateConnectorImapFetchOptions,
  CreateConnectorImapFetchOptionsFromJSON,
  CreateConnectorImapFetchOptionsFromJSONTyped,
  CreateConnectorImapFetchOptionsToJSON,
  CreateConnectorImapOptions,
  CreateConnectorImapOptionsFromJSON,
  CreateConnectorImapOptionsFromJSONTyped,
  CreateConnectorImapOptionsToJSON,
} from './';

/**
 *
 * @export
 * @interface CreateConnectorOptions
 */
export interface CreateConnectorOptions {
  /**
   *
   * @type {string}
   * @memberof CreateConnectorOptions
   */
  connectorType: CreateConnectorOptionsConnectorTypeEnum;
  /**
   *
   * @type {string}
   * @memberof CreateConnectorOptions
   */
  connectorAuthType: CreateConnectorOptionsConnectorAuthTypeEnum;
  /**
   *
   * @type {CreateConnectorImapOptions}
   * @memberof CreateConnectorOptions
   */
  imapSettings?: CreateConnectorImapOptions;
  /**
   *
   * @type {string}
   * @memberof CreateConnectorOptions
   */
  inboxId?: string;
  /**
   *
   * @type {boolean}
   * @memberof CreateConnectorOptions
   */
  syncEnabled: boolean;
  /**
   *
   * @type {string}
   * @memberof CreateConnectorOptions
   */
  syncScheduleType: CreateConnectorOptionsSyncScheduleTypeEnum;
  /**
   *
   * @type {number}
   * @memberof CreateConnectorOptions
   */
  syncInterval?: number;
  /**
   *
   * @type {CreateConnectorImapFetchOptions}
   * @memberof CreateConnectorOptions
   */
  fetchSettings?: CreateConnectorImapFetchOptions;
}

/**
 * @export
 * @enum {string}
 */
export enum CreateConnectorOptionsConnectorTypeEnum {
  IMAP = 'IMAP',
}
/**
 * @export
 * @enum {string}
 */
export enum CreateConnectorOptionsConnectorAuthTypeEnum {
  PLAIN_TEXT = 'PLAIN_TEXT',
}
/**
 * @export
 * @enum {string}
 */
export enum CreateConnectorOptionsSyncScheduleTypeEnum {
  INTERVAL = 'INTERVAL',
}

export function CreateConnectorOptionsFromJSON(
  json: any
): CreateConnectorOptions {
  return CreateConnectorOptionsFromJSONTyped(json, false);
}

export function CreateConnectorOptionsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateConnectorOptions {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    connectorType: json['connectorType'],
    connectorAuthType: json['connectorAuthType'],
    imapSettings: !exists(json, 'imapSettings')
      ? undefined
      : CreateConnectorImapOptionsFromJSON(json['imapSettings']),
    inboxId: !exists(json, 'inboxId') ? undefined : json['inboxId'],
    syncEnabled: json['syncEnabled'],
    syncScheduleType: json['syncScheduleType'],
    syncInterval: !exists(json, 'syncInterval')
      ? undefined
      : json['syncInterval'],
    fetchSettings: !exists(json, 'fetchSettings')
      ? undefined
      : CreateConnectorImapFetchOptionsFromJSON(json['fetchSettings']),
  };
}

export function CreateConnectorOptionsToJSON(
  value?: CreateConnectorOptions | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    connectorType: value.connectorType,
    connectorAuthType: value.connectorAuthType,
    imapSettings: CreateConnectorImapOptionsToJSON(value.imapSettings),
    inboxId: value.inboxId,
    syncEnabled: value.syncEnabled,
    syncScheduleType: value.syncScheduleType,
    syncInterval: value.syncInterval,
    fetchSettings: CreateConnectorImapFetchOptionsToJSON(value.fetchSettings),
  };
}
