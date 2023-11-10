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
 * Inbox forwarder event
 * @export
 * @interface InboxForwarderEventProjection
 */
export interface InboxForwarderEventProjection {
    /**
     *
     * @type {string}
     * @memberof InboxForwarderEventProjection
     */
    message?: string | null;
    /**
     *
     * @type {string}
     * @memberof InboxForwarderEventProjection
     */
    id?: string | null;
    /**
     *
     * @type {string}
     * @memberof InboxForwarderEventProjection
     */
    inboxId?: string | null;
    /**
     *
     * @type {string}
     * @memberof InboxForwarderEventProjection
     */
    emailId?: string | null;
    /**
     *
     * @type {string}
     * @memberof InboxForwarderEventProjection
     */
    userId?: string | null;
    /**
     *
     * @type {Date}
     * @memberof InboxForwarderEventProjection
     */
    createdAt: Date;
    /**
     *
     * @type {string}
     * @memberof InboxForwarderEventProjection
     */
    forwarderId?: string | null;
    /**
     *
     * @type {string}
     * @memberof InboxForwarderEventProjection
     */
    status?: InboxForwarderEventProjectionStatusEnum;
}
/**
 * @export
 * @enum {string}
 */
export declare enum InboxForwarderEventProjectionStatusEnum {
    SUCCESS = "SUCCESS",
    FAILURE = "FAILURE"
}
export declare function InboxForwarderEventProjectionFromJSON(json: any): InboxForwarderEventProjection;
export declare function InboxForwarderEventProjectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): InboxForwarderEventProjection;
export declare function InboxForwarderEventProjectionToJSON(value?: InboxForwarderEventProjection | null): any;
