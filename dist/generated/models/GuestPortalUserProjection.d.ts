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
 * Representation of a guest portal user
 * @export
 * @interface GuestPortalUserProjection
 */
export interface GuestPortalUserProjection {
    /**
     *
     * @type {Date}
     * @memberof GuestPortalUserProjection
     */
    createdAt: Date;
    /**
     *
     * @type {Date}
     * @memberof GuestPortalUserProjection
     */
    updatedAt: Date;
    /**
     *
     * @type {string}
     * @memberof GuestPortalUserProjection
     */
    userId: string;
    /**
     *
     * @type {string}
     * @memberof GuestPortalUserProjection
     */
    emailAddress?: string;
    /**
     *
     * @type {string}
     * @memberof GuestPortalUserProjection
     */
    inboxId?: string;
    /**
     *
     * @type {string}
     * @memberof GuestPortalUserProjection
     */
    portalId: string;
    /**
     *
     * @type {string}
     * @memberof GuestPortalUserProjection
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof GuestPortalUserProjection
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof GuestPortalUserProjection
     */
    username: string;
}
export declare function GuestPortalUserProjectionFromJSON(json: any): GuestPortalUserProjection;
export declare function GuestPortalUserProjectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): GuestPortalUserProjection;
export declare function GuestPortalUserProjectionToJSON(value?: GuestPortalUserProjection | null): any;