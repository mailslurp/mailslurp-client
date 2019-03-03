/**
 * This library is a convenience wrapper around the generated swagger sdk
 * @see https://github.com/mailslurp/swagger-sdk-typescript-fetch for more information
 */
import { EmailControllerApi, InboxControllerApi, SendEmailOptions } from "mailslurp-swagger-sdk-ts"

type Config = {
  // obtain an apiKey at https://app.mailslurp.com 
  apiKey ?: string
}

type GetMessagesOptions  = {
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

/**
 *  MailSlurp client
 *  Usage: 
 *  `
 *  const api = new MailSlurp({ apiKey: "test" })
 *  const inbox = await api.createInbox()
 *  `
 */
export default class MailSlurp {
    private inboxApi: InboxControllerApi;
    private emailApi: EmailControllerApi;
    
    constructor(opts: Config) {
        // check options
        if (!opts.apiKey) {
            throw "Missing apiKey config parameter"
        }
        // instantiate api clients
        const conf = { apiKey: opts.apiKey } 
        this.inboxApi = new InboxControllerApi(conf)
        this.emailApi = new EmailControllerApi(conf)
    }

    async createInbox() {
        return this.inboxApi.createInboxUsingPOST()
    }
    async deleteInbox(inboxId: string) {
        return this.inboxApi.deleteInboxUsingDELETE(inboxId)
    }
    async getInbox(inboxId: string) {
        return this.inboxApi.getInboxUsingGET(inboxId)
    }
    async getInboxes() {
        return this.inboxApi.getInboxesUsingGET()
    }
    async getMessages(inboxId: string, args: GetMessagesOptions = {}) {
        return this.inboxApi.getMessagesUsingGET(inboxId, args.limit, args.minCount, args.retryTimeout, args.since)
    }
    async sendMessage(inboxId: string, sendEmailOptions: SendEmailOptions) {
        return this.inboxApi.sendMessageUsingPOST(inboxId, sendEmailOptions)
    }
    async getMessage(messageId: string) {
        return this.emailApi.getMessageUsingGET(messageId)
    }
    // TODO getRawMessage ? fetch raw message contents from s3?
    // TODO message analytics fetch
}
