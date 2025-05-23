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
  ValidationMessage,
  ValidationMessageFromJSON,
  ValidationMessageFromJSONTyped,
  ValidationMessageToJSON,
} from './';

/**
 * HTML Validation Results
 * @export
 * @interface HTMLValidationResult
 */
export interface HTMLValidationResult {
  /**
   * Is HTML validation result valid
   * @type {boolean}
   * @memberof HTMLValidationResult
   */
  isValid: boolean;
  /**
   * Optional infos resulting from HTML validation
   * @type {Array<ValidationMessage>}
   * @memberof HTMLValidationResult
   */
  infos: Array<ValidationMessage>;
  /**
   * Optional errors resulting from HTML validation
   * @type {Array<ValidationMessage>}
   * @memberof HTMLValidationResult
   */
  errors: Array<ValidationMessage>;
  /**
   * Optional warnings resulting from HTML validation
   * @type {Array<ValidationMessage>}
   * @memberof HTMLValidationResult
   */
  warnings: Array<ValidationMessage>;
}

export function HTMLValidationResultFromJSON(json: any): HTMLValidationResult {
  return HTMLValidationResultFromJSONTyped(json, false);
}

export function HTMLValidationResultFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): HTMLValidationResult {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    isValid: json['isValid'],
    infos: (json['infos'] as Array<any>).map(ValidationMessageFromJSON),
    errors: (json['errors'] as Array<any>).map(ValidationMessageFromJSON),
    warnings: (json['warnings'] as Array<any>).map(ValidationMessageFromJSON),
  };
}

export function HTMLValidationResultToJSON(
  value?: HTMLValidationResult | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    isValid: value.isValid,
    infos: (value.infos as Array<any>).map(ValidationMessageToJSON),
    errors: (value.errors as Array<any>).map(ValidationMessageToJSON),
    warnings: (value.warnings as Array<any>).map(ValidationMessageToJSON),
  };
}
