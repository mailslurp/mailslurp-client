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
 * Representation of a alias
 * @export
 * @interface AliasProjection
 */
export interface AliasProjection {
    /**
     *
     * @type {Date}
     * @memberof AliasProjection
     */
    createdAt: Date;
    /**
     *
     * @type {Date}
     * @memberof AliasProjection
     */
    updatedAt: Date;
    /**
     *
     * @type {string}
     * @memberof AliasProjection
     */
    inboxId: string;
    /**
     *
     * @type {string}
     * @memberof AliasProjection
     */
    userId: string;
    /**
     *
     * @type {string}
     * @memberof AliasProjection
     */
    emailAddress: string;
    /**
     *
     * @type {boolean}
     * @memberof AliasProjection
     */
    useThreads?: boolean;
    /**
     *
     * @type {string}
     * @memberof AliasProjection
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof AliasProjection
     */
    id: string;
}
export declare function AliasProjectionFromJSON(json: any): AliasProjection;
export declare function AliasProjectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): AliasProjection;
export declare function AliasProjectionToJSON(value?: AliasProjection | null): any;
