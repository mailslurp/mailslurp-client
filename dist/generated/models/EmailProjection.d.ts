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
 * A compact representation of a full email. Used in list endpoints to keep response sizes low. Body and attachments are not included. To get all fields of the email use the `getEmail` method with the email projection's ID. See `EmailDto` for documentation on projection properties.
 * @export
 * @interface EmailProjection
 */
export interface EmailProjection {
    /**
     *
     * @type {string}
     * @memberof EmailProjection
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof EmailProjection
     */
    from?: string;
    /**
     *
     * @type {string}
     * @memberof EmailProjection
     */
    subject?: string;
    /**
     *
     * @type {string}
     * @memberof EmailProjection
     */
    inboxId: string;
    /**
     *
     * @type {Array<string>}
     * @memberof EmailProjection
     */
    attachments?: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof EmailProjection
     */
    to: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof EmailProjection
     */
    bcc?: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof EmailProjection
     */
    cc?: Array<string>;
    /**
     *
     * @type {Date}
     * @memberof EmailProjection
     */
    createdAt: Date;
    /**
     *
     * @type {boolean}
     * @memberof EmailProjection
     */
    teamAccess?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof EmailProjection
     */
    read?: boolean;
    /**
     *
     * @type {string}
     * @memberof EmailProjection
     */
    bodyMD5Hash?: string;
    /**
     *
     * @type {string}
     * @memberof EmailProjection
     */
    bodyExcerpt?: string;
}
export declare function EmailProjectionFromJSON(json: any): EmailProjection;
export declare function EmailProjectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailProjection;
export declare function EmailProjectionToJSON(value?: EmailProjection | null): any;
