/* tslint:disable */
/* eslint-disable */
/**
 * MailSlurp API
 * MailSlurp is an API for sending and receiving emails from dynamically allocated email addresses. It\'s designed for developers and QA teams to test applications, process inbound emails, send templated notifications, attachments, and more.  ## Resources  - [Homepage](https://www.mailslurp.com) - Get an [API KEY](https://app.mailslurp.com/sign-up/) - Generated [SDK Clients](https://www.mailslurp.com/docs/) - [Examples](https://github.com/mailslurp/examples) repository
 *
 * The version of the OpenAPI document: 6.5.2
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
  HTMLValidationResult,
  HTMLValidationResultFromJSON,
  HTMLValidationResultFromJSONTyped,
  HTMLValidationResultToJSON,
} from './';

/**
 * Response object for email validation operation
 * @export
 * @interface ValidationDto
 */
export interface ValidationDto {
  /**
   * ID of the email validated
   * @type {string}
   * @memberof ValidationDto
   */
  emailId?: string;
  /**
   *
   * @type {HTMLValidationResult}
   * @memberof ValidationDto
   */
  html?: HTMLValidationResult;
}

export function ValidationDtoFromJSON(json: any): ValidationDto {
  return ValidationDtoFromJSONTyped(json, false);
}

export function ValidationDtoFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ValidationDto {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    emailId: !exists(json, 'emailId') ? undefined : json['emailId'],
    html: !exists(json, 'html')
      ? undefined
      : HTMLValidationResultFromJSON(json['html']),
  };
}

export function ValidationDtoToJSON(value?: ValidationDto | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    emailId: value.emailId,
    html: HTMLValidationResultToJSON(value.html),
  };
}
