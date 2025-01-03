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
 * @interface GuestPortalUserDto
 */
export interface GuestPortalUserDto {
    /**
     *
     * @type {string}
     * @memberof GuestPortalUserDto
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof GuestPortalUserDto
     */
    userId: string;
    /**
     *
     * @type {string}
     * @memberof GuestPortalUserDto
     */
    portalId: string;
    /**
     *
     * @type {string}
     * @memberof GuestPortalUserDto
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof GuestPortalUserDto
     */
    username: string;
    /**
     *
     * @type {string}
     * @memberof GuestPortalUserDto
     */
    emailAddress?: string;
    /**
     *
     * @type {string}
     * @memberof GuestPortalUserDto
     */
    inboxId?: string;
    /**
     *
     * @type {string}
     * @memberof GuestPortalUserDto
     */
    loginUrl: string;
    /**
     *
     * @type {Date}
     * @memberof GuestPortalUserDto
     */
    createdAt: Date;
    /**
     *
     * @type {Date}
     * @memberof GuestPortalUserDto
     */
    updatedAt: Date;
}
export declare function GuestPortalUserDtoFromJSON(json: any): GuestPortalUserDto;
export declare function GuestPortalUserDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): GuestPortalUserDto;
export declare function GuestPortalUserDtoToJSON(value?: GuestPortalUserDto | null): any;
