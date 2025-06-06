/**
 * MailSlurp API
 * MailSlurp is an API for sending and receiving emails and SMS from dynamically allocated email addresses and phone numbers. It\'s designed for developers and QA teams to test applications, process inbound emails, send templated notifications, attachments, and more.  ## Resources  - [Homepage](https://www.mailslurp.com) - Get an [API KEY](https://app.mailslurp.com/sign-up/) - Generated [SDK Clients](https://docs.mailslurp.com/) - [Examples](https://github.com/mailslurp/examples) repository
 *
 * The version of the OpenAPI document: 6.5.2
 * Contact: contact@mailslurp.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { EmailRecipients, Sender } from './';
/**
 *
 * @export
 * @interface EmailThreadItem
 */
export interface EmailThreadItem {
    /**
     *
     * @type {string}
     * @memberof EmailThreadItem
     */
    itemType: EmailThreadItemItemTypeEnum;
    /**
     *
     * @type {string}
     * @memberof EmailThreadItem
     */
    entityId: string;
    /**
     *
     * @type {string}
     * @memberof EmailThreadItem
     */
    bodyExcerpt?: string | null;
    /**
     *
     * @type {string}
     * @memberof EmailThreadItem
     */
    textExcerpt?: string | null;
    /**
     *
     * @type {string}
     * @memberof EmailThreadItem
     */
    subject?: string | null;
    /**
     *
     * @type {Array<string>}
     * @memberof EmailThreadItem
     */
    to: Array<string>;
    /**
     *
     * @type {string}
     * @memberof EmailThreadItem
     */
    from?: string | null;
    /**
     *
     * @type {Array<string>}
     * @memberof EmailThreadItem
     */
    bcc?: Array<string> | null;
    /**
     *
     * @type {Array<string>}
     * @memberof EmailThreadItem
     */
    cc?: Array<string> | null;
    /**
     *
     * @type {Array<string>}
     * @memberof EmailThreadItem
     */
    attachments?: Array<string> | null;
    /**
     *
     * @type {Date}
     * @memberof EmailThreadItem
     */
    createdAt: Date;
    /**
     *
     * @type {boolean}
     * @memberof EmailThreadItem
     */
    read: boolean;
    /**
     *
     * @type {string}
     * @memberof EmailThreadItem
     */
    inReplyTo?: string | null;
    /**
     *
     * @type {string}
     * @memberof EmailThreadItem
     */
    messageId?: string | null;
    /**
     *
     * @type {string}
     * @memberof EmailThreadItem
     */
    threadId?: string | null;
    /**
     *
     * @type {Sender}
     * @memberof EmailThreadItem
     */
    sender?: Sender | null;
    /**
     *
     * @type {EmailRecipients}
     * @memberof EmailThreadItem
     */
    recipients?: EmailRecipients | null;
}
/**
 * @export
 * @enum {string}
 */
export declare enum EmailThreadItemItemTypeEnum {
    RECEIVED_EMAIL = "RECEIVED_EMAIL",
    SENT_EMAIL = "SENT_EMAIL"
}
export declare function EmailThreadItemFromJSON(json: any): EmailThreadItem;
export declare function EmailThreadItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailThreadItem;
export declare function EmailThreadItemToJSON(value?: EmailThreadItem | null): any;
