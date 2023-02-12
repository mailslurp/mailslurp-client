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
 * Missed email data
 * @export
 * @interface MissedEmailProjection
 */
export interface MissedEmailProjection {
    /**
     *
     * @type {string}
     * @memberof MissedEmailProjection
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof MissedEmailProjection
     */
    from?: string | null;
    /**
     *
     * @type {string}
     * @memberof MissedEmailProjection
     */
    userId?: string | null;
    /**
     *
     * @type {string}
     * @memberof MissedEmailProjection
     */
    subject?: string | null;
    /**
     *
     * @type {Date}
     * @memberof MissedEmailProjection
     */
    createdAt: Date;
}
export declare function MissedEmailProjectionFromJSON(json: any): MissedEmailProjection;
export declare function MissedEmailProjectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): MissedEmailProjection;
export declare function MissedEmailProjectionToJSON(value?: MissedEmailProjection | null): any;
