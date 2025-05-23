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
import { ValidationMessage } from './';
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
export declare function HTMLValidationResultFromJSON(json: any): HTMLValidationResult;
export declare function HTMLValidationResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): HTMLValidationResult;
export declare function HTMLValidationResultToJSON(value?: HTMLValidationResult | null): any;
