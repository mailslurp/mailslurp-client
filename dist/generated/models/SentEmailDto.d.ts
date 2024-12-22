/**
 * MailSlurp API
 * MailSlurp is an API for sending and receiving emails from dynamically allocated email addresses. It\'s designed for developers and QA teams to test applications, process inbound emails, send templated notifications, attachments, and more.  ## Resources  - [Homepage](https://www.mailslurp.com) - Get an [API KEY](https://app.mailslurp.com/sign-up/) - Generated [SDK Clients](https://docs.mailslurp.com/) - [Examples](https://github.com/mailslurp/examples) repository
 *
 * The version of the OpenAPI document: 6.5.2
 * Contact: contact@mailslurp.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { Sender } from './Sender';
import type { EmailRecipients } from './EmailRecipients';
/**
 * Sent email details
 * @export
 * @interface SentEmailDto
 */
export interface SentEmailDto {
    /**
     * ID of sent email
     * @type {string}
     * @memberof SentEmailDto
     */
    id: string;
    /**
     * User ID
     * @type {string}
     * @memberof SentEmailDto
     */
    userId: string;
    /**
     * Inbox ID email was sent from
     * @type {string}
     * @memberof SentEmailDto
     */
    inboxId: string;
    /**
     * Domain ID
     * @type {string}
     * @memberof SentEmailDto
     */
    domainId?: string | null;
    /**
     * Recipients email was sent to
     * @type {Array<string | null>}
     * @memberof SentEmailDto
     */
    to?: Array<string | null> | null;
    /**
     * Sent from address
     * @type {string}
     * @memberof SentEmailDto
     */
    from?: string | null;
    /**
     *
     * @type {Sender}
     * @memberof SentEmailDto
     */
    sender?: Sender | null;
    /**
     *
     * @type {EmailRecipients}
     * @memberof SentEmailDto
     */
    recipients?: EmailRecipients | null;
    /**
     *
     * @type {string}
     * @memberof SentEmailDto
     */
    replyTo?: string | null;
    /**
     *
     * @type {Array<string | null>}
     * @memberof SentEmailDto
     */
    cc?: Array<string | null> | null;
    /**
     *
     * @type {Array<string | null>}
     * @memberof SentEmailDto
     */
    bcc?: Array<string | null> | null;
    /**
     * Array of IDs of attachments that were sent with this email
     * @type {Array<string | null>}
     * @memberof SentEmailDto
     */
    attachments?: Array<string | null> | null;
    /**
     *
     * @type {string}
     * @memberof SentEmailDto
     */
    subject?: string | null;
    /**
     * MD5 Hash
     * @type {string}
     * @memberof SentEmailDto
     */
    bodyMD5Hash?: string | null;
    /**
     * Sent email body
     * @type {string}
     * @memberof SentEmailDto
     */
    body?: string | null;
    /**
     *
     * @type {Array<string | null>}
     * @memberof SentEmailDto
     */
    toContacts?: Array<string | null> | null;
    /**
     *
     * @type {string}
     * @memberof SentEmailDto
     */
    toGroup?: string | null;
    /**
     *
     * @type {string}
     * @memberof SentEmailDto
     */
    charset?: string | null;
    /**
     *
     * @type {boolean}
     * @memberof SentEmailDto
     */
    isHTML?: boolean | null;
    /**
     *
     * @type {Date}
     * @memberof SentEmailDto
     */
    sentAt: Date;
    /**
     *
     * @type {Date}
     * @memberof SentEmailDto
     */
    createdAt: Date;
    /**
     *
     * @type {Array<string | null>}
     * @memberof SentEmailDto
     */
    pixelIds?: Array<string | null> | null;
    /**
     * RFC 5322 Message-ID header value without angle brackets.
     * @type {string}
     * @memberof SentEmailDto
     */
    messageId?: string | null;
    /**
     *
     * @type {Array<string | null>}
     * @memberof SentEmailDto
     */
    messageIds?: Array<string | null> | null;
    /**
     *
     * @type {boolean}
     * @memberof SentEmailDto
     */
    virtualSend?: boolean | null;
    /**
     *
     * @type {string}
     * @memberof SentEmailDto
     */
    templateId?: string | null;
    /**
     *
     * @type {{ [key: string]: object | null; }}
     * @memberof SentEmailDto
     */
    templateVariables?: {
        [key: string]: object | null;
    } | null;
    /**
     *
     * @type {{ [key: string]: string | null; }}
     * @memberof SentEmailDto
     */
    headers?: {
        [key: string]: string | null;
    } | null;
    /**
     * MailSlurp thread ID for email chain that enables lookup for In-Reply-To and References fields.
     * @type {string}
     * @memberof SentEmailDto
     */
    threadId?: string | null;
    /**
     * An excerpt of the body of the email message for quick preview. Takes HTML content part if exists falls back to TEXT content part if not
     * @type {string}
     * @memberof SentEmailDto
     */
    bodyExcerpt?: string | null;
    /**
     * An excerpt of the body of the email message for quick preview. Takes TEXT content part if exists
     * @type {string}
     * @memberof SentEmailDto
     */
    textExcerpt?: string | null;
    /**
     * Parsed value of In-Reply-To header. A Message-ID in a thread.
     * @type {string}
     * @memberof SentEmailDto
     */
    inReplyTo?: string | null;
    /**
     * Is email favourited
     * @type {boolean}
     * @memberof SentEmailDto
     */
    favourite?: boolean | null;
    /**
     *
     * @type {boolean}
     * @memberof SentEmailDto
     */
    html?: boolean;
}
/**
 * Check if a given object implements the SentEmailDto interface.
 */
export declare function instanceOfSentEmailDto(value: object): value is SentEmailDto;
export declare function SentEmailDtoFromJSON(json: any): SentEmailDto;
export declare function SentEmailDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): SentEmailDto;
export declare function SentEmailDtoToJSON(json: any): SentEmailDto;
export declare function SentEmailDtoToJSONTyped(value?: SentEmailDto | null, ignoreDiscriminator?: boolean): any;
