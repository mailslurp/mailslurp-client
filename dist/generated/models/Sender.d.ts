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
 * Sender object containing from email address and from personal name if provided in address
 * @export
 * @interface Sender
 */
export interface Sender {
    /**
     *
     * @type {string}
     * @memberof Sender
     */
    rawValue: string;
    /**
     *
     * @type {string}
     * @memberof Sender
     */
    emailAddress: string;
    /**
     *
     * @type {string}
     * @memberof Sender
     */
    name?: string;
}
/**
 * Check if a given object implements the Sender interface.
 */
export declare function instanceOfSender(value: object): value is Sender;
export declare function SenderFromJSON(json: any): Sender;
export declare function SenderFromJSONTyped(json: any, ignoreDiscriminator: boolean): Sender;
export declare function SenderToJSON(json: any): Sender;
export declare function SenderToJSONTyped(value?: Sender | null, ignoreDiscriminator?: boolean): any;
