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
 *
 * @export
 * @interface PlusAddressProjection
 */
export interface PlusAddressProjection {
    /**
     *
     * @type {Date}
     * @memberof PlusAddressProjection
     */
    createdAt: Date;
    /**
     *
     * @type {Date}
     * @memberof PlusAddressProjection
     */
    updatedAt: Date;
    /**
     *
     * @type {string}
     * @memberof PlusAddressProjection
     */
    userId: string;
    /**
     *
     * @type {string}
     * @memberof PlusAddressProjection
     */
    inboxId: string;
    /**
     *
     * @type {string}
     * @memberof PlusAddressProjection
     */
    plusAddress: string;
    /**
     *
     * @type {string}
     * @memberof PlusAddressProjection
     */
    fullAddress: string;
    /**
     *
     * @type {string}
     * @memberof PlusAddressProjection
     */
    id: string;
}
export declare function PlusAddressProjectionFromJSON(json: any): PlusAddressProjection;
export declare function PlusAddressProjectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): PlusAddressProjection;
export declare function PlusAddressProjectionToJSON(value?: PlusAddressProjection | null): any;
