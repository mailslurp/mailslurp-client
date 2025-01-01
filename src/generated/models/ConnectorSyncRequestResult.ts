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
  ConnectorSyncResult,
  ConnectorSyncResultFromJSON,
  ConnectorSyncResultFromJSONTyped,
  ConnectorSyncResultToJSON,
} from './';

/**
 *
 * @export
 * @interface ConnectorSyncRequestResult
 */
export interface ConnectorSyncRequestResult {
  /**
   *
   * @type {ConnectorSyncResult}
   * @memberof ConnectorSyncRequestResult
   */
  syncResult?: ConnectorSyncResult;
  /**
   *
   * @type {string}
   * @memberof ConnectorSyncRequestResult
   */
  exception?: string;
  /**
   *
   * @type {string}
   * @memberof ConnectorSyncRequestResult
   */
  eventId?: string;
}

export function ConnectorSyncRequestResultFromJSON(
  json: any
): ConnectorSyncRequestResult {
  return ConnectorSyncRequestResultFromJSONTyped(json, false);
}

export function ConnectorSyncRequestResultFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ConnectorSyncRequestResult {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    syncResult: !exists(json, 'syncResult')
      ? undefined
      : ConnectorSyncResultFromJSON(json['syncResult']),
    exception: !exists(json, 'exception') ? undefined : json['exception'],
    eventId: !exists(json, 'eventId') ? undefined : json['eventId'],
  };
}

export function ConnectorSyncRequestResultToJSON(
  value?: ConnectorSyncRequestResult | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    syncResult: ConnectorSyncResultToJSON(value.syncResult),
    exception: value.exception,
    eventId: value.eventId,
  };
}
