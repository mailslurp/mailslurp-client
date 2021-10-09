/**
 * MailSlurp API
 * MailSlurp is an API for sending and receiving emails from dynamically allocated email addresses. It\'s designed for developers and QA teams to test applications, process inbound emails, send templated notifications, attachments, and more.  ## Resources  - [Homepage](https://www.mailslurp.com) - Get an [API KEY](https://app.mailslurp.com/sign-up/) - Generated [SDK Clients](https://www.mailslurp.com/docs/) - [Examples](https://github.com/mailslurp/examples) repository
 *
 * The version of the OpenAPI document: 6.5.2
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Sent email details
 * @export
 * @interface SentEmailDto
 */
export interface SentEmailDto {
    /**
     * Array of IDs of attachments that were sent with this email
     * @type {Array<string>}
     * @memberof SentEmailDto
     */
    attachments?: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof SentEmailDto
     */
    bcc?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof SentEmailDto
     */
    body?: string;
    /**
     * MD5 Hash
     * @type {string}
     * @memberof SentEmailDto
     */
    bodyMD5Hash?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof SentEmailDto
     */
    cc?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof SentEmailDto
     */
    charset?: string;
    /**
     *
     * @type {string}
     * @memberof SentEmailDto
     */
    from?: string;
    /**
     * ID of sent email
     * @type {string}
     * @memberof SentEmailDto
     */
    id?: string;
    /**
     * Inbox ID email was sent from
     * @type {string}
     * @memberof SentEmailDto
     */
    inboxId?: string;
    /**
     *
     * @type {boolean}
     * @memberof SentEmailDto
     */
    isHTML?: boolean;
    /**
     *
     * @type {Array<string>}
     * @memberof SentEmailDto
     */
    pixelIds?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof SentEmailDto
     */
    replyTo?: string;
    /**
     *
     * @type {Date}
     * @memberof SentEmailDto
     */
    sentAt: Date;
    /**
     *
     * @type {string}
     * @memberof SentEmailDto
     */
    subject?: string;
    /**
     * Recipients email was sent to
     * @type {Array<string>}
     * @memberof SentEmailDto
     */
    to?: Array<string>;
    /**
     * User ID
     * @type {string}
     * @memberof SentEmailDto
     */
    userId?: string;
}
export declare function SentEmailDtoFromJSON(json: any): SentEmailDto;
export declare function SentEmailDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): SentEmailDto;
export declare function SentEmailDtoToJSON(value?: SentEmailDto | null): any;
