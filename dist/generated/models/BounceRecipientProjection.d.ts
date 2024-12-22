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
 * Bounced recipient
 * @export
 * @interface BounceRecipientProjection
 */
export interface BounceRecipientProjection {
    /**
     *
     * @type {Date}
     * @memberof BounceRecipientProjection
     */
    createdAt: Date;
    /**
     *
     * @type {string}
     * @memberof BounceRecipientProjection
     */
    sentEmailId?: string | null;
    /**
     *
     * @type {string}
     * @memberof BounceRecipientProjection
     */
    recipient: string;
    /**
     *
     * @type {string}
     * @memberof BounceRecipientProjection
     */
    action?: string | null;
    /**
     *
     * @type {string}
     * @memberof BounceRecipientProjection
     */
    bounceType?: string | null;
    /**
     *
     * @type {string}
     * @memberof BounceRecipientProjection
     */
    id?: string;
    /**
     *
     * @type {string}
     * @memberof BounceRecipientProjection
     */
    status?: string | null;
}
/**
 * Check if a given object implements the BounceRecipientProjection interface.
 */
export declare function instanceOfBounceRecipientProjection(value: object): value is BounceRecipientProjection;
export declare function BounceRecipientProjectionFromJSON(json: any): BounceRecipientProjection;
export declare function BounceRecipientProjectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): BounceRecipientProjection;
export declare function BounceRecipientProjectionToJSON(json: any): BounceRecipientProjection;
export declare function BounceRecipientProjectionToJSONTyped(value?: BounceRecipientProjection | null, ignoreDiscriminator?: boolean): any;
