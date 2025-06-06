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
 * Bounced email event
 * @export
 * @interface BounceProjection
 */
export interface BounceProjection {
    /**
     *
     * @type {string}
     * @memberof BounceProjection
     */
    sender: string;
    /**
     *
     * @type {Date}
     * @memberof BounceProjection
     */
    createdAt: Date;
    /**
     *
     * @type {string}
     * @memberof BounceProjection
     */
    bounceType?: string | null;
    /**
     *
     * @type {string}
     * @memberof BounceProjection
     */
    bounceMta?: string | null;
    /**
     *
     * @type {string}
     * @memberof BounceProjection
     */
    subject?: string | null;
    /**
     *
     * @type {string}
     * @memberof BounceProjection
     */
    id?: string;
}
export declare function BounceProjectionFromJSON(json: any): BounceProjection;
export declare function BounceProjectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): BounceProjection;
export declare function BounceProjectionToJSON(value?: BounceProjection | null): any;
