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
/**
 * Abstract webhook payload. Use the correct payload type for your webhook event type in order to access all the specific properties for that event. See the `NEW_EMAIL`,`NEW_CONTACT`, `NEW_ATTACHMENT` and `EMAIL_OPENED` payloads for the properties available for those events.
 * @export
 * @interface AbstractWebhookPayload
 */
export interface AbstractWebhookPayload {
    /**
     *
     * @type {string}
     * @memberof AbstractWebhookPayload
     */
    eventName: AbstractWebhookPayloadEventNameEnum;
    /**
     *
     * @type {string}
     * @memberof AbstractWebhookPayload
     */
    webhookId: string;
    /**
     *
     * @type {string}
     * @memberof AbstractWebhookPayload
     */
    messageId: string;
    /**
     *
     * @type {string}
     * @memberof AbstractWebhookPayload
     */
    webhookName?: string;
}
/**
 * @export
 * @enum {string}
 */
export declare enum AbstractWebhookPayloadEventNameEnum {
    EMAIL_RECEIVED = "EMAIL_RECEIVED",
    NEW_EMAIL = "NEW_EMAIL",
    NEW_CONTACT = "NEW_CONTACT",
    NEW_ATTACHMENT = "NEW_ATTACHMENT",
    EMAIL_OPENED = "EMAIL_OPENED",
    EMAIL_READ = "EMAIL_READ",
    BOUNCE = "BOUNCE",
    BOUNCE_RECIPIENT = "BOUNCE_RECIPIENT"
}
export declare function AbstractWebhookPayloadFromJSON(json: any): AbstractWebhookPayload;
export declare function AbstractWebhookPayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): AbstractWebhookPayload;
export declare function AbstractWebhookPayloadToJSON(value?: AbstractWebhookPayload | null): any;
