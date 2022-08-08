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
 * NEW_CONTACT webhook payload. Sent to your webhook url endpoint via HTTP POST when an email is received by the inbox that your webhook is attached to that contains a recipient that has not been saved as a contact.
 * @export
 * @interface WebhookNewContactPayload
 */
export interface WebhookNewContactPayload {
    /**
     * Idempotent message ID. Store this ID locally or in a database to prevent message duplication.
     * @type {string}
     * @memberof WebhookNewContactPayload
     */
    messageId: string;
    /**
     * ID of webhook entity being triggered
     * @type {string}
     * @memberof WebhookNewContactPayload
     */
    webhookId: string;
    /**
     * Name of the webhook being triggered
     * @type {string}
     * @memberof WebhookNewContactPayload
     */
    webhookName?: string;
    /**
     * Name of the event type webhook is being triggered for.
     * @type {string}
     * @memberof WebhookNewContactPayload
     */
    eventName: WebhookNewContactPayloadEventNameEnum;
    /**
     * Contact ID
     * @type {string}
     * @memberof WebhookNewContactPayload
     */
    contactId: string;
    /**
     * Contact group ID
     * @type {string}
     * @memberof WebhookNewContactPayload
     */
    groupId?: string | null;
    /**
     * Contact first name
     * @type {string}
     * @memberof WebhookNewContactPayload
     */
    firstName?: string | null;
    /**
     * Contact last name
     * @type {string}
     * @memberof WebhookNewContactPayload
     */
    lastName?: string | null;
    /**
     * Contact company name
     * @type {string}
     * @memberof WebhookNewContactPayload
     */
    company?: string | null;
    /**
     * Primary email address for contact
     * @type {string}
     * @memberof WebhookNewContactPayload
     */
    primaryEmailAddress?: string | null;
    /**
     * Email addresses for contact
     * @type {Array<string>}
     * @memberof WebhookNewContactPayload
     */
    emailAddresses: Array<string>;
    /**
     * Tags for contact
     * @type {Array<string>}
     * @memberof WebhookNewContactPayload
     */
    tags: Array<string>;
    /**
     *
     * @type {object}
     * @memberof WebhookNewContactPayload
     */
    metaData?: object;
    /**
     * Has contact opted out of emails
     * @type {boolean}
     * @memberof WebhookNewContactPayload
     */
    optOut: boolean;
    /**
     * Date time of event creation
     * @type {Date}
     * @memberof WebhookNewContactPayload
     */
    createdAt: Date;
}
/**
 * @export
 * @enum {string}
 */
export declare enum WebhookNewContactPayloadEventNameEnum {
    EMAIL_RECEIVED = "EMAIL_RECEIVED",
    NEW_EMAIL = "NEW_EMAIL",
    NEW_CONTACT = "NEW_CONTACT",
    NEW_ATTACHMENT = "NEW_ATTACHMENT",
    EMAIL_OPENED = "EMAIL_OPENED",
    EMAIL_READ = "EMAIL_READ",
    DELIVERY_STATUS = "DELIVERY_STATUS",
    BOUNCE = "BOUNCE",
    BOUNCE_RECIPIENT = "BOUNCE_RECIPIENT",
    NEW_SMS = "NEW_SMS"
}
export declare function WebhookNewContactPayloadFromJSON(json: any): WebhookNewContactPayload;
export declare function WebhookNewContactPayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookNewContactPayload;
export declare function WebhookNewContactPayloadToJSON(value?: WebhookNewContactPayload | null): any;
