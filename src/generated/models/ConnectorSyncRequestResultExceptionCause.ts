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
  ConnectorSyncRequestResultExceptionCauseStackTrace,
  ConnectorSyncRequestResultExceptionCauseStackTraceFromJSON,
  ConnectorSyncRequestResultExceptionCauseStackTraceFromJSONTyped,
  ConnectorSyncRequestResultExceptionCauseStackTraceToJSON,
} from './';

/**
 *
 * @export
 * @interface ConnectorSyncRequestResultExceptionCause
 */
export interface ConnectorSyncRequestResultExceptionCause {
  /**
   *
   * @type {Array<ConnectorSyncRequestResultExceptionCauseStackTrace>}
   * @memberof ConnectorSyncRequestResultExceptionCause
   */
  stackTrace?: Array<ConnectorSyncRequestResultExceptionCauseStackTrace>;
  /**
   *
   * @type {string}
   * @memberof ConnectorSyncRequestResultExceptionCause
   */
  message?: string;
  /**
   *
   * @type {string}
   * @memberof ConnectorSyncRequestResultExceptionCause
   */
  localizedMessage?: string;
}

export function ConnectorSyncRequestResultExceptionCauseFromJSON(
  json: any
): ConnectorSyncRequestResultExceptionCause {
  return ConnectorSyncRequestResultExceptionCauseFromJSONTyped(json, false);
}

export function ConnectorSyncRequestResultExceptionCauseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ConnectorSyncRequestResultExceptionCause {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    stackTrace: !exists(json, 'stackTrace')
      ? undefined
      : (json['stackTrace'] as Array<any>).map(
          ConnectorSyncRequestResultExceptionCauseStackTraceFromJSON
        ),
    message: !exists(json, 'message') ? undefined : json['message'],
    localizedMessage: !exists(json, 'localizedMessage')
      ? undefined
      : json['localizedMessage'],
  };
}

export function ConnectorSyncRequestResultExceptionCauseToJSON(
  value?: ConnectorSyncRequestResultExceptionCause | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    stackTrace:
      value.stackTrace === undefined
        ? undefined
        : (value.stackTrace as Array<any>).map(
            ConnectorSyncRequestResultExceptionCauseStackTraceToJSON
          ),
    message: value.message,
    localizedMessage: value.localizedMessage,
  };
}
