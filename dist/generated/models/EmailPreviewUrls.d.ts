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
 * URLs for email body
 * @export
 * @interface EmailPreviewUrls
 */
export interface EmailPreviewUrls {
    /**
     *
     * @type {string}
     * @memberof EmailPreviewUrls
     */
    rawSmtpMessageUrl: string;
    /**
     *
     * @type {string}
     * @memberof EmailPreviewUrls
     */
    plainHtmlBodyUrl: string;
    /**
     *
     * @type {string}
     * @memberof EmailPreviewUrls
     */
    origin: string;
}
export declare function EmailPreviewUrlsFromJSON(json: any): EmailPreviewUrls;
export declare function EmailPreviewUrlsFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailPreviewUrls;
export declare function EmailPreviewUrlsToJSON(value?: EmailPreviewUrls | null): any;
