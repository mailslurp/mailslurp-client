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

type Config = {
    // obtain an apiKey at https://app.mailslurp.com
    apiKey?: string
}

type GetMessagesOptions = {
    // max emails to return
    limit?: number,
    // minimum number of emails to expect.
    // when give, server will retry databases until this number is met or the retry timeout is exheeded
    minCount?: number,
    // maximum time to wait for conditions to be met
    retryTimeout?: number,
    // ignore emails received before this ISO-8601 date time
    since?: Date
}

interface AbstractMailSlurpClient {
    getMessage(messageId: string): Promise<Email>;

    createInbox(): Promise<Inbox>;

    deleteInbox(inboxId: string): Promise<Response>;

    getInbox(inboxId: string): Promise<Inbox>;

    getInboxes(): Promise<Inbox[]>;

    getMessages(inboxId: string, args: GetMessagesOptions): Promise<EmailPreview[]>;

    sendMessage(inboxId: string, sendEmailOptions: SendEmailOptions): Promise<Response>
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
        const conf = {apiKey: opts.apiKey}
        this.inboxApi = new InboxControllerApi(conf)
        this.emailApi = new EmailControllerApi(conf)
    }

    async createInbox(): Promise<Inbox> {
        return this.inboxApi.createInboxUsingPOST()
    }

    async deleteInbox(inboxId: string): Promise<Response> {
        return this.inboxApi.deleteInboxUsingDELETE(inboxId)
    }

    async getInbox(inboxId: string): Promise<Inbox> {
        return this.inboxApi.getInboxUsingGET(inboxId)
    }

    async getInboxes(): Promise<Inbox[]> {
        return this.inboxApi.getInboxesUsingGET()
    }

    async getMessages(inboxId: string, args: GetMessagesOptions = {}): Promise<EmailPreview[]> {
        return this.inboxApi.getMessagesUsingGET(inboxId, args.limit, args.minCount, args.retryTimeout, args.since)
    }

    async sendMessage(inboxId: string, sendEmailOptions: SendEmailOptions): Promise<Response> {
        return this.inboxApi.sendMessageUsingPOST(inboxId, sendEmailOptions)
    }

    async getMessage(messageId: string): Promise<Email> {
        return this.emailApi.getMessageUsingGET(messageId)
    }
}
