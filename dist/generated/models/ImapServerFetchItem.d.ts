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
/**
 * IMAP fetch content in raw format
 * @export
 * @interface ImapServerFetchItem
 */
export interface ImapServerFetchItem {
    /**
     * Content of the email
     * @type {string}
     * @memberof ImapServerFetchItem
     */
    content: string;
    /**
     * ID of the email
     * @type {string}
     * @memberof ImapServerFetchItem
     */
    id: string;
    /**
     * UID of the email
     * @type {number}
     * @memberof ImapServerFetchItem
     */
    uid: number;
    /**
     * Sequence number of the email
     * @type {number}
     * @memberof ImapServerFetchItem
     */
    seqNum: number;
    /**
     * Read status of the email
     * @type {boolean}
     * @memberof ImapServerFetchItem
     */
    read: boolean;
}
export declare function ImapServerFetchItemFromJSON(json: any): ImapServerFetchItem;
export declare function ImapServerFetchItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImapServerFetchItem;
export declare function ImapServerFetchItemToJSON(value?: ImapServerFetchItem | null): any;
