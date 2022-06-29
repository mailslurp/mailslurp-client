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
 * Collection of items
 * @export
 * @interface SendWithQueueResult
 */
export interface SendWithQueueResult {
    /**
     *
     * @type {string}
     * @memberof SendWithQueueResult
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof SendWithQueueResult
     */
    userId: string;
    /**
     *
     * @type {string}
     * @memberof SendWithQueueResult
     */
    subject?: string;
    /**
     *
     * @type {string}
     * @memberof SendWithQueueResult
     */
    inboxId?: string;
    /**
     *
     * @type {string}
     * @memberof SendWithQueueResult
     */
    headerId: string;
    /**
     *
     * @type {boolean}
     * @memberof SendWithQueueResult
     */
    delivered: boolean;
    /**
     *
     * @type {string}
     * @memberof SendWithQueueResult
     */
    exceptionName?: string;
    /**
     *
     * @type {string}
     * @memberof SendWithQueueResult
     */
    message?: string;
    /**
     *
     * @type {Date}
     * @memberof SendWithQueueResult
     */
    createdAt: Date;
    /**
     *
     * @type {Date}
     * @memberof SendWithQueueResult
     */
    updatedAt: Date;
}
export declare function SendWithQueueResultFromJSON(json: any): SendWithQueueResult;
export declare function SendWithQueueResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): SendWithQueueResult;
export declare function SendWithQueueResultToJSON(value?: SendWithQueueResult | null): any;
