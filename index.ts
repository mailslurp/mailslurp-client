export * from './generated/index';
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
  EmailPreview, FetchAPI,
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
} from './generated/index';
import "isomorphic-fetch"
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

  fetchApi?: FetchAPI
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
  public readonly emails: EmailControllerApi;
  public readonly inboxes: InboxControllerApi;
  public readonly attachments: AttachmentControllerApi;

  public readonly common: CommonActionsControllerApi;
  public readonly bulk: BulkActionsControllerApi;
  public readonly waitFor: WaitForControllerApi;

  public readonly domains: DomainControllerApi;
  public readonly contacts: ContactControllerApi;
  public readonly groups: GroupControllerApi;
  public readonly templates: TemplateControllerApi;
  public readonly webhooks: WebhookControllerApi;

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
      fetchApi: opts.fetchApi || fetch
    });
    // instantiate api clients
    this.emails = new EmailControllerApi(clientConfiguration);
    this.inboxes = new InboxControllerApi(clientConfiguration);
    this.attachments = new AttachmentControllerApi(
      clientConfiguration
    );
    this.domains = new DomainControllerApi(clientConfiguration);

    this.contacts = new ContactControllerApi(clientConfiguration);
    this.groups = new GroupControllerApi(clientConfiguration);
    this.templates = new TemplateControllerApi(clientConfiguration);
    this.webhooks = new WebhookControllerApi(clientConfiguration);

    this.common = new CommonActionsControllerApi(
      clientConfiguration
    );
    this.bulk = new BulkActionsControllerApi(
      clientConfiguration
    );
    this.waitFor = new WaitForControllerApi(clientConfiguration);
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
      this.inboxes.createInbox({
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
      this.inboxes.deleteInbox({inboxId})
    );
  }

  async emptyInbox(inboxId: string): Promise<void> {
    return wrapCall('emptyInbox', () =>
      this.common.emptyInbox({inboxId})
    );
  }

  async getInbox(inboxId: string): Promise<Inbox> {
    return wrapCall('getInbox', () =>
      this.inboxes.getInbox({inboxId})
    );
  }

  /**
   * Get all inboxes
   *
   * [[include: list-inboxes.md]]
   */
  async getInboxes(): Promise<Inbox[]> {
    return wrapCall('getInboxes', () => this.inboxes.getInboxes());
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
      this.inboxes.getAllInboxes({
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
      this.waitFor.waitForLatestEmail({
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
      this.waitFor.waitForNthEmail({
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
      this.waitFor.waitForMatchingEmail({
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
      this.waitFor.waitForEmailCount({
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
      this.emails.deleteEmail({emailId})
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
      this.emails.getEmailsPaginated({
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
      this.inboxes.getEmails({
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
      this.emails.getEmail({emailId})
    );
  }

  /**
   * Get an email's raw contents from by id
   * @param emailId
   */
  async getRawEmail(emailId: string): Promise<string> {
    return wrapCall('getRawEmail', () =>
      this.emails.getRawEmailContents({emailId})
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
      this.inboxes.sendEmail({inboxId, sendEmailOptions})
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
      this.emails.downloadAttachment({attachmentId, emailId})
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
      this.attachments.uploadAttachment({
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
      this.emails.getAttachmentMetaData({
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

export default MailSlurp;
