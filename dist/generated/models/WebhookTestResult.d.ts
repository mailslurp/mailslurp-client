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
import { WebhookTestRequest, WebhookTestResponse } from './';
/**
 * Results of testing a webhook
 * @export
 * @interface WebhookTestResult
 */
export interface WebhookTestResult {
    /**
     *
     * @type {string}
     * @memberof WebhookTestResult
     */
    message?: string | null;
    /**
     *
     * @type {WebhookTestResponse}
     * @memberof WebhookTestResult
     */
    response: WebhookTestResponse;
    /**
     *
     * @type {WebhookTestRequest}
     * @memberof WebhookTestResult
     */
    request: WebhookTestRequest;
}
export declare function WebhookTestResultFromJSON(json: any): WebhookTestResult;
export declare function WebhookTestResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookTestResult;
export declare function WebhookTestResultToJSON(value?: WebhookTestResult | null): any;
