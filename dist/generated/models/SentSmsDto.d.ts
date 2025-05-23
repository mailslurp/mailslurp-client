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
 * @interface SentSmsDto
 */
export interface SentSmsDto {
    /**
     *
     * @type {string}
     * @memberof SentSmsDto
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof SentSmsDto
     */
    userId: string;
    /**
     *
     * @type {string}
     * @memberof SentSmsDto
     */
    phoneNumber: string;
    /**
     *
     * @type {string}
     * @memberof SentSmsDto
     */
    fromNumber: string;
    /**
     *
     * @type {string}
     * @memberof SentSmsDto
     */
    toNumber: string;
    /**
     *
     * @type {string}
     * @memberof SentSmsDto
     */
    body: string;
    /**
     *
     * @type {string}
     * @memberof SentSmsDto
     */
    sid: string;
    /**
     *
     * @type {string}
     * @memberof SentSmsDto
     */
    replyToSid?: string;
    /**
     *
     * @type {string}
     * @memberof SentSmsDto
     */
    replyToId?: string;
    /**
     *
     * @type {Date}
     * @memberof SentSmsDto
     */
    createdAt: Date;
    /**
     *
     * @type {Date}
     * @memberof SentSmsDto
     */
    updatedAt: Date;
}
export declare function SentSmsDtoFromJSON(json: any): SentSmsDto;
export declare function SentSmsDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): SentSmsDto;
export declare function SentSmsDtoToJSON(value?: SentSmsDto | null): any;
