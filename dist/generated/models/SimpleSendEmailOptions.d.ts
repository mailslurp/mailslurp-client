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
 *
 * @export
 * @interface SimpleSendEmailOptions
 */
export interface SimpleSendEmailOptions {
    /**
     * ID of inbox to send from. If null an inbox will be created for sending
     * @type {string}
     * @memberof SimpleSendEmailOptions
     */
    senderId?: string;
    /**
     * Email address to send to
     * @type {string}
     * @memberof SimpleSendEmailOptions
     */
    to: string;
    /**
     * Body of the email message. Supports HTML
     * @type {string}
     * @memberof SimpleSendEmailOptions
     */
    body?: string;
    /**
     * Subject line of the email
     * @type {string}
     * @memberof SimpleSendEmailOptions
     */
    subject?: string;
}
export declare function SimpleSendEmailOptionsFromJSON(json: any): SimpleSendEmailOptions;
export declare function SimpleSendEmailOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SimpleSendEmailOptions;
export declare function SimpleSendEmailOptionsToJSON(value?: SimpleSendEmailOptions | null): any;
