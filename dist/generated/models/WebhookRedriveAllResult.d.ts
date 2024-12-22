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
 * Result of retrying all failed webhook
 * @export
 * @interface WebhookRedriveAllResult
 */
export interface WebhookRedriveAllResult {
    /**
     *
     * @type {boolean}
     * @memberof WebhookRedriveAllResult
     */
    success: boolean;
    /**
     *
     * @type {string}
     * @memberof WebhookRedriveAllResult
     */
    message?: string | null;
}
/**
 * Check if a given object implements the WebhookRedriveAllResult interface.
 */
export declare function instanceOfWebhookRedriveAllResult(value: object): value is WebhookRedriveAllResult;
export declare function WebhookRedriveAllResultFromJSON(json: any): WebhookRedriveAllResult;
export declare function WebhookRedriveAllResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookRedriveAllResult;
export declare function WebhookRedriveAllResultToJSON(json: any): WebhookRedriveAllResult;
export declare function WebhookRedriveAllResultToJSONTyped(value?: WebhookRedriveAllResult | null, ignoreDiscriminator?: boolean): any;
