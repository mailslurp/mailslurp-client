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
 *
 * @export
 * @interface WaitForSingleSmsOptions
 */
export interface WaitForSingleSmsOptions {
    /**
     *
     * @type {string}
     * @memberof WaitForSingleSmsOptions
     */
    phoneNumberId: string;
    /**
     *
     * @type {number}
     * @memberof WaitForSingleSmsOptions
     */
    timeout: number;
    /**
     *
     * @type {boolean}
     * @memberof WaitForSingleSmsOptions
     */
    unreadOnly?: boolean;
    /**
     *
     * @type {Date}
     * @memberof WaitForSingleSmsOptions
     */
    before?: Date;
    /**
     *
     * @type {Date}
     * @memberof WaitForSingleSmsOptions
     */
    since?: Date;
    /**
     *
     * @type {string}
     * @memberof WaitForSingleSmsOptions
     */
    sortDirection?: WaitForSingleSmsOptionsSortDirectionEnum;
    /**
     *
     * @type {number}
     * @memberof WaitForSingleSmsOptions
     */
    delay?: number;
}
/**
 * @export
 * @enum {string}
 */
export declare enum WaitForSingleSmsOptionsSortDirectionEnum {
    ASC = "ASC",
    DESC = "DESC"
}
export declare function WaitForSingleSmsOptionsFromJSON(json: any): WaitForSingleSmsOptions;
export declare function WaitForSingleSmsOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): WaitForSingleSmsOptions;
export declare function WaitForSingleSmsOptionsToJSON(value?: WaitForSingleSmsOptions | null): any;
