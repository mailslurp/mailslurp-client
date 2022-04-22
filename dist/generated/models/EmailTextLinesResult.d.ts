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
 * Parsed text of an email
 * @export
 * @interface EmailTextLinesResult
 */
export interface EmailTextLinesResult {
    /**
     *
     * @type {Array<string>}
     * @memberof EmailTextLinesResult
     */
    lines: Array<string>;
    /**
     *
     * @type {string}
     * @memberof EmailTextLinesResult
     */
    body: string;
}
export declare function EmailTextLinesResultFromJSON(json: any): EmailTextLinesResult;
export declare function EmailTextLinesResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailTextLinesResult;
export declare function EmailTextLinesResultToJSON(value?: EmailTextLinesResult | null): any;
