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
 * Options for creating an inbox forwarder
 * @export
 * @interface CreateInboxForwarderOptions
 */
export interface CreateInboxForwarderOptions {
    /**
     * Field to match against to trigger inbox forwarding for inbound email
     * @type {string}
     * @memberof CreateInboxForwarderOptions
     */
    field?: CreateInboxForwarderOptionsFieldEnum;
    /**
     * Email addresses to forward an email to if it matches the field and match criteria of the forwarder
     * @type {Array<string>}
     * @memberof CreateInboxForwarderOptions
     */
    forwardToRecipients?: Array<string>;
    /**
     * String or wildcard style match for field specified when evaluating forwarding rules
     * @type {string}
     * @memberof CreateInboxForwarderOptions
     */
    match?: string;
}
/**
 * @export
 * @enum {string}
 */
export declare enum CreateInboxForwarderOptionsFieldEnum {
    RECIPIENTS = "RECIPIENTS",
    SENDER = "SENDER",
    SUBJECT = "SUBJECT",
    ATTACHMENTS = "ATTACHMENTS"
}
export declare function CreateInboxForwarderOptionsFromJSON(json: any): CreateInboxForwarderOptions;
export declare function CreateInboxForwarderOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateInboxForwarderOptions;
export declare function CreateInboxForwarderOptionsToJSON(value?: CreateInboxForwarderOptions | null): any;
