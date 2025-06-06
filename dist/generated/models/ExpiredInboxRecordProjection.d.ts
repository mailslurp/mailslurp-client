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
 * Record of inbox expiration
 * @export
 * @interface ExpiredInboxRecordProjection
 */
export interface ExpiredInboxRecordProjection {
    /**
     *
     * @type {string}
     * @memberof ExpiredInboxRecordProjection
     */
    userId: string;
    /**
     *
     * @type {string}
     * @memberof ExpiredInboxRecordProjection
     */
    emailAddress: string;
    /**
     *
     * @type {Date}
     * @memberof ExpiredInboxRecordProjection
     */
    createdAt: Date;
    /**
     *
     * @type {string}
     * @memberof ExpiredInboxRecordProjection
     */
    id: string;
}
export declare function ExpiredInboxRecordProjectionFromJSON(json: any): ExpiredInboxRecordProjection;
export declare function ExpiredInboxRecordProjectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExpiredInboxRecordProjection;
export declare function ExpiredInboxRecordProjectionToJSON(value?: ExpiredInboxRecordProjection | null): any;
