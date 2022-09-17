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
 * Options for forwarding an email
 * @export
 * @interface ForwardEmailOptions
 */
export interface ForwardEmailOptions {
    /**
     * To recipients for forwarded email
     * @type {Array<string>}
     * @memberof ForwardEmailOptions
     */
    to: Array<string>;
    /**
     * Subject for forwarded email
     * @type {string}
     * @memberof ForwardEmailOptions
     */
    subject?: string | null;
    /**
     * Optional cc recipients
     * @type {Array<string>}
     * @memberof ForwardEmailOptions
     */
    cc?: Array<string> | null;
    /**
     * Optional bcc recipients
     * @type {Array<string>}
     * @memberof ForwardEmailOptions
     */
    bcc?: Array<string> | null;
    /**
     * Optional from override
     * @type {string}
     * @memberof ForwardEmailOptions
     */
    from?: string | null;
    /**
     * Optionally use inbox name as display name for sender email address
     * @type {boolean}
     * @memberof ForwardEmailOptions
     */
    useInboxName?: boolean | null;
}
export declare function ForwardEmailOptionsFromJSON(json: any): ForwardEmailOptions;
export declare function ForwardEmailOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ForwardEmailOptions;
export declare function ForwardEmailOptionsToJSON(value?: ForwardEmailOptions | null): any;
