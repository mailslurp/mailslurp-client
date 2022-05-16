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
 * Representation of a MailSlurp inbox. An inbox has an ID and a real email address. Emails can be sent to or from this email address. Inboxes are either `SMTP` or `HTTP` mailboxes. The default, `HTTP` inboxes, use AWS SES to process emails and are best suited as test email accounts and do not support IMAP or POP3. `SMTP` inboxes use a custom mail server at `mx.mailslurp.com` and support SMTP login, IMAP and POP3. Use the `EmailController` or the `InboxController` methods to send and receive emails and attachments. Inboxes may have a description, name, and tags for display purposes. You can also favourite an inbox for easier searching.
 * @export
 * @interface InboxDto
 */
export interface InboxDto {
    /**
     * ID of the inbox. The ID is a UUID-V4 format string. Use the inboxId for calls to Inbox and Email Controller endpoints. See the emailAddress property for the email address or the inbox. To get emails in an inbox use the WaitFor and Inbox Controller methods `waitForLatestEmail` and `getEmails` methods respectively. Inboxes can be used with aliases to forward emails automatically.
     * @type {string}
     * @memberof InboxDto
     */
    id: string;
    /**
     * ID of user that inbox belongs to
     * @type {string}
     * @memberof InboxDto
     */
    userId?: string;
    /**
     * When the inbox was created. Time stamps are in ISO DateTime Format `yyyy-MM-dd'T'HH:mm:ss.SSSXXX` e.g. `2000-10-31T01:30:00.000-05:00`.
     * @type {Date}
     * @memberof InboxDto
     */
    createdAt: Date;
    /**
     * Name of the inbox and used as the sender name when sending emails .Displayed in the dashboard for easier search
     * @type {string}
     * @memberof InboxDto
     */
    name?: string;
    /**
     * Description of an inbox for labelling and searching purposes
     * @type {string}
     * @memberof InboxDto
     */
    description?: string;
    /**
     * The inbox's email address. Inbox projections and previews may not include the email address. To view the email address fetch the inbox entity directly. Send an email to this address and the inbox will receive and store it for you. Note the email address in MailSlurp match characters exactly and are case sensitive so `+123` additions are considered different addresses. To retrieve the email use the Inbox and Email Controller endpoints with the inbox ID.
     * @type {string}
     * @memberof InboxDto
     */
    emailAddress: string;
    /**
     * Inbox expiration time. When, if ever, the inbox should expire and be deleted. If null then this inbox is permanent and the emails in it won't be deleted. This is the default behavior unless expiration date is set. If an expiration date is set and the time is reached MailSlurp will expire the inbox and move it to an expired inbox entity. You can still access the emails belonging to it but it can no longer send or receive email.
     * @type {string}
     * @memberof InboxDto
     */
    expiresAt?: string;
    /**
     * Is the inbox a favorite inbox. Make an inbox a favorite is typically done in the dashboard for quick access or filtering
     * @type {boolean}
     * @memberof InboxDto
     */
    favourite: boolean;
    /**
     * Tags that inbox has been tagged with. Tags can be added to inboxes to group different inboxes within an account. You can also search for inboxes by tag in the dashboard UI.
     * @type {Array<string>}
     * @memberof InboxDto
     */
    tags?: Array<string>;
    /**
     * Type of inbox. HTTP inboxes are faster and better for most cases. SMTP inboxes are more suited for public facing inbound messages (but cannot send).
     * @type {string}
     * @memberof InboxDto
     */
    inboxType?: InboxDtoInboxTypeEnum;
    /**
     * Is the inbox readOnly for the caller. Read only means can not be deleted or modified. This flag is present when using team accounts and shared inboxes.
     * @type {boolean}
     * @memberof InboxDto
     */
    readOnly: boolean;
    /**
     * Virtual inbox can receive email but will not send emails to real recipients. Will save sent email record but never send an actual email. Perfect for testing mail server actions.
     * @type {boolean}
     * @memberof InboxDto
     */
    virtualInbox: boolean;
}
/**
 * @export
 * @enum {string}
 */
export declare enum InboxDtoInboxTypeEnum {
    HTTP_INBOX = "HTTP_INBOX",
    SMTP_INBOX = "SMTP_INBOX"
}
export declare function InboxDtoFromJSON(json: any): InboxDto;
export declare function InboxDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): InboxDto;
export declare function InboxDtoToJSON(value?: InboxDto | null): any;
