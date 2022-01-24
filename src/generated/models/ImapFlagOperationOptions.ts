/* tslint:disable */
/* eslint-disable */
/**
 * MailSlurp API
 * MailSlurp is an API for sending and receiving emails from dynamically allocated email addresses. It\'s designed for developers and QA teams to test applications, process inbound emails, send templated notifications, attachments, and more.  ## Resources  - [Homepage](https://www.mailslurp.com) - Get an [API KEY](https://app.mailslurp.com/sign-up/) - Generated [SDK Clients](https://www.mailslurp.com/docs/) - [Examples](https://github.com/mailslurp/examples) repository
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
 * @interface ImapFlagOperationOptions
 */
export interface ImapFlagOperationOptions {
  /**
   *
   * @type {string}
   * @memberof ImapFlagOperationOptions
   */
  flagOperation: ImapFlagOperationOptionsFlagOperationEnum;
  /**
   *
   * @type {Array<string>}
   * @memberof ImapFlagOperationOptions
   */
  flags: Array<string>;
}

/**
 * @export
 * @enum {string}
 */
export enum ImapFlagOperationOptionsFlagOperationEnum {
  SET_FLAGS = 'SET_FLAGS',
  ADD_FLAGS = 'ADD_FLAGS',
  REMOVE_FLAGS = 'REMOVE_FLAGS',
}

export function ImapFlagOperationOptionsFromJSON(
  json: any
): ImapFlagOperationOptions {
  return ImapFlagOperationOptionsFromJSONTyped(json, false);
}

export function ImapFlagOperationOptionsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ImapFlagOperationOptions {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    flagOperation: json['flagOperation'],
    flags: json['flags'],
  };
}

export function ImapFlagOperationOptionsToJSON(
  value?: ImapFlagOperationOptions | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    flagOperation: value.flagOperation,
    flags: value.flags,
  };
}
