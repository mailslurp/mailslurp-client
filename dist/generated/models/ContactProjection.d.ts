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
 * @interface ContactProjection
 */
export interface ContactProjection {
    /**
     *
     * @type {string}
     * @memberof ContactProjection
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof ContactProjection
     */
    groupId?: string;
    /**
     *
     * @type {string}
     * @memberof ContactProjection
     */
    firstName?: string;
    /**
     *
     * @type {string}
     * @memberof ContactProjection
     */
    lastName?: string;
    /**
     *
     * @type {string}
     * @memberof ContactProjection
     */
    company?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof ContactProjection
     */
    emailAddresses?: Array<string>;
    /**
     *
     * @type {boolean}
     * @memberof ContactProjection
     */
    optOut?: boolean;
    /**
     *
     * @type {Date}
     * @memberof ContactProjection
     */
    createdAt: Date;
}
export declare function ContactProjectionFromJSON(json: any): ContactProjection;
export declare function ContactProjectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContactProjection;
export declare function ContactProjectionToJSON(value?: ContactProjection | null): any;
