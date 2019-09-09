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
    Webhook,
} from 'mailslurp-swagger-sdk-ts';
import debug from 'debug';
import { MatchOptions } from 'mailslurp-swagger-sdk-ts/api';

// setup logger. enable output with DEBUG=mailslurp-client env variable
const log = debug('mailslurp-client');

/**
 * MailSlurp config
 *
 * @remarks
 *
 * [Obtain your API Key](https://app.mailslurp.com) in your dashboard.
 */
export type Config = {
    // obtain an apiKey at https://app.mailslurp.com
    apiKey?: string;
};

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
};

// helper
async function logCall<T>(tag: String, fn: () => Promise<T>): Promise<T> {
    log('[%s] executing', tag);
    try {
        const result = await fn();
        log('[%s] returned %O', tag, result);
        return result;
    } catch (e) {
        log('[%s] threw exception %O', tag, e);
        throw e;
    }
}

/**
 *  MailSlurp client
 *
 *  Usage:
 *  ```javascript
 *  const api = new MailSlurp({ apiKey: "your-api-key" })
 *  const inbox = await api.createInbox()
 *  ```
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
            throw 'Missing apiKey config parameter';
        }
        // instantiate api clients
        const conf = { apiKey: opts.apiKey };
        this.commonOperationsApi = new CommonOperationsApi(conf);
        this.extraOperationsApi = new ExtraOperationsApi(conf);
    }

    /**
     * Create a new email address / inbox
     *
     * @remarks
     * Returns id and emailAddress of created inbox.
     * All none-paid accounts use the `@mailslurp.com` domain.
     * Custom domains available with plans.
     */
    async createNewEmailAddress(): Promise<Inbox> {
        return logCall('createNewEmailAddress', () =>
            this.commonOperationsApi.createNewEmailAddress()
        );
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
    async sendEmailSimple(
        sendEmailOptions: SendEmailOptions
    ): Promise<Response> {
        return logCall('sendEmailSimple', () =>
            this.commonOperationsApi.sendEmailSimple(sendEmailOptions)
        );
    }

    /**
     * Wait for an email to arrive at an inbox or return first found result
     *
     * @remarks
     * Retries the call until at least one email is found or a maximum timeout is exceeded
     *
     * @param inboxId
     * @param timeout max milliseconds to wait
     */
    async waitForLatestEmail(
        inboxId?: string,
        timeout?: number
    ): Promise<Email> {
        return logCall('waitForLatestEmail', () =>
            this.commonOperationsApi.waitForLatestEmail(inboxId, timeout)
        );
    }

    async waitForNthEmail(
        inboxId: string,
        index: number,
        timeout?: number
    ): Promise<Email> {
        return logCall('waitForNthEmail', () =>
            this.commonOperationsApi.waitForNthEmail(inboxId, index, timeout)
        );
    }

    /**
     * Wait until both count and match options are met and return list of emails.
     *
     * @remarks
     * Match options allow simple CONTAINS or EQUALS filtering on SUBJECT, TO, BCC, CC, and FROM.
     *
     * @param matchOptions
     * @param count
     * @param inboxId
     * @param timeout  timeout max milliseconds to wait
     */
    async waitForMatchingEmails(
        matchOptions: MatchOptions,
        count?: number,
        inboxId?: string,
        timeout?: number
    ): Promise<EmailPreview[]> {
        return logCall('waitForMatchingEmail', () =>
            this.commonOperationsApi.waitForMatchingEmail(
                matchOptions,
                count,
                inboxId,
                timeout
            )
        );
    }

    /**
     * Wait for and return list of emails with length of given count
     * @param count
     * @param inboxId
     * @param timeout
     */
    async waitForEmailCount(
        count?: number,
        inboxId?: string,
        timeout?: number
    ): Promise<EmailPreview[]> {
        return logCall('waitForEmailCount', () =>
            this.commonOperationsApi.waitForEmailCount(count, inboxId, timeout)
        );
    }

    /**
     * Delete all emails in a given inbox
     * @param inboxId
     */
    async emptyInbox(inboxId: string): Promise<Response> {
        return logCall('emptyInbox', () =>
            this.commonOperationsApi.emptyInbox(inboxId)
        );
    }

    /**
     * Delete an email by id
     * @param emailId
     */
    async deleteEmail(emailId: string): Promise<Response> {
        return log('deleteEmail', () =>
            this.commonOperationsApi.deleteEmail(emailId)
        );
    }

    /**
     * Delete an email by id
     * @param emailId
     */
    async deleteEmailAddress(emailId: string): Promise<Response> {
        return log('deleteEmailAddress', () =>
            this.commonOperationsApi.deleteEmailAddress(emailId)
        );
    }

    /**
     * Create an inbox / email address
     */
    async createInbox(): Promise<Inbox> {
        return logCall('createInbox', () =>
            this.extraOperationsApi.createInbox()
        );
    }

    /**
     * Delete an inbox by id
     * @param inboxId
     */
    async deleteInbox(inboxId: string): Promise<Response> {
        return logCall('createInbox', () =>
            this.extraOperationsApi.deleteInbox(inboxId)
        );
    }

    /**
     * Get an inbox by id
     * @param inboxId
     */
    async getInbox(inboxId: string): Promise<Inbox> {
        return logCall('getInbox', () =>
            this.extraOperationsApi.getInbox(inboxId)
        );
    }

    /**
     * Get all inboxes
     */
    async getInboxes(): Promise<Inbox[]> {
        return logCall('getInboxes', () =>
            this.extraOperationsApi.getInboxes()
        );
    }

    /**
     * Get all emails in an inbox as EmailPreviews. To get the full email, use the getEmail endpoint
     * @param inboxId
     * @param args
     */
    async getEmails(
        inboxId: string,
        args: GetMessagesOptions = {}
    ): Promise<EmailPreview[]> {
        return logCall('getEmails', () =>
            this.extraOperationsApi.getEmails(
                inboxId,
                args.limit,
                args.minCount,
                args.retryTimeout,
                args.since
            )
        );
    }

    /**
     * Get a full email from by id
     * @param emailId
     */
    async getEmail(emailId: string): Promise<Email> {
        return logCall('getEmail', () =>
            this.extraOperationsApi.getEmail(emailId)
        );
    }

    /**
     * Get an email's raw contents from by id
     * @param emailId
     */
    async getRawEmail(emailId: string): Promise<string> {
        return logCall('getRawEmail', () =>
            this.extraOperationsApi.getRawEmailContents(emailId)
        );
    }

    /**
     * Send and email from a given inbox
     * @param inboxId
     * @param sendEmailOptions
     */
    async sendEmail(
        inboxId: string,
        sendEmailOptions: SendEmailOptions
    ): Promise<Response> {
        return logCall('sendEmail', () =>
            this.extraOperationsApi.sendEmail(inboxId, sendEmailOptions)
        );
    }

    /**
     * Bulk send emails
     */
    async bulkSendEmails(
        bulkSendEmailOptions: BulkSendEmailOptions
    ): Promise<Response> {
        return logCall('bulkSendEmails', () =>
            this.extraOperationsApi.bulkSendEmails(bulkSendEmailOptions)
        );
    }

    /**
     * Bulk create inboxes
     */
    async bulkCreateInboxes(count: number): Promise<Inbox[]> {
        return logCall('bulkCreateInboxes', () =>
            this.extraOperationsApi.bulkCreateInboxes(count)
        );
    }

    /**
     * Bulk delete inboxes
     */
    async bulkDeleteInboxes(inboxIds: string[]): Promise<Response> {
        return logCall('bulkDeleteInboxes', () =>
            this.extraOperationsApi.bulkDeleteInboxes(inboxIds)
        );
    }

    /**
     * Create a webhook for notifications
     */
    async createWebhook(
        inboxId: string,
        createWebhookOptions: CreateWebhookOptions
    ): Promise<Webhook> {
        return logCall('createWebhook', () =>
            this.extraOperationsApi.createWebhook(inboxId, createWebhookOptions)
        );
    }

    /**
     * Create a webhook for notifications
     */
    async deleteWebhook(inboxId: string, webhookId: string): Promise<Response> {
        return logCall('deleteWebhook', () =>
            this.extraOperationsApi.deleteWebhook(inboxId, webhookId)
        );
    }

    /**
     * Get email attachment by id
     */
    async downloadAttachment(
        emailId: string,
        attachmentId: string
    ): Promise<Response> {
        return logCall('downloadAttachment', () =>
            this.extraOperationsApi.downloadAttachment(attachmentId, emailId)
        );
    }
}

export default MailSlurp;

