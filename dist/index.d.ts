import { AliasControllerApi, AttachmentControllerApi, AttachmentMetaData, BulkActionsControllerApi, CommonActionsControllerApi, ContactControllerApi, DomainControllerApi, Email, EmailControllerApi, EmailPreview, FetchAPI, FormControllerApi, GroupControllerApi, Inbox, InboxControllerApi, MatchOptions, PageInboxProjection, SendEmailOptions, TemplateControllerApi, UploadAttachmentOptions, WaitForControllerApi, WebhookControllerApi } from './generated';
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
 * Official MailSlurp Client
 *
 *
 *
 * ## Install
 * `npm install --save mailslurp-client`
 *
 * ## Configure
 * Create a MailSlurp account to get an [API Key](https://app.mailslurp.com/sign-up/).
 *
 * ```typescript
 * const MailSlurp = require('mailslurp-client').default;
 * const mailslurp = new MailSlurp({ apiKey: 'xxxx' })
 * ```
 *
 * ## Make requests
 *
 * ```typescript
 * const inbox = await mailslurp.createInbox()
 * await mailslurp.sendEmail({ to: [inbox.emailAddress] })
 * const email = await mailslurp.waitForLatestEmail(inbox.id)
 * ```
 *
 * Read [quick start guide](https://www.mailslurp.com/guides/) for more examples or see the methods below.
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
    /**
     * Create a new MailSlurp instance
     * @param opts
     */
    constructor(opts: Config);
    createInbox(emailAddress?: string, name?: string, description?: string, expiresAt?: Date, favourite?: boolean, tags?: Array<string>): Promise<Inbox>;
    deleteInbox(inboxId: string): Promise<Response>;
    emptyInbox(inboxId: string): Promise<Response>;
    getInbox(inboxId: string): Promise<Inbox>;
    /**
     * Get all inboxes
     *
     * [[include: list-inboxes.md]]
     */
    getInboxes(): Promise<Inbox[]>;
    /**
     * Get all inboxes paginated
     * Returns paginated inbox previews
     */
    getAllInboxes(page?: number, size?: number, favourite?: boolean, search?: string, sort?: SortEnum, tag?: string): Promise<PageInboxProjection>;
    waitForLatestEmail(inboxId?: string, timeout?: number, unreadOnly?: boolean): Promise<Email>;
    waitForNthEmail(inboxId: string, index: number, timeout?: number, unreadOnly?: boolean): Promise<Email>;
    waitForMatchingEmails(matchOptions: MatchOptions, count?: number, inboxId?: string, timeout?: number, unreadOnly?: boolean): Promise<EmailPreview[]>;
    waitForEmailCount(count?: number, inboxId?: string, timeout?: number, unreadOnly?: boolean): Promise<EmailPreview[]>;
    deleteEmail(emailId: string): Promise<Response>;
    /**
     * Get all emails
     * Returns paginated email previews
     */
    getAllEmails(page?: number, size?: number, inboxId?: Array<string>, sort?: SortEnum, unreadOnly?: boolean): Promise<import("./generated").PageEmailProjection>;
    /**
     * Get all emails in an inbox as EmailPreviews. To get the full email, use the getEmail endpoint
     *
     * [[include: get-emails.md]]
     *
     * @param inboxId
     * @param args
     */
    getEmails(inboxId: string, args?: GetMessagesOptions): Promise<EmailPreview[]>;
    /**
     * Get a full email from by id. To get an emails ID use the getEmails or waitFor methods with an inbox
     *
     * [[include: get-email.md]]
     *
     * @param emailId
     */
    getEmail(emailId: string): Promise<Email>;
    /**
     * Get an email's raw contents from by id
     * @param emailId
     */
    getRawEmail(emailId: string): Promise<string>;
    /**
     * Send and email from a given inbox
     *
     * [[include: send-email.md]]
     * @param inboxId
     * @param sendEmailOptions
     */
    sendEmail(inboxId: string, sendEmailOptions: SendEmailOptions): Promise<Response>;
    /**
     * Get email attachment by id
     *
     * Returns HTTP response containing byte stream
     */
    downloadAttachment(emailId: string, attachmentId: string): Promise<String>;
    /**
     * Upload an attachment for use in email sending
     *
     * Attachment contents must be a base64 encoded string
     */
    uploadAttachment(options: UploadAttachmentOptions): Promise<Array<String>>;
    /**
     * Get attachment MetaData
     *
     * MetaData includes name, size (bytes) and content-type.
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
};
export default MailSlurp;
