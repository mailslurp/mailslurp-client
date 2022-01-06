/**
 * MailSlurp API
 * MailSlurp is an API for sending and receiving emails from dynamically allocated email addresses. It\'s designed for developers and QA teams to test applications, process inbound emails, send templated notifications, attachments, and more.  ## Resources  - [Homepage](https://www.mailslurp.com) - Get an [API KEY](https://app.mailslurp.com/sign-up/) - Generated [SDK Clients](https://www.mailslurp.com/docs/) - [Examples](https://github.com/mailslurp/examples) repository
 *
 * The version of the OpenAPI document: 6.5.2
 * Contact: contact@mailslurp.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Recipient } from './';
/**
 * The `To`,`CC`,`BCC` recipients stored in object form with email address and name accessible.
 * @export
 * @interface EmailRecipients
 */
export interface EmailRecipients {
    /**
     *
     * @type {Array<Recipient>}
     * @memberof EmailRecipients
     */
    to?: Array<Recipient>;
    /**
     *
     * @type {Array<Recipient>}
     * @memberof EmailRecipients
     */
    cc?: Array<Recipient>;
    /**
     *
     * @type {Array<Recipient>}
     * @memberof EmailRecipients
     */
    bcc?: Array<Recipient>;
}
export declare function EmailRecipientsFromJSON(json: any): EmailRecipients;
export declare function EmailRecipientsFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailRecipients;
export declare function EmailRecipientsToJSON(value?: EmailRecipients | null): any;
