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
 * Representation of a webhook
 * @export
 * @interface WebhookProjection
 */
export interface WebhookProjection {
    /**
     *
     * @type {string}
     * @memberof WebhookProjection
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof WebhookProjection
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof WebhookProjection
     */
    url: string;
    /**
     *
     * @type {string}
     * @memberof WebhookProjection
     */
    inboxId?: string;
    /**
     *
     * @type {string}
     * @memberof WebhookProjection
     */
    eventName?: WebhookProjectionEventNameEnum;
    /**
     *
     * @type {Date}
     * @memberof WebhookProjection
     */
    updatedAt: Date;
    /**
     *
     * @type {Date}
     * @memberof WebhookProjection
     */
    createdAt: Date;
}
/**
 * @export
 * @enum {string}
 */
export declare enum WebhookProjectionEventNameEnum {
    EMAIL_RECEIVED = "EMAIL_RECEIVED",
    NEW_EMAIL = "NEW_EMAIL",
    NEW_CONTACT = "NEW_CONTACT",
    NEW_ATTACHMENT = "NEW_ATTACHMENT",
    EMAIL_OPENED = "EMAIL_OPENED",
    EMAIL_READ = "EMAIL_READ",
    BOUNCE = "BOUNCE",
    BOUNCE_RECIPIENT = "BOUNCE_RECIPIENT"
}
export declare function WebhookProjectionFromJSON(json: any): WebhookProjection;
export declare function WebhookProjectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookProjection;
export declare function WebhookProjectionToJSON(value?: WebhookProjection | null): any;
