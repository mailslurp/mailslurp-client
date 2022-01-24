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
/**
 * Options for the email envelope
 * @export
 * @interface SendSMTPEnvelopeOptions
 */
export interface SendSMTPEnvelopeOptions {
    /**
     *
     * @type {Array<string>}
     * @memberof SendSMTPEnvelopeOptions
     */
    rcptTo: Array<string>;
    /**
     *
     * @type {string}
     * @memberof SendSMTPEnvelopeOptions
     */
    mailFrom: string;
    /**
     *
     * @type {string}
     * @memberof SendSMTPEnvelopeOptions
     */
    data: string;
}
export declare function SendSMTPEnvelopeOptionsFromJSON(json: any): SendSMTPEnvelopeOptions;
export declare function SendSMTPEnvelopeOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SendSMTPEnvelopeOptions;
export declare function SendSMTPEnvelopeOptionsToJSON(value?: SendSMTPEnvelopeOptions | null): any;
