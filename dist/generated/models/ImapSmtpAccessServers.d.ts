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
import { ServerEndpoints } from './';
/**
 * IMAP and SMTP server endpoints for MailSlurp
 * @export
 * @interface ImapSmtpAccessServers
 */
export interface ImapSmtpAccessServers {
    /**
     *
     * @type {ServerEndpoints}
     * @memberof ImapSmtpAccessServers
     */
    imapServer: ServerEndpoints;
    /**
     *
     * @type {ServerEndpoints}
     * @memberof ImapSmtpAccessServers
     */
    secureImapServer: ServerEndpoints;
    /**
     *
     * @type {ServerEndpoints}
     * @memberof ImapSmtpAccessServers
     */
    smtpServer: ServerEndpoints;
    /**
     *
     * @type {ServerEndpoints}
     * @memberof ImapSmtpAccessServers
     */
    secureSmtpServer: ServerEndpoints;
}
export declare function ImapSmtpAccessServersFromJSON(json: any): ImapSmtpAccessServers;
export declare function ImapSmtpAccessServersFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImapSmtpAccessServers;
export declare function ImapSmtpAccessServersToJSON(value?: ImapSmtpAccessServers | null): any;
