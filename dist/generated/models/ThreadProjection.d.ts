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
 * A thread is a message thread created for a message received by an alias
 * @export
 * @interface ThreadProjection
 */
export interface ThreadProjection {
    /**
     * Name of thread
     * @type {string}
     * @memberof ThreadProjection
     */
    name?: string;
    /**
     * ID of email thread
     * @type {string}
     * @memberof ThreadProjection
     */
    id: string;
    /**
     * Thread subject
     * @type {string}
     * @memberof ThreadProjection
     */
    subject?: string;
    /**
     * Inbox ID
     * @type {string}
     * @memberof ThreadProjection
     */
    inboxId: string;
    /**
     * User ID
     * @type {string}
     * @memberof ThreadProjection
     */
    userId: string;
    /**
     * To recipients
     * @type {Array<string>}
     * @memberof ThreadProjection
     */
    to: Array<string>;
    /**
     * Created at DateTime
     * @type {Date}
     * @memberof ThreadProjection
     */
    createdAt: Date;
    /**
     * BCC recipients
     * @type {Array<string>}
     * @memberof ThreadProjection
     */
    bcc?: Array<string>;
    /**
     * CC recipients
     * @type {Array<string>}
     * @memberof ThreadProjection
     */
    cc?: Array<string>;
    /**
     * Updated at DateTime
     * @type {Date}
     * @memberof ThreadProjection
     */
    updatedAt: Date;
    /**
     * Alias ID
     * @type {string}
     * @memberof ThreadProjection
     */
    aliasId: string;
}
export declare function ThreadProjectionFromJSON(json: any): ThreadProjection;
export declare function ThreadProjectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ThreadProjection;
export declare function ThreadProjectionToJSON(value?: ThreadProjection | null): any;
