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
 * Email contact for address book
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
    emailAddress?: string | null;
    /**
     *
     * @type {Date}
     * @memberof ContactProjection
     */
    createdAt: Date;
    /**
     *
     * @type {Array<string>}
     * @memberof ContactProjection
     */
    emailAddresses?: Array<string> | null;
    /**
     *
     * @type {string}
     * @memberof ContactProjection
     */
    firstName?: string | null;
    /**
     *
     * @type {string}
     * @memberof ContactProjection
     */
    lastName?: string | null;
    /**
     *
     * @type {string}
     * @memberof ContactProjection
     */
    company?: string | null;
    /**
     *
     * @type {boolean}
     * @memberof ContactProjection
     */
    optOut?: boolean | null;
    /**
     *
     * @type {string}
     * @memberof ContactProjection
     */
    groupId?: string | null;
}
export declare function ContactProjectionFromJSON(json: any): ContactProjection;
export declare function ContactProjectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContactProjection;
export declare function ContactProjectionToJSON(value?: ContactProjection | null): any;
