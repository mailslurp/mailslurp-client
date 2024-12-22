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
 *
 * @export
 * @interface EmailThreadDto
 */
export interface EmailThreadDto {
    /**
     * ID of email thread
     * @type {string}
     * @memberof EmailThreadDto
     */
    id: string;
    /**
     * User ID
     * @type {string}
     * @memberof EmailThreadDto
     */
    userId: string;
    /**
     * Inbox ID
     * @type {string}
     * @memberof EmailThreadDto
     */
    inboxId?: string;
    /**
     * From sender
     * @type {string}
     * @memberof EmailThreadDto
     */
    from?: string;
    /**
     * To recipients
     * @type {Array<string>}
     * @memberof EmailThreadDto
     */
    to: Array<string>;
    /**
     * CC recipients
     * @type {Array<string>}
     * @memberof EmailThreadDto
     */
    cc?: Array<string>;
    /**
     * BCC recipients
     * @type {Array<string>}
     * @memberof EmailThreadDto
     */
    bcc?: Array<string>;
    /**
     *
     * @type {Sender}
     * @memberof EmailThreadDto
     */
    sender?: Sender | null;
    /**
     *
     * @type {EmailRecipients}
     * @memberof EmailThreadDto
     */
    recipients?: EmailRecipients | null;
    /**
     * Thread topic subject
     * @type {string}
     * @memberof EmailThreadDto
     */
    subject?: string;
    /**
     * Created at DateTime
     * @type {Date}
     * @memberof EmailThreadDto
     */
    createdAt: Date;
    /**
     * Updated at DateTime
     * @type {Date}
     * @memberof EmailThreadDto
     */
    updatedAt: Date;
}
/**
 * Check if a given object implements the EmailThreadDto interface.
 */
export declare function instanceOfEmailThreadDto(value: object): value is EmailThreadDto;
export declare function EmailThreadDtoFromJSON(json: any): EmailThreadDto;
export declare function EmailThreadDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailThreadDto;
export declare function EmailThreadDtoToJSON(json: any): EmailThreadDto;
export declare function EmailThreadDtoToJSONTyped(value?: EmailThreadDto | null, ignoreDiscriminator?: boolean): any;
