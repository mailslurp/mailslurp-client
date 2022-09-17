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
 * Options for creating an inbox. An inbox has a real email address that can send and receive emails. Inboxes can be permanent or expire at a given time. Inboxes are either `SMTP` or `HTTP` mailboxes. `SMTP` inboxes are processed by a mail server running at `mx.mailslurp.com` while `HTTP` inboxes are processed by AWS SES. Inboxes can use a custom email address (by verifying your own domain) or a randomly assigned email ending in either `mailslurp.com` or (if `useDomainPool` is enabled) ending in a similar domain such as `mailslurp.xyz` (selected at random).
 * @export
 * @interface CreateInboxDto
 */
export interface CreateInboxDto {
    /**
     * A custom email address to use with the inbox. Defaults to null. When null MailSlurp will assign a random email address to the inbox such as `123@mailslurp.com`. If you use the `useDomainPool` option when the email address is null it will generate an email address with a more varied domain ending such as `123@mailslurp.info` or `123@mailslurp.biz`. When a custom email address is provided the address is split into a domain and the domain is queried against your user. If you have created the domain in the MailSlurp dashboard and verified it you can use any email address that ends with the domain. Note domain types must match the inbox type - so `SMTP` inboxes will only work with `SMTP` type domains. Avoid `SMTP` inboxes if you need to send emails as they can only receive. Send an email to this address and the inbox will receive and store it for you. To retrieve the email use the Inbox and Email Controller endpoints with the inbox ID.
     * @type {string}
     * @memberof CreateInboxDto
     */
    emailAddress?: string | null;
    /**
     * Optional name of the inbox. Displayed in the dashboard for easier search and used as the sender name when sending emails.
     * @type {string}
     * @memberof CreateInboxDto
     */
    name?: string | null;
    /**
     * Optional description of the inbox for labelling purposes. Is shown in the dashboard and can be used with
     * @type {string}
     * @memberof CreateInboxDto
     */
    description?: string | null;
    /**
     * Use the MailSlurp domain name pool with this inbox when creating the email address. Defaults to null. If enabled the inbox will be an email address with a domain randomly chosen from a list of the MailSlurp domains. This is useful when the default `@mailslurp.com` email addresses used with inboxes are blocked or considered spam by a provider or receiving service. When domain pool is enabled an email address will be generated ending in `@mailslurp.{world,info,xyz,...}` . This means a TLD is randomly selecting from a list of `.biz`, `.info`, `.xyz` etc to add variance to the generated email addresses. When null or false MailSlurp uses the default behavior of `@mailslurp.com` or custom email address provided by the emailAddress field. Note this feature is only available for `HTTP` inbox types.
     * @type {boolean}
     * @memberof CreateInboxDto
     */
    useDomainPool?: boolean | null;
    /**
     * Tags that inbox has been tagged with. Tags can be added to inboxes to group different inboxes within an account. You can also search for inboxes by tag in the dashboard UI.
     * @type {Array<string>}
     * @memberof CreateInboxDto
     */
    tags?: Array<string> | null;
    /**
     * Optional inbox expiration date. If null then this inbox is permanent and the emails in it won't be deleted. If an expiration date is provided or is required by your plan the inbox will be closed when the expiration time is reached. Expired inboxes still contain their emails but can no longer send or receive emails. An ExpiredInboxRecord is created when an inbox and the email address and inbox ID are recorded. The expiresAt property is a timestamp string in ISO DateTime Format yyyy-MM-dd'T'HH:mm:ss.SSSXXX.
     * @type {Date}
     * @memberof CreateInboxDto
     */
    expiresAt?: Date | null;
    /**
     * Is the inbox a favorite. Marking an inbox as a favorite is typically done in the dashboard for quick access or filtering
     * @type {boolean}
     * @memberof CreateInboxDto
     */
    favourite?: boolean | null;
    /**
     * Number of milliseconds that inbox should exist for
     * @type {number}
     * @memberof CreateInboxDto
     */
    expiresIn?: number | null;
    /**
     * DEPRECATED (team access is always true). Grant team access to this inbox and the emails that belong to it for team members of your organization.
     * @type {boolean}
     * @memberof CreateInboxDto
     */
    allowTeamAccess?: boolean | null;
    /**
     * Type of inbox. HTTP inboxes are faster and better for most cases. SMTP inboxes are more suited for public facing inbound messages (but cannot send).
     * @type {string}
     * @memberof CreateInboxDto
     */
    inboxType?: CreateInboxDtoInboxTypeEnum;
    /**
     * Virtual inbox prevents any outbound emails from being sent. It creates sent email records but will never send real emails to recipients. Great for testing and faking email sending.
     * @type {boolean}
     * @memberof CreateInboxDto
     */
    virtualInbox?: boolean | null;
}
/**
 * @export
 * @enum {string}
 */
export declare enum CreateInboxDtoInboxTypeEnum {
    HTTP_INBOX = "HTTP_INBOX",
    SMTP_INBOX = "SMTP_INBOX"
}
export declare function CreateInboxDtoFromJSON(json: any): CreateInboxDto;
export declare function CreateInboxDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateInboxDto;
export declare function CreateInboxDtoToJSON(value?: CreateInboxDto | null): any;
