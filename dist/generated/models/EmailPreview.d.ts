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
 * Preview of an email message. For full message (including body and attachments) call the `getEmail` or other email endpoints with the provided email ID.
 * @export
 * @interface EmailPreview
 */
export interface EmailPreview {
    /**
     * ID of the email entity
     * @type {string}
     * @memberof EmailPreview
     */
    id: string;
    /**
     * The subject line of the email message as specified by SMTP subject header
     * @type {string}
     * @memberof EmailPreview
     */
    subject?: string;
    /**
     * List of `To` recipient email addresses that the email was addressed to. See recipients object for names.
     * @type {Array<string>}
     * @memberof EmailPreview
     */
    to: Array<string>;
    /**
     * Who the email was sent from. An email address - see fromName for the sender name.
     * @type {string}
     * @memberof EmailPreview
     */
    from?: string;
    /**
     * List of `BCC` recipients email addresses that the email was addressed to. See recipients object for names.
     * @type {Array<string>}
     * @memberof EmailPreview
     */
    bcc?: Array<string>;
    /**
     * List of `CC` recipients email addresses that the email was addressed to. See recipients object for names.
     * @type {Array<string>}
     * @memberof EmailPreview
     */
    cc?: Array<string>;
    /**
     * When was the email received by MailSlurp
     * @type {Date}
     * @memberof EmailPreview
     */
    createdAt: Date;
    /**
     * Read flag. Has the email ever been viewed in the dashboard or fetched via the API with a hydrated body? If so the email is marked as read. Paginated results do not affect read status. Read status is different to email opened event as it depends on your own account accessing the email. Email opened is determined by tracking pixels sent to other uses if enable during sending. You can listened for both email read and email opened events using webhooks.
     * @type {boolean}
     * @memberof EmailPreview
     */
    read?: boolean;
    /**
     * List of IDs of attachments found in the email. Use these IDs with the Inbox and Email Controllers to download attachments and attachment meta data such as filesize, name, extension.
     * @type {Array<string>}
     * @memberof EmailPreview
     */
    attachments?: Array<string>;
}
export declare function EmailPreviewFromJSON(json: any): EmailPreview;
export declare function EmailPreviewFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailPreview;
export declare function EmailPreviewToJSON(value?: EmailPreview | null): any;
