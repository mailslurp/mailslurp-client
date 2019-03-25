/**
 * This library is a convenience wrapper around the generated swagger sdk
 * @see https://github.com/mailslurp/swagger-sdk-typescript-fetch for more information
 */
import {
    Email,
    EmailControllerApi,
    EmailPreview,
    Inbox,
    InboxControllerApi,
    SendEmailOptions
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
    getEmail(emailId: string): Promise<Email>;

    createInbox(): Promise<Inbox>;

    deleteInbox(inboxId: string): Promise<Response>;

    getInbox(inboxId: string): Promise<Inbox>;

    getInboxes(): Promise<Inbox[]>;

    getEmails(inboxId: string, args: GetMessagesOptions): Promise<EmailPreview[]>;

    sendEmail(inboxId: string, sendEmailOptions: SendEmailOptions): Promise<Response>
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
    private inboxApi: InboxControllerApi;
    private emailApi: EmailControllerApi;

    constructor(opts: Config) {
        // check options
        if (!opts.apiKey) {
            throw "Missing apiKey config parameter"
        }
        // instantiate api clients
        const conf = {apiKey: opts.apiKey};
        this.inboxApi = new InboxControllerApi(conf);
        this.emailApi = new EmailControllerApi(conf);
    }

    /**
     * Create an inbox
     */
    async createInbox(): Promise<Inbox> {
        return logCall("createInbox", () => this.inboxApi.createInboxUsingPOST())
    }

    /**
     * Delete an inbox by id
     * @param inboxId
     */
    async deleteInbox(inboxId: string): Promise<Response> {
        return logCall("createInbox", () => this.inboxApi.deleteInboxUsingDELETE(inboxId));
    }

    /**
     * Get an inbox by id
     * @param inboxId
     */
    async getInbox(inboxId: string): Promise<Inbox> {
        return logCall("getInbox", () => this.inboxApi.getInboxUsingGET(inboxId));
    }

    /**
     * Get all inboxes
     */
    async getInboxes(): Promise<Inbox[]> {
        return logCall("getInboxes", () => this.inboxApi.getInboxesUsingGET());
    }

    /**
     * Get all emails in an inbox as EmailPreviews. To get the full email, use the getEmail endpoint
     * @param inboxId
     * @param args
     */
    async getEmails(inboxId: string, args: GetMessagesOptions = {}): Promise<EmailPreview[]> {
        return logCall("getEmails", () => this.inboxApi.getEmailsUsingGET(inboxId, args.limit, args.minCount, args.retryTimeout, args.since));
    }

    /**
     * Get a full email from by id
     * @param emailId
     */
    async getEmail(emailId: string): Promise<Email> {
        return logCall("getEmail", () => this.emailApi.getEmailUsingGET(emailId));
    }

    /**
     * Send and email from a given inbox
     * @param inboxId
     * @param sendEmailOptions
     */
    async sendEmail(inboxId: string, sendEmailOptions: SendEmailOptions): Promise<Response> {
        return logCall("sendEmail", () => this.inboxApi.sendEmailUsingPOST(inboxId, sendEmailOptions));
    }

}

export default MailSlurp;