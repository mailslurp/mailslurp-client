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
 *
 * @export
 * @interface InboxByEmailAddressResult
 */
export interface InboxByEmailAddressResult {
    /**
     *
     * @type {string}
     * @memberof InboxByEmailAddressResult
     */
    inboxId?: string;
    /**
     *
     * @type {boolean}
     * @memberof InboxByEmailAddressResult
     */
    _exists: boolean;
}
export declare function InboxByEmailAddressResultFromJSON(json: any): InboxByEmailAddressResult;
export declare function InboxByEmailAddressResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): InboxByEmailAddressResult;
export declare function InboxByEmailAddressResultToJSON(value?: InboxByEmailAddressResult | null): any;
