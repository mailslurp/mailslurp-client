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
 * Organization team inbox
 * @export
 * @interface OrganizationInboxProjection
 */
export interface OrganizationInboxProjection {
    /**
     * ID of the inbox. The ID is a UUID-V4 format string. Use the inboxId for calls to Inbox and Email Controller endpoints. See the emailAddress property for the email address or the inbox. To get emails in an inbox use the WaitFor and Inbox Controller methods `waitForLatestEmail` and `getEmails` methods respectively. Inboxes can be used with aliases to forward emails automatically.
     * @type {string}
     * @memberof OrganizationInboxProjection
     */
    id: string;
    /**
     * ID of custom domain used by the inbox if any
     * @type {string}
     * @memberof OrganizationInboxProjection
     */
    domainId?: string | null;
    /**
     * When the inbox was created. Time stamps are in ISO DateTime Format `yyyy-MM-dd'T'HH:mm:ss.SSSXXX` e.g. `2000-10-31T01:30:00.000-05:00`.
     * @type {Date}
     * @memberof OrganizationInboxProjection
     */
    createdAt: Date;
    /**
     * Name of the inbox and used as the sender name when sending emails .Displayed in the dashboard for easier search
     * @type {string}
     * @memberof OrganizationInboxProjection
     */
    name?: string | null;
    /**
     * The inbox's email address. Inbox projections and previews may not include the email address. To view the email address fetch the inbox entity directly. Send an email to this address and the inbox will receive and store it for you. Note the email address in MailSlurp match characters exactly and are case sensitive so `+123` additions are considered different addresses. To retrieve the email use the Inbox and Email Controller endpoints with the inbox ID.
     * @type {string}
     * @memberof OrganizationInboxProjection
     */
    emailAddress: string | null;
    /**
     * Is the inbox a favorite inbox. Make an inbox a favorite is typically done in the dashboard for quick access or filtering
     * @type {boolean}
     * @memberof OrganizationInboxProjection
     */
    favourite: boolean;
    /**
     * Tags that inbox has been tagged with. Tags can be added to inboxes to group different inboxes within an account. You can also search for inboxes by tag in the dashboard UI.
     * @type {Array<string>}
     * @memberof OrganizationInboxProjection
     */
    tags?: Array<string> | null;
    /**
     * Does inbox permit team access for organization team members. If so team users can use inbox and emails associated with it. See the team access guide at https://www.mailslurp.com/guides/team-email-account-sharing/
     * @type {boolean}
     * @memberof OrganizationInboxProjection
     */
    teamAccess: boolean;
    /**
     * Type of inbox. HTTP inboxes are faster and better for most cases. SMTP inboxes are more suited for public facing inbound messages (but cannot send).
     * @type {string}
     * @memberof OrganizationInboxProjection
     */
    inboxType?: OrganizationInboxProjectionInboxTypeEnum;
    /**
     * Is the inbox readOnly for the caller. Read only means can not be deleted or modified. This flag is present when using team accounts and shared inboxes.
     * @type {boolean}
     * @memberof OrganizationInboxProjection
     */
    readOnly: boolean;
    /**
     * Virtual inbox can receive email but will not send emails to real recipients. Will save sent email record but never send an actual email. Perfect for testing mail server actions.
     * @type {boolean}
     * @memberof OrganizationInboxProjection
     */
    virtualInbox: boolean;
    /**
     * Inbox function if used as a primitive for another system.
     * @type {string}
     * @memberof OrganizationInboxProjection
     */
    functionsAs?: OrganizationInboxProjectionFunctionsAsEnum;
    /**
     * ID of user that inbox belongs to
     * @type {string}
     * @memberof OrganizationInboxProjection
     */
    userId: string;
    /**
     * Description of an inbox for labelling and searching purposes
     * @type {string}
     * @memberof OrganizationInboxProjection
     */
    description?: string | null;
    /**
     * Inbox expiration time. When, if ever, the inbox should expire and be deleted. If null then this inbox is permanent and the emails in it won't be deleted. This is the default behavior unless expiration date is set. If an expiration date is set and the time is reached MailSlurp will expire the inbox and move it to an expired inbox entity. You can still access the emails belonging to it but it can no longer send or receive email.
     * @type {Date}
     * @memberof OrganizationInboxProjection
     */
    expiresAt?: Date | null;
}
/**
 * @export
 * @enum {string}
 */
export declare enum OrganizationInboxProjectionInboxTypeEnum {
    HTTP_INBOX = "HTTP_INBOX",
    SMTP_INBOX = "SMTP_INBOX"
}
/**
 * @export
 * @enum {string}
 */
export declare enum OrganizationInboxProjectionFunctionsAsEnum {
    ALIAS = "ALIAS",
    THREAD = "THREAD",
    CATCH_ALL = "CATCH_ALL",
    CONNECTOR = "CONNECTOR",
    ACCOUNT = "ACCOUNT",
    GUEST = "GUEST"
}
export declare function OrganizationInboxProjectionFromJSON(json: any): OrganizationInboxProjection;
export declare function OrganizationInboxProjectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrganizationInboxProjection;
export declare function OrganizationInboxProjectionToJSON(value?: OrganizationInboxProjection | null): any;
