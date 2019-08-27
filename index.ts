/**
 * This library is a convenience wrapper around the generated swagger sdk
 * @see https://github.com/mailslurp/swagger-sdk-typescript-fetch for more information
 */
import {
  BulkSendEmailOptions,
  CommonOperationsApi,
  CreateWebhookOptions,
  Email,
  EmailPreview,
  ExtraOperationsApi,
  Inbox,
  SendEmailOptions,
  Webhook
} from "mailslurp-swagger-sdk-ts"
import debug from "debug"

// setup logger. enable output with DEBUG=mailslurp-client env variable
const log = debug("mailslurp-client");

/**
 * MailSlurp config
 *
 * @remarks
 *
 * [Obtain your API Key](https://app.mailslurp.com) in your dashboard.
 */
export type Config = {
  // obtain an apiKey at https://app.mailslurp.com
  apiKey?: string
}

/**
 * Options for advanced message fetching
 *
 * @remarks
 * For more control over fetching. See also Webhook endpoints
 */
export type GetMessagesOptions = {
  // max emails to return
  limit?: number,
  // minimum number of emails to expect.
  // when give, server will retry databases until this number is met or the retry timeout is exceeded
  minCount?: number,
  // maximum time to wait for conditions to be met
  retryTimeout?: number,
  // ignore emails received before this ISO-8601 date time
  since?: Date
}

// helper
async function logCall<T>(tag: String, fn: () => Promise<T>): Promise<T> {
  log("[%s] executing", tag);
  try {
    const result = await fn();
    log("[%s] returned %O", tag, result);
    return result;
  } catch (e) {
    log("[%s] threw exception %O", tag, e);
    throw e;
  }
}

/**
 *  MailSlurp client
 *  Usage:
 *  `
 *  const api = new MailSlurp({ apiKey: "test" })
 *  const inbox = await api.createInbox()
 *  `
 */
export class MailSlurp {

  /**
   * @ignore
   */
  private commonOperationsApi: CommonOperationsApi;
  /**
   * @ignore
   */
  private extraOperationsApi: ExtraOperationsApi;

  constructor(opts: Config) {
    // check options
    if (!opts.apiKey) {
      throw "Missing apiKey config parameter"
    }
    // instantiate api clients
    const conf = {apiKey: opts.apiKey};
    this.commonOperationsApi = new CommonOperationsApi(conf);
    this.extraOperationsApi = new ExtraOperationsApi(conf)
  }


  /**
   * Create a new email address and associated inbox
   *
   * @remarks
   *
   * All none-paid accounts use the `@mailslurp.com` domain.
   * Custom domains available with plans.
   */
  async createNewEmailAddress(): Promise<Inbox> {
    return logCall("createNewEmailAddress", () => this.commonOperationsApi.createNewEmailAddress())
  }

  /**
   * Send an email from a random address
   *
   * @remarks
   * To send from a known address first create an inbox and then use
   * the sendEmail endpoints.
   *
   * @param sendEmailOptions
   */
  async sendEmailSimple(sendEmailOptions: SendEmailOptions) {
    return logCall("sendEmailSimple", () => this.commonOperationsApi.sendEmailSimple(sendEmailOptions))
  }

  /**
   * Wait for an email to arrive at an inbox or return first found result
   *
   * @remarks
   * Retries the call until at least one email is found or a maximum timeout is exceeded
   *
   *
   * @param inboxEmailAddress
   * @param inboxId
   */
  async waitForLatestEmail(inboxEmailAddress?: string, inboxId?: string): Promise<Email> {
    if (!inboxId && !inboxEmailAddress) {
      throw "Must provide either inboxId or emailAddress of inbox that you want to fetch from"
    }
    return logCall("waitForLatestEmail", () => this.commonOperationsApi.waitForLatestEmail(inboxEmailAddress, inboxId))
  }

  /**
   * Create an inbox
   */
  async createInbox(): Promise<Inbox> {
    return logCall("createInbox", () => this.extraOperationsApi.createInbox())
  }

  /**
   * Delete an inbox by id
   * @param inboxId
   */
  async deleteInbox(inboxId: string): Promise<Response> {
    return logCall("createInbox", () => this.extraOperationsApi.deleteInbox(inboxId));
  }

  /**
   * Get an inbox by id
   * @param inboxId
   */
  async getInbox(inboxId: string): Promise<Inbox> {
    return logCall("getInbox", () => this.extraOperationsApi.getInbox(inboxId));
  }

  /**
   * Get all inboxes
   */
  async getInboxes(): Promise<Inbox[]> {
    return logCall("getInboxes", () => this.extraOperationsApi.getInboxes());
  }

  /**
   * Get all emails in an inbox as EmailPreviews. To get the full email, use the getEmail endpoint
   * @param inboxId
   * @param args
   */
  async getEmails(inboxId: string, args: GetMessagesOptions = {}): Promise<EmailPreview[]> {
    return logCall("getEmails", () => this.extraOperationsApi.getEmails(inboxId, args.limit, args.minCount, args.retryTimeout, args.since));
  }

  /**
   * Get a full email from by id
   * @param emailId
   */
  async getEmail(emailId: string): Promise<Email> {
    return logCall("getEmail", () => this.extraOperationsApi.getEmail(emailId));
  }

  /**
   * Get an email's raw contents from by id
   * @param emailId
   */
  async getRawEmail(emailId: string): Promise<string> {
    return logCall("getRawEmail", () => this.extraOperationsApi.getRawEmailContents(emailId));
  }

  /**
   * Send and email from a given inbox
   * @param inboxId
   * @param sendEmailOptions
   */
  async sendEmail(inboxId: string, sendEmailOptions: SendEmailOptions): Promise<Response> {
    return logCall("sendEmail", () => this.extraOperationsApi.sendEmail(inboxId, sendEmailOptions));
  }

  /**
   * Bulk send emails
   */
  async bulkSendEmails(bulkSendEmailOptions: BulkSendEmailOptions): Promise<Response> {
    return logCall("bulkSendEmails", () => this.extraOperationsApi.bulkSendEmails(bulkSendEmailOptions));
  }

  /**
   * Bulk create inboxes
   */
  async bulkCreateInboxes(count: number): Promise<Inbox[]> {
    return logCall("bulkCreateInboxes", () => this.extraOperationsApi.bulkCreateInboxes(count));
  }

  /**
   * Bulk delete inboxes
   */
  async bulkDeleteInboxes(inboxIds: string[]): Promise<Response> {
    return logCall("bulkDeleteInboxes", () => this.extraOperationsApi.bulkDeleteInboxes(inboxIds));
  }

  /**
   * Create a webhook for notifications
   */
  async createWebhook(inboxId: string, createWebhookOptions: CreateWebhookOptions): Promise<Webhook> {
    return logCall("createWebhook", () => this.extraOperationsApi.createWebhook(inboxId, createWebhookOptions))
  }

    /**
   * Get email attachment by id
   */
  async downloadAttachment(emailId: string, attachmentId: string): Promise<Response> {
    return logCall("downloadAttachment", () => this.extraOperationsApi.downloadAttachment(attachmentId, emailId))
  }

  /**
   * @deprecated
   */
  async getEmailAttachment(emailId: string, attachmentId: string): Promise<Response> {
    return this.downloadAttachment(emailId, attachmentId)
  }

  /**
   * @deprecated
   */
  async fetchLatestEmail(inboxEmailAddress?: string, inboxId?: string): Promise<Email> {
    return this.waitForLatestEmail(inboxEmailAddress, inboxId)
  }

}

export default MailSlurp;