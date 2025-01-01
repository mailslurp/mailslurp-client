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
import { GuestPortalUserDto } from './';
/**
 *
 * @export
 * @interface GuestPortalUserCreateDto
 */
export interface GuestPortalUserCreateDto {
    /**
     *
     * @type {GuestPortalUserDto}
     * @memberof GuestPortalUserCreateDto
     */
    guest: GuestPortalUserDto;
    /**
     *
     * @type {string}
     * @memberof GuestPortalUserCreateDto
     */
    password: string;
}
export declare function GuestPortalUserCreateDtoFromJSON(json: any): GuestPortalUserCreateDto;
export declare function GuestPortalUserCreateDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): GuestPortalUserCreateDto;
export declare function GuestPortalUserCreateDtoToJSON(value?: GuestPortalUserCreateDto | null): any;