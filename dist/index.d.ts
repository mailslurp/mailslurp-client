import { AliasControllerApi, AttachmentControllerApi, AttachmentMetaData, BulkActionsControllerApi, CommonActionsControllerApi, ContactControllerApi, CreateInboxDto, DomainControllerApi, Email, EmailControllerApi, EmailPreview, FetchAPI, FormControllerApi, GroupControllerApi, Inbox, InboxControllerApi, MatchOptions, PageInboxProjection, SendEmailOptions, TemplateControllerApi, UploadAttachmentOptions, WaitForControllerApi, WebhookControllerApi, MissedEmailControllerApi, InboxRulesetControllerApi, MailServerControllerApi, TrackingControllerApi, InboxForwarderControllerApi } from './generated';
export * from './generated';
declare type SortEnum = 'ASC' | 'DESC';
/**
 * MailSlurp config
 *
 * @remarks
 * [Obtain your API Key](https://app.mailslurp.com) in your dashboard.
 */
export declare type Config = {
    apiKey: string;
    attribution?: string;
    basePath?: string;
    fetchApi?: FetchAPI;
};
/**
 * The official MailSlurp Javascript library. A wrapper around the [MailSlurp REST API](https://www.mailslurp.com/docs/api/docs/Apis/).
 *
 * Create an instance of this class to call MailSlurp API methods. Contains top level convenience functions. Access the full API controllers as properties on the instance.
 *
 * ## Create instance
 * You must provide a configuration object with [your API Key](https://app.mailslurp.com) as the `apiKey` property
 * when creating a new instance.
 *
 * ```javascript
 * const MailSlurp = require('mailslurp-client').default;
 * const mailslurp = new MailSlurp({
 *  apiKey: 'xxxx'
 * })
 * ```

 * ## Call methods
 * Most methods are asynchronous and return Promises. You can `await` the results or use `.then(result => {})`
 * Common controllers include the [InboxController](https://www.mailslurp.com/docs/js/docs/classes/inboxcontrollerapi/), [EmailController](https://www.mailslurp.com/docs/js/docs/classes/emailcontrollerapi/) and the [WaitForController](https://www.mailslurp.com/docs/js/docs/classes/waitforcontrollerapi/) for receiving emails.
 *
 * ```javascript
 * // call convenience functions
 * const email = await mailslurp.waitForLatestEmail(...args)
 *
 * // call controllers to access full API methods
 * const alias = await mailslurp.aliasController.createAlias(...args)
 *
 * // or create a controller
 * const inboxController = mailslurp.inboxController
 * const inbox = await inboxController.createInbox()
 *
 * // use Promises methods if you prefer
 * mailslurp.getEmails(inbox.id).then(emails => {
 *    // handle emails
 *    console.log(emails))
 *  }
 * ```
 */
export declare class MailSlurp {
    readonly emailController: EmailControllerApi;
    readonly inboxController: InboxControllerApi;
    readonly attachmentController: AttachmentControllerApi;
    readonly commonController: CommonActionsControllerApi;
    readonly bulkController: BulkActionsControllerApi;
    readonly waitController: WaitForControllerApi;
    readonly aliasController: AliasControllerApi;
    readonly formController: FormControllerApi;
    readonly domainController: DomainControllerApi;
    readonly contactController: ContactControllerApi;
    readonly groupController: GroupControllerApi;
    readonly templateController: TemplateControllerApi;
    readonly webhookController: WebhookControllerApi;
    readonly mailServerController: MailServerControllerApi;
    readonly missedEmailController: MissedEmailControllerApi;
    readonly inboxRulesetController: InboxRulesetControllerApi;
    readonly inboxForwarderController: InboxForwarderControllerApi;
    readonly trackingController: TrackingControllerApi;
    /**
     * Create a new MailSlurp instance.
     *
     * Contains top level convenience functions. Access the full API controllers as properties on the instance.
     *
     * ```javascript
     * const MailSlurp = require('mailslurp-client').default
     * const mailslurp = new MailSlurp({ apiKey })
     * ```
     * @param opts
     */
    constructor(opts: Config);
    /**
     * Create a new inbox and with a randomized email address to send and receive from. Pass emailAddress parameter if you wish to use a specific email address. Creating an inbox is required before sending or receiving emails. If writing tests it is recommended that you create a new inbox during each test method so that it is unique and empty.
     * @summary Create an Inbox (email address)
     * @param {string} [description] Optional description for an inbox.
     * @param {string} [emailAddress] Optional email address including domain you wish inbox to use (eg: test123@mydomain.com). Only supports domains that you have registered and verified with MailSlurp using dashboard or &#x60;createDomain&#x60; method.
     * @param {Date} [expiresAt] Optional expires at timestamp. If your plan supports this feature you can specify when an inbox should expire. If left empty inbox will exist permanently or expire when your plan dictates
     * @param {boolean} [favourite] Is inbox favourited.
     * @param {string} [name] Optional name for an inbox.
     * @param {Array<string>} [tags] Optional tags for an inbox. Can be used for searching and filtering inboxes.
     * @param {boolean} [teamAccess] Optional flag to allow team access to inbox.
     * @param {number} [expiresIn] Optional number of milliseconds to expire inbox after.
     * @param {boolean} [useDomainPool] Optional flag to use the MailSlurp domain pool for domain endings.
     * @param {string} inboxType Optional inbox type HTTP or SMTP
     */
    createInbox(emailAddress?: string, name?: string, description?: string, expiresAt?: Date, favourite?: boolean, tags?: Array<string>, teamAccess?: boolean, expiresIn?: number, useDomainPool?: boolean, inboxType?: 'HTTP_INBOX' | 'SMTP_INBOX'): Promise<Inbox>;
    /**
     * Create an inbox using CreateInboxDto options. More convenient that `createInbox` in some cases.
     * @param createInboxOptions
     */
    createInboxWithOptions(createInboxOptions: CreateInboxDto): Promise<Inbox>;
    /**
     * Permanently delete an inbox and associated email address as well as all emails within the given inbox. This action cannot be undone. Note: deleting an inbox will not affect your account usage. Monthly inbox usage is based on how many inboxes you create within 30 days, not how many exist at time of request.
     * @summary Delete inbox
     * @param {string} inboxId inboxId
     */
    deleteInbox(inboxId: string): Promise<Response>;
    /**
     * Deletes all emails
     * @summary Delete all emails in an inbox
     * @param {string} inboxId inboxId
     */
    emptyInbox(inboxId: string): Promise<Response>;
    /**
     * Returns an inbox's properties, including its email address and ID.
     * @summary Get Inbox
     * @param {string} inboxId inboxId
     */
    getInbox(inboxId: string): Promise<Inbox>;
    /**
     * List the inboxes you have created
     * @summary List Inboxes / Email Addresses
     */
    getInboxes(): Promise<Inbox[]>;
    /**
     * List inboxes in paginated form. Allows for page index, page size, and sort direction. Can also filter by favourited or email address like pattern.
     * @summary List Inboxes Paginated
     * @param {boolean} [favourite] Optionally filter results for favourites only
     * @param {number} [page] Optional page index in inbox list pagination
     * @param {string} [search] Optionally filter by search words partial matching ID, tags, name, and email address
     * @param {number} [size] Optional page size in inbox list pagination
     * @param {'ASC' | 'DESC'} [sort] Optional createdAt sort direction ASC or DESC
     * @param {string} [tag] Optionally filter by tag
     */
    getAllInboxes(page?: number, size?: number, favourite?: boolean, search?: string, sort?: SortEnum, tag?: string): Promise<PageInboxProjection>;
    /**
     * Will return either the last received email or wait for an email to arrive and return that. If you need to wait for an email for a non-empty inbox see the other receive methods such as waitForNthEmail or waitForEmailCount.
     * @summary Fetch inbox's latest email or if empty wait for an email to arrive
     * @param {string} [inboxId] Id of the inbox we are fetching emails from
     * @param {number} [timeout] Max milliseconds to wait
     * @param {boolean} [unreadOnly] Optional filter for unread only
     */
    waitForLatestEmail(inboxId?: string, timeout?: number, unreadOnly?: boolean): Promise<Email>;
    /**
     * If nth email is already present in inbox then return it. If not hold the connection open until timeout expires or the nth email is received and returned.
     * @summary Wait for or fetch the email with a given index in the inbox specified
     * @param {string} [inboxId] Id of the inbox you are fetching emails from
     * @param {number} [index] Zero based index of the email to wait for. If an inbox has 1 email already and you want to wait for the 2nd email pass index&#x3D;1
     * @param {number} [timeout] Max milliseconds to wait for the nth email if not already present
     * @param {boolean} [unreadOnly] Optional filter for unread only
     */
    waitForNthEmail(inboxId: string, index: number, timeout?: number, unreadOnly?: boolean): Promise<Email>;
    /**
     * Perform a search of emails in an inbox with the given patterns. If results match expected count then return or else retry the search until results are found or timeout is reached. Match options allow simple CONTAINS or EQUALS filtering on SUBJECT, TO, BCC, CC, and FROM. See the `MatchOptions` object for options.
     * @summary Wait or return list of emails that match simple matching patterns
     * @param {MatchOptions} matchOptions matchOptions
     * @param {number} [count] Number of emails to wait for. Must be greater that 1
     * @param {string} [inboxId] Id of the inbox we are fetching emails from
     * @param {number} [timeout] Max milliseconds to wait
     * @param {boolean} [unreadOnly] Optional filter for unread only
     */
    waitForMatchingEmails(matchOptions: MatchOptions, count?: number, inboxId?: string, timeout?: number, unreadOnly?: boolean): Promise<EmailPreview[]>;
    /**
     * If inbox contains count or more emails at time of request then return count worth of emails. If not wait until the count is reached and return those or return an error if timeout is exceeded.
     * @summary Wait for and return count number of emails
     * @param {number} [count] Number of emails to wait for. Must be greater that 1
     * @param {string} [inboxId] Id of the inbox we are fetching emails from
     * @param {number} [timeout] Max milliseconds to wait
     * @param {boolean} [unreadOnly] Optional filter for unread only
     */
    waitForEmailCount(count?: number, inboxId?: string, timeout?: number, unreadOnly?: boolean): Promise<EmailPreview[]>;
    /**
     * Deletes an email and removes it from the inbox. Deleted emails cannot be recovered.
     * @summary Delete an email
     * @param {string} emailId emailId
     */
    deleteEmail(emailId: string): Promise<Response>;
    /**
     * By default returns all emails across all inboxes sorted by ascending created at date. Responses are paginated. You can restrict results to a list of inbox IDs. You can also filter out read messages
     * @summary Get all emails
     * @param {Array<string>} [inboxId] Optional inbox ids to filter by. Can be repeated. By default will use all inboxes belonging to your account.
     * @param {number} [page] Optional page index in email list pagination
     * @param {number} [size] Optional page size in email list pagination
     * @param {'ASC' | 'DESC'} [sort] Optional createdAt sort direction ASC or DESC
     * @param {boolean} [unreadOnly] Optional filter for unread emails only. All emails are considered unread until they are viewed in the dashboard or requested directly
     * @param searchFilter Optional search filter
     */
    getAllEmails(page?: number, size?: number, inboxId?: Array<string>, sort?: SortEnum, unreadOnly?: boolean, searchFilter?: string): Promise<import("./generated").PageEmailProjection>;
    /**
     * List emails that an inbox has received. Only emails that are sent to the inbox's email address will appear in the inbox. It may take several seconds for any email you send to an inbox's email address to appear in the inbox. To make this endpoint wait for a minimum number of emails use the `minCount` parameter. The server will retry the inbox database until the `minCount` is satisfied or the `retryTimeout` is reached
     * @summary Get emails in an Inbox
     * @param {string} inboxId Id of inbox that emails belongs to
     * @param {Object} GetMessagesOptions see `GetMessagesOptions` details
     */
    getEmails(inboxId: string, args?: GetMessagesOptions): Promise<EmailPreview[]>;
    /**
     * Returns an EmailDto object with headers and content. To retrieve the raw unparsed email use the getRawEmail endpoints
     * @summary Get email content
     * @param {string} emailId emailId
     */
    getEmail(emailId: string): Promise<Email>;
    /**
     * Returns a raw, unparsed, and unprocessed email. If your client has issues processing the response it is likely due to the response content-type which is text/plain. If you need a JSON response content-type use the getRawEmailJson endpoint
     * @summary Get raw email string
     * @param {string} emailId emailId
     */
    getRawEmail(emailId: string): Promise<string>;
    /**
     * Send an email from an inbox's email address.  The request body should contain the `SendEmailOptions` that include recipients, attachments, body etc. See `SendEmailOptions` for all available properties. Note the `inboxId` refers to the inbox's id not the inbox's email address. See https://www.mailslurp.com/guides/ for more information on how to send emails.
     * @summary Send Email
     * @param {string} inboxId ID of the inbox you want to send the email from
     * @param {SendEmailOptions} [sendEmailOptions] Options for the email
     */
    sendEmail(inboxId: string, sendEmailOptions: SendEmailOptions): Promise<Response>;
    /**
     * Returns the specified attachment for a given email as a byte stream (file download). You can find attachment ids in email responses endpoint responses. The response type is application/octet-stream.
     * @summary Get email attachment bytes
     * @param {string} emailId emailId
     * @param {string} attachmentId attachmentId
     */
    downloadAttachment(emailId: string, attachmentId: string): Promise<String>;
    /**
     * Upload an attachment for use in email sending. Attachment contents must be a base64 encoded string.
     * When sending emails with attachments first upload each attachment with this endpoint.
     * Record the returned attachment IDs. Then use these attachment IDs in the SendEmailOptions when sending an email.
     * This means that attachments can easily be reused.
     * @summary Upload an attachment for sending
     * @param {UploadAttachmentOptions} uploadOptions uploadOptions
     */
    uploadAttachment(options: UploadAttachmentOptions): Promise<Array<String>>;
    /**
     * Get attachment MetaData
     *
     * MetaData includes name, size (bytes) and content-type.
     * @summary Get email attachment metadata
     * @param {string} attachmentId attachmentId
     * @param {string} emailId emailId
     */
    getAttachmentMetaData(attachmentId: string, emailId: string): Promise<AttachmentMetaData>;
}
/**
 * Options for advanced message fetching
 *
 * @remarks
 * For more control over fetching. See also Webhook endpoints
 */
export declare type GetMessagesOptions = {
    limit?: number;
    minCount?: number;
    retryTimeout?: number;
    since?: Date;
    sort?: SortEnum;
    size?: number;
};
export declare function wrapException<T>(fn: () => Promise<T>): Promise<T>;
export interface Result<T> {
    content?: T;
    error?: {
        statusCode: number;
        message: string;
    };
}
export declare function wrapResult<T>(fn: () => Promise<T>): Promise<Result<T>>;
export default MailSlurp;
