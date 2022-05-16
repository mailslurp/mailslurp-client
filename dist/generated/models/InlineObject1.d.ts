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
 * Byte array request body
 * @export
 * @interface InlineObject1
 */
export interface InlineObject1 {
    /**
     *
     * @type {number}
     * @memberof InlineObject1
     */
    _short?: number;
    /**
     *
     * @type {string}
     * @memberof InlineObject1
     */
    _char?: string;
    /**
     *
     * @type {number}
     * @memberof InlineObject1
     */
    _int?: number;
    /**
     *
     * @type {number}
     * @memberof InlineObject1
     */
    _long?: number;
    /**
     *
     * @type {number}
     * @memberof InlineObject1
     */
    _float?: number;
    /**
     *
     * @type {number}
     * @memberof InlineObject1
     */
    _double?: number;
    /**
     *
     * @type {boolean}
     * @memberof InlineObject1
     */
    direct?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof InlineObject1
     */
    readOnly?: boolean;
}
export declare function InlineObject1FromJSON(json: any): InlineObject1;
export declare function InlineObject1FromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineObject1;
export declare function InlineObject1ToJSON(value?: InlineObject1 | null): any;
