/**
 * This library is a convenience wrapper around the generated swagger sdk
 * @see https://github.com/mailslurp/swagger-sdk-typescript-fetch for more information
 */
import {
    Email,
    ExtraOperationsApi,
    EmailPreview,
    Inbox,
    CommonOperationsApi,
    SendEmailOptions,
    BulkSendEmailOptions, Webhook, CreateWebhookOptions
} from "mailslurp-swagger-sdk-ts"
import debug from "debug"

// setup logger. enable output with DEBUG=mailslurp-client env variable
const log = debug("mailslurp-client");

type Config = {
    // obtain an apiKey at https://app.mailslurp.com
    apiKey?: string
}

type GetMessagesOptions = {
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

/**
 * Define the MailSlurp client interface
 */
interface AbstractMailSlurpClient {

    // simple
    fetchLatestEmail(inboxEmailAddress?: string, inboxId?: string): Promise<Email>;
     
    createNewEmailAddress(): Promise<Inbox>;

    sendEmailSimple(sendEmailOptions: SendEmailOptions);

    // advanced
    createInbox(): Promise<Inbox>;

    deleteInbox(inboxId: string): Promise<Response>;

    getInbox(inboxId: string): Promise<Inbox>;

    getInboxes(): Promise<Inbox[]>;

    getEmails(inboxId: string, args: GetMessagesOptions): Promise<EmailPreview[]>;

    getEmail(emailId: string): Promise<Email>;

    getRawEmail(emailId: string): Promise<string>;

    getEmailAttachment(emailId: string, attachmentId: string);

    sendEmail(inboxId: string, sendEmailOptions: SendEmailOptions): Promise<Response>;

    bulkCreateInboxes(count: number): Promise<Inbox[]>;

    bulkSendEmails(bulkSendEmailOptions: BulkSendEmailOptions): Promise<Response>;

    bulkDeleteInboxes(inboxIds: string[]): Promise<Response>;

    createWebhook(inboxId: string, createWebhookOptions: CreateWebhookOptions): Promise<Webhook>;
}


/**
 * Helper logging function
 * @param tag
 * @param fn
 */
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
export class MailSlurp implements AbstractMailSlurpClient {
    private commonOperationsApi: CommonOperationsApi;
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

    async fetchLatestEmail(inboxEmailAddress?: string, inboxId?: string): Promise<Email> {
        if (!inboxId && !inboxEmailAddress) {
            throw "Must provide either inboxId or emailAddress of inbox that you want to fetch from"
        }
        return logCall("fetchLatestEmail", () => this.commonOperationsApi.fetchLatestEmailUsingGET(inboxEmailAddress, inboxId))
    }

    async createNewEmailAddress(): Promise<Inbox> {
        return logCall("createNewEmailAddress", () => this.commonOperationsApi.createNewEmailAddressUsingPOST())
    }

    async sendEmailSimple(sendEmailOptions: SendEmailOptions) {
        return logCall("sendEmailSimple", () => this.commonOperationsApi.sendEmailSimpleUsingPOST(sendEmailOptions))
    }


    /**
     * Create an inbox
     */
    async createInbox(): Promise<Inbox> {
        return logCall("createInbox", () => this.extraOperationsApi.createInboxUsingPOST())
    }

    /**
     * Delete an inbox by id
     * @param inboxId
     */
    async deleteInbox(inboxId: string): Promise<Response> {
        return logCall("createInbox", () => this.extraOperationsApi.deleteInboxUsingDELETE(inboxId));
    }

    /**
     * Get an inbox by id
     * @param inboxId
     */
    async getInbox(inboxId: string): Promise<Inbox> {
        return logCall("getInbox", () => this.extraOperationsApi.getInboxUsingGET(inboxId));
    }

    /**
     * Get all inboxes
     */
    async getInboxes(): Promise<Inbox[]> {
        return logCall("getInboxes", () => this.extraOperationsApi.getInboxesUsingGET());
    }

    /**
     * Get all emails in an inbox as EmailPreviews. To get the full email, use the getEmail endpoint
     * @param inboxId
     * @param args
     */
    async getEmails(inboxId: string, args: GetMessagesOptions = {}): Promise<EmailPreview[]> {
        return logCall("getEmails", () => this.extraOperationsApi.getEmailsUsingGET(inboxId, args.limit, args.minCount, args.retryTimeout, args.since));
    }

    /**
     * Get a full email from by id
     * @param emailId
     */
    async getEmail(emailId: string): Promise<Email> {
        return logCall("getEmail", () => this.extraOperationsApi.getEmailUsingGET(emailId));
    }

    /**
     * Get an email's raw contents from by id
     * @param emailId
     */
    async getRawEmail(emailId: string): Promise<string> {
        return logCall("getRawEmail", () => this.extraOperationsApi.getRawEmailUsingGET(emailId));
    }

    /**
     * Send and email from a given inbox
     * @param inboxId
     * @param sendEmailOptions
     */
    async sendEmail(inboxId: string, sendEmailOptions: SendEmailOptions): Promise<Response> {
        return logCall("sendEmail", () => this.extraOperationsApi.sendEmailUsingPOST(inboxId, sendEmailOptions));
    }

    /**
     * Bulk send emails
     */
    async bulkSendEmails(bulkSendEmailOptions: BulkSendEmailOptions): Promise<Response> {
        return logCall("bulkSendEmails", () => this.extraOperationsApi.bulkSendEmailsUsingPOST(bulkSendEmailOptions));
    }

    /**
     * Bulk create inboxes
     */
    async bulkCreateInboxes(count: number): Promise<Inbox[]> {
        return logCall("bulkCreateInboxes", () => this.extraOperationsApi.bulkCreateInboxesUsingPOST(count));
    }

    /**
     * Bulk delete inboxes
     */
    async bulkDeleteInboxes(inboxIds: string[]): Promise<Response> {
        return logCall("bulkDeleteInboxes", () => this.extraOperationsApi.bulkDeleteInboxesUsingDELETE(inboxIds));
    }

    /**
     * Create a webhook for notifications
     */
    async createWebhook(inboxId: string, createWebhookOptions: CreateWebhookOptions): Promise<Webhook> {
        return logCall("createWebhook", () => this.extraOperationsApi.createInboxWebhookUsingPOST(inboxId, createWebhookOptions))
    }

    /**
     * Get email attachment by id
     */
    async getEmailAttachment(emailId: string, attachmentId: string): Promise<Response> {
        return logCall("getEmailAttachment", () => this.extraOperationsApi.getEmailAttachmentUsingGET(attachmentId, emailId))
    }

}

export default MailSlurp;