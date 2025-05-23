// @ts-ignore
import InboxTypeEnum = CreateInboxDto.InboxTypeEnum;
require('cross-fetch/polyfill');
import {
  AIControllerApi,
  AliasControllerApi,
  UserControllerApi,
  AttachmentControllerApi,
  AttachmentMetaData,
  BounceControllerApi,
  BulkActionsControllerApi,
  CommonActionsControllerApi,
  Configuration,
  ContactControllerApi,
  CreateInboxDto,
  CreateInboxInboxTypeEnum,
  DomainControllerApi,
  Email,
  EmailControllerApi,
  EmailPreview,
  EmailVerificationControllerApi,
  FetchAPI,
  FormControllerApi,
  GetAllInboxesSortEnum,
  GetEmailsPaginatedSortEnum,
  GetEmailsSortEnum,
  GroupControllerApi,
  ImapSmtpAccessDetails,
  InboxControllerApi,
  InboxDto,
  InboxForwarderControllerApi,
  InboxRulesetControllerApi,
  MailServerControllerApi,
  MatchOptions,
  MissedEmailControllerApi,
  PageInboxProjection,
  PhoneControllerApi,
  SendEmailOptions,
  SentEmailDto,
  SentEmailsControllerApi,
  SmsControllerApi,
  TemplateControllerApi,
  TrackingControllerApi,
  UploadAttachmentOptions,
  WaitForControllerApi,
  WebhookControllerApi,
  InboxReplierControllerApi,
} from './generated';

export * from './generated';

type SortEnum = 'ASC' | 'DESC';
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
  // optional fetch override
  fetchApi?: FetchAPI;
  // optional request headers map
  headers?: { [key: string]: string };
};

/**
 * The official MailSlurp Javascript library. A wrapper around the [MailSlurp REST API](https://docs.mailslurp.com/api/docs/Apis/).
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
 * Common controllers include the [InboxController](https://mailslurp.github.io/mailslurp-client/classes/InboxControllerApi.html), [EmailController](https://mailslurp.github.io/mailslurp-client/classes/EmailControllerApi.html), [SMSController](https://mailslurp.github.io/mailslurp-client/classes/SmsControllerApi.html) and the [WaitForController](https://mailslurp.github.io/mailslurp-client/classes/WaitForControllerApi.html) for receiving emails.
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
export class MailSlurp {
  public readonly emailController: EmailControllerApi;
  public readonly emailVerificationController: EmailVerificationControllerApi;
  public readonly inboxController: InboxControllerApi;
  public readonly userController: UserControllerApi;
  public readonly phoneController: PhoneControllerApi;
  public readonly smsController: SmsControllerApi;
  public readonly sentController: SentEmailsControllerApi;
  public readonly inboxReplierController: InboxReplierControllerApi;
  public readonly attachmentController: AttachmentControllerApi;

  public readonly commonController: CommonActionsControllerApi;
  public readonly bulkController: BulkActionsControllerApi;
  public readonly waitController: WaitForControllerApi;

  public readonly aiController: AIControllerApi;
  public readonly aliasController: AliasControllerApi;
  public readonly formController: FormControllerApi;
  public readonly domainController: DomainControllerApi;
  public readonly contactController: ContactControllerApi;
  public readonly groupController: GroupControllerApi;
  public readonly templateController: TemplateControllerApi;
  public readonly webhookController: WebhookControllerApi;
  public readonly mailServerController: MailServerControllerApi;
  public readonly missedEmailController: MissedEmailControllerApi;
  public readonly inboxRulesetController: InboxRulesetControllerApi;
  public readonly inboxForwarderController: InboxForwarderControllerApi;
  public readonly trackingController: TrackingControllerApi;
  public readonly bounceController: BounceControllerApi;

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
  constructor(opts: Config) {
    // check options
    if (!opts.apiKey) {
      throw 'Missing apiKey config parameter';
    }
    const _fetch: any = opts.fetchApi || fetch;
    // create credentials
    const clientConfiguration = new Configuration({
      apiKey: opts.apiKey,
      basePath: opts.basePath || 'https://javascript.api.mailslurp.com',
      headers: opts.headers || undefined,
    });
    const args = [clientConfiguration, clientConfiguration.basePath, _fetch];

    // instantiate api clients
    this.emailVerificationController = new EmailVerificationControllerApi(
      ...args
    );
    this.phoneController = new PhoneControllerApi(...args);
    this.smsController = new SmsControllerApi(...args);
    this.userController = new UserControllerApi(...args);
    this.emailController = new EmailControllerApi(...args);
    this.inboxController = new InboxControllerApi(...args);
    this.attachmentController = new AttachmentControllerApi(...args);
    this.domainController = new DomainControllerApi(...args);
    this.sentController = new SentEmailsControllerApi(...args);

    this.aiController = new AIControllerApi(...args);
    this.aliasController = new AliasControllerApi(...args);
    this.formController = new FormControllerApi(...args);
    this.contactController = new ContactControllerApi(...args);
    this.groupController = new GroupControllerApi(...args);
    this.templateController = new TemplateControllerApi(...args);
    this.webhookController = new WebhookControllerApi(...args);

    this.commonController = new CommonActionsControllerApi(...args);
    this.bulkController = new BulkActionsControllerApi(...args);
    this.waitController = new WaitForControllerApi(...args);
    this.mailServerController = new MailServerControllerApi(...args);
    this.missedEmailController = new MissedEmailControllerApi(...args);
    this.inboxRulesetController = new InboxRulesetControllerApi(...args);
    this.inboxForwarderController = new InboxForwarderControllerApi(...args);
    this.inboxReplierController = new InboxReplierControllerApi(...args);
    this.trackingController = new TrackingControllerApi(...args);
    this.bounceController = new BounceControllerApi(...args);
  }

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
  async createInbox(
    emailAddress?: string,
    name?: string,
    description?: string,
    expiresAt?: Date,
    favourite?: boolean,
    tags?: Array<string>,
    teamAccess?: boolean,
    expiresIn?: number,
    useDomainPool?: boolean,
    inboxType?: 'HTTP_INBOX' | 'SMTP_INBOX'
  ): Promise<InboxDto> {
    return wrapCall('createInbox', () =>
      this.inboxController.createInbox({
        description,
        emailAddress,
        expiresAt,
        expiresIn,
        favourite,
        inboxType: inboxType
          ? inboxType === 'HTTP_INBOX'
            ? CreateInboxInboxTypeEnum.HTTP_INBOX
            : CreateInboxInboxTypeEnum.SMTP_INBOX
          : undefined,
        name,
        tags,
        useDomainPool,
      })
    );
  }

  /**
   * Create an inbox using CreateInboxDto options. More convenient that `createInbox` in some cases.
   * @param createInboxOptions
   */
  async createInboxWithOptions(
    createInboxOptions: CreateInboxDto
  ): Promise<InboxDto> {
    return wrapCall('createInbox', () =>
      this.inboxController.createInboxWithOptions({
        createInboxDto: createInboxOptions,
      })
    );
  }

  async getImapSmtpAccessDetails(
    inboxId?: string
  ): Promise<ImapSmtpAccessDetails> {
    return wrapCall('createInbox', () =>
      this.inboxController.getImapSmtpAccess({ inboxId })
    );
  }

  /**
   * Permanently delete an inbox and associated email address as well as all emails within the given inbox. This action cannot be undone. Note: deleting an inbox will not affect your account usage. Monthly inbox usage is based on how many inboxes you create within 30 days, not how many exist at time of request.
   * @summary Delete inbox
   * @param {string} inboxId inboxId
   */
  async deleteInbox(inboxId: string): Promise<void> {
    return wrapCall('deleteInbox', () =>
      this.inboxController.deleteInbox({ inboxId })
    );
  }

  /**
   * Deletes all emails
   * @summary Delete all emails in an inbox
   * @param {string} inboxId inboxId
   */
  async emptyInbox(inboxId: string): Promise<void> {
    return wrapCall('emptyInbox', () =>
      this.commonController.emptyInbox({ inboxId })
    );
  }

  /**
   * Returns an inbox's properties, including its email address and ID.
   * @summary Get Inbox
   * @param {string} inboxId inboxId
   */
  async getInbox(inboxId: string): Promise<InboxDto> {
    return wrapCall('getInbox', () =>
      this.inboxController.getInbox({ inboxId })
    );
  }

  /**
   * List the inboxes you have created
   * @summary List Inboxes / Email Addresses
   */
  async getInboxes(): Promise<InboxDto[]> {
    return wrapCall('getInboxes', () => this.inboxController.getInboxes({}));
  }

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
  async getAllInboxes(
    page?: number,
    size?: number,
    favourite?: boolean,
    search?: string,
    sort?: SortEnum,
    tag?: string
  ): Promise<PageInboxProjection> {
    return wrapCall('getAllInboxes', () =>
      this.inboxController.getAllInboxes({
        favourite,
        page,
        search,
        size,
        sort: sort
          ? sort == 'ASC'
            ? GetAllInboxesSortEnum.ASC
            : GetAllInboxesSortEnum.DESC
          : undefined,
        tag,
      })
    );
  }

  // waitFor methods
  /**
   * Will return either the last received email or wait for an email to arrive and return that. If you need to wait for an email for a non-empty inbox see the other receive methods such as waitForNthEmail or waitForEmailCount.
   * @summary Fetch inbox's latest email or if empty wait for an email to arrive
   * @param {string} [inboxId] Id of the inbox we are fetching emails from
   * @param {number} [timeout] Max milliseconds to wait
   * @param {boolean} [unreadOnly] Optional filter for unread only
   */
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

  /**
   * If nth email is already present in inbox then return it. If not hold the connection open until timeout expires or the nth email is received and returned.
   * @summary Wait for or fetch the email with a given index in the inbox specified
   * @param {string} [inboxId] Id of the inbox you are fetching emails from
   * @param {number} [index] Zero based index of the email to wait for. If an inbox has 1 email already and you want to wait for the 2nd email pass index&#x3D;1
   * @param {number} [timeout] Max milliseconds to wait for the nth email if not already present
   * @param {boolean} [unreadOnly] Optional filter for unread only
   */
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

  /**
   * Perform a search of emails in an inbox with the given patterns. If results match expected count then return or else retry the search until results are found or timeout is reached. Match options allow simple CONTAINS or EQUALS filtering on SUBJECT, TO, BCC, CC, and FROM. See the `MatchOptions` object for options.
   * @summary Wait or return list of emails that match simple matching patterns
   * @param {MatchOptions} matchOptions matchOptions
   * @param {number} [count] Number of emails to wait for. Must be greater that 1
   * @param {string} [inboxId] Id of the inbox we are fetching emails from
   * @param {number} [timeout] Max milliseconds to wait
   * @param {boolean} [unreadOnly] Optional filter for unread only
   */
  async waitForMatchingEmails(
    matchOptions: MatchOptions,
    count?: number,
    inboxId?: string,
    timeout?: number,
    unreadOnly?: boolean
  ): Promise<EmailPreview[]> {
    return wrapCall('waitForMatchingEmail', () =>
      this.waitController.waitForMatchingEmails({
        matchOptions,
        count,
        inboxId,
        timeout,
        unreadOnly,
      })
    );
  }

  /**
   * If inbox contains count or more emails at time of request then return count worth of emails. If not wait until the count is reached and return those or return an error if timeout is exceeded.
   * @summary Wait for and return count number of emails
   * @param {number} [count] Number of emails to wait for. Must be greater that 1
   * @param {string} [inboxId] Id of the inbox we are fetching emails from
   * @param {number} [timeout] Max milliseconds to wait
   * @param {boolean} [unreadOnly] Optional filter for unread only
   */
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

  /**
   * Deletes an email and removes it from the inbox. Deleted emails cannot be recovered.
   * @summary Delete an email
   * @param {string} emailId emailId
   */
  async deleteEmail(emailId: string): Promise<void> {
    return wrapCall('deleteEmail', () =>
      this.emailController.deleteEmail({ emailId })
    );
  }

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
  async getAllEmails(
    page?: number,
    size?: number,
    inboxId?: Array<string>,
    sort?: SortEnum,
    unreadOnly?: boolean,
    searchFilter?: string
  ) {
    return wrapCall('getAllEmails', () =>
      this.emailController.getEmailsPaginated({
        inboxId,
        page,
        searchFilter,
        size,
        sort: sort
          ? sort === 'DESC'
            ? GetEmailsPaginatedSortEnum.DESC
            : GetEmailsPaginatedSortEnum.ASC
          : undefined,
        unreadOnly,
      })
    );
  }

  /**
   * List emails that an inbox has received. Only emails that are sent to the inbox's email address will appear in the inbox. It may take several seconds for any email you send to an inbox's email address to appear in the inbox. To make this endpoint wait for a minimum number of emails use the `minCount` parameter. The server will retry the inbox database until the `minCount` is satisfied or the `retryTimeout` is reached
   * @summary Get emails in an Inbox
   * @param {string} inboxId Id of inbox that emails belongs to
   * @param {Object} GetMessagesOptions see `GetMessagesOptions` details
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
        size: args.size,
        sort: args.sort
          ? args.sort === 'DESC'
            ? GetEmailsSortEnum.DESC
            : GetEmailsSortEnum.ASC
          : undefined,
      })
    );
  }

  /**
   * Returns an EmailDto object with headers and content. To retrieve the raw unparsed email use the getRawEmail endpoints
   * @summary Get email content
   * @param {string} emailId emailId
   */
  async getEmail(emailId: string): Promise<Email> {
    return wrapCall('getEmail', () =>
      this.emailController.getEmail({ emailId })
    );
  }

  /**
   * Returns a raw, unparsed, and unprocessed email. If your client has issues processing the response it is likely due to the response content-type which is text/plain. If you need a JSON response content-type use the getRawEmailJson endpoint
   * @summary Get raw email string
   * @param {string} emailId emailId
   */
  async getRawEmail(emailId: string): Promise<string> {
    return wrapCall(
      'getRawEmail',
      () => this.emailController.getRawEmailContents({ emailId }) as any
    );
  }

  /**
   * Send an email from an inbox's email address.  The request body should contain the `SendEmailOptions` that include recipients, attachments, body etc. See `SendEmailOptions` for all available properties. Note the `inboxId` refers to the inbox's id not the inbox's email address. See https://www.mailslurp.com/guides/ for more information on how to send emails.
   * @summary Send Email
   * @param {string} inboxId ID of the inbox you want to send the email from
   * @param {SendEmailOptions} [sendEmailOptions] Options for the email
   */
  async sendEmail(
    inboxId: string,
    sendEmailOptions: SendEmailOptions
  ): Promise<SentEmailDto> {
    return wrapCall('sendEmail', () =>
      this.inboxController.sendEmailAndConfirm({ inboxId, sendEmailOptions })
    );
  }

  /**
   * Returns the specified attachment for a given email as a byte stream (file download). You can find attachment ids in email responses endpoint responses. The response type is application/octet-stream.
   * @summary Get email attachment bytes
   * @param {string} emailId emailId
   * @param {string} attachmentId attachmentId
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
   * Upload an attachment for use in email sending. Attachment contents must be a base64 encoded string.
   * When sending emails with attachments first upload each attachment with this endpoint.
   * Record the returned attachment IDs. Then use these attachment IDs in the SendEmailOptions when sending an email.
   * This means that attachments can easily be reused.
   * @summary Upload an attachment for sending
   * @param {UploadAttachmentOptions} uploadOptions uploadOptions
   */
  async uploadAttachment(
    options: UploadAttachmentOptions
  ): Promise<Array<String>> {
    return wrapCall('uploadAttachment', () =>
      this.attachmentController.uploadAttachment({
        uploadAttachmentOptions: options,
      })
    );
  }

  /**
   * Get attachment MetaData
   *
   * MetaData includes name, size (bytes) and content-type.
   * @summary Get email attachment metadata
   * @param {string} attachmentId attachmentId
   * @param {string} emailId emailId
   */
  async getAttachmentMetaData(
    attachmentId: string,
    emailId: string
  ): Promise<AttachmentMetaData> {
    return wrapCall('getAttachmentMetaData', () =>
      this.emailController.getAttachmentMetaData({ attachmentId, emailId })
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
  sort?: SortEnum;
  // page size of results
  size?: number;
};

// helper
async function wrapCall<T>(tag: String, fn: () => Promise<T>): Promise<T> {
  try {
    return await fn();
  } catch (e) {
    throw e.json ? await e.json() : e;
  }
}

export async function wrapException<T>(fn: () => Promise<T>): Promise<T> {
  return wrapCall('wrapped exception', fn);
}

export interface Result<T> {
  content?: T;
  error?: {
    statusCode: number;
    message: string;
  };
}

export async function wrapResult<T>(fn: () => Promise<T>): Promise<Result<T>> {
  try {
    const content = await fn();
    return {
      content,
    };
  } catch (e) {
    const statusCode = e.status ? e.status : 500;
    const message = e.json ? await e.json() : e;
    return {
      error: {
        statusCode,
        message,
      },
    };
  }
}

export default MailSlurp;
