/**
 * This library is a convenience wrapper around the generated swagger sdk
 * @see https://github.com/mailslurp/swagger-sdk-typescript-fetch for more information
 */
import {
    AttachmentControllerApi, AttachmentMetaData,
    BulkActionsControllerApi,
    BulkSendEmailOptions,
    CommonActionsControllerApi,
    CreateDomainOptions,
    CreateWebhookOptions,
    DomainControllerApi,
    DomainPlusVerificationRecordsAndStatus,
    DomainPreview,
    Email,
    EmailControllerApi,
    EmailPreview,
    Inbox,
    InboxControllerApi,
    MatchOptions,
    SendEmailOptions,
    UploadAttachmentOptions,
    Webhook,
} from 'mailslurp-swagger-sdk-ts';

import debug from 'debug';

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
    apiKey: string;
    // optional attribution id (see sales)
    attribution?: string
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
async function wrapCall<T>(tag: String, fn: () => Promise<T>): Promise<T> {
    log('[%s] executing', tag);
    try {
        const result = await fn();
        log('[%s] returned %O', tag, result);
        return result;
    } catch (e) {
        log('[%s] threw exception %O', tag, e);
        throw e.json ? await e.json() : e;
    }
}

/**
 *  Official MailSlurp Client
 *
 *  This is the recommended client for [mailslurp.com](https://www.mailslurp.com).
 *
 *  ## Features
 *  - Create email addresses on demand
 *  - Receive emails and attachments in code
 *  - Send emails and attachments
 *  - Create custom domains and webhooks
 *
 *  ## Prerequisites
 *  MailSlurp is free for personal use but you must have an [account](https://app.mailslurp.com) and an [API Key](https://app.mailslurp.com).
 *
 *  ## Installing
 *  `npm install --save mailslurp-client`
 *
 *  ## Importing
 *
 *  ### Import ES6
 *  ```javascript
 *  import { MailSlurp } from 'mailslurp-client'
 *  ```
 *  ### Require ES5
 *  ```javascript
 *  const MailSlurp = require('mailslurp-client').MailSlurp;
 *  // or default import
 *  const MailSlurp = require('mailslurp-client').default;
 *  ```
 *
 *  ## Configure
 *  ```javascript
 *  const mailslurp = new MailSlurp({ apiKey: "your-api-key" })
 *  const inbox = await mailslurp.createInbox()
 *  ```
 *
 *  ## Next steps
 *  Now you can use your mailslurp instance to perform actions like sending and receiving emails. See those methods for more information.
 */
export class MailSlurp {
    private commonActionsController: CommonActionsControllerApi;
    private inboxController: InboxControllerApi;
    private emailController: EmailControllerApi;
    private domainController: DomainControllerApi;
    private attachmentController: AttachmentControllerApi;
    private bulkActionsController: BulkActionsControllerApi;

    private callOptions: any = {};

    /**
     * Create a new MailSlurp instance
     * @param opts
     */
    constructor(opts: Config) {
        // check options
        if (!opts.apiKey) {
            throw 'Missing apiKey config parameter';
        }
        // set call options if required
        const headers = {
            'x-client': 'mailslurp-client-ts-js',
            'x-attribution': opts.attribution
        };
        this.callOptions['headers'] = headers;

        // instantiate api clients
        const clientConfiguration = { apiKey: opts.apiKey };
        this.commonActionsController = new CommonActionsControllerApi(clientConfiguration);
        this.inboxController = new InboxControllerApi(clientConfiguration);
        this.emailController = new EmailControllerApi(clientConfiguration);
        this.domainController = new DomainControllerApi(clientConfiguration);
        this.attachmentController = new AttachmentControllerApi(clientConfiguration);
        this.bulkActionsController = new BulkActionsControllerApi(clientConfiguration);
    }

    /**
     * Create a new inbox
     *
     * ```typescript
     * const { id, emailAddress } = await mailslurp.createNewEmailAddress()
     * ```
     */
    async createNewEmailAddress(): Promise<Inbox> {
        return wrapCall('createNewEmailAddress', () =>
            this.commonActionsController.createNewEmailAddress(this.callOptions),
        );
    }

    /**
     * Send an email from a random address
     *
     * To send from a known address first create an inbox and then use
     * the sendEmail endpoints.
     *
     * @param sendEmailOptions
     */
    async sendEmailSimple(
        sendEmailOptions: SendEmailOptions,
    ): Promise<Response> {
        return wrapCall('sendEmailSimple', () =>
            this.commonActionsController.sendEmailSimple(sendEmailOptions, this.callOptions),
        );
    }

    /**
     * Wait for an email to arrive at an inbox or return first found result
     * Retries the call until at least one email is found or a maximum timeout is exceeded
     *
     * ```typescript
     * try {
     *   const email = await mailslurp.waitForLatestEmail(inboxId)
     * } catch (e) {
     *   // handle timeout or email wasn't received
     * }
     * ```
     *
     * @param inboxId uuid
     * @param timeout max milliseconds to wait
     */
    async waitForLatestEmail(
        inboxId?: string,
        timeout?: number,
    ): Promise<Email> {
        return wrapCall('waitForLatestEmail', () =>
            this.commonActionsController.waitForLatestEmail(inboxId, timeout, this.callOptions),
        );
    }

    /**
     * Return or wait for email number `n` in an inbox
     *
     * ```typescript
     * try {
     *   const email3 = await mailslurp.waitForNthEmail(inboxId, 3)
     * } catch (e) {
     *   // handle timeout or email wasn't received
     * }
     * ```
     *
     * @param inboxId
     * @param index
     * @param timeout
     */
    async waitForNthEmail(
        inboxId: string,
        index: number,
        timeout?: number,
    ): Promise<Email> {
        return wrapCall('waitForNthEmail', () =>
            this.commonActionsController.waitForNthEmail(inboxId, index, timeout, this.callOptions),
        );
    }

    /**
     * Wait until both count and match options are met and return list of emails. Match options are a bit verbose but allow
     * for type safety on the API end. Match options allow simple CONTAINS or EQUALS filtering on SUBJECT, TO, BCC, CC, and FROM.
     *
     * ```typescript
     * try {
     *   const matchingWelcomeEmails = await mailslurp.waitForMatchingEmails({
     *     matches: [
     *       {
     *         field: 'SUBJECT',
     *         should: 'CONTAIN',
     *         value: 'Welcome'
     *       }
     *     ]
     *   }, 1, inboxId)
     * } catch (e) {
     *   // handle timeout or no results
     * }
     * ```
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
        timeout?: number,
    ): Promise<EmailPreview[]> {
        return wrapCall('waitForMatchingEmail', () =>
            this.commonActionsController.waitForMatchingEmail(
                matchOptions,
                count,
                inboxId,
                timeout,
                this.callOptions,
            ),
        );
    }

    /**
     * Wait for and return list of emails with length of given count
     *
     * ```typescript
     * try {
     *   // wait for 4 emails in an inbox then return them
     *   const emails = waitForEmailCount(4, inboxId)
     * } catch (e) {
     *   // handle error or timeout
     * }
     * ```
     * @param count
     * @param inboxId
     * @param timeout
     */
    async waitForEmailCount(
        count?: number,
        inboxId?: string,
        timeout?: number,
    ): Promise<EmailPreview[]> {
        return wrapCall('waitForEmailCount', () =>
            this.commonActionsController.waitForEmailCount(count, inboxId, timeout, this.callOptions),
        );
    }

    /**
     * Delete all emails in a given inbox
     * @param inboxId
     */
    async emptyInbox(inboxId: string): Promise<Response> {
        return wrapCall('emptyInbox', () =>
            this.commonActionsController.emptyInbox(inboxId, this.callOptions),
        );
    }

    /**
     * Delete an email by id
     * @param emailId
     */
    async deleteEmail(emailId: string): Promise<Response> {
        return wrapCall('deleteEmail', () =>
            this.commonActionsController.deleteEmail(emailId, this.callOptions),
        );
    }

    /**
     * Delete an email by id
     * @param emailId
     */
    async deleteEmailAddress(emailId: string): Promise<Response> {
        return wrapCall('deleteEmailAddress', () =>
            this.commonActionsController.deleteEmailAddress(emailId, this.callOptions),
        );
    }

    /**
     * Create an inbox. Pass an optional `emailAddress` to specify the email address. If not argument is passed
     * MailSlurp will assign the inbox a random email address ending in `@mailslurp.com`.
     *
     * ```typescript
     * // generate a random email address
     * try {
     *   const randomizedInbox = await mailslurp.createInbox();
     * } catch (e) {
     *   // handle errors
     * }
     *
     * // generate specifc email address
     * try {
     *   // note you must verify the domain with MailSlurp before you can create email addresses using it
     *   const customInbox = await mailslurp.createInbox('myaddress@mydomain.com`)
     * } catch (e) {
     *   // handle errors
     * }
     * ```
     */
    async createInbox(emailAddress?: string): Promise<Inbox> {
        return wrapCall('createInbox', () =>
            this.inboxController.createInbox(emailAddress, this.callOptions),
        );
    }

    /**
     * Delete an inbox by id
     * @param inboxId
     */
    async deleteInbox(inboxId: string): Promise<Response> {
        return wrapCall('createInbox', () =>
            this.inboxController.deleteInbox(inboxId, this.callOptions),
        );
    }

    /**
     * Get an inbox by id
     * @param inboxId
     */
    async getInbox(inboxId: string): Promise<Inbox> {
        return wrapCall('getInbox', () =>
            this.inboxController.getInbox(inboxId, this.callOptions),
        );
    }

    /**
     * Get all inboxes
     */
    async getInboxes(): Promise<Inbox[]> {
        return wrapCall('getInboxes', () =>
            this.inboxController.getInboxes(this.callOptions),
        );
    }


    /**
     * Get all inboxes paginated
     * Returns paginated inbox previews
     */
    async getAllInboxes(page?: number, size?: number) {
        return wrapCall('getAllInboxes', () =>
            this.inboxController.getAllInboxes(page, size, this.callOptions),
        );
    }

    /**
     * Get all emails
     * Returns paginated email previews
     */
    async getAllEmails(page?: number, size?: number) {
        return wrapCall('getAllEmails', () =>
            this.emailController.getEmailsPaginated(page, size, this.callOptions),
        );
    }

    /**
     * Get all emails in an inbox as EmailPreviews. To get the full email, use the getEmail endpoint
     *
     * ```typescript
     * try {
     *   // first get emails for an inbox
     *   const emails = mailslurp.getEmails(inboxId, { limit: 1 })
     *   const fullEmail = mailslurp.getEmail(emails[0].id)
     *   console.log(fullEmail.body, fullEmail.subject) // etc
     * } catch (e) {
     *   // handle errors
     * }
     * ```
     *
     * @param inboxId
     * @param args
     */
    async getEmails(
        inboxId: string,
        args: GetMessagesOptions = {},
    ): Promise<EmailPreview[]> {
        return wrapCall('getEmails', () =>
            this.inboxController.getEmails(
                inboxId,
                args.limit,
                args.minCount,
                args.retryTimeout,
                args.since,
                this.callOptions,
            ),
        );
    }

    /**
     * Get a full email from by id. To get an emails ID use the getEmails or waitFor methods with an inbox
     *
     * ```typescript
     * try {
     *   const fullEmail = mailslurp.getEmail(emailId)
     *   console.log(fullEmail.body, fullEmail.subject) // etc
     * } catch (e) {
     *   // handle errors
     * }
     * ```
     *
     * @param emailId
     */
    async getEmail(emailId: string): Promise<Email> {
        return wrapCall('getEmail', () =>
            this.emailController.getEmail(emailId, this.callOptions),
        );
    }

    /**
     * Get an email's raw contents from by id
     * @param emailId
     */
    async getRawEmail(emailId: string): Promise<string> {
        return wrapCall('getRawEmail', () =>
            this.emailController.getRawEmailContents(emailId, this.callOptions),
        );
    }

    /**
     * Send and email from a given inbox
     * @param inboxId
     * @param sendEmailOptions
     */
    async sendEmail(
        inboxId: string,
        sendEmailOptions: SendEmailOptions,
    ): Promise<Response> {
        return wrapCall('sendEmail', () =>
            this.inboxController.sendEmail(inboxId, sendEmailOptions, this.callOptions),
        );
    }

    /**
     * Bulk send emails
     */
    async bulkSendEmails(
        bulkSendEmailOptions: BulkSendEmailOptions,
    ): Promise<Response> {
        return wrapCall('bulkSendEmails', () =>
            this.bulkActionsController.bulkSendEmails(bulkSendEmailOptions, this.callOptions),
        );
    }

    /**
     * Bulk create inboxes
     */
    async bulkCreateInboxes(count: number): Promise<Inbox[]> {
        return wrapCall('bulkCreateInboxes', () =>
            this.bulkActionsController.bulkCreateInboxes(count, this.callOptions),
        );
    }

    /**
     * Bulk delete inboxes
     */
    async bulkDeleteInboxes(inboxIds: string[]): Promise<Response> {
        return wrapCall('bulkDeleteInboxes', () =>
            this.bulkActionsController.bulkDeleteInboxes(inboxIds, this.callOptions),
        );
    }

    /**
     * Create a webhook for notifications
     */
    async createWebhook(
        inboxId: string,
        createWebhookOptions: CreateWebhookOptions,
    ): Promise<Webhook> {
        return wrapCall('createWebhook', () =>
            this.inboxController.createWebhook(inboxId, createWebhookOptions, this.callOptions),
        );
    }

    /**
     * Get webhooks for an inbox
     * @param inboxId
     */
    async getWebhooks(
        inboxId: string,
    ): Promise<Webhook[]> {
        return wrapCall('getWebhooks', () => {
            return this.inboxController.getWebhooks(inboxId, this.callOptions);
        });
    }

    /**
     * Remove a webhook from an inbox
     */
    async deleteWebhook(inboxId: string, webhookId: string): Promise<Response> {
        return wrapCall('deleteWebhook', () =>
            this.inboxController.deleteWebhook(inboxId, webhookId, this.callOptions),
        );
    }

    /**
     * Get email attachment by id
     *
     * Returns HTTP response containing byte stream
     */
    async downloadAttachment(
        emailId: string,
        attachmentId: string,
    ): Promise<Response> {
        return wrapCall('downloadAttachment', () =>
            this.emailController.downloadAttachment(attachmentId, emailId, this.callOptions),
        );
    }

    /**
     * Upload an attachment for use in email sending
     *
     * Attachment contents must be a base64 encoded string
     */
    async uploadAttachment(options: UploadAttachmentOptions): Promise<Array<String>> {
        return wrapCall('uploadAttachment', () =>
            this.attachmentController.uploadAttachment(options, this.callOptions),
        );
    }

    /**
     * Get attachment MetaData
     *
     * MetaData includes name, size (bytes) and content-type.
     */
    async getAttachmentMetaData(attachmentId: string, emailId: string): Promise<AttachmentMetaData> {
        return wrapCall('getAttachmentMetaData', () =>
            this.emailController.getAttachmentMetaData(attachmentId, emailId, this.callOptions),
        );
    }

    /**
     * Create a custom domain for use with MailSlurp
     * You must own and have access to DNS setup for the domain in order to verify it
     * @param options
     */
    async createDomain(options: CreateDomainOptions): Promise<DomainPlusVerificationRecordsAndStatus> {
        return wrapCall('createDomain', () => {
            return this.domainController.createDomain(options, this.callOptions);
        });
    }

    /**
     * Get domains
     */
    async getDomains(): Promise<Array<DomainPreview>> {
        return wrapCall('getDomains', () => {
            return this.domainController.getDomains(this.callOptions);
        });
    }

    /**
     * Get domain
     */
    async getDomain(domainId: string): Promise<DomainPlusVerificationRecordsAndStatus> {
        return wrapCall('getDomain', () => {
            return this.domainController.getDomain(domainId, this.callOptions);
        });
    }

    /**
     * Delete domain
     */
    async deleteDomain(domainId: string): Promise<Response> {
        return wrapCall('deleteDomain', () => {
            return this.domainController.deleteDomain(domainId, this.callOptions);
        });
    }
}

export default MailSlurp;

