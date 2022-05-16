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
/**
 * Result of webhook test request
 * @export
 * @interface WebhookTestRequest
 */
export interface WebhookTestRequest {
    /**
     *
     * @type {string}
     * @memberof WebhookTestRequest
     */
    url: string;
    /**
     *
     * @type {string}
     * @memberof WebhookTestRequest
     */
    method: WebhookTestRequestMethodEnum;
    /**
     *
     * @type {{ [key: string]: string; }}
     * @memberof WebhookTestRequest
     */
    headers: {
        [key: string]: string;
    };
    /**
     *
     * @type {string}
     * @memberof WebhookTestRequest
     */
    payload?: string;
}
/**
 * @export
 * @enum {string}
 */
export declare enum WebhookTestRequestMethodEnum {
    GET = "GET",
    HEAD = "HEAD",
    POST = "POST",
    PUT = "PUT",
    PATCH = "PATCH",
    DELETE = "DELETE",
    OPTIONS = "OPTIONS",
    TRACE = "TRACE"
}
export declare function WebhookTestRequestFromJSON(json: any): WebhookTestRequest;
export declare function WebhookTestRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookTestRequest;
export declare function WebhookTestRequestToJSON(value?: WebhookTestRequest | null): any;
