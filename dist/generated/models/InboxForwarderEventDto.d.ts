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
/**
 * Inbox forwarder event. Describes how an email was handled by an inbox forwarder.
 * @export
 * @interface InboxForwarderEventDto
 */
export interface InboxForwarderEventDto {
    /**
     *
     * @type {string}
     * @memberof InboxForwarderEventDto
     */
    id?: string | null;
    /**
     *
     * @type {string}
     * @memberof InboxForwarderEventDto
     */
    inboxId?: string | null;
    /**
     *
     * @type {string}
     * @memberof InboxForwarderEventDto
     */
    emailId?: string | null;
    /**
     *
     * @type {string}
     * @memberof InboxForwarderEventDto
     */
    sentId?: string | null;
    /**
     *
     * @type {string}
     * @memberof InboxForwarderEventDto
     */
    userId?: string | null;
    /**
     *
     * @type {string}
     * @memberof InboxForwarderEventDto
     */
    forwarderId?: string | null;
    /**
     *
     * @type {string}
     * @memberof InboxForwarderEventDto
     */
    message?: string | null;
    /**
     *
     * @type {string}
     * @memberof InboxForwarderEventDto
     */
    status?: InboxForwarderEventDtoStatusEnum;
    /**
     *
     * @type {Date}
     * @memberof InboxForwarderEventDto
     */
    createdAt: Date;
}
/**
 * @export
 * @enum {string}
 */
export declare enum InboxForwarderEventDtoStatusEnum {
    SUCCESS = "SUCCESS",
    FAILURE = "FAILURE"
}
export declare function InboxForwarderEventDtoFromJSON(json: any): InboxForwarderEventDto;
export declare function InboxForwarderEventDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): InboxForwarderEventDto;
export declare function InboxForwarderEventDtoToJSON(value?: InboxForwarderEventDto | null): any;
