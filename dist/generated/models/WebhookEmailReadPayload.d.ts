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
/**
 * EMAIL_READ webhook payload. Sent to your webhook url endpoint via HTTP POST when an email is read. This happens when an email is requested in full from the API or a user views the email in the dashboard.
 * @export
 * @interface WebhookEmailReadPayload
 */
export interface WebhookEmailReadPayload {
    /**
     * Date time of event creation
     * @type {Date}
     * @memberof WebhookEmailReadPayload
     */
    createdAt?: Date;
    /**
     * ID of the email that was received. Use this ID for fetching the email with the `EmailController`.
     * @type {string}
     * @memberof WebhookEmailReadPayload
     */
    emailId?: string;
    /**
     * Is the email read
     * @type {boolean}
     * @memberof WebhookEmailReadPayload
     */
    emailIsRead?: boolean;
    /**
     * Name of the event type webhook is being triggered for.
     * @type {string}
     * @memberof WebhookEmailReadPayload
     */
    eventName?: WebhookEmailReadPayloadEventNameEnum;
    /**
     * Id of the inbox that received an email
     * @type {string}
     * @memberof WebhookEmailReadPayload
     */
    inboxId?: string;
    /**
     * Idempotent message ID. Store this ID locally or in a database to prevent message duplication.
     * @type {string}
     * @memberof WebhookEmailReadPayload
     */
    messageId?: string;
    /**
     * ID of webhook entity being triggered
     * @type {string}
     * @memberof WebhookEmailReadPayload
     */
    webhookId?: string;
    /**
     * Name of the webhook being triggered
     * @type {string}
     * @memberof WebhookEmailReadPayload
     */
    webhookName?: string;
}
/**
 * @export
 * @enum {string}
 */
export declare enum WebhookEmailReadPayloadEventNameEnum {
    EMAIL_RECEIVED = "EMAIL_RECEIVED",
    NEW_EMAIL = "NEW_EMAIL",
    NEW_CONTACT = "NEW_CONTACT",
    NEW_ATTACHMENT = "NEW_ATTACHMENT",
    EMAIL_OPENED = "EMAIL_OPENED",
    EMAIL_READ = "EMAIL_READ"
}
export declare function WebhookEmailReadPayloadFromJSON(json: any): WebhookEmailReadPayload;
export declare function WebhookEmailReadPayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookEmailReadPayload;
export declare function WebhookEmailReadPayloadToJSON(value?: WebhookEmailReadPayload | null): any;
