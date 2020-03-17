import 'isomorphic-fetch';
import {
    AttachmentControllerApi,
    AttachmentMetaData,
    BulkActionsControllerApi,
    CommonActionsControllerApi,
    Configuration,
    ContactControllerApi,
    DomainControllerApi,
    Email,
    EmailControllerApi,
    EmailPreview,
    FetchAPI,
    GetAllInboxesSortEnum,
    GetEmailsPaginatedSortEnum,
    GetEmailsSortEnum,
    GroupControllerApi,
    Inbox,
    InboxControllerApi,
    MatchOptions,
    PageInboxProjection,
    SendEmailOptions,
    TemplateControllerApi,
    UploadAttachmentOptions,
    WaitForControllerApi,
    WebhookControllerApi,
} from './lib';
/**
 * MailSlurp config
 *
 * @remarks
 * [Obtain your API Key](https://app.mailslurp.com) in your dashboard.
 */
export type Config = {
    // obtain an apiKey at https://app.mailslurp.com
    apiKey: string;
    // optional attribution id (see sales)
    attribution?: string;
    // optional api base path
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
export class MailSlurp {
    public readonly emailController: EmailControllerApi;
    public readonly inboxController: InboxControllerApi;
    public readonly attachmentController: AttachmentControllerApi;

    public readonly commonController: CommonActionsControllerApi;
    public readonly bulkController: BulkActionsControllerApi;
    public readonly waitController: WaitForControllerApi;

    public readonly domainController: DomainControllerApi;
    public readonly contactController: ContactControllerApi;
    public readonly groupController: GroupControllerApi;
    public readonly templateController: TemplateControllerApi;
    public readonly webhookController: WebhookControllerApi;

    /**
     * Create a new MailSlurp instance
     * @param opts
     */
    constructor(opts: Config) {
        // check options
        if (!opts.apiKey) {
            throw 'Missing apiKey config parameter';
        }
        // create credentials
        const clientConfiguration = new Configuration({
            apiKey: opts.apiKey,
            basePath: opts.basePath,
            headers: {
                'x-client': 'mailslurp-client-ts-js',
                'x-attribution': opts.attribution,
            },
            fetchApi: opts.fetchApi || fetch,
        });
        // instantiate api clients
        this.emailController = new EmailControllerApi(clientConfiguration);
        this.inboxController = new InboxControllerApi(clientConfiguration);
        this.attachmentController = new AttachmentControllerApi(
            clientConfiguration
        );
        this.domainController = new DomainControllerApi(clientConfiguration);

        this.contactController = new ContactControllerApi(clientConfiguration);
        this.groupController = new GroupControllerApi(clientConfiguration);
        this.templateController = new TemplateControllerApi(
            clientConfiguration
        );
        this.webhookController = new WebhookControllerApi(clientConfiguration);

        this.commonController = new CommonActionsControllerApi(
            clientConfiguration
        );
        this.bulkController = new BulkActionsControllerApi(clientConfiguration);
        this.waitController = new WaitForControllerApi(clientConfiguration);
    }

    async createInbox(
        emailAddress?: string,
        name?: string,
        description?: string,
        expiresAt?: Date,
        favourite?: boolean,
        tags?: Array<string>
    ): Promise<Inbox> {
        return wrapCall('createInbox', () =>
            this.inboxController.createInbox({
                emailAddress,
                name,
                description,
                expiresAt,
                favourite,
                tags,
            })
        );
    }

    async deleteInbox(inboxId: string): Promise<void> {
        return wrapCall('deleteInbox', () =>
            this.inboxController.deleteInbox({ inboxId })
        );
    }

    async emptyInbox(inboxId: string): Promise<void> {
        return wrapCall('emptyInbox', () =>
            this.commonController.emptyInbox({ inboxId })
        );
    }

    async getInbox(inboxId: string): Promise<Inbox> {
        return wrapCall('getInbox', () =>
            this.inboxController.getInbox({ inboxId })
        );
    }

    /**
     * Get all inboxes
     *
     * [[include: list-inboxes.md]]
     */
    async getInboxes(): Promise<Inbox[]> {
        return wrapCall('getInboxes', () => this.inboxController.getInboxes());
    }

    /**
     * Get all inboxes paginated
     * Returns paginated inbox previews
     */
    async getAllInboxes(
        page?: number,
        size?: number,
        favourite?: boolean,
        search?: string,
        sort?: GetAllInboxesSortEnum
    ): Promise<PageInboxProjection> {
        return wrapCall('getAllInboxes', () =>
            this.inboxController.getAllInboxes({
                page,
                size,
                favourite,
                search,
                sort,
            })
        );
    }

    // waitFor methods

    async waitForLatestEmail(
        inboxId?: string,
        timeout?: number,
        unreadOnly?: boolean
    ): Promise<Email> {
        return wrapCall('waitForLatestEmail', () =>
            this.waitController.waitForLatestEmail({
                inboxId,
                timeout,
                unreadOnly,
            })
        );
    }

    async waitForNthEmail(
        inboxId: string,
        index: number,
        timeout?: number,
        unreadOnly?: boolean
    ): Promise<Email> {
        return wrapCall('waitForNthEmail', () =>
            this.waitController.waitForNthEmail({
                inboxId,
                index,
                timeout,
                unreadOnly,
            })
        );
    }

    async waitForMatchingEmails(
        matchOptions: MatchOptions,
        count?: number,
        inboxId?: string,
        timeout?: number,
        unreadOnly?: boolean
    ): Promise<EmailPreview[]> {
        return wrapCall('waitForMatchingEmail', () =>
            this.waitController.waitForMatchingEmail({
                matchOptions,
                count,
                inboxId,
                timeout,
                unreadOnly,
            })
        );
    }

    async waitForEmailCount(
        count?: number,
        inboxId?: string,
        timeout?: number,
        unreadOnly?: boolean
    ): Promise<EmailPreview[]> {
        return wrapCall('waitForEmailCount', () =>
            this.waitController.waitForEmailCount({
                count,
                inboxId,
                timeout,
                unreadOnly,
            })
        );
    }

    // email methods
    async deleteEmail(emailId: string): Promise<void> {
        return wrapCall('deleteEmail', () =>
            this.emailController.deleteEmail({ emailId })
        );
    }

    /**
     * Get all emails
     * Returns paginated email previews
     */
    async getAllEmails(
        page?: number,
        size?: number,
        inboxId?: Array<string>,
        sort?: GetEmailsPaginatedSortEnum,
        unreadOnly?: boolean
    ) {
        return wrapCall('getAllEmails', () =>
            this.emailController.getEmailsPaginated({
                page,
                size,
                inboxId,
                sort,
                unreadOnly,
            })
        );
    }

    /**
     * Get all emails in an inbox as EmailPreviews. To get the full email, use the getEmail endpoint
     *
     * [[include: get-emails.md]]
     *
     * @param inboxId
     * @param args
     */
    async getEmails(
        inboxId: string,
        args: GetMessagesOptions = {}
    ): Promise<EmailPreview[]> {
        return wrapCall('getEmails', () =>
            this.inboxController.getEmails({
                inboxId,
                limit: args.limit,
                minCount: args.minCount,
                retryTimeout: args.retryTimeout,
                since: args.since,
                sort: args.sort,
            })
        );
    }

    /**
     * Get a full email from by id. To get an emails ID use the getEmails or waitFor methods with an inbox
     *
     * [[include: get-email.md]]
     *
     * @param emailId
     */
    async getEmail(emailId: string): Promise<Email> {
        return wrapCall('getEmail', () =>
            this.emailController.getEmail({ emailId })
        );
    }

    /**
     * Get an email's raw contents from by id
     * @param emailId
     */
    async getRawEmail(emailId: string): Promise<string> {
        return wrapCall('getRawEmail', () =>
            this.emailController.getRawEmailContents({ emailId })
        );
    }

    /**
     * Send and email from a given inbox
     *
     * [[include: send-email.md]]
     * @param inboxId
     * @param sendEmailOptions
     */
    async sendEmail(
        inboxId: string,
        sendEmailOptions: SendEmailOptions
    ): Promise<void> {
        return wrapCall('sendEmail', () =>
            this.inboxController.sendEmail({ inboxId, sendEmailOptions })
        );
    }

    /**
     * Get email attachment by id
     *
     * Returns HTTP response containing byte stream
     */
    async downloadAttachment(
        emailId: string,
        attachmentId: string
    ): Promise<String> {
        return wrapCall('downloadAttachment', () =>
            this.emailController.downloadAttachment({ attachmentId, emailId })
        );
    }

    /**
     * Upload an attachment for use in email sending
     *
     * Attachment contents must be a base64 encoded string
     */
    async uploadAttachment(
        options: UploadAttachmentOptions
    ): Promise<Array<String>> {
        return wrapCall('uploadAttachment', () =>
            this.attachmentController.uploadAttachment({
                uploadOptions: options,
            })
        );
    }

    /**
     * Get attachment MetaData
     *
     * MetaData includes name, size (bytes) and content-type.
     */
    async getAttachmentMetaData(
        attachmentId: string,
        emailId: string
    ): Promise<AttachmentMetaData> {
        return wrapCall('getAttachmentMetaData', () =>
            this.emailController.getAttachmentMetaData({
                attachmentId,
                emailId,
            })
        );
    }
}

/**
 * Options for advanced message fetching
 *
 * @remarks
 * For more control over fetching. See also Webhook endpoints
 */
export type GetMessagesOptions = {
    // max emails to return
    limit?: number;
    // minimum number of emails to expect.
    // when give, server will retry databases until this number is met or the retry timeout is exceeded
    minCount?: number;
    // maximum time to wait for conditions to be met
    retryTimeout?: number;
    // ignore emails received before this ISO-8601 date time
    since?: Date;
    // sort direction
    sort?: GetEmailsSortEnum;
};

// helper
async function wrapCall<T>(tag: String, fn: () => Promise<T>): Promise<T> {
    try {
        return await fn();
    } catch (e) {
        throw e.json ? await e.json() : e;
    }
}

export * from './lib';
export default MailSlurp;
