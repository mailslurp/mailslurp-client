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
 * @interface SentEmailProjection
 */
export interface SentEmailProjection {
    /**
     *
     * @type {string}
     * @memberof SentEmailProjection
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof SentEmailProjection
     */
    from?: string;
    /**
     *
     * @type {string}
     * @memberof SentEmailProjection
     */
    subject?: string;
    /**
     *
     * @type {string}
     * @memberof SentEmailProjection
     */
    userId: string;
    /**
     *
     * @type {string}
     * @memberof SentEmailProjection
     */
    inboxId: string;
    /**
     *
     * @type {Array<string>}
     * @memberof SentEmailProjection
     */
    attachments: Array<string>;
    /**
     *
     * @type {Date}
     * @memberof SentEmailProjection
     */
    createdAt: Date;
    /**
     *
     * @type {Array<string>}
     * @memberof SentEmailProjection
     */
    to: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof SentEmailProjection
     */
    bcc: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof SentEmailProjection
     */
    cc: Array<string>;
    /**
     *
     * @type {string}
     * @memberof SentEmailProjection
     */
    bodyMD5Hash?: string;
    /**
     *
     * @type {boolean}
     * @memberof SentEmailProjection
     */
    virtualSend: boolean;
}
export declare function SentEmailProjectionFromJSON(json: any): SentEmailProjection;
export declare function SentEmailProjectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): SentEmailProjection;
export declare function SentEmailProjectionToJSON(value?: SentEmailProjection | null): any;
