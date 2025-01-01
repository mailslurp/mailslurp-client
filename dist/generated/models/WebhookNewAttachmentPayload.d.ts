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
 * NEW_ATTACHMENT webhook payload. Sent to your webhook url endpoint via HTTP POST when an email is received by the inbox that your webhook is attached to that contains an attachment. You can use the attachmentId to download the attachment.
 * @export
 * @interface WebhookNewAttachmentPayload
 */
export interface WebhookNewAttachmentPayload {
    /**
     * Idempotent message ID. Store this ID locally or in a database to prevent message duplication.
     * @type {string}
     * @memberof WebhookNewAttachmentPayload
     */
    messageId: string;
    /**
     * ID of webhook entity being triggered
     * @type {string}
     * @memberof WebhookNewAttachmentPayload
     */
    webhookId: string;
    /**
     * Name of the webhook being triggered
     * @type {string}
     * @memberof WebhookNewAttachmentPayload
     */
    webhookName?: string | null;
    /**
     * Name of the event type webhook is being triggered for.
     * @type {string}
     * @memberof WebhookNewAttachmentPayload
     */
    eventName: WebhookNewAttachmentPayloadEventNameEnum;
    /**
     * ID of attachment. Use the `AttachmentController` to
     * @type {string}
     * @memberof WebhookNewAttachmentPayload
     */
    attachmentId: string;
    /**
     * Filename of the attachment if present
     * @type {string}
     * @memberof WebhookNewAttachmentPayload
     */
    name: string;
    /**
     * Content type of attachment such as 'image/png' or 'application/pdf
     * @type {string}
     * @memberof WebhookNewAttachmentPayload
     */
    contentType: string;
    /**
     * Size of attachment in bytes
     * @type {number}
     * @memberof WebhookNewAttachmentPayload
     */
    contentLength: number;
}
/**
 * @export
 * @enum {string}
 */
export declare enum WebhookNewAttachmentPayloadEventNameEnum {
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
export declare function WebhookNewAttachmentPayloadFromJSON(json: any): WebhookNewAttachmentPayload;
export declare function WebhookNewAttachmentPayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookNewAttachmentPayload;
export declare function WebhookNewAttachmentPayloadToJSON(value?: WebhookNewAttachmentPayload | null): any;
