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
  ConnectorImapConnectionDto,
  ConnectorImapConnectionDtoFromJSON,
  ConnectorImapConnectionDtoFromJSONTyped,
  ConnectorImapConnectionDtoToJSON,
} from './';

/**
 *
 * @export
 * @interface OptionalConnectorImapConnectionDto
 */
export interface OptionalConnectorImapConnectionDto {
  /**
   *
   * @type {boolean}
   * @memberof OptionalConnectorImapConnectionDto
   */
  present: boolean;
  /**
   *
   * @type {ConnectorImapConnectionDto}
   * @memberof OptionalConnectorImapConnectionDto
   */
  result?: ConnectorImapConnectionDto;
}

export function OptionalConnectorImapConnectionDtoFromJSON(
  json: any
): OptionalConnectorImapConnectionDto {
  return OptionalConnectorImapConnectionDtoFromJSONTyped(json, false);
}

export function OptionalConnectorImapConnectionDtoFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): OptionalConnectorImapConnectionDto {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    present: json['present'],
    result: !exists(json, 'result')
      ? undefined
      : ConnectorImapConnectionDtoFromJSON(json['result']),
  };
}

export function OptionalConnectorImapConnectionDtoToJSON(
  value?: OptionalConnectorImapConnectionDto | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    present: value.present,
    result: ConnectorImapConnectionDtoToJSON(value.result),
  };
}
