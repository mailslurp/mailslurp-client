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
 * Inbox forwarder. Describes how an inbox will forward matching emails to designated recipients.
 * @export
 * @interface InboxForwarderDto
 */
export interface InboxForwarderDto {
    /**
     *
     * @type {string}
     * @memberof InboxForwarderDto
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof InboxForwarderDto
     */
    inboxId?: string | null;
    /**
     * Name of inbox forwarder
     * @type {string}
     * @memberof InboxForwarderDto
     */
    name?: string | null;
    /**
     * Which field to match against
     * @type {string}
     * @memberof InboxForwarderDto
     */
    field: InboxForwarderDtoFieldEnum;
    /**
     * Wild-card type pattern to apply to field
     * @type {string}
     * @memberof InboxForwarderDto
     */
    match: string;
    /**
     * Who to send forwarded email to
     * @type {Array<string>}
     * @memberof InboxForwarderDto
     */
    forwardToRecipients: Array<string>;
    /**
     *
     * @type {Date}
     * @memberof InboxForwarderDto
     */
    createdAt: Date;
}
/**
 * @export
 */
export declare const InboxForwarderDtoFieldEnum: {
    readonly RECIPIENTS: "RECIPIENTS";
    readonly SENDER: "SENDER";
    readonly SUBJECT: "SUBJECT";
    readonly ATTACHMENTS: "ATTACHMENTS";
};
export type InboxForwarderDtoFieldEnum = typeof InboxForwarderDtoFieldEnum[keyof typeof InboxForwarderDtoFieldEnum];
/**
 * Check if a given object implements the InboxForwarderDto interface.
 */
export declare function instanceOfInboxForwarderDto(value: object): value is InboxForwarderDto;
export declare function InboxForwarderDtoFromJSON(json: any): InboxForwarderDto;
export declare function InboxForwarderDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): InboxForwarderDto;
export declare function InboxForwarderDtoToJSON(json: any): InboxForwarderDto;
export declare function InboxForwarderDtoToJSONTyped(value?: InboxForwarderDto | null, ignoreDiscriminator?: boolean): any;
