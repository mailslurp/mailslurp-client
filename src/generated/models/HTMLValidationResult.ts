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
     * Optional errors resulting from HTML validation
     * @type {Array<ValidationMessage>}
     * @memberof HTMLValidationResult
     */
    errors?: Array<ValidationMessage>;
    /**
     * Is HTML validation result valid
     * @type {boolean}
     * @memberof HTMLValidationResult
     */
    isValid?: boolean;
    /**
     * Optional warnings resulting from HTML validation
     * @type {Array<ValidationMessage>}
     * @memberof HTMLValidationResult
     */
    warnings?: Array<ValidationMessage>;
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
        errors: !exists(json, 'errors')
            ? undefined
            : (json['errors'] as Array<any>).map(ValidationMessageFromJSON),
        isValid: !exists(json, 'isValid') ? undefined : json['isValid'],
        warnings: !exists(json, 'warnings')
            ? undefined
            : (json['warnings'] as Array<any>).map(ValidationMessageFromJSON),
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
        errors:
            value.errors === undefined
                ? undefined
                : (value.errors as Array<any>).map(ValidationMessageToJSON),
        isValid: value.isValid,
        warnings:
            value.warnings === undefined
                ? undefined
                : (value.warnings as Array<any>).map(ValidationMessageToJSON),
    };
}
