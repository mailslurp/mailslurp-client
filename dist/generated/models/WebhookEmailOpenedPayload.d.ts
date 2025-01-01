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
/**
 * EMAIL_OPENED webhook payload. Sent to your webhook url endpoint via HTTP POST when an email containing a tracking pixel is opened and the pixel image is loaded by a reader.
 * @export
 * @interface WebhookEmailOpenedPayload
 */
export interface WebhookEmailOpenedPayload {
    /**
     * Idempotent message ID. Store this ID locally or in a database to prevent message duplication.
     * @type {string}
     * @memberof WebhookEmailOpenedPayload
     */
    messageId: string;
    /**
     * ID of webhook entity being triggered
     * @type {string}
     * @memberof WebhookEmailOpenedPayload
     */
    webhookId: string;
    /**
     * Name of the event type webhook is being triggered for.
     * @type {string}
     * @memberof WebhookEmailOpenedPayload
     */
    eventName: WebhookEmailOpenedPayloadEventNameEnum;
    /**
     * Name of the webhook being triggered
     * @type {string}
     * @memberof WebhookEmailOpenedPayload
     */
    webhookName?: string | null;
    /**
     * Id of the inbox
     * @type {string}
     * @memberof WebhookEmailOpenedPayload
     */
    inboxId: string;
    /**
     * ID of the tracking pixel
     * @type {string}
     * @memberof WebhookEmailOpenedPayload
     */
    pixelId: string;
    /**
     * ID of sent email
     * @type {string}
     * @memberof WebhookEmailOpenedPayload
     */
    sentEmailId: string;
    /**
     * Email address for the recipient of the tracking pixel
     * @type {string}
     * @memberof WebhookEmailOpenedPayload
     */
    recipient: string;
    /**
     * Date time of event creation
     * @type {Date}
     * @memberof WebhookEmailOpenedPayload
     */
    createdAt: Date;
}
/**
 * @export
 * @enum {string}
 */
export declare enum WebhookEmailOpenedPayloadEventNameEnum {
    EMAIL_RECEIVED = "EMAIL_RECEIVED",
    NEW_EMAIL = "NEW_EMAIL",
    NEW_CONTACT = "NEW_CONTACT",
    NEW_ATTACHMENT = "NEW_ATTACHMENT",
    EMAIL_OPENED = "EMAIL_OPENED",
    EMAIL_READ = "EMAIL_READ",
    DELIVERY_STATUS = "DELIVERY_STATUS",
    BOUNCE = "BOUNCE",
    BOUNCE_RECIPIENT = "BOUNCE_RECIPIENT",
    NEW_SMS = "NEW_SMS",
    NEW_GUEST_USER = "NEW_GUEST_USER"
}
export declare function WebhookEmailOpenedPayloadFromJSON(json: any): WebhookEmailOpenedPayload;
export declare function WebhookEmailOpenedPayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookEmailOpenedPayload;
export declare function WebhookEmailOpenedPayloadToJSON(value?: WebhookEmailOpenedPayload | null): any;
